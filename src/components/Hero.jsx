import '../styles/Hero.css';

export const Hero = ({ name, title, description }) => {
    return (
        <section className="portfolio-hero">
            <div className="hero-content">
                <p className="hero-greeting">👋 Hola, soy</p>
                <h1 className="hero-name">{name}</h1>
                <h2 className="hero-title">{title}</h2>
                <p className="hero-description">{description}</p>
                <div className="hero-buttons">
                    <a href="#contact" className="btn-primary">Contactar</a>
                    <a href="#experience" className="btn-secondary">Ver Experiencia</a>
                </div>
            </div>
        </section>
    );
};
