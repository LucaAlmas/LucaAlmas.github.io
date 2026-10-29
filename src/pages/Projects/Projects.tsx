import { Project } from "./ProjectsRef/Project";
import { Status } from "./ProjectsRef/status";
import './Projects.scss';

const Projects = () => {
    const titles = ["Geeno", "Uonder", "Ridle"];

    const descriptions = [
        `${titles[0]} è un'app per viaggiatori costruita con Swift. Ti aiuta a gestire i percorsi del tuo viaggio e a trovare i migliori percorsi per raggiungere le tue destinazioni.`,
        `${titles[1]} è un'app per il tracking delle proprie uscite in bicicletta. Sviluppata con Swift e SwiftUI, permette di registrare le proprie uscite e visualizzare statistiche. Prevede anche una sezione dedicata alla gamification, con la possibilità di sbloccare badge in base ai progressi ottenuti.`
    ];

    const appStoreUrls: (string | undefined)[] = [
        'https://apps.apple.com/it/app/uonder/id6796997122',
        'https://apps.apple.com/it/app/ridle/id6795566810'
    ];

    // const links = [
    //     `https://github.com/LucaAlmas/${titles[0]}`,
    //     `https://github.com/LucaAlmas/${titles[1]}`,
    //     `https://github.com/LucaAlmas/${titles[2]}`
    // ];

    const status: Map<string, Status> = new Map([
        [titles[0], Status.Released],
        [titles[1], Status.Released]
    ]);

    return (
        <section id="projects" className="section projects-page">
            <div className="projects-page__header">
                <h1>Progetti</h1>
                <p>Qui ci sono alcuni dei progetti su cui ho lavorato o sto lavorando:</p>
            </div>
            <div className="projects-page__viewport">
                <div className="projects-page__track">
                    {titles.map((title, index) => (
                        <Project
                            key={index}
                            title={title}
                            description={descriptions[index]}
                            appStoreUrl={appStoreUrls[index]}
                            status={status.get(title)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
