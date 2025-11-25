import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marko Horvat",
    location: "Zagreb",
    text: "Prodao sam auto u roku od jednog dana. Došli su, pregledali vozilo i odmah platili. Izvrsna usluga!",
    rating: 5,
    avatar: "MH"
  },
  {
    name: "Ivan Kovačević",
    location: "Varaždin",
    text: "Brzo, jednostavno i potpuno bez muke. Najbolja ponuda koju sam dobio.",
    rating: 5,
    avatar: "IK"
  },
  {
    name: "Ana Marić",
    location: "Karlovac",
    text: "Otkupili su moje neispravno vozilo koje nisam mogla prodati mjesecima. Oni su se pobrinuli za sve.",
    rating: 5,
    avatar: "AM"
  },
  {
    name: "Tomislav Babić",
    location: "Split",
    text: "Profesionalan pristup, fer cijena i brza transakcija. Preporučujem svima!",
    rating: 5,
    avatar: "TB"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary relative overflow-hidden" id="testimonials">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Što kažu naši klijenti
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Zadovoljstvo naših klijenata je naša najveća nagrada
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-border hover:border-primary/50 transition-all duration-300 hover-lift bg-background/80 backdrop-blur-sm animate-scale-in overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 relative">
                <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/10 group-hover:text-primary/20 transition-colors" />
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold shadow-lg">
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
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
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