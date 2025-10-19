import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function CardPortafolio() {
    return (
        <div className="relative w-full h-72 rounded-xl shadow-lg shadow-indigo-900 overflow-hidden">
            <img
                src="/img/desk.jpg"
                alt="Project 1"
                className="w-full h-full object-cover transition-transform"
            />
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-indigo-950 bg-opacity-50 flex flex-col justify-end p-5">
                <h3 className="text-white text-xl font-bold mb-2">Project One</h3>
                <p className="text-gray-300 mb-4 text-sm">
                    A brief description of Project One. Resalta lo más importante.
                    <span className="underline cursor-pointer ml-2 text-green-400 hover:text-green-600">
                        Ver más
                    </span>
                </p>
                <div className="flex space-x-4">
                    <a
                        href="#"
                        className="text-white hover:text-gray-200 transition-colors duration-200"
                        aria-label="GitHub"
                    >
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a
                        href="#"
                        className="text-blue-400 hover:text-blue-600 transition-colors duration-200"
                        aria-label="LinkedIn"
                    >
                        <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                    </a>
                </div>
            </div>
        </div>
    );
}