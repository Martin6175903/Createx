import FooterListTitle from "@/components/chunk/footer/footerList/FooterListTitle.tsx";
import FooterListItem from "@/components/chunk/footer/footerList/FooterListItem.tsx";

const FooterList = ({title, items}: {title: string, items: string[]}) => {
    return (
        <div>
            <FooterListTitle title={title}/>
            <ul className="flex flex-col gap-2 opacity-60">
                {items.map((title, index) =>
                    <FooterListItem title={title} key={index}/>
                )}
            </ul>
        </div>
    );
};

export default FooterList;