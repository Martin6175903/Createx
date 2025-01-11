import CoursesCards from "./CoursesCards.tsx";
import {Link} from "react-router-dom";

const Courses = () => {
    return (
        <section className="pb-[180px]">
            <div className="container">
                <div className="flex justify-between items-end pb-[60px]">
                    <div>
                        <p className="subtitle">Ready to learn?</p>
                        <h3 className="title">Featured Courses</h3>
                    </div>
                    <div>
                        <Link to={"courses"} className="btn btn-bg-none">View all courses</Link>
                    </div>
                </div>
                <CoursesCards/>
            </div>
        </section>
    );
};

export default Courses;