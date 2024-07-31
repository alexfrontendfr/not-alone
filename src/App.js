import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Form from "./components/Form";
import Match from "./components/Match";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";
import Dashboard from "./components/Dashboard";

function App() {
  const { scrollYProgress } = useScroll();
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    ["#4A00E0", "#8E2DE2", "#4A00E0", "#8E2DE2", "#4A00E0"]
  );

  return (
    <Router>
      <motion.div
        style={{ backgroundColor }}
        className="App min-h-screen flex flex-col"
      >
        <Navbar />
        <motion.main
          className="flex-grow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/form" element={<Form />} />
            <Route path="/match" element={<Match />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
        </motion.main>
        <Footer />
      </motion.div>
    </Router>
  );
}

export default App;
