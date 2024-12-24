// Sidebar.tsx

import { NavLink } from "react-router-dom";
import logo from "@/assets/logo.svg";
import { routes } from "@/routes";

interface SidebarProps {
  isOpen: boolean;
  closeSidebar: () => void;
}

export function Sidebar({ isOpen, closeSidebar }: SidebarProps) {
  return (
    <aside
      className={`
        z-2 fixed top-0 left-0 h-full w-sidebar bg-white border-r transform
        transition-transform duration-300 ease-in-out z-50
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        2xl:relative 2xl:translate-x-0 pointer-events-auto
      `}
      aria-label="Sidebar navigation"
    >
      <div className="flex items-center justify-between pl-11 pr-4 gap-4 h-25">
        <div className="flex items-center gap-4">
          <img src={logo} className="logo" alt="Soar task logo" />
          <span className="text-[25px] font-extrabold text-text-accent">
            Soar Task
          </span>
        </div>
      </div>
      <nav className="flex-1 py-4 overflow-y-auto" aria-label="Main navigation">
        <ul className="space-y-1">
          {routes.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                end
                className={({ isActive }) =>
                  `group flex items-center h-[60px] pl-11 py-2 gap-[26px] text-lg font-medium transition-all ease-in-out duration-300 relative
                  before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[6px] before:rounded-r-3xl before:bg-accent before:transition-all before:duration-300
                  ${
                    isActive
                      ? "text-accent [&_svg]:fill-accent"
                      : "text-inactive [&_svg]:fill-inactive before:-translate-x-full"
                  }
                  hover:text-accent [&_svg]:hover:fill-accent before:hover:translate-x-0`
                }
                aria-label={item.name}
                onClick={closeSidebar} // Close sidebar on link click (optional)
              >
                <item.icon className="flex-shrink-0 transition-colors ease-in-out duration-300 group-hover:text-accent" />
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
