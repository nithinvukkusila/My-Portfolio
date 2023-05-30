
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { mainSkills } from "../../consts";
const MainSkills = () => {
 return(
    <div className="social-media">
    <ul>
      {mainSkills.map((skill) => {
        return <li key={skill.id}>
          <a href={skill.link}>
            <FontAwesomeIcon icon={skill.icon} />
          </a>
        </li>;
      })}
    </ul>
  </div>
 )
}

export default MainSkills