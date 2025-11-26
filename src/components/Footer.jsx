const Footer = () => {
    return (
        <footer className="py-8 border-t border-white/10 text-center text-gray-500 text-sm">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Shakib Rahman. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
