import { useState } from 'react';
import styles from './Projects.module.css';
import portfolioData from '../../data/portfolio.json';
import { motion, AnimatePresence } from 'framer-motion';

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

  const getYoutubeThumbnail = (url: string) => {
    const videoId = getYoutubeId(url);
    return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : '';
  };

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.projectsContainer}>
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className={styles.projectSection}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className={styles.projectContent}>
              <div className={styles.mediaSide}>
                <div className={styles.imageWrapper} onClick={() => setSelectedProject(project)}>
                  <img src={getYoutubeThumbnail(project.demo)} alt={project.title} className={styles.image} />
                  <div className={styles.overlay}>
                    <span className={styles.playIcon}>VIEW FILM</span>
                  </div>
                </div>
              </div>
              <div className={styles.infoSide}>
                <span className={styles.projectNumber}>0{index + 1}</span>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <div className={styles.tags}>
                  {project.tags.map((tag, i) => <span key={i} className={styles.tag}>{tag}</span>)}
                </div>
                <button className={styles.detailsButton} onClick={() => setSelectedProject(project)}>
                  VIEW DETAILS ⟶
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className={styles.modalBackdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className={styles.modalContent}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.closeButton} onClick={() => setSelectedProject(null)}>×</button>
              <div className={styles.modalBody}>
                <div className={styles.videoContainer}>
                  <iframe 
                    src={`https://www.youtube.com/embed/${getYoutubeId(selectedProject.demo)}?autoplay=1`}
                    frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen
                  ></iframe>
                </div>
                <div className={styles.projectInfo}>
                  <h2>{selectedProject.title}</h2>
                  <p>{selectedProject.description}</p>
                  <div className={styles.modalTags}>
                    {selectedProject.tags.map((tag, i) => <span key={i} className={styles.tag}>{tag}</span>)}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
