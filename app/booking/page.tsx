"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
    Bike,
    Wrench,
    Calendar,
    CheckCircle,
} from "lucide-react";

export default function BookingPage() {
    const [step, setStep] = useState(1);

    const [formData, setFormData] = useState({
        bikeType: "",
        service: "",
        date: "",
        time: "",
        name: "",
        phone: "",
        address: "",
    });

    const nextStep = () => {
        if (step < 4) {
            setStep(step + 1);
        }
    };

    const prevStep = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    return (
        <>
            <Navbar />

            <main className="bg-gray-100 min-h-screen overflow-hidden">
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
                            Book Your Bike Service
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mt-6 text-lg text-gray-300"
                        >
                            Schedule doorstep bike service in a few easy
                            steps.
                        </motion.p>
                    </div>
                </section>

                {/* BOOKING FORM */}
                <section className="py-24 px-6">
                    <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-10">
                        {/* STEP INDICATOR */}
                        <div className="flex justify-between items-center mb-14">
                            {[
                                "Bike Type",
                                "Service",
                                "Schedule",
                                "Details",
                            ].map((label, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center flex-1"
                                >
                                    <div
                                        className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${step >= index + 1
                                            ? "bg-yellow-400 text-black"
                                            : "bg-gray-300 text-gray-600"
                                            }`}
                                    >
                                        {index + 1}
                                    </div>

                                    <p className="mt-3 text-sm md:text-base font-medium text-center">
                                        {label}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* STEP 1 */}
                        {step === 1 && (
                            <motion.div
                                initial={{ opacity: 0, x: 80 }}
                                animate={{ opacity: 1, x: 0 }}
                            >
                                <div className="flex items-center gap-4 mb-8">
                                    <Bike size={40} className="text-yellow-500" />

                                    <h2 className="text-4xl font-bold">
                                        Select Bike Type
                                    </h2>
                                </div>

                                <div className="grid md:grid-cols-3 gap-6">
                                    {["Sport Bike", "Scooter", "Cruiser"].map(
                                        (bike) => (
                                            <button
                                                key={bike}
                                                onClick={() =>
                                                    setFormData({
                                                        ...formData,
                                                        bikeType: bike,
                                                    })
                                                }
                                                className={`p-8 rounded-2xl border-2 text-xl font-semibold transition ${formData.bikeType === bike
                                                    ? "border-yellow-400 bg-yellow-50"
                                                    : "border-gray-300"
                                                    }`}
                                            >
                                                {bike}
                                            </button>
                                        )
                                    )}
                                </div>
                            </motion.div>
                        )}

                        {/* STEP 2 */}
                        {step === 2 && (
                            <motion.div
                                initial={{ opacity: 0, x: 80 }}
                                animate={{ opacity: 1, x: 0 }}
                            >
                                <div className="flex items-center gap-4 mb-8">
                                    <Wrench
                                        size={40}
                                        className="text-yellow-500"
                                    />

                                    <h2 className="text-4xl font-bold">
                                        Choose Service
                                    </h2>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    {[
                                        "Bike Wash",
                                        "Oil Change",
                                        "Engine Repair",
                                        "Full Service",
                                    ].map((service) => (
                                        <button
                                            key={service}
                                            onClick={() =>
                                                setFormData({
                                                    ...formData,
                                                    service,
                                                })
                                            }
                                            className={`p-8 rounded-2xl border-2 text-xl font-semibold transition ${formData.service === service
                                                ? "border-yellow-400 bg-yellow-50"
                                                : "border-gray-300"
                                                }`}
                                        >
                                            {service}
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* STEP 3 */}
                        {step === 3 && (
                            <motion.div
                                initial={{ opacity: 0, x: 80 }}
                                animate={{ opacity: 1, x: 0 }}
                            >
                                <div className="flex items-center gap-4 mb-8">
                                    <Calendar
                                        size={40}
                                        className="text-yellow-500"
                                    />

                                    <h2 className="text-4xl font-bold">
                                        Select Date & Time
                                    </h2>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-lg font-medium mb-3">
                                            Service Date
                                        </label>

                                        <input
                                            type="date"
                                            className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-black"
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    date: e.target.value,
                                                })
                                            }
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-lg font-medium mb-3">
                                            Time Slot
                                        </label>

                                        <input
                                            type="time"
                                            className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-black"
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    time: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* STEP 4 */}
                        {step === 4 && (
                            <motion.div
                                initial={{ opacity: 0, x: 80 }}
                                animate={{ opacity: 1, x: 0 }}
                            >
                                <div className="flex items-center gap-4 mb-8">
                                    <CheckCircle
                                        size={40}
                                        className="text-yellow-500"
                                    />

                                    <h2 className="text-4xl font-bold">
                                        Customer Details
                                    </h2>
                                </div>

                                <div className="space-y-6">
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-black"
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                name: e.target.value,
                                            })
                                        }
                                    />

                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-black"
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                phone: e.target.value,
                                            })
                                        }
                                    />

                                    <textarea
                                        rows={5}
                                        placeholder="Address"
                                        className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-black"
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                address: e.target.value,
                                            })
                                        }
                                    ></textarea>
                                </div>
                            </motion.div>
                        )}

                        {/* BUTTONS */}
                        <div className="flex justify-between mt-14">
                            <button
                                onClick={prevStep}
                                disabled={step === 1}
                                className={`px-8 py-4 rounded-xl font-semibold ${step === 1
                                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                    : "bg-black text-white hover:bg-gray-800"
                                    }`}
                            >
                                Previous
                            </button>

                            {step < 4 ? (
                                <button
                                    onClick={nextStep}
                                    className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-semibold hover:bg-yellow-300"
                                >
                                    Next Step
                                </button>
                            ) : (
                                <button className="bg-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-600">
                                    Confirm Booking
                                </button>
                            )}
                        </div>
                    </div>
                </section>

                {/* SEO CONTENT */}
                <section className="bg-white py-24 px-6">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-4xl font-bold">
                            Online Bike Service Booking
                        </h2>

                        <p className="mt-6 text-lg text-gray-600 leading-8">
                            Book doorstep bike service online with
                            Grace Motor Services. We provide fast and
                            affordable bike repair, oil change, bike
                            wash, and maintenance services for all bike
                            brands.
                        </p>

                        <p className="mt-6 text-lg text-gray-600 leading-8">
                            Our online bike service booking platform
                            makes it easy to schedule pickup and repair
                            services from your home.
                        </p>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}