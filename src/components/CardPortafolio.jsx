import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function CardPortafolio() {
    return (
    <div className="relative w-80 h-64 rounded-xl shadow-lg shadow-indigo-900 overflow-hidden group cursor-pointer">
            <img src="/project1.png" alt="Project 1" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <h3 className="text-white text-xl font-bold mb-2">Project One</h3>
                <p className="text-gray-300 mb-4 text-sm"> A brief description of Project One. Resalta lo más importante. </p>
                <div className="flex space-x-4">
                    <a href="#" className="text-white hover:text-gray-200 transition-colors duration-200" aria-label="GitHub" >
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a href="#" className="text-blue-400 hover:text-blue-600 transition-colors duration-200" aria-label="LinkedIn" >
                        <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                    </a>
                </div>
            </div>
        </div>
    );
}