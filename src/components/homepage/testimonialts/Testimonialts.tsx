import SliderActionSwitches from "@/components/homepage/testimonialts/SliderActionSwitches.tsx";
import SliderActionItem from "@/components/homepage/testimonialts/SliderActionItem.tsx";
import SliderInfoCurrentItem from "@/components/homepage/testimonialts/SliderInfoCurrentItem.tsx";
import {useState} from "react";

const Testimonialts = () => {

    const [activeItem, setActiveItem] = useState([true, false, false, false, false]);
    const [useNextArrow, setUseNextArrow] = useState(true);
    const [usePrevArrow, setUsePrevArrow] = useState(false);

    return (
        <section className="bg-gray-200 pb-[100px]">
            <div className="container">
                <div>
                    <div className="text-center">
                        <p className="subtitle">TESTIMONIALS</p>
                        <h3 className="title mb-[60px]">What our students say</h3>
                    </div>
                    <div className="relative">
                        <SliderActionSwitches
                            items={activeItem}
                            setItems={setActiveItem}
                            useNextArrow={useNextArrow}
                            setUseNextArrow={setUseNextArrow}
                            usePrevArrow={usePrevArrow}
                            setUsePrevArrow={setUsePrevArrow}
                        />
                        <div className="h-[344px]">
                            {activeItem.map((itemActive, index) =>
                                <SliderActionItem key={index} itemActive={itemActive} useNextArrow={useNextArrow} usePrevArrow={usePrevArrow}/>
                            )}
                        </div>
                    </div>
                    <SliderInfoCurrentItem items={activeItem}/>
                </div>
            </div>
        </section>
    );
};

export default Testimonialts;