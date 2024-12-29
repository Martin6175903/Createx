import CoursesCard from "./CoursesCard.tsx";
import coursesCardImage1 from "../../../assets/homepage/courses/person-img-1.png";
import coursesCardImage2 from "../../../assets/homepage/courses/person-img-2.png";
import coursesCardImage3 from "../../../assets/homepage/courses/person-img-3.png";
import coursesCardImage4 from "../../../assets/homepage/courses/person-img-4.png";
import coursesCardImage5 from "../../../assets/homepage/courses/person-img-5.png";
import coursesCardImage6 from "../../../assets/homepage/courses/person-img-6.png";

const CoursesCards = () => {
    return (
        <div className="grid grid-cols-2 gap-[30px]">
            <CoursesCard src={coursesCardImage1} nameCourse="The Ultimate Google Ads Training Course" price={100} author="by Jerome Bell" sphere="Marketing"/>
            <CoursesCard src={coursesCardImage2} nameCourse="Product Management Fundamentals" price={480} author="by Marvin McKinney" sphere="Management"/>
            <CoursesCard src={coursesCardImage3} nameCourse="HR  Management and Analytics" price={200} author="by Leslie Alexander Li" sphere="HR & Recruting"/>
            <CoursesCard src={coursesCardImage4} nameCourse="Brand Management & PR Communications" price={530} author="by Kristin Watson" sphere="Marketing"/>
            <CoursesCard src={coursesCardImage5} nameCourse="Business Development Management" price={400} author="by Dianne Russell" sphere="Management"/>
            <CoursesCard src={coursesCardImage6} nameCourse="Graphic Design Basic" price={500} author="by Guy Hawkins" sphere="Design"/>
        </div>
    );
};

export default CoursesCards;