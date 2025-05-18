
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { Terminal, Shield, FileCode, Database, Key, Skull, Code, Zap, Award, Coffee } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section - Personal Profile */}
      <section className="py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-block mb-2 bg-cyber-dark/50 px-3 py-1 rounded-full border border-cyber-neon-green/30">
              <span className="text-cyber-neon-green text-sm">Digital Warfare Specialist</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="text-white">I am </span>
              <span className="text-cyber-neon-green animate-text-flicker">JxRogue</span>
              <span className="text-cyber-neon-pink inline-block">/</span>
              <span className="text-cyber-neon-blue">0xD34D5EC</span>
            </h1>
            <p className="text-lg text-cyber-text/90 max-w-lg">
              Savvy strategist in the world of digital warfare with 7+ years of breaking security systems with surgical precision. No payload too complex. No defense unbreakable.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="cyber-button">
                Establish Connection
              </Link>
              <Link to="/tools" className="border border-cyber-neon-green/50 text-cyber-text hover:text-cyber-neon-green px-6 py-3 rounded transition-colors">
                Access Arsenal
              </Link>
            </div>
          </div>
          <div className="cyber-container h-[400px] flex items-center justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-cyber-neon-green/10 text-cyber-neon-green p-2 text-xs font-mono">
              JxRogue@terminus:~#
            </div>
            <div className="terminal-output h-full w-full overflow-y-auto p-4">
              <div className="mb-2 text-cyber-neon-green">JxRogue@terminus:~# <span className="text-white">whoami</span></div>
              <div className="mb-4">digital_warfare_specialist:level=supreme</div>
              <div className="mb-2 text-cyber-neon-green">JxRogue@terminus:~# <span className="text-white">cat profile.tx_</span></div>
              <div className="mb-1">Name: JxRogue</div>
              <div className="mb-1">Status: Weaponizing code since 2018</div>
              <div className="mb-1">Specialties: Binary Exploitation, Zero-Day Research, Custom Implants</div>
              <div className="mb-1">Threat Level: Maximum</div>
              <div className="mb-1">Current Target: Your outdated security model</div>
              <div className="mb-4">Motto: "I don't find vulnerabilities. I make them features."</div>
              <div className="mb-2 text-cyber-neon-green">JxRogue@terminus:~# <span className="text-white">sudo ./access_arsenal</span></div>
              <div className="mb-1">[sudo] password for JxRogue: ••••••••••••</div>
              <div className="mb-1">Authenticating nuclear launch codes...</div>
              <div className="mb-1">Bypassing mainframe security...</div>
              <div className="mb-1">Disabling countermeasures...</div>
              <div className="mb-1">Accessing classified tools...</div>
              <div className="mb-1">Armory unlocked. Welcome back, JxRogue.</div>
              <div className="inline-block text-cyber-neon-green">JxRogue@terminus:~# <span className="after:content-['_'] after:animate-terminal-cursor"></span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Experience */}
      <section className="py-16">
        <div className="cyber-container">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-cyber-neon-green h-8 w-1"></div>
            <h2 className="text-3xl font-bold text-white">Tactical <span className="text-cyber-neon-green">Arsenal</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-cyber-neon-blue mb-4">Specialized Operations</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="text-cyber-neon-green mt-1"><Code size={20} /></div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Zero-Day Weaponization</h4>
                    <p className="text-cyber-text/80">Crafting bespoke exploits that slip through your most advanced defense systems like they don't exist.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="text-cyber-neon-green mt-1"><Skull size={20} /></div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Advanced Persistence Operations</h4>
                    <p className="text-cyber-text/80">Creating implants so sophisticated they become part of your system's expected behavior pattern.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="text-cyber-neon-green mt-1"><Zap size={20} /></div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Attack Surface Expansion</h4>
                    <p className="text-cyber-text/80">Finding creative entry points in supposedly "hardened" systems that your security team never imagined possible.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="text-cyber-neon-green mt-1"><Coffee size={20} /></div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Caffeine-Powered Exploitation</h4>
                    <p className="text-cyber-text/80">Converting dangerous amounts of energy drinks into memory corruption exploits since 2018.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-cyber-neon-blue mb-4">Warfare Timeline</h3>
              <div className="space-y-6">
                <div className="border-l-2 border-cyber-neon-green/40 pl-4 py-2">
                  <div className="text-xs text-cyber-neon-green mb-1">2022 - PRESENT</div>
                  <h4 className="text-lg font-medium text-white">Independent Digital Mercenary</h4>
                  <p className="text-cyber-text/80">Breaking elite security products for fun and profit. Building tools that make security engineers question their career choices.</p>
                </div>
                <div className="border-l-2 border-cyber-neon-green/40 pl-4 py-2">
                  <div className="text-xs text-cyber-neon-green mb-1">2019 - 2022</div>
                  <h4 className="text-lg font-medium text-white">Offensive Specialist</h4>
                  <p className="text-cyber-text/80">Led surgical strikes against Fortune 100 companies. Found critical weaknesses their million-dollar security stacks missed.</p>
                </div>
                <div className="border-l-2 border-cyber-neon-green/40 pl-4 py-2">
                  <div className="text-xs text-cyber-neon-green mb-1">2018 - 2019</div>
                  <h4 className="text-lg font-medium text-white">Digital Locksmith</h4>
                  <p className="text-cyber-text/80">Discovered my talent for making any system unlock itself with just a whisper of carefully crafted bytecode.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects/Tools */}
      <section className="py-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-cyber-neon-pink h-8 w-1"></div>
          <h2 className="text-3xl font-bold text-white">Weaponized <span className="text-cyber-neon-pink">Arsenal</span></h2>
        </div>
        
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-6" style={{ minWidth: 'max-content' }}>
            <div className="cyber-card w-[300px]">
              <div className="text-cyber-neon-green mb-4">
                <FileCode size={24} />
              </div>
              <h3 className="text-lg font-semibold text-cyber-neon-green mb-2">PolyMorphic Engine</h3>
              <p className="text-cyber-text/80 text-sm mb-4">
                My signature payload generator that shifts its structure like quantum particles - making detection practically impossible.
              </p>
              <Link to="/tools/payload-obfuscator" className="text-cyber-neon-green text-sm hover:text-cyber-neon-blue transition-colors">
                Access weapon →
              </Link>
            </div>
            
            <div className="cyber-card w-[300px]">
              <div className="text-cyber-neon-green mb-4">
                <Database size={24} />
              </div>
              <h3 className="text-lg font-semibold text-cyber-neon-green mb-2">Phantom Traffic Manipulator</h3>
              <p className="text-cyber-text/80 text-sm mb-4">
                Network traffic analysis and manipulation tool that even the NSA wishes they had in their arsenal.
              </p>
              <Link to="/tools/traffic-analyzer" className="text-cyber-neon-green text-sm hover:text-cyber-neon-blue transition-colors">
                Access weapon →
              </Link>
            </div>
            
            <div className="cyber-card w-[300px]">
              <div className="text-cyber-neon-green mb-4">
                <Key size={24} />
              </div>
              <h3 className="text-lg font-semibold text-cyber-neon-green mb-2">CryptoBreaker Arsenal</h3>
              <p className="text-cyber-text/80 text-sm mb-4">
                Makes supposedly uncrackable encryption fold like a house of cards with mathematical precision.
              </p>
              <Link to="/tools/crypto-toolkit" className="text-cyber-neon-green text-sm hover:text-cyber-neon-blue transition-colors">
                Access weapon →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Some Articles */}
      <section className="py-16">
        <div className="cyber-container">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-3">
              <div className="bg-cyber-neon-blue h-8 w-1"></div>
              <h2 className="text-3xl font-bold text-white">Neural <span className="text-cyber-neon-blue">Dumps</span></h2>
            </div>
            <Link to="/blog" className="text-cyber-neon-blue hover:text-cyber-neon-green transition-colors">
              All transmissions →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 gap-8">
            <div className="cyber-card hover:border-cyber-neon-blue transition-colors duration-300">
              <div className="text-cyber-neon-blue mb-2">June 15, 2025</div>
              <h3 className="text-xl font-semibold text-cyber-neon-green mb-3">
                Engineering a Polymorphic Payload Engine: Breaking Detection Algorithms
              </h3>
              <p className="text-cyber-text/80 mb-4">
                How I spent three months obsessively disassembling AV engines to create a payload generation framework that gives malware analysts existential crises.
              </p>
              <Link to="/blog/payload-obfuscator-development" className="text-cyber-neon-blue hover:text-cyber-neon-green transition-colors">
                Access Research Data →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <div className="cyber-container text-center">
          <h2 className="text-3xl font-bold text-cyber-neon-green mb-6">Ready to Hack the Planet?</h2>
          <p className="text-cyber-text/80 max-w-lg mx-auto mb-8">
            Whether you need specialized offensive tools, have an interesting security challenge, or just want to talk shop over virtual burner phones, I'm always up for digital mayhem.
          </p>
          <Link to="/contact" className="cyber-button inline-block">
            Establish Connection
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
