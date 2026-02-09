import '../styles/Experience.css';
import { cvData } from '../data/cvData';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const Experience = () => {
    const { language } = useLanguage();
    const t = translations[language].experience;

    // Mapear las experiencias con sus traducciones
    const experiences = [
        {
            ...cvData.experience[0],
            company: t.positions.freelance.company,
            position: t.positions.freelance.position,
            location: t.positions.freelance.location,
            startDate: t.positions.freelance.startDate,
            achievements: t.positions.freelance.achievements
        },
        {
            ...cvData.experience[1],
            company: t.positions.frontend.company,
            companyType: t.positions.frontend.companyType,
            position: t.positions.frontend.position,
            location: t.positions.frontend.location,
            startDate: t.positions.frontend.startDate,
            endDate: t.positions.frontend.endDate,
            achievements: t.positions.frontend.achievements
        },
        {
            ...cvData.experience[2],
            company: t.positions.developer.company,
            companyType: t.positions.developer.companyType,
            position: t.positions.developer.position,
            location: t.positions.developer.location,
            startDate: t.positions.developer.startDate,
            endDate: t.positions.developer.endDate,
            achievements: t.positions.developer.achievements
        },
        {
            ...cvData.experience[3],
            company: t.positions.intern.company,
            companyType: t.positions.intern.companyType,
            position: t.positions.intern.position,
            location: t.positions.intern.location,
            startDate: t.positions.intern.startDate,
            endDate: t.positions.intern.endDate,
            achievements: t.positions.intern.achievements
        }
    ];

    return (
        <section id="experience" className="experience-section">
            <div className="experience-container">
                <div className="section-header">
                    <h2>{t.title}</h2>
                    <div className="header-underline"></div>
                </div>
                <div className="timeline">
                    {experiences.map((job, index) => (
                        <article key={index} className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <div className="job-header">
                                    <div>
                                        <h3 className="job-position">{job.position}</h3>
                                        <h4 className="job-company">
                                            {job.company}
                                            {job.companyType && <span className="company-type"> — {job.companyType}</span>}
                                        </h4>
                                    </div>
                                    <time className="job-period">
                                        {job.startDate} - {job.current ? t.current : job.endDate}
                                    </time>
                                </div>
                                <ul className="achievements-list">
                                    {job.achievements.map((achievement, i) => (
                                        <li key={i}>{achievement}</li>
                                    ))}
                                </ul>
                                <div className="skills-tags">
                                    {job.skills.map((skill, i) => (
                                        <span key={i} className="skill-tag">{skill}</span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};
