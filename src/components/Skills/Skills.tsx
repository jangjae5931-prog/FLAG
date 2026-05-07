import styles from './Skills.module.css';
import portfolioData from '../../data/portfolio.json';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  icon: string;
}

const brandMap: { [key: string]: { slug: string; color: string } } = {
  SiAdobepremierepro: { slug: 'adobepremierepro', color: '#9999FF' },
  SiAdobeaftereffects: { slug: 'adobeaftereffects', color: '#9999FF' },
  SiAdobeillustrator: { slug: 'adobeillustrator', color: '#FF9A00' },
  SiAdobephotoshop: { slug: 'adobephotoshop', color: '#31A8FF' },
  SiBlender: { slug: 'blender', color: '#E87D0D' },
  SiOpenai: { slug: 'openai', color: '#74aa9c' },
  MdMovieFilter: { slug: 'adobe', color: '#FF0000' },
  MdContentCut: { slug: 'adobecreativecloud', color: '#FF0000' },
  MdTerminal: { slug: 'gnometerminal', color: '#4EAA25' }
};

const Skills = () => {
  const skills = portfolioData.skills as Skill[];

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <motion.h2 
          className={styles.title}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Expertise
        </motion.h2>
        <div className={styles.skillGrid}>
          {skills.map((skill, index) => {
            const iconData = brandMap[skill.icon] || { slug: 'code', color: '#fff' };
            const iconUrl = `https://cdn.jsdelivr.net/npm/simple-icons@13.0.0/icons/${iconData.slug}.svg`;
            
            return (
              <motion.div 
                key={index} 
                className={styles.skillItem}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={styles.skillHeader}>
                  <span className={styles.icon}>
                    <div 
                      className={styles.iconImage}
                      style={{ 
                        maskImage: `url(${iconUrl})`,
                        WebkitMaskImage: `url(${iconUrl})`,
                        backgroundColor: iconData.color
                      }}
                    />
                  </span>
                  <span className={styles.skillName}>{skill.name}</span>
                  <span className={styles.skillLevel}>{skill.level}/10</span>
                </div>
                <div className={styles.barContainer}>
                  <motion.div 
                    className={styles.bar}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(skill.level / 10) * 100}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
