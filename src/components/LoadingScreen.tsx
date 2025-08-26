import { useState, useEffect } from "react";

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-deep-brown via-terracotta to-gold flex items-center justify-center">
      <div className="text-center">
        {/* Logo Animation */}
        <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center mb-8 mx-auto shadow-luxury animate-scale-in">
          <span className="text-3xl font-bold bg-gradient-to-r from-gold to-terracotta bg-clip-text text-transparent">
            W
          </span>
        </div>
        
        {/* Brand Name */}
        <h1 className="text-4xl font-bold text-white mb-4 animate-fade-up">
          WOW African Hair Braiding
        </h1>
        
        <p className="text-white/80 text-lg mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          Since 2005 • Houston's Premier Destination
        </p>
        
        {/* Loading Animation */}
        <div className="flex justify-center space-x-2 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
}