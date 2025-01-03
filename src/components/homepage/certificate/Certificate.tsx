import CertificateImage from "@/assets/homepage/certificate/certificate-illustration.jpg";
import LogoCertificateImage1 from "@/assets/homepage/certificate/logo-img-1.png";
import LogoCertificateImage2 from "@/assets/homepage/certificate/logo-img-2.png";
import LogoCertificateImage3 from "@/assets/homepage/certificate/logo-img-3.png";

const Certificate = () => {
    return (
        <section className="pt-[120px] pb-[60px]">
            <div className="container">
                <div className="flex justify-between relative">
                    <div className="basis-[400px]">
                        <p className="subtitle">Createx Certificate</p>
                        <h3 className="title">Your expertise will be confirmed</h3>
                        <p className="pt-12 pb-8 text-[16px] leading-[1.6] text-gray-800 max-w-[390px]">We are
                            accredited by international professional organizations and institutes:</p>
                        <div className="flex gap-10 items-center">
                            <img src={LogoCertificateImage1} alt="Logo Section Certificate"/>
                            <img src={LogoCertificateImage2} alt="Logo Section Certificate"/>
                            <img src={LogoCertificateImage3} alt="Logo Section Certificate"/>
                        </div>
                    </div>
                    <div className="absolute left-[527px] top-0 shadow-[0_4px_4px_-4px_rgba(30,33,44,0.05),0_12px_10px_-6px_rgba(154,156,165,0.08),0_30px_24px_-10px_rgba(154,156,165,0.1),0_80px_80px_-20px_rgba(154,156,165,0.16)]">
                        <img className="rounded border-[1px] border-solid border-gray-300" src={CertificateImage} alt="Image Illustration Certificate"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certificate;