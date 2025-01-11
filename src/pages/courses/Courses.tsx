import ChooseSphere from "@/pages/courses/actions/ChooseSphere.tsx";
import SearchCourse from "@/pages/courses/actions/SearchCourse.tsx";

const Courses = () => {
    return (
        <div className="container">
            <p className="subtitle">Enjoy your studying!</p>
            <h3 className="title mb-[60px]">Our online courses</h3>
            <div className="flex justify-between">
                <ChooseSphere/>
                <SearchCourse/>
            </div>
        </div>
    );
};

export default Courses;