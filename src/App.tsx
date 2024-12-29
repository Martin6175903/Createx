import './App.scss'
import Header from "./components/chunk/header/Header.tsx";
import Footer from "./components/chunk/Footer.tsx";
import Stydying from "./components/homepage/stydying/Stydying.tsx";
import Statistics from "./components/homepage/statistics/Statistics.tsx";
import Abouting from "./components/homepage/abouting/Abouting.tsx";
import Courses from "./components/homepage/courses/Courses.tsx";

function App() {

    return (
        <div className="wrapper flex flex-col h-full justify-between">
            <Header />
            <main>
                <Stydying/>
                <Statistics/>
                <Abouting/>
                <Courses/>
            </main>
            <Footer />
        </div>
    )
}

export default App
