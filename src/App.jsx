import { useState } from 'react'
import styled from 'styled-components'
import { Link as ScrollLink } from 'react-scroll'
import { motion } from 'framer-motion'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import './App.css'
import './modern-effects.css'

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #1a1a1a;
  font-family: 'Inter', sans-serif;
  color: #f8f9fa;
`

const Navbar = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background: rgba(26, 26, 26, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  z-index: 1000;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 0 3%;
  }
`

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`

const NavLink = styled(ScrollLink)`
  color: #f8f9fa;
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 4px;

  &:hover {
    color: #6366f1;
    background: rgba(99, 102, 241, 0.1);
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
    font-size: 0.9rem;
  }
`

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10%;
  background: linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%);
  position: relative;
  color: white;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: center;
    gap: 2rem;
    padding: 2rem 5%;
    text-align: center;
  }
`

const HeroContent = styled.div`
  max-width: 600px;
`

const HeroImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`

const SocialIcon = styled.a`
  color: white;
  font-size: 1.5rem;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-3px);
  }
`

const ContentSection = styled.section`
  padding: 120px 0;
  background-color: #1a1a1a;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  }
  
  @media (max-width: 768px) {
    padding: 80px 0;
  }
`

function App() {
  return (
    <AppContainer>
      <Navbar>
        <h2>Anshu Saini</h2>
        <NavLinks>
          <NavLink to="about" smooth={true}>About</NavLink>
          <NavLink to="skills" smooth={true}>Skills</NavLink>
          <NavLink to="projects" smooth={true}>Projects</NavLink>
          <NavLink to="contact" smooth={true}>Contact</NavLink>
        </NavLinks>
      </Navbar>
      
      <HeroSection>
        <HeroContent>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ fontSize: '3rem', marginBottom: '1rem' }}
          >
            Hi, I'm Anshu Saini
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ fontSize: '1.2rem', marginBottom: '2rem' }}
          >
            A passionate Full Stack Developer & AI Enthusiast
          </motion.p>
          <SocialLinks>
            <SocialIcon href="https://github.com/0Anshu1" target="_blank">
              <GitHubIcon />
            </SocialIcon>
            <SocialIcon href="https://www.linkedin.com/in/sainianshu/" target="_blank">
              <LinkedInIcon />
            </SocialIcon>
            <SocialIcon href="mailto:anshucodes4u@gmail.com">
              <EmailIcon />
            </SocialIcon>
            <SocialIcon href="tel:+918306629224">
              <PhoneIcon />
            </SocialIcon>
          </SocialLinks>
        </HeroContent>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <HeroImage src="/me.jpg" alt="Anshu Saini" />
        </motion.div>
      </HeroSection>

      <ContentSection id="about">
        <About />
      </ContentSection>

      <ContentSection id="skills">
        <Skills />
      </ContentSection>

      <ContentSection id="projects">
        <Projects />
      </ContentSection>

      <ContentSection id="contact">
        {/* Contact section content will be added next */}
      </ContentSection>
    </AppContainer>
  )
}

export default App
