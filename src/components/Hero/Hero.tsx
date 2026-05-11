import { useState, useEffect } from 'react';
import styles from './Hero.module.css';
import portfolioData from '../../data/portfolio.json';
import { motion } from 'framer-motion';

const Hero = () => {
  const { profile } = portfolioData;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.gradientBackground}>
        {!isMobile && (
          <>
            <motion.div 
              className={`${styles.blob} ${styles.purple}`}
              animate={{
                x: [0, 400, -300, 200, 0],
                y: [0, -200, 400, -300, 0],
                scale: [1, 1.8, 0.6, 1.3, 1],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className={`${styles.blob} ${styles.yellow}`}
              animate={{
                x: [0, -450, 300, -200, 0],
                y: [0, 350, -250, 400, 0],
                scale: [1, 0.5, 1.5, 0.7, 1],
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className={`${styles.blob} ${styles.teal}`}
              animate={{
                x: [0, 300, -400, 250, 0],
                y: [0, -350, 200, -450, 0],
                scale: [1, 1.4, 0.7, 1.2, 1],
              }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className={`${styles.blob} ${styles.pink}`}
              animate={{
                x: [0, -300, 450, -150, 0],
                y: [0, 250, -400, 300, 0],
                scale: [1, 1.6, 0.5, 1.4, 1],
              }}
              transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className={`${styles.blob} ${styles.blue}`}
              animate={{
                x: [0, 500, -250, 350, 0],
                y: [0, 300, -350, 450, 0],
                scale: [1, 0.7, 1.7, 0.9, 1],
              }}
              transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
            />
          </>
        )}
        <div className={styles.glassOverlay}></div>
      </div>

      <div className={styles.content}>
        <motion.h1 
          className={styles.name}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {profile.name}
        </motion.h1>
        <motion.h2 
          className={styles.role}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {profile.role}
        </motion.h2>
        <motion.p 
          className={styles.intro}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {profile.intro}
        </motion.p>
        <motion.div 
          className={styles.aboutContainer}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          style={{ originX: 0 }}
        >
          <p className={styles.about}>{profile.about}</p>
        </motion.div>
      </div>

      <motion.div 
        className={styles.scrollIndicator}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span>SCROLL DOWN</span>
      </motion.div>
    </section>
  );
};

export default Hero;
