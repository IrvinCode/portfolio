import './Footer.css';

export const Footer = () => {
    return (
        <footer className="portfolio-footer">
            <div className="footer-content">
                <p>© {new Date().getFullYear()} Nombre del Desarrollador. Hecho con React.</p>
                <div className="social-links">
                    <a href="#">GitHub</a>
                    <a href="#">LinkedIn</a>
                    <a href="#">Twitter</a>
                </div>
            </div>
        </footer>
    );
};
