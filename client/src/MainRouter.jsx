import { Routes, Route } from 'react-router-dom';
import About from './components/about.jsx';
import Home from './components/Home.jsx';
import NotFound from './components/NotFound.jsx';
import Layout from './components/Layout.jsx';

//Contact
import ListContact from "./components/contacts/ListContacts.jsx";
import AddContact from "./components/contacts/AddContacts.jsx";
import EditContact from "./components/contacts/EditContacts.jsx";

//Service
import ListService from "./components/services/ListServices.jsx";
import AddService from "./components/services/AddServices.jsx";
import EditService from "./components/services/EditServices.jsx";

//Project
import ListProject from "./components/projects/ListProjects.jsx";
import AddProject from "./components/projects/AddProjects.jsx";
import EditProject from "./components/projects/EditProjects.jsx";

//Inventory
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

                <Route path="/services/list" element={<ListService />} />
                <Route path="/services/add" element={<AddService />} />
                <Route path="/services/edit/:id" element={<EditService />} />

                <Route path="/projects/list" element={<ListProject />} />
                <Route path="/projects/add" element={<AddProject />} />
                <Route path="/projects/edit/:id" element={<EditProject />} />

                <Route path="/contacts/list" element={<ListContact />} />
                <Route path="/contacts/add" element={<AddContact />} />
                <Route path="/contacts/edit/:id" element={<EditContact />} />

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