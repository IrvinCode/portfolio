import '../styles/Footer.css';
import { cvData } from '../data/cvData';

export const Footer = () => {
    return (
        <footer className="portfolio-footer">
            <div className="footer-content">
                <p>© {new Date().getFullYear()} {cvData.personal.name}. Hecho con React.</p>
                <div className="social-links">
                    <a href={cvData.social.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href={cvData.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
};
