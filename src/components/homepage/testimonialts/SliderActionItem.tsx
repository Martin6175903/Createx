import personImg from "@/assets/homepage/testimonials/post-person-img.png";

interface ISliderActionItem<T> {
    itemActive: T;
    useNextArrow: T;
    usePrevArrow: T;
}

const SliderActionItem = ({itemActive, usePrevArrow, useNextArrow}: ISliderActionItem<boolean>) => {
    return (
        <div className={`py-[64px] px-[105px] bg-white flex gap-[30px] rounded max-w-[1020px] mx-auto ${useNextArrow ? (itemActive && useNextArrow) ? "animate-slider-active-right" : "hidden absolute -right-[2000px] top-0 animate-slider-translate-left" : (itemActive && usePrevArrow ? "animate-slider-active-left" : "hidden absolute -right-[2000px] top-0 animate-slider-translate-right")}`}>
            <svg className="w-7" width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M18 8.92534C18 8.63119 18.1295 8.35196 18.3541 8.16195L28 0V19C28 19.5523 27.5523 20 27 20H19C18.4477 20 18 19.5523 18 19V8.92534Z"
                    fill="#FF3F3A"/>
                <path
                    d="M0 8.92534C0 8.63119 0.129507 8.35196 0.354058 8.16195L10 0V19C10 19.5523 9.55228 20 9 20H1C0.447715 20 0 19.5523 0 19V8.92534Z"
                    fill="#FF3F3A"/>
            </svg>
            <div>
                <p className="text-comment text-[20px] text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.</p>
                <div className="pt-6 flex gap-5 items-center">
                    <img src={personImg} alt="Person Image Section Testimonialts"/>
                    <div>
                        <h5 className="person-name mb-1.5 font-bold text-[16px] leading-[1.6]">Eleanor Pena</h5>
                        <p className="person-seat text-[14px] text-gray-700">Position, Course</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SliderActionItem;