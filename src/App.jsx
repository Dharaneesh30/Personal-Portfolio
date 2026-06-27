import { AnimatePresence } from "framer-motion";
import { Suspense, lazy, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import ParticleBackground from "./components/ParticleBackground";

const StartPage = lazy(() => import("./pages/StartPage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const JourneyPage = lazy(() => import("./pages/JourneyPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

function PageShell({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-bg text-text">
      <ParticleBackground />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <>
      <CustomCursor />
      <Navbar />
      <Suspense
        fallback={
          <PageShell>
            <div className="grid min-h-screen place-items-center">
              <div className="armor-panel border border-gold/25 bg-panel/80 px-6 py-4 font-heading text-sm uppercase tracking-[0.2em] text-gold">
                Loading Interface...
              </div>
            </div>
          </PageShell>
        }
      >
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageShell>
                  <StartPage />
                </PageShell>
              }
            />
            <Route
              path="/home"
              element={
                <PageShell>
                  <HomePage />
                </PageShell>
              }
            />
            <Route
              path="/projects"
              element={
                <PageShell>
                  <ProjectsPage />
                </PageShell>
              }
            />
            <Route
              path="/journey"
              element={
                <PageShell>
                  <JourneyPage />
                </PageShell>
              }
            />
            <Route
              path="/contact"
              element={
                <PageShell>
                  <ContactPage />
                </PageShell>
              }
            />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </>
  );
}
