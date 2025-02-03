import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Blog from "./pages/blog";
import Announcement from "./pages/announcement";
import Contact from "./pages/contact";
import Header from "./components/header";
import Footer from "./components/footer";
import Login from "./pages/login";
import Registration from "./pages/registration";

function App() {
  const Loginpage = window.location.pathname === "/login";
  const RegistrationPage = window.location.pathname === "/Registration";

  return (
    <Router>
      {!Loginpage && !RegistrationPage && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/announcement" element={<Announcement />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Registration" element={<Registration />} />
      </Routes>

      {!Loginpage && !RegistrationPage && <Footer />}
    </Router>
  );
}

export default App;
