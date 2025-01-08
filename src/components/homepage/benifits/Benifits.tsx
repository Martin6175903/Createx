import BenifitsBtn from "./BenifitsBtn.tsx";
import IconBtn1 from "@/assets/homepage/benifits/star-icon.svg?react";
import IconBtn2 from "@/assets/homepage/benifits/like-icon.svg?react";
import IconBtn3 from "@/assets/homepage/benifits/layouts-icon.svg?react";
import IconBtn4 from "@/assets/homepage/benifits/chat-icon.svg?react";
import IlluastationImage from "@/assets/homepage/benifits/benitits-illustration.svg?react";
import {useState} from "react";

const Benifits = () => {

    const btnsInfo = [
        { active: true, id: 0, title: "Experienced Tutors", iconBtn: <IconBtn1/> },
        { active: false, id: 1, title: "Feedback & Support", iconBtn: <IconBtn2/> },
        { active: false, id: 2, title: "24/7 Online Library", iconBtn: <IconBtn3/> },
        { active: false, id: 3, title: "Community", iconBtn: <IconBtn4/> }
    ]

    const [btnsActive, setBtnActive] = useState([true, false, false, false]);
    const [activeElemPos, setActiveElemPos] = useState(0);

    return (
        <section className="pb-[120px]">
            <div className="container">
                <div className="text-center pb-[60px]">
                    <p className="subtitle">Our benefits</p>
                    <h3 className="title">That’s how we do it</h3>
                </div>
                <div className="benifits__btns grid grid-cols-4 mb-[60px]">
                    {btnsInfo.map(btn =>
                        <BenifitsBtn title={btn.title} btnActive={btnsActive[btn.id]} key={btn.id} id={btn.id} btnsActive={btnsActive} setBtnsActive={setBtnActive} activeElemPos={activeElemPos} setActiveElemPos={setActiveElemPos}>
                            {btn.iconBtn}
                        </BenifitsBtn>
                    )}
                </div>
                <div className="flex justify-between items-center">
                    <div className="basis-[495px]">
                        <h4 className="font-black text-[32px] leading-[1.3] mb-6">Only practicing tutors</h4>
                        <p className="leading-[1.6] text-[16px]">Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum suspendisse. Morbi mauris cras massa ut dolor quis sociis mollis augue. Nunc, sodales tortor sit diam mi amet massa. Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id dignissim massa ut amet. Amet enim, nisi tempus vehicula.</p>
                    </div>
                    <div>
                        <IlluastationImage/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benifits;