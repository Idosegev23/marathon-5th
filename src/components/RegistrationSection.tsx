"use client";

import React from 'react';
import { motion } from 'framer-motion';

const RegistrationSection = () => {

  const handleSubmit = () => {
    // גלילה לטופס המפורט
    const formElement = document.querySelector('#detailed-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const UserIcon = () => (
    <svg className="w-6 h-6 text-pastel-coral" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
    </svg>
  );

  const FormIcon = () => (
    <svg className="w-6 h-6 text-pastel-coral" fill="currentColor" viewBox="0 0 24 24">
      <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
    </svg>
  );

  const PersonCheckIcon = () => (
    <svg className="w-6 h-6 text-pastel-coral" fill="currentColor" viewBox="0 0 24 24">
      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>
  );

  const BookUserIcon = () => (
    <svg className="w-6 h-6 text-pastel-coral" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>
    </svg>
  );

  const ChatIcon = () => (
    <svg className="w-6 h-6 text-pastel-coral" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
    </svg>
  );

  return (
    <section id="הרשמה" className="py-20 md:py-32 bg-gradient-to-br from-pastel-blue/15 via-white to-pastel-coral/20">
      <div className="container-center">

        {/* איך זה עובד */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-pastel-coral">
            אז איך זה עובד?
          </h2>
          <p className="text-2xl md:text-3xl text-darker mb-16 max-w-4xl mx-auto">
            זהו. השתכנעתם. עכשיו נשאר רק שלב קטן – להצטרף.
          </p>
        </motion.div>

        {/* תהליך ההרשמה - גריד שלבים */}
        <div className="max-w-4xl mx-auto mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: <FormIcon />,
                number: "1",
                title: "טופס הרשמה קצר",
                description: "יוצרת עימכם קשר ועונה על שאלות. במידה ומעוניינים תקבלו לינק לתשלום"
              },
              {
                icon: <BookUserIcon />,
                number: "2", 
                title: "שאלון הכרות קצר",
                description: "אבין איפה הילדים עומדים ואיך לדייק עבורם את המרתון"
              },
              {
                icon: <PersonCheckIcon />,
                number: "3",
                title: "בניית קבוצה הומוגנית", 
                description: "כל אחד ואחת יוכלו להרגיש שייכים ולפרוח"
              },
              {
                icon: <ChatIcon />,
                number: "4",
                title: "הכיף מתחיל!",
                description: "תוכנית מפורטת למרתון והודעה אישית עם הצגה עצמית. נתראה ב-28.7!"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-soft border-2 border-pastel-coral/20 hover:border-pastel-coral/40 transition-all duration-300 hover:scale-105"
              >
                {/* מספר השלב */}
                <div className="w-10 h-10 bg-pastel-coral rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">{step.number}</span>
                </div>
                
                {/* אייקון וכותרת */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-pastel-coral/20 rounded-full flex items-center justify-center flex-shrink-0">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-bold text-darker">{step.title}</h3>
                </div>
                
                {/* תיאור */}
                <p className="text-medium leading-relaxed text-right">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* מה המשתתפים מקבלים */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-pastel-mint to-pastel-blue text-white rounded-5xl p-8 md:p-12 shadow-soft-lg mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-black mb-8 text-center">
            🎁 מה המשתתפים מקבלים?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "חוויה של הצלחה כבר בקיץ – כדי שלא ירגישו שהם \"מאחור\" עוד לפני שהשנה התחילה",
              "גישה חדשה ללמידה – שמכבדת את הראש שלהם ואת הדרך שלהם",
              "כלים אמיתיים לכתיבה, קריאה ודיבור – לא רק \"לזכור חוקים\"",
              "ביטחון לנסות לדבר, לשאול ולהשתתף בכיתה",
              "קבוצה קטנה ותומכת – עם מקום אמיתי לכל אחד"
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <span className="text-2xl">*</span>
                <p className="text-lg">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* מה ההורים מקבלים */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-pastel-coral to-pastel-pink text-white rounded-5xl p-8 md:p-12 shadow-soft-lg mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-black mb-8 text-center">
            💌 ומה ההורים מקבלים בסוף?
          </h3>
          <p className="text-lg mb-8 text-center">
            בנוסף לחוויה של הילדים – גם אתם, ההורים, מקבלים בסיום מרתון GEN-Z:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "משוב אישי על ההתקדמות של הילד/ה לאורך המפגשים",
              "נקודות חוזק שבלטו",
              "המלצות אישיות להמשך חיזוק",
              "הכל בגובה העיניים, עם מטרה אחת: שהשיח על אנגלית בבית יהיה חיובי, בטוח ומחובר למציאות."
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <span className="text-2xl">*</span>
                <p className="text-lg">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* קבוצות הרשמה */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-black mb-12 text-center text-pastel-coral">
            קבוצות מרתון GEN-Z
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* קבוצה 1 - מלאה */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-gray-400 to-gray-500 text-white rounded-4xl p-6 shadow-soft-lg border-2 border-gray-300 text-center relative overflow-hidden"
            >
              {/* סרט מלוכסן "מלאה" */}
              <div className="absolute -top-1 -right-1 -bottom-1 -left-1 flex items-center justify-center pointer-events-none">
                <div className="bg-red-600 text-white text-xl font-black py-3 px-16 transform rotate-45 shadow-lg">
                  מלאה
                </div>
              </div>
              
              <h4 className="text-2xl font-black mb-4 opacity-50">קבוצה 1</h4>
              <p className="text-lg opacity-50">מועד יולי</p>
            </motion.div>

            {/* קבוצה 2 - מלאה */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-gray-400 to-gray-500 text-white rounded-4xl p-6 shadow-soft-lg border-2 border-gray-300 text-center relative overflow-hidden"
            >
              {/* סרט מלוכסן "מלאה" */}
              <div className="absolute -top-1 -right-1 -bottom-1 -left-1 flex items-center justify-center pointer-events-none">
                <div className="bg-red-600 text-white text-xl font-black py-3 px-16 transform rotate-45 shadow-lg">
                  מלאה
                </div>
              </div>
              
              <h4 className="text-2xl font-black mb-4 opacity-50">קבוצה 2</h4>
              <p className="text-lg opacity-50">מועד יולי</p>
            </motion.div>

            {/* קבוצה 3 - מלאה */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-gray-400 to-gray-500 text-white rounded-4xl p-6 shadow-soft-lg border-2 border-gray-300 text-center relative overflow-hidden"
            >
              {/* סרט מלוכסן "מלאה" */}
              <div className="absolute -top-1 -right-1 -bottom-1 -left-1 flex items-center justify-center pointer-events-none">
                <div className="bg-red-600 text-white text-xl font-black py-3 px-16 transform rotate-45 shadow-lg">
                  מלאה
                </div>
              </div>
              
              <h4 className="text-2xl font-black mb-4 opacity-50">קבוצה 3</h4>
              <p className="text-lg opacity-50">מועד יולי</p>
            </motion.div>

            {/* קבוצה 4 - פתוחה להרשמה */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-pastel-coral to-pastel-pink text-white rounded-4xl p-6 shadow-soft-lg border-2 border-pastel-coral/30 text-center hover:scale-105 transition-all duration-300"
            >
              <h4 className="text-2xl font-black mb-3">קבוצה 4</h4>
              <div className="mb-4">
                <p className="font-semibold text-lg mb-3">📅 מפגשים</p>
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 text-center border border-white/30">
                    <div className="text-xs opacity-80">מפגש 1</div>
                    <div className="font-bold">28.7</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 text-center border border-white/30">
                    <div className="text-xs opacity-80">מפגש 2</div>
                    <div className="font-bold">31.7</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 text-center border border-white/30">
                    <div className="text-xs opacity-80">מפגש 3</div>
                    <div className="font-bold">4.8</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 text-center border border-white/30">
                    <div className="text-xs opacity-80">מפגש 4</div>
                    <div className="font-bold">7.8</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 text-center border border-white/30">
                    <div className="text-xs opacity-80">מפגש 5</div>
                    <div className="font-bold">11.8</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 text-center border border-white/30">
                    <div className="text-xs opacity-80">מפגש 6</div>
                    <div className="font-bold">14.8</div>
                  </div>
                </div>
                <div className="bg-white/30 backdrop-blur-sm rounded-lg p-2 text-center border border-white/40">
                  <span className="text-sm">🕕 שעה: </span>
                  <span className="font-bold text-lg">17:30</span>
                </div>
              </div>
              <p className="text-sm mb-4 opacity-90">5 ילדים בלבד</p>
              <button
                onClick={handleSubmit}
                className="bg-white text-pastel-coral py-3 px-6 rounded-full text-lg font-bold hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-md"
              >
                להרשמה 🚀
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* טופס הרשמה מפורט */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/80 backdrop-blur-sm rounded-5xl p-8 md:p-12 shadow-soft-lg border-2 border-pastel-coral/20 mb-16"
          id="detailed-form"
        >
          <h3 className="text-3xl md:text-4xl font-black mb-8 text-center text-pastel-coral">
            📩 הרשמה מפורטת לקבוצה 4:
          </h3>
          
          <form onSubmit={async (e) => {
            e.preventDefault();
            const formData = new FormData(e.target as HTMLFormElement);
            
            const registrationData = {
              parentName: formData.get('parentName'),
              childName: formData.get('childName'),
              age: formData.get('age'),
              phone: formData.get('phone'),
              notes: formData.get('notes') || '',
              timestamp: new Date().toISOString(),
              group: 'קבוצה 4 - מועד יולי'
            };

            try {
              // שליחה לוובקהוק
              const response = await fetch('https://hook.eu2.make.com/9yky6tysvodj3d0hdyxuw52e2sya7cbb', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(registrationData)
              });

              if (response.ok) {
                alert('ההרשמה נשלחה בהצלחה! נחזור אליכם בהקדם.');
                (e.target as HTMLFormElement).reset();
              } else {
                throw new Error('שגיאה בשליחה');
              }
            } catch (error) {
              console.error('Error:', error);
              // גיבוי - פתיחת וואטסאפ אם הוובקהוק נכשל
              const message = `שלום אילנית!
אני מעוניין/ת להרשים את הילד/ה שלי לקבוצה 4 במרתון GEN-Z באנגלית (מועד יולי):

שם ההורה: ${registrationData.parentName}
שם הילד/ה: ${registrationData.childName}
גיל: ${registrationData.age}
טלפון: ${registrationData.phone}
${registrationData.notes ? `הערות נוספות: ${registrationData.notes}` : ''}

אשמח לשמוע פרטים נוספים!`;
              
              const whatsappUrl = `https://wa.me/972545886779?text=${encodeURIComponent(message)}`;
              window.open(whatsappUrl, '_blank');
              alert('נתקלנו בבעיה טכנית. פתחנו וואטסאפ כגיבוי - אנא שלחו את ההודעה.');
            }
          }} className="max-w-2xl mx-auto">
            <div className="space-y-6">
                  <div>
                <label className="block text-lg font-bold mb-2 text-darker">
                  שם ההורה
                    </label>
                    <input
                      type="text"
                      name="parentName"
                      required
                  className="w-full px-4 py-3 rounded-2xl border-2 border-pastel-coral/30 focus:border-pastel-coral focus:outline-none text-lg"
                  placeholder="שם מלא"
                    />
                  </div>
                  
                  <div>
                <label className="block text-lg font-bold mb-2 text-darker">
                  שם הילד/ה
                    </label>
                    <input
                      type="text"
                      name="childName"
                      required
                  className="w-full px-4 py-3 rounded-2xl border-2 border-pastel-coral/30 focus:border-pastel-coral focus:outline-none text-lg"
                      placeholder="שם הילד/ה"
                    />
                  </div>
                  
                  <div>
                <label className="block text-lg font-bold mb-2 text-darker">
                  גיל
                    </label>
                    <input
                  type="number"
                  name="age"
                      required
                  min="10"
                  max="15"
                  className="w-full px-4 py-3 rounded-2xl border-2 border-pastel-coral/30 focus:border-pastel-coral focus:outline-none text-lg"
                  placeholder="גיל הילד/ה"
                    />
                  </div>
                  
                  <div>
                <label className="block text-lg font-bold mb-2 text-darker">
                  טלפון
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                  className="w-full px-4 py-3 rounded-2xl border-2 border-pastel-coral/30 focus:border-pastel-coral focus:outline-none text-lg"
                  placeholder="מספר טלפון"
                    />
                  </div>
                  
                  <div>
                <label className="block text-lg font-bold mb-2 text-darker">
                      הערות נוספות
                    </label>
                    <textarea
                      name="notes"
                      rows={4}
                  className="w-full px-4 py-3 rounded-2xl border-2 border-pastel-coral/30 focus:border-pastel-coral focus:outline-none text-lg resize-none"
                  placeholder="משהו שחשוב לכם שאדע על הילד/ה..."
                    />
                  </div>
                  
              <div className="text-center">
                    <button
                      type="submit"
                  className="accent-button rounded-3xl text-xl px-8 py-4 transform hover:scale-105 transition-all duration-300 shadow-soft-lg"
                >
                  שלח הרשמה מפורטת! 📝
                    </button>
              </div>
          </div>
          </form>
        </motion.div>

        {/* יצירת קשר */}
          <motion.div
          initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
          >
          <h3 className="text-3xl md:text-4xl font-black mb-8 text-pastel-coral">
            יש שאלות? שלחו לי וואטסאפ 👇
          </h3>
            <a
            href="https://wa.me/972545886779"
              target="_blank"
              rel="noopener noreferrer"
            className="inline-block bg-gradient-to-br from-green-500 to-green-600 text-white py-4 px-8 rounded-3xl text-xl font-bold hover:shadow-soft-lg transform hover:scale-105 transition-all duration-300"
            >
            📱 0545886779 - לחצו כאן לוואטסאפ
            </a>
        </motion.div>

      </div>
    </section>
  );
};

export default RegistrationSection; 