import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>PORTFOLIO</div>
        <nav>
          <ul className={styles.navList}>
            <li><a href="#hero">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#footer">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
