
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Terminal, Shield, Book } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-cyber-darker border-b border-cyber-neon-green/30 py-4 px-6 sticky top-0 z-40">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Terminal className="h-6 w-6 text-cyber-neon-green" />
          <span className="text-xl font-bold text-cyber-neon-green glitch" data-text="JXROGUE">
            JXROGUE
          </span>
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-cyber-neon-green hover:text-cyber-neon-pink"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-cyber-text hover:text-cyber-neon-green transition-colors">
            Home
          </Link>
          <Link to="/tools" className="text-cyber-text hover:text-cyber-neon-green transition-colors">
            Tools
          </Link>
          <Link to="/blog" className="text-cyber-text hover:text-cyber-neon-green transition-colors">
            Blog
          </Link>
          <Link to="/about" className="text-cyber-text hover:text-cyber-neon-green transition-colors">
            About
          </Link>
          <Link to="/contact" className="cyber-button">
            Contact
          </Link>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-cyber-dark border-b border-cyber-neon-green/30 md:hidden">
            <div className="flex flex-col p-4 space-y-4">
              <Link 
                to="/" 
                className="text-cyber-text hover:text-cyber-neon-green transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/tools" 
                className="text-cyber-text hover:text-cyber-neon-green transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Tools
              </Link>
              <Link 
                to="/blog" 
                className="text-cyber-text hover:text-cyber-neon-green transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/about" 
                className="text-cyber-text hover:text-cyber-neon-green transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="cyber-button text-center"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
