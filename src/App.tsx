import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from "@vercel/analytics/react";

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Background from './components/Background';
import PreLoader from './components/PreLoader';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';
import CustomCursor from './components/CustomCursor';

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const Hobbies = lazy(() => import('./pages/Hobbies'));
const Writings = lazy(() => import('./pages/Writings'));
const Contact = lazy(() => import('./pages/Contact'));
const Certifications = lazy(() => import('./pages/Certifications'));
const CareerArtifacts = lazy(() => import('./pages/CareerArtifacts'));
const Resume = lazy(() => import('./pages/Resume'));
const Presentation = lazy(() => import('./internship/Presentation'));
const NotFound = lazy(() => import('./pages/NotFound'));

import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <HelmetProvider>
          <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only fixed top-4 left-4 z-[100] bg-primary text-primary-contrast px-4 py-2 rounded-lg font-bold shadow-2xl transition-all"
            >
              Skip to content
            </a>
            <PreLoader />
            <ScrollToTop />
            <Background />
            <ScrollProgress />
            <CustomCursor />
            <div className="flex flex-col min-h-screen transition-colors duration-300">
              <Header />
              <main id="main-content" className="flex-1 outline-none" tabIndex={-1}>
                <AnimatedRoutes />
              </main>
              <Footer />
              <SpeedInsights />
              <Analytics />
            </div>
          </Router>
        </HelmetProvider >
      </ErrorBoundary >
    </ThemeProvider>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center bg-bg">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading ManuFX Portfolio...</p>
          </div>
        </div>
      }>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/writings" element={<Writings />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/career-artifacts" element={<CareerArtifacts />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/presentation" element={<Presentation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

export default App;