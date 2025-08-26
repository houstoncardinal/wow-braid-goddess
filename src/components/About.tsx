import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Story
          </h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Established in 2005, WOW African Hair Braiding has been Houston's trusted destination 
            for authentic African hair artistry for nearly two decades.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <Card className="text-center p-8 hover:shadow-lg transition-all duration-300">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-gradient-to-br from-gold to-terracotta rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">18+ Years of Excellence</h3>
              <p className="text-muted-foreground">
                Nearly two decades of perfecting our craft and serving Houston's diverse community with pride.
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-8 hover:shadow-lg transition-all duration-300">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-gradient-to-br from-terracotta to-deep-brown rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Two Convenient Locations</h3>
              <p className="text-muted-foreground">
                Serving Houston with locations on Bissonnet and Westheimer for your convenience.
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-8 hover:shadow-lg transition-all duration-300">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-gradient-to-br from-gold to-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Cultural Artistry</h3>
              <p className="text-muted-foreground">
                Celebrating African heritage through authentic braiding techniques passed down through generations.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}