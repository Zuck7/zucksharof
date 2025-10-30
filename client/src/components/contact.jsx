import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        contactNumber: '',
        email: '',
        message: ''
    });

    const navigate = useNavigate();

    useEffect(() => {
        const savedFormData = sessionStorage.getItem('contactFormData');
        if (savedFormData) {
            setFormData(JSON.parse(savedFormData));
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const updatedFormData = {
            ...formData,
            [name]: value
        };
        
        setFormData(updatedFormData);
        sessionStorage.setItem('contactFormData', JSON.stringify(updatedFormData));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const submissionData = {
            ...formData,
            submittedAt: new Date().toISOString()
        };
        
        const existingSubmissions = JSON.parse(sessionStorage.getItem('contactSubmissions') || '[]');
        existingSubmissions.push(submissionData);
        
        sessionStorage.setItem('contactSubmissions', JSON.stringify(existingSubmissions));
        
        console.log('Form Data Submitted:', formData);
        console.log('All Submissions:', existingSubmissions);
        
        alert(`Thank you, ${formData.firstName} ${formData.lastName}! Your message has been received and saved.`);
        
        setFormData({
            firstName: '',
            lastName: '',
            contactNumber: '',
            email: '',
            message: ''
        });
        
        sessionStorage.removeItem('contactFormData');
        navigate('/');
    };

    return (
        <div className="py-12 bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Contact Me</h2>
                <p className="mt-2 text-lg text-gray-600">Feel free to reach out to me for any opportunities or inquiries.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <label htmlFor="firstName" className="block text-sm font-semibold text-gray-900">First name</label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                placeholder="John"
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="lastName" className="block text-sm font-semibold text-gray-900">Last name</label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                placeholder="Doe"
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                required
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-900">Email</label>
                        <div className="mt-2.5">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="john@doe.com"
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                required
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="contactNumber" className="block text-sm font-semibold text-gray-900">Phone number</label>
                        <div className="mt-2.5">
                            <input
                                type="tel"
                                id="contactNumber"
                                name="contactNumber"
                                value={formData.contactNumber}
                                onChange={handleInputChange}
                                placeholder="123-456-7890"
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                required
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-sm font-semibold text-gray-900">Message</label>
                        <div className="mt-2.5">
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                rows="4"
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                required
                            />
                        </div>
                    </div>
                </div>
                
                <div className="mt-10">
                    <button 
                        type="submit" 
                        className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Send Message
                    </button>
                </div>
            </form>

            <div className="mx-auto max-w-xl mt-12 text-center text-gray-600">
                <p className="mb-2">Or contact me directly:</p>
                <p className="mb-1">
                    Email: <a href="mailto:zukhriddinsh@gmail.com" className="text-indigo-600 hover:text-indigo-700">zukhriddinsh@gmail.com</a>
                </p>
                <p>
                    Phone: +1(437) 214-2297 | LinkedIn: <a href="https://www.linkedin.com/in/zuhriddinsh/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700">Zuhriddin Sharofiddinov</a>
                </p>
            </div>
        </div>
    );
}

export default Contact;