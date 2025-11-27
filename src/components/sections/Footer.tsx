import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-br from-foreground to-foreground/95 text-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Otkup Automobila
            </h3>
            <p className="text-background/80 leading-relaxed">
              Brz, pošten i siguran otkup vozila diljem Hrvatske. Vaš pouzdan partner od 2009.
            </p>
            <div className="flex items-center gap-2 text-background/80">
              <Clock className="h-5 w-5 text-accent" />
              <span className="font-semibold">Dostupni 24/7</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Kontakt informacije</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="tel:+385912345678" 
                  className="flex items-center gap-3 text-background/80 hover:text-background transition-colors group"
                >
                  <div className="p-2 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                    <Phone className="h-5 w-5" />
                  </div>
                  <span>+385 91 234 5678</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:otkupvozila@gmail.com" 
                  className="flex items-center gap-3 text-background/80 hover:text-background transition-colors group"
                >
                  <div className="p-2 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span className="text-sm break-all">otkupvozila@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-background/80">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <span>Zagreb, Hrvatska</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Brzi linkovi</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("benefits")}
                  className="text-background/80 hover:text-background transition-colors hover:translate-x-1 inline-block"
                >
                  → Zašto mi?
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("how-it-works")}
                  className="text-background/80 hover:text-background transition-colors hover:translate-x-1 inline-block"
                >
                  → Kako funkcionira
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-background/80 hover:text-background transition-colors hover:translate-x-1 inline-block"
                >
                  → Usluge
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="text-background/80 hover:text-background transition-colors hover:translate-x-1 inline-block"
                >
                  → Recenzije
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-background/80 hover:text-background transition-colors hover:translate-x-1 inline-block"
                >
                  → Kontakt
                </button>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-background/80 hover:text-background transition-colors hover:translate-x-1 inline-block"
                >
                  → Politika privatnosti
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-xl font-bold mb-6">Područja poslovanja</h3>
            <div className="flex flex-wrap gap-2">
              {["Zagreb", "Varaždin", "Čakovec", "Karlovac", "Rijeka", "Zadar", "Split", "Osijek", "Pula", "Dubrovnik"].map((city, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1 bg-background/10 hover:bg-background/20 rounded-full text-sm transition-colors backdrop-blur-sm border border-background/20"
                >
                  {city}
                </span>
              ))}
            </div>
            <p className="text-background/60 text-sm mt-4 italic">
              + svi ostali gradovi u Hrvatskoj
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/70 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Otkup Automobila. Sva prava pridržana.
            </p>
            <div className="flex gap-6 text-sm text-background/70">
              <span>15+ godina iskustva</span>
              <span>•</span>
              <span>500+ zadovoljnih klijenata</span>
              <span>•</span>
              <span>Diljem Hrvatske</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};