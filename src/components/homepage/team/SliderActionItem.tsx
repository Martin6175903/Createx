import TeamItem from "@/components/homepage/team/TeamItem.tsx";
import ImagePerson1 from "@/assets/homepage/team/person-img-1.png";
import ImagePerson2 from "@/assets/homepage/team/person-img-2.png";
import ImagePerson3 from "@/assets/homepage/team/person-img-3.png";
import ImagePerson4 from "@/assets/homepage/team/person-img-4.png";

type ISliderActionItem<T> = {
    itemActive: T;
    usePrevArrow: T;
    useNextArrow: T;
}

const SliderActionItem = ({itemActive, usePrevArrow, useNextArrow}: ISliderActionItem<boolean>) => {

    const itemsInfo = [
        { id: 0, name: "Dianne Russell", sphere: "Founder and CEO", imagePerson: ImagePerson1 },
        { id: 1, name: "Jerome Bell", sphere: "Founder and Program Director", imagePerson: ImagePerson2 },
        { id: 2, name: "Kristin Watson", sphere: "Marketer, Curator of Marketing Course", imagePerson: ImagePerson3 },
        { id: 3, name: "Marvin McKinney", sphere: "PM, Curator of Management Course", imagePerson: ImagePerson4 }
    ]

    return (
        <div className={"flex gap-[30px] "
            + (useNextArrow ? (itemActive && useNextArrow ? "animate-slider-active-right" : "hidden absolute -right-[2000px] top-0 animate-slider-translate-left") : (itemActive && usePrevArrow ? "animate-slider-active-left" : "hidden absolute -right-[2000px] top-0 animate-slider-translate-right"))
        }>
            {itemsInfo.map(item =>
                <TeamItem name={item.name} sphere={item.sphere} key={item.id}>
                    <img src={item.imagePerson} alt="Image Person Section Team"/>
                </TeamItem>
            )}
        </div>
    );
};

export default SliderActionItem;