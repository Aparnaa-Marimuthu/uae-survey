import { useEffect, useState } from "react";
import { fetchCurrentUser } from "../api/ThoughtspotUser";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState<string>("");

  useEffect(() => {
    fetchCurrentUser()
      .then(user => {
        setUsername(user.displayName || user.name);
      })
      .catch(() => {
        setUsername("");
      });
  }, []);

  const handleLogout = () => {
    // Soft logout (demo-safe)
    const iframe = document.querySelector(
      ".iframe-wrapper iframe"
    ) as HTMLIFrameElement;

    if (iframe) {
      iframe.src = `${import.meta.env.VITE_TS_HOST}/login`;
    }
  };

  return (
    <header className="topbar">
      <div className="topbar-left">
        <img
          src="/black_logo_transparent_background.png"
          alt="Logo"
          className="logo"
        />
        <span className="app-title">UAE Survey</span>
      </div>

      <div className="topbar-right">
        <div
          className="user-menu"
          onClick={() => setOpen(!open)}
        >
          <div className="user-avatar">
            {username ? username[0].toUpperCase() : "?"}
          </div>
          <span className="user-name">
            {username || "User"}
          </span>

          {open && (
            <div className="dropdown">
              <div
                className="dropdown-item"
                onClick={handleLogout}
              >
                Logout
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
