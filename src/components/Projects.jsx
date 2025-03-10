import styled from 'styled-components'
import { motion } from 'framer-motion'
import GitHubIcon from '@mui/icons-material/GitHub'

const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #f8f9fa;
  margin-bottom: 3rem;
  text-align: center;
  background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: float 6s ease-in-out infinite;
`

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;
`

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  border: 2px solid transparent;
  background-clip: padding-box;
  position: relative;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -2px;
    border-radius: inherit;
    background: linear-gradient(60deg, #6366f1, #a855f7, #6366f1);
    animation: gradientBorder 3s ease infinite;
  }
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 16px 24px rgba(99, 102, 241, 0.2);
  }
`

const ProjectContent = styled.div`
  padding: 1.5rem;
`

const ProjectTitle = styled.h3`
  font-size: 1.8rem;
  color: #6366f1;
  margin-bottom: 1rem;
  font-weight: 600;
`

const ProjectDescription = styled.p`
  font-size: 1.1rem;
  color: #e2e8f0;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`

const TechTag = styled.span`
  background: rgba(99, 102, 241, 0.1);
  color: #6366f1;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  &:hover {
    background: #6366f1;
    color: white;
  }
`

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #6366f1;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  &:hover {
    color: #4f46e5;
  }
`

const Projects = () => {
  const projectsData = [
    {
      title: 'Autism Prediction Model',
      description: 'Developed a robust autism prediction model using XGBoost, SVM, and Logistic Regression, achieving high accuracy through feature engineering and data preprocessing. Handled imbalanced datasets with SMOTE and RandomOverSampler.',
      techStack: ['Python', 'Machine Learning', 'XGBoost', 'SVM', 'SMOTE'],
      githubLink: 'https://github.com/0Anshu1/Autism-Prediction-Model'
    },
    {
      title: 'Plant Leaf Detection',
      description: 'A real-time Machine Learning Model to identify a plant just by looking at the features of the leaf by an image of the leaf. The model utilizes convolutional neural networks (CNNs) and technologies like Python, TensorFlow, Keras, Computer Vision, Image Processing.',
      techStack: ['Python', 'TensorFlow', 'Keras', 'CNN', 'Computer Vision'],
      githubLink: 'https://github.com/0Anshu1/Plant-Leaf-Detection-Project'
    },
    {
      title: 'Music Player Application',
      description: 'A modern and intuitive music player application with features like playlist management, audio visualization, and seamless playback control. Built with a focus on user experience and responsive design.',
      techStack: ['JavaScript', 'React', 'HTML5 Audio API', 'CSS3', 'Web APIs'],
      githubLink: 'https://github.com/0Anshu1/Yup-anshu-music-player'
    },
    {
      title: 'Healthplus',
      description: 'A comprehensive healthcare application built with FlutterFlow, offering seamless user experience for health management and medical services. Features include appointment scheduling, health tracking, and medical records management.',
      techStack: ['Flutter', 'FlutterFlow', 'Firebase', 'Mobile Development', 'Healthcare'],
      githubLink: 'https://app.flutterflow.io/share/healthplus-dpfzpq'
    },
    {
      title: 'Expense Tracker',
      description: 'A comprehensive expense tracking application that helps users manage their finances effectively. Features include transaction management, budget planning, and financial analytics.',
      techStack: ['React', 'JavaScript', 'Web Development', 'Financial Management', 'User Interface'],
      githubLink: 'https://github.com/0Anshu1/Expense-Tracker'
    }
  ]

  return (
    <ProjectsContainer>
      <SectionTitle>Projects</SectionTitle>
      <ProjectsGrid>
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TechStack>
                {project.techStack.map((tech, techIndex) => (
                  <TechTag key={techIndex}>{tech}</TechTag>
                ))}
              </TechStack>
              <ProjectLink href={project.githubLink} target="_blank">
                {project.title === 'Healthplus' ? 'Link' : <><GitHubIcon /> View on GitHub</>}
              </ProjectLink>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  )
}

export default Projects