import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles } from 'lucide-react';

const projects = [
    {
        title: "Enterprise Dashboard",
        description: "A comprehensive analytics platform with real-time data visualization, custom reporting, and team collaboration features.",
        tags: ["React", "Node.js", "D3.js", "MongoDB"],
        gradient: "from-indigo-500 to-purple-600",
        link: "#",
        github: "#"
    },
    {
        title: "E-Commerce Platform",
        description: "Full-featured online marketplace with payment integration, inventory management, and advanced search capabilities.",
        tags: ["Next.js", "Stripe", "PostgreSQL", "Redis"],
        gradient: "from-purple-500 to-pink-600",
        link: "#",
        github: "#"
    },
    {
        title: "Social Media App",
        description: "Modern social networking application with real-time messaging, content sharing, and activity feeds.",
        tags: ["React Native", "Firebase", "Redux", "Socket.io"],
        gradient: "from-pink-500 to-rose-600",
        link: "#",
        github: "#"
    },
    {
        title: "AI Content Generator",
        description: "Intelligent content creation tool powered by AI for generating marketing copy, blogs, and social media posts.",
        tags: ["Vue.js", "OpenAI", "Python", "FastAPI"],
        gradient: "from-blue-500 to-cyan-600",
        link: "#",
        github: "#"
    },
    {
        title: "Project Management Suite",
        description: "Comprehensive project tracking system with kanban boards, gantt charts, and team collaboration tools.",
        tags: ["Angular", "NestJS", "TypeScript", "MySQL"],
        gradient: "from-teal-500 to-emerald-600",
        link: "#",
        github: "#"
    },
    {
        title: "Healthcare Portal",
        description: "Patient management system with appointment scheduling, medical records, and telemedicine features.",
        tags: ["React", "Laravel", "MySQL", "WebRTC"],
        gradient: "from-orange-500 to-red-600",
        link: "#",
        github: "#"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="section relative">
            {/* Background decoration */}
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

            <div className="container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Showcasing innovative solutions and creative implementations
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="glass-panel p-6 group relative overflow-hidden"
                        >
                            {/* Project thumbnail with gradient */}
                            <div className={`h-48 rounded-2xl bg-gradient-to-br ${project.gradient} mb-6 overflow-hidden relative group-hover:scale-105 transition-transform duration-500`}>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Sparkles className="text-white/30 w-24 h-24" />
                                </div>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                            </div>

                            <h3 className="text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-all">
                                {project.title}
                            </h3>
                            <p className="text-gray-400 mb-6 text-sm leading-relaxed line-clamp-3">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map(tag => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                <a
                                    href={project.link}
                                    className="flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors group/link"
                                >
                                    <ExternalLink size={16} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                                    Live Demo
                                </a>
                                <a
                                    href={project.github}
                                    className="flex items-center gap-2 text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors"
                                >
                                    <Github size={16} />
                                    Code
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
