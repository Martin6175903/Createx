import StatisticsInfo from "./StatisticsInfo.tsx";
import StatisticsItemCircle from "./StatisticsItemCircle.tsx";

const Statistics = () => {
    return (
        <div className="bg-bg-color pb-[82px]">
            <div className="container">
                <div className="flex justify-between items-center">
                    <StatisticsInfo quantity={1200} infoTitle="Students graduated"/>
                    <StatisticsItemCircle/>
                    <StatisticsInfo quantity={84} infoTitle="Completed courses"/>
                    <StatisticsItemCircle/>
                    <StatisticsInfo quantity={16} infoTitle="Qualified tutors"/>
                    <StatisticsItemCircle/>
                    <StatisticsInfo quantity={5} infoTitle="Years of experience"/>
                </div>
            </div>
        </div>
    );
};

export default Statistics;