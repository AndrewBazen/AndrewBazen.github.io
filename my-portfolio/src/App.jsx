import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import DevLog from './components/DevLog';
import BlogPost from './components/BlogPost';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Also handle any hash in URL
    if (window.location.hash) {
      window.history.replaceState(null, null, window.location.pathname);
    }
  }, []);

  return (
    <Router>
      <div className="bg-gray-900 text-gray-100 leading-relaxed antialiased">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/devlog" element={<DevLog />} />
          <Route path="/devlog/:slug" element={<BlogPost />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}
