import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Blog from "./pages/blog";
import Announcement from "./pages/announcement";
import Contact from "./pages/contact";
import Header from "./components/header";
import Footer from "./components/footer";
import Registration from "./pages/registration";
import MainDashboard from "./pages/dashboard";
import DashboardContactUsPage from "./pages/dashboard/contactus";
import DashboardTeamPage from "./pages/dashboard/team";
import DashboardUsersPage from "./pages/dashboard/user";
import DashboardAnnouncementpage from "./pages/dashboard/announcement";
import DashboardBlogPage from "./pages/dashboard/blog";
import ClientsDashboard from "./pages/dashboard/clients";
import DashboardClientsadspage from "./pages/dashboard/clientAds";
import DashboardCompaniesPage from "./pages/dashboard/Companies";
import Login from "./pages/login";

function App() {
  const isExactRegistrationPage =
    window.location.pathname.toLowerCase() === "/registration";

  return (
    <Router>
      {!isExactRegistrationPage && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/announcement" element={<Announcement />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />

        {/* Dashboard Routes */}

        <Route path="/dashboard" element={<MainDashboard />}>
          <Route index element={<DashboardAnnouncementpage />} />
          <Route path="announcement" element={<DashboardAnnouncementpage />} />
          <Route path="blog" element={<DashboardBlogPage />} />
          <Route path="clients" element={<ClientsDashboard />} />
          <Route path="clientads" element={<DashboardClientsadspage />} />
          <Route path="companies" element={<DashboardCompaniesPage />} />
          <Route path="contactus" element={<DashboardContactUsPage />} />
          <Route path="team" element={<DashboardTeamPage />} />
          <Route path="users" element={<DashboardUsersPage />} />
        </Route>
      </Routes>
      {!isExactRegistrationPage && <Footer />}
    </Router>
  );
}

export default App;
