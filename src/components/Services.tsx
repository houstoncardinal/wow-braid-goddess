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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group">
              {service.popular && (
                <Badge className="absolute top-4 right-4 bg-gradient-to-r from-gold to-terracotta text-white border-0">
                  Popular
                </Badge>
              )}
              
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-primary mb-2">
                  {service.category}
                </CardTitle>
                <div className="text-2xl font-bold text-terracotta">
                  {service.price}
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
              
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block p-6 bg-card rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-primary mb-2">Additional Services</h3>
            <p className="text-muted-foreground">
              • $10 wash & blow-dry (if hair not prepped)<br/>
              • Hair consultation included with all services<br/>
              • Touch-ups available for existing styles
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}