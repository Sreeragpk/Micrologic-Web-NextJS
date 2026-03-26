// "use client";
// import { useEffect } from "react";

// export default function useGlobalImageProtection() {
//   useEffect(() => {
//     const handleContextMenu = (e) => {
//       e.preventDefault(); // 🔥 block everywhere
//       return false;
//     };

//     const handleDragStart = (e) => {
//       e.preventDefault();
//       return false;
//     };

//     const handleKeyDown = (e) => {
//       if (
//         e.key === "F12" ||
//         (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) ||
//         (e.ctrlKey && ["u", "U", "s", "S"].includes(e.key))
//       ) {
//         e.preventDefault();
//         return false;
//       }
//     };

//     document.addEventListener("contextmenu", handleContextMenu);
//     document.addEventListener("dragstart", handleDragStart);
//     document.addEventListener("keydown", handleKeyDown);

//     return () => {
//       document.removeEventListener("contextmenu", handleContextMenu);
//       document.removeEventListener("dragstart", handleDragStart);
//       document.removeEventListener("keydown", handleKeyDown);
//     };
//   }, []);
// }
"use client";
import { useEffect } from "react";

export default function useGlobalImageProtection() {
  useEffect(() => {
    let lastSent = 0;

    const sendLog = async (type) => {
      const now = Date.now();
      if (now - lastSent < 2000) return; // ⛔ prevent spam
      lastSent = now;

      try {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/log`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ type }),
        });
      } catch (err) {
        console.log("Log failed");
      }
    };

    const handleContextMenu = (e) => {
      sendLog("RIGHT_CLICK");
      e.preventDefault();
    };

    const handleDragStart = (e) => {
      sendLog("DRAG_ATTEMPT");
      e.preventDefault();
    };

const handleKeyDown = (e) => {
  // Only block copy/save
  if (e.ctrlKey && ["u", "U", "s", "S", "c", "C"].includes(e.key)) {
    sendLog("COPY_OR_SAVE");
    e.preventDefault();
  }

  // 👇 Only log DevTools, DO NOT block
  if (
    e.key === "F12" ||
    (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key))
  ) {
    sendLog("DEVTOOLS_OPENED");
    // ❌ NO preventDefault here
  }
};

    document.addEventListener("contextmenu", handleContextMenu, true);
    document.addEventListener("dragstart", handleDragStart, true);
    document.addEventListener("keydown", handleKeyDown, true);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu, true);
      document.removeEventListener("dragstart", handleDragStart, true);
      document.removeEventListener("keydown", handleKeyDown, true);
    };
  }, []);
}