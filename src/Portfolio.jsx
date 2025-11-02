import React, { useState, useEffect } from 'react';
import { Download, Mail, MapPin, Twitter, Linkedin, ExternalLink, ArrowRight, ArrowUpRight, Phone, Instagram } from 'lucide-react';
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import ReadingSection from "./ReadingSection.jsx";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('intro');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navItems = [
  { name: "About" },
  { name: "Projects" },
  { name: "Experience" },
  { name: "Education" },
  { name: "Stack" },
  { name: "Blog", path: "/blog" },
  { name: "Reading", path: "/reading" },
  { name: "Contact" },
];


 const projects = [
  {
    title: 'Blackjack Strategy Analyser',
    subtitle: 'A platform to analyse and compare different Blackjack strategies',
    image: 'https://t3.ftcdn.net/jpg/04/60/98/52/360_F_460985268_N1NiqzX6aFMkXH6QUWKqUjD5gO5emvT7.jpg',
    link : 'https://github.com/Ashmitgarg18/blackjack-strategy-analyzer'
  },
  {
    title: 'ClipIt',
    subtitle: 'A tool for easy Youtube and X/Twitter video downloads and conversions',
    image: 'https://www.yt-clipper.com/images/yt-clipper-logo.png',
    link : 'https://github.com/Ashmitgarg18/clipit/tree/main/backend'
  },
  {
    title: 'Nifty v/s Your Portfolio',
    subtitle: 'Compare how your portfolio has fared against the mighty Nifty 50',
    image: 'https://t3.ftcdn.net/jpg/06/78/36/80/360_F_678368086_hRL58mepBfPUG0wTJwdlkRrsrCwGRado.jpg',
    link : 'https://github.com/Ashmitgarg18/portfolio-comparator'
  },
  {
    title: 'Shortly',
    subtitle: 'A Bitly clone to shorten your url',
    image: 'https://media.wpfrontendadmin.com/wp-content/uploads/2022/06/06064117/url-shortener-app-wordpress.png',
    link : 'https://github.com/Ashmitgarg18/shortly'
  }
];

const experiences = [
  {
    location: 'Remote',
    company: 'TransactBox Technologies',
    role: 'Software Engineer',
    period: 'July 2024 - Present',
    achievements: [
      'Increased user engagement 30% by designing real-time in-app chat (Firebase Realtime DB) supporting 10K+ concurrent users with reactions and group messaging.',
      'Built fault-tolerant REST microservices (Java, Spring Boot) powering internal Admin Portal, cutting support resolution time 40% and removing manual DB queries.',
      'Delivered multi-currency support integrating Stripe and GoCardless with 5 new currencies; onboarded Cashfree for INR payments, enabling Indian market launch.',
      'Led CI/CD pipeline automation and production monitoring, improving uptime and reducing deployment effort 50%.',
      'Refactored legacy dependencies to modern Spring Boot stack, resolving compatibility issues and enhancing long-term maintainability.'
    ]
  },
  {
    location: 'Pune, Maharashtra',
    company: 'IDeaS Revenue Solutions',
    role: 'Software Development Intern',
    period: 'July 2023 - June 2024',
    achievements: [
      'Reduced data retrieval latency 38% by building high-throughput data ingestion pipeline (Spring Batch, MongoDB) for analytics platform.',
      'Automated 1500+ test cases per sprint using JUnit and Selenium, decreasing regression time 90% and accelerating Agile releases.',
      'Built interactive UI for App Support Monitoring system with pause/resume job controls, cutting manual API calls by 90%.'
    ]
  }
];

const education = [
  {
    location: 'Pune, Maharashtra',
    degree: 'Bachelors in Electronics And Communication',
    school: 'MIT World Peace University',
    period: '2020 - 2024'
  }
];

