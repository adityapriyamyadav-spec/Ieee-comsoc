import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import EventsPage from './pages/EventsPage';
import AboutUsPage from './pages/AboutUsPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-transparent transition-colors duration-500">
        {/* Fixed linear gradient in dark mode — sits behind all content */}
        <div
          className="fixed inset-0 z-0 pointer-events-none opacity-0 dark:opacity-100 transition-opacity duration-500"
          style={{ background: 'linear-gradient(to bottom right, #020617, #0f172a, #020617)' }}
          aria-hidden
        />
        {/* Wrapper so Navbar + Main + Footer all stack above the fixed overlay */}
        <div className="relative z-10 flex flex-col min-h-screen flex-1 bg-transparent">
          <Navbar />
          <main className="flex-grow bg-transparent">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/about" element={<AboutUsPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
