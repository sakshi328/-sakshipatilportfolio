
import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    console.log('Form data being sent:', formData);
    console.log('Form element:', form.current);

    try {
      if (form.current) {
        // Log the form data before sending
        const formElements = new FormData(form.current);
        console.log('FormData contents:');
        for (let [key, value] of formElements.entries()) {
          console.log(key, value);
        }

        const result = await emailjs.sendForm(
          'service_v4vmzfa',
          'template_vxf48ca',
          form.current,
          'c6uIPdxS2Pp1-EmMo'
        );
        
        console.log('EmailJS result:', result);
        console.log('Email sent successfully with status:', result.status);
        toast.success('Message sent successfully! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      console.error('Error details:', JSON.stringify(error, null, 2));
      toast.error('Failed to send message. Please try again or contact me directly.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-purple-600 mx-auto"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            Ready to start your project? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Let's Connect</h3>
              <p className="text-lg text-gray-600 mb-8">
                I'm always excited to discuss new opportunities and projects. Feel free to reach out!
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">sakshiapatil09@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Location</h4>
                  <p className="text-gray-600">Chikhli, Maharashtra, India</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-600 rounded-lg flex items-center justify-center">
                  <Linkedin className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/in/sakshi-patil-8ab18432b" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-orange-500 hover:text-orange-600 transition-colors"
                  >
                    Connect with me on LinkedIn
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg flex items-center justify-center">
                  <Github className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">GitHub</h4>
                  <a 
                    href="https://github.com/sakshi328" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-orange-500 hover:text-orange-600 transition-colors"
                  >
                    Check out my projects on GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-orange-50 to-purple-50 p-8 rounded-2xl border border-orange-100">
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 disabled:opacity-50"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 disabled:opacity-50"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  disabled={isLoading}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 resize-none disabled:opacity-50"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <Send size={20} />
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
