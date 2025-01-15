import './index.css'; // Tailwind CSS import
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/home';
import About from './components/pages/about';
import Services from './components/pages/services';
import Blog from './components/pages/blog';
import Announcement from './components/pages/announcement';
import Contact from './components/pages/contact';




function App() {
  return (
    <div>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/announcement' element={<Announcement />} />
          <Route path='/contact' element={<Contact />} />


        </Routes>
      </Router>
    </div>
  );
}

export default App;
