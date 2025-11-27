import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-cars.jpg";

export const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Otkup automobila" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/98 via-background/90 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/60 to-white/20" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <div className="inline-block mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 bg-accent/10 border border-accent/30 rounded-full">
            <span className="text-accent font-semibold text-xs sm:text-sm">⚡ Gotovina na ruke odmah</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="text-black">Prodajte auto</span>
            <br />
            <span className="text-primary">brzo i sigurno</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl leading-relaxed">
            Trenutna isplata, najbolje cijene, bez papirologije. 
            Dolazimo na vašu lokaciju bilo gdje u Hrvatskoj.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-start">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-base sm:text-lg px-6 sm:px-8 py-6 sm:py-7 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group w-full sm:w-auto"
            >
              Zatražite ponudu
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-base sm:text-lg px-6 sm:px-8 py-6 sm:py-7 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              asChild
            >
              <a href="tel:+385912345678">
                <Phone className="mr-2 h-5 w-5" />
                +385 91 234 5678
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-8 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-black font-semibold drop-shadow-lg">Preko 500+ zadovoljnih klijenata</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-black font-semibold drop-shadow-lg">15+ godina iskustva</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-black font-semibold drop-shadow-lg">Dostupni 24/7</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="flex flex-col items-center gap-2 cursor-pointer" onClick={scrollToContact}>
          <span className="text-muted-foreground text-sm">Saznajte više</span>
          <ArrowRight className="h-6 w-6 text-primary rotate-90" />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};