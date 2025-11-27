import car1 from "@/assets/gallery/car-1.jpg";
import car2 from "@/assets/gallery/car-2.jpg";
import car3 from "@/assets/gallery/car-3.jpg";
import car4 from "@/assets/gallery/car-4.jpg";
import car5 from "@/assets/gallery/car-5.jpg";
import car6 from "@/assets/gallery/car-6.jpg";

const galleryImages = [
  { src: car1, alt: "Luksuzni sedan automobil" },
  { src: car2, alt: "Sportski SUV automobil" },
  { src: car3, alt: "Kompaktni gradski automobil" },
  { src: car4, alt: "Premium limuzina" },
  { src: car5, alt: "Obiteljski kombi" },
  { src: car6, alt: "Pickup kamionet" },
];

export const Gallery = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary" id="gallery">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Galerija otkupljenih vozila
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pogledajte neke od vozila koja smo uspješno otkupili
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
            Otkupljujemo sve vrste vozila — kontaktirajte nas za procjenu vašeg automobila
          </p>
        </div>
      </div>
    </section>
  );
};
