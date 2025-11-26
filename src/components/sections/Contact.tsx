"use client";

import SectionWrapper from "@/components/layout/SectionWrapper";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
    return (
        <SectionWrapper id="contact" className="bg-black">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Let's <span className="text-primary">Connect</span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-8">
                        Ready to start your next project? Get in touch with us today and let's create something amazing together.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-primary/10 rounded-full">
                                <Mail className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white">Email Us</h4>
                                <p className="text-gray-400">ypasanjith@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-primary/10 rounded-full">
                                <Phone className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white">Call Us</h4>
                                <p className="text-gray-400">+94 702391114</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-primary/10 rounded-full">
                                <MapPin className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white">Visit Us</h4>
                                <p className="text-gray-400">Sri Lanka</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-card p-8 rounded-2xl border border-white/10"
                >
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full bg-muted border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full bg-muted border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-medium text-gray-300">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                className="w-full bg-muted border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                placeholder="Project Inquiry"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full bg-muted border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                                placeholder="Tell us about your project..."
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                        >
                            Send Message <Send className="w-4 h-4" />
                        </button>
                    </form>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
