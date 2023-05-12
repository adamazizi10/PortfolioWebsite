import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import './design.css';


const About = () => {
  return (
    <div className='container-fluid'>
      <div className='d-sm-flex align-items-center justify-content-between'>
        <div>
          <Player
            src='https://assets9.lottiefiles.com/packages/lf20_mXdqmT1SH2.json'
            className="player"
            loop
            autoplay
            style={{ maxHeight: '700px', maxWidth: '700px' }}
          />
        </div>
        <div className='ms-sm-5 ps-sm-5 d-flex flex-column text-center align-items-center align-items-lg-start'>
          <h1 className='custom-font'>Skills, Languages, and Technologies</h1>
        </div>x
      </div>
      <br />
      {/* Front-End */}
      <div className='d-flex flex-column align-items-center justify-content-center'>
        <div className='ms-sm-5 ps-sm-5 d-flex flex-column text-center align-items-center'>
          <h1 className='pt-5 pb-2 custom-color'>Front-End</h1>
          <div className='d-flex justify-content-center flex-wrap'>
            <div className='text-center mx-4'>
              <img className='my-3' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="HTML5" width="60" height="60" />
              <p className='mb-0 technology-name'>HTML5</p>
            </div>
            <div className='text-center mx-4'>
              <img className='my-3' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="CSS3" width="60" height="60" />
              <p className='mb-0 technology-name'>CSS3</p>
            </div>
            <div className='text-center mx-4'>
              <img className='my-3' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" width="60" height="60" />
              <p className='mb-0 technology-name'>JavaScript</p>
            </div>
            <div className='text-center mx-4'>
              <img className='my-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width="60" height="60" />
              <p className='mb-0 technology-name'>React</p>
            </div>
            <div className='text-center mx-4'>
              <img className='my-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js" width="60" height="60" />
              <p className='mb-0 technology-name'>Vue.js</p>
            </div>
            <div className='text-center mx-4'>
              <img className='my-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt="AngularJS" width="60" height="60" />
              <p className='mb-0 technology-name'>AngularJS</p>
            </div>
            <div className='text-center mx-4'>
              <img className='my-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="Sass" width="60" height="60" />
              <p className='mb-0 technology-name'>Sass</p>
            </div>
            <div className='text-center mx-4'>
              <img className='my-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" width="60" height="60" />
              <p className='mb-0 technology-name'>Bootstrap</p>
            </div>
          </div>
        </div>
      </div>

      <br />
      {/*Back-End*/}
      <div className='d-flex flex-column align-items-center justify-content-center'>
        <div className='ms-sm-5 ps-sm-5 d-flex flex-column text-center align-items-center'>
          <h1 className='pt-5 pb-2 custom-color'>Back-End</h1>
          <div className='d-flex justify-content-center flex-wrap'>
            <div className='text-center mx-4'>
              <img className='my-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="python" width="60" height="60" />
              <p className='mb-0 technology-name'>Python</p>
            </div>
            <div className='text-center mx-4'>
              <img className='my-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="nodejs" width="60" height="60" />
              <p className='mb-0 technology-name'>Node.js</p>
            </div>
            <div className='text-center mx-4'>
              <img className='my-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="express" width="60" height="60" />
              <p className='mb-0 technology-name'>Express.js</p>
            </div>
            <div className='text-center mx-4'>
              <img className='my-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="csharp" width="60" height="60" />
              <p className='mb-0 technology-name'>C#</p>
            </div>
            <div className='text-center mx-4'>
              <img className='my-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" alt="dotnetcore" width="60" height="60" />
              <p className='mb-0 technology-name'>.NET Core</p>
            </div>
            <div className='text-center mx-4'>
              <img className='my-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="gijavat" width="60" height="60" />
              <p className='mb-0 technology-name'>Java</p>
            </div>
            <div className='text-center mx-4'>
              <img className='my-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" width="60" height="60" />
              <p className='mb-0 technology-name'>C++</p>
            </div>
            <div className='text-center mx-4'>
              <img className='my-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" alt="kotlin" width="60" height="60" />
              <p className='mb-0 technology-name'>Kotlin</p>
            </div>
          </div>
        </div>
      </div>

      <br />
      {/* Databases and tech */}
      <div className='d-flex flex-column align-items-center justify-content-center'>
        <div className='ms-sm-5 ps-sm-5 d-flex flex-column text-center align-items-center'>
          <h1 className='pt-5 pb-2 custom-color'>Databases & Technologies</h1>
          <div className='d-flex justify-content-center flex-wrap'>
            <div className='text-center mx-4'>
              <img className='my-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" alt="oracle" width="60" height="60" />
              <p className='mb-0 technology-name'>Oracle Database</p>
            </div>
            <div className='text-center mx-4'>
              <img className='my-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="postgresql" width="60" height="60" />
              <p className='mb-0 technology-name'>PostgreSQL</p>
            </div>
            <div className='text-center mx-4'>
              <img className='my-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="mysql" width="60" height="60" />
              <p className='mb-0 technology-name'>MySQL</p>
            </div>
            <div className='text-center mx-4'>
              <img className='my-3' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Jupyter_logo.svg/1200px-Jupyter_logo.svg.png" alt="Jupyter Notebook" width="60" height="60" />
              <p className='mb-0 technology-name'>Jupyter Notebook</p>
            </div>
            <div className='text-center mx-4'>
              <img className='my-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="git" width="60" height="60" />
              <p className='mb-0 technology-name'>Git</p>
            </div>
            <div className='text-center mx-4'>
              <img className='my-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github" width="60" height="60" />
              <p className='mb-0 technology-name'>GitHub</p>
            </div>
            <div className='text-center mx-4'>
              <img className='my-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" alt="selenium" width="60" height="60" />
              <p className='mb-0 technology-name'>Selenium</p>
            </div>
          </div>
        </div>
      </div>
      <br /><br />
    </div>
  )
}

export default About