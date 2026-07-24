import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true }
  };

  const softSkills = ['Attention to Detail', 'Analytical Thinking', 'Clear Communication', 'Team Collaboration', 'Willingness to Learn'];

  return (
    <section id="about" className="py-28 bg-[#0d0d14]">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12">
          {/* Left Column */}
          <motion.div 
            className="card-base p-6 relative overflow-hidden h-fit"
            {...fadeIn}
          >
            <img 
              src="/profile.jpg" 
              alt="Vaishnavi Shinde" 
              className="w-24 h-24 rounded-full object-cover border-2 border-[#f0c674]/30 mx-auto" 
            />
            <h3 className="font-display text-xl font-bold mt-4 text-center text-[#f0ede8]">Vaishnavi Shinde</h3>
            <p className="text-sm text-muted text-center mt-1">Frontend Developer · M.Sc. CS</p>
            
            <div className="h-px bg-[#f0c674]/10 my-5"></div>
            
            <div className="space-y-1">
              <div className="flex items-center gap-3 py-2.5 text-sm text-[#f0ede8]">
                <svg className="w-4 h-4 text-[#f0c674]/60 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                Pune, Maharashtra
              </div>
              <div className="flex items-center gap-3 py-2.5 text-sm text-[#f0ede8]">
                <svg className="w-4 h-4 text-[#f0c674]/60 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                9860592488
              </div>
              <div className="flex items-center gap-3 py-2.5 text-xs text-[#f0ede8] break-all">
                <svg className="w-4 h-4 text-[#f0c674]/60 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                shindevaishnavi022003@gmail.com
              </div>
              <div className="flex items-center gap-3 py-2.5 text-sm text-[#f0ede8]">
                <svg className="w-4 h-4 text-[#f0c674]/60 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>
                Savitribai Phule Pune University
              </div>
              <a href="https://github.com/vaishh002" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 py-2.5 text-sm text-[#f0ede8] hover:text-[#f0c674] transition-colors">
                <svg className="w-4 h-4 text-[#f0c674]/60 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" /></svg>
                github.com/vaishh002
              </a>
            </div>
            
            <div className="mt-6 flex items-center gap-2 pt-4 border-t border-[#f0c674]/10">
              <span className="w-2 h-2 rounded-full bg-[#5de4c7] animate-pulse flex-shrink-0"></span>
              <span className="text-xs text-[#5de4c7]/80">Open to internships & entry-level roles</span>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            className="flex flex-col justify-center"
            {...fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="eyebrow w-fit">About Me</div>
            <h2 className="heading-display mt-4 mb-6">
              Building the web, <span className="italic text-[#f0c674]">one component</span> at a time
            </h2>
            
            <div className="text-muted leading-relaxed space-y-4">
              <p>
                Frontend developer with <strong className="text-[#f0ede8] font-medium">4+ months of hands-on internship experience</strong>, currently completing my M.Sc. in Computer Science at Savitribai Phule Pune University.
              </p>
              <p>
                Skilled in building <strong className="text-[#f0ede8] font-medium">responsive, component-based UIs</strong> using HTML, CSS, JavaScript, and React. Passionate about translating Figma designs into pixel-perfect, performant interfaces that work seamlessly across all devices.
              </p>
              <p>
                I thrive in team environments, have contributed to multiple real-world projects during my internship, and love the challenge of turning complex requirements into elegant frontend solutions.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-8">
              {softSkills.map((skill, index) => (
                <span key={index} className="tag-pill">{skill}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
