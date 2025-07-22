"use client";

import React from 'react';
import { motion } from 'framer-motion';

const AboutMarathonSection = () => {
  // Icon components
  const ChartDownIcon = () => (
    <svg className="w-16 h-16 text-red-500" fill="currentColor" viewBox="0 0 24 24">
      <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
    </svg>
  );

  const ChartUpIcon = () => (
    <svg className="w-16 h-16 text-green-600" fill="currentColor" viewBox="0 0 24 24">
      <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
      <path d="M7 14l5-5 4 4 5.5-5.5L23 9V3h-6l1.5 1.5L13 10l-4-4L2 13l1.5 1.5z"/>
    </svg>
  );

  const LightBulbIcon = () => (
    <svg className="w-12 h-12 text-pastel-coral" fill="currentColor" viewBox="0 0 24 24">
      <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z"/>
    </svg>
  );

  const TargetIcon = () => (
    <svg className="w-12 h-12 text-pastel-coral" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-8c0-2.76 2.24-5 5-5s5 2.24 5 5-2.24 5-5 5-5-2.24-5-5zm8 0c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3z"/>
    </svg>
  );

  const PeopleIcon = () => (
    <svg className="w-12 h-12 text-pastel-coral" fill="currentColor" viewBox="0 0 24 24">
      <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-4h3v-3h6v3h3v4H4zm9-7c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
    </svg>
  );

  const BrainIcon = () => (
    <svg className="w-12 h-12 text-pastel-coral" fill="currentColor" viewBox="0 0 24 24">
      <path d="M21.33 12.9c.24-1.39-.49-2.84-1.8-3.57-.46-.26-.97-.4-1.53-.4-.2 0-.38.02-.57.06-.74-1.47-2.27-2.5-4.05-2.5-1.3 0-2.5.56-3.31 1.43C9.28 6.92 8.27 6.5 7.14 6.5c-1.95 0-3.64 1.68-3.64 3.64 0 .75.23 1.47.64 2.06-.74.52-1.2 1.38-1.2 2.3 0 1.54 1.25 2.8 2.8 2.8.49 0 .96-.13 1.37-.36.74 1.17 2.04 1.95 3.53 1.95.49 0 .97-.09 1.42-.25.27.58.85.99 1.53.99.93 0 1.69-.76 1.69-1.69 0-.35-.11-.68-.29-.96.87-.91 1.42-2.15 1.42-3.52 0-.33-.03-.65-.08-.96z"/>
    </svg>
  );

  const SpiralIcon = () => (
    <svg className="w-12 h-12 text-pastel-coral" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.19 0 2.34-.21 3.41-.6.3-.11.49-.4.49-.72 0-.43-.35-.78-.78-.78-.17 0-.33.06-.46.14-.87.31-1.8.46-2.76.46-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6c0 .96-.23 1.89-.64 2.72-.14.28-.22.59-.22.92 0 1.1.9 2 2 2s2-.9 2-2c0-5.52-4.48-10-10-10z"/>
    </svg>
  );

  const BookIcon = () => (
    <svg className="w-12 h-12 text-pastel-coral" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>
    </svg>
  );

  return (
    <section id="על-המרתון" className="py-20 md:py-32 bg-gradient-to-br from-white via-pastel-yellow/10 to-pastel-mint/15">
      <div className="container-center">
        {/* למה צריך את זה */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-black text-center mb-16 text-pastel-coral">
            למה בכלל צריך את זה?
          </h2>

          <div className="max-w-5xl mx-auto">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl md:text-3xl mb-16 text-center text-darker leading-relaxed font-medium"
            >
              המעבר לכיתה ה&rsquo; הוא שלב חשוב ומרגש –
              שנה אחרונה בבית ספר יסודי והכנה לחטיבה. השיעורים באנגלית הופכים למורכבים, לומדים טקסטים שלמים, מבינים הוראות באנגלית, כותבים תשובות ויש יותר דקדוק ודרישה להתבטא בכתב ובעל פה.
            </motion.p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white/80 backdrop-blur-sm border-l-8 border-red-400 text-center rounded-5xl p-8 md:p-12 shadow-soft transition-all duration-500 hover:shadow-soft-lg hover:-translate-y-2"
              >
                <div className="mb-6 flex justify-center">
                  <ChartDownIcon />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-red-500">מי שלא מתחיל חזק</h3>
                <p className="text-xl text-darker">מהר מאוד מאבד ביטחון</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="bg-gradient-to-br from-pastel-mint to-pastel-blue text-white border-l-8 border-green-400 text-center rounded-5xl p-8 md:p-12 shadow-soft transition-all duration-500 hover:shadow-soft-lg hover:-translate-y-2"
              >
                <div className="mb-6 flex justify-center">
                  <ChartUpIcon />
                </div>
                <h3 className="text-2xl font-bold mb-4">מי שעובר את החסימה</h3>
                <p className="text-xl">מגלה שזה הרבה יותר פשוט ממה שחשב</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* מה זה מרתון כיתה ה' */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-black text-center mb-16 text-pastel-pink">
            מה זה מרתון GEN-Z
          </h2>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <LightBulbIcon />,
                  title: "מרתון של 6 מפגשים",
                  description: "75 דקות כל אחד",
                  bg: "bg-pastel-yellow/50"
                },
                {
                  icon: <TargetIcon />,
                  title: "מותאם לתוכנית הלימודים",
                  description: "של משרד החינוך",
                  bg: "bg-pastel-coral/50"
                },
                {
                  icon: <PeopleIcon />,
                  title: "קבוצה קטנה: 5 ילדים בלבד",
                  description: "אווירה אישית ובטוחה",
                  bg: "bg-pastel-mint/50"
                },
                {
                  icon: <BrainIcon />,
                  title: "שיחה, כתיבה, קריאה ודקדוק",
                  description: "בשפה של הילדים",
                  bg: "bg-pastel-pink/50"
                },
                {
                  icon: <SpiralIcon />,
                  title: "גישה חווייתית, דינמית וטכנולוגית",
                  description: "עם מה שהם באמת מתחברים אליו",
                  bg: "bg-pastel-blue/50"
                },
                {
                  icon: <BookIcon />,
                  title: "חוברת מותאמת אישית",
                  description: "+ תרגולים קצרים לבית",
                  bg: "bg-white/80"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`${item.bg} backdrop-blur-sm text-center transform hover:scale-105 rounded-4xl p-6 md:p-8 shadow-soft transition-all duration-300 hover:shadow-soft-lg border-2 border-transparent hover:border-pastel-pink/30`}
                >
                  <div className="mb-4 flex justify-center">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-darker">{item.title}</h3>
                  <p className="text-lg text-medium">{item.description}</p>
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
              <div className="bg-gradient-to-br from-pastel-pink via-pastel-coral to-pastel-yellow text-white py-12 px-8 rounded-5xl max-w-lg mx-auto shadow-soft-lg">
                <div className="mb-6 flex justify-center">
                  <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">חוויית הצלחה אמיתית</h3>
                <p className="text-xl">ביטחון עצמי וכלים מעשיים לקראת כיתה ה&rsquo;</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMarathonSection;
