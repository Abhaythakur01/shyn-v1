import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-32 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have a question, a project idea, or just want to say hello? We'd love to hear from you.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="w-full p-4 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 transition" />
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required className="w-full p-4 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 transition" />
              </div>
              <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" required className="w-full p-4 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 transition" />
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" required rows={5} className="w-full p-4 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 transition"></textarea>
              <button type="submit" disabled={isSubmitting} className="w-full flex items-center justify-center gap-2 py-4 px-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:scale-105 transition-transform disabled:opacity-70 disabled:cursor-not-allowed">
                <Send size={18} />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </button>
              {submitMessage && <p className="text-center text-green-400 mt-4">{submitMessage}</p>}
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail size={20} className="text-purple-400 flex-shrink-0" />
                  <a href="mailto:contact@shyn.com" className="text-gray-300 hover:text-white">contact@shyn.com</a>
                </div>
                <div className="flex items-center gap-4">
                  <Phone size={20} className="text-purple-400 flex-shrink-0" />
                  <span className="text-gray-300">(+91) 123-456-7890</span>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin size={20} className="text-purple-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">123 Creative Lane, Art City, Mumbai, India</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl h-64 border border-gray-700 overflow-hidden">
              {/* Placeholder for an interactive map */}
              <img src="https://placehold.co/600x400/1a1a1a/4a4a4a?text=Map+Placeholder" alt="Map" className="w-full h-full object-cover opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
