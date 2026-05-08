import styles from './Hero.module.css';
import portfolioData from '../../data/portfolio.json';
import { motion } from 'framer-motion';

const Hero = () => {
  const { profile } = portfolioData;

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.gradientBackground}>
        <motion.div 
          className={`${styles.blob} ${styles.purple}`}
          animate={{
            x: [0, 200, -150, 100, 0],
            y: [0, -100, 250, -150, 0],
            scale: [1, 1.4, 0.9, 1.2, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className={`${styles.blob} ${styles.yellow}`}
          animate={{
            x: [0, -250, 180, -100, 0],
            y: [0, 200, -120, 250, 0],
            scale: [1, 0.8, 1.3, 0.9, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className={`${styles.blob} ${styles.teal}`}
          animate={{
            x: [0, 180, -200, 150, 0],
            y: [0, -200, 100, -250, 0],
            scale: [1, 1.2, 0.8, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className={`${styles.blob} ${styles.pink}`}
          animate={{
            x: [0, -150, 200, -80, 0],
            y: [0, 150, -250, 100, 0],
            scale: [1, 1.3, 0.9, 1.4, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className={`${styles.blob} ${styles.blue}`}
          animate={{
            x: [0, 250, -120, 180, 0],
            y: [0, 180, -150, 200, 0],
            scale: [1, 0.9, 1.2, 0.8, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
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
