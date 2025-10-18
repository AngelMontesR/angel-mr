import Tooltip from "./Tooltip";
import './Skills.css'; // Importa el archivo CSS para la animación

export default function Skills() {
  const icons = [
    { src: "angular.svg", name: "Angular" },
    { src: "azure.svg", name: "Azure" },
    { src: "docker.svg", name: "Docker" },
    { src: "dotnet.svg", name: ".NET" },
    { src: "laravel.svg", name: "Laravel" },
    { src: "react.svg", name: "React" },
    { src: "spring.svg", name: "Spring" },
    { src: "tailwind.svg", name: "Tailwind CSS" },
    { src: "node.svg", name: "Node.js" },
    { src: "python.svg", name: "Python" },
  ];

  // Duplicamos los iconos para asegurar la transición infinita y suave
  const infiniteIcons = [...icons, ...icons];

  return (
    <div className="overflow-hidden max-w-7xl mx-auto py-4 relative">

      {/* Contenedor que se desplaza: usa flex, no-wrap y la clase de animación */}
      <div className="flex flex-nowrap w-[200%] animate-scroll">
        {infiniteIcons.map((icon, i) => (
          // El 'flex-shrink-0' es CRUCIAL para que los elementos no se achiquen
          <div
            className="flex-shrink-0 mx-5 p-3 rounded-xl bg-white/5 hover:bg-gray-700 hover:rotate-6 transition duration-300"
            key={i}
          >
            <Tooltip text={icon.name} position="top">
              <img
                src={`/icons/${icon.src}`}
                alt={icon.name}
                className="h-14 w-14 object-contain opacity-90 hover:opacity-100 transition"
              />
            </Tooltip>
          </div>
        ))}
      </div>
    </div>
  );
}