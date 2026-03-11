import React from "react";

const ProtectedImage = ({ src, alt, className }) => {
  const preventActions = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className={`relative select-none ${className}`}
      onContextMenu={preventActions}
      onDragStart={preventActions}
    >
      {/* Actual Image */}
      <img
        src={src}
        alt={alt}
        draggable="false"
        className="pointer-events-none w-full h-full object-contain"
      />

      {/* Transparent Protection Layer */}
      <div
        className="absolute inset-0 z-10"
        onContextMenu={preventActions}
        onDragStart={preventActions}
      ></div>
    </div>
  );
};

export default ProtectedImage;