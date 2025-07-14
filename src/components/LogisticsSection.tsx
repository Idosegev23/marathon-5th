"use client";

import React from 'react';
import { motion } from 'framer-motion';

const LogisticsSection = () => {
  const LocationIcon = () => (
    <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>
  );

  const CalendarIcon = () => (
    <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
    </svg>
  );

  const GroupIcon = () => (
    <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-4h3v-3h6v3h3v4H4zm9-7c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
    </svg>
  );

  const ClockIcon = () => (
    <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
    </svg>
  );

  const MoneyIcon = () => (
    <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
    </svg>
  );

  const logisticsData = [
    {
      icon: <LocationIcon />,
      title: "איפה",
      description: "באשקלון – סביבה נעימה, בטוחה ואישית",
      gradient: "from-pastel-coral to-pastel-pink"
    },
    {
      icon: <CalendarIcon />,
      title: "מתי",
      description: "בחופש הגדול תאריכים מופיעים למטה 👇🏻",
      gradient: "from-pastel-mint to-pastel-blue"
    },
    {
      icon: <GroupIcon />,
      title: "כמה ילדים",
      description: "5 בקבוצה – לא יותר",
      gradient: "from-pastel-yellow to-pastel-coral"
    },
    {
      icon: <ClockIcon />,
      title: "משך כל מפגש",
      description: "75 דקות",
      gradient: "from-pastel-blue to-pastel-pink"
    },
    {
      icon: <MoneyIcon />,
      title: "עלות",
      description: (
        <div>
          <div>6 מפגשים</div>
          <div className="relative mt-2">
            <span className="relative">
              <span className="line-through opacity-70">600</span>
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 20" fill="none">
                <path 
                  d="M5 12 Q50 8 95 14" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                  opacity="0.9"
                />
              </svg>
            </span>
            <span className="font-bold text-xl mr-2">540 ש״ח</span>
          </div>
        </div>
      ),
      gradient: "from-pastel-pink to-pastel-yellow"
    }
  ];

  return (
    <section id="לוגיסטיקה" className="py-20 md:py-32 bg-gradient-to-br from-pastel-coral/20 via-white to-pastel-mint/15">
      <div className="container-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-pastel-coral">
            איפה, מתי וכמה?
          </h2>
        </motion.div>
          
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8">
            {logisticsData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${item.gradient} text-white rounded-5xl p-8 shadow-soft-lg transition-all duration-300 hover:shadow-soft-lg hover:-translate-y-3 w-full max-w-sm`}
              >
                <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">{item.title}</h3>
                <div className="text-lg text-center leading-relaxed">
                  {typeof item.description === 'string' ? (
                    <p>{item.description}</p>
                  ) : (
                    item.description
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          </div>
      </div>
    </section>
  );
};

export default LogisticsSection; 