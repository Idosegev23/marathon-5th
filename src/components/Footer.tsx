"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary text-white relative overflow-hidden py-20">
      <div className="container-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* לוגו ותיאור */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-right"
          >
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <div className="text-3xl font-black">
                מרתון <span className="text-accent">כיתה ה'</span>
              </div>
            </div>
            <p className="text-lg leading-relaxed opacity-90">
              מרתון קיץ באנגלית לילדים שעולים לכיתה ה&rsquo;
            </p>
            <p className="text-base mt-4 opacity-75">
              בואו נכין את הילד שלכם להצלחה בכיתה ה&rsquo;
            </p>
          </motion.div>

          {/* פרטי יצירת קשר */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold mb-8">יצירת קשר</h3>
            <div className="space-y-6">
              <motion.a
                href="https://wa.me/972000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-4 bg-green-500 hover:bg-green-600 p-4 rounded-3xl transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <FaWhatsapp className="w-6 h-6" />
                <span className="font-semibold">וואטסאפ</span>
              </motion.a>

              <motion.a
                href="tel:+972000000000"
                className="flex items-center justify-center gap-4 bg-soft-blue hover:bg-blue-600 p-4 rounded-3xl transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <FaPhone className="w-5 h-5" />
                <span className="font-semibold">050-0000000</span>
              </motion.a>

              <motion.a
                href="mailto:info@example.com"
                className="flex items-center justify-center gap-4 bg-accent hover:bg-red-600 p-4 rounded-3xl transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <FaEnvelope className="w-5 h-5" />
                <span className="font-semibold">שלחו מייל</span>
              </motion.a>
            </div>
          </motion.div>

          {/* קישורים מהירים */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center lg:text-left"
          >
            <h3 className="text-2xl font-bold mb-8">קישורים מהירים</h3>
            <div className="space-y-4">
              {[
                { name: 'על המרתון', href: '#על-המרתון' },
                { name: 'למי זה מתאים', href: '#למי-זה-מתאים' },
                { name: 'על המורה', href: '#על-המורה' },
                { name: 'הרשמה', href: '#הרשמה' }
              ].map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="block text-lg hover:text-accent transition-colors duration-300 py-2 px-4 rounded-2xl hover:bg-white/10"
                  whileHover={{ x: 10 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* קו הפרדה */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="border-t border-white/20 my-12"
        />

        {/* זכויות יוצרים */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <p className="text-lg opacity-75">
            © 2024 מרתון כיתה ה'. כל הזכויות שמורות.
          </p>
          <p className="text-sm mt-2 opacity-60">
            נבנה באהבה לדור העתיד 💙
          </p>
        </motion.div>
      </div>

      {/* אלמנטים דקורטיביים עגולים */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-10 right-10 w-32 h-32 bg-accent/10 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-24 h-24 bg-soft-blue/10 rounded-full"
          animate={{
            x: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/3 w-16 h-16 bg-white/5 rounded-full"
          animate={{
            y: [0, -15, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </footer>
  );
};

export default Footer; 