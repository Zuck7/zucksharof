import ListComponent from "./ListComponent";
import pokedex from '../assets/pokedex.jpeg';
import mobistore from '../assets/mobistore.jpeg';
import uberEats from '../assets/uberEats.jpeg';

const data = [
  {
    imagePath: pokedex,
    title: 'Pokedex Project',
    text: "Pokedex Application - an application where users can search for Pokemon by name or ID, view their details in a styled card, open a modal to view more information, and add up to 6 Pokemon to a favourites list stored in localStorage. It uses PokeAPI to fetch Pokemon data."
  },
  {
    imagePath: mobistore,
    title: 'Mobile Store Database',
    text: "Mobile Store Database This repository contains SQL scripts for creating and populating a relational database designed to manage data for a mobile store. The database includes tables for products, customers, stores, staff, sales orders, and order items."
  },
  {
    imagePath: uberEats,
    title: 'UberEats SRS Document',
    text: "The objective of UberEATS is to create a platform to bring together 3 groups of people by acting as an intermediary between customers, restaurants, and drivers. The goal of the app is to provide a simple food delivery service, an efficient no-cost method of order taking, and an additional opportunity for Uber drivers."
  }
];

function Projects() {
  return (
    <div className="py-12">
      <h3 className="text-5xl font-bold text-gray-900 text-center mb-16">Projects</h3>
      <ListComponent items={data} />
      
      {/* Contact Section */}
      <section className="max-w-4xl mx-auto px-6 mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact</h2>
        <p className="text-gray-700 mb-2">Feel free to reach out to me for any opportunities or inquiries.</p>
        <p className="text-gray-700 mb-1">
          Email: <a href="mailto:zukhriddinsh@gmail.com" className="text-indigo-600 hover:text-indigo-700">zukhriddinsh@gmail.com</a>
        </p>
        <p className="text-gray-700">
          +1(437) 214-2297 | LinkedIn: <a href="https://www.linkedin.com/in/zuhriddinsh/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700">Zuhriddin Sharofiddinov</a>
        </p>
      </section>
    </div>
  );
}

export default Projects;