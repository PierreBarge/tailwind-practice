import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

export default function SidebarLink({ link }) {
  const { pathname } = useLocation();

  const checkLocation = (path) => {
    if (pathname === path) {
      return "bg-neutral-700 text-white flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base";
    } else {
      return "text-neutral-400 flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline rounded-sm text-base";
    }
  };
  return (
    <div>
      <Link className={checkLocation(link.path)} to={link.path}>
        <span className="text-xl">{link.icon}</span>
        {link.label}
      </Link>
    </div>
  );
}

SidebarLink.propTypes = {
  link: PropTypes.shape({
    key: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    icon: PropTypes.any.isRequired,
  }).isRequired,
};
