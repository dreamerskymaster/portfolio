import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import { SpeedInsights } from '@vercel/speed-insights/react';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const Hobbies = lazy(() => import('./pages/Hobbies'));
const Writings = lazy(() => import('./pages/Writings'));
const Contact = lazy(() => import('./pages/Contact'));
const Certifications = lazy(() => import('./pages/Certifications'));
const Documents = lazy(() => import('./pages/Documents'));
const Resume = lazy(() => import('./pages/Resume'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Utils
import { initializeTheme } from './utils/theme';

function App() {
  // Initialize theme on app load
  React.useEffect(() => {
    initializeTheme();
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <div className="App min-h-screen bg-bg transition-colors duration-300">
          <Header />
          <main className="flex-1">
            <AnimatePresence mode="wait">
              <Suspense fallback={
                <div className="min-h-screen flex items-center justify-center bg-bg">
                  <div className="text-center">
                    <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-muted-foreground">Loading ManuFX Portfolio...</p>
                  </div>
                </div>
              }>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/projects/:slug" element={<ProjectDetail />} />
                  <Route path="/hobbies" element={<Hobbies />} />
                  <Route path="/writings" element={<Writings />} />
                  <Route path="/certifications" element={<Certifications />} />
                  <Route path="/documents" element={<Documents />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/resume" element={<Resume />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </AnimatePresence>
          </main>
          <Footer />
          <SpeedInsights />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;