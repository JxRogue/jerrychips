
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Mail, Terminal, Shield, Code, Skull, Crosshair } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cyber-dark border-t border-cyber-neon-green/30 py-8 mt-16 relative overflow-hidden">
      {/* Digital dust particles */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div 
            key={i}
            className="absolute bg-cyber-neon-green/20"
            style={{
              width: Math.random() * 3 + 'px',
              height: Math.random() * 3 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `pulse ${Math.random() * 3 + 2}s infinite alternate`,
              animationDelay: `${Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Skull className="h-6 w-6 text-cyber-neon-green animate-text-flicker" />
              <span className="text-xl font-bold text-cyber-neon-green glitch" data-text="JxRogue">JxRogue</span>
            </div>
            <p className="text-cyber-text/80 max-w-md">
              Making security controls irrelevant since 2018. If you can't break it, you don't understand it.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://github.com/JxRogue" className="text-cyber-text hover:text-cyber-neon-green transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://twitter.com" className="text-cyber-text hover:text-cyber-neon-green transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="mailto:contact@jxrogue.com" className="text-cyber-text hover:text-cyber-neon-green transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-cyber-neon-green text-lg font-semibold mb-4">Navigation Matrix</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-cyber-text hover:text-cyber-neon-green transition-colors group flex items-center gap-2">
                  <span className="w-0 group-hover:w-2 h-px bg-cyber-neon-green transition-all duration-300"></span>
                  <span>Homebase</span>
                </Link>
              </li>
              <li>
                <Link to="/tools" className="text-cyber-text hover:text-cyber-neon-green transition-colors group flex items-center gap-2">
                  <span className="w-0 group-hover:w-2 h-px bg-cyber-neon-green transition-all duration-300"></span>
                  <span>Arsenal</span>
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-cyber-text hover:text-cyber-neon-green transition-colors group flex items-center gap-2">
                  <span className="w-0 group-hover:w-2 h-px bg-cyber-neon-green transition-all duration-300"></span>
                  <span>Neural Dumps</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-cyber-text hover:text-cyber-neon-green transition-colors group flex items-center gap-2">
                  <span className="w-0 group-hover:w-2 h-px bg-cyber-neon-green transition-all duration-300"></span>
                  <span>Identity</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-cyber-text hover:text-cyber-neon-green transition-colors group flex items-center gap-2">
                  <span className="w-0 group-hover:w-2 h-px bg-cyber-neon-green transition-all duration-300"></span>
                  <span>Dead Drop</span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-cyber-neon-green text-lg font-semibold mb-4">Weapons Cache</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/tools/payload-obfuscator" className="text-cyber-text hover:text-cyber-neon-green transition-colors group flex items-center">
                  <Crosshair size={14} className="mr-2 text-cyber-neon-green/70" />
                  <span>PolyMorphic Engine</span>
                </Link>
              </li>
              <li>
                <Link to="/tools/traffic-analyzer" className="text-cyber-text hover:text-cyber-neon-green transition-colors group flex items-center">
                  <Crosshair size={14} className="mr-2 text-cyber-neon-green/70" />
                  <span>Phantom Traffic Manipulator</span>
                </Link>
              </li>
              <li>
                <Link to="/tools/crypto-toolkit" className="text-cyber-text hover:text-cyber-neon-green transition-colors group flex items-center">
                  <Crosshair size={14} className="mr-2 text-cyber-neon-green/70" />
                  <span>CryptoBreaker Arsenal</span>
                </Link>
              </li>
              <li>
                <Link to="/tools/vulnerability-scanner" className="text-cyber-text hover:text-cyber-neon-green transition-colors group flex items-center">
                  <Crosshair size={14} className="mr-2 text-cyber-neon-green/70" />
                  <span>NightShade Scanner</span>
                </Link>
              </li>
              <li>
                <Link to="/tools/social-engineering" className="text-cyber-text hover:text-cyber-neon-green transition-colors group flex items-center">
                  <Crosshair size={14} className="mr-2 text-cyber-neon-green/70" />
                  <span>MindHack Framework</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-cyber-neon-green/20 mt-8 pt-6 text-center text-cyber-text/60">
          <p>&copy; {currentYear} JxRogue | All systems vulnerable</p>
          <p className="text-xs mt-2 text-cyber-text/40 font-mono">[root@jxrogue]# The quieter you become, the more you can hear.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
