import '../styles/Footer.css';
import { cvData } from '../data/cvData';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const Footer = () => {
    const { language } = useLanguage();
    const t = translations[language].footer;

    return (
        <footer className="portfolio-footer">
            <div className="footer-content">
                <p>© {new Date().getFullYear()} {cvData.personal.name}. {t.madeWith}</p>
                <div className="social-links">
                    <a href={cvData.social.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href={cvData.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
};
