"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

import {
    Bike,
    Wrench,
    Clock,
    Calendar,
    ChevronRight,
    CheckCircle,
} from "lucide-react";

export default function BookingPage() {
    const [step, setStep] = useState(1);

    const nextStep = () => {
        if (step < 4) setStep(step + 1);
    };

    const prevStep = () => {
        if (step > 1) setStep(step - 1);
    };

    return (
        <>
            <Navbar />

            <main className="overflow-hidden bg-white">
                {/* HERO SECTION */}
                <section
                    className="relative min-h-[80vh] flex items-center justify-center bg-fixed bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('/serviceTwo.avif')",
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
                                Booking
                            </span>
                        </motion.div>

                        {/* TITLE */}
                        <motion.h1
                            initial={{ opacity: 0, y: 80 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
                        >
                            Book Doorstep Bike Service
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 leading-8"
                        >
                            Fast, affordable, and professional bike
                            service booking with doorstep support.
                        </motion.p>
                    </div>
                </section>

                {/* MULTI STEP FORM */}
                <section className="py-20 md:py-28 px-4 sm:px-6 bg-gray-100">
                    <div className="max-w-5xl mx-auto">
                        {/* STEP BAR */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-16">
                            {[
                                "Bike Type",
                                "Service",
                                "Time Slot",
                                "Confirmation",
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className={`p-5 rounded-2xl text-center font-semibold transition ${step >= index + 1
                                        ? "bg-yellow-400 text-black shadow-lg"
                                        : "bg-white text-gray-500"
                                        }`}
                                >
                                    {item}
                                </div>
                            ))}
                        </div>

                        {/* FORM CARD */}
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, x: 80 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white p-6 sm:p-10 rounded-[30px] shadow-2xl"
                        >
                            {/* STEP 1 */}
                            {step === 1 && (
                                <>
                                    <div className="flex items-center gap-4 mb-10">
                                        <div className="bg-yellow-100 p-4 rounded-2xl text-yellow-500">
                                            <Bike size={40} />
                                        </div>

                                        <div>
                                            <h2 className="text-3xl sm:text-4xl font-bold text-black">
                                                Select Bike Type
                                            </h2>

                                            <p className="text-gray-500 mt-2">
                                                Choose your bike category
                                            </p>
                                        </div>
                                    </div>

                                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {[
                                            "Sports Bike",
                                            "Scooter",
                                            "Cruiser",
                                        ].map((bike, index) => (
                                            <motion.div
                                                whileHover={{ y: -8 }}
                                                key={index}
                                                className="border-2 border-gray-200 hover:border-yellow-400 p-8 rounded-3xl cursor-pointer transition"
                                            >
                                                <h3 className="text-2xl font-bold text-black">
                                                    {bike}
                                                </h3>

                                                <p className="text-gray-500 mt-4">
                                                    Professional servicing available.
                                                </p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </>
                            )}

                            {/* STEP 2 */}
                            {step === 2 && (
                                <>
                                    <div className="flex items-center gap-4 mb-10">
                                        <div className="bg-yellow-100 p-4 rounded-2xl text-yellow-500">
                                            <Wrench size={40} />
                                        </div>

                                        <div>
                                            <h2 className="text-3xl sm:text-4xl font-bold text-black">
                                                Select Service
                                            </h2>

                                            <p className="text-gray-500 mt-2">
                                                Choose required service
                                            </p>
                                        </div>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-6">
                                        {[
                                            "Bike Wash",
                                            "Oil Change",
                                            "Bike Repair",
                                            "Doorstep Service",
                                        ].map((service, index) => (
                                            <motion.div
                                                whileHover={{ scale: 1.03 }}
                                                key={index}
                                                className="bg-gray-100 hover:bg-yellow-50 border border-gray-200 hover:border-yellow-400 p-8 rounded-3xl transition cursor-pointer"
                                            >
                                                <h3 className="text-2xl font-bold text-black">
                                                    {service}
                                                </h3>

                                                <p className="text-gray-600 mt-4">
                                                    Trusted and affordable service.
                                                </p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </>
                            )}

                            {/* STEP 3 */}
                            {step === 3 && (
                                <>
                                    <div className="flex items-center gap-4 mb-10">
                                        <div className="bg-yellow-100 p-4 rounded-2xl text-yellow-500">
                                            <Clock size={40} />
                                        </div>

                                        <div>
                                            <h2 className="text-3xl sm:text-4xl font-bold text-black">
                                                Select Time Slot
                                            </h2>

                                            <p className="text-gray-500 mt-2">
                                                Choose service timing
                                            </p>
                                        </div>
                                    </div>

                                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {[
                                            "09:00 AM",
                                            "11:00 AM",
                                            "01:00 PM",
                                            "03:00 PM",
                                            "05:00 PM",
                                            "07:00 PM",
                                        ].map((time, index) => (
                                            <motion.div
                                                whileHover={{ y: -6 }}
                                                key={index}
                                                className="bg-black text-white hover:bg-yellow-400 hover:text-black transition p-8 rounded-3xl text-center cursor-pointer"
                                            >
                                                <h3 className="text-2xl font-bold">
                                                    {time}
                                                </h3>
                                            </motion.div>
                                        ))}
                                    </div>
                                </>
                            )}

                            {/* STEP 4 */}
                            {step === 4 && (
                                <>
                                    <div className="text-center">
                                        <div className="bg-green-100 text-green-500 w-24 h-24 rounded-full flex items-center justify-center mx-auto">
                                            <CheckCircle size={55} />
                                        </div>

                                        <h2 className="text-4xl font-bold text-black mt-8">
                                            Booking Confirmed
                                        </h2>

                                        <p className="mt-6 text-gray-600 leading-8 max-w-2xl mx-auto">
                                            Your doorstep bike service request
                                            has been submitted successfully.
                                        </p>

                                        <Link
                                            href="/"
                                            className="inline-block mt-10 bg-yellow-400 text-black px-10 py-5 rounded-2xl font-semibold hover:bg-yellow-300 transition"
                                        >
                                            Back To Home
                                        </Link>
                                    </div>
                                </>
                            )}

                            {/* BUTTONS */}
                            {step < 4 && (
                                <div className="flex flex-col sm:flex-row justify-between gap-5 mt-14">
                                    <button
                                        onClick={prevStep}
                                        className={`px-8 py-4 rounded-2xl font-semibold transition ${step === 1
                                            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                            : "bg-black text-white hover:bg-gray-800"
                                            }`}
                                    >
                                        Previous
                                    </button>

                                    <button
                                        onClick={nextStep}
                                        className="bg-yellow-400 text-black px-8 py-4 rounded-2xl font-semibold hover:bg-yellow-300 transition"
                                    >
                                        Continue
                                    </button>
                                </div>
                            )}
                        </motion.div>
                    </div>
                </section>

                {/* SEO SECTION */}
                <section className="py-20 md:py-28 px-4 sm:px-6 bg-white">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            {/* LEFT */}
                            <div>
                                <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
                                    Bike Service Near Me
                                </h2>

                                <p className="mt-8 text-lg text-gray-600 leading-9">
                                    Looking for professional bike service
                                    near you? Grace Motor Services offers
                                    affordable bike repair, bike wash,
                                    engine oil replacement, and complete
                                    maintenance support.
                                </p>

                                <p className="mt-6 text-lg text-gray-600 leading-9">
                                    Our doorstep bike repair Bangalore
                                    services ensure quick and reliable
                                    servicing without visiting workshops.
                                </p>
                            </div>

                            {/* RIGHT CARD */}
                            <motion.div
                                whileHover={{ y: -10 }}
                                className="bg-black text-white p-10 rounded-[30px]"
                            >
                                <Calendar
                                    size={60}
                                    className="text-yellow-400"
                                />

                                <h3 className="text-4xl font-bold mt-8">
                                    Doorstep Bike Repair Bangalore
                                </h3>

                                <p className="mt-6 text-gray-300 leading-8">
                                    Fast and trusted bike repair services
                                    with pickup and drop support.
                                </p>

                                <Link
                                    href="/booking"
                                    className="inline-block mt-10 bg-yellow-400 text-black px-8 py-4 rounded-2xl font-semibold hover:bg-yellow-300 transition"
                                >
                                    Book Service
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section
                    className="relative py-32 bg-fixed bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('/serviceOne.jpg')",
                    }}
                >
                    <div className="absolute inset-0 bg-black/75"></div>

                    <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
                            Ready To Service Your Bike?
                        </h2>

                        <p className="mt-8 text-lg text-gray-300">
                            Trusted doorstep bike servicing with
                            affordable pricing.
                        </p>

                        <Link
                            href="/booking"
                            className="inline-block mt-10 bg-yellow-400 text-black px-10 py-5 rounded-2xl font-semibold hover:bg-yellow-300 transition"
                        >
                            Book Now
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}