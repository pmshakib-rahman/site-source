import { Heart, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const Footer = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 500);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative py-12 border-t border-white/10">
            <div className="container">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <p className="text-gray-400 text-sm flex items-center gap-2 justify-center md:justify-start">
                            Made with <Heart size={16} className="text-red-500 fill-red-500" /> by Shakib Rahman
                        </p>
                        <p className="text-gray-600 text-xs mt-1">
                            &copy; {new Date().getFullYear()} All rights reserved.
                        </p>
                    </div>

                    <div className="flex gap-6 text-sm text-gray-400">
                        <a href="#about" className="hover:text-white transition-colors">About</a>
                        <a href="#experience" className="hover:text-white transition-colors">Experience</a>
                        <a href="#projects" className="hover:text-white transition-colors">Projects</a>
                        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
                    </div>
                </div>
            </div>

            {/* Scroll to Top Button */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 w-12 h-12 gradient-bg rounded-full flex items-center justify-center shadow-2xl shadow-indigo-500/50 hover:scale-110 transition-transform duration-300 z-50"
                >
                    <ArrowUp size={20} className="text-white" />
                </button>
            )}
        </footer>
    );
};

export default Footer;