const certifications = [
  {
    title: 'Certified Web Developer (CWD)',
    org: 'International Web Association, 2021'
  },
  {
    title: 'User Experience (UX) Design Certification',
    org: 'Nielsen Norman Group, 2018'
  },
  {
    title: 'Advanced HTML5 and CSS3 Specialist',
    org: 'W3Schools, 2016'
  },
  {
    title: 'Google Analytics Individual Qualification (GAIQ)',
    org: 'Google, 2015'
  }
];

const stack = [
  {
    name: 'Java',
    desc: 'Core programming language for backend development.',
    color: 'bg-orange-500',
    logo: 'https://www.vectorlogo.zone/logos/java/java-icon.svg',
  },
  {
    name: 'Spring Boot',
    desc: 'Framework for building production-grade backend APIs.',
    color: 'bg-green-600',
    logo: 'https://www.vectorlogo.zone/logos/springio/springio-icon.svg',
  },
  {
    name: 'MySQL',
    desc: 'Relational database management system for structured data.',
    color: 'bg-blue-600',
    logo: 'https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg',
  },
  {
    name: 'AWS',
    desc: 'Cloud platform for hosting, storage, and scalable services.',
    color: 'bg-orange-400',
    logo: 'https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg',
  },
  {
    name: 'Docker',
    desc: 'Containerization platform for app deployment and consistency.',
    color: 'bg-sky-500',
    logo: 'https://www.vectorlogo.zone/logos/docker/docker-icon.svg',
  },
  {
    name: 'Kafka',
    desc: 'Distributed event streaming platform for real-time data pipelines.',
    color: 'bg-gray-600',
    logo: 'https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-icon.svg',
  },
];


const articles = [
  {
    title: 'The Future of Web Design: Trends to Watch in 2024',
    publication: 'Web Design Journal, May 15, 2024',
    description: 'An in-depth analysis of upcoming trends in web design, focusing on emerging technologies and design philosophies that are set to shape the future of the industry.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80'
  },
  {
    title: 'Responsive Design Best Practices',
    publication: 'Modern Web Magazine, May 11, 2024',
    description: 'An article outlining the best practices for creating responsive websites that perform well on all devices, ensuring a seamless user experience.',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80'
  },
  {
    title: 'The Art of Minimalist Web Design',
    publication: 'Modern Web Magazine, May 10, 2024',
    description: 'A discussion on the principles of minimalist design, showcasing examples and providing tips on how to implement minimalist design effectively.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80'
  }
];

const [currentTime, setCurrentTime] = useState("");

useEffect(() => {
  const updateTime = () => {
    const now = new Date();

  // Format time in IST
    const timeString = now.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: "Asia/Kolkata",
    });

  // Format date in IST
    const dateString = now.toLocaleDateString("en-IN", {
      weekday: "short",
      month: "short",
      day: "numeric",
      timeZone: "Asia/Kolkata",
    });

  // Combine: date first, then time
    setCurrentTime(`${dateString} · ${timeString}`);
  };

  updateTime();
  const interval = setInterval(updateTime, 60000);
  return () => clearInterval(interval);
}, []);


