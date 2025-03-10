import styled from 'styled-components'
import { motion } from 'framer-motion'

const AboutContainer = styled.div`
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

const EducationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`

const EducationItem = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  border: 2px solid transparent;
  background-clip: padding-box;
  position: relative;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
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
    transform: translateY(-8px);
    box-shadow: 0 16px 48px rgba(99, 102, 241, 0.2);
  }
`

const SchoolName = styled.h3`
  font-size: 1.5rem;
  color: #6366f1;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`

const Degree = styled.p`
  font-size: 1.2rem;
  color: #e2e8f0;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`

const Year = styled.span`
  font-size: 1rem;
  color: #94a3b8;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`

const About = () => {
  const educationData = [
    {
      school: 'IIITDM Kancheepuram',
      degree: 'BTech (CSE With Major in Artificial Intelligence)',
      year: '2022 - Expected June 2026',
      grade: 'GPA - 7.17/10'
    },
    {
      school: 'Chinar Public School, Alwar',
      degree: '12th Grade',
      year: '2021',
      grade: 'Percentage - 95'
    },
    {
      school: 'Chinar Public School',
      degree: '10th Grade',
      year: '2019',
      grade: 'Percentage - 94.2'
    }
  ]

  return (
    <AboutContainer>
      <SectionTitle>About Me</SectionTitle>
      <EducationContainer>
        {educationData.map((edu, index) => (
          <EducationItem
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <SchoolName>{edu.school}</SchoolName>
            <Degree>{edu.degree}</Degree>
            <Year>{edu.year}</Year>
            <Year>{edu.grade}</Year>
          </EducationItem>
        ))}
      </EducationContainer>
    </AboutContainer>
  )
}

export default About