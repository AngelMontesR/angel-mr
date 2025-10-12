import { motion } from "framer-motion";

export default function SkillsCarousel() {
  const icons = [
    "angular.svg",
    "azure.svg",
    "docker.svg",
    "dotnet.svg",
    "laravel.svg",
    "react.svg",
    "spring.svg",
    "tailwind.svg",
    "node.svg",
    "python.svg",
  ];

  // Duplicamos los iconos para efecto infinito
  const repeatedIcons = [...icons, ...icons, ...icons]; // triple repetición

  return (
      <motion.div
        className="flex gap-5 w-72"
        animate={{ x: ["0%", "-33.33%"] }} // ahora se mueve un tercio, no la mitad
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 10,
            ease: "linear",
          },
        }}
      >
        {repeatedIcons.map((src, i) => (
          <img
            key={i}
            src={`/icons/${src}`}
            alt={src}
            className="h-20 w-20 object-contain opacity-90 hover:opacity-100 transition"
          />
        ))}
      </motion.div>
  );
}
