"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
    Phone,
    Mail,
    MapPin,
    MessageCircle,
} from "lucide-react";

export default function ContactPage() {
    return (
        <>
            <Navbar />

            <main className="bg-gray-100 overflow-hidden">
                {/* HERO SECTION */}
                <section className="relative bg-black text-white py-28 px-6">
                    <div className="absolute inset-0 bg-[url('/bike-service.jpg')] bg-cover bg-center opacity-30"></div>

                    <div className="relative z-10 max-w-5xl mx-auto text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: -80 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="text-5xl md:text-7xl font-bold"
                        >
                            Contact Grace Motor Services
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mt-6 text-lg text-gray-300"
                        >
                            Get in touch for doorstep bike servicing,
                            repair, oil change, and maintenance support.
                        </motion.p>
                    </div>
                </section>

                {/* CONTACT INFO */}
                <section className="py-24 px-6">
                    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
                        {/* LEFT SIDE */}
                        <motion.div
                            initial={{ opacity: 0, x: -80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-5xl font-bold">
                                Let’s Talk
                            </h2>

                            <p className="mt-6 text-gray-600 text-lg leading-8">
                                Have questions about our services?
                                Contact us anytime for bike repair,
                                doorstep service booking, pricing details,
                                and customer support.
                            </p>

                            <div className="mt-10 space-y-8">
                                {/* Phone */}
                                <div className="flex items-start gap-5 bg-white p-6 rounded-3xl shadow-lg">
                                    <div className="bg-yellow-400 p-4 rounded-2xl">
                                        <Phone size={30} />
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-semibold">
                                            Phone Number
                                        </h3>

                                        <p className="text-gray-600 mt-2">
                                            +91 98765 43210
                                        </p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start gap-5 bg-white p-6 rounded-3xl shadow-lg">
                                    <div className="bg-yellow-400 p-4 rounded-2xl">
                                        <Mail size={30} />
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-semibold">
                                            Email Address
                                        </h3>

                                        <p className="text-gray-600 mt-2">
                                            support@gracemotorservices.in
                                        </p>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="flex items-start gap-5 bg-white p-6 rounded-3xl shadow-lg">
                                    <div className="bg-yellow-400 p-4 rounded-2xl">
                                        <MapPin size={30} />
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-semibold">
                                            Location
                                        </h3>

                                        <p className="text-gray-600 mt-2">
                                            Bangalore, Karnataka, India
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* RIGHT SIDE FORM */}
                        <motion.div
                            initial={{ opacity: 0, x: 80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="bg-white p-10 rounded-3xl shadow-2xl"
                        >
                            <h2 className="text-4xl font-bold">
                                Book a Service
                            </h2>

                            <form className="mt-10 space-y-6">
                                <div>
                                    <label className="block text-lg font-medium mb-2">
                                        Full Name
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-black"
                                    />
                                </div>

                                <div>
                                    <label className="block text-lg font-medium mb-2">
                                        Phone Number
                                    </label>

                                    <input
                                        type="tel"
                                        placeholder="Enter phone number"
                                        className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-black"
                                    />
                                </div>

                                <div>
                                    <label className="block text-lg font-medium mb-2">
                                        Select Service
                                    </label>

                                    <select className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-black">
                                        <option>Bike Wash</option>
                                        <option>Oil Change</option>
                                        <option>Bike Repair</option>
                                        <option>Doorstep Service</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-lg font-medium mb-2">
                                        Message
                                    </label>

                                    <textarea
                                        rows={5}
                                        placeholder="Enter your message"
                                        className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-black"
                                    ></textarea>
                                </div>

                                <button className="w-full bg-black text-white py-4 rounded-xl text-lg font-semibold hover:bg-gray-800 transition">
                                    Submit Booking
                                </button>
                            </form>

                            {/* WHATSAPP BUTTON */}
                            <a
                                href="https://wa.me/919876543210"
                                target="_blank"
                                className="mt-6 flex items-center justify-center gap-3 bg-green-500 text-white py-4 rounded-xl text-lg font-semibold hover:bg-green-600 transition"
                            >
                                <MessageCircle size={24} />
                                WhatsApp Us
                            </a>
                        </motion.div>
                    </div>
                </section>

                {/* MAP SECTION */}
                <section className="px-6 pb-24">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="rounded-3xl overflow-hidden shadow-2xl"
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62228.15499872356!2d77.5946!3d12.9716"
                                width="100%"
                                height="450"
                                loading="lazy"
                                className="border-0"
                            ></iframe>
                        </motion.div>
                    </div>
                </section>

                {/* SEO CONTENT */}
                <section className="bg-white py-24 px-6">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-4xl font-bold">
                            Doorstep Bike Service Contact
                        </h2>

                        <p className="mt-6 text-lg text-gray-600 leading-8">
                            Looking for reliable doorstep bike service
                            near you? Grace Motor Services offers bike
                            repair, bike wash, oil change, and complete
                            maintenance services with professional
                            mechanics and affordable pricing.
                        </p>

                        <p className="mt-6 text-lg text-gray-600 leading-8">
                            Contact our support team today for service
                            bookings, pickup & drop assistance, and
                            emergency bike repair support.
                        </p>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}