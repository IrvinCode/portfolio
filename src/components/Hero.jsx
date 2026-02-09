import './Hero.css';

export const Hero = ({ name, title, description }) => {
    return (
        <section className="portfolio-hero">
            <div className="hero-content">
                <h1 className="hero-name">{name || "Hola, soy Programador"}</h1>
                <h2 className="hero-title">{title || "Full Stack Developer"}</h2>
                <p className="hero-description">
                    {description || "Especializado en crear experiencias digitales excepcionales con tecnologías modernas."}
                </p>
                <div className="hero-buttons">
                    <button className="btn-primary">Ver Proyectos</button>
                    <button className="btn-secondary">Mi Resumen</button>
                </div>
            </div>
        </section>
    );
};
