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

      {window.location.pathname !== "/Registration" && <Header />}



function App() {
  const Registrationpage = window.location.pathname === "/Registration";

  return (
    <Router>
      {!Registrationpage && <Header />}
>>>>>>> c6d9cb311cb0c23b56fb0322b74af1ae867d8bee
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/announcement" element={<Announcement />} />
        <Route path="/contact" element={<Contact />} />
<<<<<<< HEAD
        <Route path="/login" element={<Login />} />
        <Route path="/Registration" element={<Registration />} />
      </Routes>

      {!Loginpage && !RegistrationPage && <Footer />}
=======
        <Route path="/Registration" element={<Registration />} />
      </Routes>
      {!Registrationpage && <Footer />}
>>>>>>> c6d9cb311cb0c23b56fb0322b74af1ae867d8bee
    </Router>
  );
}

export default App;
