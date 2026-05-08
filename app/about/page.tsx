"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import {
    Bike,
    ShieldCheck,
    Wrench,
    Clock,
    Users,
    Star,
    CheckCircle,
    ChevronRight,
} from "lucide-react";

export default function AboutPage() {
    return (
        <>
            <Navbar />

            <main className="overflow-hidden bg-white">
                {/* HERO SECTION */}
                <section
                    className="relative min-h-[85vh] flex items-center justify-center bg-fixed bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('/aboutOne.webp')",
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
                                About
                            </span>
                        </motion.div>

                        {/* TITLE */}
                        <motion.h1
                            initial={{ opacity: 0, y: 80 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
                        >
                            Trusted Doorstep Bike Service Experts
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="mt-8 text-base sm:text-lg md:text-xl text-gray-300 leading-8"
                        >
                            Grace Motor Services provides professional
                            bike repair, bike wash, oil change, and
                            doorstep maintenance services with trusted
                            mechanics and affordable pricing.
                        </motion.p>
                    </div>
                </section>

                {/* ABOUT COMPANY */}
                <section className="py-20 md:py-28 px-4 sm:px-6 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            {/* LEFT IMAGE */}
                            <motion.div
                                initial={{ opacity: 0, x: -80 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative"
                            >
                                <div className="absolute top-8 left-8 w-full h-full border-4 border-yellow-400 hidden lg:block"></div>
                                <Image
                                    src="/bike-service.jpg"
                                    alt="Bike Service"
                                    width={700}
                                    height={700}
                                    className="relative z-10 w-full object-cover shadow-2xl"
                                />
                            </motion.div>

                            {/* RIGHT CONTENT */}
                            <motion.div
                                initial={{ opacity: 0, x: 80 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <p className="uppercase tracking-[4px] text-yellow-500 font-semibold">
                                    About Grace Motor
                                </p>

                                <h2 className="mt-6 text-4xl md:text-5xl font-bold text-black leading-tight">
                                    Professional Bike Service Near You
                                </h2>

                                <p className="mt-8 text-lg text-gray-600 leading-9">
                                    Grace Motor Services is a trusted
                                    doorstep bike servicing company offering
                                    bike repair, engine oil replacement,
                                    premium bike wash, and complete bike
                                    maintenance support.
                                </p>

                                <p className="mt-6 text-lg text-gray-600 leading-9">
                                    We focus on customer satisfaction,
                                    affordable pricing, fast service, and
                                    trusted mechanics to ensure every bike
                                    receives professional care.
                                </p>

                                {/* FEATURES */}
                                <div className="mt-10 space-y-5">
                                    {[
                                        "Trusted Professional Mechanics",
                                        "Affordable Doorstep Bike Service",
                                        "Pickup & Drop Support",
                                        "Quick Service Completion",
                                    ].map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-4"
                                        >
                                            <CheckCircle
                                                size={24}
                                                className="text-yellow-500"
                                            />

                                            <span className="text-lg text-gray-700">
                                                {item}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    href="/booking"
                                    className="inline-block mt-12 bg-yellow-400 text-black px-10 py-5 rounded-2xl font-semibold hover:bg-yellow-300 transition"
                                >
                                    Book Service
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* TRUST INDICATORS */}
                <section className="py-20 md:py-28 px-4 sm:px-6 bg-gray-100">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center">
                            <h2 className="text-4xl md:text-5xl font-bold text-black">
                                Why Customers Trust Us
                            </h2>

                            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
                                Professional doorstep bike servicing with
                                trusted support and quality maintenance.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
                            {[
                                {
                                    icon: <Wrench size={50} />,
                                    title: "Expert Mechanics",
                                    desc: "Experienced bike repair professionals.",
                                },
                                {
                                    icon: <Clock size={50} />,
                                    title: "Fast Service",
                                    desc: "Quick and reliable servicing process.",
                                },
                                {
                                    icon: <ShieldCheck size={50} />,
                                    title: "Trusted Quality",
                                    desc: "Premium quality service assurance.",
                                },
                                {
                                    icon: <Bike size={50} />,
                                    title: "Doorstep Support",
                                    desc: "Pickup and drop bike servicing.",
                                },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{
                                        y: -10,
                                        scale: 1.03,
                                    }}
                                    className="bg-white p-8 rounded-[30px] shadow-xl border border-gray-200"
                                >
                                    <div className="text-yellow-500">
                                        {item.icon}
                                    </div>

                                    <h3 className="text-2xl font-bold mt-8 text-black">
                                        {item.title}
                                    </h3>

                                    <p className="mt-5 text-gray-600 leading-8">
                                        {item.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* STATS SECTION */}
                <section className="py-20 md:py-28 px-4 sm:px-6 bg-black text-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
                            {[
                                {
                                    number: "5K+",
                                    title: "Happy Customers",
                                    icon: <Users size={50} />,
                                },
                                {
                                    number: "10K+",
                                    title: "Bike Services",
                                    icon: <Bike size={50} />,
                                },
                                {
                                    number: "4.9",
                                    title: "Customer Rating",
                                    icon: <Star size={50} />,
                                },
                                {
                                    number: "100%",
                                    title: "Service Quality",
                                    icon: <ShieldCheck size={50} />,
                                },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -8 }}
                                    className="text-center bg-gray-900 p-10 rounded-[30px] border border-gray-800"
                                >
                                    <div className="flex justify-center text-yellow-400">
                                        {item.icon}
                                    </div>

                                    <h3 className="text-5xl font-bold mt-8">
                                        {item.number}
                                    </h3>

                                    <p className="mt-5 text-gray-300 text-lg">
                                        {item.title}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SEO CONTENT */}
                <section className="py-20 md:py-28 px-4 sm:px-6 bg-white">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center">
                            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
                                Doorstep Bike Repair Bangalore
                            </h2>

                            <p className="mt-8 text-lg text-gray-600 leading-9">
                                Looking for reliable bike service near
                                you? Grace Motor Services offers trusted
                                doorstep bike repair Bangalore solutions
                                including bike wash, oil change, brake
                                repair, engine diagnostics, and complete
                                maintenance support.
                            </p>

                            <p className="mt-6 text-lg text-gray-600 leading-9">
                                Our experienced mechanics provide fast
                                and affordable bike service with pickup
                                and drop support for customer
                                convenience.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA SECTION */}
                <section
                    className="relative py-32 bg-fixed bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('/aboutTwo.jpg')",
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
                            service today with Grace Motor Services.
                        </p>

                        <div className="mt-10 flex flex-col md:flex-row gap-5 justify-center items-center">
                            <Link
                                href="/booking"
                                className="bg-yellow-400 text-black px-10 py-5 rounded-2xl font-semibold hover:bg-yellow-300 transition"
                            >
                                Book Now
                            </Link>

                            <a
                                href="tel:+919876543210"
                                className="border border-white text-white px-10 py-5 rounded-2xl hover:bg-white hover:text-black transition"
                            >
                                Call Now
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}