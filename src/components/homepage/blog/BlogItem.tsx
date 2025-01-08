import {FC, JSX} from "react";
import IconCalendar from "@/assets/homepage/blog/calendar-icon.svg?react";
import IconClock from "@/assets/homepage/blog/clock-icon.svg?react";

interface IBlogItem<T> {
    src: T
    iconInfo: {
        icon: JSX.Element
        title: T
    },
    sphere:T
    date: T
    time: T | null
    title: T
    subtitle: T
    btnTitle: T
}

const BlogItem:FC<IBlogItem<string>> = ({src, iconInfo, sphere, date, time, title, subtitle, btnTitle}) => {
    return (
        <div className="relative">
            <p className="absolute top-3 left-3 flex items-center gap-1 justify-center py-1 px-2 rounded bg-white text-[14px] text-gray-800 leading-[1.2]">{iconInfo.icon}<span>{iconInfo.title}</span></p>
            <img className="rounded" src={src} alt="Blog Item Illustration"/>
            <div className="mt-4">
                {time ?
                    <div className="font-bold text-[14px] text-gray-700 flex gap-3">
                        <span className="flex gap-2">{sphere}</span> | <span className="flex gap-2"><IconCalendar/> {date}</span> | <span className="flex gap-2">{<IconClock/>} {time}</span>
                    </div>
                    : <div className="font-bold text-[14px] text-gray-700 flex gap-3">
                        <span className="flex gap-2">{sphere}</span> | <span className="flex gap-2"><IconCalendar/> {date}</span>
                    </div>
                }
                <h4 className="my-2 font-bold text-[20px]">{title}</h4>
                <p className="text-[16px] leading-[1.6] text-gray-800">{subtitle}</p>
                <button className="mt-4 text-[16px] leading-[1.6] font-bold flex gap-2 items-center">
                    <span>{btnTitle}</span>
                    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.7929 0.792893C12.1834 0.402369 12.8166 0.402369 13.2071 0.792893L17.7071 5.29289C18.0976 5.68342 18.0976 6.31658 17.7071 6.70711L13.2071 11.2071C12.8166 11.5976 12.1834 11.5976 11.7929 11.2071C11.4024 10.8166 11.4024 10.1834 11.7929 9.79289L14.5858 7H1C0.447715 7 0 6.55228 0 6C0 5.44772 0.447715 5 1 5H14.5858L11.7929 2.20711C11.4024 1.81658 11.4024 1.18342 11.7929 0.792893Z" fill="#ff3f3a"/>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default BlogItem;