import {useState} from "react";

interface IEventsItem<T> {
    num: T;
    month: T;
    time: T;
    infoTitle: T;
    infoSubtitle: T;
}

const EventsItem = ({num, month, time, infoTitle, infoSubtitle}: IEventsItem<string>) => {

    const [btnHover, setBtnHover] = useState(false);

    function mouseEnter() {
        setBtnHover(!btnHover);
    }

    function mouseLeave() {
        setBtnHover(!btnHover);
    }

    return (
        <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className="flex items-center justify-between gap-7 py-8 px-10 bg-white rounded duration-300 hover:cursor-pointer hover:shadow-[0_4px_4px_-4px_rgba(30,33,44,0.05),_0_12px_10px_-6px_rgba(255,63,58,0.08),_0_30px_24px_-10px_rgba(255,63,58,0.1),_0_80px_80px_-20px_rgba(255,63,58,0.16);] relative hover:z-20">
            <div className="flex gap-5 justify-center items-center">
                <h2 className="num font-black text-[48px] leading-[1.3] tracking-wide text-primary">{num}</h2>
                <div>
                    <h5 className="month pb-1 font-bold text-[20px]">{month}</h5>
                    <p className="time text-[16px] leading-[1.6] text-gray-700 whitespace-nowrap">{time}</p>
                </div>
            </div>
            <div className="basis-[63%]">
                <h5 className="info-title pb-1 font-bold text-[18px]">{infoTitle}</h5>
                <p className="info-subtitle text-[16px] leading-[1.6] text-gray-700">{infoSubtitle}</p>
            </div>
            <div>
                <button className={"events__btn btn whitespace-nowrap " + (btnHover ? "btn-bg" : "btn-bg-none")}>View more</button>
            </div>
        </div>
    );
};

export default EventsItem;