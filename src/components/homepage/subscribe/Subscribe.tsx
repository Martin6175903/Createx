import ImageIllustration from "@/assets/homepage/subscribe/subscribe-illustration.svg?react";

const Subscribe = () => {
    return (
        <section className="subscribe relative h-[564px]">
            <div className="container pt-[120px] pb-[180px] relative z-30">
                <div className="text-center">
                    <p className="subtitle">Don’t miss anything</p>
                    <h3 className="title mb-[60px]">Subscribe to the Createx School announcements</h3>
                </div>
                <form action="#" className="flex gap-6 justify-center items-center">
                    <label>
                        <input
                            className="w-[422px] h-[52px] py-3.5 px-4 placeholder:text-[16px] rounded duration-300 border-gray-400 border-solid border-[1px] focus-visible:outline-0 focus:border-gray-800 focus:border-2 placeholder:text-gray-600 placeholder:leading-[1.6]"
                            type="text" placeholder="Your working email"/>
                    </label>
                    <button className="btn btn-bg">Subscribe</button>
                </form>
            </div>
            <ImageIllustration className="absolute bottom-0 left-0"/>
            <ImageIllustration className="absolute bottom-0 right-0"/>
        </section>
    );
};

export default Subscribe;