import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Tooltip from './Tooltip';

export default function SocialIcons() {
  return (
    <div className="flex space-x-6 mt-6">
      <Tooltip text="GitHub" position="top">
        <a
          href="https://github.com/AngelMontesR"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-green-400 transition-colors"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </Tooltip>

      <Tooltip text="LinkedIn" position="top">
        <a
          href="https://www.linkedin.com/in/angel-montes-97ba5a248/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-green-400 transition-colors"
        >
          <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
        </a>
      </Tooltip>
    </div>
  );
}
