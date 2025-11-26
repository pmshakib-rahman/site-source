import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Animated gradient orbs */}
            <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />

            <div className="container relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-6"
                >
                    <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-gray-300">
                        Available for freelance work
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6 leading-none"
                >
                    <span className="gradient-text">Shakib Rahman</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl md:text-3xl text-gray-400 max-w-3xl mx-auto mb-12 font-light"
                >
                    Software Engineer crafting exceptional web experiences with modern technologies
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex gap-4 justify-center flex-wrap"
                >
                    <a
                        href="#projects"
                        className="group px-8 py-4 gradient-bg text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 flex items-center gap-2"
                    >
                        View My Work
                        <ArrowDown className="group-hover:translate-y-1 transition-transform" size={20} />
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                    >
                        Get in Touch
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="mt-20 flex justify-center gap-8 text-sm text-gray-500"
                >
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-1">5+</div>
                        <div>Years Experience</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-1">50+</div>
                        <div>Projects Completed</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-1">20+</div>
                        <div>Happy Clients</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
