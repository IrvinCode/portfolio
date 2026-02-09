import '../styles/Navbar.css';

export const Navbar = () => {
    return (
        <nav className="portfolio-navbar">
            <div className="navbar-logo">DeveloperName</div>
            <ul className="navbar-links">
                <li><a href="#about">Sobre mí</a></li>
                <li><a href="#projects">Proyectos</a></li>
                <li><a href="#skills">Habilidades</a></li>
                <li><a href="#contact">Contacto</a></li>
            </ul>
            <button className="navbar-cta">Contrátame</button>
        </nav>
    );
};
