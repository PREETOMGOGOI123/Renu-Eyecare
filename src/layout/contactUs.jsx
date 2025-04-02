import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitSuccess(true);
            setFormData({ name: '', email: '', phone: '', message: '' });

            // Reset success message after 5 seconds
            setTimeout(() => setSubmitSuccess(false), 5000);
        }, 1500);
    };

    const contactInfo = [
        {
            icon: <FiMapPin className="text-2xl text-blue-600" />,
            title: "Our Location",
            details: [
                "Renu Eye Care",
                "Graham Bazar, Dibrugarh",
                "Assam, 786001"
            ]
        },
        {
            icon: <FiPhone className="text-2xl text-blue-600" />,
            title: "Phone Numbers",
            details: [
                "+91 99999 88888",
                "+91 98765 43210"
            ]
        },
        {
            icon: <FiMail className="text-2xl text-blue-600" />,
            title: "Email Us",
            details: [
                "info@renueyecare.com",
                "appointments@renueyecare.com"
            ]
        },
        {
            icon: <FiClock className="text-2xl text-blue-600" />,
            title: "Working Hours",
            details: [
                "Monday - Saturday: 9:00 AM - 7:00 PM",
                "Sunday: 10:00 AM - 2:00 PM"
            ]
        }
    ];

    return (
        <section id="contact" className="py-20 bg-gradient-to-b from-white to-blue-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Get In <span className="text-blue-600">Touch</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-blue-600 mx-auto mb-8 rounded-full"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Have questions or want to schedule an appointment? Contact us today.
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Contact Information */}
                    <motion.div

                        className="lg:w-1/3"
                    >
                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>

                            <div className="space-y-8">
                                {contactInfo.map((item, index) => (
                                    <div key={index} className="flex">
                                        <div className="flex-shrink-0 mt-1">
                                            {item.icon}
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg font-medium text-gray-800">{item.title}</h4>
                                            <div className="mt-1">
                                                {item.details.map((detail, i) => (
                                                    <p key={i} className="text-gray-600">{detail}</p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Social Media Links */}
                            <div className="mt-10">
                                <h4 className="text-lg font-medium text-gray-800 mb-4">Follow Us</h4>
                                <div className="flex space-x-4">
                                    <a href="#" className="bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white p-3 rounded-full transition-colors">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M22 12.076c0-5.466-4.434-9.9-9.9-9.9s-9.9 4.434-9.9 9.9c0 4.934 3.608 9.004 8.333 9.742v-6.892h-2.508v-2.85h2.508v-2.175c0-2.475 1.475-3.842 3.733-3.842 1.083 0 2.217.192 2.217.192v2.433h-1.25c-1.233 0-1.617.767-1.617 1.55v1.842h2.75l-.442 2.85h-2.308v6.892c4.725-.738 8.333-4.8 8.333-9.742z"></path>
                                        </svg>
                                    </a>
                                    <a href="#" className="bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white p-3 rounded-full transition-colors">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12.001 2.002c-2.72 0-3.06.012-4.122.06-1.064.049-1.79.218-2.428.465a4.88 4.88 0 0 0-1.772 1.153 4.897 4.897 0 0 0-1.153 1.772c-.247.637-.416 1.363-.465 2.428-.047 1.062-.059 1.402-.059 4.122s.012 3.06.059 4.122c.049 1.064.218 1.79.465 2.428a4.932 4.932 0 0 0 1.153 1.772c.5.5 1.015.907 1.772 1.153.637.247 1.363.416 2.428.465 1.062.047 1.402.059 4.122.059s3.06-.012 4.122-.059c1.064-.049 1.79-.218 2.428-.465a4.932 4.932 0 0 0 1.772-1.153c.5-.5.907-1.015 1.153-1.772.247-.637.416-1.363.465-2.428.047-1.062.059-1.402.059-4.122s-.012-3.06-.059-4.122c-.049-1.064-.218-1.79-.465-2.428a4.88 4.88 0 0 0-1.153-1.772 4.897 4.897 0 0 0-1.772-1.153c-.637-.247-1.363-.416-2.428-.465-1.062-.047-1.402-.059-4.122-.059zm0 1.802c2.67 0 2.985.01 4.04.058.975.045 1.504.208 1.857.344.466.181.8.399 1.15.748.35.35.566.683.748 1.15.137.353.3.882.344 1.857.048 1.055.058 1.37.058 4.04s-.01 2.985-.058 4.04c-.045.975-.208 1.504-.344 1.857a3.08 3.08 0 0 1-.748 1.15c-.35.35-.683.566-1.15.748-.353.137-.882.3-1.857.344-1.054.048-1.37.058-4.04.058s-2.987-.01-4.04-.058c-.975-.045-1.504-.208-1.857-.344a3.08 3.08 0 0 1-1.15-.748 3.12 3.12 0 0 1-.748-1.15c-.137-.353-.3-.882-.344-1.857-.048-1.055-.058-1.37-.058-4.04s.01-2.985.058-4.04c.045-.975.208-1.504.344-1.857.181-.466.399-.8.748-1.15.35-.35.683-.566 1.15-.748.353-.137.882-.3 1.857-.344 1.055-.048 1.37-.058 4.04-.058zm0 11.531a3.335 3.335 0 1 1 0-6.67 3.335 3.335 0 0 1 0 6.67zm0-8.468a5.135 5.135 0 1 0 0 10.27 5.135 5.135 0 0 0 0-10.27zm6.538-.203a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z"></path>
                                        </svg>
                                    </a>
                                    <a href="#" className="bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white p-3 rounded-full transition-colors">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M21.634 6.974c-.746.325-1.534.539-2.358.636a4.073 4.073 0 0 0 1.8-2.235 8.22 8.22 0 0 1-2.605.981 4.103 4.103 0 0 0-7.035 3.734 11.65 11.65 0 0 1-8.45-4.263 4.083 4.083 0 0 0-.554 2.06 4.1 4.1 0 0 0 1.821 3.415 4.09 4.09 0 0 1-1.853-.505v.051a4.104 4.104 0 0 0 3.29 4.021 4.151 4.151 0 0 1-1.851.069 4.111 4.111 0 0 0 3.83 2.845A8.236 8.236 0 0 1 2 18.984 11.616 11.616 0 0 0 8.29 21c7.547 0 11.673-6.157 11.673-11.496 0-.175-.005-.35-.014-.522A8.26 8.26 0 0 0 22 6.989a8.267 8.267 0 0 1-2.366-.639z"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:w-2/3"
                    >
                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send us a message</h3>

                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="John Doe"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="john@example.com"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="+91 98765 43210"
                                    />
                                </div>

                                <div className="mb-6">
                                    <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                                        Your Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="5"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="How can we help you?"
                                        required
                                    ></textarea>
                                </div>

                                <div className="flex items-center">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                                            }`}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Sending...
                                            </>
                                        ) : (
                                            "Send Message"
                                        )}
                                    </button>

                                    {submitSuccess && (
                                        <span className="ml-4 text-green-600">
                                            Your message has been sent successfully!
                                        </span>
                                    )}

                                    {submitError && (
                                        <span className="ml-4 text-red-600">
                                            {submitError}
                                        </span>
                                    )}
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>

                {/* Google Map */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mt-16"
                >
                    <div className="bg-white rounded-xl shadow-lg p-2 h-80">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14276.458275231971!2d94.89866043963536!3d27.47885259657573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x373f3aa13b323e83%3A0xfb23f0835c515f88!2sGraham%20Bazar%2C%20Dibrugarh%2C%20Assam%20786001!5e0!3m2!1sen!2sin!4v1712134571636!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Renu Eye Care Location"
                            className="rounded-lg"
                        ></iframe>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactUs;