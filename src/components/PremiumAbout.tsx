import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function PremiumAbout() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: "🏆",
      title: "18+ Years of Excellence",
      description: "Nearly two decades of perfecting our craft and serving Houston's diverse community with unmatched expertise and passion.",
      gradient: "from-gold to-terracotta"
    },
    {
      icon: "📍",
      title: "Two Premium Locations",
      description: "Strategically located on Bissonnet and Westheimer to serve you with convenience and luxury at every visit.",
      gradient: "from-terracotta to-deep-brown"
    },
    {
      icon: "👑",
      title: "Cultural Artistry",
      description: "Celebrating African heritage through authentic braiding techniques passed down through generations, perfected for modern beauty.",
      gradient: "from-deep-brown to-gold"
    }
  ];

  return (
    <section id="about" ref={ref} className="py-32 bg-gradient-to-br from-background via-luxury-cream to-background overflow-hidden relative">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-gold/10 to-transparent rounded-full blur-3xl -translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-terracotta/10 to-transparent rounded-full blur-3xl translate-x-48 translate-y-48"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-block mb-6">
            <span className="px-6 py-3 bg-gradient-to-r from-gold/20 to-terracotta/20 backdrop-blur-sm rounded-full text-primary font-bold text-sm border border-gold/30">
              ✨ Our Legacy of Excellence
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-deep-brown via-terracotta to-gold bg-clip-text text-transparent">
              Our Story
            </span>
          </h2>
          
          <p className="text-2xl md:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            Established in 2005, WOW African Hair Braiding has been Houston's trusted destination 
            for authentic African hair artistry, setting the gold standard for nearly two decades.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className={`group relative overflow-hidden border-0 bg-white/80 backdrop-blur-xl shadow-luxury hover:shadow-premium transition-all duration-700 hover:-translate-y-4 ${
                isVisible ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Gradient Border */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                <div className="absolute inset-[2px] bg-white rounded-xl"></div>
              </div>
              
              <CardHeader className="text-center pb-6 relative z-10">
                <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-500">
                  {feature.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-primary mb-4 group-hover:text-terracotta transition-colors duration-300">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed text-center group-hover:text-foreground/80 transition-colors duration-300">
                  {feature.description}
                </p>
              </CardContent>
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-gold/10 via-terracotta/10 to-gold/10 backdrop-blur-xl rounded-3xl p-12 shadow-luxury border border-gold/20 max-w-4xl mx-auto relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-gold/30 to-transparent rounded-full blur-2xl -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-terracotta/30 to-transparent rounded-full blur-2xl translate-x-20 translate-y-20"></div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6 relative z-10">
              Ready to Experience Excellence?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto relative z-10">
              Join thousands of satisfied clients who trust us with their beauty. Your journey to stunning braids starts here.
            </p>
            <Button
              variant="luxury"
              size="xl"
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              className="relative z-10 group"
            >
              Book Your Appointment
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}