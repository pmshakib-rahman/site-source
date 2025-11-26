import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = ['About', 'Experience', 'Projects', 'Contact'];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'py-4 bg-black/80 backdrop-blur-xl border-b border-white/10'
                    : 'py-6 bg-transparent'
                }`}
        >
            <div className="container flex justify-between items-center">
                <a href="#" className="text-3xl font-black tracking-tighter">
                    <span className="gradient-text">SR</span>
                </a>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8 items-center">
                    {navItems.map((item) => (
                        <li key={item}>
                            <a
                                href={`#${item.toLowerCase()}`}
                                className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300" />
                            </a>
                        </li>
                    ))}
                    <li>
                        <a
                            href="#contact"
                            className="px-6 py-2.5 gradient-bg text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300"
                        >
                            Hire Me
                        </a>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10"
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden mt-4 pb-6 border-t border-white/10 bg-black/80 backdrop-blur-xl"
                >
                    <ul className="container space-y-4 pt-6">
                        {navItems.map((item) => (
                            <li key={item}>
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block text-gray-300 hover:text-white transition-colors"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a
                                href="#contact"
                                onClick={() => setMobileMenuOpen(false)}
                                className="block w-full px-6 py-2.5 gradient-bg text-white text-center font-semibold rounded-full"
                            >
                                Hire Me
                            </a>
                        </li>
                    </ul>
                </motion.div>
            )}
        </motion.nav>
    );
};

export default Navbar;
