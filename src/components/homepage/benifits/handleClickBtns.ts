import React from "react";

function chargeAction(event: React.MouseEvent<HTMLButtonElement>, id: number) {
    const btnsElems: HTMLCollection = event.target.closest(".benifits__btns").children;
    let posActiveBtn: number | null = null;
    for (let i = 0; i < btnsElems.length; i++) {
        if (btnsElems[i].classList.contains("btn-active")) posActiveBtn = i;
    }
    if (posActiveBtn === id) return false;

    btnsElems[posActiveBtn ? posActiveBtn : 0].classList.remove("btn-active");
    btnsElems[posActiveBtn ? posActiveBtn : 0].classList.add("border-[1px]", "border-solid", "border-transparent");
    btnsElems[posActiveBtn ? posActiveBtn : 0]?.querySelector(".benifits__btn-text")?.classList.remove("text-primary");

    btnsElems[id].classList.add("btn-active");
    btnsElems[id].classList.remove("border-[1px]", "border-solid", "border-transparent");
    btnsElems[id]?.querySelector(".benifits__btn-text")?.classList.add("text-primary");
}

export default chargeAction;