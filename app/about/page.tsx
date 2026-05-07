import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function AboutPage() {
    return (
        <>
            <Navbar />

            <main className="bg-gray-100 min-h-screen">
                {/* Hero Section */}
                <section className="bg-black text-white py-24 px-6">
                    <div className="max-w-6xl mx-auto text-center">
                        <h1 className="text-5xl md:text-7xl font-bold">
                            About Grace Motor Services
                        </h1>

                        <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
                            Professional doorstep bike service solutions
                            designed for convenience, reliability, and
                            customer satisfaction.
                        </p>
                    </div>
                </section>

                {/* About Content */}
                <section className="py-20 px-6">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
                        {/* Image */}
                        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="/bike-service.jpg"
                                alt="Bike Service"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Text */}
                        <div>
                            <h2 className="text-4xl font-bold text-black">
                                Trusted Bike Service Experts
                            </h2>

                            <p className="mt-6 text-gray-600 text-lg leading-8">
                                Grace Motor Services provides complete
                                doorstep bike repair and maintenance
                                solutions with experienced mechanics and
                                affordable pricing.
                            </p>

                            <p className="mt-4 text-gray-600 text-lg leading-8">
                                We focus on delivering fast, reliable,
                                and professional services including bike
                                wash, oil changes, engine repair, pickup
                                & drop services, and periodic maintenance.
                            </p>

                            <div className="mt-8 grid grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-2xl shadow-lg">
                                    <h3 className="text-3xl font-bold text-yellow-500">
                                        500+
                                    </h3>

                                    <p className="mt-2 text-gray-600">
                                        Happy Customers
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-2xl shadow-lg">
                                    <h3 className="text-3xl font-bold text-yellow-500">
                                        5+
                                    </h3>

                                    <p className="mt-2 text-gray-600">
                                        Years Experience
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="py-20 px-6 bg-white">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold text-center">
                            Why Choose Us
                        </h2>

                        <div className="grid md:grid-cols-3 gap-10 mt-14">
                            <div className="bg-gray-100 p-8 rounded-3xl shadow-lg hover:scale-105 transition">
                                <h3 className="text-2xl font-semibold">
                                    Doorstep Service
                                </h3>

                                <p className="mt-4 text-gray-600">
                                    Convenient bike servicing at your
                                    location without visiting workshops.
                                </p>
                            </div>

                            <div className="bg-gray-100 p-8 rounded-3xl shadow-lg hover:scale-105 transition">
                                <h3 className="text-2xl font-semibold">
                                    Expert Mechanics
                                </h3>

                                <p className="mt-4 text-gray-600">
                                    Experienced technicians ensuring quality
                                    service and customer satisfaction.
                                </p>
                            </div>

                            <div className="bg-gray-100 p-8 rounded-3xl shadow-lg hover:scale-105 transition">
                                <h3 className="text-2xl font-semibold">
                                    Affordable Pricing
                                </h3>

                                <p className="mt-4 text-gray-600">
                                    Transparent and budget-friendly pricing
                                    for all bike service packages.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-black text-white py-20 px-6 text-center">
                    <h2 className="text-5xl font-bold">
                        Ready to Service Your Bike?
                    </h2>

                    <p className="mt-6 text-lg text-gray-300">
                        Book your doorstep bike service today.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-semibold hover:bg-yellow-300 transition">
                            Book Now
                        </button>

                        <button className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-black transition">
                            Call Us
                        </button>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}