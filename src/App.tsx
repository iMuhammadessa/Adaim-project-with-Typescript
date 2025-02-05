import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
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
  const location = useLocation(); // Get current location

  const loginPage = location.pathname === "/login";
  const registrationPage = location.pathname === "/registration";

  return (
    <Router>
      {/* Conditionally render Header and Footer */}
      {!loginPage && !registrationPage && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/announcement" element={<Announcement />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>

      {/* Conditionally render Footer */}
      {!loginPage && !registrationPage && <Footer />}
    </Router>
  );
}

export default App;
