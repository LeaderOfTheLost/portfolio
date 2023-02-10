import "../styles/Project.css"
import ProjectCard from "./ProjectCard"
import doublesTroubleSS from "../assets/project-images/doubles-trouble-ss.png"
import mtswSS from "../assets/project-images/mtsw-ss.png"
import diveBuddySS from "../assets/project-images/dive-buddy-ss.png"
import {
  DiCss3Full,
  DiHtml5,
  DiMongodb,
  DiNodejsSmall,
  DiReact,
} from "react-icons/di"
import { SiExpress, SiJavascript } from "react-icons/si"

const Projects = () => {
  return (
    <section id="projects">
      <h1>Projects</h1>
      <div className="project-card-container">
        <ProjectCard
          name="The Dive Buddy"
          image={diveBuddySS}
          description="Developed a MERN stack application that allows users to create dive logs and gear loadouts to keep track of their diving adventures and gear they need to bring along a dive."
          gitHubRepo="https://github.com/LeaderOfTheLost/the-dive-buddy"
          deployedSite="https://the-dive-buddy.herokuapp.com/"
          icons={[
            <DiHtml5 className="icon" />,
            <DiCss3Full className="icon" />,
            <SiJavascript className="icon" />,
            <DiReact className="icon" />,
            <SiExpress className="icon" />,
            <DiNodejsSmall className="icon" />,
            <DiMongodb className="icon" />,
          ]}
        />

        <ProjectCard
          name="More Than Seven Wonders"
          image={mtswSS}
          description="Created a MERN stack application that allows users to create a list of their favorite places to travel and share reviews of those places with other users."
          gitHubRepo="https://github.com/LeaderOfTheLost/more_than_seven_wonders"
          deployedSite="https://mtsw.herokuapp.com/"
          icons={[
            <DiHtml5 className="icon" />,
            <DiCss3Full className="icon" />,
            <SiJavascript className="icon" />,
            <DiReact className="icon" />,
            <SiExpress className="icon" />,
            <DiNodejsSmall className="icon" />,
            <DiMongodb className="icon" />,
          ]}
        />
        <ProjectCard
          name="Doubles Trouble"
          image={doublesTroubleSS}
          description="Utilized HTML, CSS, and JavaScript to create a web browser game from a game that I grew up with, Trouble."
          gitHubRepo="https://github.com/LeaderOfTheLost/doubles_trouble_browser_game"
          deployedSite="https://doubles_trouble_browser_game.surge.sh/"
          icons={[
            <DiHtml5 className="icon" />,
            <DiCss3Full className="icon" />,
            <SiJavascript className="icon" />,
          ]}
        />
      </div>
    </section>
  )
}

export default Projects
