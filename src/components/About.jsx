import '../styles/About.css';
import { cvData } from '../data/cvData';

export const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <div className="about-header">
                    <h2>Sobre mí</h2>
                    <div className="header-underline"></div>
                </div>
                <div className="about-content">
                    <div className="profile-image-placeholder">
                        <div className="image-circle">
                            <span className="initial">{cvData.personal.name.charAt(0)}</span>
                        </div>
                    </div>
                    <div className="profile-text">
                        <h3 className="profile-title">{cvData.personal.title}</h3>
                        <p className="profile-description">{cvData.profile.es}</p>
                        <div className="profile-meta">
                            <div className="meta-item">
                                <span className="meta-icon">📍</span>
                                <span>{cvData.personal.location}</span>
                            </div>
                            <div className="meta-item">
                                <span className="meta-icon">💼</span>
                                <span>{cvData.personal.subtitle}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
