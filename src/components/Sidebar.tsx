export type SidebarItem =
  | "Full_App"
  | "Answers"
  | "liveboards";

type Props = {
  activeItem: SidebarItem;
  onSelect: (item: SidebarItem) => void;
};

const Sidebar = ({ activeItem, onSelect }: Props) => {
  return (
    <aside className="sidebar">

      <nav className="nav">
        <NavItem label="Full App" active={activeItem === "Full_App"} onClick={() => onSelect("Full_App")} />
        <NavItem label="Answers" active={activeItem === "Answers"} onClick={() => onSelect("Answers")} />
        <NavItem label="Liveboards" active={activeItem === "liveboards"} onClick={() => onSelect("liveboards")} />
      </nav>

      <div className="sidebar-footer">
        <span>Think we can be cooler?</span><br/>
        <button>Tell us</button>
      </div>

    </aside>
  );
};

const NavItem = ({
  label,
  active,
  disabled,
  onClick,
}: {
  label: string;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}) => {
  return (
    <div
      className={`nav-item ${active ? "active" : ""} ${
        disabled ? "disabled" : ""
      }`}
      onClick={!disabled ? onClick : undefined}
    >
      {label}
    </div>
  );
};

export default Sidebar;
