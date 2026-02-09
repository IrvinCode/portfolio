import '../styles/SkillsSection.css';
import { cvData } from '../data/cvData';
import { SkillBadge } from './SkillBadge';

export const SkillsSection = () => {
    return (
        <section id="skills" className="skills-section">
            <div className="skills-container">
                <div className="section-header">
                    <h2>Habilidades Técnicas</h2>
                    <div className="header-underline"></div>
                </div>
                <div className="skills-grid">
                    <div className="skill-category">
                        <h3 className="category-title">Frontend</h3>
                        <div className="skills-list">
                            {cvData.skills.frontend.map((skill, i) => (
                                <SkillBadge key={i} name={skill} />
                            ))}
                        </div>
                    </div>
                    <div className="skill-category">
                        <h3 className="category-title">Backend & Databases</h3>
                        <div className="skills-list">
                            {cvData.skills.backend.map((skill, i) => (
                                <SkillBadge key={i} name={skill} />
                            ))}
                        </div>
                    </div>
                    <div className="skill-category">
                        <h3 className="category-title">IA & Automatización</h3>
                        <div className="skills-list">
                            {cvData.skills.automation.map((skill, i) => (
                                <SkillBadge key={i} name={skill} />
                            ))}
                        </div>
                    </div>
                    <div className="skill-category">
                        <h3 className="category-title">Metodologías</h3>
                        <div className="skills-list">
                            {cvData.skills.methodologies.map((skill, i) => (
                                <SkillBadge key={i} name={skill} />
                            ))}
                        </div>
                    </div>
                    <div className="skill-category">
                        <h3 className="category-title">Herramientas</h3>
                        <div className="skills-list">
                            {cvData.skills.tools.map((skill, i) => (
                                <SkillBadge key={i} name={skill} />
                            ))}
                        </div>
                    </div>
                    <div className="skill-category">
                        <h3 className="category-title">Competencias Profesionales</h3>
                        <div className="skills-list">
                            {cvData.skills.softSkills.map((skill, i) => (
                                <SkillBadge key={i} name={skill} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
