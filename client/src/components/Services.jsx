import ListComponent from "./ListComponent";
import bi_analyst from '../assets/bi_analyst.jpeg';
import ui_uxdesigner from '../assets/ui_uxdesigner.jpeg';
import data_analyst from '../assets/data_analyst.jpeg';

const data = [
    {
        imagePath: bi_analyst,
        title: 'BI Analyst',
        text: "I offer BI analyst services for commercial businesses. It includes assisting in developing dashboards and reports for business and regulatory needs; supporting in automating manual reporting tasks using Excel, SQL and BI tools"
        
    }, 
    {
        imagePath: ui_uxdesigner,
        title: 'UI/UX Designer',
        text: "I design intuitive digital experiences that users love. From wireframes to polished interfaces, I create websites and apps that look great and work seamlessly. Let's turn your ideas into user-friendly designs that drive results."
    },
    {
        imagePath: data_analyst,
        title: 'Data Analyst',
        text: "Turn your data into insights. I analyze, visualize, and report on your business data to help you make informed decisions and drive growth. Every analysis is tailored to your specific business needs and presented in clear, professional reports with actionable recommendations. "
    }
];

function Services() {
    return (
        <div className="page-container">
            <h3 className="head">Services</h3>
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

export default Services;