import StatiscticsInfo from "./StatiscticsInfo.tsx";
import StatisticsItemCircle from "./StatisticsItemCircle.tsx";

const Statistics = () => {
    return (
        <div className="bg-bg-color pb-[82px]">
            <div className="container">
                <div className="flex justify-between items-center">
                    <StatiscticsInfo quantity={1200} infoTitle="Students graduated"/>
                    <StatisticsItemCircle/>
                    <StatiscticsInfo quantity={84} infoTitle="Completed courses"/>
                    <StatisticsItemCircle/>
                    <StatiscticsInfo quantity={16} infoTitle="Qualified tutors"/>
                    <StatisticsItemCircle/>
                    <StatiscticsInfo quantity={5} infoTitle="Years of experience"/>
                </div>
            </div>
        </div>
    );
};

export default Statistics;