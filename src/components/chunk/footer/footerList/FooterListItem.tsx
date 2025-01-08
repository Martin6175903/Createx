import {FC} from "react";

const FooterListItem: FC<{ title: string }> = ({title}) => {
    return (
        <li><a className="text-base leading-[1.6]" href="#">{title}</a></li>
    );
};

export default FooterListItem;