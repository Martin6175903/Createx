import BenifitsBtn from "./BenifitsBtn.tsx";
import IconBtn1 from "src/assets/homepage/benifits/star-icon.svg?react";
import IconBtn2 from "src/assets/homepage/benifits/like-icon.svg?react";
import IconBtn3 from "src/assets/homepage/benifits/layouts-icon.svg?react";
import IconBtn4 from "src/assets/homepage/benifits/chat-icon.svg?react";

const Benifits = () => {


    return (
        <section>
            <div className="container">
                <div className="text-center pb-[60px]">
                    <p className="subtitle">Our benefits</p>
                    <h3 className="title">That’s how we do it</h3>
                </div>
                <div className="benifits__btns grid grid-cols-4 mb-[60px]">
                    <BenifitsBtn id={0} btnActive={true} title="Experienced Tutors">
                        <IconBtn1/>
                    </BenifitsBtn>
                    <BenifitsBtn id={1} title="Feedback & Support">
                        <IconBtn2/>
                    </BenifitsBtn>
                    <BenifitsBtn id={2} title="24/7 Online Library">
                        <IconBtn3/>
                    </BenifitsBtn>
                    <BenifitsBtn id={3} title="Community">
                        <IconBtn4/>
                    </BenifitsBtn>
                </div>
            </div>
        </section>
    );
};

export default Benifits;