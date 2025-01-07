import SliderCurrentItem from "@/components/homepage/testimonialts/SliderCurrentItem.tsx";

interface ISliderCurrentItem {
    items: boolean[]
}

const SliderInfoCurrentItem = ({items}: ISliderCurrentItem) => {
    return (
        <div className="flex gap-3 mt-[60px] justify-center">
            {items.map((itemAction, index) =>
                <SliderCurrentItem active={itemAction} key={index}/>
            )}
        </div>
    );
};

export default SliderInfoCurrentItem;