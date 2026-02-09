import '../styles/Education.css';
import { cvData } from '../data/cvData';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const Education = () => {
    const { language } = useLanguage();
    const t = translations[language].education;

    // Mapear educación con traducciones
    const education = [
        {
            degree: t.items.platzi.degree,
            institution: t.items.platzi.institution,
            location: t.items.platzi.location,
            startDate: t.items.platzi.startDate,
            endDate: t.current,
            description: t.items.platzi.description
        },
        {
            degree: t.items.pmbok.degree,
            institution: t.items.pmbok.institution,
            location: t.items.pmbok.location,
            startDate: t.items.pmbok.startDate,
            endDate: t.items.pmbok.endDate
        },
        {
            degree: t.items.cecyte.degree,
            institution: t.items.cecyte.institution,
            location: t.items.cecyte.location,
            startDate: t.items.cecyte.startDate,
            endDate: t.items.cecyte.endDate
        },
        {
            degree: t.items.tecnm.degree,
            institution: t.items.tecnm.institution,
            location: t.items.tecnm.location,
            startDate: t.items.tecnm.startDate,
            endDate: t.items.tecnm.endDate,
            description: t.items.tecnm.description
        }
    ];

    return (
        <section id="education" className="education-section">
            <div className="education-container">
                <div className="section-header">
                    <h2>{t.title}</h2>
                    <div className="header-underline"></div>
                </div>
                <div className="education-grid">
                    {education.map((edu, index) => (
                        <article key={index} className="education-card">
                            <div className="edu-icon">🎓</div>
                            <h3 className="edu-degree">{edu.degree}</h3>
                            <h4 className="edu-institution">{edu.institution}</h4>
                            <time className="edu-period">
                                {edu.startDate} - {edu.endDate}
                            </time>
                            {edu.description && (
                                <p className="edu-description">{edu.description}</p>
                            )}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};
