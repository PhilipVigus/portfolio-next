"use client";

import React from "react";
import "../styles/home.css";

export default function InterlacedEffect() {
  const [enabled, setEnabled] = React.useState(false);

  const onClick = () => {
    console.log("onClick");
    setEnabled((enabled) => !enabled);
  };

  return (
    <div className="mb-8">
      <div className="text-right" onClick={onClick}>
        Toggle Interlaced [{enabled ? "x" : " "}]
      </div>
      {enabled && (
        <>
          <div className="interlaced top-0 right-0 bottom-0 left-0 fixed z-10 pointer-events-none"></div>
        </>
      )}
    </div>
  );
}
