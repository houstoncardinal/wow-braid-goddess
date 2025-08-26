import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-braiding.jpg";
import { useState, useEffect } from "react";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Premium Background with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-deep-brown/90 via-deep-brown/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/50 via-transparent to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-gold/20 to-terracotta/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-br from-terracotta/20 to-gold/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center lg:text-left">
        <div className={`max-w-5xl mx-auto lg:mx-0 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="mb-6">
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-gold/20 to-terracotta/20 backdrop-blur-sm rounded-full text-gold font-semibold text-sm border border-gold/30 mb-4 animate-fade-in">
              ✨ Houston's Premier Braiding Destination
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
            Since{" "}
            <span className="bg-gradient-to-r from-gold-light via-gold to-terracotta bg-clip-text text-transparent animate-glow">
              2005
            </span>
            <br />
            Houston's{" "}
            <span className="bg-gradient-to-r from-gold-light via-gold to-terracotta bg-clip-text text-transparent">
              Home
            </span>{" "}
            for{" "}
            <br />
            Beautiful{" "}
            <span className="bg-gradient-to-r from-gold-light via-gold to-terracotta bg-clip-text text-transparent">
              African Braids
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-luxury-cream mb-12 leading-relaxed font-light">
            Box Braids, Twists, Cornrows, Weaves — your beauty is our pride.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-16">
            <Button 
              variant="luxury" 
              size="xl" 
              onClick={scrollToBooking}
              className="group"
            >
              <span className="relative z-10">Book an Appointment</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
            <Button 
              variant="glass" 
              size="xl"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="group"
            >
              View Services
              <svg className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-3xl font-bold text-gold mb-2 group-hover:scale-110 transition-transform duration-300">18+</div>
              <div className="text-white/80 text-sm">Years Experience</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-gold mb-2 group-hover:scale-110 transition-transform duration-300">10K+</div>
              <div className="text-white/80 text-sm">Happy Clients</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-gold mb-2 group-hover:scale-110 transition-transform duration-300">2</div>
              <div className="text-white/80 text-sm">Houston Locations</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-gold mb-2 group-hover:scale-110 transition-transform duration-300">4.9</div>
              <div className="text-white/80 text-sm">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Premium Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce-slow">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-xs font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-gold to-transparent rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}