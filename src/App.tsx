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

function App() {
  const isExactRegistrationPage =
    window.location.pathname.toLowerCase() === "/registration";
  // Sirf "/Registration" par header aur footer hide honge

  return (
    <Router>
      {!isExactRegistrationPage && <Header />}{" "}
      {/* Registration page pe header hide hoga */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/announcement" element={<Announcement />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
      {!isExactRegistrationPage && <Footer />}{" "}
      {/* Registration page pe footer bhi hide hoga */}
    </Router>
  );
}

export default App;
