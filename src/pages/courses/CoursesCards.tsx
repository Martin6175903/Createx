import CoursesCard from "@/pages/courses/CoursesCard.tsx";

interface IProps {
    coursesInfo: {
        src: string
        sphere: string
        name: string
        price: number
        author: string
    }[]
}

const CoursesCards = ({coursesInfo}: IProps) => {

    // Mark - 4:2 Manag - 3:2 HR - 5:2 Design - 2:2 Dev - 3:1

    return (
        <div className="grid grid-cols-3 gap-[30px] mt-[60px] mb-[80px]">
            {coursesInfo.map((course, index) =>
                <CoursesCard key={index} src={course.src} sphere={course.sphere} name={course.name} price={course.price} author={course.author}/>
            )}
        </div>
    );
};

export default CoursesCards;