import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Maria Rodriguez",
    service: "Knotless Braids",
    rating: 5,
    text: "Amazing work! My knotless braids looked perfect and lasted for weeks. The staff is so professional and the salon is beautiful.",
    location: "Bissonnet"
  },
  {
    name: "Jasmine Williams",
    service: "Box Braids",
    rating: 5,
    text: "I've been coming here for 3 years and they never disappoint. Clean, fast, and affordable. Highly recommend!",
    location: "Westheimer"
  },
  {
    name: "Aisha Johnson",
    service: "Goddess Knotless",
    rating: 5,
    text: "The artistry is incredible! My goddess knotless came out exactly like the picture I showed them. Will definitely be back.",
    location: "Bissonnet"
  },
  {
    name: "Keisha Thompson",
    service: "Passion Twists",
    rating: 5,
    text: "Best braiding salon in Houston! Great prices, beautiful work, and they actually care about hair health.",
    location: "Westheimer"
  },
  {
    name: "Nicole Davis",
    service: "Cornrows",
    rating: 5,
    text: "Quick service without compromising quality. My feed-in cornrows were neat and lasted exactly as long as promised.",
    location: "Bissonnet"
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-gold' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it — hear from our satisfied clients across Houston.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-2xl border-gold/20 min-h-[300px] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold to-terracotta"></div>
            
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl text-muted-foreground italic leading-relaxed mb-8">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                {/* Author info */}
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-primary">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-muted-foreground">
                    {testimonials[currentIndex].service} • {testimonials[currentIndex].location} Location
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Testimonial indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-gradient-to-r from-gold to-terracotta scale-125' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">18+</div>
            <div className="text-muted-foreground">Years in Business</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10K+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">2</div>
            <div className="text-muted-foreground">Houston Locations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">4.9</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
}