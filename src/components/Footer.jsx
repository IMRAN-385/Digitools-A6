import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#101727] text-white py-14 lg:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-16 mb-16 lg:mb-20">
          <div className="flex-1 max-w-sm">
            <h2 className="text-3xl md:text-4xl font-black mb-8 md:mb-10 tracking-tighter">DigiTools</h2>
            <p className="text-base md:text-lg opacity-60 leading-relaxed font-bold">
              Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
            </p>
          </div>
          
          <div className="flex flex-wrap lg:flex-nowrap gap-x-12 gap-y-10 lg:gap-24">
            <div>
              <h3 className="text-lg font-black mb-6 md:mb-8 tracking-widest uppercase opacity-80">Product</h3>
              <ul className="space-y-4 opacity-50 font-bold text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Templates</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Integrations</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-black mb-6 md:mb-8 tracking-widest uppercase opacity-80">Company</h3>
              <ul className="space-y-4 opacity-50 font-bold text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Press</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-black mb-6 md:mb-8 tracking-widest uppercase opacity-80">Resources</h3>
              <ul className="space-y-4 opacity-50 font-bold text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>

            <div className="min-w-[140px]">
              <h3 className="text-lg font-black mb-6 md:mb-8 tracking-widest uppercase opacity-80">Social Links</h3>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#101727] hover:scale-110 transition-transform shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#101727] hover:scale-110 transition-transform shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.249 5 15.333 5H18V0h-3.667C10.51 0 9 1.792 9 4.833V8z"></path></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#101727] hover:scale-110 transition-transform shadow-lg p-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="opacity-30 font-bold text-xs uppercase tracking-widest">© 2026 Digitools. All rights reserved.</p>
          <div className="flex gap-8 opacity-30 font-bold text-xs uppercase tracking-widest">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
