import '../styles/Experience.css';
import { cvData } from '../data/cvData';

export const Experience = () => {
    return (
        <section id="experience" className="experience-section">
            <div className="experience-container">
                <div className="section-header">
                    <h2>Experiencia Profesional</h2>
                    <div className="header-underline"></div>
                </div>
                <div className="timeline">
                    {cvData.experience.map((job, index) => (
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
                                        {job.startDate} - {job.endDate}
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
