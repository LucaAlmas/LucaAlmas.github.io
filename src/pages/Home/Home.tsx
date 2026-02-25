import { useNavigate } from 'react-router-dom'
import './Home.scss'

const skills = ['React', 'TypeScript', 'Figma', 'Canva', 'C++', 'C#', 'SQL']

const Home = () => {
    const navigate = useNavigate()

    return (
        <main className="home">
            <section className="hero">
                <h1>Ciao, sono <span>Luca Almasio</span> 👋</h1>
                <h2>Web Developer & Web Designer</h2>
                <p className="bio">
                    Sviluppatore con la passione per il design,
                    lavoro sempre per ottenere un prodotto
                    funzionale e esteticamente ben riuscito.
                </p>
                <button onClick={() => navigate('/projects')}>
                    Vedi i miei progetti →
                </button>
            </section>

            <section className="skills">
                <h3>Tecnologie & Strumenti</h3>
                <div className="skills-grid">
                    {skills.map(skill => (
                        <span key={skill} className="skill-badge">{skill}</span>
                    ))}
                </div>
            </section>
        </main>
    )
}

export default Home