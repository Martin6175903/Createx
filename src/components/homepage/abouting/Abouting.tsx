import illustrationImage from "@/assets/homepage/abouting/background-img.jpg";
import AboutingList from "./AboutingList.tsx";
import {Link} from "react-router-dom";

const Abouting = () => {
    return (
        <section className="py-[180px]">
            <div className="container">
                <div className="flex justify-between">
                    <div>
                        <img src={illustrationImage} alt="Abouting Section Image"/>
                    </div>
                    <div className="basis-[390px]">
                        <h5 className="subtitle">Who we are</h5>
                        <h2 className="mb-10 title">Why Createx?</h2>
                        <AboutingList/>
                        <Link to={"about"} className="inline-block btn btn-bg mt-[48px] btn-padding">More about us</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Abouting;