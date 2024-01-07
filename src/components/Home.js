import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import About from './About';
import Experiences from './Experiences';
import Projects from './Projects';
import Contact from './Contact';
import '../index.css';

import { FaLinkedin, FaGithub } from 'react-icons/fa';
const Home = ({ theme, isDarkMode, isMediumScreen, isSmallScreen, windowSize, windowWidth, liveSiteText, sourceCodeText }) => {
  return (
    <section id='home' className="background p-5 min-vh-100">
      <div className='container-fluid mainHome'>
        <div className='d-sm-flex align-items-center justify-content-between'>
          <div className='ms-sm-5 ps-sm-5 d-flex flex-column text-center align-items-center align-items-lg-start'>
            <h1 className='NameColour'>Hey! I'm Adam Azizi</h1>
            <h1 id='AboutMe' className='fw-bold custom-font'>Software Developer</h1>
          </div>
          {windowWidth <= 700 && <div>
            <Player
              src='https://assets6.lottiefiles.com/packages/lf20_DbCYKfCXBZ.json'
              className="player"
              loop
              autoplay
              style={{ maxHeight: '150px', maxWidth: '150px' }}
            />
          </div>}
          {windowWidth > 700 && windowWidth < 1100 && <div>
            <Player
              src='https://assets6.lottiefiles.com/packages/lf20_DbCYKfCXBZ.json'
              className="player"
              loop
              autoplay
              style={{ maxHeight: '350px', maxWidth: '350px' }}
            />
          </div>}
          {windowWidth > 1100 && <div>
            <Player
              src='https://assets6.lottiefiles.com/packages/lf20_DbCYKfCXBZ.json'
              className="player"
              loop
              autoplay
              style={{ maxHeight: '400px', maxWidth: '400px' }}
            />
          </div>}
        </div>
      </div>
      <hr style={{ backgroundColor: theme }} /><br />
      <div className='displayFlexT'>
        {windowWidth > 1200 && <div>
          <Player
            src='https://assets4.lottiefiles.com/packages/lf20_5ko2mBiWUp.json'
            className="player spLottie"
            loop
            autoplay
            style={{ maxHeight: '700px', maxWidth: '700px' }}
          />
        </div>}
        {windowWidth > 1000
          ? <div>
            <h1 className='fw-bold custom-font DescMe DescMe2'>About me</h1>
            <ul className='DescMe aboutTextColour'>
              <li style={{ fontSize: '17px', marginTop: '7px' }}>I am a passionate Software Developer with hands-on experience at PMC, Tetra, and Salumatics</li>
              <li style={{ fontSize: '17px', marginTop: '7px' }}>During my experiences, I have contributed to the development of different applications, refining my skills in agile methodologies</li>
              <li style={{ fontSize: '17px', marginTop: '7px' }}>I've also completed diverse projects using React.js, Node.js, Django, Python for scripting, web scraping, web development, machine learning, and data science</li>
              <li style={{ fontSize: '17px', marginTop: '7px' }}>I thrive in dynamic environments and I am always eager to learn new technologies and methodologies</li>
              <li style={{ fontSize: '17px', marginTop: '7px' }}>In my free time outside of work, I find joy in engaging in sports such as soccer and basketball</li>
              <li style={{ fontSize: '17px', marginTop: '7px' }}>My passion for soccer drives me to stay well-informed about the sport by following current news and matches</li>
              <li style={{ fontSize: '17px', marginTop: '7px' }}> I'm very approachable and easy to talk to so feel free to reach out: <a style={{ 'color': '#3EDD8e' }} href='mailto:adamazizi101@gmail.com'>adamazizi101@gmail.com</a><br /><br /></li>
              <a href='https://www.linkedin.com/in/adamazizi/' target='_blank' rel='noreferrer' style={{ fontSize: '20px', marginRight: '10px' }}>
                <FaLinkedin style={{ color: '#3edd8e' }} />
              </a>
              <a href='https://github.com/adamazizi10' target='_blank' rel='noreferrer' style={{ fontSize: '20px', marginRight: '10px' }}>
                <FaGithub style={{ color: '#3edd8e' }} />
              </a>
            </ul>
          </div>
          : <div>
            <h1 className='fw-bold custom-font DescMe DescMe2'>About me</h1>
            <ul className='DescMe aboutTextColour'>
              <li style={{ fontSize: '15px', marginTop: '7px' }}>I am a passionate Software Developer with hands-on experience at PMC, Tetra, and Salumatics</li>
              <li style={{ fontSize: '15px', marginTop: '7px' }}>During my experiences, I have contributed to the development of applications, refining my skills in agile methodologies</li>
              <li style={{ fontSize: '15px', marginTop: '7px' }}>I've also completed diverse projects using React.js, Node.js, Django, Python for scripting, web scraping, web development, machine learning, data science, and testing</li>
              <li style={{ fontSize: '15px', marginTop: '7px' }}>I thrive in dynamic environments and am always eager to learn new technologies and methodologies</li>
              <li style={{ fontSize: '15px', marginTop: '7px' }}>In my free time outside of work, I find joy in engaging in sports such as soccer and basketball</li>
              <li style={{ fontSize: '15px', marginTop: '7px' }}> I'm very approachable and easy to talk to so feel free to reach out: <a style={{ 'color': '#3EDD8e' }} href='mailto:adamazizi101@gmail.com'>adamazizi101@gmail.com</a><br /><br /></li>
              <a href='https://www.linkedin.com/in/adamazizi/' target='_blank' rel='noreferrer' style={{ fontSize: '20px', marginRight: '10px' }}>
                <FaLinkedin style={{ color: '#3edd8e' }} />
              </a>
              <a href='https://github.com/adamazizi10' target='_blank' rel='noreferrer' style={{ fontSize: '20px', marginRight: '10px' }}>
                <FaGithub style={{ color: '#3edd8e' }} />
              </a>
            </ul>
          </div>
        }

      </div>

      <br /><hr id='skills' style={{ backgroundColor: theme }}></hr><br /><br /><br />
      <About isDarkMode={isDarkMode} windowWidth={windowWidth} isSmallScreen={isSmallScreen} isMediumScreen={isMediumScreen} />
      <hr id='experience' style={{ backgroundColor: theme }} />
      <Experiences windowWidth={windowWidth} isSmallScreen={isSmallScreen} isMediumScreen={isMediumScreen} />
      <hr id='projects' style={{ backgroundColor: theme }} />
      <Projects windowSize={windowSize} windowWidth={windowWidth} isSmallScreen={isSmallScreen} isMediumScreen={isMediumScreen} liveSiteText={liveSiteText} sourceCodeText={sourceCodeText} />
      <hr id='contact' style={{ backgroundColor: theme }} />
      <Contact />
    </section>
  )
}

export default Home