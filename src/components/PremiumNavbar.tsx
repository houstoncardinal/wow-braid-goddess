import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function PremiumNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-luxury border-b border-gold/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-gold to-terracotta rounded-xl flex items-center justify-center shadow-luxury">
              <span className="text-white font-bold text-xl">W</span>
            </div>
            <div>
              <h1 className={`text-xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-primary' : 'text-white'
              }`}>
                WOW African Hair Braiding
              </h1>
              <p className={`text-sm transition-colors duration-300 ${
                isScrolled ? 'text-muted-foreground' : 'text-white/80'
              }`}>
                Since 2005
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {[
              { label: 'About', id: 'about' },
              { label: 'Services', id: 'services' },
              { label: 'Gallery', id: 'gallery' },
              { label: 'Locations', id: 'locations' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-all duration-300 hover:scale-105 relative group ${
                  isScrolled ? 'text-primary hover:text-gold' : 'text-white hover:text-gold'
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gold to-terracotta group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <Button
            variant={isScrolled ? "luxury" : "glass"}
            size="lg"
            onClick={() => scrollToSection('booking')}
            className="hidden md:inline-flex"
          >
            Book Now
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`lg:hidden ${
              isScrolled ? 'text-primary hover:bg-gold/10' : 'text-white hover:bg-white/20'
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </div>
    </nav>
  );
}