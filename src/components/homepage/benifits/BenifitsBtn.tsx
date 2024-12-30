import {JSX, MouseEventHandler, useState} from "react";

interface BenifitsBtnProps {
    title: string;
    children: JSX.Element;
    btnActive?: boolean;
    id: number;
}

const BenifitsBtn = ({title, btnActive, id, children}: BenifitsBtnProps) => {
    const [position, setPosition] = useState(0);

    function handleClick(event: MouseEventHandler<HTMLButtonElement>) {
        const target = event.target.closest("button");
        if (target.classList.contains("btn-active")) return;
        target.parentElement?.children[position].classList.remove("btn-active");
        target.classList.add("btn-active");
        setPosition(id);
    }

    return (
        <button onClick={handleClick} className={"btn" + (btnActive ? " btn-active" : "")}>
            <span className="flex items-center justify-center gap-2 inline-block h-[26px]">
                {children}
                <span className={"leading-[1.6]" + (btnActive ? " text-primary" : "")}>{title}</span>
            </span>
        </button>
    );
};

export default BenifitsBtn;