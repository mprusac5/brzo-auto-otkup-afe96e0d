import { Check, Shield, Clock, Award } from "lucide-react";

const features = [
  "Sve marke i modele vozila",
  "Nova i rabljena vozila",
  "Registrirana i neregistrirana vozila",
  "Oštećena, pokvarena ili neispravna vozila",
  "Totalno oštećena vozila"
];

export const Services = () => {
  return (
    <section className="py-24 bg-background relative" id="services">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Otkup automobila u Hrvatskoj
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Profesionalan otkup svih vrsta putničkih vozila diljem Hrvatske
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left side - Main text */}
          <div className="space-y-6 animate-slide-in-left">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nudimo profesionalan otkup svih vrsta putničkih vozila diljem Hrvatske. 
              Bez obzira na marku, godinu proizvodnje, kilometražu ili stanje vašeg automobila — mi smo tu za vas.
            </p>
            
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-2xl border-2 border-primary/20">
              <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
                <Check className="h-7 w-7 text-primary" />
                Otkupljujemo:
              </h3>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li 
                    key={index} 
                    className="flex items-start gap-3 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="mt-1 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-foreground font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-green-600 font-semibold">
                <Shield className="h-5 w-5" />
                Besplatna procjena
              </div>
              <div className="flex items-center gap-2 text-blue-600 font-semibold">
                <Clock className="h-5 w-5" />
                Brza transakcija
              </div>
              <div className="flex items-center gap-2 text-purple-600 font-semibold">
                <Award className="h-5 w-5" />
                Fer cijene
              </div>
            </div>
          </div>

          {/* Right side - Highlight boxes */}
          <div className="space-y-6 animate-slide-in-right">
            <div className="bg-gradient-to-br from-primary to-blue-600 p-8 rounded-2xl text-white shadow-xl hover-lift">
              <h3 className="text-2xl font-bold mb-4">Poslujemo diljem Hrvatske</h3>
              <p className="mb-4 text-white/90">
                Naša usluga dostupna je u svim većim gradovima i regijama
              </p>
              <div className="flex flex-wrap gap-2 text-sm">
                {["Zagreb", "Varaždin", "Čakovec", "Karlovac", "Rijeka", "Zadar", "Split", "Osijek", "Pula", "Dubrovnik"].map((city, i) => (
                  <span key={i} className="px-3 py-1 bg-white/20 rounded-full backdrop-blur-sm">
                    {city}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-accent to-orange-600 p-8 rounded-2xl text-white shadow-xl hover-lift">
              <h3 className="text-2xl font-bold mb-4">Zašto mi umjesto privatne prodaje?</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 flex-shrink-0" />
                  <span>Trenutna isplata — bez čekanja</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 flex-shrink-0" />
                  <span>Fer ponuda — bez cjenkanja</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 flex-shrink-0" />
                  <span>Profesionalno — bez nepouzdanih kupaca</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 flex-shrink-0" />
                  <span>Besplatno — bez troškova oglašavanja</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 flex-shrink-0" />
                  <span>Jednostavno — proces bez stresa</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};