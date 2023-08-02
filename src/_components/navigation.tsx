import HomeIcon from "../assets/home-icon.svg";
import HomeActive from "../assets/home-active.svg";

import ProjectsIcon from "../assets/projects-icon.svg";
import ProjectsActive from "../assets/projects-active.svg";

import AboutIcon from "../assets/about-icon.svg";
import AboutActive from "../assets/about-active.svg";

import ContactIcon from "../assets/contact-icon.svg";
import ContactActive from "../assets/contact-active.svg";

import ResumeIcon from "../assets/resume-icon.svg";

import { Link, useLocation } from "react-router-dom";

type NavigationLinks = {
  name: string;
  icon: string;
  active: string;
  route: string;
};

const navigationLinks: NavigationLinks[] = [
  {
    name: "home",
    icon: HomeIcon,
    active: HomeActive,
    route: "/",
  },
  {
    name: "projects",
    icon: ProjectsIcon,
    active: ProjectsActive,
    route: "/projects",
  },
  {
    name: "about",
    icon: AboutIcon,
    active: AboutActive,
    route: "/about",
  },
  {
    name: "contact",
    icon: ContactIcon,
    active: ContactActive,
    route: "/contact",
  },
];

export function MobileNav() {
  return <div className="fixed w-full flex z-20 sm:hidden">mobile</div>;
}
export function DesktopNav() {
  const { pathname } = useLocation();

  return (
    <div className="fixed h-screen left-5 top-0 z-20 hidden sm:flex sm:items-center lg:left-10">
      <div className="flex flex-col gap-3">
        {navigationLinks.map((link) => {
          const { active, icon, name, route } = link;
          const onRoute = pathname === route;
          return (
            <div
              key={name}
              className={`group border rounded-full border-white/10 bg-neutral-900 w-fit p-2 ${
                onRoute && "gradient-shadow"
              } transition-all duration-300`}
            >
              <Link
                to={route}
                className={`flex gap-1 items-center ${
                  !onRoute && "group-hover:animate-widthGrow"
                }`}
              >
                <img
                  className={`h-10 w-10 group-hover:scale-100 duration-300 ${
                    onRoute ? "image-grow" : "scale-[0.85]"
                  }`}
                  src={onRoute ? active : icon}
                />
                <p
                  className={`hidden px-1 text-lg font-orbitron font-bold capitalize bg-gradient-to-b from-neutral-50 to-neutral-50/30 bg-clip-text text-transparent overflow-hidden whitespace-nowrap ${
                    !onRoute && "group-hover:flex"
                  }`}
                >
                  {name}
                </p>
              </Link>
            </div>
          );
        })}

        <div className="group border rounded-full border-white/10 bg-neutral-900 w-fit p-2">
          <div className="flex gap-2 items-center group-hover:animate-widthGrow">
            <img className="h-10 w-10" src={ResumeIcon} />
            <p className="hidden px-1 text-lg font-orbitron font-bold capitalize bg-gradient-to-b from-neutral-50 to-neutral-50/30 bg-clip-text text-transparent group-hover:flex overflow-hidden whitespace-nowrap">
              my resume
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
