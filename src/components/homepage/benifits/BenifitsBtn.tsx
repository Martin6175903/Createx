import React, {JSX} from "react";
import chargeAction from "./handleClickBtns.ts";

interface IBtns {
    active: boolean,
    id: number,
    title: string,
    iconBtn: JSX.Element
}

interface BenifitsBtnProps {
    title: string;
    children: JSX.Element;
    btnActive: boolean;
    id: number;
    click: IBtns[];
}

const BenifitsBtn = ({title, btnActive, id, children}: BenifitsBtnProps) => {

    function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
        chargeAction(event, id)
    }

    return (
        <button onClick={(event) => handleClick(event)} className={"btn" + (btnActive ? " btn-active" : " border-[1px] border-transparent border-solid")}>
            <span className="flex items-center justify-center gap-2 h-[26px]">
                {children}
                <span className={"leading-[1.6] benifits__btn-text" + (btnActive ? " text-primary" : "")}>{title}</span>
            </span>
        </button>
    );
};

export default BenifitsBtn;