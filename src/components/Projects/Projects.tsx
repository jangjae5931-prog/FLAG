import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow } from 'swiper/modules';
import styles from './Projects.module.css';
import portfolioData from '../../data/portfolio.json';
import { motion, AnimatePresence } from 'framer-motion';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

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
    // hqdefault는 모든 유튜브 영상에서 제공하는 가장 안정적인 고화질 썸네일입니다.
    return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : '';
  };

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.titleContainer}>
        <motion.h2 
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Selected Works
        </motion.h2>
      </div>

      <div className={styles.swiperWrapper}>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 2.5,
            slideShadows: false,
          }}
          navigation={true}
          modules={[EffectCoverflow, Navigation]}
          className={styles.mySwiper}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className={styles.swiperSlide}>
              {({ isActive }) => (
                <div 
                  className={`${styles.card} ${isActive ? styles.activeCard : ''}`}
                  onClick={() => isActive && setSelectedProject(project)}
                >
                  <div className={styles.imageWrapper}>
                    <img 
                      src={getYoutubeThumbnail(project.demo)} 
                      alt={project.title} 
                      className={styles.image} 
                    />
                    {isActive && (
                      <div className={styles.overlay}>
                        <span className={styles.playIcon}>VIEW DETAILS</span>
                      </div>
                    )}
                  </div>
                  <AnimatePresence>
                    {isActive && (
                      <motion.div 
                        className={styles.info}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                      >
                        <h3 className={styles.projectTitle}>{project.title}</h3>
                        <div className={styles.tags}>
                          {project.tags.map((tag, i) => <span key={i} className={styles.tag}>{tag}</span>)}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 모달 상세 페이지 */}
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
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
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
