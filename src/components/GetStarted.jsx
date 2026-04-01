import React from 'react';

const GetStarted = () => {
  const primaryGradient = 'linear-gradient(89.15deg, #4F39F6 -30.76%, #9514FA 99.27%)';

  const steps = [
    {
      id: '01',
      title: 'Create Account',
      description: 'Sign up for free in seconds. No credit card required to get started.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      id: '02',
      title: 'Choose Products',
      description: 'Browse our catalog and select the tools that fit your needs.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-14v10m0-10L4 7m8 4L4 17M4 7v10l8 4" />
        </svg>
      )
    },
    {
      id: '03',
      title: 'Start Creating',
      description: 'Download and start using your premium tools immediately.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <div className="py-24 bg-base-100 px-4 md:px-8 mt-12 overflow-visible">
      <div className="text-center mb-24 px-4">
        <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter text-[#101727]">Get Started In 3 Steps</h2>
        <p className="text-lg md:text-xl text-base-content/40 max-w-2xl mx-auto font-bold opacity-80 leading-relaxed tracking-wide">Start using premium digital tools in minutes, not hours.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto px-4 md:px-0">
        {steps.map((step) => (
          <div key={step.id} className="card bg-base-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] relative overflow-visible transition-all hover:translate-y-[-8px] duration-500 rounded-[2.5rem] border border-base-200">
            <div className="badge border-none text-white absolute -top-4 -right-4 h-11 w-11 rounded-full font-black text-sm shadow-xl z-10 p-0 flex items-center justify-center transform transition-transform group-hover:scale-110" 
                 style={{ background: primaryGradient }}>
                {step.id}
            </div>
            <div className="card-body items-center text-center py-16 px-10">
              <div className="w-24 h-24 rounded-full mb-8 shadow-inner flex items-center justify-center" 
                   style={{ background: 'rgba(79, 57, 246, 0.08)' }}>
                {step.icon}
              </div>
              <h3 className="card-title text-2xl font-black mb-4 tracking-tight text-[#101727]">{step.title}</h3>
              <p className="text-base text-base-content/40 font-bold leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetStarted;
