const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <p>&copy; {currentYear} Eric Slutz</p>
        </footer>
    );
};

export default Footer;
