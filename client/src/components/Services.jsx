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
    text: "Turn your data into insights. I analyze, visualize, and report on your business data to help you make informed decisions and drive growth. Every analysis is tailored to your specific business needs and presented in clear, professional reports with actionable recommendations."
  }
];

function Services() {
  return (
    <div className="min-h-screen py-12">
      <h3 className="text-5xl font-bold text-gray-900 text-center mb-16">Services</h3>
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

export default Services;
