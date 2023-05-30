
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialMediaLinks } from "../../consts";
const SocialMedia = () => {
 return(
    <div className="social-media">
    <ul>
      {socialMediaLinks.map((socialMedia) => {
        return <li key={socialMedia.id}>
          <a href={socialMedia.link}>
            <FontAwesomeIcon icon={socialMedia.icon} />
          </a>
        </li>;
      })}
    </ul>
  </div>
 )
}

export default SocialMedia