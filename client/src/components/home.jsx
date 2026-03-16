import zuhriddin from '../assets/zuhriddin.jpeg';

function Home(){
    return(
        <div className="py-12 bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100">
            {/* Hero Section */}
            <section className="max-w-4xl mx-auto text-center mb-20">
                <div className="flex justify-center mb-6">
                  <div className="w-32 h-32 sm:w-60 sm:h-60 rounded-2xl border-4 border-white shadow-lg hover:bg-purple-200 transition-all duration-300 cursor-pointer flex items-center justify-center p-2">
                    <img
                      src={zuhriddin}
                      alt="Personal photo"
                      className="w-full h-full rounded-xl object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
                <h1 className="text-5xl font-bold text-gray-900 mb-6">Welcome to My Portfolio</h1>
                <p className="text-lg text-gray-700 leading-relaxed">
                </p>
            </section>

            {/* Technical Skills */}
            <section className="max-w-5xl mx-auto mb-20">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Technical Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-xl p-6 shadow-md">
                        <p className="text-gray-800"><strong className="text-indigo-600">Programming Languages:</strong> Python, JavaScript, Java, Oracle SQL, C#, HTML/CSS</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-md">
                        <p className="text-gray-800"><strong className="text-indigo-600">Libraries:</strong> Streamlit, Pandas, NumPy, Scikit-learn, NLTK, TensorFlow, PyTorch, Matplotlib</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-md">
                        <p className="text-gray-800"><strong className="text-indigo-600">Frameworks:</strong> LangChain, LangGraph, React, Node.js, Express, MERN, Tailwind CSS, Bootstrap</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-md">
                        <p className="text-gray-800"><strong className="text-indigo-600">Developer Tools:</strong> Anaconda Navigator, Git, Docker, Eclipse, VS Code, VS, IntelliJ, Firebase, Groq</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-md md:col-span-2">
                        <p className="text-gray-800"><strong className="text-indigo-600">Other Skills:</strong> Systems Design, SDLC, CI/CD Pipelines</p>
                    </div>
                </div>
            </section>

            {/* Education */}
            <section className="max-w-4xl mx-auto mb-20 bg-white rounded-xl p-8 shadow-md">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Education</h2>
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">AI - Software Engineering Technology (Co-op) Advanced Diploma</h3>
                <h4 className="text-lg text-gray-700 mb-2">Centennial College, Toronto, ON</h4>
                <p className="text-gray-600 mb-4">September 2024 - Present</p>
                <p className="text-gray-800"><strong>Courses:</strong> Java Programming | AI Systems Design | Web Development (JS, HTML, CSS) | Software Requirements | Database Concepts (SQL) | Introduction to AI | C# Programming</p>
            </section>

            {/* Experience */}
            <section className="max-w-4xl mx-auto mb-20">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Experience</h2>
                
                <div className="space-y-8">
                    {/* Experience 1 */}
                    <div className="bg-white rounded-xl p-8 shadow-md">
                        <h3 className="text-xl font-bold text-indigo-600 mb-2">Software Consultant Intern</h3>
                        <h4 className="text-lg text-gray-700 mb-1">KPMG (Toronto, ON, Canada)</h4>
                        <p className="text-gray-500 mb-4">January 2026 - Present</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Developing a Multi-Agent System that focuses on Bid Pursuits to resolve the problem of miscommunication within the team and allow co-workers to verify information with those agents to overcome deal losses</li>
                            <li>Utilizing Agentic AI in the workflow and increasing productivity by 40%, resulting in successful deal closures with clients and chasing new opportunities</li>
                            <li>Contributing to the development of a pricing internal software tool that allows consultants to evaluate profits from deals and submit them for review to executive members</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section className="max-w-4xl mx-auto text-center bg-white rounded-xl p-8 shadow-md">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact</h2>
                <p className="text-gray-700 mb-4">Feel free to reach out to me for any opportunities or inquiries.</p>
                <p className="text-gray-700 mb-2">
                    Email: <a href="mailto:zukhriddinsh@gmail.com" className="text-indigo-600 hover:text-indigo-700 font-medium">zukhriddinsh@gmail.com</a>
                </p>
                <p className="text-gray-700">
                    +1(437) 214-2297 | LinkedIn: <a href="https://www.linkedin.com/in/zuhriddinsh/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 font-medium">Zuhriddin Sharofiddinov</a>
                </p>
            </section>
        </div>
    );
}

export default Home;