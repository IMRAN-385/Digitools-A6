import React from 'react';

const Stats = () => {
  return (
    <div className="w-full text-white py-16 md:py-24" style={{ background: 'linear-gradient(89.15deg, #4F39F6 -30.76%, #9514FA 99.27%)' }}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-0">
          <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-5xl md:text-6xl font-black mb-2 opacity-100 tracking-tighter">50K+</h2>
            <p className="text-base md:text-lg opacity-70 font-bold uppercase tracking-[0.2em] mt-2">Active Users</p>
          </div>
          
          <div className="hidden md:block w-px h-20 bg-white/20"></div>
          
          <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-5xl md:text-6xl font-black mb-2 opacity-100 tracking-tighter">200+</h2>
            <p className="text-base md:text-lg opacity-70 font-bold uppercase tracking-[0.2em] mt-2">Premium Tools</p>
          </div>
          
          <div className="hidden md:block w-px h-20 bg-white/20"></div>
          
          <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-5xl md:text-6xl font-black mb-2 opacity-100 tracking-tighter">4.9</h2>
            <p className="text-base md:text-lg opacity-70 font-bold uppercase tracking-[0.2em] mt-2">Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
