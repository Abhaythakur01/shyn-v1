import React from 'react';

const ScrollbarDemo: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Modern Scrollbar Design Demo
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Default Scrollbar */}
          <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 text-purple-400">Default Scrollbar</h2>
            <div className="h-64 overflow-y-auto bg-gray-900 rounded-lg p-4">
              <div className="space-y-4">
                {Array.from({ length: 20 }, (_, i) => (
                  <div key={i} className="bg-gray-700 p-3 rounded-lg">
                    <p className="text-gray-300">
                      Content item {i + 1} - This demonstrates the default floating scrollbar design
                      with semi-transparent white thumb and smooth hover effects.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Custom Scrollbar */}
          <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 text-pink-400">Custom Scrollbar</h2>
            <div className="h-64 overflow-y-auto bg-gray-900 rounded-lg p-4 custom-scrollbar">
              <div className="space-y-4">
                {Array.from({ length: 20 }, (_, i) => (
                  <div key={i} className="bg-gray-700 p-3 rounded-lg">
                    <p className="text-gray-300">
                      Content item {i + 1} - This shows the custom scrollbar variant
                      with slightly different opacity and smoother animations.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Thin Scrollbar */}
          <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 text-indigo-400">Thin Scrollbar</h2>
            <div className="h-64 overflow-y-auto bg-gray-900 rounded-lg p-4 thin-scrollbar">
              <div className="space-y-4">
                {Array.from({ length: 20 }, (_, i) => (
                  <div key={i} className="bg-gray-700 p-3 rounded-lg">
                    <p className="text-gray-300">
                      Content item {i + 1} - This demonstrates the thin scrollbar variant
                      perfect for compact interfaces and mobile designs.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Purple Theme Scrollbar */}
          <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 text-purple-400">Purple Theme</h2>
            <div className="h-64 overflow-y-auto bg-gray-900 rounded-lg p-4 purple-scrollbar">
              <div className="space-y-4">
                {Array.from({ length: 20 }, (_, i) => (
                  <div key={i} className="bg-purple-900/30 p-3 rounded-lg border border-purple-700/30">
                    <p className="text-purple-200">
                      Content item {i + 1} - Purple-themed scrollbar that matches
                      your brand colors and maintains visual consistency.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pink Theme Scrollbar */}
          <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 text-pink-400">Pink Theme</h2>
            <div className="h-64 overflow-y-auto bg-gray-900 rounded-lg p-4 pink-scrollbar">
              <div className="space-y-4">
                {Array.from({ length: 20 }, (_, i) => (
                  <div key={i} className="bg-pink-900/30 p-3 rounded-lg border border-pink-700/30">
                    <p className="text-pink-200">
                      Content item {i + 1} - Pink-themed scrollbar variant
                      for accent sections and special content areas.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Horizontal Scrollbar Demo */}
          <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 text-emerald-400">Horizontal Scroll</h2>
            <div className="overflow-x-auto bg-gray-900 rounded-lg p-4">
              <div className="flex space-x-4 w-max">
                {Array.from({ length: 10 }, (_, i) => (
                  <div key={i} className="bg-gray-700 p-4 rounded-lg min-w-48">
                    <h3 className="font-semibold text-white mb-2">Card {i + 1}</h3>
                    <p className="text-gray-300 text-sm">
                      Horizontal scrolling with the same beautiful floating scrollbar design.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="mt-12 bg-gray-800 rounded-2xl p-8 border border-gray-700">
          <h2 className="text-2xl font-semibold mb-6 text-center">Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-purple-400 mb-4">Design Features</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Floating thumb without visible track</li>
                <li>• Pill/capsule shape with fully rounded ends</li>
                <li>• Semi-transparent (40-60% opacity)</li>
                <li>• Light-colored thumb for dark backgrounds</li>
                <li>• Smooth hover and active states</li>
                <li>• Responsive sizing for different devices</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-pink-400 mb-4">Browser Support</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Webkit browsers (Chrome, Safari, Edge)</li>
                <li>• Firefox with fallback styling</li>
                <li>• Cross-browser compatibility</li>
                <li>• Accessibility features included</li>
                <li>• Reduced motion support</li>
                <li>• High contrast mode support</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Usage Instructions */}
        <div className="mt-8 bg-gray-800 rounded-2xl p-8 border border-gray-700">
          <h2 className="text-2xl font-semibold mb-6 text-center">Usage Instructions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-indigo-400 mb-2">Apply to Specific Elements</h3>
              <pre className="bg-gray-900 p-4 rounded-lg text-sm overflow-x-auto text-green-400">
{`<div className="custom-scrollbar overflow-y-auto">
  <!-- Your scrollable content -->
</div>`}
              </pre>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-indigo-400 mb-2">Theme Variants</h3>
              <pre className="bg-gray-900 p-4 rounded-lg text-sm overflow-x-auto text-green-400">
{`<div className="purple-scrollbar overflow-y-auto">
<div className="pink-scrollbar overflow-y-auto">
<div className="thin-scrollbar overflow-y-auto">`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollbarDemo;