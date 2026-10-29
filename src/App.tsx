import Navbar from './components/layout/Navbar/Navbar.tsx'
import Footer from './components/layout/Footer/Footer.tsx'
import Home from './pages/Home/Home.tsx'
// import About from './pages/About/About.tsx'
import Projects from './pages/Projects/Projects.tsx'
//import Pricing from './components/ui/Pricing/Pricing.tsx'
import Contact from './pages/Contact/Contact.tsx'
import Particles from './components/ui/Particles/Particles.tsx'

function App() {
    return (
        <>
            <Particles
                className=""
                particleColors={["#ffffff", "#b8b8ff", "#747bff"]}
                particleCount={250}
                particleSpread={12}
                speed={0.08}
                particleBaseSize={90}
                moveParticlesOnHover
                alphaParticles
                disableRotation={false}
                pixelRatio={typeof window !== 'undefined' ? window.devicePixelRatio : 1}
            />
            <Navbar />
            <main>
                <Home />
                {/* <About /> */}
                <Projects />
                {/* <Pricing /> */}
                <Contact />
            </main>
            <Footer />
        </>
    )
}

export default App
