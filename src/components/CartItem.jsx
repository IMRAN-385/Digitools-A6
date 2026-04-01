import React from 'react';

const CartItem = ({ item, onRemove }) => {
  const { id, name, price, icon } = item;

  return (
    <div className="flex items-center justify-between p-6 md:p-8 bg-white rounded-3xl shadow-sm border border-base-200 transition-all hover:shadow-md mb-4 group overflow-hidden">
      <div className="flex items-center gap-6">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-base-200/30 rounded-2xl flex items-center justify-center p-3 shrink-0 relative shadow-inner">
          <img src={new URL(`../assets/${icon}`, import.meta.url).href} alt={name} className="w-full h-full object-contain relative z-10 scale-110 active:scale-125 transition-transform" />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-xl md:text-2xl font-black md:font-black tracking-tight text-[#101727]">{name}</h3>
          <p className="text-lg md:text-xl font-bold opacity-40 leading-none">${price}</p>
        </div>
      </div>
      <button 
        className="btn btn-ghost hover:bg-rose-50 text-rose-500 font-bold h-12 rounded-xl transition-all p-0 px-4 md:px-6 uppercase tracking-widest text-xs"
        onClick={() => onRemove(id)}
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
