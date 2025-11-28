import car1 from "@/assets/gallery/car-1.jpg";
import car2 from "@/assets/gallery/car-2.jpg";
import car3 from "@/assets/gallery/car-3.jpg";
import car4 from "@/assets/gallery/car-4.jpg";
import car5 from "@/assets/gallery/car-5.jpg";
import car6 from "@/assets/gallery/car-6.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const galleryImages = [
  { src: car1, alt: "Novi luksuzni automobil" },
  { src: car2, alt: "Polovan sedan" },
  { src: car3, alt: "VW Caddy kombi" },
  { src: car4, alt: "Stariji model automobila" },
  { src: car5, alt: "SUV" },
  { src: car6, alt: "Gradski hatchback" },
];

export const Gallery = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  return (
    <section 
      ref={elementRef}
      id="gallery" 
      className={`py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-background to-secondary transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-foreground">
            Galerija otkupljenih vozila
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pogledajte neke od vozila koja smo uspješno otkupili
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl shadow-xl hover-lift animate-scale-in bg-background border-2 border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 w-full">
                  <p className="text-foreground font-semibold text-lg">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground text-lg">
            Otkupljujemo sve vrste vozila — kontaktirajte nas za procjenu Vašeg automobila
          </p>
        </div>
      </div>
    </section>
  );
};
