import { Routes, Route } from 'react-router-dom';
import About from './components/about.jsx';
import Home from './components/home.jsx';
import Contact from './components/contact.jsx';
import NotFound from './components/NotFound.jsx';
import Layout from './components/Layout.jsx';
import Projects from './components/projects.jsx';
import Experience from './components/Experience.jsx';

//Project
import ListProject from "./components/projects/ListProjects.jsx";
import AddProject from "./components/projects/AddProjects.jsx";
import EditProject from "./components/projects/EditProjects.jsx";

//Inventory
import ListInventory from "./components/inventory/ListInventory";
import AddInventory from "./components/inventory/AddInventory";
import EditInventory from "./components/inventory/EditInventory";
 

function MainRouter(){
    return(
        <div>
            <Layout/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/contact" element={<Contact />} />

                <Route path="/projects/list" element={<ListProject />} />
                <Route path="/projects/add" element={<AddProject />} />
                <Route path="/projects/edit/:id" element={<EditProject />} />

                <Route path="/inventory/list" element={<ListInventory />} />
                <Route path="/inventory/add" element={<AddInventory />} />
                <Route path="/inventory/edit/:id" element={<EditInventory />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default MainRouter;