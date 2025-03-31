import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="bg-black/50 backdrop-blur-lg border-b border-gray-800 fixed w-full z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href='/' className="text-white  flex gap-2 items-center text-2xl font-bold">
            <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.46689 4.39207C5.75949 4.68526 5.75902 5.16013 5.46583 5.45273C3.78722 7.128 2.75 9.44218 2.75 12C2.75 14.5878 3.81163 16.9262 5.52503 18.6059C5.82082 18.8959 5.82554 19.3707 5.53557 19.6665C5.24561 19.9623 4.77076 19.967 4.47497 19.677C2.48564 17.7269 1.25 15.0071 1.25 12C1.25 9.02783 2.45721 6.33616 4.40623 4.39102C4.69941 4.09842 5.17429 4.09889 5.46689 4.39207ZM18.6164 4.46446C18.9122 4.17449 19.387 4.17921 19.677 4.475C21.5771 6.41326 22.75 9.07043 22.75 12C22.75 14.9645 21.5491 17.6499 19.609 19.5938C19.3164 19.887 18.8415 19.8875 18.5484 19.5949C18.2552 19.3023 18.2547 18.8274 18.5473 18.5342C20.2182 16.86 21.25 14.5512 21.25 12C21.25 9.47873 20.2422 7.1943 18.6059 5.52507C18.3159 5.22928 18.3206 4.75443 18.6164 4.46446ZM8.30923 7.48757C8.59226 7.79001 8.57652 8.26462 8.27408 8.54765C7.32517 9.43564 6.75 10.6502 6.75 11.9822C6.75 13.3297 7.33869 14.5573 8.30756 15.4479C8.61251 15.7282 8.63248 16.2026 8.35216 16.5076C8.07185 16.8125 7.59739 16.8325 7.29244 16.5522C6.03967 15.4006 5.25 13.7824 5.25 11.9822C5.25 10.203 6.02148 8.60128 7.24916 7.45242C7.5516 7.16939 8.02621 7.18513 8.30923 7.48757ZM15.7429 7.52559C16.0292 7.22626 16.5039 7.21571 16.8033 7.50202C18.0005 8.64714 18.75 10.2286 18.75 11.9822C18.75 13.7568 17.9825 15.3548 16.7604 16.503C16.4586 16.7867 15.9839 16.7719 15.7003 16.47C15.4167 16.1681 15.4315 15.6935 15.7333 15.4099C16.6778 14.5225 17.25 13.3108 17.25 11.9822C17.25 10.6692 16.6911 9.47046 15.7664 8.58599C15.4671 8.29968 15.4566 7.82492 15.7429 7.52559Z" fill="#60a5fa"></path> <path d="M13.6563 10.4512C14.5521 11.1088 15 11.4376 15 12.0001C15 12.5625 14.5521 12.8913 13.6563 13.549C13.4091 13.7305 13.1638 13.9014 12.9384 14.0439C12.7407 14.1688 12.5168 14.2981 12.2849 14.425C11.3913 14.9141 10.9444 15.1586 10.5437 14.8879C10.1429 14.6171 10.1065 14.0503 10.0337 12.9167C10.0131 12.5961 10 12.2818 10 12.0001C10 11.7183 10.0131 11.404 10.0337 11.0834C10.1065 9.94982 10.1429 9.38301 10.5437 9.11226C10.9444 8.8415 11.3913 9.08605 12.2849 9.57515C12.5168 9.70203 12.7407 9.83129 12.9384 9.95625C13.1638 10.0987 13.4091 10.2696 13.6563 10.4512Z" fill="#60a5fa"></path> </g></svg>
           <span> Stream<span className="text-blue-400">Sync</span></span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#get-started"
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex items-center gap-2 transition-colors"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-400 hover:text-white focus:outline-none"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#get-started"
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;