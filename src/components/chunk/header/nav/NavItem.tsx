type NavItemProps = {
    title: string;
    href?: string;
}

const NavItem = ({ title }: NavItemProps) => {
    return (
        <li className="nav__list-item font-bold leading-[1.6] text-gray-800"><a href="#" className="nav__list-link">{title}</a></li>
    );
};

export default NavItem;