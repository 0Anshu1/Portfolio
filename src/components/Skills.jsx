import styled from 'styled-components'
import { motion } from 'framer-motion'

const SkillsContainer = styled.div`
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;
`

const SkillCategory = styled(motion.div)`
  position: relative;
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 16px;
  border: 2px solid transparent;
  background-clip: padding-box;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
  transition: all 0.3s ease;

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
    transform: translateY(-5px);
    box-shadow: 0 12px 36px 0 rgba(99, 102, 241, 0.2);
  }
`

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1.5rem;
`

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const SkillItem = styled(motion.li)`
  font-size: 1.1rem;
  color: #4b5563;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  &:before {
    content: '•';
    color: #6366f1;
    margin-right: 0.5rem;
  }
`

const Skills = () => {
  const skillsData = [
    {
      category: 'Frontend Skills',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Figma', 'Flutter']
    },
    {
      category: 'Backend Skills',
      skills: ['MySQL', 'PHP', 'MongoDB', 'Express.js', 'Firebase']
    },
    {
      category: 'Programming Skills',
      skills: ['C', 'C++', 'Python', 'Java']
    },
    {
      category: 'Data Science/AI-ML Skills',
      skills: ['TensorFlow', 'PyTorch', 'Deep Learning', 'Computer Vision', 'Machine Learning', 'Data Analysis', 'Neural Networks', 'OpenCV']
    }
  ]

  return (
    <SkillsContainer>
      <SectionTitle>Skills</SectionTitle>
      <SkillsGrid>
        {skillsData.map((category, index) => (
          <SkillCategory
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <CategoryTitle>{category.category}</CategoryTitle>
            <SkillsList>
              {category.skills.map((skill, skillIndex) => (
                <SkillItem
                  key={skillIndex}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  {skill}
                </SkillItem>
              ))}
            </SkillsList>
          </SkillCategory>
        ))}
      </SkillsGrid>
    </SkillsContainer>
  )
}

export default Skills