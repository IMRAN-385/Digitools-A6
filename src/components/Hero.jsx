import React from 'react';
import heroImg from '../assets/6224296172378066218_120.jpg';

const Hero = ({ onExploreClick }) => {
  const primaryGradient = 'linear-gradient(89.15deg, #4F39F6 -30.76%, #9514FA 99.27%)';

  return (
    <div className="hero min-h-[75vh] md:min-h-[85vh] bg-base-100 flex items-center overflow-visible">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 py-12 md:py-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-8">
              <div className="badge border-none text-white h-8 px-5 font-bold text-[10px] md:text-sm flex items-center gap-3 rounded-full shadow-md" 
                   style={{ background: primaryGradient }}>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping shadow-2xl absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                New: AI-Powered Tools Available
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight mb-8 text-[#101727]">
              Supercharge Your <span className="italic text-gradient-primary">Digital Workflow</span>
            </h1>
            
            <p className="text-base md:text-xl text-base-content/50 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0 font-bold opacity-80">
              Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button 
                className="btn border-none text-white btn-lg rounded-full px-8 md:px-12 h-14 md:h-16 shadow-2xl shadow-primary/20 font-black text-sm md:text-lg transition-transform active:scale-95" 
                style={{ background: primaryGradient }}
                onClick={onExploreClick}
              >
                Explore Products
              </button>
              <button className="btn btn-outline border-2 border-primary text-primary btn-lg rounded-full px-8 md:px-12 h-14 md:h-16 font-black text-sm md:text-lg group hover:bg-primary/5">
                <div className="w-8 h-8 rounded-full flex items-center justify-center mr-2 group-hover:scale-110 transition-all text-white shadow-xl shadow-primary/20" 
                     style={{ background: primaryGradient }}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                Watch Demo
              </button>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-[640px] relative mt-12 lg:mt-0">
            <div className="absolute -inset-4 opacity-5 rounded-[4rem] blur-3xl -z-10 rotate-6" style={{ background: primaryGradient }}></div>
            <img src={heroImg} className="w-full rounded-[3rem] shadow-2xl transition-transform hover:scale-101 border-8 border-base-100" alt="Hero" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
