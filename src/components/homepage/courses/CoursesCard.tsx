interface CoursesCardProps {
    src: string;
    sphere: string;
    nameCourse: string;
    price:number;
    author: string;
}

const CoursesCard = ({ src, sphere, nameCourse, price, author }: CoursesCardProps)=> {
    return (
        <div>
            <img src={src} alt="Courses Section Card Image"/>
            <div>
                <p>{sphere}</p>
                <h4>{nameCourse}</h4>
                <div>
                    <span>${price}</span> <span>| {author}</span>
                </div>
            </div>
        </div>
    );
};

export default CoursesCard;