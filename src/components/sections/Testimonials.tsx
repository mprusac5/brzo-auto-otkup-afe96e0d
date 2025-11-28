import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Marko H.",
    location: "Zagreb",
    text: "Prodao sam auto u roku od jednog dana. Došli su, pregledali vozilo i odmah platili. Izvrsna usluga!",
    rating: 5,
    avatar: "MH"
  },
  {
    name: "Ivan K.",
    location: "Varaždin",
    text: "Brzo, jednostavno i potpuno bez muke. Najbolja ponuda koju sam dobio.",
    rating: 5,
    avatar: "IK"
  },
  {
    name: "Ana M.",
    location: "Karlovac",
    text: "Otkupili su moje neispravno vozilo koje nisam mogla prodati mjesecima. Oni su se pobrinuli za sve.",
    rating: 5,
    avatar: "AM"
  },
  {
    name: "Tomislav B.",
    location: "Split",
    text: "Profesionalan pristup, fer cijena i brza transakcija. Preporučujem svima!",
    rating: 5,
    avatar: "TB"
  },
  {
    name: "Petra S.",
    location: "Rijeka",
    text: "Nevjerojatno brza i učinkovita usluga. Dobila sam više nego što sam očekivala za svoj automobil!",
    rating: 5,
    avatar: "PS"
  },
  {
    name: "Davor L.",
    location: "Osijek",
    text: "Transparentan proces od početka do kraja. Cijela procedura riješena u par sati. Topla preporuka!",
    rating: 5,
    avatar: "DL"
  },
  {
    name: "Maja T.",
    location: "Zadar",
    text: "Došli su kod mene kući, pregledali auto i odmah platili. Nisam mogla vjerovati da može biti tako jednostavno.",
    rating: 5,
    avatar: "MT"
  },
  {
    name: "Karlo P.",
    location: "Pula",
    text: "Otkupili su moj stari auto koji nitko drugi nije htio. Fer cijena i brza isplata. Hvala Vam!",
    rating: 5,
    avatar: "KP"
  },
  {
    name: "Nikolina V.",
    location: "Šibenik",
    text: "Profesionalni tim, odlična komunikacija i poštena ponuda. Svakako ih preporučujem!",
    rating: 5,
    avatar: "NV"
  },
  {
    name: "Josip R.",
    location: "Slavonski Brod",
    text: "Najbolje iskustvo prodaje automobila do sada. Brzi, pouzdani i fer u cijeni.",
    rating: 5,
    avatar: "JR"
  }
];

export const Testimonials = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  return (
    <section 
      ref={elementRef}
      id="testimonials" 
      className={`py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-background to-secondary relative overflow-hidden transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-foreground">
            Što kažu naši klijenti
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Zadovoljstvo naših klijenata je naša najveća nagrada
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <Card 
                    className="border-border hover:border-primary/50 transition-all duration-300 hover-lift bg-background/80 backdrop-blur-sm animate-scale-in overflow-hidden group h-full"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6 relative flex flex-col h-full">
                      <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/10 group-hover:text-primary/20 transition-colors" />
                      
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                        ))}
                      </div>
                      
                      <p className="text-muted-foreground mb-6 italic leading-relaxed flex-grow">
                        "{testimonial.text}"
                      </p>
                      
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold shadow-lg flex-shrink-0">
                          {testimonial.avatar}
                        </div>
                        <div>
                          <div className="font-bold text-foreground">
                            {testimonial.name}
                          </div>
                          <div className="text-muted-foreground text-sm">
                            {testimonial.location}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-12 lg:-left-16" />
            <CarouselNext className="hidden sm:flex -right-12 lg:-right-16" />
          </Carousel>
        </div>

        {/* Stats Section */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
          <div className="text-center p-8 bg-background rounded-2xl shadow-lg animate-fade-in">
            <div className="text-5xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Zadovoljnih klijenata</div>
          </div>
          <div className="text-center p-8 bg-background rounded-2xl shadow-lg animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="text-5xl font-bold text-accent mb-2">15+</div>
            <div className="text-muted-foreground">Godina iskustva</div>
          </div>
          <div className="text-center p-8 bg-background rounded-2xl shadow-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="text-5xl font-bold text-green-500 mb-2">4.9/5</div>
            <div className="text-muted-foreground">Prosječna ocjena</div>
          </div>
        </div>
      </div>
    </section>
  );
};