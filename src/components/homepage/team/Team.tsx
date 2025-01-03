import ImagePerson1 from "@/assets/homepage/team/person-img-1.png";
import ImagePerson2 from "@/assets/homepage/team/person-img-2.png";
import ImagePerson3 from "@/assets/homepage/team/person-img-3.png";
import ImagePerson4 from "@/assets/homepage/team/person-img-4.png";
import TeamItem from "@/components/homepage/team/TeamItem.tsx";

const Team = () => {
    return (
        <section className="pt-[166px] pb-[180px] bg-gray-200">
            <div className="container">
                <p className="subtitle">Best tutors are all here</p>
                <h3 className="title mb-[60px]">Meet our team</h3>
                <div className="flex gap-[30px]">
                    <TeamItem name="Dianne Russell" sphere="Founder and CEO">
                        <img className="relative z-10" src={ImagePerson1} alt="Image Person Section Team"/>
                    </TeamItem>
                    <TeamItem name="Jerome Bell" sphere="Founder and Program Director">
                        <img className="relative z-10" src={ImagePerson2} alt="Image Person Section Team"/>
                    </TeamItem>
                    <TeamItem name="Kristin Watson" sphere="Marketer, Curator of Marketing Course">
                        <img className="relative z-10" src={ImagePerson3} alt="Image Person Section Team"/>
                    </TeamItem>
                    <TeamItem name="Marvin McKinney" sphere="PM, Curator of Management Course">
                        <img className="relative z-10" src={ImagePerson4} alt="Image Person Section Team"/>
                    </TeamItem>
                </div>
            </div>
        </section>
    );
};

export default Team;