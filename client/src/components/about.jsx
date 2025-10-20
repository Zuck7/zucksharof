import ListComponent from "./ListComponent";
import zuhriddin from '../assets/zuhriddin.jpeg';
import Resume from '../assets/zuhriddin_resume.pdf';

const data = [
  {
    imagePath: zuhriddin,
    title: 'About Me',
    text: "Hi, my name is Zuhriddin (Zuck) Sharofiddinov. I'm from Tashkent, Uzbekistan, a country with rich history, which now raises intelligent youth. For the past 3 years, I have been doing marketing for international companies. The most valuable experience was with Infinix Mobility (gadget production), where I gained international experience. But I chose to change my career path and break into tech. I thought software engineering would be the best choice, as it includes closely collaborating with the business and take part in its decision in terms of its software. This is what I had left in myself after my marketing experience, which is to work with front team. I have been in software engineering for one year and so far, I have learnt Web Development, Database Management and Systems Design. I assume these are three most valuable skills that I software engineer must have. You can check my portfolio and let me know of your any questions through my contacts."
  }
];

function About() {
  return (
    <>
      <div className="min-h-screen py-12">
        <ListComponent items={data} />
        
        {/* Download Resume Button */}
        <div className="text-center mt-12">
          <a 
            href={Resume} 
            download 
            className="inline-block bg-indigo-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-indigo-700 transition duration-200"
          >
            Download Resume
          </a>
        </div>

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
    </>
  );
}

export default About;