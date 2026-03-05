function Experience() {
    const experienceData = [
        {
            title: 'Job Title 1',
            company: 'Company Name, Location',
            duration: 'Month Year - Present',
            description: [
                'Key achievement or responsibility 1',
                'Key achievement or responsibility 2',
                'Key achievement or responsibility 3'
            ]
        },
        {
            title: 'Job Title 2',
            company: 'Company Name, Location',
            duration: 'Month Year - Month Year',
            description: [
                'Key achievement or responsibility 1',
                'Key achievement or responsibility 2',
                'Key achievement or responsibility 3'
            ]
        },
        {
            title: 'Job Title 3',
            company: 'Company Name, Location',
            duration: 'Month Year - Month Year',
            description: [
                'Key achievement or responsibility 1',
                'Key achievement or responsibility 2',
                'Key achievement or responsibility 3'
            ]
        },
    ];

    return (
        <div className="py-12 bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl font-bold text-gray-900 text-center mb-4">Professional Experience</h1>
                <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-16">
                    A summary of my professional journey and the value I've brought to each role.
                </p>

                <div className="space-y-8">
                    {experienceData.map((exp, index) => (
                        <div key={index} className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="text-2xl font-bold text-indigo-600">{exp.title}</h3>
                                    <p className="text-lg text-gray-700 font-semibold">{exp.company}</p>
                                </div>
                                <span className="text-gray-500 text-sm font-medium whitespace-nowrap ml-4">{exp.duration}</span>
                            </div>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 mt-4">
                                {exp.description.map((point, idx) => (
                                    <li key={idx}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Timeline Section */}
                <div className="mt-16 text-center">
                    <p className="text-gray-600 text-lg">
                        Interested in learning more about my background? 
                        <a href="/about" className="text-indigo-600 hover:underline font-semibold ml-1">
                            View my full profile
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Experience;
