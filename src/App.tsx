import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Background from "./components/Background";
import MochiAssistant from "./components/MochiAssistant";

// Page imports
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Skills from "./pages/Skills";
import Achievements from "./pages/Achievements";
import Certifications from "./pages/Certifications";
import Education from "./pages/Education";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      {/* Visual Ambient Sakura Background */}
      <Background />

      {/* Primary Container View wrapped in Glassmorphic Nav Layout */}
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Wildcard Route - Redirect to Splash page */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>

      {/* Cute Floating AI Assistant (Mochi the stardust bunny) */}
      <MochiAssistant />
    </Router>
  );
}
