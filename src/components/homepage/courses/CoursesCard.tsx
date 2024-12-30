interface CoursesCardProps {
    src: string;
    sphere: string;
    nameCourse: string;
    price:number;
    author: string;
}

const CoursesCard = ({ src, sphere, nameCourse, price, author }: CoursesCardProps)=> {
    function checkSphere(sphere: string) {
        if (sphere === "Marketing")
            return " bg-success";
        if (sphere === "Management")
            return " bg-info"
        if (sphere === "HR & Recruting")
            return " bg-warning"
        return " bg-pink";
    }

    return (
        <div className="courses__card flex items-center justify-between gap-8 border-[1px] border-solid border-gray-300 rounded-[6px]">
            <img src={src} alt="Courses Section Card Image"/>
            <div className="mr-8 basis-3/5">
                <p className={"text-[14px] px-2 py-1 inline-block rounded text-white" + checkSphere(sphere)}>{sphere}</p>
                <h4 className="py-5 text-[20px] font-bold">{nameCourse}</h4>
                <div className="text-[18px]">
                    <span className=" font-bold text-danger">${price}</span> <span className="text-gray-700">| {author}</span>
                </div>
            </div>
        </div>
    );
};

export default CoursesCard;