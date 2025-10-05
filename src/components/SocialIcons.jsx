import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn  } from '@fortawesome/free-brands-svg-icons'; // Importa iconos de marcas/sociales
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons'; // Importa icono de archivo genérico

export default function SocialIcons() {
  return (
    <div className="flex space-x-4 mt-6">
      <a href="https://github.com/AngelMontesR" target="_blank" className="text-white hover:text-green-400 transition-colors">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>

      <a href="https://www.linkedin.com/in/angel-montes-97ba5a248/" target="_blank" className="text-white hover:text-green-400 transition-colors">
        <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
      </a>

      <a href="/cv/AngelMontesR.pdf" target="_blank" className="text-white hover:text-green-400 transition-colors" download>
        <FontAwesomeIcon icon={faFileArrowDown} size="2x" />
      </a>
    </div>
  );
}