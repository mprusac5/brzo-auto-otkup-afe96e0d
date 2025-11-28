import { Building2, Shield, Users, Target, Award, TrendingUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const About = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  return (
    <section 
      ref={elementRef}
      id="about" 
      className={`py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-secondary to-background transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-foreground">
            O nama
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Vaš pouzdan partner za otkup vozila
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
          {/* Left side - Icons grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 animate-slide-in-left">
            <div className="bg-background p-8 rounded-2xl shadow-lg hover-lift text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-foreground mb-2 text-lg">Zagreb</h3>
              <p className="text-sm text-muted-foreground">Sjedište u Zagrebu</p>
            </div>
            
            <div className="bg-background p-8 rounded-2xl shadow-lg hover-lift text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-foreground mb-2 text-lg">15+ godina</h3>
              <p className="text-sm text-muted-foreground">Iskustva u branši</p>
            </div>
            
            <div className="bg-background p-8 rounded-2xl shadow-lg hover-lift text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-foreground mb-2 text-lg">500+</h3>
              <p className="text-sm text-muted-foreground">Zadovoljnih klijenata</p>
            </div>
            
            <div className="bg-background p-8 rounded-2xl shadow-lg hover-lift text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-foreground mb-2 text-lg">24/7</h3>
              <p className="text-sm text-muted-foreground">Dostupnost</p>
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="space-y-6 animate-slide-in-right">
            <p className="text-lg text-muted-foreground leading-relaxed">
              <span className="font-bold text-foreground">Zagrebačka tvrtka</span> s dugogodišnjim iskustvom 
              u automobilskoj industriji. Poslujemo diljem cijele Hrvatske i nudimo 
              brz, pošten i transparentan otkup vozila.
            </p>
            
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-2xl border-l-4 border-primary">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-7 w-7 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Naša misija</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Predani smo pružanju vlasnicima vozila <span className="font-semibold text-foreground">najbržeg, 
                najjednostavnijeg i najsigurnijeg načina prodaje automobila</span>. Svakom klijentu 
                pristupamo individualno, nudimo poštene cijene i preuzimamo svu dokumentaciju 
                kako se Vi ne biste morali ni o čemu brinuti.
              </p>
            </div>

            <div className="flex items-start gap-4 p-6 bg-background rounded-2xl shadow-lg">
              <div className="p-3 bg-gradient-to-br from-accent/20 to-orange-500/20 rounded-xl">
                <Award className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Naše vrijednosti</h4>
                <p className="text-muted-foreground text-sm">
                  Transparentnost, brzina, pouzdanost i zadovoljstvo klijenata su temelji našeg poslovanja.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};