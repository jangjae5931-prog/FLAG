import styles from './Skills.module.css';
import portfolioData from '../../data/portfolio.json';
import { motion } from 'framer-motion';
import { 
  SiAdobepremierepro, 
  SiAdobeaftereffects, 
  SiAdobeillustrator, 
  SiAdobephotoshop, 
  SiBlender,
  SiOpenai 
} from 'react-icons/si';
import { MdMovieFilter, MdContentCut, MdTerminal } from 'react-icons/md';

interface Skill {
  name: string;
  level: number;
  icon: string;
}

const iconMap: { [key: string]: JSX.Element } = {
  SiAdobepremierepro: <SiAdobepremierepro style={{ color: '#9999FF' }} />,
  SiAdobeaftereffects: <SiAdobeaftereffects style={{ color: '#9999FF' }} />,
  SiAdobeillustrator: <SiAdobeillustrator style={{ color: '#FF9A00' }} />,
  SiAdobephotoshop: <SiAdobephotoshop style={{ color: '#31A8FF' }} />,
  SiBlender: <SiBlender style={{ color: '#E87D0D' }} />,
  SiOpenai: <SiOpenai style={{ color: '#74aa9c' }} />,
  MdMovieFilter: <MdMovieFilter style={{ color: '#ff3e00' }} />,
  MdContentCut: <MdContentCut style={{ color: '#ff3e00' }} />,
  MdTerminal: <MdTerminal style={{ color: '#fff' }} />
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
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              className={styles.skillItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={styles.skillHeader}>
                <span className={styles.icon}>{iconMap[skill.icon] || <span>?</span>}</span>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
