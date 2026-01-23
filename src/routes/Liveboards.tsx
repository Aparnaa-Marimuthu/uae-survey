import { useEffect, useRef } from "react";
import { LiveboardEmbed } from "@thoughtspot/visual-embed-sdk";

const Liveboards = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const liveboardEmbed = new LiveboardEmbed(containerRef.current, {
        liveboardId: import.meta.env.VITE_LIVEBOARD_ID,
        vizId: import.meta.env.VITE_LIVEBOARD_VIZ_ID,
        frameParams: {
          width: "100%",
          height: "100%",
        }
      });

      liveboardEmbed.render();
      return () => liveboardEmbed.destroy();
    }
  }, []);

  return (
    <div ref={containerRef} style={{ width: "100%", height: "100%" }} />
  );
};

export default Liveboards;
