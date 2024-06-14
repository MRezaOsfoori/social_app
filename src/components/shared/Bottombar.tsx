import { bottombarLinks, sidebarLinks } from "@/constants";
import { INavLink } from "../../lib/types";
import { Link, useLocation } from "react-router-dom";

const BottomBar = () => {
  const { pathname } = useLocation();

  return (
    <section className="bottom-bar">
      {bottombarLinks.map((link: INavLink) => {
        const isActive = pathname === link.route;
        return (
          <Link
          key={link.label}
            to={link.route}
            className={` ${
              isActive ? "bg-light-4 rounded-lg" : ""
            } flex-center flex-col py-2 px-4 gap-1 transition `}>
            <img
              src={link.imgURL}
              alt=""
              width={16}
              height={16}
              className={isActive ? "invert-white" : ""}
            />
            <p className="tiny-medium text-light-2"> {link.label}</p>
          </Link>
        );
      })}
    </section>
  );
};

export default BottomBar;
