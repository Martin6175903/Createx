import './App.scss'
import Header from "./components/chunk/header/Header.tsx";
import Footer from "./components/chunk/footer/Footer.tsx";
import {Outlet} from "react-router-dom";

function App() {

    return (
        <div className="wrapper flex flex-col h-full justify-between">
            <Header/>
                <Outlet/>
            <Footer/>
        </div>
    )
}

export default App
