import { useRef } from 'react';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Projects from './pages/Projects';
import './styles/global.scss';
function App() {
    const navbar = useRef();

    function navigateTo(locationId) {
        window.location.hash = locationId;
    }

    return (
        <main>
            <Navbar />
            <Home navigateTo={navigateTo} navbar={navbar} />
            <Projects />
            <About />
            <Contact />
        </main>
    );
}

export default App;
