import { motion } from 'framer-motion';
import { Code2, Palette, Database, Smartphone, Zap, Globe } from 'lucide-react';

const skills = [
    {
        icon: Code2,
        title: "Frontend Development",
        description: "React, Next.js, Vue.js, TypeScript",
        color: "from-indigo-500 to-purple-500",
        size: "md:col-span-2 md:row-span-2"
    },
    {
        icon: Database,
        title: "Backend",
        description: "Node.js, PHP, MySQL, MongoDB",
        color: "from-purple-500 to-pink-500",
        size: "md:col-span-1 md:row-span-1"
    },
    {
        icon: Smartphone,
        title: "Mobile Dev",
        description: "React Native, Flutter",
        color: "from-pink-500 to-rose-500",
        size: "md:col-span-1 md:row-span-1"
    },
    {
        icon: Palette,
        title: "UI/UX Design",
        description: "Figma, Adobe XD, Tailwind CSS",
        color: "from-blue-500 to-cyan-500",
        size: "md:col-span-1 md:row-span-2"
    },
    {
        icon: Zap,
        title: "Performance",
        description: "Optimization & Best Practices",
        color: "from-yellow-500 to-orange-500",
        size: "md:col-span-1 md:row-span-1"
    },
    {
        icon: Globe,
        title: "Web Technologies",
        description: "HTML5, CSS3, JavaScript ES6+",
        color: "from-teal-500 to-emerald-500",
        size: "md:col-span-2 md:row-span-1"
    }
];

const BentoGrid = () => {
    return (
        <section id="about" className="section relative">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
                        Skills & <span className="gradient-text">Expertise</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Passionate about creating seamless digital experiences with cutting-edge technologies
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px]">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`glass-panel p-8 flex flex-col justify-between group cursor-pointer ${skill.size}`}
                        >
                            <div>
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <skill.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">{skill.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{skill.description}</p>
                            </div>
                            <div className={`h-1 w-0 group-hover:w-full transition-all duration-500 rounded-full bg-gradient-to-r ${skill.color}`} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BentoGrid;
