
import { NavLink } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="space-y-16">
            {/* Hero Section */}
            <section className="relative h-[600px] bg-[#222831]">
                <div className="absolute inset-0 bg-black/50" />
                <img 
                    src="/src/assets/motorcyclerepair.webp" 
                    alt="motor" 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-6 px-4">
                        <h1 className="text-4xl md:text-6xl font-bold text-white">
                            Expert Motorcycle Repair & Service
                        </h1>
                        <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                            Professional maintenance and repair services to keep your ride in perfect condition
                        </p>
                        <NavLink 
                            to="/contact" 
                            className="inline-block bg-[#00ADB5] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#00969d] transition duration-200"
                        >
                            Book Service
                        </NavLink>
                    </div>
                </div>
            </section>

            {/* Services Preview */}
            <section className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Maintenance",
                            description: "Regular maintenance to keep your motorcycle running smoothly",
                            image: "/src/assets/repair1.jpg" 
                        },
                        {
                            title: "Repairs",
                            description: "Expert diagnosis and repair of all motorcycle issues",
                            image: "/src/assets/repair2.jpg"
                        },
                        {
                            title: "Customization",
                            description: "Custom modifications to make your bike unique",
                            image: "/src/assets/repair3.jpg"
                        }
                    ].map((service, index) => (
                        <div 
                            key={index} 
                            className="bg-[#393E46] rounded-lg overflow-hidden shadow-lg hover:transform hover:scale-105 transition duration-200"
                        >
                            <img 
                                src={service.image} 
                                alt={service.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-[#EEEEEE]">{service.title}</h3>
                                <p className="text-gray-300">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default HomePage;