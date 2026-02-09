import '../styles/Navbar.css';
import { cvData } from '../data/cvData';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const Navbar = () => {
    const { language } = useLanguage();
    const t = translations[language].nav;

    return (
        <nav className="portfolio-navbar">
            <div className="navbar-logo">{cvData.personal.name}</div>
            <ul className="navbar-links">
                <li><a href="#about">{t.about}</a></li>
                <li><a href="#experience">{t.experience}</a></li>
                <li><a href="#skills">{t.skills}</a></li>
                <li><a href="#education">{t.education}</a></li>
                <li><a href="#contact">{t.contact}</a></li>
            </ul>
            <a href="#contact" className="navbar-cta">{t.hire}</a>
        </nav>
    );
};
