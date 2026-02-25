import {HashRouter, Routes, Route, Navigate} from 'react-router-dom'
import Navbar from './components/layout/Navbar/Navbar.tsx'
import Footer from './components/layout/Footer/Footer.tsx'
import Home from './pages/Home/Home.tsx'
import About from './pages/About/About.tsx'
import Projects from './pages/Projects/Projects.tsx'
import Contact from './pages/Contact/Contact.tsx'

function App() {
    return (
        <HashRouter>
            <Navbar />
            <main style={{ paddingTop: '4rem' }}>
                <Routes>
                    <Route path="/" element={<Navigate to="/home" replace />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </main>
            <Footer />
        </HashRouter>
    )
}

export default App