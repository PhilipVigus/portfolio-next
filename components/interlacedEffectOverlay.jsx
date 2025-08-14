"use client";

import React from "react";
import "../styles/interlaced.css";

export default function InterlacedEffectOverlay() {
  const [enabled, setEnabled] = React.useState(false);

  const onClick = () => {
    setEnabled((enabled) => !enabled);
  };

  return (
    <div className="mb-8">
      <div className="text-right cursor-pointer" onClick={onClick}>
        Interlaced Effect [{enabled ? "on" : "off"}]
      </div>
      {enabled && (
        <>
          <div className="interlaced top-0 right-0 bottom-0 left-0 fixed z-10 pointer-events-none"></div>
        </>
      )}
    </div>
  );
}
