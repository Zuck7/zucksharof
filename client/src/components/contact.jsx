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

    // Load saved form data from sessionStorage on component mount
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
        
        // Save form data to sessionStorage as user types
        sessionStorage.setItem('contactFormData', JSON.stringify(updatedFormData));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Save submitted form data to sessionStorage with timestamp
        const submissionData = {
            ...formData,
            submittedAt: new Date().toISOString()
        };
        
        // Get existing submissions or create empty array
        const existingSubmissions = JSON.parse(sessionStorage.getItem('contactSubmissions') || '[]');
        existingSubmissions.push(submissionData);
        
        // Save all submissions to sessionStorage
        sessionStorage.setItem('contactSubmissions', JSON.stringify(existingSubmissions));
        
        // Log the form data to console (for demonstration purposes)
        console.log('Form Data Submitted:', formData);
        console.log('All Submissions:', existingSubmissions);
        
        // Alert to show the captured information
        alert(`Thank you, ${formData.firstName} ${formData.lastName}! Your message has been received and saved.`);
        
        // Reset the form and clear the saved draft
        setFormData({
            firstName: '',
            lastName: '',
            contactNumber: '',
            email: '',
            message: ''
        });
        
        // Clear the draft from sessionStorage
        sessionStorage.removeItem('contactFormData');
        
        // Redirect to Home Page
        navigate('/');
    };

    return (
        <div className="page-container">
            <section id="contact">
                <h2>Contact Me</h2>
                <p>Feel free to reach out to me for any opportunities or inquiries.</p>
                
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <label htmlFor="firstName">First Name:</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="lastName">Last Name:</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="contactNumber">Contact Number:</label>
                        <input
                            type="tel"
                            id="contactNumber"
                            name="contactNumber"
                            value={formData.contactNumber}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email Address:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows="5"
                            required
                        />
                    </div>

                    <button type="submit" className="submit-btn">Send Message</button>
                </form>

                <div className="contact-info">
                    <p>Or contact me directly:</p>
                    <p>Email: <a href="mailto:zukhriddinsh@gmail.com">zukhriddinsh@gmail.com</a></p>
                    <p> Phone: +1(437) 214-2297 | LinkedIn: <a href="https://www.linkedin.com/in/zuhriddinsh/" target="_blank" rel="noopener noreferrer">Zuhriddin Sharofiddinov</a></p>
                </div>
            </section>
        </div>
    );
}

export default Contact;