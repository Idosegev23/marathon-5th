"use client";

import React from 'react';
import { motion } from 'framer-motion';

const WhatWillLearnSection = () => {
  const PuzzleIcon = () => (
    <svg className="w-12 h-12 text-pastel-coral" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z" />
    </svg>
  );

  const ChatIcon = () => (
    <svg className="w-12 h-12 text-pastel-coral" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
    </svg>
  );

  const ReadIcon = () => (
    <svg className="w-12 h-12 text-pastel-coral" fill="currentColor" viewBox="0 0 24 24">
      <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z" />
    </svg>
  );

  const WriteIcon = () => (
    <svg className="w-12 h-12 text-pastel-coral" fill="currentColor" viewBox="0 0 24 24">
      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
    </svg>
  );

  const ListenIcon = () => (
    <svg className="w-12 h-12 text-pastel-coral" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z" />
    </svg>
  );

  const ConfidenceIcon = () => (
    <svg className="w-12 h-12 text-pastel-coral" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );

  const skills = [
    {
      icon: <ReadIcon />,
      title: "לדייק את הקריאה",
      subtitle: "ופחות לנחש מה כתוב"
    },
    {
      icon: <ChatIcon />,
      title: "להשתתף בשיחה",
      subtitle: "פשוטה ובסיסית"
    },
    {
      icon: <PuzzleIcon />,
      title: "להבין את עקרונות מבנה המשפט",
      subtitle: "ודקדוק"
    },
    {
      icon: <ListenIcon />,
      title: "להבין גם מה שהם שומעים",
      subtitle: ""
    },
    {
      icon: <ConfidenceIcon />,
      title: "ובעיקר להרגיש",
      subtitle: "שהם יודעים מה קורה בשיעור"
    }
  ];

  return (
    <section id="מה-נלמד" className="py-20 md:py-32 bg-gradient-to-br from-pastel-mint/20 via-white to-pastel-yellow/20">
      <div className="container-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-pastel-pink">
            מה הילד/ה שלך יידע לעשות בסוף?
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-white/80 backdrop-blur-sm rounded-4xl p-8 text-center shadow-soft transform hover:scale-105 transition-all duration-300 hover:shadow-soft-lg border-2 border-transparent hover:border-pastel-pink/30 w-full max-w-sm"
              >
                <div className="mb-6 flex justify-center">{skill.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-darker">{skill.title}</h3>
                <p className="text-lg text-medium">{skill.subtitle}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-br from-pastel-coral to-pastel-pink text-white py-12 px-8 rounded-5xl max-w-2xl mx-auto shadow-soft-lg">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">המטרה שלנו</h3>
              <p className="text-lg md:text-xl leading-relaxed">
                לא רק לכתוב ולדבר - אלא להרגיש בטוח ומוכן לכיתה ו&rsquo;
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatWillLearnSection;
