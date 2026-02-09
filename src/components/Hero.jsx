import '../styles/Hero.css';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { cvData } from '../data/cvData';

export const Hero = () => {
    const { language } = useLanguage();
    const t = translations[language].hero;

    return (
        <section className="portfolio-hero">
            <div className="hero-content">
                <div className="hero-text">
                    <p className="hero-greeting">{t.greeting}</p>
                    <h1 className="hero-name">{cvData.personal.name}</h1>
                    <h2 className="hero-title">{t.title}</h2>
                    <p className="hero-description">{t.subtitle}</p>
                    <div className="hero-buttons">
                        <a href="#contact" className="btn-primary">{t.contactBtn}</a>
                        <a href="#experience" className="btn-secondary">{t.experienceBtn}</a>
                    </div>
                </div>
                <div className="hero-photo">
                    <div className="hero-photo-frame">
                        <div className="hero-photo-ring hero-photo-ring--outer"></div>
                        <div className="hero-photo-ring hero-photo-ring--inner"></div>
                        <div className="hero-photo-wrapper">
                            <img src="/profile.png" alt={cvData.personal.name} />
                        </div>
                        <div className="hero-photo-decoration hero-photo-decoration--dots"></div>
                        <div className="hero-photo-decoration hero-photo-decoration--accent"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};
