"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
  Bike,
  Wrench,
  Droplets,
  Fuel,
  Phone,
  MessageCircle,
  ShieldCheck,
  Clock,
} from "lucide-react";

const services = [
  {
    title: "Bike Repair",
    icon: <Wrench size={40} />,
    description:
      "Professional doorstep bike repair service with expert mechanics.",
  },
  {
    title: "Bike Wash",
    icon: <Droplets size={40} />,
    description:
      "Premium bike washing and detailing service at your location.",
  },
  {
    title: "Oil Change",
    icon: <Fuel size={40} />,
    description:
      "High-quality engine oil replacement for smooth performance.",
  },
];

const highlights = [
  {
    title: "Fast Service",
    icon: <Clock size={40} />,
    description:
      "Quick and reliable bike servicing at your doorstep.",
  },
  {
    title: "Trusted Mechanics",
    icon: <ShieldCheck size={40} />,
    description:
      "Experienced professionals for all bike repairs.",
  },
  {
    title: "Doorstep Pickup",
    icon: <Bike size={40} />,
    description:
      "Convenient pickup and drop support for customers.",
  },
];

export default function HomePage() {
  type Post = {
    id: string;
    title: string;
    excerpt: string;
    slug: string;
  };
  // const [posts, setPosts] = useState<any[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch(
          "https://gracemotorservices.in/graphql",
          {
            method: "POST",

            headers: {
              "Content-Type": "application/json",
            },

            body: JSON.stringify({
              query: `
                query GetPosts {
                  posts {
                    nodes {
                      id
                      title
                      excerpt
                      slug
                    }
                  }
                }
              `,
            }),
          }
        );

        const json = await res.json();

        setPosts(json.data.posts.nodes);
      } catch (error) {
        console.log("GraphQL Error:", error);
      }
    }

    fetchPosts();
  }, []);

  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-white">
        {/* HERO SECTION */}
        <section
          className="relative min-h-screen flex items-center bg-fixed bg-center bg-cover"
          style={{
            backgroundImage:
              "url('/bike-service.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center pt-28">
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <p className="text-yellow-400 uppercase tracking-[5px] font-semibold">
                Doorstep Bike Service
              </p>

              <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
                Fast & Reliable Bike Service At Your Doorstep
              </h1>

              <p className="mt-8 text-base sm:text-lg text-gray-300 leading-8 max-w-2xl">
                Professional bike repair, bike wash,
                oil change, and maintenance services
                with pickup & drop support.
              </p>

              {/* BUTTONS */}
              <div className="mt-10 flex flex-col sm:flex-row gap-5">
                <Link
                  href="/booking"
                  className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-semibold hover:bg-yellow-300 transition text-center"
                >
                  Book Now
                </Link>

                <a
                  href="tel:+919876543210"
                  className="border border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-black transition flex items-center justify-center gap-3"
                >
                  <Phone size={22} />
                  Call Now
                </a>

                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  className="bg-green-500 text-white px-8 py-4 rounded-xl hover:bg-green-600 transition flex items-center justify-center gap-3"
                >
                  <MessageCircle size={22} />
                  WhatsApp
                </a>
              </div>
            </motion.div>

            {/* BOOKING CARD */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="bg-white p-6 sm:p-10 rounded-3xl shadow-2xl"
            >
              <h2 className="text-4xl font-bold text-black">
                Quick Booking
              </h2>

              <p className="mt-4 text-gray-600">
                Book your bike service in under 2 minutes.
              </p>

              <form className="mt-8 space-y-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-yellow-400"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-yellow-400"
                />

                <select className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-yellow-400 text-black">
                  <option>Bike Wash</option>
                  <option>Oil Change</option>
                  <option>Bike Repair</option>
                </select>

                <button className="w-full bg-black text-white py-4 rounded-xl font-semibold hover:bg-gray-800 transition">
                  Submit Booking
                </button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-20 md:py-24 px-4 sm:px-6 bg-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-black">
                Our Services
              </h2>

              <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
                Complete doorstep bike maintenance and
                repair solutions with affordable pricing.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-8 rounded-3xl shadow-xl border border-gray-200"
                >
                  <div className="text-yellow-500">
                    {service.icon}
                  </div>

                  <h3 className="text-3xl font-bold mt-6 text-black">
                    {service.title}
                  </h3>

                  <p className="mt-5 text-gray-600 leading-8">
                    {service.description}
                  </p>

                  <Link
                    href="/booking"
                    className="inline-block mt-8 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition"
                  >
                    Book Service
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* BLOG SECTION */}
        <section className="py-20 md:py-24 px-4 sm:px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-black">
                Latest Blog Posts
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {/* {posts.map((post: any) => ( */}
              {posts.map((post: Post) => (
                <motion.div
                  key={post.id}
                  whileHover={{ y: -10 }}
                  className="bg-gray-100 p-8 shadow-xl border border-gray-200 rounded-2xl"
                >
                  <h3
                    className="text-2xl font-bold text-black leading-tight"
                    dangerouslySetInnerHTML={{
                      __html: post.title,
                    }}
                  />

                  <div
                    className="text-gray-600 mt-5 leading-8"
                    dangerouslySetInnerHTML={{
                      __html: post.excerpt,
                    }}
                  />

                  <button className="mt-8 bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition">
                    Read More
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO SECTION */}
        <section className="py-20 md:py-24 px-4 sm:px-6 bg-yellow-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
              Doorstep Bike Service Near Me
            </h2>

            <p className="mt-8 text-lg text-gray-700 leading-9">
              Grace Motor Services provides reliable
              doorstep bike repair, bike wash, oil
              change, and maintenance services with
              trusted mechanics and affordable pricing.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}