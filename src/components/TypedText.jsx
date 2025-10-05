// components/TypedText.jsx
import React from 'react';
import { Typed } from 'react-typed';

export default function TypedText() {
    return (
        // Usamos el mismo estilo que tenías para el texto de tipear
        <p className="text-3xl text-teal-400 font-mono">
            <span className="mr-2">≥</span>
            <Typed
                strings={[
                    "Desarrollador Full Stack",
                    "Frontend Developer en Astro y React",
                    "Especialista en Back-end con Node.js"
                ]}
                typeSpeed={70}
                backSpeed={40}
                loop
                showCursor={true}
                cursorChar="█"
            />
        </p>
    );
}