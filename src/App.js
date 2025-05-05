import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import Services from './components/services/Services';
import Projects from './components/projects/Projects';
import Testimonials from './components/testimonials/Testimonials';
import Counts from './components/counts/Counts';
import WhatWeOffer from './components/whatweoffer/WhatWeOffer';
import About from './pages/about/About';
import NotFound from './components/notfound/NotFound';
import ProjectDetails from './pages/about/project/ProjectDetails';
import AllProjects from '../src/pages/about/project/AllProjects';
import AllServices from './pages/services/AllServices';
import Contact from './pages/about/contact/Contact';
import Products from './pages/products/Products';

const Home = () => (
  <>
    <Hero />
    <Counts />
    <WhatWeOffer />
    <Services />
    <Projects />
    <Testimonials />
  </>
);

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<AllProjects />} />
        <Route path="/services" element={<AllServices />} />
        <Route path="/products" element={<Products />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer /> {/* Always renders the Footer */}
    </>
  );
};

export default App;
