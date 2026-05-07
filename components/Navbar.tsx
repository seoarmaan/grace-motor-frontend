"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Bike } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () =>
            window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8 }}
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
                    ? "bg-black/80 backdrop-blur-xl shadow-2xl py-3"
                    : "bg-transparent py-5"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    {/* LOGO */}
                    <Link href="/">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-3 cursor-pointer"
                        >
                            <div className="bg-yellow-400 p-3 rounded-2xl shadow-lg">
                                <Bike className="text-black" size={28} />
                            </div>

                            <div>
                                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                                    Grace Motor
                                </h1>

                                <p className="text-xs tracking-[4px] uppercase text-yellow-400">
                                    Bike Services
                                </p>
                            </div>
                        </motion.div>
                    </Link>

                    {/* DESKTOP MENU */}
                    <ul className="hidden lg:flex items-center gap-8 xl:gap-10">
                        {navLinks.map((link, index) => (
                            <motion.li
                                key={index}
                                whileHover={{ y: -2 }}
                                className="relative group"
                            >
                                <Link
                                    href={link.path}
                                    className="text-white text-lg font-medium transition"
                                >
                                    {link.name}
                                </Link>

                                {/* UNDERLINE */}
                                <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                            </motion.li>
                        ))}
                    </ul>

                    {/* RIGHT BUTTON */}
                    <div className="hidden lg:flex items-center gap-4">
                        <a
                            href="tel:+919876543210"
                            className="text-white hover:text-yellow-400 transition"
                        >
                            +91 98765 43210
                        </a>

                        <Link
                            href="/booking"
                            className="bg-yellow-400 text-black px-6 py-3 rounded-2xl font-semibold hover:bg-yellow-300 transition shadow-lg hover:scale-105"
                        >
                            Book Now
                        </Link>
                    </div>

                    {/* MOBILE BUTTON */}
                    <button
                        className="lg:hidden text-white"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? (
                            <X size={34} />
                        ) : (
                            <Menu size={34} />
                        )}
                    </button>
                </div>
            </motion.nav>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: 200 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 200 }}
                        transition={{ duration: 0.4 }}
                        className="fixed top-0 right-0 w-[85%] sm:w-[70%] md:w-[55%] h-screen bg-black/95 backdrop-blur-2xl z-[100] lg:hidden"                    >
                        {/* CLOSE BUTTON */}
                        <div className="flex justify-end p-6">
                            <button
                                onClick={() => setMenuOpen(false)}
                                className="text-white"
                            >
                                <X size={36} />
                            </button>
                        </div>

                        {/* MENU ITEMS */}
                        <ul className="flex flex-col items-center justify-center h-[80%] gap-10">
                            {navLinks.map((link, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        href={link.path}
                                        onClick={() => setMenuOpen(false)}
                                        className="text-3xl font-semibold text-white hover:text-yellow-400 transition"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.li>
                            ))}

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="flex flex-col gap-5 mt-10"
                            >
                                <Link
                                    href="/booking"
                                    onClick={() => setMenuOpen(false)}
                                    className="bg-yellow-400 text-black px-8 py-4 rounded-2xl font-semibold text-center hover:bg-yellow-300 transition"
                                >
                                    Book Now
                                </Link>

                                <a
                                    href="https://wa.me/919876543210"
                                    target="_blank"
                                    className="border border-white text-white px-8 py-4 rounded-2xl text-center hover:bg-white hover:text-black transition"
                                >
                                    WhatsApp
                                </a>
                            </motion.div>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}