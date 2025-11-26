import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
    {
        company: "Xantira",
        role: "Software Engineer",
        period: "Apr 2023 - Present",
        description: "Leading full-stack development initiatives, architecting scalable solutions, and mentoring junior developers.",
        tech: ["React", "Node.js", "TypeScript", "MongoDB"]
    },
    {
        company: "Zam Zam IT",
        role: "Software Engineer",
        period: "Jan 2021 - Mar 2023",
        description: "Developed and maintained enterprise web applications, optimized performance, and implemented modern development practices.",
        tech: ["Vue.js", "PHP", "MySQL", "Laravel"]
    },
    {
        company: "OxfordSoft Ltd",
        role: "Junior Software Engineer",
        period: "Jun 2019 - Dec 2020",
        description: "Built responsive web applications, collaborated with cross-functional teams, and delivered client projects on time.",
        tech: ["JavaScript", "HTML/CSS", "jQuery", "Bootstrap"]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="section relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />

            <div className="container max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
                        Work <span className="gradient-text">Experience</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Building impactful solutions across diverse industries
                    </p>
                </motion.div>

                <div className="space-y-6">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="glass-panel p-8 relative overflow-hidden group"
                        >
                            {/* Gradient accent on hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                                    <div>
                                        <h3 className="text-3xl font-bold mb-2 flex items-center gap-3">
                                            <Briefcase className="text-indigo-400" size={28} />
                                            {exp.role}
                                        </h3>
                                        <div className="text-xl text-indigo-400 font-semibold mb-2">{exp.company}</div>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-400 text-sm md:text-base">
                                        <Calendar size={18} />
                                        <span>{exp.period}</span>
                                    </div>
                                </div>

                                <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                                <div className="flex flex-wrap gap-2">
                                    {exp.tech.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-4 py-1.5 text-sm rounded-full bg-white/5 border border-white/10 text-gray-300 hover:border-indigo-500/50 transition-colors"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
