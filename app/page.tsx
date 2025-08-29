"use client";
import { motion } from "framer-motion";
import { FaDiscord, FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Portfolio() {
  return (
    <div className="font-sans scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-md shadow z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-xl font-bold">Rengga X</h1>
          <div className="space-x-6 hidden md:flex">
            <a href="#home" className="hover:text-blue-500">Home</a>
            <a href="#about" className="hover:text-blue-500">About</a>
            <a href="#skills" className="hover:text-blue-500">Skills</a>
            <a href="#projects" className="hover:text-blue-500">Projects</a>
            <a href="#experience" className="hover:text-blue-500">Experience</a>
            <a href="#contact" className="hover:text-blue-500">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-50 to-white">
        <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1,y:0}} transition={{duration:1}} className="text-5xl font-bold">
          Hi, I’m <span className="text-blue-500">M. Rengga Wicaksono</span>
        </motion.h1>
        <p className="mt-4 text-lg text-gray-600">Frontend Developer | Backend Developer</p>
        <div className="flex space-x-6 mt-6 text-2xl">
          <a href="https://github.com/OkeaHas" className="hover:text-blue-500"><FaGithub/></a>
          <a href="https://www.youtube.com/@RenggaX" className="hover:text-blue-500"><FaYoutube/></a>
          <a href="https://discord.gg/n9QNTpadKq" className="hover:text-blue-500"><FaDiscord/></a>
        </div>
        <a href="#projects" className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-full shadow hover:bg-blue-600">See My Work</a>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-2xl text-gray-700 leading-relaxed">
          Halo! Saya Rengga, seorang Minecraft Server & Mod Developer yang saat ini menempuh studi S1 Informatika. Saya memiliki minat besar di bidang game development, web development, Java programming, dan data science. Skill utama saya mencakup Java, HTML, Python, dan JavaScript. Saya terbiasa problem solving, mudah beradaptasi, dan selalu bersemangat untuk belajar hal baru. Selain itu, saya juga menyukai public speaking dan sering belajar sambil mendengarkan musik untuk menjaga fokus. Tujuan saya adalah menjadi seorang software engineer yang berguna bagi banyak orang. Saya ingin berkontribusi dalam membangun startup independen dan menghadirkan solusi digital yang bermanfaat.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-gray-100 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {name: "Java 90%", level: "90%"},
              {name: "JavaScript 85%", level: "85%"},
              {name: "HTML 95%", level: "95%"},
              {name: "CSS 88%", level: "88%"},
            ].map((skill, i) => (
              <div key={i}>
                <p className="font-medium">{skill.name}</p>
                <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
                  <div className="bg-blue-500 h-3 rounded-full" style={{width: skill.level}}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Slimefun Network",
              desc: "Fork Slimefun Network.",
              link: "https://github.com/OkeaHas/Networks2",
              img: "/images/slimefun.png"
            },
            {
              title: "Slimefun Tinker",
              desc: "Fork Slimefun Tinker",
              link: "https://github.com/OkeaHas/SlimeTinker2",
              img: "/images/Slimefun.png"
            },
            {
              title: "Minecraft Mod/Plugin",
              desc: "Tempat Hasil Mod/Plugin Yang Aku Buat",
              link: "https://github.com/OkeaHas/Plugin&Mod",
              img: "/images/Plugin.png"
            }
          ].map((project, i) => (
            <motion.div 
              key={i} 
              whileHover={{scale:1.05}} 
              className="bg-white shadow rounded-xl overflow-hidden"
            >
              {/* Gambar Project */}
              <img 
                src={project.img} 
                alt={project.title} 
                className="h-40 w-full object-cover"
              />
              
              {/* Detail Project */}
              <div className="p-4">
                <h3 className="font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-600">{project.desc}</p>
                <div className="flex space-x-4 mt-3">
                  <a href={project.link} className="text-blue-500 hover:underline">GitHub</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Experience</h2>
          <ul className="space-y-6">
            <li>
              <h3 className="font-semibold">Networking Devices and Initial Configuration - Cisco Networking Academy</h3>
              <p className="text-sm text-gray-600">2024 - Present</p>
              <p className="text-gray-700">Continue learning networking essentials and build foundational skills.</p>
            </li>
            <li>
              <h3 className="font-semibold">IT Essentials 8 - Cisco Networking Academy</h3>
              <p className="text-sm text-gray-600">2024 - Present</p>
              <p className="text-gray-700">practical skills in hardware, software, networking, and security.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-4xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <form action="mailto:your@email.com" method="POST" encType="text/plain" className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-xl"/>
          <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-xl"/>
          <textarea placeholder="Your Message" className="w-full p-3 border rounded-xl h-32"></textarea>
          <button className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-100 text-gray-600">
        © 2025 M. Rengga Wicaksono. All rights reserved.
      </footer>
    </div>
  );
}
