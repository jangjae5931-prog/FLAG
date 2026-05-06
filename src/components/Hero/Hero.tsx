import styles from './Hero.module.css';
import portfolioData from '../../data/portfolio.json';

const Hero = () => {
  const { profile } = portfolioData;

  return (
    <section id="hero" className={styles.hero}>
      <h1 className={styles.name}>{profile.name}</h1>
      <h2 className={styles.role}>{profile.role}</h2>
      <p className={styles.intro}>{profile.intro}</p>
      <div className={styles.aboutContainer}>
        <p className={styles.about}>{profile.about}</p>
      </div>
    </section>
  );
};

export default Hero;
