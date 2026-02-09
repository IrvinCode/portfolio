import '../styles/Education.css';
import { cvData } from '../data/cvData';

export const Education = () => {
    return (
        <section id="education" className="education-section">
            <div className="education-container">
                <div className="section-header">
                    <h2>Formación Académica</h2>
                    <div className="header-underline"></div>
                </div>
                <div className="education-grid">
                    {cvData.education.map((edu, index) => (
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
