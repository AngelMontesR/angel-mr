import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function TextLeyend() {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                "Desarrollador Full Stack.",
            ],
            typeSpeed: 90,
            backSpeed: 70,
            loop: false,
            showCursor: true,
            cursorChar: '|',
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <p className="text-3xl text-green-400 font-mono">
            <span className="mr-2">≥</span>
            <span ref={el} />
        </p>
    );
}