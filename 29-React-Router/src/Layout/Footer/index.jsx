import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "./index.css"
const Footer = () => {
  return (
    <footer>
      <div className="footerIcons">
        <FontAwesomeIcon icon={faTwitter} className="icon" />
        <FontAwesomeIcon icon={faFacebook} className="icon" />
        <FontAwesomeIcon icon={faGithub} className="icon" />
      </div>
      <p className="copyRight">Copyright © Clean Blog</p>
    </footer>
  );
};

export default Footer;
