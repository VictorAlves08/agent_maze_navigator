import './styles.css';

const Footer = () => {
    const currentYear = new Date()?.getFullYear?.() || "2024";
    return (
        <div className="footer">
            <p>Universidade Federal de Viçosa © {currentYear} - Todos os direitos reservados.</p>
            <p>Desenvolvido por: <a href="https://linktr.ee/victoralves08" target="_blank" rel="noreferrer">Victor Oliveira</a></p>
        </div>
    )
}

export default Footer;
