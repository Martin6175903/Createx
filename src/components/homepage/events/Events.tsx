import EventsItem from "@/components/homepage/events/EventsItem.tsx";
import {Link} from "react-router-dom";

const Events = () => {
    return (
        <section className="py-[80px] bg-bg-color">
            <div className="container">
                <div className="text-center">
                    <p className="subtitle">Our Events</p>
                    <h3 className="title mb-[60px]">Lectures & workshops</h3>
                </div>
                <div className="flex flex-col gap-6 mb-[60px]">
                    <EventsItem num="05" month="August" time="11:00 – 14:00" infoTitle="Formation of the organizational structure of the company in the face of uncertainty." infoSubtitle="Onine master-class"/>
                    <EventsItem num="24" month="July" time="11:00 – 12:30" infoTitle="Building a customer service department. Best Practices." infoSubtitle="Onine lecture"/>
                    <EventsItem num="16" month="July" time="10:00 – 13:00" infoTitle="How to apply methods of speculative design in practice. Worldbuilding prototyping." infoSubtitle="Onine workshop"/>
                </div>
                <div className="flex justify-center items-center gap-10">
                    <p className="text-[28px] font-bold">Do you want more?</p>
                    <Link to={"events-grid-view"} className="btn btn-bg">Explore all events</Link>
                </div>
            </div>
        </section>
    );
};

export default Events;