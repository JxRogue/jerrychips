
import React from 'react';
import Layout from '../components/layout/Layout';
import { Terminal, Shield, Code, BookOpen, Skull, Zap, Award } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <div className="inline-block p-4 rounded-full bg-cyber-dark border border-cyber-neon-green/30 mb-6">
            <Skull size={64} className="text-cyber-neon-green" />
          </div>
          <h1 className="text-4xl font-bold text-cyber-neon-green mb-4">Subject: JxRogue</h1>
          <p className="text-cyber-text/80 max-w-2xl mx-auto">
            Digital arms dealer, exploit artist, and security system nightmare.
          </p>
        </header>
        
        <section className="cyber-container mb-12">
          <h2 className="text-2xl font-bold text-cyber-neon-green mb-6">Operational Directive</h2>
          <p className="text-cyber-text/90 mb-6">
            I operate with a singular focus: to push the boundaries of offensive security through the development of next-generation exploitation tools that render conventional security measures obsolete.
          </p>
          <p className="text-cyber-text/90 mb-6">
            After years of operating within the constraints of "responsible disclosure" and corporate red team operations, I've gone rogue to serve the true offensive security community. Security advancement doesn't come from comfortable compliance - it comes from relentless innovation at the bleeding edge.
          </p>
          <p className="text-cyber-text/90">
            My tools aren't built for script kiddies. They're precision instruments for professionals who understand that to truly secure a system, you must first be able to completely compromise it.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyber-neon-green mb-6">Operational Parameters</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="cyber-card flex flex-col">
              <div className="text-cyber-neon-blue mb-4">
                <Code size={32} />
              </div>
              <h3 className="text-xl font-semibold text-cyber-neon-green mb-3">Superior Craft</h3>
              <p className="text-cyber-text/80 mb-4 flex-grow">
                Each tool I release is precision-engineered to execute its purpose with mathematical elegance. Nothing is cobbled together - everything is crafted.
              </p>
            </div>
            
            <div className="cyber-card flex flex-col">
              <div className="text-cyber-neon-blue mb-4">
                <Zap size={32} />
              </div>
              <h3 className="text-xl font-semibold text-cyber-neon-green mb-3">Offensive Focus</h3>
              <p className="text-cyber-text/80 mb-4 flex-grow">
                My tools aren't neutered to protect the feelings of security vendors. They're built to execute with maximum impact against target environments.
              </p>
            </div>
            
            <div className="cyber-card flex flex-col">
              <div className="text-cyber-neon-blue mb-4">
                <Terminal size={32} />
              </div>
              <h3 className="text-xl font-semibold text-cyber-neon-green mb-3">Technical Superiority</h3>
              <p className="text-cyber-text/80 mb-4 flex-grow">
                I implement bleeding-edge techniques that most security researchers won't discover for years. My tools don't just keep pace - they set the pace.
              </p>
            </div>
            
            <div className="cyber-card flex flex-col">
              <div className="text-cyber-neon-blue mb-4">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-semibold text-cyber-neon-green mb-3">Elite Clientele</h3>
              <p className="text-cyber-text/80 mb-4 flex-grow">
                My tools are designed for the top 1% of offensive security professionals. If you understand their power, you're qualified to use them.
              </p>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyber-neon-green mb-6">The Operator</h2>
          
          <div className="cyber-container">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-32 h-32 rounded-full bg-cyber-dark border border-cyber-neon-green/50 flex items-center justify-center">
                <div className="text-cyber-neon-green text-3xl font-mono">JxR</div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-cyber-neon-green mb-2">JxRogue</h3>
                <p className="text-cyber-neon-blue mb-4">Digital Warfare Specialist</p>
                <p className="text-cyber-text/80 mb-4">
                  Savvy strategist with over 7 years of experience breaking security systems with surgical precision. 
                  Specialized in binary exploitation, custom malware development, and evasion techniques that make detection engines weep.
                </p>
                <div className="flex gap-4">
                  <a href="https://github.com/JxRogue" target="_blank" rel="noopener noreferrer" className="text-cyber-neon-green hover:text-cyber-neon-blue transition-colors">Command Center</a>
                  <a href="#" className="text-cyber-neon-green hover:text-cyber-neon-blue transition-colors">Dead Drop</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyber-neon-green mb-6">Operational Philosophy</h2>
          
          <div className="space-y-6">
            <p className="text-cyber-text/90">
              My approach to offensive security follows these principles:
            </p>
            
            <ul className="list-disc list-inside text-cyber-text/80 space-y-4 pl-4">
              <li>
                <span className="text-cyber-neon-blue font-semibold">Maximum Impact</span> - 
                Every tool I create is designed to execute with devastating effectiveness. Half-measures are for amateurs.
              </li>
              <li>
                <span className="text-cyber-neon-blue font-semibold">Technical Elegance</span> - 
                Brute force is boring. My exploits leverage sophisticated techniques that target fundamental weaknesses in system design.
              </li>
              <li>
                <span className="text-cyber-neon-blue font-semibold">Operational Secrecy</span> - 
                The most powerful exploits are the ones that operate undetected. My tools prioritize stealth as a core feature.
              </li>
              <li>
                <span className="text-cyber-neon-blue font-semibold">Knowledge Transfer</span> - 
                I document my methodologies not to brag, but to elevate the entire field. True excellence requires competition.
              </li>
            </ul>
          </div>
        </section>
        
        <section className="cyber-container text-center py-10">
          <h2 className="text-2xl font-bold text-cyber-neon-green mb-6">Work With Me</h2>
          <p className="text-cyber-text/90 mb-8 max-w-xl mx-auto">
            I selectively collaborate with organizations and individuals who understand the value of 
            offensive security expertise. If you're facing a challenge that conventional security 
            can't solve, we should talk.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://github.com/JxRogue" 
              className="cyber-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Command Center
            </a>
            <a 
              href="mailto:contact@jxrogue.com" 
              className="cyber-button"
            >
              Establish Connection
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
