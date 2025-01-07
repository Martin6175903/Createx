type TSliderCurrentItem = { active: boolean }

const SliderCurrentItem = ({active}: TSliderCurrentItem) => {
    return (
        <div className={`rounded-full w-[30px] h-[5px] duration-300 hover:scale-125 ${active ? "bg-gray-800" : "bg-gray-500"} hover:cursor-pointer ${active ? "hover:bg-gray-900" : "hover:bg-gray-600"}`}></div>
    );
};

export default SliderCurrentItem;