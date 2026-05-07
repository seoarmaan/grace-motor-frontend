"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    Wrench,
    Droplets,
    Fuel,
    Bike,
    Clock,
    ShieldCheck,
    ChevronRight,
    CheckCircle,
} from "lucide-react";

const services = [
    {
        title: "Premium Bike Wash",
        icon: <Droplets size={45} />,
        description:
            "Complete foam wash, polishing, detailing, and deep cleaning service.",
        price: "₹299",
        features: [
            "Foam Wash",
            "Water Polish",
            "Chain Cleaning",
            "Tire Shine",
        ],
    },
    {
        title: "Engine Oil Change",
        icon: <Fuel size={45} />,
        description:
            "Premium engine oil replacement for smooth and efficient performance.",
        price: "₹499",
        features: [
            "Engine Oil",
            "Filter Check",
            "Performance Test",
            "Brake Inspection",
        ],
    },
    {
        title: "Bike Repair",
        icon: <Wrench size={45} />,
        description:
            "Professional diagnostics and repair service by expert mechanics.",
        price: "₹999",
        features: [
            "Engine Check",
            "Brake Repair",
            "Electrical Repair",
            "Performance Tuning",
        ],
    },
    {
        title: "Doorstep Service",
        icon: <Bike size={45} />,
        description:
            "Convenient doorstep servicing with pickup and drop support.",
        price: "₹699",
        features: [
            "Pickup & Drop",
            "On-site Service",
            "Quick Delivery",
            "Service Warranty",
        ],
    },
];

