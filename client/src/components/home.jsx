
function Home(){
    return(
        <main>
        <section id="about">
            <h2>Welcome to My Portfolio</h2>
            <p className="description">Practical student of AI - Software Engineering Advanced Diploma, with experience in building full-stack projects, user-oriented design, 
            database management and object-oriented programming; Demonstrated analytical skills used for unit testing, debugging and troubleshooting; Multilingual in English, Russian, German and Uzbek; 
            worked as a marketing associate in a software company, where implemented strong marketing and communication to attract 500+ active product users</p>
        </section>

        <section id="techskills">
            <h2>Technical Skills</h2>   
                    <p className="skills"><strong>Programming:</strong> JavaScript, C#, Oracle SQL, Java, HTML/CSS, Python</p>
                    <p className="skills"><strong>Frameworks & Libraries:</strong> React (Vita), Express, Node, .Net, Pandas, Matplotlib, MongoDB</p>
                    <p className="skills"><strong>Operating Systems:</strong> MacOS, Linux, Windows</p>
                    <p className="skills"><strong>Development Tools:</strong> GitHub, Visual Studio Code, Visual Studio, Eclipse, Anaconda Navigator</p>
                    <p className="skills"><strong>Cloud Computing:</strong> AWS, Microsoft Azure</p>
                    <p className="skills"><strong>Unit Testing:</strong> MSTest, unittest, Jest</p>
                    <p className="skills"><strong>Other Tools:</strong>	Slack, Jira, Trello, MS Office, Figma, Google (Analytics, Trends, Ads)</p>
        </section>

        <section id="education">
            <h2>Education</h2>
                <h3>AI - Software Engineering Technology (Co-op) Advanced Diploma </h3>
                <h3>Centennial College, Toronto, ON </h3>
                <h3>September 2024 - Present</h3>
                <p><strong>Courses: Java Programming | AI Systems Design | Web Development (JS, HTML, CSS) | Software Requirements | Database Concepts (SQL) | Introduction to AI | C# Programming.</strong></p>
        </section>

        <section id="experience">
            <h2>Experience</h2>
            <div id="expdetails">
            <h4>Marketing Associate</h4>
            <h4>Quartermaster Inc., Toronto, Canada</h4>
            <h4>April 2025 - Present</h4>
            <ul className="expInfo">
                <li>Collaborated with the software team on product bugs and reported them on Slack for a resolution</li>
                <li>Contributed to the conversion of 15% of GTA (homeowner to product user), helped with account setups and assisted in leading the team of 11 members in achieving KPIs</li>
                <li>In 5 months, collected 400+ referrals from homeowners on home service professionals they used</li>
            </ul>
            <h4>Junior BI Analyst</h4>
            <h4>KDB Bank, Tashkent, Uzbekistan</h4>
            <h4>September 2022 – October 2022</h4>
            <ul className="expInfo">
                <li>Assisted in developing dashboards and reports for business and regulatory needs</li>
                <li>Worked with Senior BI Analyst to translate business requirements into data models and visualizations</li>
                <li>Supported in automating manual reporting tasks using Excel, SQL and BI tools</li>
            </ul>
            <h4>Country Marketing Manager</h4>
            <h4>Infinix Mobility (Production of Gadgets), Tashkent, Uzbekistan</h4>
            <h4>March 2024 – August 2024</h4>
            <ul>
                <li>Delegated tasks in the marketing department, supported the department with requesting additional information 
                from headquarter in China and confirmed upcoming product launch campaigns;</li>
                <li>Administered 2 social media platforms, analyzed the effectiveness of content, launched collaboration campaigns 
                with retailers, communicated with 50k audience on Instagram page, and answered their questions;</li>
                <li>Ran product presentation content with 30 bloggers and influencers, signed 2 ambassadors to represent products, 
organized overall 25 presentations for partners on new product launch campaigns, negotiated partners’ questions, 
and provided further details for partnership;</li>
            </ul>
            </div>
        </section>

        <section id="contact">
            <h2>Contact</h2>
            <p>Feel free to reach out to me for any opportunities or inquiries.</p>
            <p>Email: <a href="mailto:zukhriddinsh@gmail.com">zukhriddinsh@gmail.com</a></p>
            <p>+1(437) 214-2297 | LinkedIn: <a href="https://www.linkedin.com/in/zuhriddinsh/" target="_blank">Zuhriddin Sharofiddinov</a></p>
        </section>
    </main>
    );
}

export default Home;