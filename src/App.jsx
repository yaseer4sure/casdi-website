import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, Link, useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import HomeSection from "./components/sections/Home/HomeSection.jsx";
import AboutSection from "./components/sections/About/AboutSection.jsx";
import Approach from "./components/sections/About/approach.jsx";
import WorkSection from "./components/sections/Works/WorkSection.jsx";
import OurWorks from "./components/sections/Works/OurWorks.jsx";
import Impacts from "./components/sections/Works/Impacts.jsx";
import PipelineProjects from "./components/sections/Works/Pipelineprojects.jsx";
import OurTeam from "./components/sections/Team/ourTeam.jsx";
import GetInvolvedSection from "./components/sections/GetInvolve/GetInvolvedSection.jsx";
import ResourcesSection from "./components/sections/Resources/ResourcesSection.jsx";
import ContactSection from "./components/sections/ContactSection.jsx";
function AppContent() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); document.getElementById("main-content")?.focus({ preventScroll: true }); }, [pathname]);
  return <div className="site-app"><Navbar /><main id="main-content" tabIndex={-1}><Routes>
    <Route path="/" element={<HomeSection />} /><Route path="/about" element={<AboutSection />} />
    <Route path="/about-history" element={<Approach />} /><Route path="/work" element={<WorkSection />} />
    <Route path="/work-programs" element={<OurWorks />} /><Route path="/work-projects" element={<Impacts />} />
    <Route path="/work-research" element={<PipelineProjects />} /><Route path="/projects" element={<OurTeam />} />
    <Route path="/get-involved" element={<GetInvolvedSection />} /><Route path="/resources" element={<ResourcesSection />} />
    <Route path="/contact" element={<ContactSection />} /><Route path="/resources-library" element={<Navigate to="/resources#publications" replace />} />
    <Route path="/resources-media" element={<Navigate to="/resources#gallery" replace />} /><Route path="/impact" element={<Navigate to="/work-projects" replace />} />
    <Route path="/involved-partner" element={<Navigate to="/get-involved?tab=partner" replace />} /><Route path="/involved-support" element={<Navigate to="/get-involved?tab=donates" replace />} />
    <Route path="*" element={<section className="section-shell missing-page"><p className="eyebrow">PAGE NOT FOUND</p><h1>Let’s get you back on track.</h1><Link className="button button-green" to="/">Back to home</Link></section>} />
  </Routes></main><Footer /></div>;
}
export default function App() { return <BrowserRouter><AppContent /></BrowserRouter>; }
