import { useEffect } from "react";
import { LiveboardEmbed } from "@thoughtspot/visual-embed-sdk/react";
import { initThoughtSpot } from "./thoughtspot";

const App = () => {
  useEffect(() => {
    initThoughtSpot();
  }, []);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <LiveboardEmbed
        liveboardId={import.meta.env.VITE_TS_LIVEBOARD_ID}
        fullHeight
      />
    </div>
  );
};

export default App;