const handleSubmit = (e) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.message) {
    alert("Please fill in all fields.");
    return;
  }

  emailjs
  .send(
    "service_5e8e4t1", // your EmailJS Service ID
    "template_y5fjtff", // your EmailJS Template ID
    {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    },
    "khKnPf4AdZCp5_vx7" // your EmailJS Public Key
    )
  .then(
    () => {
      alert("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    },
    (error) => {
      console.error("❌ Email send error:", error);
      alert("Something went wrong, please try again later.");
    }
    );
};




return (
  <div className="min-h-screen bg-[#121212] text-white">
    {/* Navigation */}
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#121212] backdrop-blur-md border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-center gap-1 nav-wave">
          {/*{navItems.map((item, index) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors rounded-lg"
            >
              {item}
            </button>
            ))}*/}
          {navItems.map((item, index) => (
            item.path ? (
              <Link
                key={item.name}
                to={item.path}
                className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors rounded-lg"
              >
                {item.name}
              </Link>
            ) : (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.name.toLowerCase())}
                className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors rounded-lg"
              >
                {item.name}
              </button>
            )
          ))}

        </div>
      </div>
    </nav>



    {/* Hero Section */}
    <section id="intro" className="pt-28 pb-12 px-6">
      <div className="max-w-3xl mx-auto">
      {/* Top Row: Name and Button */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-[2rem] font-semibold text-gray-100 leading-tight">
              Ashmit Garg
            </h1>
            <p className="text-lg text-gray-400 mt-1 text-left">Software Engineer</p>
            <p className="text-gray-500 flex items-center gap-2 mt-1">
              <MapPin size={14} />
              Bengaluru, India
            </p>
          </div>
          <div className = " h-24 items-end flex">
            <a
              href="/Ashmit_Garg_CV.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-md text-sm text-gray-200 hover:text-white hover:border-gray-400 hover:bg-gray-800 hover:-translate-y-0.5 transition-all duration-200"
            >
              <Download size={15} />
              <span className="font-medium">Download CV</span>
            </a>


          </div>

        </div>

  {/* Links Row */}
        <div className="flex justify-between items-center border-t border-gray-800 pt-3 text-sm">
          <a
            href="mailto:gargashmit09@gmail.com"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors no-underline"
          >
            <Mail size={15} />
            gargashmit09@gmail.com
          </a>

          <div className="flex items-center gap-6">
            <a
              href="https://x.com/gargashtwt" target="_blank"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors no-underline"
            >
              <Twitter size={15} />
              Twitter
            </a>
            <a
              href="https://www.linkedin.com/in/ashmit-garg/" target="_blank"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors no-underline"
            >
              <Linkedin size={15} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* About Section */}
    <section id="about" className="py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl text-left font-[600] mb-8">About me</h2>
        <div className="space-y-6 text-[16px] font-[400] leading-[1.4em] text-gray-400 text-left">
          <p>
            I’m a backend-focused Software Engineer. I design and develop robust microservices using Java and Spring Boot. My work includes enhancing system reliability through CI/CD pipeline automation, improving observability, and optimizing deployment workflows to accelerate release cycles.
          </p>
          <p>
            I enjoy solving real-world problems with clean architecture and scalable solutions.  I'm particularly drawn to high-impact systems work, cross-functional collaboration, and continuous learning in fast-paced environments.
          </p>
        </div>
      </div>
    </section>

    {/* Projects Section */}
    <section id="work" className="py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-2xl font-[600]">Some of my projects</h2>
          <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            View all <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg h-[350px] overflow-hidden border border-gray-800 hover:border-gray-700 transition-all cursor-pointer no-underline"
            >
              <div className="aspect-video flex items-center justify-center bg-[#181818] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${
                    project.image.endsWith('.svg')
                    ? 'object-contain p-6 bg-[#181818]'
                    : 'object-cover'
                  }`}
                />
              </div>
              <div className="p-6 flex h-32 justify-between items-center">
                <div>
                  <h3 className="text-xl text-left font-semibold mb-1">{project.title}</h3>
                  <p className="text-gray-500 text-left">{project.subtitle}</p>
                </div>
                <ArrowRight className="text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </div>
            </a>
            ))}
        </div>
      </div>
    </section>


    {/* Experience Section */}
    <section id="experience" className="py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-2 border-[#363636] pl-6 relative">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-gray-500 text-sm mb-2 flex items-center gap-2">
                    <MapPin size={14} />
                    {exp.location}
                  </p>
                  <h3 className="text-lg font-[600] mb-1">{exp.company}</h3>
                  <p className="text-gray-400 text-left">{exp.role}</p>
                </div>
                <span className="text-gray-500">{exp.period}</span>
              </div>
              <ul className="space-y-3 mt-6">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="text-gray-400 text-left leading-relaxed flex gap-3">
                    <span className="text-gray-600">•</span>
                    <span>{achievement}</span>
                  </li>
                  ))}
              </ul>
            </div>
            ))}
        </div>
      </div>
    </section>

    {/* Education Section */}
    <section id="education" className="py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Education</h2>
        <div className="space-y-12">
          {education.map((edu, index) => (
            <div key={index} className="border-l-2 border-[#363636] pl-6 relative">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-gray-500 text-sm mb-2 flex items-center gap-2">
                    <MapPin size={14} />
                    {edu.location}
                  </p>
                  <h3 className="text-2xl font-semibold mb-1">{edu.degree}</h3>
                  <p className="text-gray-400 text-left">{edu.school}</p>
                </div>
                <span className="text-gray-500">{edu.period}</span>
              </div>
            </div>
            ))}
        </div>
      </div>
    </section>

    {/* Stack Section */}
    <section id="stack" className="py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Stack</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stack.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-5 p-6 bg-[#181818] rounded-xl border border-gray-800 hover:border-gray-600 hover:bg-[#1e1e1e] transition-all duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"
            >
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center ">
                <img
                  src={item.logo}
                  alt={item.name}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-white mb-1 flex items-center gap-2">
                  {item.name}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
            ))}
        </div>
      </div>
    </section>


    {/* Articles Section */}
    {/*<section id="blog" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold">Articles & publications</h2>
          <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            View all posts <ExternalLink size={16} />
          </a>
        </div>
        <div className="space-y-8">
          {articles.map((article, index) => (
            <div key={index} className="flex gap-6 group cursor-pointer">
              <div className="w-72 h-48 rounded-xl overflow-hidden flex-shrink-0">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-gray-300 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4">{article.publication}</p>
                <p className="text-gray-400 mb-4">{article.description}</p>
                <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  Read article <ExternalLink size={16} />
                </a>
              </div>
            </div>
            ))}
        </div>
      </div>
    </section>
*/}

    <ReadingSection />

    {/* Contact Section */}
    <section id="contact" className="py-20 px-6 border-t border-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Let's talk</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
    {/* Left side */}
          <div className="border-r border-gray-800 pr-8">
{/* IST time + date */}
            <div className="mb-8">
              <p className="text-gray-500 mb-2 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span>
                  Time for me:{" "}
                  <span className="text-white font-semibold">{currentTime}</span>
                </span>
              </p>
            </div>

            <div className="space-y-6 text-sm">
  {/* Email */}
              <div className="grid grid-cols-[100px_1fr] items-center">
                <h3 className="text-base text-left font-semibold text-white">Email:</h3>
                <a
                  href="mailto:gargashmit09@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Mail size={18} />
                  gargashmit09@gmail.com
                </a>
              </div>

  {/* Socials */}
              <div className="grid grid-cols-[100px_1fr] items-start">
                <h3 className="text-base font-semibold text-left text-white">Socials:</h3>
                <div className="space-y-2">
                  <a
                    href="https://x.com/gargashtwt" target="_blank"
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <Twitter size={18} />
                    Twitter
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ashmit-garg/" target="_blank"
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <Linkedin size={18} />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>


    {/* Right side */}
          <div className="pl-2">
            <h3 className="text-lg font-semibold mb-4 text-white">Reach out:</h3>
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your name"
                className="w-full px-4 py-3 bg-[#181818] border border-gray-700 rounded-lg focus:outline-none focus:border-gray-500 text-white placeholder-gray-500 transition-colors"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email address"
                className="w-full px-4 py-3 bg-[#181818] border border-gray-700 rounded-lg focus:outline-none focus:border-gray-500 text-white placeholder-gray-500 transition-colors"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Message"
                rows="6"
                className="w-full px-4 py-3 bg-[#181818] border border-gray-700 rounded-lg focus:outline-none focus:border-gray-500 text-white placeholder-gray-500 transition-colors resize-none"
              ></textarea>
                <button
                  onClick={handleSubmit}
                  className="w-full py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>




    {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center text-gray-500">
          <p>© 2024 Ashmit Garg. All rights reserved.</p>
        </div>
      </footer>
    </div>
    );
}