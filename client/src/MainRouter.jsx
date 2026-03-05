import { Routes, Route } from 'react-router-dom';
import About from './components/about.jsx';
import Home from './components/home.jsx';
import Contact from './components/contact.jsx';
import NotFound from './components/NotFound.jsx';
import Layout from './components/Layout.jsx';
import Projects from './components/projects.jsx';
import Experience from './components/Experience.jsx';
 

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

                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default MainRouter;