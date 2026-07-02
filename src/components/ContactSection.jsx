import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const formRef = useRef();
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus({ type: 'loading', message: 'Sending...' });

        emailjs.sendForm(
            'service_60ye6vo',
            'template_l2bt46v',
            formRef.current,
            'CCRbcM7aePYR1UMgg'
        )
            .then((result) => {
                console.log('Email successfully sent!', result.text);
                setStatus({ type: 'success', message: 'Message sent successfully!' });
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setStatus({ type: '', message: '' }), 5000);
            }, (error) => {
                console.log('Failed to send email:', error.text);
                setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
            });
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <motion.section
            id="contact"
            className="py-20 border-t border-white/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={itemVariants}
        >
            <h3 className="text-3xl md:text-5xl font-black text-white font-outfit uppercase tracking-wider mb-12">
                Get In <span className="text-accentCyan">Touch</span>
            </h3>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
                <div>
                    <h4 className="text-2xl font-bold text-white mb-4">Let's Connect</h4>
                    <p className="text-darkTextMuted mb-8 leading-relaxed text-lg">
                        Have a project in mind or just want to say hi? Feel free to send me a message. I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 group">
                            <div className="p-4 bg-darkCard border border-white/5 group-hover:border-accentCyan/50 rounded-xl transition-colors">
                                <FaMapMarkerAlt className="text-accentCyan text-xl" />
                            </div>
                            <span className="text-lg text-darkTextMuted">Addis Ababa, Ethiopia</span>
                        </div>
                        <div className="flex items-center gap-4 group">
                            <div className="p-4 bg-darkCard border border-white/5 group-hover:border-accentCyan/50 rounded-xl transition-colors">
                                <FaEnvelope className="text-accentCyan text-xl" />
                            </div>
                            <a href="mailto:yeabsirazelalem791@gmail.com" className="text-lg text-darkTextMuted hover:text-white transition-colors">
                                yeabsirazelalem791@gmail.com
                            </a>
                        </div>
                        <div className="flex items-center gap-4 group">
                            <div className="p-4 bg-darkCard border border-white/5 group-hover:border-accentCyan/50 rounded-xl transition-colors">
                                <FaPhone className="text-accentCyan text-xl" />
                            </div>
                            <span className="text-lg text-darkTextMuted">+251 976647859</span>
                        </div>
                    </div>
                </div>

                <div className="bg-darkCard border border-white/5 p-8 rounded-2xl">
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-darkTextMuted">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full p-4 bg-darkBg border border-white/10 rounded-xl focus:border-accentCyan focus:ring-1 focus:ring-accentCyan focus:outline-none transition-all text-white placeholder-gray-600"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-darkTextMuted">Your Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full p-4 bg-darkBg border border-white/10 rounded-xl focus:border-accentCyan focus:ring-1 focus:ring-accentCyan focus:outline-none transition-all text-white placeholder-gray-600"
                                    required
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-darkTextMuted">Your Message</label>
                            <textarea
                                name="message"
                                placeholder="How can I help you?"
                                rows="5"
                                value={formData.message}
                                onChange={handleInputChange}
                                className="w-full p-4 bg-darkBg border border-white/10 rounded-xl focus:border-accentCyan focus:ring-1 focus:ring-accentCyan focus:outline-none transition-all text-white placeholder-gray-600 resize-none"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            disabled={status.type === 'loading'}
                            className="w-full py-4 bg-accentCyan text-darkBg font-bold text-lg rounded-xl hover:bg-cyan-400 focus:ring-4 focus:ring-cyan-500/20 transition-all disabled:opacity-70"
                        >
                            {status.type === 'loading' ? 'Sending Message...' : 'Send Message'}
                        </button>
                        {status.message && (
                            <div className={`p-4 rounded-xl text-center font-medium ${status.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                                {status.message}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </motion.section>
    );
};

export default ContactSection;
