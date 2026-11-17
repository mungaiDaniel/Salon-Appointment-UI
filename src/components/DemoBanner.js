import React from "react";

// Small fixed badge shown only in demo mode. It sits at the bottom of the
// viewport so it never pushes the NavBar or page layout around.
const DemoBanner = () => (
  <div
    role="status"
    aria-live="polite"
    data-testid="demo-banner"
    style={{
      position: "fixed",
      bottom: 8,
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 2000,
      maxWidth: "calc(100% - 16px)",
      padding: "4px 12px",
      borderRadius: 16,
      background: "#212529",
      color: "#fff",
      fontSize: "0.75rem",
      textAlign: "center",
      boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
      pointerEvents: "none",
    }}
  >
    Demo mode — sample data, changes are not saved.
  </div>
);

export default DemoBanner;
