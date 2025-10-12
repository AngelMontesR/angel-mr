import Tooltip from "./Tooltip";

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

  return (
    <div className="bg-gradient-to-l from-indigo-950 to-black py-12">
      <h2 className="text-5xl font-bold text-center text-white mb-8">Skills</h2>

      <div className="flex flex-wrap justify-center gap-5 max-w-5xl mx-auto">
        {icons.map((icon, i) => (
          <Tooltip key={i} text={icon.name} position="top">
            <img
              src={`/icons/${icon.src}`}
              alt={icon.name}
              className="h-20 w-20 object-contain opacity-90 hover:opacity-100 transition"
            />
          </Tooltip>
        ))}
      </div>
    </div>
  );
}
