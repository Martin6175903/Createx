import Stydying from "@/components/homepage/stydying/Stydying.tsx";
import Statistics from "@/components/homepage/statistics/Statistics.tsx";
import Abouting from "@/components/homepage/abouting/Abouting.tsx";
import Courses from "@/components/homepage/courses/Courses.tsx";
import Benifits from "@/components/homepage/benifits/Benifits.tsx";
import Events from "@/components/homepage/events/Events.tsx";
import Certificate from "@/components/homepage/certificate/Certificate.tsx";
import Team from "@/components/homepage/team/Team.tsx";
import Testimonialts from "@/components/homepage/testimonialts/Testimonialts.tsx";
import Blog from "@/components/homepage/blog/Blog.tsx";
import Subscribe from "@/components/homepage/subscribe/Subscribe.tsx";

const Homepage = () => {
    return (
        <main>
            <Stydying/>
            <Statistics/>
            <Abouting/>
            <Courses/>
            <Benifits/>
            <Events/>
            <Certificate/>
            <Team/>
            <Testimonialts/>
            <Blog/>
            <Subscribe/>
        </main>
    );
};

export default Homepage;