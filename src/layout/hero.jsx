"use client"
import React from 'react'
import { motion } from 'motion/react'
import { FaWhatsapp } from 'react-icons/fa'

function Hero() {
    // WhatsApp number - replace with your actual number
    const whatsappNumber = "+917002812274";
    const whatsappMessage = "Hello, I'd like to inquire about an appointment at Renu Eye Care.";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <>
            <div
                className="absolute top-0 z-10 h-screen w-full background-blur-4xl transform-3d"
                style={{
                    backgroundImage: `url("https://images.unsplash.com/photo-1517948430535-1e2469d314fe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D") `,
                    backgroundSize: 'cover', opacity: 0.1, backgroundPosition: 'bottom'
                }}
            >
            </div>
            <div className='absolute top-0 w-full h-screen bg-gradient-to-b from-amber-200 via-amber-50 to-blue-50 backdrop-blur-xl opacity-70'>
            </div>

            <section className='z-20 absolute bg-transparent top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-[60vw] w-full h-fit p-25 rounded-md flex flex-col items-center gap-5'>
                <h1 className="mb-4 text-xl font-extrabold leading-none tracking-normal text-gray-900 md:text-2xl lg:text-2xl xl:text-5xl [text-shadow:_0_4px_5px_rgb(0_0_0_/_20%)]">Advanced <span className="bg-gradient-to-r from-blue-500 via-pink-400 to-indigo-400 text-transparent bg-clip-text">Eye Care</span> Within Your Reach:<span className="bg-gradient-to-r from-blue-500 via-green-400 to-indigo-400 text-transparent bg-clip-text">Three Decades</span> of Excellence in Vision Care.</h1>

                <div className="text-sm lg:text-2xl text-justify shadow-4xl rounded-md text-black lg:tracking-widest lg:leading-10 dark:text-gray-400 flex flex-col gap-2 relative [text-shadow:_0_2px_4px_rgb(255_255_255_/_60%)]">
                    <p>Dedicated to serving you with ultra-modern technology and specialized expertise for comprehensive eye care solutions in Dibrugarh.</p>
                    <p className='font-normal'>
                        ডিব্ৰুগড়ত ব্যাপক চকুৰ যত্ন সমাধানৰ বাবে অতি আধুনিক প্ৰযুক্তি আৰু বিশেষ বিশেষজ্ঞতাৰে আপোনাক সেৱা আগবঢ়োৱাৰ বাবে উৎসৰ্গিত।
                    </p>
                </div>
                <div className='w-full'>
                    {/* WhatsApp CTA Button */}
                    <motion.div
                        className="mt-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-80 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-lg font-medium px-8 py-4 rounded-md shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105"
                        >
                            <FaWhatsapp size={24} />
                            Chat with us on WhatsApp
                        </a>
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default Hero