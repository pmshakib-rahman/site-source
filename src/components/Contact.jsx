import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

            <div className="container max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
                        Let's <span className="gradient-text">Connect</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Have a project in mind? Let's build something amazing together
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-3xl font-bold mb-6">Get in touch</h3>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                I'm currently available for freelance work and exciting opportunities.
                                Whether you have a question or just want to say hi, I'll do my best to get back to you!
                            </p>
                        </div>

                        <div className="space-y-4">
                            {[
                                { icon: Mail, label: "Email", value: "shakib@example.com" },
                                { icon: Phone, label: "Phone", value: "+880 1234-567890" },
                                { icon: MapPin, label: "Location", value: "Dhaka, Bangladesh" }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                                        <item.icon className="text-white" size={20} />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500 mb-1">{item.label}</div>
                                        <div className="font-medium">{item.value}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="pt-8">
                            <h4 className="text-lg font-semibold mb-4">Follow me</h4>
                            <div className="flex gap-4">
                                {[
                                    { icon: Github, href: "#" },
                                    { icon: Linkedin, href: "#" },
                                    { icon: Twitter, href: "#" }
                                ].map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gradient-to-br hover:from-indigo-500 hover:to-purple-500 hover:border-transparent transition-all duration-300 group"
                                    >
                                        <social.icon className="text-gray-400 group-hover:text-white transition-colors" size={20} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div>
                            <label className="block text-sm font-medium mb-2 text-gray-300">Name</label>
                            <input
                                type="text"
                                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2 text-gray-300">Email</label>
                            <input
                                type="email"
                                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2 text-gray-300">Subject</label>
                            <input
                                type="text"
                                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                                placeholder="Project Inquiry"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2 text-gray-300">Message</label>
                            <textarea
                                rows="5"
                                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all resize-none"
                                placeholder="Tell me about your project..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full gradient-bg text-white font-semibold py-4 rounded-xl hover:shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 flex items-center justify-center gap-2 group"
                        >
                            Send Message
                            <Send className="group-hover:translate-x-1 transition-transform" size={18} />
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
