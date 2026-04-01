import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import ProductCard from './components/ProductCard';
import CartItem from './components/CartItem';
import GetStarted from './components/GetStarted';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

// Data from JSON
import productsData from './data/products.json';

const App = () => {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState('products'); // 'products' or 'cart'
  const primaryGradient = 'linear-gradient(89.15deg, #4F39F6 -30.76%, #9514FA 99.27%)';

  const addToCart = (product) => {
    const alreadyInCart = cart.find((item) => item.id === product.id);
    if (alreadyInCart) {
      toast.info(`${product.name} is already in your cart!`, {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    }
    setCart([...cart, product]);
    toast.success(`${product.name} added to cart!`, {
      position: "top-center",
      autoClose: 2000,
    });
  };

  const removeFromCart = (id) => {
    const product = cart.find(item => item.id === id);
    setCart(cart.filter((item) => item.id !== id));
    toast.error(`${product?.name || 'Product'} removed from cart.`, {
      position: "top-center",
      autoClose: 2000,
    });
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.warning("Your cart is empty!", {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    }
    setCart([]);
    toast.success("Checkout successful! Thank you for your purchase.", {
      position: "top-center",
      autoClose: 3000,
    });
    setView('products');
  };

  const totalCartPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="min-h-screen bg-base-100 font-sans text-base-content antialiased overflow-x-hidden">
      <Navbar
        cartCount={cart.length}
        onCartClick={() => setView('cart')}
        onViewProducts={() => setView('products')}
      />
      
      <main>
        <Hero onExploreClick={() => {
          document.getElementById('main-content').scrollIntoView({ behavior: 'smooth' });
          setView('products');
        }} />
        
        <Stats />

        <section id="main-content" className="py-24 max-w-7xl mx-auto min-h-[700px] px-4 md:px-8">
          <div className="text-center mb-16 px-4">
            <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter text-[#101727]">Premium Digital Tools</h2>
            <p className="text-base md:text-xl text-base-content/40 max-w-3xl mx-auto mb-16 font-bold leading-relaxed opacity-80">
              Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
            </p>
            
            <div className="inline-flex bg-base-100 p-2 rounded-full shadow-xl border border-base-200">
              <button
                onClick={() => setView('products')}
                className={`btn btn-lg border-none px-12 rounded-full transition-all duration-500 whitespace-nowrap h-12 md:h-14 text-base md:text-lg font-black tracking-tight
                           ${view === 'products' ? 'text-white shadow-xl scale-105' : 'btn-ghost text-base-content/30 opacity-60'}`}
                style={view === 'products' ? { background: primaryGradient } : {}}
              >
                Products
              </button>
              <button
                onClick={() => setView('cart')}
                className={`btn btn-lg border-none px-12 rounded-full transition-all duration-500 whitespace-nowrap h-12 md:h-14 text-base md:text-lg font-black tracking-tight
                           ${view === 'cart' ? 'text-white shadow-xl scale-105' : 'btn-ghost text-base-content/30 opacity-60'}`}
                style={view === 'cart' ? { background: primaryGradient } : {}}
              >
                Cart ({cart.length})
              </button>
            </div>
          </div>

          {view === 'products' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
              {productsData.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={addToCart}
                  isAdded={cart.some(item => item.id === product.id)}
                />
              ))}
            </div>
          ) : (
            <div className="max-w-4xl mx-auto bg-base-200/20 rounded-[3rem] shadow-2xl border border-base-200 p-10 md:p-16 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-2 h-full opacity-40" style={{ background: primaryGradient }}></div>
              <h3 className="text-3xl font-black mb-12 flex items-center gap-5 tracking-tighter text-[#101727]">
                Your Cart
              </h3>
              
              {cart.length === 0 ? (
                <div className="text-center py-20 bg-base-100 rounded-[2.5rem] border-2 border-dashed border-base-300">
                  <div className="bg-base-200/50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-10 shadow-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 opacity-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                  <h4 className="text-3xl font-black opacity-20 mb-3 tracking-tighter">Cart is empty</h4>
                  <p className="text-xl text-base-content/40 mb-12 max-w-sm mx-auto font-bold opacity-80 leading-relaxed">It looks like you haven't added any products yet. Browse our selection.</p>
                  <button onClick={() => setView('products')} className="btn border-none text-white rounded-full px-12 h-14 md:h-16 text-lg font-black shadow-2xl shadow-primary/20" style={{ background: primaryGradient }}>Explore Store</button>
                </div>
              ) : (
                <div className="space-y-6">
                  {cart.map((item, idx) => (
                    <CartItem
                      key={`${item.id}-${idx}`}
                      item={item}
                      onRemove={removeFromCart}
                    />
                  ))}
                  
                  <div className="pt-12 mt-12 border-t border-base-content/5 flex flex-col gap-10">
                    <div className="flex justify-between items-center px-4">
                      <span className="text-xl opacity-30 font-black tracking-widest uppercase">Total:</span>
                      <span className="text-5xl font-black text-[#101727] tracking-tighter">${totalCartPrice}</span>
                    </div>
                    <button
                      className="btn border-none text-white rounded-full w-full h-16 md:h-18 text-xl font-black shadow-2xl transition-transform hover:scale-101 active:scale-95"
                      style={{ background: primaryGradient }}
                      onClick={handleCheckout}
                    >
                      Proceed To Checkout
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </section>

        <GetStarted />
        
        <Pricing />
        
        <div className="w-full text-white py-32 text-center px-4 mt-20 relative overflow-hidden shadow-2xl" 
             style={{ background: primaryGradient }}>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-5 rounded-full blur-[140px] -mr-64 -mt-64 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-black opacity-10 rounded-full blur-[120px] -ml-64 -mb-64 pointer-events-none"></div>
          
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <h2 className="text-5xl md:text-7xl font-black mb-10 leading-[1.05] max-w-4xl mx-auto tracking-tighter">Ready To Transform Your Workflow?</h2>
            <p className="text-xl md:text-2xl opacity-80 max-w-2xl mx-auto mb-16 leading-relaxed font-bold tracking-wide">
                Join thousands of professionals who are already using DigiTools to work smarter.
                <span className="block mt-4 opacity-70">Start your free trial today.</span>
            </p>
            <div className="flex flex-wrap gap-6 justify-center items-center mb-10">
              <button 
                className="btn bg-white text-primary hover:bg-neutral-100 hover:scale-105 border-none rounded-full px-12 md:px-16 h-16 md:h-18 text-xl font-black shadow-2xl transition-all"
                onClick={() => setView('products')}
              >
                Explore Products
              </button>
              <button className="btn btn-outline border-2 border-white/40 text-white hover:bg-white/10 hover:border-white rounded-full px-12 md:px-14 h-16 md:h-18 text-xl font-black shadow-lg transition-all">View Pricing</button>
            </div>
            <p className="text-sm md:text-base opacity-40 font-bold tracking-widest uppercase">14-day free trial • No credit card required • Cancel anytime</p>
          </div>
        </div>
      </main>

      <Footer />

      <ToastContainer hideProgressBar={false} newestOnTop closeOnClick pauseOnFocusLoss draggable pauseOnHover theme="colored" />
    </div>
  );
};

export default App;