export default function ServicesPage() {
    return (
        <>
            <Navbar />

            <main className="overflow-hidden bg-white">
                {/* HERO SECTION */}
                <section
                    className="relative min-h-[85vh] flex items-center justify-center bg-fixed bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('/serviceOne.jpg')",
                    }}
                >
                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-black/75"></div>

                    {/* GLOW EFFECT */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-yellow-500/10 via-transparent to-yellow-500/10"></div>

                    <div className="relative z-10 text-center px-6 max-w-5xl">
                        {/* BREADCRUMB */}
                        <motion.div
                            initial={{ opacity: 0, y: -40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex justify-center items-center gap-3 text-yellow-400 mb-8 uppercase tracking-[4px]"
                        >
                            <Link href="/" className="hover:text-white transition">
                                Home
                            </Link>

                            <ChevronRight size={18} />

                            <span className="text-white">
                                Services
                            </span>
                        </motion.div>

                        {/* TITLE */}
                        <motion.h1
                            initial={{ opacity: 0, y: 80 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"                        >
                            Professional Bike Services
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 leading-7 sm:leading-8"                        >
                            Affordable doorstep bike repair, bike wash,
                            oil change, and maintenance services for all
                            bike brands.
                        </motion.p>

                        {/* BUTTONS */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="mt-10 flex flex-col md:flex-row gap-4 justify-center items-center"                        >
                            <Link
                                href="/booking"
                                className="bg-yellow-400 text-black px-10 py-5 rounded-2xl font-semibold hover:bg-yellow-300 transition shadow-2xl"
                            >
                                Book Service
                            </Link>

                            <a
                                href="tel:+919876543210"
                                className="border border-white text-white px-10 py-5 rounded-2xl hover:bg-white hover:text-black transition"
                            >
                                Call Now
                            </a>
                        </motion.div>
                    </div>
                </section>

                {/* SERVICES */}
                <section className="py-20 md:py-28 px-4 sm:px-6 bg-gray-100">
                    <div className="max-w-7xl mx-auto">
                        {/* HEADING */}
                        <div className="text-center">
                            <motion.h2
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-5xl md:text-6xl font-bold text-black"
                            >
                                Service Packages
                            </motion.h2>

                            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-8">
                                Choose the perfect bike maintenance
                                package with transparent pricing and
                                trusted service quality.
                            </p>
                        </div>

                        {/* CARDS */}
                        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-10 mt-16">
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 80 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15 }}
                                    whileHover={{
                                        y: -12,
                                        scale: 1.02,
                                    }}
                                    className="relative bg-white rounded-[30px] overflow-hidden shadow-xl border border-gray-200 group"
                                >
                                    {/* TOP BAR */}
                                    <div className="h-2 bg-yellow-400"></div>

                                    {/* CONTENT */}
                                    <div className="p-6 sm:p-8 lg:p-10">
                                        {/* ICON */}
                                        <div className="bg-yellow-100 text-yellow-500 w-20 h-20 rounded-3xl flex items-center justify-center group-hover:bg-yellow-400 group-hover:text-black transition">
                                            {service.icon}
                                        </div>

                                        {/* TITLE */}
                                        <h3 className="text-3xl font-bold mt-8 text-black leading-tight">
                                            {service.title}
                                        </h3>

                                        {/* DESCRIPTION */}
                                        <p className="mt-5 text-gray-600 leading-8">
                                            {service.description}
                                        </p>

                                        {/* PRICE */}
                                        <div className="mt-8">
                                            <span className="text-gray-500">
                                                Starting From
                                            </span>

                                            <h4 className="text-4xl md:text-5xl font-bold text-black mt-2">
                                                {service.price}
                                            </h4>
                                        </div>

                                        {/* FEATURES */}
                                        <div className="mt-8 space-y-4">
                                            {service.features.map(
                                                (feature, i) => (
                                                    <div
                                                        key={i}
                                                        className="flex items-center gap-3"
                                                    >
                                                        <CheckCircle
                                                            size={20}
                                                            className="text-yellow-500"
                                                        />

                                                        <span className="text-gray-700">
                                                            {feature}
                                                        </span>
                                                    </div>
                                                )
                                            )}
                                        </div>

                                        {/* BUTTON */}
                                        <Link
                                            href="/booking"
                                            className="block mt-10 bg-black text-white text-center py-4 rounded-2xl font-semibold hover:bg-yellow-400 hover:text-black transition"
                                        >
                                            Book Now
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* WHY CHOOSE US */}
                <section className="py-28 px-6 bg-black text-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center">
                            <h2 className="text-5xl md:text-6xl font-bold">
                                Why Choose Grace Motor?
                            </h2>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 mt-16">
                            {[
                                {
                                    icon: <Clock size={55} />,
                                    title: "Fast Service",
                                    desc: "Quick and reliable servicing with minimal waiting time.",
                                },
                                {
                                    icon: <ShieldCheck size={55} />,
                                    title: "Trusted Mechanics",
                                    desc: "Experienced professionals for premium bike repair.",
                                },
                                {
                                    icon: <Bike size={55} />,
                                    title: "Doorstep Pickup",
                                    desc: "Pickup and drop support for customer convenience.",
                                },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -10 }}
                                    className="bg-gray-900 p-10 rounded-[30px] border border-gray-800"
                                >
                                    <div className="text-yellow-400">
                                        {item.icon}
                                    </div>

                                    <h3 className="text-3xl font-bold mt-8">
                                        {item.title}
                                    </h3>

                                    <p className="mt-5 text-gray-300 leading-8">
                                        {item.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA SECTION */}
                <section
                    className="relative py-40 bg-fixed bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('/serviceTwo.avif')",
                    }}
                >
                    <div className="absolute inset-0 bg-black/75"></div>

                    <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
                        <motion.h2
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight"
                        >
                            Ready To Service Your Bike?
                        </motion.h2>

                        <p className="mt-8 text-lg text-gray-300 leading-8">
                            Book trusted and affordable doorstep bike
                            service today.
                        </p>

                        <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center items-center">
                            <Link
                                href="/booking"
                                className="bg-yellow-400 text-black px-10 py-5 rounded-2xl font-semibold hover:bg-yellow-300 transition"
                            >
                                Book Now
                            </Link>

                            <a
                                href="https://wa.me/919876543210"
                                target="_blank"
                                className="border border-white text-white px-10 py-5 rounded-2xl hover:bg-white hover:text-black transition"
                            >
                                WhatsApp Us
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}