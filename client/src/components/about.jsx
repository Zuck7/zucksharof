import ListComponent from "./ListComponent";
import zuhriddin from '../assets/zuhriddin.jpeg';
import Resume from '../assets/zuhriddin_resume.pdf';


const data = [
    {
        imagePath: zuhriddin,
        title: 'About Me',
        text: "Hi, my name is Zuhriddin (Zuck) Sharofiddinov. I'm from Tashkent, Uzbekistan, a country with rich history, which now raises intelligent youth. For the past 3 years, I have been doing marketing for international companies. The most valuable experience was with Infinix Mobility (gadget production), where I gained international experience. But I chose to change my career path and break into tech. I thought software engineering would be the best choice, as it includes closely collaborating with the business and take part in its decision in terms of its software. This is what I had led myself after my marketing experience, which is to work with front team. I have been in software engineering for one year and so far, I have learnt Web Development, Database Management and Systems Design. I assume these are three most valuable skills that I software engineer must have. You can check my portfolio and let me know of your any questions through my contacts."
    }, ]

    function About() {
        return (
            <div className="py-12 bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-5xl font-bold text-gray-900 text-center mb-16">About Me</h1>
                <ListComponent items={data} />
                
                {/* Download Resume Button */}
                <div className="text-center mt-12">
                    <a 
                        href={Resume} 
                        download 
                        className="inline-block bg-indigo-600 text-white font-semibold py-4 px-10 rounded-full hover:bg-indigo-700 transition duration-200 shadow-lg hover:shadow-xl"
                    >
                        Download Resume
                    </a>
                </div>

                {/* Contact Section */}
                <section className="max-w-4xl mx-auto mt-20 text-center bg-white rounded-xl p-8 shadow-md">
                <h2 className="text-3xl font-semibold mb-4">Contact</h2>
                <p className="text-gray-700 mb-8">Feel free to reach out to me for any opportunities or inquiries.</p>
                <p className="text-gray-900 font-medium">Email: <a href="mailto:zukhriddinsh@gmail.com" className="text-indigo-600 hover:underline">zukhriddinsh@gmail.com</a></p>
                <p className="text-gray-900 font-medium">Phone: <a href="tel:+14372142297" className="text-indigo-600 hover:underline">+1(437) 214-2297</a></p>
                <p className="text-gray-900 font-medium">LinkedIn: <a href="https://www.linkedin.com/in/zuhriddinsh/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Zuhriddin Sharofiddinov</a></p>
            </section>
            </div>
            </div>
        );
    }

export default About;