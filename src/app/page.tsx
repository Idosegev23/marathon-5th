import { Metadata } from 'next';
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutMarathonSection from '@/components/AboutMarathonSection';
import WhatWillLearnSection from '@/components/WhatWillLearnSection';
import ForWhoSection from '@/components/ForWhoSection';
import AboutTeacherSection from '@/components/AboutTeacherSection';
import LogisticsSection from '@/components/LogisticsSection';
import RegistrationSection from '@/components/RegistrationSection';

export const metadata: Metadata = {
  title: 'מרתון אנגלית קיץ GEN-Z - אילנית ליבוביץ שגב',
  description: 'מרתון אנגלית לילדים שעולים לכיתה ז׳. 6 מפגשים ממוקדים, 5 ילדים בקבוצה. הכנה מושלמת לכיתה ז׳ באנגלית.',
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <AboutMarathonSection />
        <WhatWillLearnSection />
        <ForWhoSection />
        <AboutTeacherSection />
        <LogisticsSection />
        <RegistrationSection />
      </main>
    </>
  );
} 