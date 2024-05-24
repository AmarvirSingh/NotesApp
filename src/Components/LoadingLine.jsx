import React from "react";
import "ldrs/zoomies";

export default function LoadingLine() {
  return (
    <div className="text-center position-relative">
      <l-zoomies
        size="400"
        stroke="5"
        bg-opacity="0.1"
        speed="1.4"
        color="black"
      ></l-zoomies>
    </div>
  );
}

// Default values shown
