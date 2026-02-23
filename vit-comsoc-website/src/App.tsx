import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import EventsPage from './pages/EventsPage';
import AboutUsPage from './pages/AboutUsPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="main-scroll-container">
        <div className="min-h-screen flex flex-col bg-transparent transition-colors duration-500 overflow-x-hidden max-w-full position-relative">
          {/* Wrapper so Navbar + Main + Footer all stack above the fixed overlay */}
          <div className="relative z-10 flex flex-col min-h-screen flex-1 bg-transparent overflow-x-hidden max-w-full position-relative">
            <Navbar />
            <CustomCursor />
            <main className="flex-grow bg-transparent">
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/about" element={<AboutUsPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
