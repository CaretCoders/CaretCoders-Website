import React, { useState } from 'react';
import { apiEndpointsData, sdkExamples, changelogData } from '../data/apiDocs';
import { ApiEndpoint } from '../types';
import { 
  FileCode2, 
  Key, 
  Send, 
  Copy, 
  Check, 
  ChevronRight, 
  RefreshCw,
  Terminal,
  Layers,
  Code
} from 'lucide-react';

export const ApiDocsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Authentication');
  const [selectedEndpoint, setSelectedEndpoint] = useState<ApiEndpoint>(apiEndpointsData[0]);
  const [selectedSdkTab, setSelectedSdkTab] = useState<'javascript' | 'python' | 'go' | 'rust'>('javascript');
  const [copiedCode, setCopiedCode] = useState(false);

  // Live Endpoint Tester State
  const [customReqBody, setCustomReqBody] = useState<string>(selectedEndpoint.requestBody || '');
  const [liveResponse, setLiveResponse] = useState<string | null>(null);
  const [isExecutingApi, setIsExecutingApi] = useState(false);

  // API Key Generator Simulation
  const [generatedKey, setGeneratedKey] = useState<string | null>(null);

  const categories = [
    'Getting Started',
    'Authentication',
    'DetailMint API',
    'AgriTech Telemetry',
    'InkSquirel AI',
    'Webhooks',
    'SDKs & Examples',
    'Changelog'
  ];

  const filteredEndpoints = apiEndpointsData.filter(ep => ep.category === activeCategory);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleRunEndpointTest = () => {
    setIsExecutingApi(true);
    setTimeout(() => {
      setLiveResponse(selectedEndpoint.responseBody);
      setIsExecutingApi(false);
    }, 400);
  };

  const handleGenerateApiKey = () => {
    const key = 'cc_live_' + Array.from({ length: 32 }, () => Math.floor(Math.random() * 16).toString(16)).join('');
    setGeneratedKey(key);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F7] py-16 sm:py-24 text-[#1D1D1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="border-b border-black/[0.06] pb-8 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#86868B]">
            Developer Hub & API Specifications
          </span>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-[-0.035em] text-[#1D1D1F]">
            API Documentation & Reference
          </h1>
          <p className="text-base sm:text-lg text-[#6E6E73] max-w-3xl leading-relaxed">
            Technical API reference, SDK quickstarts, zero-knowledge verification webhooks, and platform release logs.
          </p>
        </div>

        {/* Sidebar + Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Navigation (3 Cols) */}
          <div className="lg:col-span-3 space-y-1 text-xs">
            <div className="text-[11px] font-semibold text-[#86868B] uppercase tracking-wider pb-2 mb-2 border-b border-black/[0.06]">
              Documentation Index
            </div>

            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  const first = apiEndpointsData.find(ep => ep.category === cat);
                  if (first) {
                    setSelectedEndpoint(first);
                    setCustomReqBody(first.requestBody || '');
                    setLiveResponse(null);
                  }
                }}
                className={`w-full text-left px-3.5 py-2.5 rounded-xl font-medium transition-all flex items-center justify-between ${
                  activeCategory === cat 
                    ? 'bg-white text-[#1D1D1F] shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-black/[0.06]' 
                    : 'text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-black/[0.03]'
                }`}
              >
                <span>{cat}</span>
                <ChevronRight className="w-3.5 h-3.5 opacity-50" />
              </button>
            ))}

            {/* Quick Sandbox Key Generator */}
            <div className="pt-6">
              <div className="apple-card p-4 space-y-3 bg-white">
                <div className="flex items-center space-x-2 text-xs font-semibold text-[#1D1D1F]">
                  <Key className="w-3.5 h-3.5 text-[#1D1D1F]" />
                  <span>Sandbox API Key</span>
                </div>
                <p className="text-[11px] text-[#6E6E73]">
                  Generate a temporary authentication token to evaluate CaretCoders sandbox endpoints.
                </p>

                {generatedKey ? (
                  <div className="p-2 bg-[#F5F5F7] rounded-xl font-mono text-[10px] text-[#1D1D1F] break-all border border-black/[0.06]">
                    {generatedKey}
                  </div>
                ) : (
                  <button
                    onClick={handleGenerateApiKey}
                    className="w-full apple-button-primary py-2 text-xs font-medium"
                  >
                    <span>Generate Key</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Right Main Content (9 Cols) */}
          <div className="lg:col-span-9 space-y-8">
            
            {/* Category: SDKs & Examples */}
            {activeCategory === 'SDKs & Examples' ? (
              <div className="apple-card p-6 sm:p-10 space-y-6 bg-white">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-black/[0.06] pb-4">
                  <div>
                    <h2 className="text-2xl font-semibold text-[#1D1D1F]">Official Client SDKs</h2>
                    <p className="text-xs text-[#6E6E73] mt-1">Multi-language SDK examples for integrating with CaretCoders APIs.</p>
                  </div>

                  {/* SDK Tabs */}
                  <div className="flex p-1 bg-black/[0.04] rounded-full">
                    {(['javascript', 'python', 'go', 'rust'] as const).map(tab => (
                      <button
                        key={tab}
                        onClick={() => setSelectedSdkTab(tab)}
                        className={`px-3 py-1 text-xs rounded-full font-mono capitalize transition-all ${
                          selectedSdkTab === tab 
                            ? 'bg-white text-[#1D1D1F] shadow-[0_1px_4px_rgba(0,0,0,0.06)] font-semibold' 
                            : 'text-[#6E6E73] hover:text-[#1D1D1F]'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-[#86868B]">
                    <span>SDK IMPLEMENTATION ({selectedSdkTab.toUpperCase()})</span>
                    <button
                      onClick={() => handleCopy(sdkExamples[selectedSdkTab])}
                      className="flex items-center space-x-1 text-xs text-[#1D1D1F] hover:text-black font-medium"
                    >
                      {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedCode ? 'COPIED' : 'COPY CODE'}</span>
                    </button>
                  </div>

                  <div className="p-5 bg-[#1D1D1F] rounded-2xl font-mono text-xs text-[#F5F5F7] overflow-x-auto border border-black/[0.1]">
                    <pre className="whitespace-pre"><code>{sdkExamples[selectedSdkTab]}</code></pre>
                  </div>
                </div>
              </div>
            ) : activeCategory === 'Changelog' ? (
              /* Changelog View */
              <div className="apple-card p-6 sm:p-10 space-y-8 bg-white">
                <div className="border-b border-black/[0.06] pb-4">
                  <h2 className="text-2xl font-semibold text-[#1D1D1F]">Platform Release Changelog</h2>
                  <p className="text-xs text-[#6E6E73] mt-1">Audit log of system capabilities, protocol versions, and breaking changes.</p>
                </div>

                <div className="space-y-6">
                  {changelogData.map(item => (
                    <div key={item.version} className="p-5 bg-[#F5F5F7] rounded-2xl border border-black/[0.04] space-y-3">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="font-semibold text-sm text-[#1D1D1F]">Version {item.version}</span>
                        <span className="text-[#86868B]">{item.date}</span>
                      </div>
                      <div className="space-y-1.5 text-xs text-[#6E6E73]">
                        {item.changes.map((ch, cIdx) => (
                          <div key={cIdx} className="flex items-start space-x-2">
                            <span className="text-emerald-700 font-semibold">•</span>
                            <span>{ch.description}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              /* Standard API Reference & Endpoint Runner View */
              <div className="space-y-8">
                {/* Endpoint Sub-Selector */}
                {filteredEndpoints.length > 1 && (
                  <div className="flex flex-wrap gap-2">
                    {filteredEndpoints.map(ep => (
                      <button
                        key={ep.id}
                        onClick={() => {
                          setSelectedEndpoint(ep);
                          setCustomReqBody(ep.requestBody || '');
                          setLiveResponse(null);
                        }}
                        className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all flex items-center space-x-2 border ${
                          selectedEndpoint.id === ep.id
                            ? 'bg-white border-[#1D1D1F] text-[#1D1D1F] shadow-sm'
                            : 'bg-[#F5F5F7] border-black/[0.04] text-[#6E6E73] hover:text-[#1D1D1F]'
                        }`}
                      >
                        <span className={`text-[10px] px-1.5 py-0.5 rounded font-semibold ${
                          ep.method === 'GET' ? 'bg-blue-100 text-blue-800' : 'bg-emerald-100 text-emerald-800'
                        }`}>
                          {ep.method}
                        </span>
                        <span>{ep.title}</span>
                      </button>
                    ))}
                  </div>
                )}

                {/* Selected Endpoint Card */}
                <div className="apple-card p-6 sm:p-10 space-y-6 bg-white">
                  <div className="space-y-2 border-b border-black/[0.06] pb-4">
                    <div className="flex items-center space-x-3">
                      <span className={`text-xs font-mono px-2 py-0.5 rounded font-semibold ${
                        selectedEndpoint.method === 'GET' ? 'bg-blue-100 text-blue-800' : 'bg-emerald-100 text-emerald-800'
                      }`}>
                        {selectedEndpoint.method}
                      </span>
                      <span className="font-mono text-xs sm:text-sm text-[#1D1D1F] font-semibold">
                        {selectedEndpoint.path}
                      </span>
                    </div>

                    <h2 className="text-2xl font-semibold text-[#1D1D1F]">
                      {selectedEndpoint.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-[#6E6E73]">
                      {selectedEndpoint.description}
                    </p>
                  </div>

                  {/* Parameters Table */}
                  {selectedEndpoint.parameters && selectedEndpoint.parameters.length > 0 && (
                    <div className="space-y-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#86868B] block">
                        Parameters
                      </span>
                      <div className="grid grid-cols-1 gap-2">
                        {selectedEndpoint.parameters.map((param, pIdx) => (
                          <div key={pIdx} className="p-3 bg-[#F5F5F7] rounded-xl font-mono text-xs border border-black/[0.04] flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                            <div className="flex items-center space-x-2">
                              <span className="font-semibold text-[#1D1D1F]">{param.name}</span>
                              <span className="text-[10px] px-1.5 py-0.5 bg-white border border-black/[0.06] rounded text-[#86868B]">{param.type}</span>
                              {param.required && <span className="text-[10px] text-red-600 font-sans font-medium">required</span>}
                            </div>
                            <span className="text-xs font-sans text-[#6E6E73]">{param.desc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Interactive Live Endpoint Tester Sandbox */}
                  <div className="pt-4 border-t border-black/[0.06] space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#1D1D1F] flex items-center gap-1.5">
                        <Terminal className="w-3.5 h-3.5" />
                        Live Endpoint Test Sandbox
                      </span>

                      <button
                        onClick={handleRunEndpointTest}
                        disabled={isExecutingApi}
                        className="apple-button-primary px-4 py-1.5 text-xs font-medium"
                      >
                        {isExecutingApi ? (
                          <RefreshCw className="w-3.5 h-3.5 animate-spin mr-1.5" />
                        ) : (
                          <Send className="w-3.5 h-3.5 mr-1.5" />
                        )}
                        <span>{isExecutingApi ? 'Executing...' : 'Execute Request'}</span>
                      </button>
                    </div>

                    {/* Request Payload (if applicable) */}
                    {selectedEndpoint.requestBody && (
                      <div className="space-y-1.5">
                        <span className="text-[11px] font-mono text-[#86868B] block">REQUEST BODY (JSON)</span>
                        <textarea
                          rows={4}
                          value={customReqBody}
                          onChange={(e) => setCustomReqBody(e.target.value)}
                          className="w-full p-3 bg-[#F5F5F7] rounded-xl font-mono text-xs text-[#1D1D1F] border border-black/[0.08] focus:outline-none focus:ring-2 focus:ring-black/[0.1]"
                        />
                      </div>
                    )}

                    {/* Response Payload */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-[11px] font-mono text-[#86868B]">
                        <span>RESPONSE PAYLOAD (200 OK)</span>
                        <button
                          onClick={() => handleCopy(liveResponse || selectedEndpoint.responseBody)}
                          className="text-[#1D1D1F] hover:text-black"
                        >
                          {copiedCode ? 'COPIED' : 'COPY'}
                        </button>
                      </div>
                      <div className="p-4 bg-[#1D1D1F] rounded-2xl font-mono text-xs text-[#F5F5F7] overflow-x-auto border border-black/[0.1]">
                        <pre className="whitespace-pre"><code>{liveResponse || selectedEndpoint.responseBody}</code></pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};
