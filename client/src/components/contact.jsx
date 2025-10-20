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
        <div className="min-h-screen flex items-center justify-center px-4 py-12">
            <div className="max-w-2xl w-full">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-bold text-gray-900 mb-4">Contact Me</h2>
                    <p className="text-lg text-gray-600">Feel free to reach out to me for any opportunities or inquiries.</p>
                </div>
                
                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* First Name and Last Name Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-semibold text-gray-900 mb-2">
                                First name
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="lastName" className="block text-sm font-semibold text-gray-900 mb-2">
                                Last name
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                                required
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                            required
                        />
                    </div>

                    {/* Contact Number */}
                    <div>
                        <label htmlFor="contactNumber" className="block text-sm font-semibold text-gray-900 mb-2">
                            Phone number
                        </label>
                        <input
                            type="tel"
                            id="contactNumber"
                            name="contactNumber"
                            value={formData.contactNumber}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                            required
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows="5"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition resize-none"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button 
                        type="submit" 
                        className="w-full bg-indigo-600 text-white font-semibold py-4 px-6 rounded-lg hover:bg-indigo-700 transition duration-200 text-lg"
                    >
                        Send Message
                    </button>
                </form>

                {/* Contact Info */}
                <div className="mt-12 text-center text-gray-600">
                    <p className="mb-2">Or contact me directly:</p>
                    <p className="mb-1">
                        Email: <a href="mailto:zukhriddinsh@gmail.com" className="text-indigo-600 hover:text-indigo-700">zukhriddinsh@gmail.com</a>
                    </p>
                    <p>
                        Phone: +1(437) 214-2297 | LinkedIn: <a href="https://www.linkedin.com/in/zuhriddinsh/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700">Zuhriddin Sharofiddinov</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Contact;