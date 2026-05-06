import styles from './Projects.module.css';
import portfolioData from '../../data/portfolio.json';

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <a key={index} href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.projectCard}>
            <div className={styles.imageWrapper}>
              <img src={project.image} alt={project.title} className={styles.image} />
              <div className={styles.overlay}>
                <span className={styles.playButton}>▶ 영상 보기</span>
              </div>
            </div>
            <div className={styles.content}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
              <div className={styles.tags}>
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
