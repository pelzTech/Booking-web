import React from "react";
import "./css/style.css";
import "./css/bootstrap.min.css";
import "./css/animate.css";
import "./css/animate.min.css";
import "./App.css";
import Header from "./components/common/Header";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {
  Home,
  Booking,
  AboutUs,
  Contact,
  PageNotFound,
  Room,
  Services,
  Blog,
  Team,
  Testimonial,
} from "./pages/index";
import Footer from "./components/common/Footer";
import OurStory from "./components/OurStory";
import MeetTheTeam from "./components/MeetTheTeam";
import Careers from "./components/Careers";
import FAQs from "./components/FAQs";
import RoomDetails from './components/home/RommDetails'

export default function App() {
  return (
    <>
      <div>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/team" element={<Team />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<PageNotFound />} />
            <Route path="/rooms" element={<Room />} />
            <Route path="/room-details" element={<RoomDetails />} />
            <Route path="/services" element={<Services />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/meet-the-team" element={<MeetTheTeam />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/faqs" element={<FAQs />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}
