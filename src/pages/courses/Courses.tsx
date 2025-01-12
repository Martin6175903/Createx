import ChooseSphere from "@/pages/courses/actions/ChooseSphere.tsx";
import SearchCourse from "@/pages/courses/actions/SearchCourse.tsx";
import CoursesCards from "@/pages/courses/CoursesCards.tsx";
import personImage1 from "@/assets/courses-page/card/person-img-1.jpg";
import personImage2 from "@/assets/courses-page/card/person-img-2.jpg";
import personImage3 from "@/assets/courses-page/card/person-img-3.jpg";
import personImage4 from "@/assets/courses-page/card/person-img-4.jpg";
import personImage5 from "@/assets/courses-page/card/person-img-5.jpg";
import personImage6 from "@/assets/courses-page/card/person-img-6.jpg";
import personImage7 from "@/assets/courses-page/card/person-img-7.jpg";
import personImage8 from "@/assets/courses-page/card/person-img-8.jpg";
import personImage9 from "@/assets/courses-page/card/person-img-9.jpg";
import {useState} from "react";
import CoursesLoadMoreItems from "@/pages/courses/actions/CoursesLoadMoreItems.tsx";
import Auth from "@/components/Auth/Auth.tsx";

const Courses = () => {

    const coursesInfo = [
        {
            src: personImage1,
            sphere: "Marketing",
            name: "The Ultimate Google Ads Training Course",
            price: 100,
            author: "by Jerome Bell"
        },
        {
            src: personImage2,
            sphere: "Management",
            name: "Product Management Fundamentals",
            price: 480,
            author: "by Marvin McKinney"
        },
        {
            src: personImage3,
            sphere: "HR & Recruting",
            name: "HR  Management and Analytics",
            price: 200,
            author: "by Leslie Alexander Li"
        },
        {
            src: personImage4,
            sphere: "Marketing",
            name: "Brand Management & PR Communications",
            price: 530,
            author: "by Kristin Watson"
        },
        {
            src: personImage5,
            sphere: "Design",
            name: "Graphic Design Basic",
            price: 500,
            author: "by Guy Hawkins"
        },
        {
            src: personImage6,
            sphere: "Management",
            name: "Business Development Management",
            price: 400,
            author: "by Dianne Russell"
        },
        {
            src: personImage7,
            sphere: "Development",
            name: "Highload Software Architecture",
            price: 600,
            author: "by Brooklyn Simmons"
        },
        {
            src: personImage8,
            sphere: "HR & Recruting",
            name: "Human Resources – Selection and Recruitment",
            price: 150,
            author: "by Kathryn Murphy"
        },
        {
            src: personImage9,
            sphere: "Design",
            name: "User Experience. Human-centered Design",
            price: 240,
            author: "by Cody Fisher"
        }
    ]
    const [courses, setCourses] = useState(coursesInfo);

    return (
        <div className="container">
            <div className={"mb-[60px] text-center"}>
                <p className="subtitle">Enjoy your studying!</p>
                <h3 className="title">Our online courses</h3>
            </div>
            <Auth/>
            <div className="flex justify-between">
                <ChooseSphere setCourses={setCourses} coursesTitleObj={coursesInfo}/>
                <SearchCourse setCourses={setCourses} coursesTitleObj={coursesInfo}/>
            </div>
            <CoursesCards coursesInfo={courses}/>
            <CoursesLoadMoreItems/>
        </div>
    );
};

export default Courses;