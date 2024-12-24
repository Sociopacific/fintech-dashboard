// Header.tsx

import { NavLink, useLocation, matchPath } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SearchIcon from "@/assets/icons/search.svg?react";
import SettingsIcon from "@/assets/icons/settings-outline.svg?react";
import NotificationsIcon from "@/assets/icons/notifications-outline.svg?react";
import MenuIcon from "@/assets/icons/menu.svg?react";
import { routes } from "@/routes";
import { useMemo } from "react";

interface HeaderProps {
  toggleSidebar: () => void;
}

export function Header({ toggleSidebar }: HeaderProps) {
  const location = useLocation();

  const currentRouteName = useMemo(() => {
    const currentRoute = routes.find((route) =>
      matchPath(route.path, location.pathname)
    );
    return currentRoute ? currentRoute.name : "Overview";
  }, [location.pathname]);

  return (
    <div className="z-1 flex max-md:flex-wrap items-center md:h-header flex-1 p-[25px] md:p-10 md:border-b bg-white pointer-events-auto">
      <Button
        className="2xl:hidden"
        variant="icon"
        size="icon"
        onClick={toggleSidebar} // Attach toggle function
        aria-label="Open menu"
      >
        <MenuIcon />
      </Button>
      <h1 className="ml-auto md:ml-4 mr-auto text-3xl font-semibold text-text-accent">
        {currentRouteName}
      </h1>
      <Input
        className="max-md:order-1 max-md:w-full max-md:mt-5"
        type="text"
        placeholder="Search for something"
        prefix={<SearchIcon />}
      />
      <NavLink className="ml-[30px] max-lg:hidden" to="/settings">
        <Button variant="secondaryRounded" size="icon">
          <SettingsIcon />
        </Button>
      </NavLink>
      <Button
        className="ml-[30px] max-lg:hidden [&_svg]:fill-blue"
        variant="secondaryRounded"
        size="icon"
      >
        <NotificationsIcon />
      </Button>
      <div className="size-[35px] sm:size-[60px] md:ml-[35px] rounded-full overflow-hidden">
        <NavLink to="/settings">
          <img
            src="https://via.placeholder.com/80"
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
        </NavLink>
      </div>
    </div>
  );
}
