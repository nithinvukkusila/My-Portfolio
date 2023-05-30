import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { skillsMap } from "../consts";
const Project = ({ project }) => {

    return (
        <div className="project">
          <div className="project-image" data-aos="fade-up" data-aos-duration="1500">
            <img src={project.image} />
          </div>
          <div className="about-project"  data-aos="fade-up" data-aos-duration="1500">
            <h2 className="project-heading" data-aos="fade-up" data-aos-duration="1500"> {project.heading}</h2>
            <div className="content" data-aos="fade-up"  data-aos-duration="1500">
              <p>
               { project.aboutProject }
              </p>
            </div>
            <div className="made-with" data-aos="fade-up" data-aos-duration="1500">
              <h5>Made With</h5>
              <div className="icons">
                <ul>
                 { project.techStack.map((skill) => {
                    return <FontAwesomeIcon icon={skillsMap[skill]} />
                 }) }
                </ul>
              </div>
              <h5>LIVE SITE | GITHUB</h5>
            </div>
          </div>
        </div>
    )
}

export default Project