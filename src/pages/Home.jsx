import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../sections/Hero'
import AboutSection from '../sections/AboutSection';
import Footer from '../components/Footer'
import TutorsSection from '../sections/TutorsSection';
import CTASection from '../sections/CTASection';
import SubjectsSection from '../sections/SubjectsSection';
import FeesSection from '../sections/FeesSection';
import GetHelp from '../sections/GetHelp';

export default function Home() {
  return (
    <div className="">
          
          <Hero />
          <TutorsSection />
          <SubjectsSection />
          <FeesSection />
          <GetHelp />
          <CTASection />
          <Footer />
          
    </div>
  );
}


