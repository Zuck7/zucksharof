import pokedex from '../assets/pokedex.jpeg';
import mobistore from '../assets/mobistore.jpeg';
import uberEats from '../assets/uberEats.jpeg'

const data = [
    {
        imagePath: pokedex,
        title: 'Pokedex Project',
        text: "Pokedex Application - an application where users can search for Pokemon by name or ID, view their details in a styled card, open a modal to view more information, and add up to 6 Pokemon to a favourites list stored in localStorage. It uses PokeAPI to fetch Pokemon data.",
        techStack: ['React', 'JavaScript', 'PokeAPI']
    }, 
    {
        imagePath: mobistore,
        title: 'Mobile Store Database',
        text: "Mobile Store Database This repository contains SQL scripts for creating and populating a relational database designed to manage data for a mobile store. The database includes tables for products, customers, stores, staff, sales orders, and order items.",
        techStack: ['Oracle SQL']
    },
    {
        imagePath: uberEats,
        title: 'UberEats SRS Document',
        text: "The objective of UberEATS is to create a platform to bring together 3 groups of people by acting as an intermediary between customers, restaurants, and drivers. The goal of the app is to provide a simple food delivery service, an efficient no-cost method of order taking, and an additional opportunity for Uber drivers.",
        techStack: ['Systems Design', 'Requirements Analysis', 'SRS']
    },
    {
        imagePath: '',
        title: 'Cosmetics Multi-agent System',
        text: "Developed a comprehensive multi-agent system design showcasing workflow with detailed diagrams. Built a system consisting of Planner (Orchestration), Reflection, Summarization, and Validation Agents integrated with a RAG system for open-source data on cosmetic and health products. Implemented Streamlit for a frontend chat interface to query the cosmetics knowledge base.",
        techStack: ['Python', 'RAG', 'Streamlit']
    },
    {
        imagePath: '',
        title: 'Banking System Simulator',
        text: "Developed event handlers and created 3 types of accounts with full functionality for purchase and payment processing. Implemented interest rate calculations and transaction management. Managed a team of 4 peers and assisted in decoupling the application architecture to enable easy implementation of future features.",
        techStack: ['C#', '.NET', ]
    },
    {
        imagePath: '',
        title: 'YouTube Comments Spam Detector',
        text: "Built an intelligent spam detector using Logistic Regression, TF-IDF, and NumPy that classifies spam and ham comments with 87% accuracy. Utilized Multinomial Naive Bayes Classifier and Bag of Words for feature extraction. Effectively captured spam indicators and improved content moderation.",
        techStack: ['Python', 'Machine Learning', 'NLP', 'Scikit-learn', 'NumPy']
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
                                    <h3 className="text-2xl font-bold text-indigo-600 mb-4">{project.title}</h3>
                                    <p className="text-gray-700 leading-relaxed mb-6">{project.text}</p>
                                    {/* Individual Tech Stack Boxes */}
                                    <div className="flex flex-wrap gap-4 mt-2">
                                        {project.techStack.map((tech, idx) => (
                                            <div
                                                key={idx}
                                                className="px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg shadow hover:from-indigo-300 hover:to-pink-300 hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-pointer"
                                            >
                                                <span className="text-indigo-700 font-semibold text-sm">{tech}</span>
                                            </div>
                                        ))}
                                    </div>
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