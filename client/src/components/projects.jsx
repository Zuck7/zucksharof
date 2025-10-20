import ListComponent from "./ListComponent";
import pokedex from '../assets/pokedex.jpeg';
import mobistore from '../assets/mobistore.jpeg';
import uberEats from '../assets/uberEats.jpeg'

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
]

function Projects() {
    return (
        <div className="page-container">
            <h3>Projects</h3>
            <ListComponent items={data} />
            <section id="contact">
            <h2>Contact</h2>
            <p>Feel free to reach out to me for any opportunities or inquiries.</p>
            <p>Email: <a href="mailto:zukhriddinsh@gmail.com">zukhriddinsh@gmail.com</a></p>
            <p>+1(437) 214-2297 | LinkedIn: <a href="https://www.linkedin.com/in/zuhriddinsh/" target="_blank">Zuhriddin Sharofiddinov</a></p>
        </section>
        </div>
        
    );
}

export default Projects;