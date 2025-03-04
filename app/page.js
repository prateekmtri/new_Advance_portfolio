import Header from "./pages/header/page";
import Home from "./pages/home/page";
import About from "./pages/about/page";
import Projects from "./pages/project/page";
import Experience from "./pages/experince/page";
import Contact from "./pages/contact/page";
import Footer from "./pages/footer/page";

export default function MainPage() {
    return (
        <div>
            <Header />
            <Home />
            <About />
            <Projects />
            <Experience />
            <Contact/>
            
        </div>
    );
}
