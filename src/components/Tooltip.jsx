import { useState } from "react";

export default function Tooltip({ text, children, position = "top" }) {
  const [visible, setVisible] = useState(false);

  const positions = {
    top: "bottom-full mb-2 left-1/2 -translate-x-1/2",
    bottom: "top-full mt-2 left-1/2 -translate-x-1/2",
    left: "right-full mr-2 top-1/2 -translate-y-1/2",
    right: "left-full ml-2 top-1/2 -translate-y-1/2",
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div
          className={`absolute ${positions[position]} z-50 bg-gray-900 text-white text-xs rounded-lg px-2 py-1 whitespace-nowrap shadow-md`}
        >
          {text}
        </div>
      )}
    </div>
  );
}
