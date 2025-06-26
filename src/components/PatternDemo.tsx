import React from 'react';
import DotGridBackground from './DotGridBackground';
import { downloadDotGridPNG } from '../utils/generateDotGridPNG';

const PatternDemo: React.FC = () => {
  const handleDownloadPNG = () => {
    downloadDotGridPNG('subtle-dot-grid-pattern.png');
  };

  const handleDownloadSVG = () => {
    const svgContent = `<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="dotGrid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
      <rect width="20" height="20" fill="#FFFFFF"/>
      <circle cx="10" cy="10" r="1" fill="#F5F5F5" opacity="0.18"/>
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="url(#dotGrid)"/>
</svg>`;
    
    const blob = new Blob([svgContent], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = 'subtle-dot-grid-pattern.svg';
    link.href = url;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Subtle Dot Grid Pattern Demo
        </h1>
        
        {/* Pattern Preview */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8 relative overflow-hidden">
          <DotGridBackground opacity={0.15} />
          <div className="relative z-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Pattern Preview
            </h2>
            <p className="text-gray-600 mb-4">
              This demonstrates the subtle dot grid pattern with 20px spacing, 2px diameter dots, 
              and 15% opacity. The pattern is barely visible but adds sophisticated texture.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-700 mb-2">Specifications</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Dot color: #F5F5F5 (very light gray)</li>
                  <li>• Background: #FFFFFF (pure white)</li>
                  <li>• Spacing: 20px between dots</li>
                  <li>• Dot diameter: 2px (1px radius)</li>
                  <li>• Opacity: 15-20%</li>
                  <li>• Perfect 90-degree alignment</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-700 mb-2">Features</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Seamless and tileable</li>
                  <li>• Minimalist design</li>
                  <li>• Enhances readability</li>
                  <li>• Sophisticated texture</li>
                  <li>• Cross-browser compatible</li>
                  <li>• Responsive scaling</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Download Options */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Export Pattern
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleDownloadSVG}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              Download SVG Pattern
            </button>
            <button
              onClick={handleDownloadPNG}
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium"
            >
              Download PNG Pattern
            </button>
          </div>
          <p className="text-sm text-gray-500 text-center mt-4">
            SVG format is recommended for web use. PNG format is ideal for design software.
          </p>
        </div>

        {/* Usage Examples */}
        <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Usage Examples
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">CSS Background</h3>
              <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`background-image: radial-gradient(circle at center, #F5F5F5 1px, transparent 1px);
background-size: 20px 20px;
background-color: #FFFFFF;
opacity: 0.15;`}
              </pre>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">React Component</h3>
              <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`<DotGridBackground opacity={0.15} className="your-custom-class" />`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatternDemo;