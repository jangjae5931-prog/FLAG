import styles from './Resume.module.css';
import portfolioData from '../../data/portfolio.json';
import { motion } from 'framer-motion';

const Resume = () => {
  const { resume } = portfolioData;

  return (
    <section id="resume" className={styles.resume}>
      <div className={styles.container}>
        <motion.h2 
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Resume
        </motion.h2>

        <div className={styles.content}>
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Experience</h3>
            <div className={styles.timeline}>
              {resume.experience.map((exp, index) => (
                <motion.div 
                  key={index} 
                  className={styles.item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className={styles.period}>{exp.period}</span>
                  <div className={styles.details}>
                    <h4 className={styles.itemTitle}>{exp.title}</h4>
                    <p className={styles.description}>{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Education</h3>
            <div className={styles.timeline}>
              {resume.education.map((edu, index) => (
                <motion.div 
                  key={index} 
                  className={styles.item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className={styles.period}>{edu.period}</span>
                  <div className={styles.details}>
                    <h4 className={styles.itemTitle}>{edu.school}</h4>
                    <p className={styles.description}>{edu.major}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
