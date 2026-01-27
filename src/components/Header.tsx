import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const username = localStorage.getItem("username") || "User";
  const email = localStorage.getItem("username") || "";

  const formatName = (email: string) => {
    if (!email.includes("@")) return email;

    const namePart = email.split("@")[0];
    const parts = namePart.split(".");   

    return parts
      .map(
        p => p.charAt(0).toUpperCase() + p.slice(1)
      )
      .join(" ");
  };

  const displayName = formatName(email);

  const handleLogout = async () => {
    // Optional: notify backend
    try {
      await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/auth/logout`,
        {
          method: "POST",
        }
      );
    } catch {
      // ignore
    }

    // Clear app session
    localStorage.removeItem("username");
    localStorage.removeItem("password");

    window.location.href = "/";
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
            {username[0].toUpperCase()}
          </div>

          <span className="user-name">{displayName}</span>

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
