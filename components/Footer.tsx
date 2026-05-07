"use client";

"use client";

import Link from "next/link";

import {
    Bike,
    Phone,
    Mail,
    MapPin,
} from "lucide-react";

import {
    FaInstagram,
    FaFacebookF,
    FaWhatsapp,
} from "react-icons/fa";

import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="relative bg-gradient-to-b from-black via-gray-950 to-black text-white overflow-hidden">
            {/* TOP BORDER GLOW */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-yellow-400"></div>

            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-14">
                    {/* BRAND SECTION */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="flex items-center gap-4">
                            <div className="bg-yellow-400 p-4 rounded-2xl shadow-lg">
                                <Bike className="text-black" size={32} />
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold">
                                    Grace Motor
                                </h2>

                                <p className="text-sm uppercase tracking-[4px] text-yellow-400">
                                    Bike Services
                                </p>
                            </div>
                        </div>

                        <p className="mt-8 text-gray-400 leading-8">
                            Professional doorstep bike repair,
                            washing, oil change, and maintenance
                            services with trusted mechanics.
                        </p>

                        {/* SOCIAL ICONS */}
                        <div className="flex gap-4 mt-8">
                            <motion.a
                                whileHover={{ scale: 1.15, y: -5 }}
                                href="https://instagram.com"
                                target="_blank"
                                className="bg-gray-900 hover:bg-pink-500 transition p-4 rounded-2xl cursor-pointer"
                            >
                                <FaInstagram size={22} />
                            </motion.a>

                            <motion.a
                                whileHover={{ scale: 1.15, y: -5 }}
                                href="https://facebook.com"
                                target="_blank"
                                className="bg-gray-900 hover:bg-blue-500 transition p-4 rounded-2xl cursor-pointer"
                            >
                                <FaFacebookF size={22} />
                            </motion.a>

                            <motion.a
                                whileHover={{ scale: 1.15, y: -5 }}
                                href="https://wa.me/919876543210"
                                target="_blank"
                                className="bg-gray-900 hover:bg-green-500 transition p-4 rounded-2xl cursor-pointer"
                            >
                                <FaWhatsapp size={22} />
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* QUICK LINKS */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold text-yellow-400">
                            Quick Links
                        </h3>

                        <ul className="mt-8 space-y-5">
                            {[
                                ["Home", "/"],
                                ["Services", "/services"],
                                ["About", "/about"],
                                ["Contact", "/contact"],
                                ["Booking", "/booking"],
                            ].map(([title, path], index) => (
                                <li key={index}>
                                    <Link
                                        href={path}
                                        className="text-gray-400 hover:text-yellow-400 transition text-lg"
                                    >
                                        {title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* SERVICES */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <h3 className="text-2xl font-bold text-yellow-400">
                            Services
                        </h3>

                        <ul className="mt-8 space-y-5">
                            {[
                                "Bike Repair",
                                "Bike Wash",
                                "Oil Change",
                                "Doorstep Service",
                                "Pickup & Drop",
                            ].map((service, index) => (
                                <li
                                    key={index}
                                    className="text-gray-400 text-lg hover:text-yellow-400 transition"
                                >
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* CONTACT */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                    >
                        <h3 className="text-2xl font-bold text-yellow-400">
                            Contact Us
                        </h3>

                        <div className="mt-8 space-y-6">
                            <div className="flex items-start gap-4">
                                <Phone
                                    className="text-yellow-400 mt-1"
                                    size={22}
                                />

                                <div>
                                    <p className="text-gray-400">
                                        +91 98765 43210
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Mail
                                    className="text-yellow-400 mt-1"
                                    size={22}
                                />

                                <div>
                                    <p className="text-gray-400 break-all">
                                        support@gracemotorservices.in
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <MapPin
                                    className="text-yellow-400 mt-1"
                                    size={22}
                                />

                                <div>
                                    <p className="text-gray-400">
                                        Bangalore, Karnataka, India
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* BUTTON */}
                        <Link
                            href="/booking"
                            className="inline-block mt-10 bg-yellow-400 text-black px-8 py-4 rounded-2xl font-semibold hover:bg-yellow-300 transition hover:scale-105"
                        >
                            Book Service
                        </Link>
                    </motion.div>
                </div>

                {/* BOTTOM */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="border-t border-gray-800 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
                >
                    <p className="text-gray-500 text-center">
                        © 2026 Grace Motor Services. All rights
                        reserved.
                    </p>

                    <div className="flex gap-6 text-gray-500">
                        <Link
                            href="/"
                            className="hover:text-yellow-400 transition"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            href="/"
                            className="hover:text-yellow-400 transition"
                        >
                            Terms & Conditions
                        </Link>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}