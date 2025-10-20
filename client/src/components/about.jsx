import ListComponent from "./ListComponent";
import zuhriddin from '../assets/zuhriddin.jpeg';
import Resume from '../assets/zuhriddin_resume.pdf';


const data = [
    {
        imagePath: zuhriddin,
        title: 'About Me',
        text: "Hi, my name is Zuhriddin (Zuck) Sharofiddinov. I'm from Tashkent, Uzbekistan, a country with rich history, which now raises intelligent youth. For the past 3 years, I have been doing marketing for international companies. The most valuable experience was with Infinix Mobility (gadget production), where I gained international experience. But I chose to change my career path and break into tech. I thought software engineering would be the best choice, as it includes closely collaborating with the business and take part in its decision in terms of its software. This is what I had left in myself after my marketing experience, which is to work with front team. I have been in software engineering for one year and so far, I have learnt Web Development, Database Management and Systems Design. I assume these are three most valuable skills that I software engineer must have. You can check my portfolio and let me know of your any questions through my contacts."
    }, ]

    function About() {
        return (
            <>
            <div className="page-container">
                <h3 className="head">About Me</h3>
                <ListComponent items={data} />
                <a href={Resume} download> Download Resume</a>
                <section id="contact">
                <h2>Contact</h2>
                <p>Feel free to reach out to me for any opportunities or inquiries.</p>
                <p>Email: <a href="mailto:zukhriddinsh@gmail.com">zukhriddinsh@gmail.com</a></p>
                <p>+1(437) 214-2297 | LinkedIn: <a href="https://www.linkedin.com/in/zuhriddinsh/" target="_blank">Zuhriddin Sharofiddinov</a></p>
            </section>
            </div>
            </>
        );
    }

export default About;