import { Status } from './status';
import './Project.scss';

interface ProjectProps {
    title: string;
    description: string;
    appStoreUrl?: string;
    status?: Status;
}

const statusModifier: Record<Status, string> = {
    [Status.InDevelopment]: 'in-development',
    [Status.ToBeReleased]: 'to-be-released',
    [Status.Released]: 'released'
};

export const Project = ({ title, description, appStoreUrl, status }: ProjectProps) => {
    return (
        <div className="project-card">
            {status && (
                <span className={`project-card__dev-badge project-card__dev-badge--${statusModifier[status]}`}>
                    <span className="project-card__dev-dot" aria-hidden="true" />
                    {status}
                </span>
            )}
            <h3 className="project-card__title">{title}</h3>
            <p className="project-card__description">{description}</p>
            {appStoreUrl && <div className="project-card__footer">
                <a
                    href={appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__app-store-btn"
                >
                    App Store
                </a>
            </div>}
        </div>
    );
};
