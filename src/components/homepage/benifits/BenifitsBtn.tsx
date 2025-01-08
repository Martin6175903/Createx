import React, {Dispatch, JSX, SetStateAction} from "react";

interface BenifitsBtnProps {
    title: string;
    children: JSX.Element;
    btnActive: boolean;
    id: number;
    btnsActive: boolean[];
    setBtnsActive: React.Dispatch<React.SetStateAction<boolean[]>>;
    activeElemPos: number;
    setActiveElemPos: Dispatch<SetStateAction<number>>;
}

const BenifitsBtn = ({title, btnActive, id, btnsActive, setBtnsActive, activeElemPos, setActiveElemPos, children}: BenifitsBtnProps) => {

    function handleClick() {
        if (activeElemPos === id) return false;

        const items = btnsActive;
        items[id] = true;
        items[activeElemPos] = false;
        setActiveElemPos(id);
        setBtnsActive([...items]);
    }

    return (
        <button onClick={handleClick} className={"btn" + (btnActive ? " btn-active" : " border-[1px] border-transparent border-solid")}>
            <span className="flex items-center justify-center gap-2 h-[26px]">
                {children}
                <span className={"leading-[1.6] benifits__btn-text" + (btnActive ? " text-primary" : "")}>{title}</span>
            </span>
        </button>
    );
};

export default BenifitsBtn;