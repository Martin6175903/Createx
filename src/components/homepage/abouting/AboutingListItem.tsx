type AboutingListItemProps = {
    title: string;
}

const AboutingListItem = ({ title } : AboutingListItemProps) => {
    return (
        <li className="ml-8 pl-2 text-[16px] leading-[1.6] text-gray-800">{title}</li>
    );
};

export default AboutingListItem;