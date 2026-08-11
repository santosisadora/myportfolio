import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle, Download } from 'lucide-react';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const Contact = () => {
  const contactLinks = [
    {
      name: "LinkedIn",
      value: "isadora-santos-",
      url: "https://www.linkedin.com/in/isadora-santos-/",
      icon: <LinkedinIcon />,
      color: "hover:text-[#0a66c2]"
    },
    {
      name: "GitHub",
      value: "santosisadora",
      url: "https://github.com/santosisadora",
      icon: <GithubIcon />,
      color: "hover:text-gray-300"
    },
    {
      name: "Email",
      value: "isadorasantos.dev@gmail.com",
      url: "mailto:isadorasantos.dev@gmail.com",
      icon: <Mail className="w-6 h-6" />,
      color: "hover:text-red-400"
    },
    {
      name: "WhatsApp",
      value: "@isadora.sass",
      url: "https://wa.me/14389348285",
      icon: <MessageCircle className="w-6 h-6" />,
      color: "hover:text-[#25D366]"
    },
    {
      name: "Phone",
      value: "+1 438 934 8285",
      url: "tel:+14389348285",
      icon: <Phone className="w-6 h-6" />,
      color: "hover:text-primary"
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 relative z-10 bg-gray-950/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full shadow-[0_0_10px_rgba(0,240,255,0.5)]"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            I'm currently open for new opportunities. Whether you have a question or just want to say hi, feel free to connect!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`glass glass-hover rounded-xl p-6 flex flex-col items-center justify-center gap-4 text-center group cursor-pointer transition-all duration-300 ${link.color}`}
            >
              <div className="p-4 bg-gray-800/50 rounded-full group-hover:bg-gray-800 transition-colors">
                {link.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">{link.name}</h3>
                <p className="text-sm text-gray-400 group-hover:text-white transition-colors">{link.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center flex justify-center"
        >
          <a
            href="/resume.pdf"
            download
            className="group flex items-center gap-2 px-8 py-4 bg-primary/10 border border-primary/50 text-primary font-bold rounded-lg hover:bg-primary hover:text-black transition-all hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]"
          >
            <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Download Resumé
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
