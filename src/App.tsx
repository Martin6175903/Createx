import './App.scss'
import Header from "./components/chunk/header/Header.tsx";
import Footer from "./components/chunk/Footer.tsx";
import Stydying from "./components/homepage/stydying/Stydying.tsx";
import Statistics from "./components/homepage/statistics/Statistics.tsx";
import Abouting from "./components/homepage/abouting/Abouting.tsx";
import Courses from "./components/homepage/courses/Courses.tsx";
import Benifits from "./components/homepage/benifits/Benifits.tsx";
import Events from "@/components/homepage/events/Events.tsx";
import Certificate from "@/components/homepage/certificate/Certificate.tsx";
import Team from "@/components/homepage/team/Team.tsx";

function App() {

    return (
        <div className="wrapper flex flex-col h-full justify-between">
            <Header />
            <main>
                <Stydying/>
                <Statistics/>
                <Abouting/>
                <Courses/>
                <Benifits/>
                <Events/>
                <Certificate/>
                <Team/>
            </main>
            <Footer />
        </div>
    )
}

export default App
