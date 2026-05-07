"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
    Wrench,
    Droplets,
    Fuel,
    Bike,
    Clock,
    ShieldCheck,
} from "lucide-react";

const services = [
    {
        title: "Bike Wash Service",
        icon: <Droplets size={40} />,
        description:
            "Complete premium bike washing service including foam wash, polishing, and detailing for all bike models.",
        price: "Starting at ₹299",
    },
    {
        title: "Oil Change",
        icon: <Fuel size={40} />,
        description:
            "High-quality engine oil replacement for smooth bike performance and longer engine life.",
        price: "Starting at ₹499",
    },
    {
        title: "Engine Repair",
        icon: <Wrench size={40} />,
        description:
            "Professional bike engine diagnostics and repair services handled by expert mechanics.",
        price: "Starting at ₹999",
    },
    {
        title: "Doorstep Bike Service",
        icon: <Bike size={40} />,
        description:
            "Convenient doorstep bike servicing without visiting workshops. Fast and reliable service at your location.",
        price: "Starting at ₹699",
    },
];

export default function ServicesPage() {
    return (
        <>
            <Navbar />

            <main className="bg-gray-100 overflow-hidden">
                {/* HERO SECTION */}
                <section className="relative bg-black text-white min-h-[80vh] flex items-center justify-center px-6">
                    <div className="absolute inset-0 bg-[url('/bike-service.jpg')] bg-cover bg-center opacity-30"></div>

                    <div className="relative z-10 text-center max-w-4xl">
                        <motion.h1
                            initial={{ opacity: 0, y: -80 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="text-5xl md:text-7xl font-bold leading-tight"
                        >
                            Professional Doorstep Bike Services
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="mt-6 text-lg md:text-xl text-gray-300"
                        >
                            Affordable bike repair, washing, oil change,
                            and maintenance services at your doorstep.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <button className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-semibold hover:bg-yellow-300 transition">
                                Book Service
                            </button>

                            <button className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-black transition">
                                Call Now
                            </button>
                        </motion.div>
                    </div>
                </section>

                {/* SERVICES SECTION */}
                <section className="py-24 px-6">
                    <div className="max-w-7xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className="text-5xl font-bold text-center"
                        >
                            Our Bike Services
                        </motion.h2>

                        <p className="text-center text-gray-600 mt-6 max-w-3xl mx-auto text-lg">
                            We provide reliable and affordable bike
                            maintenance services with experienced
                            mechanics and high-quality spare parts.
                        </p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 80 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-white p-8 rounded-3xl shadow-xl border border-gray-200"
                                >
                                    <div className="text-yellow-500">
                                        {service.icon}
                                    </div>

                                    <h3 className="text-2xl font-bold mt-6">
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-600 mt-4 leading-7">
                                        {service.description}
                                    </p>

                                    <p className="mt-6 text-xl font-semibold text-black">
                                        {service.price}
                                    </p>

                                    <button className="mt-6 w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition">
                                        Book Now
                                    </button>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* WHY CHOOSE US */}
                <section className="bg-black text-white py-24 px-6">
                    <div className="max-w-7xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="text-5xl font-bold text-center"
                        >
                            Why Choose Grace Motor Services?
                        </motion.h2>

                        <div className="grid md:grid-cols-3 gap-10 mt-16">
                            <motion.div
                                whileHover={{ y: -10 }}
                                className="bg-gray-900 p-8 rounded-3xl"
                            >
                                <Clock size={50} className="text-yellow-400" />

                                <h3 className="text-2xl font-bold mt-6">
                                    Fast Service
                                </h3>

                                <p className="text-gray-300 mt-4">
                                    Quick and reliable bike servicing at
                                    your doorstep with minimal waiting time.
                                </p>
                            </motion.div>

                            <motion.div
                                whileHover={{ y: -10 }}
                                className="bg-gray-900 p-8 rounded-3xl"
                            >
                                <ShieldCheck
                                    size={50}
                                    className="text-yellow-400"
                                />

                                <h3 className="text-2xl font-bold mt-6">
                                    Trusted Mechanics
                                </h3>

                                <p className="text-gray-300 mt-4">
                                    Experienced professionals ensuring safe
                                    and quality repairs for all bikes.
                                </p>
                            </motion.div>

                            <motion.div
                                whileHover={{ y: -10 }}
                                className="bg-gray-900 p-8 rounded-3xl"
                            >
                                <Bike size={50} className="text-yellow-400" />

                                <h3 className="text-2xl font-bold mt-6">
                                    Doorstep Pickup
                                </h3>

                                <p className="text-gray-300 mt-4">
                                    Hassle-free pickup and drop service for
                                    maximum customer convenience.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* SEO CONTENT SECTION */}
                <section className="py-24 px-6 bg-white">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-4xl font-bold">
                            Doorstep Bike Service Near Me
                        </h2>

                        <p className="mt-6 text-gray-600 leading-8 text-lg">
                            Looking for reliable doorstep bike service
                            near you? Grace Motor Services offers
                            affordable bike repair, oil change, bike
                            wash, and maintenance solutions for all
                            major bike brands.
                        </p>

                        <p className="mt-6 text-gray-600 leading-8 text-lg">
                            Our professional mechanics provide fast and
                            trusted bike servicing with pickup and drop
                            support. Whether you need emergency repair,
                            periodic maintenance, or complete bike
                            detailing, we deliver premium services at
                            your convenience.
                        </p>

                        <p className="mt-6 text-gray-600 leading-8 text-lg">
                            We specialize in doorstep bike repair and
                            bike wash services with transparent pricing
                            and customer satisfaction.
                        </p>
                    </div>
                </section>

                {/* CTA SECTION */}
                <section className="bg-yellow-400 py-20 px-6 text-center">
                    <motion.h2
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="text-5xl font-bold text-black"
                    >
                        Book Your Bike Service Today
                    </motion.h2>

                    <p className="mt-6 text-lg text-black">
                        Fast, affordable, and trusted bike servicing.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-900 transition">
                            Book Now
                        </button>

                        <button className="bg-white text-black px-8 py-4 rounded-xl hover:bg-gray-200 transition">
                            WhatsApp Us
                        </button>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}