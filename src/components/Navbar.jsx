import '../styles/Navbar.css';
import { cvData } from '../data/cvData';

export const Navbar = () => {
    return (
        <nav className="portfolio-navbar">
            <div className="navbar-logo">{cvData.personal.name}</div>
            <ul className="navbar-links">
                <li><a href="#about">Sobre mí</a></li>
                <li><a href="#experience">Experiencia</a></li>
                <li><a href="#skills">Habilidades</a></li>
                <li><a href="#education">Educación</a></li>
                <li><a href="#contact">Contacto</a></li>
            </ul>
            <a href="#contact" className="navbar-cta">Contrátame</a>
        </nav>
    );
};
