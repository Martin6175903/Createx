import {Dispatch, SetStateAction} from "react";

interface IProps {
    title: string
    quantity: number
    pos: number
    btnActivePos: number
    setBtnActivePos: Dispatch<SetStateAction<number>>
}

const ChooseSphereBtn = ({title, quantity, pos, btnActivePos, setBtnActivePos}: IProps) => {

    function handleClick() {
        if (btnActivePos === pos) return false;
        setBtnActivePos(pos);
    }

    return (
        <button
            onClick={handleClick}
            className={`py-2.5 px-5 flex gap-1 justify-center duration-300 rounded border-solid border-[1px] ${pos === btnActivePos ? "text-primary border-primary" : "text-gray-600 border-transparent"}`}
        >
            <span className={`font-bold text-[16px] leading-[1.6]`}>{title}</span> <span className={`font-black text-[10px]`}>{quantity}</span>
        </button>
    );
};

export default ChooseSphereBtn;