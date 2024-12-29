interface StatiscticsInfoProps {
    quantity: number,
    infoTitle: string,
}

const StatiscticsInfo = ({quantity, infoTitle}: StatiscticsInfoProps) => {
    return (
        <div className="flex items-center gap-3">
            <h4 className="text-[46px] leading-[1.3] font-black">{quantity}</h4>
            <p className="leading-[1.6] text-[16px]">{infoTitle}</p>
        </div>
    );
};

export default StatiscticsInfo;