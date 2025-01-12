interface IProps {
    src: string
    sphere: string
    name: string
    price: number
    author: string
}

const CoursesCard = ({src, sphere, name, price, author}: IProps) => {

    function checkSphere(sphere: string) {
        if (sphere === "Marketing")
            return "bg-success";
        if (sphere === "Management")
            return "bg-info"
        if (sphere === "HR & Recruting")
            return "bg-warning"
        return "bg-pink";
    }

    return (
        <div className="border-solid border-[1px] border-gray-300 rounded shadow-[0_4px_4px_-4px_rgba(30,33,44,0.03),0_12px_10px_-6px_rgba(154,156,165,0.04),0_30px_24px_-10px_rgba(154,156,165,0.05),0_80px_80px_-20px_rgba(154,156,165,0.08)]">
            <img src={src} alt="Course Person Image" className="course-img"/>
            <div className="p-6">
                <h5 className={`course-sphere inline-block text-[14px] rounded py-1 px-2 text-white ${checkSphere(sphere)}`}>{sphere}</h5>
                <h3 className="course-name my-5 font-bold text-[20px]">{name}</h3>
                <div className="flex gap-2 items-center">
                    <span className="course-price font-bold text-danger text-[18px]">${price}</span>
                    <span className="text-[18px] text-gray-700">|</span>
                    <span className="course-author text-[18px] text-gray-700">{author}</span>
                </div>
            </div>
        </div>
    );
};

export default CoursesCard;