import './SkillBadge.css';

export const SkillBadge = ({ name, icon }) => {
    return (
        <div className="skill-badge">
            {icon && <span className="skill-icon">{icon}</span>}
            <span className="skill-name">{name}</span>
        </div>
    );
};
