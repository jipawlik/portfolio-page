// import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <span className="footer__copyright">
        copyright &copy; 2021 joanna izabela pawlik | all rights reserved{" "}
      </span>

      <span className="footer__links">
        <ExternalLink href="https://github.com/jipawlik">
          <FontAwesomeIcon icon={faGithub} className="link-icon" />
        </ExternalLink>
        <ExternalLink href="https://www.linkedin.com/in/joanna-izabela-pawlik">
          <FontAwesomeIcon icon={faLinkedin} className="link-icon" />
        </ExternalLink>
        <ExternalLink href="https://www.instagram.com/epeyotte/?hl=en">
          <FontAwesomeIcon icon={faInstagram} className="link-icon" />
        </ExternalLink>
      </span>
      <span className="photo-info">Photography &copy; Martyna Behrendt</span>
    </footer>
  );
};
export default Footer;
