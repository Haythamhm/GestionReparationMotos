const AboutUsPage = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto space-y-12">
                {/* Hero Section */}
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold">About MotoRepair</h1>
                    <p className="text-xl text-gray-300">
                        Your trusted partner in motorcycle maintenance and repair since 2010
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-[#00ADB5]">Our Story</h2>
                        <p className="text-gray-300">
                            Founded by passionate motorcycle enthusiasts, MotoRepair has grown from a small garage to a full-service motorcycle repair center. Our commitment to quality service and customer satisfaction has made us the preferred choice for riders across the region.
                        </p>
                        <p className="text-gray-300">
                            With over a decade of experience, our certified technicians combine traditional expertise with modern diagnostic tools to provide the best service for your motorcycle.
                        </p>
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-lg">
                        <img 
                            src="/src/assets/motorcycle.jpg" 
                            alt="Our Workshop" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { number: "10+", label: "Years Experience" },
                        { number: "5000+", label: "Bikes Repaired" },
                        { number: "15", label: "Expert Mechanics" },
                        { number: "98%", label: "Satisfied Clients" }
                    ].map((stat, index) => (
                        <div 
                            key={index} 
                            className="bg-[#393E46] p-6 rounded-lg text-center"
                        >
                            <div className="text-2xl font-bold text-[#00ADB5]">{stat.number}</div>
                            <div className="text-sm text-gray-300">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Team Section */}
                <div className="space-y-8">
                    <h2 className="text-2xl font-bold text-center">Our Expert Team</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: "Haytham Latrach", role: "Master Technician", image: "/src/assets/image1.jpg" },
                            { name: "Riyad benmlih", role: "Diagnostic Specialist", image: "/src/assets/image3.jpg" },
                            { name: "Youssef Ezzahiri", role: "Custom Modification Expert", image: "/src/assets/image2.jpg" }
                        ].map((member, index) => (
                            <div 
                                key={index} 
                                className="bg-[#393E46] rounded-lg overflow-hidden shadow-lg"
                            >
                                <img 
                                    src={member.image} 
                                    alt={member.name}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4 text-center">
                                    <h3 className="font-bold text-lg">{member.name}</h3>
                                    <p className="text-gray-300">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;