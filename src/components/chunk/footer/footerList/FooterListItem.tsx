import {FC} from "react";
import {Link} from "react-router-dom";

const FooterListItem: FC<{ title: string, link: string }> = ({title, link }) => {
    return (
        <li><Link to={link} className="text-base leading-[1.6]">
            {title}
        </Link></li>
    );
};

export default FooterListItem;