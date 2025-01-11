import FooterListTitle from "@/components/chunk/footer/footerList/FooterListTitle.tsx";
import FooterListItem from "@/components/chunk/footer/footerList/FooterListItem.tsx";

const FooterList = ({title, items, links}: {title: string, items: string[], links?: string[]}) => {
    return (
        <div>
            <FooterListTitle title={title}/>
            <ul className="flex flex-col gap-2 opacity-60">
                {items.map((title, index) =>
                    <FooterListItem link={links ? links[index] : ""} title={title} key={index}/>
                )}
            </ul>
        </div>
    );
};

export default FooterList;