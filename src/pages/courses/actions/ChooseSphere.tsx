import {useState} from "react";
import ChooseSphereBtn from "@/pages/courses/actions/ChooseSphereBtn.tsx";

const ChooseSphere = () => {

    const btnsInfo = [
        {
            title: "All",
            quantity: 17,
            pos: 0
        },
        {
            title: "Marketing",
            quantity: 4,
            pos: 1
        },
        {
            title: "Management",
            quantity: 3,
            pos: 2
        },
        {
            title: "HR & Recruting",
            quantity: 5,
            pos: 3
        },
        {
            title: "Design",
            quantity: 2,
            pos: 4
        },
        {
            title: "Development",
            quantity: 3,
            pos: 5
        }
    ]
    const [btnActivePos, setBtnActivePos] = useState(0);

    return (
        <div className="flex gap-3">
            {btnsInfo.map(item =>
                <ChooseSphereBtn
                    key={item.title}
                    title={item.title}
                    quantity={item.quantity}
                    pos={item.pos}
                    btnActivePos={btnActivePos}
                    setBtnActivePos={setBtnActivePos}
                />
            )}
        </div>
    );
};

export default ChooseSphere;