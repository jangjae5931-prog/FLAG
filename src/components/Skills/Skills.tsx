import styles from './Skills.module.css';
import portfolioData from '../../data/portfolio.json';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  icon: string;
}

const getIconUrl = (iconKey: string) => {
  // Adobe 및 주요 브랜드 아이콘을 Simple Icons CDN에서 가져옵니다.
  const brandMap: { [key: string]: string } = {
    SiAdobepremierepro: 'adobepremierepro',
    SiAdobeaftereffects: 'adobeaftereffects',
    SiAdobeillustrator: 'adobeillustrator',
    SiAdobephotoshop: 'adobephotoshop',
    SiBlender: 'blender',
    SiOpenai: 'openai',
    MdMovieFilter: 'video', // 대체 아이콘
    MdContentCut: 'clippath', // 대체 아이콘
    MdTerminal: 'gnumeterminal' // 대체 아이콘
  };
  
  const slug = brandMap[iconKey] || 'code';
  // 브랜드 고유 컬러를 적용하거나 기본 흰색으로 설정
  return `https://cdn.simpleicons.org/${slug}/ffffff`;
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
                <span className={styles.icon}>
                  <img 
                    src={getIconUrl(skill.icon)} 
                    alt={skill.name} 
                    style={{ width: '24px', height: '24px' }} 
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
