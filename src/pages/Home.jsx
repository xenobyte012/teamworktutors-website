import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../sections/Hero'
import AboutSection from '../sections/AboutSection';
import Footer from '../components/Footer'
import TutorsSection from '../sections/TutorsSection';
import CTASection from '../sections/CTASection';
import SubjectsSection from '../sections/SubjectsSection';
import FeesSection from '../sections/FeesSection';

export default function Home() {
  return (
    <div className="">
          
          <Hero />
          <TutorsSection />
          <SubjectsSection />
          <FeesSection />
          <CTASection />
          <Footer />
          
    </div>
  );
}

