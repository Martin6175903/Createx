import {Link} from "react-router-dom";

type NavItemProps = {
    title: string;
    link: string;
}

const NavItem = ({ title, link }: NavItemProps) => {
    return (
        <li className="nav__list-item font-bold leading-[1.6] text-gray-800">
            <Link to={link} className="nav__list-link">{title}</Link>
        </li>
    );
};

export default NavItem;