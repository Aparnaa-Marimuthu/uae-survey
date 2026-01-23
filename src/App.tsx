import { useEffect, useState } from "react";
import { initThoughtSpot } from "./thoughtspot";
import Header from "./components/Header";
import Sidebar, {type SidebarItem} from "./components/Sidebar";
import LoginPage from "./pages/login/LoginPage";
import FullApp from "./routes/FullApp";
import Spotter from "./routes/Spotter";
import Liveboards from "./routes/Liveboards";
import "./Layout.css";

const App = () => {
  const [ready, setReady] = useState(false);
  const [activeItem, setActiveItem] = useState<SidebarItem>("Full_App");

  const username = localStorage.getItem("username");
  if (!username) {
    return <LoginPage />;
  }

  useEffect(() => {
    initThoughtSpot();
    setReady(true);
  }, []);

  if (!ready){ return <div>Loading analytics...</div>; }

  const renderRoute = () => {
    switch (activeItem) {
      case "Spotter":
        return <Spotter />;
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
          <div className="iframe-wrapper" key={activeItem}>
            {renderRoute()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
