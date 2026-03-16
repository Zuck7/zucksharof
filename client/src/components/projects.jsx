import mobistore from '../assets/mobistore.jpeg';
import uberEats from '../assets/uberEats.jpeg'
import cosmetics from '../assets/cosmetics.jpeg'

const data = [
    {
        imagePath: cosmetics,
        title: 'Cosmetics Multi-agent System',
        text: "Implemented Streamlit for a frontend chat interface for querying cosmetics knowledge base and leveraged llama-3.3 for inferencing using Groq. Developed a multi-agent system consisting of Planner (Orchestration), Reflection, Summarization, and Validation Agents integrated with a RAG system on open-source cosmetic and health product data. Built a systems design of the multi-agent system that showcases the system flow with diagrams that explicitly break down the workflow and how the Planner orchestrates the agentic system.",
        techStack: ['Python', 'RAG', 'Streamlit', 'Groq', 'Systems Design'],
        githubUrl: 'https://github.com/Zuck7/Cosmetics-AI-Agent'
    },
    {
        imagePath: '',
        title: 'YouTube Comments Spam Detector',
        text: "Built a comments spam detector using scikit-learn, NLTK, and NumPy that classifies spam or ham comments using Multinomial Naïve Bayes Classifier, Bag of Words for feature extraction, and TF-IDF for feature weighting. Ran the model and achieved a test accuracy of 87%, effectively capturing spam indicators.",
        techStack: ['Python', 'NLTK', 'NumPy', 'Scikit-learn', 'Machine Learning'],
        githubUrl: ''
    },
    {
        imagePath: '',
        title: 'Banking System Simulator',
        text: "Developed event handlers and created 3 types of accounts with full functionality for purchase, payment processing, interest rate calculations, and transaction fees. Managed a team of 4 peers and assisted in decoupling the application architecture to make it easy to implement future features.",
        techStack: ['C#', '.NET'],
        githubUrl: ''
    },
    {
        imagePath: mobistore,
        title: 'Rezolved – IT Support Ticket Management System',
        text: "Programmed the frontend and backend using the MERN stack and Bootstrap for styling. Inspected the entire ticket submission flow and debugged CRUD operations using MongoDB to verify data integrity. Shipped the application utilizing CI/CD pipelines over 3 months and ran Unit Testing on tickets. Implemented Firebase signup for users to login using Google account with Admin/User roles.",
        techStack: ['MERN', 'Bootstrap', 'Firebase', 'MongoDB', 'CI/CD'],
        githubUrl: ''
    },
    {
        imagePath: uberEats,
        title: 'Software Requirements Specification – Uber Eats Mobile App',
        text: "Coordinated a team of 4 members on the project and delegated tasks on building the SRS document. Built a Sequence diagram, Use Case diagram, Activity Swim Lane Diagram, and constructed other software requirements including use cases and functional/nonfunctional requirements. Programmed classes in Python to provide a general understanding of the simplified domain model of the application.",
        techStack: ['Systems Design', 'Requirements Analysis', 'SRS', 'Python'],
        githubUrl: ''
    }
]

function Projects() {
    return (
        <div className="py-12 bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-5xl font-bold text-gray-900 text-center mb-16">Projects</h1>
                {/* Projects Grid */}
                <div className="space-y-8 mb-20">
                    {data.map((project, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="md:flex">
                                {project.imagePath && (
                                    <div className="md:flex-shrink-0">
                                        <img src={project.imagePath} alt={project.title} className="w-72 h-72 object-cover rounded-2xl shadow-lg"/>
                                    </div>
                                )}
                                <div className="p-8 flex-1">
                                    <div className="flex items-center gap-3 mb-4">
                                        <h3 className="text-2xl font-bold text-indigo-600">{project.title}</h3>
                                        {project.githubUrl ? (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                                                title="View on GitHub"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                                                    <path d="M12 2C6.477 2 2 6.484 2 12.012c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.833.091-.646.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.338 1.909-1.295 2.747-1.025 2.747-1.025.546 1.378.202 2.396.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.579.688.481C19.138 20.174 22 16.426 22 12.012 22 6.484 17.523 2 12 2z"/>
                                                </svg>
                                            </a>
                                        ) : (
                                            <span className="text-gray-300" title="No GitHub link yet">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                                                    <path d="M12 2C6.477 2 2 6.484 2 12.012c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.833.091-.646.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.338 1.909-1.295 2.747-1.025 2.747-1.025.546 1.378.202 2.396.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.579.688.481C19.138 20.174 22 16.426 22 12.012 22 6.484 17.523 2 12 2z"/>
                                                </svg>
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-gray-700 leading-relaxed mb-6">{project.text}</p>
                                    {/* Individual Tech Stack Boxes */}
                                    <div className="flex flex-wrap gap-4 mt-2 mb-4">
                                        {project.techStack.map((tech, idx) => (
                                            <div
                                                key={idx}
                                                className="px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg shadow hover:from-indigo-300 hover:to-pink-300 hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-pointer"
                                            >
                                                <span className="text-indigo-700 font-semibold text-sm">{tech}</span>
                                            </div>
                                        ))}
                                    </div>
                                    {/* Links Holder */}
                                    {/* <div className="flex flex-wrap gap-3 mt-2">
                                        {project.links.length > 0 ? (
                                            project.links.map((link, idx) => (
                                                <a
                                                    key={idx}
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="px-4 py-2 bg-blue-100 text-blue-700 font-semibold rounded-lg shadow hover:bg-blue-200 hover:text-indigo-700 transition-colors duration-200 flex items-center gap-2"
                                                >
                                                    {link.label === 'GitHub' && (
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            fill="currentColor"
                                                            className="w-5 h-5 text-gray-900"
                                                        >
                                                            <path d="M12 2C6.477 2 2 6.484 2 12.012c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.833.091-.646.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.338 1.909-1.295 2.747-1.025 2.747-1.025.546 1.378.202 2.396.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.579.688.481C19.138 20.174 22 16.426 22 12.012 22 6.484 17.523 2 12 2z"/>
                                                        </svg>
                                                    )}
                                                    {link.label}
                                                </a>
                                            ))
                                        ) : (
                                            <span className="text-gray-400 italic">No links yet</span>
                                        )}
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Contact Section */}
                <section className="max-w-4xl mx-auto mt-20 text-center bg-white rounded-xl p-8 shadow-md">
                    <h2 className="text-3xl font-semibold mb-4">Contact</h2>
                    <p className="text-gray-700 mb-4">Feel free to reach out to me for any opportunities or inquiries.</p>
                    <p className="text-gray-700 mb-4">Email: <a href="mailto:zukhriddinsh@gmail.com" className="text-blue-500 hover:underline">zukhriddinsh@gmail.com</a></p>
                    <p className="text-gray-700">+1(437) 214-2297 | LinkedIn: <a href="https://www.linkedin.com/in/zuhriddinsh/" target="_blank" className="text-blue-500 hover:underline">Zuhriddin Sharofiddinov</a></p>
                </section>
            </div>
        </div>
    );
}

export default Projects;