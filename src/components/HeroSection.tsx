"use client";

import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] pt-24 bg-gradient-to-br from-pastel-yellow/20 via-white to-pastel-blue/25 overflow-hidden">
      {/* צורות גיאומטריות */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-32 h-32 bg-pastel-coral/30 rounded-full animate-pulse-soft"
        ></motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-40 left-16 w-40 h-40 bg-pastel-mint/40 rounded-full animate-float"
        ></motion.div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 right-1/4 w-24 h-24 bg-pastel-pink/35 rounded-full animate-gentle-bounce"
        ></motion.div>
      </div>

      <div className="container-center relative z-10 flex items-center min-h-[85vh]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          
          {/* תוכן טקסט */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-right order-2 lg:order-1"
          >
            {/* כותרת ראשית */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-darker leading-tight"
            >
              <span className="block whitespace-nowrap">לא חוג.לא קורס.</span>
              <span className="block">פשוט <span className="text-pastel-coral">בוסט</span> באנגלית.</span>
            </motion.h1>

            {/* תת כותרת */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-pastel-blue leading-relaxed"
            >
                              מרתון קיץ באנגלית<br />
                לילדים שעולים לכיתה ה&rsquo;
            </motion.p>

            {/* שלושת העמודים */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-soft border-2 border-pastel-coral/20">
                <div className="text-3xl font-black text-pastel-coral mb-2">6</div>
                <p className="text-lg font-semibold text-darker">מפגשים<br />ממוקדים</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-soft border-2 border-pastel-mint/20">
                <div className="text-3xl font-black text-success-green mb-2">5</div>
                <p className="text-lg font-semibold text-darker">ילדים<br />בקבוצה</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-soft border-2 border-pastel-blue/20">
                <div className="text-3xl font-black text-pastel-blue mb-2">1</div>
                <p className="text-lg font-semibold text-darker">קבוצה חדשה<br />שנפתחה</p>
              </div>
            </motion.div>

            {/* כפתורים */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#הרשמה"
                className="inline-block accent-button rounded-3xl text-lg px-6 py-3 transform hover:scale-105 transition-all duration-300"
              >
                הרשמה
              </a>
              <a
                href="#על-המרתון"
                className="inline-block bg-white/80 backdrop-blur-sm text-pastel-coral border-2 border-pastel-coral rounded-3xl text-lg px-6 py-3 transform hover:scale-105 hover:bg-pastel-coral hover:text-white transition-all duration-300"
              >
                רוצה לדעת עוד
              </a>
              <a
                href="#קבוצות"
                className="inline-block bg-white/80 backdrop-blur-sm text-pastel-blue border-2 border-pastel-blue rounded-3xl text-lg px-6 py-3 transform hover:scale-105 hover:bg-pastel-blue hover:text-white transition-all duration-300"
              >
                תאריכים ועלות
              </a>
            </motion.div>
          </motion.div>

          {/* אזור ויזואלי */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative">
              {/* עיגול מרכזי גדול */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-pastel-pink via-pastel-coral to-pastel-yellow rounded-full mx-auto shadow-soft-lg relative overflow-hidden"
              >
                {/* עיגולים פנימיים */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute top-16 left-16 w-20 h-20 bg-white/30 rounded-full"
                ></motion.div>
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute bottom-20 right-20 w-16 h-16 bg-white/40 rounded-full"
                ></motion.div>
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white/50 rounded-full"
                ></motion.div>

                {/* טקסט במרכז */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="text-4xl md:text-5xl font-black mb-2"
                    >
                      ✨
                    </motion.div>
                    <p className="text-lg md:text-xl font-bold">English<br />Power Up!</p>
                  </div>
                </div>
              </motion.div>

              {/* עיגולים צדדיים */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-8 -right-8 w-24 h-24 bg-pastel-mint/70 rounded-full shadow-soft"
              ></motion.div>
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-12 -left-12 w-32 h-32 bg-pastel-blue/60 rounded-full shadow-soft"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 