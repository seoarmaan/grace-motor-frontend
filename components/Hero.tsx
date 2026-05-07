export default function Hero() {
    return (
        <section className="min-h-[90vh] bg-gray-900 text-white flex items-center justify-center px-6">
            <div className="text-center max-w-3xl">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                    Doorstep Bike Service
                </h1>

                <p className="mt-6 text-lg text-gray-300">
                    Fast, reliable, and affordable bike servicing at your doorstep.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300">
                        Book Service
                    </button>

                    <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
                        Call Now
                    </button>
                </div>
            </div>
        </section>
    );
}