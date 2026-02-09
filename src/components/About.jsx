import '../styles/About.css';
import { cvData } from '../data/cvData';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const About = () => {
    const { language } = useLanguage();
    const t = translations[language].about;
    const profile = cvData.profile[language];

    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <div className="about-header">
                    <h2>{t.title}</h2>
                    <div className="header-underline"></div>
                </div>
                <div className="about-content">
                    <div className="profile-image-placeholder">
                        <div className="image-circle">
                            <span className="initial">{cvData.personal.name.charAt(0)}</span>
                        </div>
                    </div>
                    <div className="profile-text">
                        <h3 className="profile-title">{translations[language].hero.title}</h3>
                        <p className="profile-description">{profile}</p>
                        <div className="profile-meta">
                            <div className="meta-item">
                                <span className="meta-icon">📍</span>
                                <span>{t.location}</span>
                            </div>
                            <div className="meta-item">
                                <span className="meta-icon">💼</span>
                                <span>{translations[language].hero.subtitle}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
