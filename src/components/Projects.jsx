import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: "E-Commerce Platform",
        description: "A full-featured online store with cart, checkout, and payment integration.",
        tags: ["React", "Node.js", "Stripe"],
        link: "#",
        github: "#"
    },
    {
        title: "Portfolio V1",
        description: "Previous iteration of my personal portfolio showcasing early work.",
        tags: ["HTML", "SCSS", "JS"],
        link: "#",
        github: "#"
    },
    {
        title: "Task Management App",
        description: "Productivity tool for teams to track and manage tasks efficiently.",
        tags: ["Vue", "Firebase", "Tailwind"],
        link: "#",
        github: "#"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="section bg-black/50">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold mb-12"
                >
                    Featured Projects
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-panel p-6 hover:border-blue-500/50 transition-colors group"
                        >
                            <div className="h-48 bg-white/5 rounded-lg mb-6 overflow-hidden relative">
                                <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors" />
                                {/* Placeholder for project image */}
                                <div className="absolute inset-0 flex items-center justify-center text-gray-600 font-mono text-sm">
                                    Project Screenshot
                                </div>
                            </div>

                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            <p className="text-gray-400 mb-4 text-sm line-clamp-3">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 text-xs rounded-full bg-white/5 text-gray-300">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                <a href={project.link} className="flex items-center gap-2 text-sm font-medium hover:text-blue-400 transition-colors">
                                    <ExternalLink size={16} /> Live Demo
                                </a>
                                <a href={project.github} className="flex items-center gap-2 text-sm font-medium hover:text-blue-400 transition-colors">
                                    <Github size={16} /> Code
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
