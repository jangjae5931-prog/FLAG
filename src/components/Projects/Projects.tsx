import { useState, useRef } from 'react';
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
  const scrollRef = useRef<HTMLDivElement>(null);

  const getYoutubeId = (url: string) => {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[7].length === 11) ? match[7] : null;
  };

  const getYoutubeThumbnail = (url: string) => {
    const videoId = getYoutubeId(url);
    if (!videoId) return 'https://via.placeholder.com/640x360/111111/FFFFFF?text=Video+Link+Needed';
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

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth * 0.8 : scrollLeft + clientWidth * 0.8;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.header}>
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.navButtons}>
          <button className={styles.navButton} onClick={() => scroll('left')}>←</button>
          <button className={styles.navButton} onClick={() => scroll('right')}>→</button>
        </div>
      </div>

      <div className={styles.sliderContainer} ref={scrollRef}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard} onClick={() => openModal(project)}>
            <div className={styles.imageWrapper}>
              <img 
                src={getYoutubeThumbnail(project.demo)} 
                alt={project.title} 
                className={styles.image}
                onError={(e) => {
                  const videoId = getYoutubeId(project.demo);
                  e.currentTarget.src = `https://img.youtube.com/vi/${videoId}/0.jpg`;
                }}
              />
              <div className={styles.overlay}>
                <div className={styles.playCircle}>
                  <span className={styles.playIcon}>▶</span>
                </div>
              </div>
            </div>
            <div className={styles.content}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <div className={styles.tags}>
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 모달 상세 페이지 */}
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
