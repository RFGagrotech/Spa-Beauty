import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Testimonials from "./components/Testimonials";


function App() {
    return(
        <>
        <main className="home-hero">
            <Header />
            <Hero />
            <Testimonials />
        </main>
        </>
    )
}

export default App;