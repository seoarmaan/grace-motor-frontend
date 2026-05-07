const services = [
    "Bike Wash",
    "Oil Change",
    "Engine Repair",
    "Pickup & Drop",
];

export default function Services() {
    return (
        <section className="py-20 px-6 bg-gray-100">
            <h2 className="text-4xl font-bold text-center mb-12">
                Our Services
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-white p-8 rounded-2xl shadow-lg text-center hover:scale-105 transition"
                    >
                        <h3 className="text-2xl font-semibold">
                            {service}
                        </h3>
                    </div>
                ))}
            </div>
        </section>
    );
}