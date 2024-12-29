import illustrationImage from '../../../assets/homepage/studying/studying-bg.png';

const Stydying = () => {
    return (
        <section className="pt-[128px] pb-[189px] bg-bg-color">
            <div className="container">
                <div className="flex justify-between">
                    <div className="basis-[45%]">
                        <div>
                            <button className="flex items-center">
                                <div className="size-[84px] border-[16px] border-[#FEC8C0] bg-primary rounded-full flex justify-center items-center">
                                    <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10.5 6.13398C11.1667 6.51888 11.1667 7.48113 10.5 7.86603L1.5 13.0622C0.833332 13.4471 -6.10471e-07 12.966 -5.76822e-07 12.1962L-1.2256e-07 1.80385C-8.8911e-08 1.03405 0.833334 0.552922 1.5 0.937822L10.5 6.13398Z"
                                            fill="white"/>
                                    </svg>
                                </div>
                                <span className="font-bold text-[14px]">Play showreel</span>
                            </button>
                        </div>
                        <h1 className="pt-5 pb-[60px] font-black text-[64px] leading-[1.3] tracking-[0.02em]">
                            Enjoy studying
                            with Createx Online Courses
                        </h1>
                        <div className="flex gap-6">
                            <button className="btn btn-bg-none">About us</button>
                            <button className="btn btn-bg">Explore courses</button>
                        </div>
                    </div>
                    <div>
                        <img src={illustrationImage} alt="Stydying Section Illustration"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stydying;