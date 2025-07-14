"use client";

import React from 'react';
import { motion } from 'framer-motion';

const ForWhoSection = () => {
  const StudentIcon = () => (
    <svg className="w-12 h-12 text-pastel-coral" fill="currentColor" viewBox="0 0 24 24">
      <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
    </svg>
  );

  const FearIcon = () => (
    <svg className="w-12 h-12 text-pastel-coral" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
  );

  const CuriousIcon = () => (
    <svg className="w-12 h-12 text-pastel-coral" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
  );

  const ParentIcon = () => (
    <svg className="w-12 h-12 text-pastel-coral" fill="currentColor" viewBox="0 0 24 24">
      <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-4h3v-3h6v3h3v4H4zm9-7c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
    </svg>
  );

  const QualityIcon = () => (
    <svg className="w-12 h-12 text-pastel-coral" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );

  const targetAudience = [
    {
      icon: <StudentIcon />,
      title: "תלמידים שעולים לכיתה ו;",
      description: ""
    },
    {
      icon: <FearIcon />,
      title: "כאלה שמפחדים מאנגלית",
      description: "או פשוט מרגישים לא בטוחים"
    },
    {
      icon: <CuriousIcon />,
      title: "סקרנים, יצירתיים",
      description: "או כאלה שזקוקים למסגרת מכילה"
    },
    {
      icon: <ParentIcon />,
      title: "להורים",
      description: "שרוצים שהשנה תתחיל טוב, עם חוויית הצלחה"
    },
    {
      icon: <QualityIcon />,
      title: "לאנשים שרוצים לקבל חוויה",
      description: "עם ערך ולא עוד שיעור רגיל"
    }
  ];

  return (
    <section id="למי-זה-מתאים" className="py-20 md:py-32 bg-gradient-to-br from-pastel-blue/15 via-white to-pastel-coral/20">
      <div className="container-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-pastel-blue">
            למי זה מתאים?
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8">
            {targetAudience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-white/80 backdrop-blur-sm rounded-4xl p-8 text-center shadow-soft transform hover:scale-105 transition-all duration-300 hover:shadow-soft-lg border-2 border-transparent hover:border-pastel-blue/30 w-full max-w-sm"
              >
                <div className="mb-6 flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-darker">{item.title}</h3>
                {item.description && (
                  <p className="text-lg text-medium">{item.description}</p>
                )}
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
            <div className="bg-gradient-to-br from-pastel-yellow to-pastel-mint text-white py-12 px-8 rounded-5xl max-w-2xl mx-auto shadow-soft-lg">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">המסר שלנו</h3>
              <p className="text-lg md:text-xl leading-relaxed">
                כל ילד יכול להצליח באנגלית - רק צריך את הגישה הנכונה
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;
