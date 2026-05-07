"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-black text-white fixed w-full top-0 left-0 z-50 shadow-lg">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* LOGO */}
                <Link href="/">
                    <h1 className="text-2xl md:text-3xl font-bold text-yellow-400 cursor-pointer">
                        Grace Motor
                    </h1>
                </Link>

                {/* DESKTOP MENU */}
                <ul className="hidden md:flex gap-8 text-lg font-medium">
                    <li className="hover:text-yellow-400 transition">
                        <Link href="/">Home</Link>
                    </li>

                    <li className="hover:text-yellow-400 transition">
                        <Link href="/services">Services</Link>
                    </li>

                    <li className="hover:text-yellow-400 transition">
                        <Link href="/about">About</Link>
                    </li>

                    <li className="hover:text-yellow-400 transition">
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>

                {/* BOOK BUTTON */}
                <Link
                    href="/booking"
                    className="hidden md:block bg-yellow-400 text-black px-5 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition"
                >
                    Book Now
                </Link>

                {/* MOBILE MENU BUTTON */}
                <button
                    className="md:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? (
                        <X size={32} />
                    ) : (
                        <Menu size={32} />
                    )}
                </button>
            </div>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -40 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-black border-t border-gray-800"
                    >
                        <ul className="flex flex-col items-center gap-6 py-10 text-lg font-medium">
                            <li>
                                <Link
                                    href="/"
                                    onClick={() => setMenuOpen(false)}
                                    className="hover:text-yellow-400 transition"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/services"
                                    onClick={() => setMenuOpen(false)}
                                    className="hover:text-yellow-400 transition"
                                >
                                    Services
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/about"
                                    onClick={() => setMenuOpen(false)}
                                    className="hover:text-yellow-400 transition"
                                >
                                    About
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/contact"
                                    onClick={() => setMenuOpen(false)}
                                    className="hover:text-yellow-400 transition"
                                >
                                    Contact
                                </Link>
                            </li>

                            <Link
                                href="/booking"
                                onClick={() => setMenuOpen(false)}
                                className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition"
                            >
                                Book Now
                            </Link>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}