import '../styles/SkillsSection.css';
import { cvData } from '../data/cvData';
import { SkillBadge } from './SkillBadge';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const SkillsSection = () => {
    const { language } = useLanguage();
    const t = translations[language].skills;

    return (
        <section id="skills" className="skills-section">
            <div className="skills-container">
                <div className="section-header">
                    <h2>{t.title}</h2>
                    <div className="header-underline"></div>
                </div>
                <div className="skills-grid">
                    <div className="skill-category">
                        <h3 className="category-title">{t.categories.frontend}</h3>
                        <div className="skills-list">
                            {cvData.skills.frontend.map((skill, i) => (
                                <SkillBadge key={i} name={skill} />
                            ))}
                        </div>
                    </div>
                    <div className="skill-category">
                        <h3 className="category-title">{t.categories.backend}</h3>
                        <div className="skills-list">
                            {cvData.skills.backend.map((skill, i) => (
                                <SkillBadge key={i} name={skill} />
                            ))}
                        </div>
                    </div>
                    <div className="skill-category">
                        <h3 className="category-title">{t.categories.automation}</h3>
                        <div className="skills-list">
                            {cvData.skills.automation.map((skill, i) => (
                                <SkillBadge key={i} name={skill} />
                            ))}
                        </div>
                    </div>
                    <div className="skill-category">
                        <h3 className="category-title">{t.categories.methodologies}</h3>
                        <div className="skills-list">
                            {cvData.skills.methodologies.map((skill, i) => (
                                <SkillBadge key={i} name={skill} />
                            ))}
                        </div>
                    </div>
                    <div className="skill-category">
                        <h3 className="category-title">{t.categories.tools}</h3>
                        <div className="skills-list">
                            {cvData.skills.tools.map((skill, i) => (
                                <SkillBadge key={i} name={skill} />
                            ))}
                        </div>
                    </div>
                    <div className="skill-category">
                        <h3 className="category-title">{t.categories.softSkills}</h3>
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
