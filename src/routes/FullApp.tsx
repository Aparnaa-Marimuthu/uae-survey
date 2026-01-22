import { AppEmbed } from "@thoughtspot/visual-embed-sdk/react";

const FullApp = () => {
  return (
    <AppEmbed
      fullHeight
      frameParams={{ width: "100vw", height: "100vh" }}
    />
  );
};

export default FullApp;
