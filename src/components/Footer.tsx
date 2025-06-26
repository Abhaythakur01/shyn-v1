import React from 'react';
import { Heart, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-20 border-t border-gray-800/50 relative">
      {/* Seamless gradient transition */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-900 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              SHYN
            </h3>
            <p className="text-gray-400 mb-8 max-w-md leading-relaxed text-lg">
              Empowering artists worldwide to discover, develop, and showcase their creative potential through expert guidance and community support.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-3 bg-gray-800/80 backdrop-blur-sm rounded-2xl hover:bg-purple-600 transition-all duration-300 border border-gray-700/50 hover:border-purple-500/50 hover:scale-110">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-3 bg-gray-800/80 backdrop-blur-sm rounded-2xl hover:bg-purple-600 transition-all duration-300 border border-gray-700/50 hover:border-purple-500/50 hover:scale-110">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-3 bg-gray-800/80 backdrop-blur-sm rounded-2xl hover:bg-purple-600 transition-all duration-300 border border-gray-700/50 hover:border-purple-500/50 hover:scale-110">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-3 bg-gray-800/80 backdrop-blur-sm rounded-2xl hover:bg-purple-600 transition-all duration-300 border border-gray-700/50 hover:border-purple-500/50 hover:scale-110">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-lg">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-lg">Art Forms</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-lg">Experts</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-lg">Membership</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-lg">Blog</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-lg">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-lg">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-lg">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-lg">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-lg">Community Guidelines</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800/50 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-lg mb-4 md:mb-0">
              © 2024 SHYN. All rights reserved.
            </p>
            <div className="flex items-center text-gray-500 text-lg">
              Made with <Heart size={18} className="mx-2 text-red-500" /> for artists everywhere
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;