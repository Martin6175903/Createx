import {FC} from "react";

const FooterListTitle:FC<{ title: string, margin?: number }> = ({title, margin}) => {
    return (
        <h4 className={`subtitle ${margin ? `mb-${margin}` : "mb-3"}`}>{title}</h4>
    );
};

export default FooterListTitle;