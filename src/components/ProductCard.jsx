import React from 'react';

const ProductCard = ({ product, onAddToCart, isAdded }) => {
  const { name, description, price, period, tag, features, icon } = product;
  const primaryGradient = 'linear-gradient(89.15deg, #4F39F6 -30.76%, #9514FA 99.27%)';

  return (
    <div className="card bg-base-100 shadow-2xl border border-base-200 transition-all hover:translate-y-[-12px] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] rounded-[3rem] overflow-hidden group p-8 md:p-10">
      <div className="card-body p-0 gap-6 flex flex-col h-full">
        <div className="flex justify-between items-start mb-2">
          <div className="w-16 h-16 bg-base-200/50 rounded-2xl flex items-center justify-center p-3 relative overflow-hidden shadow-inner">
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity" style={{ background: primaryGradient }}></div>
            <img src={new URL(`../assets/${icon}`, import.meta.url).href} alt={name} className="w-full h-full object-contain relative z-10 transition-transform group-hover:scale-110" />
          </div>
          
          {tag && (
            <div className={`badge border-none text-[10px] font-black px-4 py-2.5 h-auto rounded-full shadow-sm uppercase tracking-widest
                             ${tag === 'Best Seller' ? 'bg-[#FEF3C7] text-[#D97706]' : 
                               tag === 'Popular' ? 'bg-[#EEF2FF] text-[#4F46E5]' : 
                               tag === 'New' ? 'bg-[#F0FDF4] text-[#16A34A]' : 'bg-base-200 text-base-content/60'}`}
            >
              {tag}
            </div>
          )}
        </div>

        <div>
           <h2 className="card-title text-2xl md:text-3xl font-black mb-3 tracking-tighter text-[#101727] group-hover:text-primary transition-colors">{name}</h2>
           <p className="text-base text-base-content/40 leading-relaxed h-16 line-clamp-2 md:line-clamp-3 font-bold opacity-80">{description}</p>
        </div>

        <div className="flex items-baseline gap-1 py-1">
          <span className="text-3xl md:text-4xl font-black text-[#101727] tracking-tighter leading-none">${price}</span>
          <span className="text-xs font-bold text-base-content/30 tracking-widest uppercase opacity-70">/ {period}</span>
        </div>

        <div className="divider my-0 opacity-10 bg-base-content/5"></div>

        <ul className="space-y-4 flex-1">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm md:text-base font-bold text-base-content/60 leading-tight">
              <div className="w-5 h-5 rounded-md flex items-center justify-center text-[#22C55E] p-0.5 shrink-0 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              {feature}
            </li>
          ))}
        </ul>

        <div className="card-actions mt-6">
          <button
            className={`btn border-none w-full rounded-full text-lg md:text-xl font-black h-16 md:h-18 shadow-2xl transition-all active:scale-95
                       ${isAdded ? 'bg-success text-white shadow-success/20' : 'text-white'}`}
            style={!isAdded ? { background: primaryGradient } : {}}
            onClick={() => onAddToCart(product)}
          >
            {isAdded ? (
                <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" d="M5 13l4 4L19 7" />
                    </svg>
                    Added to Cart
                </div>
            ) : 'Buy Now'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
