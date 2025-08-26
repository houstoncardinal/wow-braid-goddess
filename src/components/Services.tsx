import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    category: "Box Braids",
    price: "from $200",
    description: "Classic protective style in various sizes",
    popular: true
  },
  {
    category: "Knotless Braids", 
    price: "from $240",
    description: "Gentle, scalp-friendly braiding technique",
    popular: true
  },
  {
    category: "Goddess Knotless",
    price: "from $270", 
    description: "Elegant bohemian style with curly ends",
    popular: false
  },
  {
    category: "Micro Braids",
    price: "from $250",
    description: "Ultra-fine braids for maximum versatility",
    popular: false
  },
  {
    category: "Senegalese Twists",
    price: "from $180",
    description: "Rope-like twists using synthetic hair",
    popular: false
  },
  {
    category: "Passion Twists",
    price: "from $200",
    description: "Textured, bohemian-style twists",
    popular: true
  },
  {
    category: "Spring Twists",
    price: "from $220",
    description: "Bouncy, coiled texture twists",
    popular: false
  },
  {
    category: "Kinky Twists",
    price: "from $250",
    description: "Natural-looking textured twists",
    popular: false
  },
  {
    category: "Feed-in Cornrows",
    price: "from $40",
    description: "Scalp braids with added hair",
    popular: true
  },
  {
    category: "Lemonade Braids",
    price: "from $120",
    description: "Side-swept cornrow style",
    popular: false
  },
  {
    category: "Tribal Braids",
    price: "from $150",
    description: "Bold, geometric cornrow patterns",
    popular: false
  },
  {
    category: "Fulani Braids",
    price: "from $200+",
    description: "Traditional West African style with beads",
    popular: false
  },
  {
    category: "Sew-in Weaves",
    price: "from $120",
    description: "Long-lasting hair extensions",
    popular: true
  },
  {
    category: "Crochet Styles",
    price: "from $150",
    description: "Quick protective styles using crochet method",
    popular: false
  },
  {
    category: "Quick Weaves",
    price: "from $220",
    description: "Fast installation weave styles",
    popular: false
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Services & Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional braiding services with transparent pricing. All styles are customizable to your preferences.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            *Prices vary by hair length, braid size, and complexity. $25 deposit required.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-luxury transition-all duration-700 hover:-translate-y-2 relative overflow-hidden border-0 bg-gradient-to-br from-white to-luxury-cream backdrop-blur-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {service.popular && (
                <div className="absolute top-0 right-0 w-0 h-0 border-l-[60px] border-l-transparent border-t-[60px] border-t-gradient-to-r from-gold to-terracotta">
                  <span className="absolute -top-12 -right-1 text-white text-xs font-bold transform rotate-45">
                    Popular
                  </span>
                </div>
              )}
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 -top-2 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
              
              <CardHeader className="pb-4 relative z-10">
                <CardTitle className="text-xl font-bold text-primary mb-3 group-hover:text-terracotta transition-colors duration-300">
                  {service.category}
                </CardTitle>
                <div className="text-3xl font-bold bg-gradient-to-r from-gold to-terracotta bg-clip-text text-transparent">
                  {service.price}
                </div>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {service.description}
                </p>
              </CardContent>
              
              {/* Premium Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gold/5 via-transparent to-terracotta/5 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"></div>
              
              {/* Bottom Border Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold to-terracotta transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-gradient-to-br from-white to-luxury-cream rounded-2xl shadow-luxury border border-gold/20 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-gold/20 to-transparent rounded-full -translate-x-10 -translate-y-10"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-terracotta/20 to-transparent rounded-full translate-x-16 translate-y-16"></div>
            
            <h3 className="text-2xl font-bold text-primary mb-4 relative z-10">Additional Services</h3>
            <div className="text-muted-foreground leading-relaxed relative z-10">
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-gold to-terracotta rounded-full"></div>
                  <span>$10 wash & blow-dry (if hair not prepped)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-gold to-terracotta rounded-full"></div>
                  <span>Hair consultation included with all services</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-gold to-terracotta rounded-full"></div>
                  <span>Touch-ups available for existing styles</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}