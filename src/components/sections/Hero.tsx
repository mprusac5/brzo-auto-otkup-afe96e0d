import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-cars.jpg";

export const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Otkup automobila" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <div className="inline-block mb-6 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full">
            <span className="text-accent font-semibold text-sm">⚡ Isplata u roku od 30-60 minuta</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Prodajte auto
            <br />
            <span className="text-primary">brzo i sigurno</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            Trenutna isplata, najbolje cijene, bez papirologije. 
            Dolazimo na vašu lokaciju bilo gdje u Hrvatskoj.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-7 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              Zatražite ponudu
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-7 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="tel:+385912345678">
                <Phone className="mr-2 h-5 w-5" />
                +385 91 234 5678
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap gap-8 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-muted-foreground">Preko 500+ zadovoljnih klijenata</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-muted-foreground">15+ godina iskustva</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-muted-foreground">Dostupni 24/7</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};