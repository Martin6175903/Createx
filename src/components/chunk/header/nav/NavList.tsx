import NavItem from "./NavItem.tsx";

const NavList = () => {
    return (
        <nav className="nav">
            <ul className="nav__list flex gap-10">
                <NavItem title="About Us" link={"about"}/>
                <NavItem title="Courses" link={"courses"}/>
                <NavItem title="Events" link={"events-list-view"}/>
                <NavItem title="Blog" link={"blog"}/>
                <NavItem title="Contacts" link={"contacts"}/>
            </ul>
        </nav>
    );
};

export default NavList;