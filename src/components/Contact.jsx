import '../styles/Contact.css';
import { cvData } from '../data/cvData';

export const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <div className="section-header">
                    <h2>Contacto</h2>
                    <div className="header-underline"></div>
                </div>
                <div className="contact-content">
                    <div className="contact-info">
                        <h3>¿Interesado en colaborar?</h3>
                        <p>Estoy disponible para proyectos de desarrollo, consultoría en automatización y transformación digital.</p>
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
                                <label htmlFor="name">Nombre</label>
                                <input type="text" id="name" name="name" placeholder="Tu nombre" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" placeholder="tu@email.com" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Mensaje</label>
                                <textarea id="message" name="message" rows="5" placeholder="Cuéntame sobre tu proyecto..."></textarea>
                            </div>
                            <button type="submit" className="submit-btn">Enviar Mensaje</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
