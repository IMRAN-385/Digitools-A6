import React from 'react';

const Navbar = ({ cartCount, onCartClick, onViewProducts }) => {
  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50 h-20 md:h-24">
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="navbar-start flex-1 shrink-0">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden p-0 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-bold text-base-content/60">
              <li><a onClick={onViewProducts}>Products</a></li>
              <li><a>Features</a></li>
              <li><a>Pricing</a></li>
              <li><a>Testimonials</a></li>
              <li><a>FAQ</a></li>
            </ul>
          </div>
          <a className="text-2xl md:text-3xl font-black cursor-pointer text-gradient-primary tracking-tighter" onClick={onViewProducts}>DigiTools</a>
        </div>
        
        <div className="navbar-center hidden lg:flex flex-none">
          <ul className="menu menu-horizontal px-1 font-bold text-sm tracking-wide text-base-content/70 gap-4">
            <li><a onClick={onViewProducts} className="hover:text-primary transition-colors hover:bg-transparent">Products</a></li>
            <li><a className="hover:text-primary transition-colors hover:bg-transparent">Features</a></li>
            <li><a className="hover:text-primary transition-colors hover:bg-transparent">Pricing</a></li>
            <li><a className="hover:text-primary transition-colors hover:bg-transparent">Testimonials</a></li>
            <li><a className="hover:text-primary transition-colors hover:bg-transparent">FAQ</a></li>
          </ul>
        </div>
        
        <div className="navbar-end flex-1 shrink-0 gap-3 md:gap-6 justify-end items-center">
          <button className="btn btn-ghost p-0 btn-circle hover:bg-transparent" onClick={onCartClick}>
             <div className="indicator">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
               </svg>
               {cartCount > 0 && <span className="badge badge-sm indicator-item border-none text-white h-4 w-4 md:h-5 md:w-5 font-bold" style={{ background: 'linear-gradient(89.15deg, #4F39F6 -30.76%, #9514FA 99.27%)' }}>{cartCount}</span>}
             </div>
          </button>
          <button className="btn btn-link no-underline p-0 hover:no-underline text-base-content font-bold md:text-base opacity-70 hidden md:inline-flex">Login</button>
          <button className="btn border-none text-white rounded-full px-6 md:px-10 font-bold h-10 md:h-12 shadow-xl shadow-primary/10 text-xs md:text-base min-w-max" 
                  style={{ background: 'linear-gradient(89.15deg, #4F39F6 -30.76%, #9514FA 99.27%)' }}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
