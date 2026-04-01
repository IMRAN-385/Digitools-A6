import React from 'react';

const Pricing = () => {
  const primaryGradient = 'linear-gradient(89.15deg, #4F39F6 -30.76%, #9514FA 99.27%)';

  const plans = [
    {
      name: "Starter",
      description: "Perfect for getting started",
      price: 0,
      features: ["Access to 10 free tools", "Basic templates", "Community support", "1 project per month"],
      buttonText: "Get Started Free",
      isPopular: false
    },
    {
      name: "Pro",
      description: "Best for professionals",
      price: 29,
      features: ["Access to all premium tools", "Unlimited templates", "Priority support", "Unlimited projects", "Cloud sync", "Advanced analytics"],
      buttonText: "Start Pro Trial",
      isPopular: true
    },
    {
      name: "Enterprise",
      description: "For teams and businesses",
      price: 99,
      features: ["Everything in Pro", "Team collaboration", "Custom integrations", "Dedicated support", "SLA guarantee", "Custom branding"],
      buttonText: "Contact Sales",
      isPopular: false
    }
  ];

  return (
    <div className="py-32 px-4 md:px-8 bg-base-100">
      <div className="text-center mb-24 px-4">
        <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter text-[#101727]">Simple, Transparent Pricing</h2>
        <p className="text-xl md:text-2xl text-base-content/40 max-w-3xl mx-auto font-bold opacity-80 leading-relaxed tracking-wide">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 max-w-7xl mx-auto px-4 lg:px-0">
        {plans.map((plan, idx) => (
          <div 
            key={idx} 
            className={`card shadow-2xl relative rounded-[3rem] transition-all hover:translate-y-[-12px] duration-500 overflow-visible p-8 md:p-10 ${plan.isPopular ? 'text-white scale-110 z-10 border-none' : 'bg-base-100 border border-base-200'}`}
            style={plan.isPopular ? { background: primaryGradient } : {}}
          >
            {plan.isPopular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-[#FEF3C7] text-[#D97706] text-xs font-black rounded-full shadow-lg z-20 whitespace-nowrap uppercase tracking-widest border border-[#FCD34D]">Most Popular</div>
            )}
            
            <div className="card-body p-4 flex flex-col h-full">
              <h3 className={`text-3xl font-black mb-2 tracking-tight ${plan.isPopular ? 'text-white' : 'text-[#101727]'}`}>{plan.name}</h3>
              <p className={`mb-10 text-lg font-bold opacity-80 ${plan.isPopular ? 'text-white/80' : 'text-base-content/40'}`}>{plan.description}</p>
              
              <div className="flex items-baseline gap-2 mb-10">
                <span className={`text-6xl font-black tracking-tighter ${plan.isPopular ? 'text-white' : 'text-gradient-primary'}`}>${plan.price}</span>
                <span className={`text-xl font-bold opacity-40 uppercase tracking-widest ${plan.isPopular ? 'text-white/60' : 'text-base-content/40'}`}>/ Mo</span>
              </div>

              <div className={`divider opacity-10 mb-10 ${plan.isPopular ? 'bg-white/20' : 'bg-base-content/5'}`}></div>

              <ul className="space-y-6 mb-12 flex-1">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-4 text-lg font-bold">
                    <div className={`w-6 h-6 rounded-lg flex items-center justify-center p-1 shrink-0 ${plan.isPopular ? 'bg-white text-primary' : 'text-white'}`}
                         style={!plan.isPopular ? { background: primaryGradient } : {}}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className={plan.isPopular ? 'text-white/90' : 'text-base-content/60'}>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="card-actions mt-auto">
                <button className={`btn w-full rounded-2xl h-16 md:h-18 text-xl font-black border-none shadow-2xl transition-all active:scale-95 ${plan.isPopular ? 'bg-white text-primary hover:bg-white hover:scale-101 border-none' : 'text-white shadow-primary/20'}`}
                        style={!plan.isPopular ? { background: primaryGradient } : {}}>
                  {plan.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
