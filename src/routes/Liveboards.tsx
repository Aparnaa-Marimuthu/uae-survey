import { AppEmbed } from "@thoughtspot/visual-embed-sdk/react";

const Liveboards = () => {
  return (
    <AppEmbed
      fullHeight
      path="/pinboards"
      frameParams={{ width: "100vw", height: "100vh" }}
    />
  );
};

export default Liveboards;
