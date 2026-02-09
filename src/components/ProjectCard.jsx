import './ProjectCard.css';

export const ProjectCard = ({ title, description, tags, link, image }) => {
    return (
        <div className="project-card">
            <div className="project-image">
                {image ? <img src={image} alt={title} /> : <div className="image-placeholder" />}
            </div>
            <div className="project-info">
                <h3 className="project-title">{title || "Nombre del Proyecto"}</h3>
                <p className="project-desc">{description || "Descripción breve del proyecto y las tecnologías utilizadas."}</p>
                <div className="project-tags">
                    {tags?.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                    )) || <span className="tag">React</span>}
                </div>
                <a href={link || "#"} className="project-link">Ver Proyecto →</a>
            </div>
        </div>
    );
};
