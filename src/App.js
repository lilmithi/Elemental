import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import BenefitsPage from "./pages/Benefits/BenefitsPage";
import ContactPage from "./pages/Contacts/ContactPage";
import FaqPage from "./pages/Faq/FaqPage";
import RetreatsPage from "./pages/Retreats/RetreatsPage";
import TeamPage from "./pages/Team/TeamPage";
import TestimonialsPage from "./pages/Testimonials/TestimonialsPage";
import Error404 from "./pages/Error/Error404";
import OurModelPage from "./pages/OurModel/OurModelPage";

function App() {
  return (
    <div className="3xl:container mx-auto">
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="benefits" element={<BenefitsPage />} />
        <Route path="contacts" element={<ContactPage />} />
        <Route path="faq" element={<FaqPage />} />
        <Route path="retreats" element={<RetreatsPage />} />
        <Route path="team" element={<TeamPage />} />
        <Route path="model" element={<OurModelPage />} />
        <Route path="testimonials" element={<TestimonialsPage />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
