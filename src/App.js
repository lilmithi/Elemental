import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import BenefitsPage from "./pages/Benefits/BenefitsPage";
import ContactPage from "./pages/Contacts/ContactPage";
import FaqPage from "./pages/Faq/FaqPage";
import RetreatsPage from "./pages/Retreats/RetreatsPage";
import TeamPage from "./pages/Team/TeamPage";
import TestimonialsPage from "./pages/Testimonials/TestimonialsPage";
import Error404 from "./pages/Error/Error404";

function App() {
  return (
    <div className="">
      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/benefits">Benefits</Link>
      </nav> */}
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="benefits" element={<BenefitsPage />} />
        <Route path="contacts" element={<ContactPage />} />
        <Route path="faq" element={<FaqPage />} />
        <Route path="retreats" element={<RetreatsPage />} />
        <Route path="teams" element={<TeamPage />} />
        <Route path="testimonials" element={<TestimonialsPage />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
