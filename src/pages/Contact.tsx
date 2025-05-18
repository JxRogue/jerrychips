
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { Send, Mail, Github, Link as LinkIcon, Skull, Lock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast({
        title: "Authentication Failed",
        description: "Required data points missing from transmission",
        variant: "destructive"
      });
      return;
    }

    setSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Transmission Received",
        description: "Your message has been encrypted and stored. Standby for response.",
      });
      
      // Reset form
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setSubmitting(false);
    }, 1500);
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyber-dark border border-cyber-neon-green mb-6">
            <Lock className="h-8 w-8 text-cyber-neon-green" />
          </div>
          <h1 className="text-4xl font-bold text-cyber-neon-green mb-4">Secure Channel</h1>
          <p className="text-cyber-text/80 max-w-2xl mx-auto">
            Establish a direct connection to JxRogue. All transmissions are encrypted end-to-end.
          </p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          <div className="md:col-span-3">
            <div className="cyber-container">
              <h2 className="text-2xl font-bold text-cyber-neon-green mb-6">Transmission Data</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-cyber-neon-blue mb-2">Identifier *</label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="cyber-input w-full"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-cyber-neon-blue mb-2">Return Address *</label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="cyber-input w-full"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-cyber-neon-blue mb-2">Operation Classification</label>
                  <input
                    type="text"
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="cyber-input w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-cyber-neon-blue mb-2">Transmission Content *</label>
                  <textarea
                    id="message"
                    rows={6}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="cyber-input w-full"
                    required
                  ></textarea>
                </div>
                
                <div>
                  <button 
                    type="submit"
                    className={`cyber-button flex items-center gap-2 ${submitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                    disabled={submitting}
                  >
                    {submitting ? (
                      <>
                        <div className="animate-spin h-4 w-4 border-2 border-cyber-neon-green border-t-transparent rounded-full"></div>
                        <span>Encrypting...</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Transmit</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <div className="cyber-container h-full">
              <h2 className="text-2xl font-bold text-cyber-neon-green mb-6">Alternate Channels</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail size={24} className="text-cyber-neon-green mt-1" />
                  <div>
                    <h3 className="text-cyber-neon-blue font-semibold mb-1">Encrypted Mail</h3>
                    <a 
                      href="mailto:contact@jxrogue.com" 
                      className="text-cyber-text hover:text-cyber-neon-green transition-colors"
                    >
                      contact@jxrogue.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Github size={24} className="text-cyber-neon-green mt-1" />
                  <div>
                    <h3 className="text-cyber-neon-blue font-semibold mb-1">Command Center</h3>
                    <a 
                      href="https://github.com/JxRogue" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-cyber-text hover:text-cyber-neon-green transition-colors"
                    >
                      github.com/JxRogue
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <LinkIcon size={24} className="text-cyber-neon-green mt-1" />
                  <div>
                    <h3 className="text-cyber-neon-blue font-semibold mb-1">Operations Base</h3>
                    <a 
                      href="https://jxrogue.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-cyber-text hover:text-cyber-neon-green transition-colors"
                    >
                      jxrogue.com
                    </a>
                  </div>
                </div>
                
                <div className="border-t border-cyber-neon-green/20 pt-6 mt-8">
                  <h3 className="text-cyber-neon-blue font-semibold mb-3">OPSEC Notice</h3>
                  <p className="text-cyber-text/80 mb-4">
                    All communications are encrypted using military-grade algorithms. For particularly sensitive matters, consider using PGP encryption or secure drop channels.
                  </p>
                  <div className="cyber-card p-3 text-xs font-mono text-cyber-neon-green/70">
                    <div>PGP: 8F31 D7C8 4F9B 1D91 0429</div> 
                    <div>B039 1759 D496 7D45 9C01</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
