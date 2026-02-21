import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import EventsPage from './pages/EventsPage';
import AboutUsPage from './pages/AboutUsPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col transition-colors duration-500">
        {/* Fixed linear gradient in dark mode — no animation */}
        <div
          className="fixed inset-0 z-0 pointer-events-none opacity-0 dark:opacity-100 transition-opacity duration-500"
          style={{ background: 'linear-gradient(to bottom right, #020617, #0f172a, #020617)' }}
          aria-hidden
        />
        <Navbar />
        <main className="relative z-10 flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/about" element={<AboutUsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
