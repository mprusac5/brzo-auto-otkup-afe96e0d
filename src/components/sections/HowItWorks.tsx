import { Phone, Search, Banknote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    icon: Phone,
    title: "Kontaktirajte nas",
    description: "Nazovite, pošaljite WhatsApp, Viber ili ispunite online formu.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Search,
    title: "Brza procjena i dolazak",
    description: "Dajemo inicijalnu ponudu, dolazimo na Vašu lokaciju i pregledavamo vozilo.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Banknote,
    title: "Isplata i dokumentacija",
    description: "Trenutna isplata gotovinom, potpisivanje ugovora i mi rješavamo svu dokumentaciju.",
    gradient: "from-orange-500 to-red-500"
  }
];

export const HowItWorks = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  return (
    <section 
      ref={elementRef}
      id="how-it-works" 
      className={`py-12 sm:py-16 md:py-20 lg:py-24 bg-secondary relative overflow-hidden transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-6 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Kako funkcionira?
          </h2>
        </div>
        
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-accent to-orange-500 rounded-full">
            <p className="text-white font-bold text-base sm:text-lg">
              ⚡ Brza i efikasna usluga
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Connection line - hidden on mobile */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-1 bg-gradient-to-r from-primary/30 to-transparent" />
              )}
              
              <div className="relative bg-background rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary/20">
                <div className="relative mb-6">
                  <div className={`w-24 h-24 mx-auto bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <step.icon className="h-12 w-12 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground text-center">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-center">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};