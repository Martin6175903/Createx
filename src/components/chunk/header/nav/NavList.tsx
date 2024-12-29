import NavItem from "./NavItem.tsx";

const NavList = () => {
    return (
        <nav className="nav">
            <ul className="nav__list flex gap-10">
                <NavItem title="About Us"/>
                <NavItem title="Courses"/>
                <NavItem title="Events"/>
                <NavItem title="Blog"/>
                <NavItem title="Contacts"/>
            </ul>
        </nav>
    );
};

export default NavList;