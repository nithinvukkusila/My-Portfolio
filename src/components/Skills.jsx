import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3, faJsSquare, faReact, faVuejs, faSass, faNodeJs, faGithub, faGitlab, faChrome } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
const Skills = () => {
  return (
    <section id="skills">
      <div className="section-heading">
        <h2>SKILLS</h2>
      </div>
      <div className="skills" data-aos="fade-up" data-aos-duration="1500">
        <ul className="icons">
          <li>
            <FontAwesomeIcon icon={faHtml5} />
          </li>
          <li>
          <FontAwesomeIcon icon={faCss3} />
          </li>
          <li>
          <FontAwesomeIcon icon={faJsSquare} />
          </li>
          <li>
          <FontAwesomeIcon icon={faReact} />
          </li>
          <li>
            <FontAwesomeIcon icon={faVuejs} />
          </li>
          <li>
            <FontAwesomeIcon icon={faSass} />
          </li>
          <li>
            <FontAwesomeIcon icon={faNodeJs} />
          </li>
        </ul>
      </div>
      <div className="spacer"></div>
      <div className="section-heading">
        <h2>TOOLS</h2>
      </div>
      <div className="skills" data-aos="fade-up" data-aos-duration="1500">
        <ul className="icons">
          <li>
          <FontAwesomeIcon icon={faGithub} />
          </li>
          <li>
           <FontAwesomeIcon icon={faGitlab} />
          </li>
          <li>
           <FontAwesomeIcon icon={faCode} />
          </li>
          <li>
           <FontAwesomeIcon icon={faChrome} />
          </li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
