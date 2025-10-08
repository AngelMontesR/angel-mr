import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function CardPortafolio() {
  return (
    <div className="bg-white rounded-lg shadow-lg shadow-indigo-950">
      <img
        src="/project1.png"
        alt="Project 1"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">Project One</h3>
        <p className="text-gray-600">
          A brief description of Project One.
        </p>
        <a
          href="#"
          className="text-indigo-950 hover:underline mt-2 inline-block"
        >
            <FontAwesomeIcon icon={faGithub} size="2x"/>
        </a>
      </div>
    </div>
  );
}
