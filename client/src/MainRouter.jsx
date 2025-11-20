import { Routes, Route } from 'react-router-dom';
import Projects from './components/projects.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Home from './components/Home.jsx';
import NotFound from './components/NotFound.jsx';
import Contact from './components/Contact.jsx';
import Layout from './components/Layout.jsx';
import ListInventory from "./components/inventory/ListInventory";
import AddInventory from "./components/inventory/AddInventory";
import EditInventory from "./components/inventory/EditInventory";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
 

function MainRouter(){
    return(
        <div>
            <Layout/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/users/signin" element={<Signin />} />
                <Route path="/users/signup" element={<Signup />} />
                <Route path="/inventory/list" element={<ListInventory />} />
                <Route path="/inventory/add" element={<AddInventory />} />
                <Route path="/inventory/edit/:id" element={<EditInventory />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default MainRouter;