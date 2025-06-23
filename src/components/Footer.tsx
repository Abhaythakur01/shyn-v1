import React from 'react';
import { Heart, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              SHYN
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering artists worldwide to discover, develop, and showcase their creative potential through expert guidance and community support.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-purple-600 transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-purple-600 transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-purple-600 transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-purple-600 transition-colors duration-200">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Art Forms</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Experts</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Membership</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Blog</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Community Guidelines</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 SHYN. All rights reserved.
            </p>
            <div className="flex items-center text-gray-400 text-sm">
              Made with <Heart size={16} className="mx-1 text-red-500" /> for artists everywhere
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;