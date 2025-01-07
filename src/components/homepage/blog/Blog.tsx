import BlogItem from "@/components/homepage/blog/BlogItem.tsx";
import BlogImage1 from "@/assets/homepage/blog/blog-img-1.png";
import BlogImage2 from "@/assets/homepage/blog/blog-img-2.png";
import BlogImage3 from "@/assets/homepage/blog/blog-img-3.png";
import IconMicro from "@/assets/homepage/blog/microfon-icon.svg?react";
import IconPlay from "@/assets/homepage/blog/play-icon.svg?react";
import IconFiles from "@/assets/homepage/blog/file-icon.svg?react";

const Blog = () => {

    const blogItemsInfo = [
        {
            srcImage: BlogImage1,
            iconInfo: {
                icon: <IconMicro/>,
                title: "Podcast"
            },
            sphere: "Marketing",
            date: "September 4, 2020",
            time: "36 min",
            title: "What is traffic arbitrage and does it really make money?",
            subtitle: "Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...",
            btnTitle: "Listen"
        },
        {
            srcImage: BlogImage2,
            iconInfo: {
                icon: <IconPlay/>,
                title: "Video"
            },
            sphere: "Management",
            date: "August 25, 2020",
            time: "45 min",
            title: "What to do and who to talk to if you want to get feedback on the product",
            subtitle: "Neque a, senectus consectetur odio in aliquet nec eu. Ultricies ac nibh urna urna sagittis faucibus...",
            btnTitle: "Watch"
        },
        {
            srcImage: BlogImage3,
            iconInfo: {
                icon: <IconFiles/>,
                title: "Article"
            },
            sphere: "Design",
            date: "August 8, 2020",
            time: null,
            title: "Should you choose a creative profession if you are attracted to creativity?",
            subtitle: "Curabitur nisl tincidunt eros venenatis vestibulum ac placerat. Tortor, viverra sed vulputate ultrices...",
            btnTitle: "Read"
        }
    ]

    return (
        <section className="pt-[120px] pb-[180px]">
            <div className="container">
                <div className="flex justify-between items-end mb-[60px]">
                    <div>
                        <p className="subtitle">Our blog</p>
                        <h3 className="title">Latest posts</h3>
                    </div>
                    <button className="btn btn-bg">Go to blog</button>
                </div>
                <div className="flex gap-[30px]">
                    {blogItemsInfo.map((item, index) =>
                        <BlogItem src={item.srcImage} iconInfo={item.iconInfo} sphere={item.sphere} date={item.date} time={item.time} title={item.title} subtitle={item.subtitle} btnTitle={item.btnTitle} key={index}/>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Blog;