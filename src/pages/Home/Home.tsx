//import { scrollToSection } from '../../utils/scroll'
import CircularText from '../../components/ui/CircularText/CircularText'
import './Home.scss'

const skills = ['React', 'TypeScript', 'Figma', 'Canva', 'Swift', 'SwiftUI']

const Home = () => {
    return (
        <section id="home" className="section home">
            <div className="hero">
                <div className="hero-circular">
                    <CircularText
                        text="LUCA * ALMASIO * DEV * "
                        spinDuration={22}
                        onHover="speedUp"
                    />
                </div>
                <h1>Ciao, sono <span>Luca Almasio</span> 👋</h1>
                <h2>Software Developer</h2>
                <p className="bio">
                    Sviluppatore con la passione per il design,
                    lavoro sempre per ottenere un prodotto
                    funzionale e esteticamente ben riuscito.
                </p>
            </div>

            <div className="skills">
                <h3>Tecnologie & Strumenti più utilizzati</h3>
                <div className="skills-grid">
                    {skills.map(skill => (
                        <span key={skill} className="skill-badge">{skill}</span>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Home
