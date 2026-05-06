import { useState } from 'react';
import styles from './Projects.module.css';
import portfolioData from '../../data/portfolio.json';

interface Project {
  title: string;
  description: string;
  tags: string[];
  demo: string;
}

const Projects = () => {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getYoutubeId = (url: string) => {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[7].length === 11) ? match[7] : null;
  };

  // 유튜브 썸네일을 가져오되, 고화질이 없으면 기본 화질로 대체하는 로직
  const getYoutubeThumbnail = (url: string) => {
    const videoId = getYoutubeId(url);
    if (!videoId) return 'https://via.placeholder.com/640x360/111111/FFFFFF?text=Video+Link+Needed';
    
    // hqdefault는 거의 모든 영상에 존재하므로 가장 안전합니다.
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  };

  const openModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard} onClick={() => openModal(project)}>
            <div className={styles.imageWrapper}>
              <img 
                src={getYoutubeThumbnail(project.demo)} 
                alt={project.title} 
                className={styles.image}
                onError={(e) => {
                  // 만약 hqdefault마저 실패하면 기본 썸네일로 교체
                  const videoId = getYoutubeId(project.demo);
                  e.currentTarget.src = `https://img.youtube.com/vi/${videoId}/0.jpg`;
                }}
              />
              <div className={styles.overlay}>
                <div className={styles.playCircle}>
                  <span className={styles.playIcon}>▶</span>
                </div>
                <span className={styles.playText}>자세히 보기</span>
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
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className={styles.modalBackdrop} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeModal}>×</button>
            <div className={styles.modalBody}>
              <div className={styles.videoContainer}>
                <iframe 
                  src={`https://www.youtube.com/embed/${getYoutubeId(selectedProject.demo)}?autoplay=1`}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title={selectedProject.title}
                ></iframe>
              </div>
              <div className={styles.projectInfo}>
                <h2 className={styles.modalTitle}>{selectedProject.title}</h2>
                <div className={styles.modalTags}>
                  {selectedProject.tags.map((tag, i) => <span key={i} className={styles.tag}>{tag}</span>)}
                </div>
                <p className={styles.modalDescription}>{selectedProject.description}</p>
                <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className={styles.externalLink}>
                  유튜브에서 보기 ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
