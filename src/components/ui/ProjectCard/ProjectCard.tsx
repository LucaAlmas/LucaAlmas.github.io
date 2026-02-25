import type {Project} from "../../../types";

interface Props {
    project: Project
}

export default function ProjectCard({ project }: Props) {
    return (
        <div className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div>
                {project.techStack.map(tech => (
                    <span key={tech}>{tech}</span>
                ))}
            </div>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                GitHub
            </a>
            {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    Live Demo
                </a>
            )}
        </div>
    )
}