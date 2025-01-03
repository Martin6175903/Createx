import IconImage1 from "@/assets/homepage/team/facebook-icon.svg";
import IconImage2 from "@/assets/homepage/team/instagram-icon.svg";
import IconImage3 from "@/assets/homepage/team/linked-in-icon.svg";
import Element = React.JSX.Element;
import {useState} from "react";

interface ITeamItem<T> {
    name: T;
    sphere: T;
    children: Element;
}

const TeamItem = ({ name, sphere, children }: ITeamItem<string>) => {

    const [itemHover, setItemHover] = useState(false);

    function hoverEnter() {
        setItemHover(!itemHover);
    }
    function hoverLeave() {
        setItemHover(!itemHover);
    }

    return (
        <div className="w-[285px] h-[340px] bg-secondary rounded hover:cursor-pointer" onMouseEnter={hoverEnter} onMouseLeave={hoverLeave}>
            <div className="flex items-end justify-center relative w-full h-full duration-200 transition-all">
                <div className={"w-full h-full absolute left-0 top-0 bg-[linear-gradient(180deg,rgba(30,33,44,0)_43.9%,rgba(30,33,44,0.03)_55.21%,rgba(30,33,44,0.33)_68.73%,rgba(30,33,44,0.56)_76.17%,rgba(30,33,44,0.77)_83.75%,rgba(30,33,44,0.92)_91.49%,#1e212c_100%)] z-20 " + (!itemHover ? "opacity-0" : "animate-appearance")}></div>
                {children}
                <div className={"flex absolute bottom-5 right-5 gap-3 z-30 " + (!itemHover ? "opacity-0" : "animate-appearance")}>
                    <IconImage1/>
                    <IconImage2/>
                    <IconImage3/>
                </div>
            </div>
            <div className="text-center">
                <h4 className="name mt-4 mb-1 font-bold text-[20px] text-gray-800">{name}</h4>
                <p className="sphere text-[16px] leading-[1.6] text-gray-700">{sphere}</p>
            </div>
        </div>
    );
};

export default TeamItem;