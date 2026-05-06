import styles from './Skills.module.css';
import portfolioData from '../../data/portfolio.json';

const Skills = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className={styles.skills}>
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.skillList}>
        {skills.map((skill, index) => (
          <span key={index} className={styles.skillTag}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
