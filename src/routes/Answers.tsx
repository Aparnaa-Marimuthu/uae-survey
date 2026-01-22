import { AppEmbed } from "@thoughtspot/visual-embed-sdk/react";

const Answers = () => {
  return (
    <AppEmbed
      fullHeight
      path="/answers"
      frameParams={{ width: "100vw", height: "100vh" }}
    />
  );
};

export default Answers;
