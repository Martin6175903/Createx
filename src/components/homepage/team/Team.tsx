import SliderActionSwitches from "@/components/homepage/team/SliderActionSwitches.tsx";
import SliderActionItem from "@/components/homepage/team/SliderActionItem.tsx";
import {useState} from "react";

const Team = () => {

    const [actionActiveItem, setActionActiveItem] = useState([true, false, false, false]);
    const [useNextArrow, setUseNextArrow] = useState(true);
    const [usePrevArrow, setUsePrevArrow] = useState(false);

    return (
        <section className="pt-[166px] pb-[180px] bg-gray-200">
            <div className="container">
                <p className="subtitle">Best tutors are all here</p>
                <h3 className="title mb-[60px]">Meet our team</h3>
                <div className="relative">
                    <SliderActionSwitches
                        actionArr={actionActiveItem}
                        setAction={setActionActiveItem}
                        useNextArrow={useNextArrow}
                        setUseNextArrow={setUseNextArrow}
                        usePrevArrow={usePrevArrow}
                        setUsePrevArrow={setUsePrevArrow}
                    />
                    <div className="h-[450px]">
                        {actionActiveItem.map((item, index) =>
                            <SliderActionItem itemActive={item} useNextArrow={useNextArrow} usePrevArrow={usePrevArrow}  key={index}/>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;