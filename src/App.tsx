import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, School, Code, Smartphone, Layout } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-[#0a192f] text-gray-300">
      {/* Header */}
      <header className="fixed w-full bg-[#0a192f]/90 backdrop-blur-sm z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="#" className="text-[#64ffda] font-bold text-xl">Ali ZadeMoohammad</a>
            <div className="flex space-x-8">
              <a href="#home" className="hover:text-[#64ffda] transition-colors">Home</a>
              <a href="#education" className="hover:text-[#64ffda] transition-colors">Education</a>
              <a href="#services" className="hover:text-[#64ffda] transition-colors">Services</a>
              <a href="#projects" className="hover:text-[#64ffda] transition-colors">Projects</a>
              <a href="#contact" className="hover:text-[#64ffda] transition-colors">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-6">
          <p className="text-[#64ffda] font-mono mb-4">Hi, It's Ali</p>
          <h1 className="text-5xl font-bold text-[#ccd6f6] mb-6">I'm a Ali ZadeMoohammad</h1>
          <p className="text-xl text-[#8892b0] max-w-2xl mb-8">
            computer engineering student. I have knowledge of Python, Matlab,Aspen Hysys,Aspen Plus. 
            I am determined, hardworking and competent in terms of equipment. I have knowledge 
            about the field of artificial intelligence. I am interested in machine and deep 
            learning based projects. I like to take part actively in individual or collaborative 
            team work. I am looking for a new place and roles to improve myself.
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-[#112240]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#ccd6f6] mb-12">Education</h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <School className="text-[#64ffda] w-8 h-8 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-[#ccd6f6]">Computer Engineering</h3>
                <p className="text-[#8892b0]">Ferdowsi University of masshad, License</p>
                <p className="text-[#64ffda]">2020 - 2024</p>
              </div>
            </div>
            <div className="flex gap-6">
              <School className="text-[#64ffda] w-8 h-8 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-[#ccd6f6]">Math Teacher</h3>
                <p className="text-[#8892b0]">Marmara University, License</p>
                <p className="text-[#64ffda]">2020 - 2024</p>
              </div>
            </div>
            <div className="flex gap-6">
              <School className="text-[#64ffda] w-8 h-8 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-[#ccd6f6]">High School</h3>
                <p className="text-[#8892b0]">Nisantasi Anatolian High School</p>
                <p className="text-[#64ffda]">2015 - 2019</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#ccd6f6] mb-12">Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#112240] p-6 rounded-lg">
              <Layout className="text-[#64ffda] w-10 h-10 mb-4" />
              <h3 className="text-xl font-semibold text-[#ccd6f6] mb-2">UI / UX Design</h3>
            </div>
            <div className="bg-[#112240] p-6 rounded-lg">
              <Code className="text-[#64ffda] w-10 h-10 mb-4" />
              <h3 className="text-xl font-semibold text-[#ccd6f6] mb-2">Web Development</h3>
            </div>
            <div className="bg-[#112240] p-6 rounded-lg">
              <Smartphone className="text-[#64ffda] w-10 h-10 mb-4" />
              <h3 className="text-xl font-semibold text-[#ccd6f6] mb-2">Mobile Development</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-[#112240]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#ccd6f6] mb-12">Recent Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#0a192f] p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#ccd6f6] mb-4">Mobile App</h3>
              <p className="text-[#8892b0] mb-4">
                It is an application that aims to protect users personal data on their phones, 
                ensuring their safety and contributing to their daily life.
              </p>
              <span className="text-[#64ffda] text-sm">#Security</span>
            </div>
            <div className="bg-[#0a192f] p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#ccd6f6] mb-4">Kiosk Mode App</h3>
              <p className="text-[#8892b0] mb-4">
                It is an application that aims to provide touchscreen technological devices used 
                in public areas to meet every citizen's housing, nutrition and health needs.
              </p>
              <span className="text-[#64ffda] text-sm">#BasicNeeds</span>
            </div>
            <div className="bg-[#0a192f] p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#ccd6f6] mb-4">Web / Mobile App</h3>
              <p className="text-[#8892b0] mb-4">
                It is an application aimed at measuring students learning related to the subject 
                in order to select suitable study methods.
              </p>
              <span className="text-[#64ffda] text-sm">#Education</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#ccd6f6] mb-12">Contact Me</h2>
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-[#8892b0] mb-2">Full Name</label>
              <input
                type="text"
                id="fullName"
                className="w-full bg-[#112240] rounded-lg p-3 text-[#ccd6f6] border border-[#233554] focus:border-[#64ffda] focus:outline-none"
                value={formData.fullName}
                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-[#8892b0] mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full bg-[#112240] rounded-lg p-3 text-[#ccd6f6] border border-[#233554] focus:border-[#64ffda] focus:outline-none"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-[#8892b0] mb-2">Phone Number</label>
              <input
                type="tel"
                id="phone"
                className="w-full bg-[#112240] rounded-lg p-3 text-[#ccd6f6] border border-[#233554] focus:border-[#64ffda] focus:outline-none"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-[#8892b0] mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                className="w-full bg-[#112240] rounded-lg p-3 text-[#ccd6f6] border border-[#233554] focus:border-[#64ffda] focus:outline-none"
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-[#8892b0] mb-2">Your Message</label>
              <textarea
                id="message"
                rows={5}
                className="w-full bg-[#112240] rounded-lg p-3 text-[#ccd6f6] border border-[#233554] focus:border-[#64ffda] focus:outline-none"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-transparent border border-[#64ffda] text-[#64ffda] py-3 rounded-lg hover:bg-[#64ffda]/10 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#112240] py-6">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <p className="text-[#8892b0]">© Nuran Ferhan Kasap | All Rights Reserved</p>
            <div className="flex space-x-6">
              <a href="#" className="text-[#8892b0] hover:text-[#64ffda] transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-[#8892b0] hover:text-[#64ffda] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-[#8892b0] hover:text-[#64ffda] transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
