function Home(){
    return(
        <div className="py-12 bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100">
            {/* Hero Section */}
            <section className="max-w-4xl mx-auto text-center mb-20">
                <h1 className="text-5xl font-bold text-gray-900 mb-6">Welcome to My Portfolio</h1>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Practical student of AI - Software Engineering Advanced Diploma, with experience in building full-stack projects, user-oriented design, 
                    database management and object-oriented programming; Demonstrated analytical skills used for unit testing, debugging and troubleshooting; 
                    Multilingual in English, Russian, German and Uzbek; worked as a marketing associate in a software company, where implemented strong 
                    marketing and communication to attract 500+ active product users
                </p>
            </section>

            {/* Technical Skills */}
            <section className="max-w-5xl mx-auto mb-20">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Technical Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-xl p-6 shadow-md">
                        <p className="text-gray-800"><strong className="text-indigo-600">Programming:</strong> JavaScript, C#, Oracle SQL, Java, HTML/CSS, Python</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-md">
                        <p className="text-gray-800"><strong className="text-indigo-600">Frameworks & Libraries:</strong> React (Vite), Express, Node, .Net, Pandas, Matplotlib, MongoDB</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-md">
                        <p className="text-gray-800"><strong className="text-indigo-600">Operating Systems:</strong> MacOS, Linux, Windows</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-md">
                        <p className="text-gray-800"><strong className="text-indigo-600">Development Tools:</strong> GitHub, Visual Studio Code, Visual Studio, Eclipse, Anaconda Navigator</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-md">
                        <p className="text-gray-800"><strong className="text-indigo-600">Cloud Computing:</strong> AWS, Microsoft Azure</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-md">
                        <p className="text-gray-800"><strong className="text-indigo-600">Other Tools:</strong> Slack, Jira, Trello, MS Office, Figma, Google (Analytics, Trends, Ads)</p>
                    </div>
                </div>
            </section>

            {/* Education */}
            <section className="max-w-4xl mx-auto mb-20 bg-white rounded-xl p-8 shadow-md">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Education</h2>
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">AI - Software Engineering Technology (Co-op) Advanced Diploma</h3>
                <h4 className="text-lg text-gray-700 mb-2">Centennial College, Toronto, ON</h4>
                <p className="text-gray-600 mb-4">September 2024 - Present</p>
                <p className="text-gray-800"><strong>Courses:</strong> Java Programming | AI Systems Design | Web Development (JS, HTML, CSS) | Software Requirements | Database Concepts (SQL) | Introduction to AI | C# Programming</p>
            </section>

            {/* Experience */}
            <section className="max-w-4xl mx-auto mb-20">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Experience</h2>
                
                <div className="space-y-8">
                    {/* Experience 1 */}
                    <div className="bg-white rounded-xl p-8 shadow-md">
                        <h3 className="text-xl font-bold text-indigo-600 mb-2">Marketing Associate</h3>
                        <h4 className="text-lg text-gray-700 mb-1">Quartermaster Inc., Toronto, Canada</h4>
                        <p className="text-gray-500 mb-4">April 2025 - Present</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Collaborated with the software team on product bugs and reported them on Slack for a resolution</li>
                            <li>Contributed to the conversion of 15% of GTA (homeowner to product user), helped with account setups and assisted in leading the team of 11 members in achieving KPIs</li>
                            <li>In 5 months, collected 400+ referrals from homeowners on home service professionals they used</li>
                        </ul>
                    </div>

                    {/* Experience 2 */}
                    <div className="bg-white rounded-xl p-8 shadow-md">
                        <h3 className="text-xl font-bold text-indigo-600 mb-2">Junior BI Analyst</h3>
                        <h4 className="text-lg text-gray-700 mb-1">KDB Bank, Tashkent, Uzbekistan</h4>
                        <p className="text-gray-500 mb-4">September 2022 – October 2022</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Assisted in developing dashboards and reports for business and regulatory needs</li>
                            <li>Worked with Senior BI Analyst to translate business requirements into data models and visualizations</li>
                            <li>Supported in automating manual reporting tasks using Excel, SQL and BI tools</li>
                        </ul>
                    </div>

                    {/* Experience 3 */}
                    <div className="bg-white rounded-xl p-8 shadow-md">
                        <h3 className="text-xl font-bold text-indigo-600 mb-2">Country Marketing Manager</h3>
                        <h4 className="text-lg text-gray-700 mb-1">Infinix Mobility (Production of Gadgets), Tashkent, Uzbekistan</h4>
                        <p className="text-gray-500 mb-4">March 2024 – August 2024</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Delegated tasks in the marketing department, supported the department with requesting additional information from headquarter in China and confirmed upcoming product launch campaigns</li>
                            <li>Administered 2 social media platforms, analyzed the effectiveness of content, launched collaboration campaigns with retailers, communicated with 50k audience on Instagram page, and answered their questions</li>
                            <li>Ran product presentation content with 30 bloggers and influencers, signed 2 ambassadors to represent products, organized overall 25 presentations for partners on new product launch campaigns, negotiated partners' questions, and provided further details for partnership</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section className="max-w-4xl mx-auto text-center bg-white rounded-xl p-8 shadow-md">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact</h2>
                <p className="text-gray-700 mb-4">Feel free to reach out to me for any opportunities or inquiries.</p>
                <p className="text-gray-700 mb-2">
                    Email: <a href="mailto:zukhriddinsh@gmail.com" className="text-indigo-600 hover:text-indigo-700 font-medium">zukhriddinsh@gmail.com</a>
                </p>
                <p className="text-gray-700">
                    +1(437) 214-2297 | LinkedIn: <a href="https://www.linkedin.com/in/zuhriddinsh/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 font-medium">Zuhriddin Sharofiddinov</a>
                </p>
            </section>
        </div>
    );
}

export default Home;