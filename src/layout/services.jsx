import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Icon imports - you'll need to install react-icons
import { FaEye, FaLowVision, FaHandHoldingMedical, FaSyringe } from 'react-icons/fa';
import { GiLaserPrecision, GiHeartOrgan } from 'react-icons/gi';
import { MdOutlineBiotech, MdChildCare } from 'react-icons/md';
import { BsEyeglasses, BsWater } from 'react-icons/bs';
import { RiSurgicalMaskLine } from 'react-icons/ri';

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);

  const serviceCategories = [
    { name: 'Surgical', icon: <RiSurgicalMaskLine /> },
    { name: 'Laser', icon: <GiLaserPrecision /> },
    { name: 'Treatments', icon: <FaHandHoldingMedical /> },
    { name: 'Specialized', icon: <MdOutlineBiotech /> }
  ];

  const services = [
    // Surgical
    [
      {
        title: "Cataract Surgery",
        description: "Phacoemulsification with modern IOLs: Enhanced monofocals, EDOF, Trifocals, Toric",
        icon: <FaEye className="text-3xl text-blue-500" />
      },
      {
        title: "Vitreo-retinal Surgeries",
        description: "Retinal detachment, Macular Hole, eye trauma, dropped IOL/lens, secondary IOL Diabetic vitrectomy",
        icon: <FaLowVision className="text-3xl text-blue-500" />
      },
      {
        title: "Lacrimal Sac Surgeries",
        description: "DCR, DCT, stents and other tear duct procedures",
        icon: <BsWater className="text-3xl text-blue-500" />
      },
      {
        title: "Ocular Surface Reconstruction",
        description: "SLET, AMG, MMG and other reconstruction procedures",
        icon: <GiHeartOrgan className="text-3xl text-blue-500" />
      },
      {
        title: "Glaucoma Surgeries",
        description: "Trabeculectomy, Goniotomy, MIGS, GDD and related procedures",
        icon: <BsEyeglasses className="text-3xl text-blue-500" />
      },
      {
        title: "Corneal Transplantation",
        description: "PK, DALK, DSEK, DMEK and other transplantation surgeries",
        icon: <FaEye className="text-3xl text-blue-500" />
      }
    ],
    
    // Laser treatments
    [
      {
        title: "Anterior Segment Lasers",
        description: "NdYAG laser treatments for anterior eye conditions",
        icon: <GiLaserPrecision className="text-3xl text-blue-500" />
      },
      {
        title: "Posterior Segment Lasers",
        description: "Fd NdYAG (green) lasers for posterior eye conditions",
        icon: <GiLaserPrecision className="text-3xl text-blue-500" />
      }
    ],
    
    // Treatments
    [
      {
        title: "Intra-ocular Injections",
        description: "Bevacizumab, Ranibizumab, Brolucizumab, Faricimab, Aflibercept, Dex implant",
        icon: <FaSyringe className="text-3xl text-blue-500" />
      },
      {
        title: "Dry Eye Disease (DED)",
        description: "Diagnosis and staging, LLLT, IPL treatments",
        icon: <BsWater className="text-3xl text-blue-500" />
      }
    ],
    
    // Specialized care
    [
      {
        title: "Retinopathy of Prematurity",
        description: "ROP Diagnosis & Staging, anti VEGF, lasers for premature infants",
        icon: <MdChildCare className="text-3xl text-blue-500" />
      },
      {
        title: "Oculoplasty & Facial Esthetics",
        description: "Reconstructive surgery, Blepharoplasty, rejuvenation procedures",
        icon: <FaHandHoldingMedical className="text-3xl text-blue-500" />
      }
    ]
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive eye care solutions using advanced technology and specialized expertise
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {serviceCategories.map((category, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 ${
                activeTab === index
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-blue-50"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-xl">{category.icon}</span>
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Service Cards */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services[activeTab].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="mb-5 bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 flex-grow">{service.description}</p>
                
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;