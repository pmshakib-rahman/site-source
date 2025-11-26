import { motion } from 'framer-motion';

const experiences = [
    {
        company: "Tech Company A",
        role: "Senior Frontend Engineer",
        period: "2022 - Present",
        description: "Leading the frontend team in building scalable web applications using React and TypeScript."
    },
    {
        company: "Creative Agency B",
        role: "UI Developer",
        period: "2020 - 2022",
        description: "Collaborated with designers to bring award-winning websites to life with complex animations."
    },
    {
        company: "Startup C",
        role: "Junior Developer",
        period: "2018 - 2020",
        description: "Developed and maintained features for the core product platform."
    }
];

const Experience = () => {
    return (
        <section id="experience" className="section">
            <div className="container max-w-4xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold mb-12"
                >
                    Experience
                </motion.h2>

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="border-l-2 border-white/10 pl-8 relative"
                        >
                            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-500" />
                            <h3 className="text-2xl font-bold">{exp.role}</h3>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-blue-400 font-medium">{exp.company}</span>
                                <span className="text-gray-500 text-sm">{exp.period}</span>
                            </div>
                            <p className="text-gray-400">{exp.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
