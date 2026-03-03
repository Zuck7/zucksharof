function Contact() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 p-8">
            <section className="max-w-2xl mx-auto text-center bg-white rounded-xl p-8 shadow-md">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Me</h1>
                
                <p className="text-gray-700 mb-8 text-lg">
                    Feel free to reach out to me for any opportunities or inquiries.
                </p>
                
                <div className="space-y-4">
                    <p className="text-gray-700">
                        <span className="font-semibold">Email:</span> <a href="mailto:zukhriddinsh@gmail.com" className="text-indigo-600 hover:text-indigo-700 font-medium">zukhriddinsh@gmail.com</a>
                    </p>
                    
                    <p className="text-gray-700">
                        <span className="font-semibold">Phone:</span> +1(437) 214-2297
                    </p>
                    
                    <p className="text-gray-700">
                        <span className="font-semibold">LinkedIn:</span> <a href="https://www.linkedin.com/in/zuhriddinsh/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 font-medium">Zuhriddin Sharofiddinov</a>
                    </p>
                </div>
            </section>
        </div>
    );
}

export default Contact;