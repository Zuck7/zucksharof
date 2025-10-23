import { Link } from 'react-router-dom';
import zuck from '../assets/zuck.png';

function Layout(){
    return(
       <>
       <div id='animated'>
       <h2>Zuhriddin (Zuck) Sharofiddinov</h2>
       <nav className="navbar">
        <img src={zuck} alt="logo" className="zuck"/>
        <Link to="/" >Home</Link>
        <Link to="/about" >About Me</Link>
        <Link to="/projects" >Projects</Link>
        <Link to="/services" >Services</Link>
        <Link to="/contact" >Contact</Link>
       </nav>
       <br />
       <hr />
       </div>
       </>
    );
}

export default Layout;