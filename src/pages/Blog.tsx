
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { CalendarIcon, UserIcon, Tag, Cpu } from 'lucide-react';

const blogPosts = [
  {
    id: 'payload-obfuscator-development',
    title: 'Engineering a Polymorphic Payload Engine: Breaking Detection Algorithms',
    excerpt: 'A technical analysis of my multi-stage metamorphic payload generation architecture that renders conventional detection systems obsolete.',
    date: 'June 15, 2025',
    author: 'JxRogue',
    tags: ['Polymorphic Engines', 'Detection Evasion', 'Exploitation'],
    readTime: '12 min read',
    path: '/blog/payload-obfuscator-development',
    toolPath: '/tools/payload-obfuscator'
  },
  {
    id: 'cryptographic-attacks',
    title: 'Breaking Modern Cryptographic Implementations: Beyond Theory',
    excerpt: 'Advanced techniques for exploiting real-world cryptographic implementations through side-channel analysis and implementation flaws.',
    date: 'June 8, 2025',
    author: 'JxRogue',
    tags: ['Cryptanalysis', 'Side-Channel Attacks', 'Implementation Flaws'],
    readTime: '10 min read',
    path: '/blog/cryptographic-attacks',
    toolPath: '/tools/crypto-toolkit'
  },
  {
    id: 'network-analyzer-development',
    title: 'Phantom Traffic: Building the Ultimate Network Manipulation Framework',
    excerpt: 'The architecture behind my network traffic manipulation framework capable of intercepting and modifying encrypted traffic undetectably.',
    date: 'May 30, 2025',
    author: 'JxRogue',
    tags: ['Network Manipulation', 'Protocol Exploitation', 'TLS Interception'],
    readTime: '8 min read',
    path: '/blog/network-analyzer-development',
    toolPath: '/tools/traffic-analyzer'
  },
  {
    id: 'vulnerability-scanner-development',
    title: 'AI-Powered Vulnerability Discovery: The NightShade Scanner',
    excerpt: 'How I built a self-evolving vulnerability discovery system trained on proprietary zero-day research and exploitation techniques.',
    date: 'May 22, 2025',
    author: 'JxRogue',
    tags: ['Machine Learning', 'Vulnerability Research', 'Exploitation Chain'],
    readTime: '15 min read',
    path: '/blog/vulnerability-scanner-development',
    toolPath: '/tools/vulnerability-scanner'
  },
  {
    id: 'social-engineering-development',
    title: 'Weaponizing Psychology: The MindHack Framework',
    excerpt: 'An in-depth analysis of advanced human exploitation techniques leveraging psychological profiles and predictive behavior modeling.',
    date: 'May 15, 2025',
    author: 'JxRogue',
    tags: ['Human Exploitation', 'Psychological Targeting', 'Attack Vectors'],
    readTime: '9 min read',
    path: '/blog/social-engineering-development',
    toolPath: '/tools/social-engineering'
  }
];

const Blog = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyber-dark border border-cyber-neon-green mb-6">
            <Cpu className="h-8 w-8 text-cyber-neon-green" />
          </div>
          <h1 className="text-4xl font-bold text-cyber-neon-green mb-4">Neural Dumps</h1>
          <p className="text-cyber-text/80">
            Technical research journals detailing advanced offensive security techniques and tool development.
          </p>
        </header>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="cyber-card">
              <Link to={post.path}>
                <h2 className="text-2xl font-bold text-cyber-neon-green hover:text-cyber-neon-blue transition-colors mb-3">
                  {post.title}
                </h2>
              </Link>
              
              <div className="flex flex-wrap gap-4 text-sm text-cyber-text/70 mb-4">
                <div className="flex items-center gap-1">
                  <CalendarIcon size={14} />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <UserIcon size={14} />
                  <span>{post.author}</span>
                </div>
                <div>
                  {post.readTime}
                </div>
              </div>
              
              <p className="text-cyber-text/80 mb-4">{post.excerpt}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="inline-flex items-center bg-cyber-dark border border-cyber-neon-green/30 px-2 py-1 text-xs rounded text-cyber-neon-green/80"
                  >
                    <Tag size={12} className="mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  to={post.path} 
                  className="text-cyber-neon-green hover:text-cyber-neon-blue transition-colors"
                >
                  Access Full Data →
                </Link>
                <Link 
                  to={post.toolPath}
                  className="text-cyber-neon-blue hover:text-cyber-neon-green transition-colors"
                >
                  Deploy Related Tool
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
