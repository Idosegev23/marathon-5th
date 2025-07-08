"use client";

import React from 'react';
import { motion } from 'framer-motion';

const AboutTeacherSection = () => {
  const PersonIcon = () => (
    <svg className="w-12 h-12 text-pastel-coral" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
    </svg>
  );

  const BookIcon = () => (
    <svg className="w-12 h-12 text-pastel-coral" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>
    </svg>
  );

  const TechIcon = () => (
    <svg className="w-12 h-12 text-pastel-coral" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20 3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h3l-1 1v2h12v-2l-1-1h3c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H4V5h16v11z"/>
    </svg>
  );

  const HeartIcon = () => (
    <svg className="w-12 h-12 text-pastel-coral" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
  );

  const LightBulbIcon = () => (
    <svg className="w-12 h-12 text-pastel-coral" fill="currentColor" viewBox="0 0 24 24">
      <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z"/>
    </svg>
  );

  return (
    <section id="על-המורה" className="py-20 md:py-32 bg-gradient-to-br from-pastel-yellow/15 via-white to-pastel-blue/20">
      <div className="container-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-pastel-coral">
            מי אני?
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          
          {/* הקדמה */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/80 backdrop-blur-sm rounded-5xl p-8 md:p-12 shadow-soft mb-16 border-2 border-pastel-coral/20"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <p className="text-xl md:text-2xl text-darker leading-relaxed mb-6">
                  אני אילנית ליבוביץ שגב, אמא של, אישה של, בת של, אחות של, החברה הכי טובה של וגם,
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <PersonIcon />
                  <p className="text-lg md:text-xl text-medium">
                    מאמנת לימודית בגישה הוליסטית, עם התאמה אישית לכל תלמיד ותלמידה
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="w-64 h-64 bg-gradient-to-br from-pastel-coral via-pastel-pink to-pastel-yellow rounded-full mx-auto flex items-center justify-center shadow-soft-lg">
                  <PersonIcon />
                  <div className="text-white text-center">
                    <div className="text-2xl font-bold mb-2">אילנית</div>
                    <div className="text-lg">ליבוביץ שגב</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* המסע המקצועי */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-pastel-blue/20 to-pastel-mint/20 rounded-5xl p-8 md:p-12 shadow-soft mb-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-pastel-blue/30 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <BookIcon />
                </div>
                <h3 className="text-xl font-bold mb-4 text-darker">המסע התחיל</h3>
                <p className="text-lg text-medium">
                  המסע שלי התחיל בכלל בעולם אחר - עם רקע בחשבונאות, כלכלה, מספרים ודיוק.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-pastel-coral/30 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <HeartIcon />
                </div>
                <h3 className="text-xl font-bold mb-4 text-darker">הבנתי</h3>
                <p className="text-lg text-medium">
                  אבל בשלב מסוים הבנתי שהמקום שבו אני באמת רוצה להשפיע – הוא לא בדוחות, אלא באנשים. ובעיקר – בילדים.
                </p>
              </div>
            </div>
          </motion.div>

          {/* הגישה של היום */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white/80 backdrop-blur-sm rounded-5xl p-8 md:p-12 shadow-soft mb-16 border-2 border-pastel-pink/20"
          >
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-pastel-pink/30 rounded-full mx-auto mb-6 flex items-center justify-center">
                <TechIcon />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-darker">היום</h3>
            </div>
            
            <p className="text-lg md:text-xl text-darker leading-relaxed mb-6 text-center">
              היום אני בוחרת להשקיע את הידע, הניסיון והכלים שלי כדי לעזור לדור הצעיר ללמוד אחרת. 
              בצורה שתואמת את הקצב שלהם, עם אסטרטגיות שמתאימות להם, ובשילוב כלים מודרניים וטכנולוגיים – 
              כולל עולמות ה-AI.
            </p>
          </motion.div>

          {/* הפילוסופיה */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-gradient-to-br from-pastel-yellow to-pastel-coral text-white rounded-5xl p-8 md:p-12 shadow-soft-lg text-center"
          >
            <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
              <LightBulbIcon />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">הגישה שלי</h3>
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              הגישה שלי היא לא לתקן טעויות – אלא לפתוח פתח ללמידה עם משמעות. 
              להחזיר לילדים את האמון בעצמם, ולעזור להם לגלות שכל שפה (עברית, מתמטיקה... אנגלית!!) 
              זה לא פחד – זה כוח.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutTeacherSection; 