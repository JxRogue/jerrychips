
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { FileCode, Database, Key, Search, Link as LinkIcon, Skull, Crosshair } from 'lucide-react';

const Tools = () => {
  const tools = [
    {
      id: 'payload-obfuscator',
      name: 'PolyMorphic Engine 3.0',
      icon: <FileCode size={24} className="text-cyber-neon-green" />,
      description: 'Advanced multi-stage payload generator with quantum-inspired metamorphic capabilities. Renders traditional detection systems blind.',
      features: [
        'Polymorphic code generation with entropy control',
        'Anti-reverse engineering techniques with VM detection',
        'Customizable multi-stage execution chains',
        'Statistical similarity avoidance algorithms',
        'AMSI/ETW/WDF bypass automation'
      ],
      path: '/tools/payload-obfuscator',
      blogPath: '/blog/payload-obfuscator-development'
    },
    {
      id: 'traffic-analyzer',
      name: 'Phantom Traffic Manipulator',
      icon: <Database size={24} className="text-cyber-neon-green" />,
      description: 'Next-gen network manipulation framework that can intercept, analyze, modify, and synthesize network traffic with unprecedented precision.',
      features: [
        'TLS 1.3 intercept without certificate warnings',
        'Protocol impersonation and tunneling techniques',
        'AI-powered traffic pattern mimicry',
        'Time-delayed payload activation',
        'Advanced detection avoidance algorithms'
      ],
      path: '/tools/traffic-analyzer',
      blogPath: '/blog/network-analyzer-development'
    },
    {
      id: 'crypto-toolkit',
      name: 'CryptoBreaker Arsenal',
      icon: <Key size={24} className="text-cyber-neon-green" />,
      description: 'Military-grade cryptanalysis framework designed to find weaknesses in supposedly secure implementations, not just theoretical vulnerabilities.',
      features: [
        'Side-channel analysis automation',
        'Real-time encryption oracle attacks',
        'Hardware key extraction methodology',
        'Quantum-resistant algorithm evaluation',
        'Multi-vector cryptographic assessment'
      ],
      path: '/tools/crypto-toolkit',
      blogPath: '/blog/cryptographic-attacks'
    },
    {
      id: 'vulnerability-scanner',
      name: 'NightShade Scanner',
      icon: <Search size={24} className="text-cyber-neon-green" />,
      description: 'Revolutionary vulnerability discovery engine powered by machine learning models trained on zero-day exploits and proprietary vulnerability data.',
      features: [
        'Self-evolving payload generation',
        'Context-aware exploitation chains',
        'Logic flaw detection heuristics',
        'Custom memory corruption synthesis',
        'API weakness correlation system'
      ],
      path: '/tools/vulnerability-scanner',
      blogPath: '/blog/vulnerability-scanner-development'
    },
    {
      id: 'social-engineering',
      name: 'MindHack Framework',
      icon: <LinkIcon size={24} className="text-cyber-neon-green" />,
      description: 'Advanced human exploitation framework that leverages psychological profiles, linguistic analysis, and behavior prediction to create perfect attack vectors.',
      features: [
        'Psychometric targeting algorithms',
        'Linguistic pattern adaptation',
        'AI-driven persona generation',
        'Multi-channel attack orchestration',
        'Psychological vulnerability analysis'
      ],
      path: '/tools/social-engineering',
      blogPath: '/blog/social-engineering-development'
    }
  ];

  return (
    <Layout>
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyber-dark border border-cyber-neon-green mb-6">
            <Skull className="h-8 w-8 text-cyber-neon-green" />
          </div>
          <h1 className="text-4xl font-bold text-cyber-neon-green mb-4">Weapons Cache</h1>
          <p className="text-cyber-text/80 max-w-2xl mx-auto">
            Offensive security tools engineered to break conventional defense systems. 
            Use with precision - these aren't toys.
          </p>
        </header>

        <div className="space-y-12">
          {tools.map((tool) => (
            <div key={tool.id} className="cyber-card">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-2/3">
                  <div className="flex items-center gap-3 mb-4">
                    {tool.icon}
                    <h2 className="text-2xl font-bold text-cyber-neon-green">{tool.name}</h2>
                  </div>
                  <p className="text-cyber-text/90 mb-6">{tool.description}</p>
                  <h3 className="text-lg text-cyber-neon-blue mb-3">Capabilities:</h3>
                  <ul className="list-disc list-inside space-y-1 text-cyber-text/80 mb-6">
                    {tool.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-4">
                    <Link to={tool.path} className="cyber-button flex items-center gap-2">
                      <Crosshair size={16} />
                      Deploy
                    </Link>
                    <Link to={tool.blogPath} className="text-cyber-neon-green hover:text-cyber-neon-blue transition-colors flex items-center gap-2">
                      Technical Research
                    </Link>
                  </div>
                </div>
                <div className="md:w-1/3 flex justify-center items-center">
                  <div className="w-full h-48 bg-cyber-terminal flex items-center justify-center rounded border border-cyber-neon-green/30">
                    <div className="text-cyber-neon-green text-center">
                      <div className="text-xl font-mono mb-2">
                        {tool.name}
                      </div>
                      <div className="text-xs opacity-70">
                        [CLASSIFIED]
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Tools;
