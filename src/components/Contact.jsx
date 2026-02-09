import '../styles/Contact.css';
import { cvData } from '../data/cvData';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const Contact = () => {
    const { language } = useLanguage();
    const t = translations[language].contact;

    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <div className="section-header">
                    <h2>{t.title}</h2>
                    <div className="header-underline"></div>
                </div>
                <div className="contact-content">
                    <div className="contact-info">
                        <h3>{t.subtitle}</h3>
                        <p>{t.description}</p>
                        <div className="contact-methods">
                            <a href={`mailto:${cvData.personal.email}`} className="contact-method">
                                <span className="method-icon">✉️</span>
                                <span>{cvData.personal.email}</span>
                            </a>
                            <div className="social-links-contact">
                                <a href={cvData.social.github} target="_blank" rel="noopener noreferrer" className="social-link">
                                    GitHub
                                </a>
                                <a href={cvData.social.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form">
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">{t.form.name}</label>
                                <input type="text" id="name" name="name" placeholder={t.form.namePlaceholder} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">{t.form.email}</label>
                                <input type="email" id="email" name="email" placeholder={t.form.emailPlaceholder} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">{t.form.message}</label>
                                <textarea id="message" name="message" rows="5" placeholder={t.form.messagePlaceholder}></textarea>
                            </div>
                            <button type="submit" className="submit-btn">{t.form.submit}</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
