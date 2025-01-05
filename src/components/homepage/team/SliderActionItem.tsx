import TeamItem from "@/components/homepage/team/TeamItem.tsx";
import ImagePerson1 from "@/assets/homepage/team/person-img-1.png";
import ImagePerson2 from "@/assets/homepage/team/person-img-2.png";
import ImagePerson3 from "@/assets/homepage/team/person-img-3.png";
import ImagePerson4 from "@/assets/homepage/team/person-img-4.png";

export const itemsInfo = [
    { id: 0, name: "Dianne Russell", sphere: "Founder and CEO", imagePerson: ImagePerson1 },
    { id: 1, name: "Jerome Bell", sphere: "Founder and Program Director", imagePerson: ImagePerson2 },
    { id: 2, name: "Kristin Watson", sphere: "Marketer, Curator of Marketing Course", imagePerson: ImagePerson3 },
    { id: 3, name: "Marvin McKinney", sphere: "PM, Curator of Management Course", imagePerson: ImagePerson4 }
]

type ISliderActionItem = {
    itemActive: boolean;
}

const SliderActionItem = ({itemActive}: ISliderActionItem) => {
    return (
        <div className={"flex gap-[30px] " + (itemActive ? "" : "hidden")}>
            {itemsInfo.map(item =>
                <TeamItem name={item.name} sphere={item.sphere} key={item.id}>
                    <img src={item.imagePerson} alt="Image Person Section Team"/>
                </TeamItem>
            )}
        </div>
    );
};

export default SliderActionItem;