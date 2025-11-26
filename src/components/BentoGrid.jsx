import { motion } from 'framer-motion';
import { Code, Palette, Terminal, Cpu } from 'lucide-react';

const BentoItem = ({ title, description, icon: Icon, className, delay }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
        className={`glass-panel p-6 flex flex-col justify-between hover:bg-white/5 transition-colors ${className}`}
    >
        <div>
            <Icon className="w-8 h-8 mb-4 text-blue-400" />
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-400 text-sm">{description}</p>
        </div>
    </motion.div>
);

const BentoGrid = () => {
    return (
        <section id="about" className="section bg-black/50">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold mb-12 text-center"
                >
                    About Me
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
                    <BentoItem
                        title="Frontend Development"
                        description="Building responsive and interactive UIs with React, Vue, and modern CSS."
                        icon={Code}
                        className="md:col-span-2"
                        delay={0.1}
                    />
                    <BentoItem
                        title="UI/UX Design"
                        description="Crafting intuitive and beautiful user experiences."
                        icon={Palette}
                        className="md:col-span-1"
                        delay={0.2}
                    />
                    <BentoItem
                        title="Backend Integration"
                        description="Connecting frontends to robust APIs and databases."
                        icon={Terminal}
                        className="md:col-span-1"
                        delay={0.3}
                    />
                    <BentoItem
                        title="Performance Optimization"
                        description="Ensuring fast load times and smooth interactions."
                        icon={Cpu}
                        className="md:col-span-2"
                        delay={0.4}
                    />
                </div>
            </div>
        </section>
    );
};

export default BentoGrid;
