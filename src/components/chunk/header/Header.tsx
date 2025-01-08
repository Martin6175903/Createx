import UserIcon from '@/assets/header/user-icon.svg?react';
import NavList from "./nav/NavList.tsx";
import Logo from "./Logo.tsx";

const Header = () => {
    return (
        <header className="bg-bg-color py-5 text-[16px] text-gray-800">
            <div className="container">
                <div className="flex justify-between">
                    <div className="flex items-center gap-[60px]">
                        <Logo color="#1E212C"/>
                        <NavList/>
                    </div>
                    <div className="flex gap-9">
                        <button className="btn btn-bg">Get consultation</button>
                        <div className="flex items-center gap-2">
                            <UserIcon/>
                            <div>
                                <a href="#" className="login font-bold">Log in</a> / <a href="#" className="register font-bold">Register</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;