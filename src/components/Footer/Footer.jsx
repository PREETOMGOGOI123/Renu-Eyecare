import React from 'react';
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white">
            {/* Main Footer */}
            <div className="container mx-auto px-4 pt-16 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About Column */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-blue-300">Renu Eye Care</h3>
                        <p className="text-gray-400 mb-4">
                            Dedicated to providing exceptional eye care services with advanced technology and compassionate care.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                                <FaFacebook size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                                <FaTwitter size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                                <FaInstagram size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                                <FaLinkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-blue-300">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Doctors</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Book Appointment</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-blue-300">Our Services</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Eye Examination</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cataract Surgery</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Glaucoma Treatment</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Corneal Transplant</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pediatric Eye Care</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Laser Treatments</a></li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-blue-300">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <FiMapPin className="text-blue-400 mr-3 mt-1" />
                                <span className="text-gray-400">Graham Bazar, Dibrugarh, Assam 786001</span>
                            </li>
                            <li className="flex items-center">
                                <FiPhone className="text-blue-400 mr-3" />
                                <span className="text-gray-400">+91 98765 43210</span>
                            </li>
                            <li className="flex items-center">
                                <FiMail className="text-blue-400 mr-3" />
                                <span className="text-gray-400">info@renueyecare.com</span>
                            </li>
                            <li className="flex items-start">
                                <FiClock className="text-blue-400 mr-3 mt-1" />
                                <div className="text-gray-400">
                                    <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
                                    <p>Sunday: 10:00 AM - 2:00 PM</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-gray-950 py-4">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
                    <p className="text-gray-500 text-center md:text-left mb-2 md:mb-0">
                        © {year} Renu Eye Care. All rights reserved.
                    </p>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">Privacy Policy</a>
                        <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">Terms of Service</a>

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;