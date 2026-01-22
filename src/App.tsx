import { useEffect, useState } from "react";
import { LiveboardEmbed } from "@thoughtspot/visual-embed-sdk/react";
import { initThoughtSpot } from "./thoughtspot";

const App = () => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    initThoughtSpot();
    setReady(true);
  }, []);

  if (!ready) return null;

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
