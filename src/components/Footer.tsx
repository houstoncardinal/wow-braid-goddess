import { Button } from "@/components/ui/button";

export function Footer() {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-gold">
              WOW African Hair Braiding
            </h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Houston's premier destination for authentic African hair braiding since 2005. 
              Your beauty is our pride.
            </p>
            <Button 
              variant="outline-hero" 
              onClick={scrollToBooking}
              className="border-gold text-gold hover:bg-gold hover:text-primary"
            >
              Book Now
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary-foreground/80 hover:text-gold transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary-foreground/80 hover:text-gold transition-colors"
                >
                  Services & Pricing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('locations')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary-foreground/80 hover:text-gold transition-colors"
                >
                  Our Locations
                </button>
              </li>
              <li>
                <button 
                  onClick={scrollToBooking}
                  className="text-primary-foreground/80 hover:text-gold transition-colors"
                >
                  Book Appointment
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold">Contact Info</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-primary-foreground">Bissonnet Location</h5>
                <p className="text-primary-foreground/80 text-sm">9817 Bissonnet St Ste H</p>
                <p className="text-primary-foreground/80 text-sm">Houston, TX 77036</p>
                <a href="tel:7139955676" className="text-gold hover:text-gold/80">
                  (713) 995-5676
                </a>
              </div>
              <div>
                <h5 className="font-medium text-primary-foreground">Westheimer Location</h5>
                <p className="text-primary-foreground/80 text-sm">14283 Westheimer Rd</p>
                <p className="text-primary-foreground/80 text-sm">Houston, TX 77077</p>
                <a href="tel:3463747093" className="text-gold hover:text-gold/80">
                  (346) 374-7093
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Hours */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4 text-gold">Business Hours</h4>
            <div className="grid sm:grid-cols-3 gap-4 text-sm text-primary-foreground/80">
              <div>
                <span className="font-medium">Mon - Wed:</span> 9:00 AM - 9:00 PM
              </div>
              <div>
                <span className="font-medium">Thu - Sat:</span> 8:00 AM - 9:00 PM
              </div>
              <div>
                <span className="font-medium">Sunday:</span> 12:00 PM - 8:00 PM
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 WOW African Hair Braiding. All rights reserved. | Your Beauty is Our Pride.
          </p>
        </div>
      </div>
    </footer>
  );
}