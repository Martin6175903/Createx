import CoursesCards from "./CoursesCards.tsx";

const Courses = () => {
    return (
        <section>
            <div className="container">
                <div className="flex justify-between items-end pb-[60px]">
                    <div>
                        <p className="subtitle">Ready to learn?</p>
                        <h3 className="title">Featured Courses</h3>
                    </div>
                    <div>
                        <button className="btn btn-bg-none">View all courses</button>
                    </div>
                </div>
                <CoursesCards/>
            </div>
        </section>
    );
};

export default Courses;