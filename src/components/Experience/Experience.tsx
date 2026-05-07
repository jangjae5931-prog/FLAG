import styles from './Experience.module.css';
import portfolioData from '../../data/portfolio.json';
import { motion } from 'framer-motion';

interface HistoryItem {
  period: string;
  title: string;
  description: string;
}

const Experience = () => {
  const history = portfolioData.history as HistoryItem[];

  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <motion.h2 
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Project History
        </motion.h2>

        <div className={styles.timeline}>
          {history.map((item, index) => (
            <motion.div 
              key={index} 
              className={styles.item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <span className={styles.period}>{item.period}</span>
              <h4 className={styles.itemTitle}>{item.title}</h4>
              <p className={styles.description}>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
