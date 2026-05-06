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
              {/* 이미지 로딩 실패 시 검은 배경에 아이콘만 나오도록 처리 */}
              <img 
                src={project.image} 
                alt={project.title} 
                className={styles.image} 
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className={styles.overlay}>
                <div className={styles.playCircle}>
                  <span className={styles.playIcon}>▶</span>
                </div>
                <span className={styles.playText}>영상 보러가기</span>
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
