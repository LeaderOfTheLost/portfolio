import '../styles/Footer.css'
import { GoMarkGithub } from 'react-icons/go'
import { AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'

const Footer = () => {
  return (
    <section id="footer">
      <a
        href="https://github.com/LeaderOfTheLost"
        target="_blank"
        rel="noreferrer"
      >
        <GoMarkGithub className="footer-icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/david-caldwell92/"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillLinkedin className="footer-icon" />
      </a>
      <a href={`mailto: doubledc92@gmail.com`} target="_blank" rel="noreferrer">
        <AiOutlineMail className="footer-icon" />
      </a>
    </section>
  )
}

export default Footer
