import './App.scss'
import Header from "./assets/components/Header.tsx";
import Footer from "./assets/components/Footer.tsx";

function App() {

    return (
        <div className="wrapper flex flex-col">
            <Header />
            <main>
                Main
            </main>
            <Footer />
        </div>
    )
}

export default App
