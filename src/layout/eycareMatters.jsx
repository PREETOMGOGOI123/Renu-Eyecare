import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { getData } from '../server/eyeFacts'

function EyecareMatters() {
    const [eyeFacts, setEyeFacts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getData()
            .then((data) => {
                setEyeFacts(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching eye facts:", err);
                setLoading(true);
            });
    }, []);

    return (
        <div
            className="min-h-screen flex flex-col items-center py-24 bg-gradient-to-b from-blue-50 to-blue-200"
        >
            <div className="w-[90vw] md:w-[85vw] lg:w-[80vw] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
                        Why <span className="text-blue-600">Eyecare</span> Matters
                    </h2>

                    <div className="w-20 h-1.5 bg-blue-600 mb-8 rounded-full"></div>

                    <p className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-3xl mb-16">
                        Your eyes are irreplaceable windows to the world, deserving the highest quality care.
                        At Renu Eye Care, we believe proactive eye health is essential for overall well-being.
                    </p>
                </motion.div>

                <motion.h3
                    className="text-2xl md:text-3xl font-semibold text-gray-800 mb-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    Did you know?
                </motion.h3>

                {loading ? (
                    <div className="flex justify-center items-center h-60">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {eyeFacts.map((fact, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2, duration: 0.5 }}
                            >
                                <div className="bg-blue-600 h-2"></div>
                                <div className="p-6">
                                    <p className="text-gray-700 text-lg mb-4 leading-relaxed">{fact.english}</p>
                                    <p className="text-gray-600 italic border-t border-gray-100 pt-4 text-lg">
                                        {fact.assamese}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default EyecareMatters;