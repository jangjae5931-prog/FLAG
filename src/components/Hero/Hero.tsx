import styles from './Hero.module.css';
import portfolioData from '../../data/portfolio.json';

const Hero = () => {
  const { profile } = portfolioData;

  return (
    <section id="hero" className={styles.hero}>
      {/* 배경 영상 레이어 */}
      <div className={styles.videoBackground}>
        <div className={styles.overlay}></div>
        <iframe 
          src="https://www.youtube.com/embed/pD5ihmCksaU?autoplay=1&mute=1&loop=1&playlist=pD5ihmCksaU&controls=0&showinfo=0&rel=0&modestbranding=1"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className={styles.videoFrame}
          title="Background Video"
        ></iframe>
      </div>

      <div className={styles.content}>
        <h1 className={styles.name}>{profile.name}</h1>
        <h2 className={styles.role}>{profile.role}</h2>
        <p className={styles.intro}>{profile.intro}</p>
        <div className={styles.aboutContainer}>
          <p className={styles.about}>{profile.about}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
