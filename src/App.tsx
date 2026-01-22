import { useEffect, useState } from "react";
import { initThoughtSpot } from "./thoughtspot";
import Header from "./components/Header";
import Sidebar, {type SidebarItem} from "./components/Sidebar";
import FullApp from "./routes/FullApp";
import Answers from "./routes/Answers";
import Liveboards from "./routes/Liveboards";
import "./Layout.css";

const App = () => {
  const [ready, setReady] = useState(false);
  const [activeItem, setActiveItem] = useState<SidebarItem>("Full_App");

  useEffect(() => {
    initThoughtSpot();
    setReady(true);
  }, []);

  if (!ready) return null;

    const renderRoute = () => {
      switch (activeItem) {
        case "Answers":
          return <Answers />;
        case "liveboards":
          return <Liveboards />;
        case "Full_App":
        default:
          return <FullApp />;
      }
    };

  return (
  <div className="app-shell">
      <Header />

      <div className="body">
        <Sidebar activeItem={activeItem} onSelect={setActiveItem} />

        <main className="content">
          <div className="iframe-wrapper">
            {renderRoute()}
          </div>
        </main>
      </div>
    </div> 
  );
};

export default App;
