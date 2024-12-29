import AboutingListItem from "./AboutingListItem.tsx";

const AboutingList = () => {
    return (
        <ul className="flex flex-col gap-3 list-image-[url(assets/homepage/abouting/check-icon.svg)]">
            <AboutingListItem title="A fermentum in morbi pretium aliquam adipiscing donec tempus."/>
            <AboutingListItem title="Vulputate placerat amet pulvinar lorem nisl."/>
            <AboutingListItem title="Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed."/>
            <AboutingListItem title="Etiam duis lobortis in fames ultrices commodo nibh."/>
            <AboutingListItem title="Tincidunt sagittis neque sem ac eget."/>
            <AboutingListItem title="Ultricies amet justo et eget quisque purus vulputate dapibus tortor."/>
        </ul>
    );
};

export default AboutingList;