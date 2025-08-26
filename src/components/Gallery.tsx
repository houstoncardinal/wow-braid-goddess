import { useState } from "react";
import { Button } from "@/components/ui/button";

// Using placeholder images for now - these would be replaced with actual gallery photos
const galleryImages = [
  {
    id: 1,
    title: "Knotless Box Braids",
    category: "knotless",
    image: "https://images.unsplash.com/photo-1594736797933-d0c8c01d0769?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: 2,
    title: "Goddess Knotless Braids",
    category: "goddess",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: 3,
    title: "Feed-in Cornrows",
    category: "cornrows",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: 4,
    title: "Passion Twists",
    category: "twists",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: 5,
    title: "Box Braids with Color",
    category: "box-braids",
    image: "https://images.unsplash.com/photo-1559829110-7a3b6de97b3e?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: 6,
    title: "Senegalese Twists",
    category: "twists",
    image: "https://images.unsplash.com/photo-1576662712957-9c79ae1280f8?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: 7,
    title: "Tribal Braids",
    category: "cornrows",
    image: "https://images.unsplash.com/photo-1595475207225-428b62bda831?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: 8,
    title: "Micro Braids",
    category: "micro",
    image: "https://images.unsplash.com/photo-1604004555489-723a93d6ce74?w=400&h=400&fit=crop&crop=face"
  }
];

const categories = [
  { id: "all", name: "All Styles" },
  { id: "knotless", name: "Knotless" },
  { id: "box-braids", name: "Box Braids" },
  { id: "cornrows", name: "Cornrows" },
  { id: "twists", name: "Twists" },
  { id: "goddess", name: "Goddess" },
  { id: "micro", name: "Micro Braids" }
];

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Work Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Browse our portfolio of beautiful braiding artistry and find inspiration for your next style.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={activeCategory === category.id ? 
                "bg-gradient-to-r from-gold to-terracotta border-0" : 
                "border-primary/20 hover:border-gold hover:text-gold"
              }
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.image}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-sm md:text-base">
                    {image.title}
                  </h3>
                </div>
              </div>

              {/* Zoom Icon */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div 
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gold text-4xl z-10"
              >
                ×
              </button>
              
              <img
                src={filteredImages[selectedImage].image}
                alt={filteredImages[selectedImage].title}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 className="text-white text-xl font-semibold mb-2">
                  {filteredImages[selectedImage].title}
                </h3>
                <Button
                  variant="outline-hero"
                  onClick={(e) => {
                    e.stopPropagation();
                    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                    setSelectedImage(null);
                  }}
                  className="border-gold text-gold hover:bg-gold hover:text-primary"
                >
                  Book This Style
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Love what you see? Let's create your perfect style!
          </p>
          <Button
            size="lg"
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-gold to-terracotta text-lg px-8 py-6"
          >
            Book Your Appointment
          </Button>
        </div>
      </div>
    </section>
  );
}