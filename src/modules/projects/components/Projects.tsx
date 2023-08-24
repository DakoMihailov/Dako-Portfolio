import { motion } from 'framer-motion';
import { PROJECTS } from '@/common/constant/projects';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div className='grid sm:grid-cols-2 gap-5 pt-2'>
      {PROJECTS.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <ProjectCard {...project} />
        </motion.div>
      ))}
    </div>
  );
};

export default Projects;
