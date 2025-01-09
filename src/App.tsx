import React from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#0a192f] text-gray-300">
      {/* Header */}
      <header className="fixed w-full bg-[#0a192f]/90 backdrop-blur-sm z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-end space-x-6">
            <a href="#about" className="hover:text-[#64ffda] transition-colors">About</a>
            <a href="#experience" className="hover:text-[#64ffda] transition-colors">Experience</a>
            <a href="#projects" className="hover:text-[#64ffda] transition-colors">Projects</a>
            <a href="#contact" className="hover:text-[#64ffda] transition-colors">Contact</a>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 pt-24">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center">
          <p className="text-[#64ffda] mb-4">Hi, my name is</p>
          <h1 className="text-6xl font-bold text-gray-200 mb-4">Ali ZadeMohammad.</h1>
          <h2 className="text-5xl font-bold text-gray-400 mb-6">Interested in data science and modeling.</h2>
          <p className="max-w-xl text-gray-400 mb-8">
            I'm a software engineer specializing in building exceptional digital experiences.
            Currently, I'm focused on building accessible, human-centered products.
          </p>
          <div className="flex space-x-6">
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#64ffda] transition-colors"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#64ffda] transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:your.email@example.com" 
              className="text-gray-300 hover:text-[#64ffda] transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <h2 className="text-3xl font-bold text-gray-200 mb-8">Some Things I've Built</h2>
          <div className="grid gap-8">
            <div className="bg-[#112240] p-6 rounded-lg">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-200">Featured Project</h3>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-[#64ffda]"><Github size={20} /></a>
                  <a href="#" className="hover:text-[#64ffda]"><ExternalLink size={20} /></a>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                A comprehensive web application built with modern technologies.
                Features include user authentication, real-time updates, and responsive design.
              </p>
              <div className="flex flex-wrap gap-2 text-sm text-[#64ffda]">
                <span>React</span>
                <span>TypeScript</span>
                <span>Node.js</span>
                <span>MongoDB</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 text-center">
          <h2 className="text-3xl font-bold text-gray-200 mb-4">Get In Touch</h2>
          <p className="max-w-md mx-auto text-gray-400 mb-8">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
            I'll try my best to get back to you!
          </p>
          <a 
            href="mailto:your.email@example.com"
            className="inline-block px-6 py-3 border-2 border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda]/10 transition-colors"
          >
            Say Hello
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-400">
        <p>Built with React & Tailwind CSS</p>
      </footer>
    </div>
  );
}

export default App;
