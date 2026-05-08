"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";

import {
    Phone,
    Mail,
    MapPin,
    MessageCircle,
    Clock,
    ChevronRight,
    CheckCircle,
} from "lucide-react";

export default function ContactPage() {
    return (
        <>
            <Navbar />

            <main className="overflow-hidden bg-white">
                {/* HERO SECTION */}
                <section
                    className="relative min-h-[85vh] flex items-center justify-center bg-fixed bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('/conTwo.jpg')",
                    }}
                >
                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-black/75"></div>

                    <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl">
                        {/* BREADCRUMB */}
                        <motion.div
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex justify-center items-center gap-3 text-yellow-400 uppercase tracking-[4px] mb-8"
                        >
                            <Link href="/">Home</Link>

                            <ChevronRight size={18} />

                            <span className="text-white">
                                Contact
                            </span>
                        </motion.div>

                        {/* TITLE */}
                        <motion.h1
                            initial={{ opacity: 0, y: 80 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
                        >
                            Contact Grace Motor Services
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="mt-8 text-base sm:text-lg md:text-xl text-gray-300 leading-8"
                        >
                            Get in touch for doorstep bike repair,
                            bike wash, oil change, and professional
                            bike servicing support.
                        </motion.p>
                    </div>
                </section>

                {/* CONTACT INFO */}
                <section className="py-20 md:py-28 px-4 sm:px-6 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                {
                                    icon: <Phone size={50} />,
                                    title: "Call Us",
                                    desc: "+91 98765 43210",
                                    link: "tel:+919876543210",
                                },
                                {
                                    icon: <MessageCircle size={50} />,
                                    title: "WhatsApp",
                                    desc: "Chat With Us",
                                    link: "https://wa.me/919876543210",
                                },
                                {
                                    icon: <Mail size={50} />,
                                    title: "Email",
                                    desc: "support@gracemotor.com",
                                    link: "mailto:support@gracemotor.com",
                                },
                                {
                                    icon: <MapPin size={50} />,
                                    title: "Location",
                                    desc: "Bangalore, India",
                                    link: "#map",
                                },
                            ].map((item, index) => (
                                <motion.a
                                    href={item.link}
                                    key={index}
                                    whileHover={{
                                        y: -10,
                                        scale: 1.03,
                                    }}
                                    className="bg-gray-100 hover:bg-gray-800 hover:text-white transition p-8 rounded-[30px] shadow-xl border border-gray-200"
                                >
                                    <div className="text-yellow-500">
                                        {item.icon}
                                    </div>

                                    <h3 className="text-2xl font-bold mt-8 text-black">
                                        {item.title}
                                    </h3>

                                    <p className="mt-5 text-lg opacity-80 text-black">
                                        {item.desc}
                                    </p>
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CONTACT FORM */}
                <section className="py-20 md:py-28 px-4 sm:px-6 bg-gray-100 overflow-hidden">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            {/* LEFT FORM */}
                            <motion.div
                                initial={{ opacity: 0, x: -80 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="bg-white p-6 sm:p-10 lg:p-14 rounded-[30px] shadow-2xl"
                            >
                                <p className="uppercase tracking-[4px] text-yellow-500 font-semibold">
                                    Get In Touch
                                </p>

                                <h2 className="mt-6 text-4xl md:text-5xl font-bold text-black leading-tight">
                                    Send Us A Message
                                </h2>

                                <p className="mt-6 text-lg text-gray-600 leading-8">
                                    Contact us for doorstep bike service,
                                    bike repair, bike wash, and oil
                                    change support.
                                </p>

                                <form className="mt-10 space-y-6">
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className="w-full border border-gray-300 rounded-2xl px-6 py-5 outline-none focus:border-yellow-400"
                                    />

                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="w-full border border-gray-300 rounded-2xl px-6 py-5 outline-none focus:border-yellow-400"
                                    />

                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        className="w-full border border-gray-300 rounded-2xl px-6 py-5 outline-none focus:border-yellow-400"
                                    />

                                    <textarea
                                        rows={6}
                                        placeholder="Write Your Message"
                                        className="w-full border border-gray-300 rounded-2xl px-6 py-5 outline-none focus:border-yellow-400"
                                    ></textarea>

                                    <button className="w-full bg-yellow-400 text-black py-5 rounded-2xl font-semibold hover:bg-yellow-300 transition">
                                        Send Message
                                    </button>
                                </form>
                            </motion.div>

                            {/* RIGHT IMAGE */}
                            <motion.div
                                initial={{ opacity: 0, x: 80 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative"
                            >
                                <div className="absolute top-8 left-8 w-full h-full border-4 border-yellow-400 hidden lg:block"></div>

                                <Image
                                    src="/conThree.jpg"
                                    alt="Bike Service"
                                    width={700}
                                    height={700}
                                    className="relative z-10 w-full object-cover shadow-2xl"
                                />

                                {/* FLOATING CARD */}
                                <motion.div
                                    animate={{
                                        y: [0, -10, 0],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                    }}
                                    className="absolute bottom-5 left-0 sm:left-5 bg-white shadow-2xl p-6 rounded-2xl w-[260px]"
                                >
                                    <Clock
                                        size={45}
                                        className="text-yellow-500"
                                    />

                                    <h3 className="text-2xl font-bold mt-5 text-black">
                                        Quick Response
                                    </h3>

                                    <p className="mt-4 text-gray-600">
                                        Fast customer support and service
                                        assistance.
                                    </p>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* MAP SECTION */}
                <section
                    id="map"
                    className="py-20 md:py-28 px-4 sm:px-6 bg-white"
                >
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center">
                            <h2 className="text-4xl md:text-5xl font-bold text-black">
                                Our Location
                            </h2>

                            <p className="mt-6 text-lg text-gray-600">
                                Visit our service location or book
                                doorstep bike support.
                            </p>
                        </div>

                        <div className="mt-16 overflow-hidden rounded-[30px] shadow-2xl">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62228.16503894356!2d77.550466!3d12.971599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9c89f29%3A0x4f9a8cc5b64cf685!2sBangalore!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                                width="100%"
                                height="500"
                                loading="lazy"
                                className="border-0"
                            ></iframe>
                        </div>
                    </div>
                </section>

                {/* SEO CONTENT */}
                <section className="py-20 md:py-28 px-4 sm:px-6 bg-gray-100">
                    <div className="max-w-5xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
                            Bike Service Near Me In Bangalore
                        </h2>

                        <p className="mt-8 text-lg text-gray-600 leading-9">
                            Grace Motor Services provides trusted
                            doorstep bike repair Bangalore services
                            including bike wash, oil change, brake
                            repair, engine service, and maintenance
                            support with professional mechanics.
                        </p>

                        <p className="mt-6 text-lg text-gray-600 leading-9">
                            Contact us today for affordable and fast
                            bike servicing solutions with pickup and
                            drop support.
                        </p>
                    </div>
                </section>

                {/* WHY CHOOSE */}
                <section className="py-20 md:py-28 px-4 sm:px-6 bg-black text-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center">
                            <h2 className="text-4xl md:text-5xl font-bold">
                                Why Choose Grace Motor?
                            </h2>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                            {[
                                "Trusted Professional Mechanics",
                                "Affordable Bike Service Pricing",
                                "Quick Customer Support",
                                "Doorstep Pickup & Drop",
                                "Premium Bike Maintenance",
                                "Fast Service Completion",
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -8 }}
                                    className="bg-gray-900 border border-gray-800 p-8 rounded-[30px]"
                                >
                                    <CheckCircle
                                        size={45}
                                        className="text-yellow-400"
                                    />

                                    <h3 className="text-2xl font-bold mt-6">
                                        {item}
                                    </h3>

                                    <p className="mt-5 text-gray-300 leading-8">
                                        Professional and trusted bike
                                        servicing solutions for customers.
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA SECTION */}
                <section
                    className="relative py-32 bg-fixed bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('/conOne.jpg')",
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
                            Ready To Book Bike Service?
                        </motion.h2>

                        <p className="mt-8 text-lg text-gray-300 leading-8">
                            Contact Grace Motor Services today for
                            trusted doorstep bike repair and
                            maintenance support.
                        </p>

                        <div className="mt-10 flex flex-col md:flex-row gap-5 justify-center items-center">
                            <Link
                                href="/booking"
                                className="bg-yellow-400 text-black px-10 py-5 rounded-2xl font-semibold hover:bg-yellow-300 transition"
                            >
                                Book Service
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