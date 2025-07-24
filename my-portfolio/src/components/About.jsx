
import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const skills = ['Microsoft Azure', 'Entra ID', '.NET MAUI', '.NET', 'ASP.NET', 'Blazor', 'React', 'Rust', 'Typescript',
    'JavaScript', 'Java', 'Grafana', 'Prometheus', 'AI/ML Fundamentals', 'C#', 'C',
    'C++', 'GitHub Actions', 'Docker', 'Docker Compose', 'Python', 'PyTorch', 'PostgreSQL', 'SQLite', 'Git', 
    'Linux', 'Windows', 'MacOS', 'Android', 'CI/CD', 'Agile', 'Kanban', 'Jira', 'Slack', 
    'PowerShell Scripting', 'Bash Scripting', 'REST', 'TLS', 'OpenSSL',]
     
     
  const certifications = [
    { name: 'Microsoft Certified: Azure AI Fundamentals (AI-900)', progress: 75, status: 'In Progress' },
    { name: 'Microsoft Certified: Azure Developer Associate (AZ-204)', progress: 75, status: 'In Progress' },
    { name: 'Microsoft Certified: Azure Fundamentals (AZ-900)', progress: 100, status: 'Completed' }
  ];

  const ProgressBar = ({ progress, className = "" }) => (
    <div className={`w-full bg-gray-700 rounded-full h-2 overflow-hidden ${className}`}>
      <motion.div
        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 rounded-full relative overflow-hidden"
        initial={{ width: 0 }}
        whileInView={{ width: `${progress}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        {/* Animated shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{
            x: ['-100%', '100%']
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3,
            ease: "linear"
          }}
        />
      </motion.div>
    </div>
  );
  
  return (
    <section id="about" className="py-20 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-16 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent">Me</span>
        </motion.h2>
        
        {/* Introduction Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8">
            <p className="text-gray-300 text-lg leading-relaxed text-center max-w-5xl mx-auto">
              Software Engineer with a focus on Cloud Application Development through Microsoft's Software and Systems Academy (MSSA). Three years of experience honing programming skills in multiple languages. Air Force veteran with an Active DoD Secret Security Clearance, transitioning from active service on 1 September 2025. Open to opportunities on the East Coast.
            </p>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Military Background & Highlights */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          > 
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-blue-400 flex items-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Military Background
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I served in the United States Air Force for 12 years as a Civil Engineering Craftsman. I learned to build and maintain infrastructure in fast-paced and high-stress environments. I have been trained in Autodesk AutoCAD, AutoCAD Civil 3D, ESRI ArcGIS, contract management, and project management.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Over my time in the service, I have developed a strong work ethic and commitment to ensuring the highest quality products and services.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-blue-400 flex items-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                Key Achievements
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Completed Microsoft's 17-week full-time Software & Systems Academy (Cloud Application Development). 
                    Daily schedule: 8 hours lecture/labs, weekly sprints, Azure-deployed capstone.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Managed multiple Air Force Construction Projects across various bases in different countries, totalling significant infrastructure improvements</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Certified in Contingency Airfield Pavement Evaluation, performing analysis and certification of mission critical airfields across 2 continents</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Oversaw surveying implementation and improvement of multiple GIS capabilities/Geodatabases housing thousands of Geospatial data sets</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Led the deployment of essential personnel and equipment for multiple Air Force missions</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Education & Certifications */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-blue-400 flex items-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Education
              </h3>
              <div className="space-y-4 mb-4 mr-0">
                <div className="border border-gray-700/30 rounded-lg p-4 hover:border-blue-500/30 transition-colors duration-150 ease-out">
                  <div className='flex flex-row justify-between'>
                  <div className='flex flex-col'>
                   <h4 className="text-white font-semibold">Masters of Science in Software Engineering</h4>
                   <p className="text-blue-400 text-sm">Regis University</p>
                  </div>
                  <div className='flex flex-col ml-10'>
                  <span className=" border border-blue-500/30 text-center px-2 py-1 ml-3 rounded-full bg-blue-500/10 mb-2 text-sm">GPA: 4.0</span>
                  <p className="text-blue-400 text-sm">Expected: 2028</p>
                  </div>
                  </div>
                </div>
                <div className="border border-gray-700/30 rounded-lg p-4 hover:border-blue-500/30 transition-colors duration-150 ease-out">
                  <div className='flex flex-row justify-between'>
                  <div className='flex flex-col'>
                   <h4 className="text-white font-semibold">Bachelor of Science in Computer Science</h4>
                   <p className="text-blue-400 text-sm">Regis University</p>
                  </div>
                  <div className='flex flex-col ml-10'>
                  <span className=" border border-blue-500/30 text-center px-2 py-1 ml-3 rounded-full bg-blue-500/10 mb-2 text-sm">GPA: 3.7</span>
                  <p className="text-blue-400 text-sm">Expected: 2026</p>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-blue-400 flex items-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    className="border border-gray-700/30 rounded-lg p-4 hover:border-blue-500/30 transition-colors duration-150 ease-out"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}   
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-white font-medium text-sm leading-tight">{cert.name}</h4>
                      <span className={`text-xs px-2 py-1 rounded-full ml-3 flex-shrink-0 ${
                        cert.status === 'Completed' 
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                          : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      }`}>
                        {cert.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <ProgressBar progress={cert.progress} className="flex-1" />
                      <span className="text-blue-400 font-mono text-sm min-w-[3rem]">{cert.progress}%</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Technical Skills Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center justify-center gap-3">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Technical Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  className="bg-blue-500/10 border border-blue-500/30 text-blue-400 px-4 py-2 rounded-full text-sm font-mono hover:bg-blue-500/20 hover:border-blue-500/50 transition-all duration-150 ease-out hover:scale-105"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}