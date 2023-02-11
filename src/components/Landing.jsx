import '../styles/Landing.css'
import profilePicture from '../assets/project-images/portfolio-pic.jpg'
import resume from '../assets/Resume.pdf'
import { GoMarkGithub } from 'react-icons/go'
import { AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'

const Landing = () => {
  return (
    <section id="landing">
      <h1 className="top-left">David Caldwell</h1>
      <div className="center-left">
        <h3>Software Engineer | Web Developer</h3>
      </div>
      <div className="landing-links bottom-left">
        <a href={resume} target="_blank" rel="noreferrer">
          View Resume
        </a>
      </div>
      <div className="top-right">
        <img
          className="profile-pic"
          src={profilePicture}
          alt="David Caldwell"
        />
      </div>
      <section className="landing-icons bottom-right">
        <a
          href="https://github.com/LeaderOfTheLost"
          target="_blank"
          rel="noreferrer"
        >
          <GoMarkGithub className="landing-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/david-caldwell92/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin className="landing-icon" />
        </a>
        <a
          href={`mailto: doubledc92@gmail.com`}
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineMail className="landing-icon" />
        </a>
      </section>
    </section>
  )
}

export default Landing
