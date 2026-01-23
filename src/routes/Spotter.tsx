import { useEffect, useRef } from "react";
import { SpotterEmbed } from "@thoughtspot/visual-embed-sdk";

const Spotter = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const spotterEmbed = new SpotterEmbed(containerRef.current, {
        worksheetId: import.meta.env.VITE_SPOTTER_WORKSHEET_ID,
        frameParams: {
          width: "100%",
          height: "100%",
        },
        searchOptions: {
          searchQuery: "",
        },
        showSpotterLimitations: true,
      });

      spotterEmbed.render();
      return () => spotterEmbed.destroy();
    }
  }, []);

  return (
    <div ref={containerRef} style={{ width: "100%", height: "100%" }} />
  );
};

export default Spotter;
