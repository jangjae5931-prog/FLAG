import styles from './Footer.module.css';
import portfolioData from '../../data/portfolio.json';

const Footer = () => {
  const { profile } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.contact}>
          <h2 className={styles.title}>Contact</h2>
          <p className={styles.email}>{profile.email}</p>
          <div className={styles.socialLinks}>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={profile.blog} target="_blank" rel="noopener noreferrer">Blog</a>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>© {currentYear} {profile.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
