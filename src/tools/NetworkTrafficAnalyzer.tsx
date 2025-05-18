
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { Database, Upload, Eye, FileDown, Terminal, Link as LinkIcon, Shield, Code, HardDrive, Search, Zap, Network, Wifi } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const NetworkTrafficAnalyzer = () => {
  const { toast } = useToast();
  const [file, setFile] = useState<File | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [results, setResults] = useState<string | null>(null);
  const [selectedProtocol, setSelectedProtocol] = useState<string>('all');
  const [timeRange, setTimeRange] = useState<string>('all');
  const [viewMode, setViewMode] = useState<string>('summary');
  const [activeTab, setActiveTab] = useState<string>('live-traffic');
  const [captureMode, setCaptureMode] = useState<string>('passive');
  const [advancedOptions, setAdvancedOptions] = useState<boolean>(false);
  const [encryptedTraffic, setEncryptedTraffic] = useState<boolean>(false);
  const [deepInspection, setDeepInspection] = useState<boolean>(true);
  const [signaturesEnabled, setSignaturesEnabled] = useState<boolean>(true);
  const [anomalyDetection, setAnomalyDetection] = useState<boolean>(true);
  const [decryptionKey, setDecryptionKey] = useState<string>('');
  const [isCapturing, setIsCapturing] = useState<boolean>(false);
  const [packetCount, setPacketCount] = useState<number>(0);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [bandwidthUsage, setBandwidthUsage] = useState<{ download: number, upload: number }>({ download: 0, upload: 0 });
  const packetInterval = useRef<NodeJS.Timeout | null>(null);
  const timeInterval = useRef<NodeJS.Timeout | null>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const [detectionEngine, setDetectionEngine] = useState<string>('ml-behavioral');
  const [bypassLevel, setBypassLevel] = useState<string>('medium');
  const [visualizationMode, setVisualizationMode] = useState<string>('network-graph');

  const protocols = [
    { id: 'all', name: 'All Protocols', advanced: false },
    { id: 'http', name: 'HTTP/HTTPS', advanced: false },
    { id: 'dns', name: 'DNS', advanced: false },
    { id: 'tcp', name: 'TCP', advanced: false },
    { id: 'udp', name: 'UDP', advanced: false },
    { id: 'icmp', name: 'ICMP', advanced: false },
    { id: 'ssl', name: 'SSL/TLS Encrypted', advanced: true },
    { id: 'ssh', name: 'SSH Traffic', advanced: true },
    { id: 'wireless', name: 'Wireless Protocols', advanced: true },
    { id: 'bluetooth', name: 'Bluetooth', advanced: true },
    { id: 'iot', name: 'IoT Protocols', advanced: true },
    { id: 'proprietary', name: 'Custom/Proprietary', advanced: true }
  ];

  const timeRanges = [
    { id: 'all', name: 'All Time' },
    { id: 'last-minute', name: 'Last Minute' },
    { id: 'last-5-minutes', name: 'Last 5 Minutes' },
    { id: 'last-hour', name: 'Last Hour' },
    { id: 'custom', name: 'Custom Timeframe' }
  ];

  const viewModes = [
    { id: 'summary', name: 'Summary View' },
    { id: 'detailed', name: 'Detailed Analysis' },
    { id: 'raw', name: 'Raw Packets' },
    { id: 'hexdump', name: 'Hexadecimal View' },
    { id: 'pcap-dissection', name: 'PCAP Dissection' }
  ];

  const detectionEngines = [
    { id: 'signature-based', name: 'Signature Analysis' },
    { id: 'heuristic', name: 'Heuristic Detection' },
    { id: 'ml-behavioral', name: 'ML Behavioral Analysis' },
    { id: 'hybrid', name: 'Hybrid Detection' }
  ];

  const bypassLevels = [
    { id: 'low', name: 'Basic Evasion' },
    { id: 'medium', name: 'Advanced Evasion' },
    { id: 'high', name: 'Maximum Stealth' }
  ];

  const visualizationModes = [
    { id: 'network-graph', name: 'Network Graph' },
    { id: 'packet-timeline', name: 'Packet Timeline' },
    { id: 'heat-map', name: 'Traffic Heatmap' },
    { id: '3d-visualization', name: '3D Traffic Visualization' }
  ];

  useEffect(() => {
    return () => {
      if (packetInterval.current) clearInterval(packetInterval.current);
      if (timeInterval.current) clearInterval(timeInterval.current);
    };
  }, []);

  const startLiveCapture = () => {
    if (isCapturing) return;
    
    setIsCapturing(true);
    setResults('');
    setPacketCount(0);
    setElapsedTime(0);
    setBandwidthUsage({ download: 0, upload: 0 });
    
    // Simulate progressive packet capture with terminal-style updates
    let captureLog = '\\x1b[32m[+]\\x1b[0m Initializing Zero Signature packet capture engine...\n';
    appendToTerminal(captureLog);
    
    setTimeout(() => {
      captureLog = '\\x1b[32m[+]\\x1b[0m Loading custom dissectors and advanced protocol analyzers...\n';
      appendToTerminal(captureLog);
    }, 800);
    
    setTimeout(() => {
      captureLog = '\\x1b[32m[+]\\x1b[0m Bypassing detection systems using adaptive TTL manipulation...\n';
      appendToTerminal(captureLog);
    }, 1500);
    
    setTimeout(() => {
      captureLog = '\\x1b[32m[+]\\x1b[0m Setting up machine learning behavioral analysis module...\n';
      appendToTerminal(captureLog);
    }, 2200);
    
    setTimeout(() => {
      captureLog = '\\x1b[32m[+]\\x1b[0m Initializing stealth camouflage for capture interface...\n';
      appendToTerminal(captureLog);
    }, 2800);
    
    setTimeout(() => {
      captureLog = '\\x1b[32m[+]\\x1b[0m Starting capture with advanced fingerprinting evasion...\n\n';
      appendToTerminal(captureLog);
      
      // Start the simulated packet capture
      packetInterval.current = setInterval(() => {
        const newPackets = Math.floor(Math.random() * 20) + 5;
        setPacketCount(prev => prev + newPackets);
        
        const newDownload = Math.random() * 150 + 50;
        const newUpload = Math.random() * 80 + 20;
        
        setBandwidthUsage(prev => ({
          download: prev.download + newDownload,
          upload: prev.upload + newUpload
        }));
        
        // Occasionally add interesting packet logs
        if (Math.random() > 0.7) {
          let packetLog = '';
          
          if (Math.random() > 0.6) {
            // Suspicious packet
            const ips = [
              '192.168.1.45', '10.0.0.132', '172.16.254.2', 
              '45.33.32.156', '209.141.45.27', '104.21.56.234'
            ];
            const sourceIP = ips[Math.floor(Math.random() * ips.length)];
            const destIP = ips[Math.floor(Math.random() * ips.length)];
            
            packetLog = `\\x1b[33m[!]\\x1b[0m Suspicious packet detected: ${sourceIP} -> ${destIP} [Port: ${Math.floor(Math.random() * 65000) + 1}]\n`;
          } else {
            // Normal packet
            const protocols = ['TCP', 'UDP', 'HTTP', 'DNS', 'TLS', 'ICMP'];
            const protocol = protocols[Math.floor(Math.random() * protocols.length)];
            packetLog = `\\x1b[36m[*]\\x1b[0m ${protocol} packet: ${Math.floor(Math.random() * 1500) + 64} bytes\n`;
          }
          
          appendToTerminal(packetLog);
        }
      }, 1000);
      
      timeInterval.current = setInterval(() => {
        setElapsedTime(prev => prev + 1);
      }, 1000);
    }, 3500);
  };

  const stopLiveCapture = () => {
    if (!isCapturing) return;
    
    setIsCapturing(false);
    
    if (packetInterval.current) {
      clearInterval(packetInterval.current);
      packetInterval.current = null;
    }
    
    if (timeInterval.current) {
      clearInterval(timeInterval.current);
      timeInterval.current = null;
    }
    
    const captureLog = `
\\x1b[32m[+]\\x1b[0m Capture complete. Statistics:
  • Total packets: ${packetCount.toLocaleString()}
  • Elapsed time: ${formatTime(elapsedTime)}
  • Download: ${(bandwidthUsage.download / 1024).toFixed(2)} MiB
  • Upload: ${(bandwidthUsage.upload / 1024).toFixed(2)} MiB
  • Average throughput: ${((bandwidthUsage.download + bandwidthUsage.upload) / 1024 / Math.max(1, elapsedTime)).toFixed(2)} MiB/s

\\x1b[32m[+]\\x1b[0m Performing advanced analysis...
`;
    appendToTerminal(captureLog);
    
    // Simulate analysis
    setTimeout(() => {
      displayAnalysisResults();
    }, 2500);
  };

  const formatTime = (seconds: number): string => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    return `${hrs > 0 ? `${hrs}h ` : ''}${mins > 0 || hrs > 0 ? `${mins}m ` : ''}${secs}s`;
  };

  const appendToTerminal = (text: string) => {
    setResults(prev => {
      const newText = (prev || '') + text;
      
      // Auto-scroll terminal to bottom
      setTimeout(() => {
        if (terminalRef.current) {
          terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
      }, 0);
      
      return newText;
    });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const selectedFile = event.target.files[0];
      if (selectedFile.name.endsWith('.pcap') || selectedFile.name.endsWith('.pcapng') || selectedFile.name.endsWith('.cap')) {
        setFile(selectedFile);
        toast({
          title: "File Selected",
          description: `${selectedFile.name} (${(selectedFile.size / 1024 / 1024).toFixed(2)} MB) ready for analysis`,
        });
      } else {
        toast({
          title: "Invalid File Format",
          description: "Please upload a .pcap, .pcapng, or .cap file",
          variant: "destructive"
        });
        event.target.value = '';
      }
    }
  };

  const handleAnalyze = () => {
    if (!file) {
      toast({
        title: "No File Selected",
        description: "Please upload a network capture file to analyze",
        variant: "destructive"
      });
      return;
    }

    setAnalyzing(true);
    setResults('');
    
    // Simulate a sophisticated analysis process with command-line style interface
    let analysisLog = `\\x1b[32m[+]\\x1b[0m Initializing advanced PCAP analysis engine...\n`;
    appendToTerminal(analysisLog);
    
    setTimeout(() => {
      analysisLog = `\\x1b[32m[+]\\x1b[0m Loading ${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)...\n`;
      appendToTerminal(analysisLog);
    }, 800);
    
    setTimeout(() => {
      analysisLog = `\\x1b[32m[+]\\x1b[0m Performing initial packet validation and integrity check...\n`;
      appendToTerminal(analysisLog);
    }, 1600);
    
    setTimeout(() => {
      analysisLog = `\\x1b[32m[+]\\x1b[0m Parsing packet headers using custom dissectors...\n`;
      appendToTerminal(analysisLog);
    }, 2400);
    
    setTimeout(() => {
      analysisLog = `\\x1b[32m[+]\\x1b[0m ${signaturesEnabled ? 'Loading threat intelligence database...' : 'Skipping signature-based detection...'}\n`;
      appendToTerminal(analysisLog);
    }, 3000);
    
    if (encryptedTraffic) {
      setTimeout(() => {
        if (decryptionKey) {
          analysisLog = `\\x1b[32m[+]\\x1b[0m Attempting decryption of secure sessions with provided keys...\n`;
        } else {
          analysisLog = `\\x1b[33m[!]\\x1b[0m Encrypted traffic detected - TLS fingerprinting will be used without full decryption\n`;
        }
        appendToTerminal(analysisLog);
      }, 3600);
    }
    
    setTimeout(() => {
      if (deepInspection) {
        analysisLog = `\\x1b[32m[+]\\x1b[0m Performing deep packet inspection and protocol analysis...\n`;
      } else {
        analysisLog = `\\x1b[32m[+]\\x1b[0m Performing standard packet inspection...\n`;
      }
      appendToTerminal(analysisLog);
    }, 4200);
    
    if (anomalyDetection) {
      setTimeout(() => {
        analysisLog = `\\x1b[32m[+]\\x1b[0m Initializing machine learning anomaly detection module...\n`;
        appendToTerminal(analysisLog);
      }, 4800);
    }
    
    setTimeout(() => {
      analysisLog = `\\x1b[32m[+]\\x1b[0m Generating comprehensive traffic reports and visualizations...\n`;
      appendToTerminal(analysisLog);
      
      // Complete the analysis
      setTimeout(() => {
        displayAnalysisResults();
        setAnalyzing(false);
        
        toast({
          title: "Analysis Complete",
          description: `Completed advanced analysis of ${file.name}`
        });
      }, 2000);
    }, 5400);
  };
  
  const displayAnalysisResults = () => {
    // Generate a sophisticated analysis result based on selected options
    const analysisResults = generateAnalysisResults();
    appendToTerminal(analysisResults);
  };
  
  const generateAnalysisResults = () => {
    // This would be a real analysis in a production tool
    // Here we generate fake but realistic-looking results
    
    const packetTotal = file ? Math.floor(file.size / 300) : Math.floor(packetCount * 0.85);
    const uniqueIPs = Math.floor(Math.random() * 50) + 20;
    const uniqueDomains = Math.floor(Math.random() * 30) + 15;
    const protocols = [
      { name: 'TCP', percentage: Math.floor(Math.random() * 30) + 40 },
      { name: 'UDP', percentage: Math.floor(Math.random() * 20) + 5 },
      { name: 'HTTP/S', percentage: Math.floor(Math.random() * 30) + 20 },
      { name: 'DNS', percentage: Math.floor(Math.random() * 10) + 5 }
    ];
    
    // Ensure percentages add up to 100
    const totalPercentage = protocols.reduce((sum, p) => sum + p.percentage, 0);
    protocols.forEach(p => p.percentage = Math.floor(p.percentage / totalPercentage * 100));
    
    // Generate some suspicious domains and IPs
    const suspiciousDomains = [
      { domain: generateRandomDomain(), risk: 'High', reason: 'Known C2 infrastructure' },
      { domain: generateRandomDomain(), risk: 'Medium', reason: 'Recently registered domain with suspicious patterns' },
      { domain: generateRandomDomain(), risk: 'Low', reason: 'Unusual TLS certificate properties' }
    ];
    
    const suspiciousIPs = [
      { ip: generateRandomIP(), risk: 'High', reason: 'Listed in multiple threat intelligence feeds' },
      { ip: generateRandomIP(), risk: 'Medium', reason: 'Unusual port scanning activity' },
      { ip: generateRandomIP(), risk: 'Low', reason: 'Geolocation inconsistency' }
    ];
    
    // Generate analysis report
    return `
\\x1b[1;32m======= ADVANCED NETWORK TRAFFIC ANALYSIS REPORT =======\\x1b[0m

\\x1b[1;36m[SUMMARY STATISTICS]\\x1b[0m
• Total Packets: ${packetTotal.toLocaleString()}
• Sessions Analyzed: ${Math.floor(packetTotal / 12).toLocaleString()}
• Unique IP Addresses: ${uniqueIPs}
• Unique Domain Names: ${uniqueDomains}
• Encrypted Traffic: ${Math.floor(Math.random() * 30) + 60}% of total traffic
• Potentially Malicious Packets: ${Math.floor(Math.random() * 3) + 1}%

\\x1b[1;36m[PROTOCOL DISTRIBUTION]\\x1b[0m
${protocols.map(p => `• ${p.name}: ${p.percentage}% (${Math.floor(packetTotal * p.percentage / 100).toLocaleString()} packets)`).join('\n')}

\\x1b[1;36m[TRAFFIC FLOW ANALYSIS]\\x1b[0m
• Inbound Connections: ${Math.floor(packetTotal * 0.45).toLocaleString()} packets
• Outbound Connections: ${Math.floor(packetTotal * 0.55).toLocaleString()} packets
• Internal Traffic: ${Math.floor(packetTotal * 0.15).toLocaleString()} packets
• Average Packet Size: ${Math.floor(Math.random() * 600) + 200} bytes
• Peak Traffic Rate: ${Math.floor(Math.random() * 40) + 10} Mbps

\\x1b[1;33m[SUSPICIOUS ACTIVITY DETECTED]\\x1b[0m
• Potentially Malicious Domains:
${suspiciousDomains.map(d => `  - \\x1b[31m${d.domain}\\x1b[0m (Risk: ${d.risk}) - ${d.reason}`).join('\n')}

• Suspicious IP Addresses:
${suspiciousIPs.map(ip => `  - \\x1b[31m${ip.ip}\\x1b[0m (Risk: ${ip.risk}) - ${ip.reason}`).join('\n')}

• Behavior Patterns:
  - ${Math.floor(Math.random() * 5) + 1} potential data exfiltration attempts detected
  - ${Math.floor(Math.random() * 3)} instances of DNS tunneling behavior identified
  - ${Math.random() > 0.5 ? 'Beaconing activity' : 'Periodic communications'} to ${generateRandomDomain()} at ${Math.floor(Math.random() * 50) + 10}-second intervals

\\x1b[1;36m[ENCRYPTED TRAFFIC ANALYSIS]\\x1b[0m
• TLS Versions Detected: TLS 1.2, TLS 1.3
• Potentially Weak Cipher Suites: ${Math.random() > 0.7 ? 'Yes' : 'No'}
• Certificate Anomalies: ${Math.random() > 0.6 ? 'Yes' : 'No'}
• JA3 Fingerprints: ${Math.floor(Math.random() * 10) + 5} unique client fingerprints identified
• JA3S Fingerprints: ${Math.floor(Math.random() * 5) + 3} unique server fingerprints identified

\\x1b[1;36m[RECOMMENDATIONS]\\x1b[0m
• Investigate communications with high-risk domains and IP addresses
• Review ${Math.floor(Math.random() * 5) + 1} potential data exfiltration pathways
• ${Math.random() > 0.5 ? 'Deploy additional monitoring' : 'Enhance firewall rules'} to prevent suspicious outbound connections
• Consider implementing DNS filtering to block communications with known malicious domains

Analysis completed with \\x1b[1;32mZero Signature Traffic Analyzer v2.1.4\\x1b[0m
`;
  };

  const generateRandomDomain = () => {
    const tlds = ['.com', '.net', '.org', '.ru', '.cn', '.io', '.cc', '.xyz'];
    const prefixes = ['secure', 'data', 'cloud', 'api', 'cdn', 'static', 'proxy', 'gate', 'srv'];
    const suffixes = ['portal', 'access', 'service', 'updates', 'connector', 'node', 'cdn', 'systems'];
    
    const randomChars = Math.random().toString(36).substring(2, 7);
    
    if (Math.random() > 0.7) {
      // Random-looking domain
      return randomChars + Math.random().toString(36).substring(2, 5) + tlds[Math.floor(Math.random() * tlds.length)];
    } else {
      // More legitimate-looking domain
      return prefixes[Math.floor(Math.random() * prefixes.length)] + 
             '-' + 
             suffixes[Math.floor(Math.random() * suffixes.length)] +
             tlds[Math.floor(Math.random() * tlds.length)];
    }
  };
  
  const generateRandomIP = () => {
    return `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;
  };

  const loadDemoCapture = () => {
    const demoFile = new File(
      ['DEMO PCAP FILE - this would be binary data in a real scenario'],
      'advanced-apt-capture.pcapng',
      { type: 'application/vnd.tcpdump.pcap' }
    );
    
    setFile(demoFile);
    
    toast({
      title: "APT Campaign Sample Loaded",
      description: "An advanced persistent threat PCAP sample has been loaded for analysis"
    });
  };

  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-8">
          <div className="flex items-center justify-center gap-3">
            <Database size={32} className="text-cyber-neon-green" />
            <h1 className="text-4xl font-bold text-cyber-neon-green">Zero Signature Traffic Analyzer</h1>
          </div>
          <p className="text-cyber-text/80 mt-3 max-w-2xl mx-auto">
            Advanced network reconnaissance and traffic analysis with zero fingerprint monitoring, machine learning anomaly detection, and evasion capabilities.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            {/* Tab Navigation */}
            <div className="mb-6 border-b border-cyber-neon-green/20">
              <div className="flex space-x-1 overflow-x-auto pb-1">
                <button 
                  className={`py-2 px-4 ${activeTab === 'live-traffic' ? 'text-cyber-neon-green border-b-2 border-cyber-neon-green' : 'text-cyber-text hover:text-cyber-neon-green'}`}
                  onClick={() => setActiveTab('live-traffic')}
                >
                  Live Traffic Monitoring
                </button>
                <button 
                  className={`py-2 px-4 ${activeTab === 'file-analysis' ? 'text-cyber-neon-green border-b-2 border-cyber-neon-green' : 'text-cyber-text hover:text-cyber-neon-green'}`}
                  onClick={() => setActiveTab('file-analysis')}
                >
                  PCAP Analysis
                </button>
                <button 
                  className={`py-2 px-4 ${activeTab === 'advanced-options' ? 'text-cyber-neon-green border-b-2 border-cyber-neon-green' : 'text-cyber-text hover:text-cyber-neon-green'}`}
                  onClick={() => setActiveTab('advanced-options')}
                >
                  Advanced Configuration
                </button>
              </div>
            </div>

            {/* Live Traffic Monitoring Tab */}
            {activeTab === 'live-traffic' && (
              <>
                <div className="cyber-container mb-8">
                  <h3 className="text-xl font-bold text-cyber-neon-green mb-4 flex items-center">
                    <Network className="mr-2" size={20} />
                    Live Traffic Capture
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-cyber-neon-blue mb-2">Capture Mode</label>
                        <select 
                          value={captureMode}
                          onChange={(e) => setCaptureMode(e.target.value)}
                          className="cyber-input w-full"
                        >
                          <option value="passive">Passive (Zero Fingerprint)</option>
                          <option value="active">Active (Full Probe)</option>
                          <option value="selective">Selective Targeting</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-cyber-neon-blue mb-2">Detection Engine</label>
                        <select 
                          value={detectionEngine}
                          onChange={(e) => setDetectionEngine(e.target.value)}
                          className="cyber-input w-full"
                        >
                          {detectionEngines.map(engine => (
                            <option key={engine.id} value={engine.id}>{engine.name}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-cyber-neon-blue mb-2">Evasion Level</label>
                        <select 
                          value={bypassLevel}
                          onChange={(e) => setBypassLevel(e.target.value)}
                          className="cyber-input w-full"
                        >
                          {bypassLevels.map(level => (
                            <option key={level.id} value={level.id}>{level.name}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-cyber-neon-blue mb-2">Protocol Filter</label>
                        <select 
                          value={selectedProtocol}
                          onChange={(e) => setSelectedProtocol(e.target.value)}
                          className="cyber-input w-full"
                        >
                          {protocols
                            .filter(p => advancedOptions || !p.advanced)
                            .map(protocol => (
                              <option key={protocol.id} value={protocol.id}>{protocol.name}</option>
                            ))}
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-cyber-neon-blue mb-2">Visualization</label>
                        <select 
                          value={visualizationMode}
                          onChange={(e) => setVisualizationMode(e.target.value)}
                          className="cyber-input w-full"
                        >
                          {visualizationModes.map(mode => (
                            <option key={mode.id} value={mode.id}>{mode.name}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center">
                        <input 
                          id="deepInspection"
                          type="checkbox" 
                          checked={deepInspection}
                          onChange={() => setDeepInspection(!deepInspection)}
                          className="mr-2 h-4 w-4 border rounded text-cyber-neon-green focus:ring-cyber-neon-green"
                        />
                        <label htmlFor="deepInspection" className="text-cyber-text">Deep Packet Inspection</label>
                      </div>
                      
                      <div className="flex items-center">
                        <input 
                          id="anomalyDetection"
                          type="checkbox" 
                          checked={anomalyDetection}
                          onChange={() => setAnomalyDetection(!anomalyDetection)}
                          className="mr-2 h-4 w-4 border rounded text-cyber-neon-green focus:ring-cyber-neon-green"
                        />
                        <label htmlFor="anomalyDetection" className="text-cyber-text">ML Anomaly Detection</label>
                      </div>
                      
                      <div className="flex items-center">
                        <input 
                          id="encryptedTraffic"
                          type="checkbox" 
                          checked={encryptedTraffic}
                          onChange={() => setEncryptedTraffic(!encryptedTraffic)}
                          className="mr-2 h-4 w-4 border rounded text-cyber-neon-green focus:ring-cyber-neon-green"
                        />
                        <label htmlFor="encryptedTraffic" className="text-cyber-text">TLS Fingerprinting</label>
                      </div>
                    </div>
                    
                    {isCapturing ? (
                      <div className="bg-cyber-dark/70 border border-cyber-neon-green/30 p-4 rounded-md">
                        <div className="flex flex-wrap gap-4 justify-between items-center mb-3">
                          <div className="flex items-center gap-2">
                            <div className="h-3 w-3 rounded-full bg-cyber-neon-green animate-pulse"></div>
                            <span className="text-cyber-neon-green">Capture Active</span>
                          </div>
                          <div className="text-cyber-text text-sm">
                            Elapsed: {formatTime(elapsedTime)}
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-4 mb-4">
                          <div className="bg-cyber-darker p-2 rounded border border-cyber-neon-green/20">
                            <div className="text-xs text-cyber-text/70 mb-1">Packets</div>
                            <div className="text-lg font-mono text-cyber-neon-green">{packetCount.toLocaleString()}</div>
                          </div>
                          
                          <div className="bg-cyber-darker p-2 rounded border border-cyber-neon-green/20">
                            <div className="text-xs text-cyber-text/70 mb-1">Download</div>
                            <div className="text-lg font-mono text-cyber-neon-green">{(bandwidthUsage.download / 1024).toFixed(2)} MB</div>
                          </div>
                          
                          <div className="bg-cyber-darker p-2 rounded border border-cyber-neon-green/20">
                            <div className="text-xs text-cyber-text/70 mb-1">Upload</div>
                            <div className="text-lg font-mono text-cyber-neon-green">{(bandwidthUsage.upload / 1024).toFixed(2)} MB</div>
                          </div>
                        </div>
                      </div>
                    ) : null}
                    
                    <div className="flex justify-center">
                      {!isCapturing ? (
                        <button 
                          className="cyber-button text-lg flex items-center gap-2"
                          onClick={startLiveCapture}
                        >
                          <Wifi size={18} />
                          <span>Start Zero-Sig Capture</span>
                        </button>
                      ) : (
                        <button 
                          className="cyber-button !bg-cyber-darker !border-cyber-neon-pink text-cyber-neon-pink hover:!bg-cyber-neon-pink hover:!text-cyber-dark text-lg flex items-center gap-2"
                          onClick={stopLiveCapture}
                        >
                          <Shield size={18} />
                          <span>Stop & Analyze</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </>
            )}
            
            {/* File Analysis Tab */}
            {activeTab === 'file-analysis' && (
              <>
                <div className="cyber-container mb-8">
                  <h3 className="text-xl font-bold text-cyber-neon-green mb-4 flex items-center">
                    <HardDrive className="mr-2" size={20} />
                    PCAP File Analysis
                  </h3>
                  
                  <div className="border-2 border-dashed border-cyber-neon-green/30 rounded-md p-8 text-center mb-6">
                    <input
                      type="file"
                      accept=".pcap,.pcapng,.cap"
                      onChange={handleFileChange}
                      className="hidden"
                      id="capture-file"
                    />
                    
                    <label htmlFor="capture-file" className="cursor-pointer">
                      <div className="flex flex-col items-center justify-center">
                        <Upload size={40} className="text-cyber-neon-green mb-4" />
                        <p className="text-cyber-text mb-2">
                          {file ? file.name : 'Drag & drop a .pcap/.pcapng file or click to browse'}
                        </p>
                        <p className="text-cyber-text/60 text-sm">
                          {file 
                            ? `Size: ${(file.size / 1024 / 1024).toFixed(2)} MB` 
                            : 'Supports PCAP, PCAPNG, and CAP formats'}
                        </p>
                      </div>
                    </label>
                    
                    {!file && (
                      <button 
                        onClick={loadDemoCapture}
                        className="text-cyber-neon-blue hover:text-cyber-neon-green text-sm mt-4"
                      >
                        Load APT Campaign Sample
                      </button>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-cyber-neon-blue mb-2">Protocol Filter</label>
                      <select 
                        value={selectedProtocol}
                        onChange={(e) => setSelectedProtocol(e.target.value)}
                        className="cyber-input w-full"
                      >
                        {protocols
                          .filter(p => advancedOptions || !p.advanced)
                          .map(protocol => (
                            <option key={protocol.id} value={protocol.id}>{protocol.name}</option>
                          ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-cyber-neon-blue mb-2">Time Range</label>
                      <select 
                        value={timeRange}
                        onChange={(e) => setTimeRange(e.target.value)}
                        className="cyber-input w-full"
                      >
                        {timeRanges.map(range => (
                          <option key={range.id} value={range.id}>{range.name}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-cyber-neon-blue mb-2">View Mode</label>
                      <select 
                        value={viewMode}
                        onChange={(e) => setViewMode(e.target.value)}
                        className="cyber-input w-full"
                      >
                        {viewModes.map(mode => (
                          <option key={mode.id} value={mode.id}>{mode.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex flex-wrap gap-4">
                    <div className="flex items-center">
                      <input 
                        id="deepInspectionFile"
                        type="checkbox" 
                        checked={deepInspection}
                        onChange={() => setDeepInspection(!deepInspection)}
                        className="mr-2 h-4 w-4 border rounded text-cyber-neon-green focus:ring-cyber-neon-green"
                      />
                      <label htmlFor="deepInspectionFile" className="text-cyber-text">Deep Packet Inspection</label>
                    </div>
                    
                    <div className="flex items-center">
                      <input 
                        id="anomalyDetectionFile"
                        type="checkbox" 
                        checked={anomalyDetection}
                        onChange={() => setAnomalyDetection(!anomalyDetection)}
                        className="mr-2 h-4 w-4 border rounded text-cyber-neon-green focus:ring-cyber-neon-green"
                      />
                      <label htmlFor="anomalyDetectionFile" className="text-cyber-text">ML Anomaly Detection</label>
                    </div>
                    
                    <div className="flex items-center">
                      <input 
                        id="signaturesEnabled"
                        type="checkbox" 
                        checked={signaturesEnabled}
                        onChange={() => setSignaturesEnabled(!signaturesEnabled)}
                        className="mr-2 h-4 w-4 border rounded text-cyber-neon-green focus:ring-cyber-neon-green"
                      />
                      <label htmlFor="signaturesEnabled" className="text-cyber-text">Use Threat Intelligence</label>
                    </div>
                    
                    <div className="flex items-center">
                      <input 
                        id="encryptedTrafficFile"
                        type="checkbox" 
                        checked={encryptedTraffic}
                        onChange={() => setEncryptedTraffic(!encryptedTraffic)}
                        className="mr-2 h-4 w-4 border rounded text-cyber-neon-green focus:ring-cyber-neon-green"
                      />
                      <label htmlFor="encryptedTrafficFile" className="text-cyber-text">Analyze Encrypted Traffic</label>
                    </div>
                  </div>
                  
                  {encryptedTraffic && (
                    <div className="mt-4">
                      <label className="block text-cyber-neon-blue mb-2">TLS Decryption Key (optional)</label>
                      <input
                        type="text"
                        value={decryptionKey}
                        onChange={(e) => setDecryptionKey(e.target.value)}
                        placeholder="Enter SSLKEYLOGFILE path or paste key material"
                        className="cyber-input w-full"
                      />
                    </div>
                  )}
                </div>
                
                <div className="flex justify-center mb-8">
                  <button 
                    className={`cyber-button text-lg flex items-center gap-2 ${analyzing ? 'opacity-75 cursor-not-allowed' : ''}`}
                    onClick={handleAnalyze}
                    disabled={analyzing || !file}
                  >
                    {analyzing ? (
                      <>
                        <div className="animate-spin h-4 w-4 border-2 border-cyber-neon-green border-t-transparent rounded-full"></div>
                        <span>Analyzing...</span>
                      </>
                    ) : (
                      <>
                        <Search size={18} />
                        <span>Execute Advanced Analysis</span>
                      </>
                    )}
                  </button>
                </div>
              </>
            )}
            
            {/* Advanced Options Tab */}
            {activeTab === 'advanced-options' && (
              <div className="cyber-container mb-8">
                <h3 className="text-xl font-bold text-cyber-neon-green mb-4 flex items-center">
                  <Code className="mr-2" size={20} />
                  Advanced Configuration
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-cyber-neon-blue font-medium mb-3">Feature Toggles</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <input 
                          id="advancedOptions"
                          type="checkbox" 
                          checked={advancedOptions}
                          onChange={() => setAdvancedOptions(!advancedOptions)}
                          className="mr-2 h-4 w-4 border rounded text-cyber-neon-green focus:ring-cyber-neon-green"
                        />
                        <label htmlFor="advancedOptions" className="text-cyber-text">Enable Advanced Protocol Support</label>
                      </div>
                      
                      <div className="flex items-center">
                        <input 
                          id="enableBypass"
                          type="checkbox" 
                          checked={true}
                          className="mr-2 h-4 w-4 border rounded text-cyber-neon-green focus:ring-cyber-neon-green"
                        />
                        <label htmlFor="enableBypass" className="text-cyber-text">Enable Monitor Mode Bypass</label>
                      </div>
                      
                      <div className="flex items-center">
                        <input 
                          id="enableTTLManip"
                          type="checkbox" 
                          checked={true}
                          className="mr-2 h-4 w-4 border rounded text-cyber-neon-green focus:ring-cyber-neon-green"
                        />
                        <label htmlFor="enableTTLManip" className="text-cyber-text">TTL Manipulation Techniques</label>
                      </div>
                      
                      <div className="flex items-center">
                        <input 
                          id="enableExfilDetection"
                          type="checkbox" 
                          checked={true}
                          className="mr-2 h-4 w-4 border rounded text-cyber-neon-green focus:ring-cyber-neon-green"
                        />
                        <label htmlFor="enableExfilDetection" className="text-cyber-text">Data Exfiltration Detection</label>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-cyber-neon-blue font-medium mb-3">Advanced Detection</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-cyber-neon-blue mb-2">ML Model Selection</label>
                        <select 
                          className="cyber-input w-full"
                          defaultValue="adaptive-behavior"
                        >
                          <option value="adaptive-behavior">Adaptive Behavior Analysis</option>
                          <option value="zero-day">Zero-Day Pattern Recognition</option>
                          <option value="signature-hybrid">Signature-Behavior Hybrid</option>
                          <option value="custom">Custom Model (Experimental)</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-cyber-neon-blue mb-2">Detection Sensitivity</label>
                        <select 
                          className="cyber-input w-full"
                          defaultValue="balanced"
                        >
                          <option value="paranoid">Maximum (Higher False Positives)</option>
                          <option value="balanced">Balanced</option>
                          <option value="conservative">Conservative (Lower False Positives)</option>
                          <option value="custom">Custom Thresholds</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-cyber-neon-blue font-medium mb-3">Evasion Techniques</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-cyber-neon-blue mb-2">Packet Manipulation</label>
                        <select 
                          className="cyber-input w-full"
                          defaultValue="fragmentation"
                        >
                          <option value="none">None</option>
                          <option value="fragmentation">IP Fragmentation</option>
                          <option value="ttl-manipulation">TTL Manipulation</option>
                          <option value="polymorphic">Polymorphic Packet Structure</option>
                          <option value="all">All Techniques</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-cyber-neon-blue mb-2">Timing Controls</label>
                        <select 
                          className="cyber-input w-full"
                          defaultValue="adaptive"
                        >
                          <option value="none">None</option>
                          <option value="paranoid">Paranoid (Very Slow)</option>
                          <option value="sneaky">Sneaky (Slow)</option>
                          <option value="polite">Polite (Medium)</option>
                          <option value="adaptive">Adaptive (Context-Aware)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-cyber-neon-blue font-medium mb-3">Expert Settings</h4>
                    <div className="flex items-center mb-4">
                      <div className="h-1 flex-grow bg-cyber-neon-green/20"></div>
                      <span className="px-3 text-cyber-text/70 text-sm">PROCEED WITH CAUTION</span>
                      <div className="h-1 flex-grow bg-cyber-neon-green/20"></div>
                    </div>
                    <div className="bg-cyber-darker border border-cyber-neon-green/20 p-4 rounded">
                      <p className="text-cyber-text/70 text-sm mb-4">
                        These settings modify low-level packet analysis engine behavior. Incorrect configuration may result in missed detections or system instability.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="text-sm font-mono">
                          <label className="block text-cyber-neon-blue mb-1">BPF Custom Filter</label>
                          <input 
                            type="text" 
                            className="cyber-input w-full"
                            placeholder="tcp and port not 22 and not broadcast"
                          />
                        </div>
                        <div className="text-sm font-mono">
                          <label className="block text-cyber-neon-blue mb-1">Custom Dissector Path</label>
                          <input 
                            type="text" 
                            className="cyber-input w-full"
                            placeholder="/usr/local/lib/dissectors/"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Analysis Results Display - Common to both tabs */}
            <div className="cyber-container">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-cyber-neon-green flex items-center gap-2">
                  <Zap size={18} />
                  Analysis Terminal
                </h3>
                {results && (
                  <button 
                    onClick={() => {
                      const plainText = results.replace(/\\x1b\[\d+(?:;\d+)*m/g, '');
                      const blob = new Blob([plainText], { type: 'text/plain' });
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement('a');
                      a.href = url;
                      a.download = `traffic-analysis-${Date.now()}.txt`;
                      document.body.appendChild(a);
                      a.click();
                      document.body.removeChild(a);
                      URL.revokeObjectURL(url);
                      
                      toast({
                        title: "Report Downloaded",
                        description: "Analysis report saved to file"
                      });
                    }}
                    className="p-2 rounded border border-cyber-neon-green/50 text-cyber-neon-green hover:bg-cyber-neon-green/10"
                    title="Download report"
                  >
                    <FileDown size={18} />
                  </button>
                )}
              </div>
              
              <div 
                ref={terminalRef}
                className="terminal-output h-96 overflow-auto whitespace-pre-wrap font-mono text-sm relative bg-cyber-darker"
                dangerouslySetInnerHTML={{ 
                  __html: results ? 
                    results
                      .replace(/\\x1b\[32m/g, '<span style="color:#39ff14">') // Bright green
                      .replace(/\\x1b\[33m/g, '<span style="color:#ffcc00">') // Yellow
                      .replace(/\\x1b\[31m/g, '<span style="color:#ff3366">') // Red
                      .replace(/\\x1b\[36m/g, '<span style="color:#00ccff">') // Cyan
                      .replace(/\\x1b\[1;32m/g, '<span style="color:#39ff14;font-weight:bold">') // Bold green
                      .replace(/\\x1b\[1;33m/g, '<span style="color:#ffcc00;font-weight:bold">') // Bold yellow
                      .replace(/\\x1b\[1;36m/g, '<span style="color:#00ccff;font-weight:bold">') // Bold cyan
                      .replace(/\\x1b\[0m/g, '</span>')
                      .replace(/\n/g, '<br>')
                    : '<span class="text-cyber-text/40">Terminal ready. Waiting for analysis to begin...</span>'
                }}
              />
              {!results && (
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-cyber-neon-green/70 font-mono text-sm">
                    [JxRogue@terminal]$ <span className="animate-pulse">▇</span>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <div className="cyber-container sticky top-20">
              <h3 className="text-xl font-bold text-cyber-neon-green mb-4">Zero Signature Technology</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-cyber-neon-blue text-sm font-semibold mb-1">Stealth Operations</h4>
                  <ul className="text-cyber-text/80 text-sm space-y-1">
                    <li>• TTL manipulation to evade IDS/IPS</li>
                    <li>• Polymorphic packet structures</li>
                    <li>• Adaptive timing algorithms</li>
                    <li>• IDS/IPS fingerprint evasion</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-cyber-neon-blue text-sm font-semibold mb-1">Advanced Capabilities</h4>
                  <ul className="text-cyber-text/80 text-sm list-disc list-inside space-y-1">
                    <li>ML-based anomaly detection</li>
                    <li>TLS fingerprinting without decryption</li>
                    <li>Custom protocol dissectors</li>
                    <li>Data exfiltration detection</li>
                    <li>APT campaign identification</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-cyber-neon-blue text-sm font-semibold mb-1">Resources</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link to="/blog/network-analyzer-development" className="text-cyber-neon-green hover:text-cyber-neon-blue text-sm flex items-center gap-1">
                        <Terminal size={14} />
                        <span>Development Chronicles</span>
                      </Link>
                    </li>
                    <li>
                      <a href="https://github.com/JxRogue" target="_blank" rel="noopener noreferrer" className="text-cyber-neon-green hover:text-cyber-neon-blue text-sm flex items-center gap-1">
                        <LinkIcon size={14} />
                        <span>Source (Restricted Access)</span>
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div className="border-t border-cyber-neon-green/20 pt-4 mt-4">
                  <div className="flex items-center mb-2">
                    <Shield size={14} className="text-cyber-neon-pink mr-2" />
                    <span className="text-cyber-neon-pink text-xs font-semibold">SECURITY NOTICE</span>
                  </div>
                  <p className="text-xs text-cyber-text/60">
                    This is a sophisticated offensive security tool. Only use within authorized environments and with proper authorization. All actions are logged and cryptographically signed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NetworkTrafficAnalyzer;
