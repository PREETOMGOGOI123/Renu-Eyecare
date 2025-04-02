import React from 'react';
import { motion } from 'motion/react';

const Doctors = () => {
    const doctors = [
        {
            name: "Dr.XYZ",
            title: "Medical Director, Vitreo-retina Specialist",
            image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            education: "MBBS, MS, Fellowship (Retina)",
            bio: "Dr.XYZ specializes in treating complex retinal conditions with over 15 years of clinical experience."
        },
        {
            name: "Dr. Arundhati Tamuli",
            title: "Cornea & Anterior Segment Specialist",
            // Using Unsplash image
            image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            education: "MBBS, DNB, FICO (UK)",
            bio: "Dr. Arundhati is an expert in corneal transplantation and refractive surgeries with international training."
        },
        {
            name: "Dr. Abhijeet Handique",
            title: "Pediatric Ophthalmologist",
            // Using Unsplash image
            image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            education: "MBBS, MS, Fellowship (Pediatric Ophth)",
            bio: "Dr. Abhijeet specializes in treating children's eye conditions and is passionate about preventing childhood blindness."
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-left mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Meet Our <span className="text-blue-600">Doctors</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-blue-600 mb-8 rounded-full"></div>
                    <p className="text-xl text-gray-600 max-w-3xl">
                        Experienced specialists committed to providing exceptional eye care with compassion and expertise
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {doctors.map((doctor, index) => (
                        <motion.div
                            className="group"
                        >
                            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                                {/* Doctor Image with overlay on hover */}
                                <div className="relative overflow-hidden h-80">
                                    <img
                                        src={doctor.image || `https://source.unsplash.com/random/600x800/?doctor&sig=${index}`}
                                        alt={doctor.name}
                                        className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                        <div className="p-6 text-white">
                                            <p className="font-medium">{doctor.education}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Doctor Info - removed appointment button */}
                                <div className="p-6 border-t border-blue-50">
                                    <h3 className="text-xl font-bold text-gray-800 mb-1">{doctor.name}</h3>
                                    <p className="text-blue-600 mb-4">{doctor.title}</p>
                                    <p className="text-gray-600">{doctor.bio}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Doctors;