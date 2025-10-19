// TimelineItem.jsx
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function TimelineItem({ content, side, index }) {
  const ref = useRef(null);
  // useInView detecta si el elemento es visible
  const isInView = useInView(ref, { once: true, amount: 0.3 }); // Se activa una vez, cuando el 30% está visible

  // Define las variantes de la animación
  const variants = {
    hidden: {
      opacity: 0,
      x: side === "right" ? 100 : -100 // Desplazamiento inicial
    },
    visible: {
      opacity: 1,
      x: 0, // Posición final
      transition: {
        duration: 0.8,
        delay: index * 0.1 // Pequeño retraso para un efecto escalonado
      }
    }
  };

  // Clases CSS que dependen del lado
  const containerClasses = side === "right"
    ? "right-timeline"
    : "flex-row-reverse left-timeline";

  return (
    <motion.div
      ref={ref}
      className={`mb-8 flex justify-between items-center w-full ${containerClasses}`}
      variants={variants}
      initial="hidden"
      // Se anima a 'visible' si isInView es true
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="order-1 w-5/12"></div>

      {/* Círculo Central */}
      <div className="z-20 flex items-center order-1 bg-indigo-500 shadow-xl w-8 h-8 rounded-full">
        <h1 className="mx-auto text-white font-semibold text-lg">{index + 1}</h1>
      </div>

      {/* Contenido de la Tarjeta */}
      <div className="order-1 bg-indigo-800 rounded-lg shadow-xl w-5/12 p-6">
        <h3 className="mb-3 font-bold text-white text-xl">{content.title}</h3>
        <p className="text-sm leading-snug tracking-wide text-indigo-200 text-opacity-100">
          {content.company} | {content.dates}
        </p>
        <ul className="list-disc list-inside text-sm leading-snug tracking-wide text-indigo-100 mt-2">
          {content.tasks.map((task, i) => (
            <li key={i}>{task}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}