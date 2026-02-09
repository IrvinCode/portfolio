import { useLanguage } from '../context/LanguageContext';
import '../styles/LanguageToggle.css';

export const LanguageToggle = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <button
            className="language-toggle-btn"
            onClick={toggleLanguage}
            aria-label="Cambiar idioma"
            title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
        >
            <span className="flag" role="img" aria-label={language === 'es' ? 'English' : 'Español'}>
                {language === 'es' ? '🇺🇸' : '🇲🇽'}
            </span>
        </button>
    );
};
