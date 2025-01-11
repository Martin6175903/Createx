import Logo from "@/components/chunk/header/Logo.tsx";
import IconFacebook from "@/assets/footer/facebook-icon.svg?react";
import IconTwitter from "@/assets/footer/twitter-icon.svg?react";
import IconYoutube from "@/assets/footer/youtube-icon.svg?react";
import IconTelegram from "@/assets/footer/telegram-icon.svg?react";
import IconInstagram from "@/assets/footer/instagram-icon.svg?react";
import IconLinkedIn from "@/assets/footer/linked-in-icon.svg?react";
import FooterList from "@/components/chunk/footer/footerList/FooterList.tsx";
import FooterListTitle from "@/components/chunk/footer/footerList/FooterListTitle.tsx";

const Footer = () => {

    return (
        <footer className="bg-gray-900 text-white">
            <div className="container">
                <div className="footer__info pt-20 pb-[60px] flex gap-[55px] justify-between">
                    <div className="basis-[279px]">
                        <Logo color="white"/>
                        <p className="mt-6 mb-9 opacity-60 text-[12px]">
                            Createx Online School is a leader in online studying. We have lots of courses and programs
                            from the main market experts. We provide relevant approaches to online learning, internships
                            and employment in the largest companies in the country.
                        </p>
                        <div className="footer__icons">
                            <ul className="flex gap-5 items-center">
                                <li><a className="footer__icons-link" href="#"><IconFacebook/></a></li>
                                <li><a className="footer__icons-link" href="#"><IconTwitter/></a></li>
                                <li><a className="footer__icons-link" href="#"><IconYoutube/></a></li>
                                <li><a className="footer__icons-link" href="#"><IconTelegram/></a></li>
                                <li><a className="footer__icons-link" href="#"><IconInstagram/></a></li>
                                <li><a className="footer__icons-link" href="#"><IconLinkedIn/></a></li>
                            </ul>
                        </div>
                    </div>
                    <FooterList
                        title={"SITE MAP"}
                        items={["About Us", "Courses", "Events", "Blog", "Contacts"]}
                        links={["about", "courses", "events-list-view", "blog", "contacts"]}
                    />
                    <FooterList
                        title={"COURSES"}
                        items={["Marketing", "Management", "HR & Recruting", "Design", "Development"]}
                        links={["about", "courses", "events-list-view", "blog", "contacts"]}
                    />
                    <div>
                        <FooterListTitle title={"CONTACT US"}/>
                        <ul className="opacity-60">
                            <li className="mb-2"><a className="flex gap-2 items-center" href="tel:74055550128">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5.66683 1.94857C5.11454 1.94857 4.66683 2.39628 4.66683 2.94857V13.0527C4.66683 13.605 5.11454 14.0527 5.66683 14.0527H10.3335C10.8858 14.0527 11.3335 13.605 11.3335 13.0527V2.94857C11.3335 2.39628 10.8858 1.94857 10.3335 1.94857H10.2779L10.1155 2.3382C10.012 2.58661 9.76928 2.74842 9.50016 2.74842H6.50016C6.23105 2.74842 5.98832 2.58661 5.8848 2.3382L5.72242 1.94857H5.66683ZM3.3335 2.94857C3.3335 1.6599 4.37817 0.615234 5.66683 0.615234H10.3335C11.6222 0.615234 12.6668 1.6599 12.6668 2.94857V13.0527C12.6668 14.3414 11.6222 15.3861 10.3335 15.3861H5.66683C4.37816 15.3861 3.3335 14.3414 3.3335 13.0527V2.94857Z"
                                        fill="white"/>
                                </svg>
                                <span>(405) 555-0128</span>
                            </a></li>
                            <li><a className="flex gap-2 items-center" href="hello@createx.com">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M15.1668 11.9993V4.66602C15.1668 3.56145 14.2714 2.66602 13.1668 2.66602L2.83349 2.66603C1.72893 2.66603 0.833496 3.56146 0.833496 4.66603V11.9993C0.833496 13.1039 1.72893 13.9993 2.8335 13.9993L13.1668 13.9993C14.2714 13.9993 15.1668 13.1039 15.1668 11.9993ZM13.8335 6.17232V11.9993C13.8335 12.3675 13.535 12.666 13.1668 12.666L2.8335 12.666C2.46531 12.666 2.16683 12.3675 2.16683 11.9993L2.16683 6.17223L6.87561 9.3742C7.55433 9.83573 8.44613 9.83573 9.12485 9.3742L13.8335 6.17232ZM13.8259 4.56509C13.7773 4.24479 13.5007 3.99935 13.1668 3.99935L2.83349 3.99936C2.49965 3.99936 2.22311 4.24476 2.17443 4.56501L7.62535 8.27164C7.85159 8.42548 8.14886 8.42548 8.3751 8.27164L13.8259 4.56509Z"
                                        fill="white"/>
                                </svg>
                                <span>hello@createx.com</span>
                            </a></li>
                        </ul>
                    </div>
                    <div className="basis-[290px]">
                        <FooterListTitle title={"SIGN UP TO OUR NEWSLETTER"} margin={6}/>
                        <form action="#">
                            <label className="relative group/edit">
                                <input
                                    className="w-full bg-[rgba(255,255,255,0.12)] h-9 py-[9px] pl-3 pr-[30px] rounded border-solid border-[1px] border-[rgba(255,255,255,0.2)] focus-visible:outline-0 placeholder:text-xs duration-300 hover:bg-[rgba(255,255,255,0.22)] hover:border-[rgba(255,255,255,0.5)]"
                                    type="email" placeholder={"Email address"}/>
                                <svg className="absolute right-3 top-[calc(50%-8px)] group-hover/edit:cursor-pointer" width="16" height="16"
                                     viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M9.86193 4.52925C10.1223 4.2689 10.5444 4.2689 10.8047 4.52925L13.8047 7.52925C14.0651 7.7896 14.0651 8.21171 13.8047 8.47206L10.8047 11.4721C10.5444 11.7324 10.1223 11.7324 9.86193 11.4721C9.60158 11.2117 9.60158 10.7896 9.86193 10.5292L11.7239 8.66732H2.66667C2.29848 8.66732 2 8.36884 2 8.00065C2 7.63246 2.29848 7.33398 2.66667 7.33398H11.7239L9.86193 5.47206C9.60158 5.21171 9.60158 4.7896 9.86193 4.52925Z"
                                        fill="white"/>
                                </svg>
                            </label>
                        </form>
                        <p className="text-[10px] mt-3">
                            *Subscribe to our newsletter to receive communications and early updates from Createx SEO
                            Agency.
                        </p>
                    </div>
                </div>
            </div>
            <div className="footer__copyright py-5">
                <div className="container">
                    <div className="flex justify-between">
                        <div className="flex items-center gap-0.5 text-xs leading-[1.5]">
                            <span>© All rights reserved.</span>
                            <div className="flex items-center gap-1">
                                <span>Made with</span>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7.99974 13.2715C4.9337 11.5252 3.22366 9.78955 2.39675 8.28361C1.55041 6.74228 1.62425 5.4441 2.09389 4.52273C3.05921 2.62892 5.80427 2.02333 7.47678 4.13865L7.9997 4.80001L8.52266 4.13868C10.1955 2.02327 12.9407 2.62896 13.906 4.52273C14.3756 5.44409 14.4494 6.74226 13.603 8.28359C12.776 9.78954 11.0659 11.5252 7.99974 13.2715ZM7.99977 2.73726C5.64696 0.501518 2.17604 1.42555 0.905976 3.91723C0.208948 5.2847 0.199427 7.05212 1.22802 8.92536C2.24749 10.782 4.28009 12.7417 7.67724 14.6194L7.99973 14.7976L8.32222 14.6194C11.7195 12.7417 13.7522 10.782 14.7717 8.92537C15.8004 7.05214 15.7909 5.28472 15.0939 3.91723C13.8238 1.4255 10.3528 0.501552 7.99977 2.73726Z"
                                        fill="#FF3F3A"/>
                                </svg>
                                <span>by Createx Studio</span>
                            </div>
                        </div>
                        <button onClick={() => window.scrollTo(0,0)} className={"opacity-60 font-bold text-sm"}>GO TO TOP</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;