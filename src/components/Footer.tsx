import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Instagram, Facebook, Youtube } from 'lucide-react';

// --- NEW: Custom SVG component for the "X" logo ---
const XIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Footer: React.FC = () => {
  // --- UPDATED: Social links with placeholders and the new X icon ---
  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com", name: "Instagram" },
    { icon: XIcon, href: "https://x.com", name: "X (formerly Twitter)" },
    { icon: Facebook, href: "https://facebook.com", name: "Facebook" },
    { icon: Youtube, href: "https://youtube.com", name: "Youtube" },
  ];

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Art Forms', path: '/who-are-you' },
    { name: 'Experts', path: '/experts' },
    { name: 'Membership', path: '/membership' },
    { name: 'Blog', path: '/blogs' },
  ];

  const supportLinks = [
    { name: 'Help Center', path: '/help-center' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms of Service', path: '/terms-of-service' },
    { name: 'Community Guidelines', path: '/community-guidelines' },
  ];

  return (
    <footer className="bg-black text-white py-20 border-t border-gray-800/50 relative">
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
              {socialLinks.map(link => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={link.name} 
                  className="p-3 bg-gray-800/80 backdrop-blur-sm rounded-2xl hover:bg-purple-600 transition-all duration-300 border border-gray-700/50 hover:border-purple-500/50 hover:scale-110"
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-white transition-colors duration-300 text-lg">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-white transition-colors duration-300 text-lg">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800/50 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-lg mb-4 md:mb-0">
              © {new Date().getFullYear()} SHYN. All rights reserved.
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
