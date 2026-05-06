import styles from './Projects.module.css';
import portfolioData from '../../data/portfolio.json';

const Projects = () => {
  const { projects } = portfolioData;

  // 유튜브 URL에서 영상 ID를 추출하여 썸네일 주소를 반환하는 함수
  const getYoutubeThumbnail = (url: string) => {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    const videoId = (match && match[7].length === 11) ? match[7] : null;
    
    return videoId 
      ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
      : 'https://via.placeholder.com/640x360/111111/FFFFFF?text=Video+Link+Needed';
  };

  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <a key={index} href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.projectCard}>
            <div className={styles.imageWrapper}>
              <img 
                src={getYoutubeThumbnail(project.demo)} 
                alt={project.title} 
                className={styles.image} 
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
