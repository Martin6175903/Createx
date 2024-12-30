import logo from "src/assets/logo-site.svg";

const Logo = () => {
    return (
        <div>
            <a href="#" className="logo">
                <img src={logo} alt="Logo from Site" className="logo__img"/>
            </a>
        </div>
    );
};

export default Logo;