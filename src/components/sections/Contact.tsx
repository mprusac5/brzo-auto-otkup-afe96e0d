import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Send, Phone, Mail, MapPin } from "lucide-react";

export const Contact = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    try {
      // Using Web3Forms for form submission (free service, no backend needed)
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast({
          title: "Poruka poslana! ✅",
          description: "Javit ćemo vam se u najkraćem roku.",
        });
        e.currentTarget.reset();
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Greška",
        description: "Molimo pokušajte ponovno ili nas nazovite.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      ref={elementRef}
      id="contact" 
      className={`py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-secondary to-background relative overflow-hidden transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-foreground">
            Kontaktirajte nas
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Zatražite besplatnu procjenu i dobijte ponudu u roku od 24 sata
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form */}
          <div className="bg-background p-6 sm:p-8 md:p-10 rounded-3xl shadow-2xl border border-border animate-slide-in-left">
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              Zatražite besplatnu ponudu
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Web3Forms access key - replace with your own */}
              <input 
                type="hidden" 
                name="access_key" 
                value="YOUR_WEB3FORMS_ACCESS_KEY" 
              />
              <input 
                type="hidden" 
                name="subject" 
                value="Nova upit - Otkup automobila" 
              />
              <input 
                type="hidden" 
                name="from_name" 
                value="Otkup Automobila Website" 
              />
              
              <div>
                <Input
                  name="name"
                  placeholder="Ime i prezime *"
                  required
                  className="w-full h-12 text-base"
                />
              </div>
              
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Email adresa *"
                  required
                  className="w-full h-12 text-base"
                />
              </div>
              
              <div>
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Broj telefona *"
                  required
                  className="w-full h-12 text-base"
                />
              </div>
              
              <div>
                <Input
                  name="car_make_model"
                  placeholder="Marka i model vozila *"
                  required
                  className="w-full h-12 text-base"
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  name="year"
                  placeholder="Godina *"
                  required
                  className="h-12 text-base"
                />
                <Input
                  name="mileage"
                  placeholder="Kilometraža *"
                  required
                  className="h-12 text-base"
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  name="fuel_type"
                  placeholder="Vrsta goriva"
                  className="h-12 text-base"
                />
                <Input
                  name="transmission"
                  placeholder="Vrsta mjenjača"
                  className="h-12 text-base"
                />
              </div>
              
              <div>
                <Input
                  name="engine_size"
                  placeholder="Zapremina motora (npr. 1.6, 2.0)"
                  className="h-12 text-base"
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Stanje vozila / Dodatne informacije"
                  rows={4}
                  className="w-full text-base"
                />
              </div>
              
              <div>
                <label className="block mb-2 text-sm font-medium text-foreground">
                  Slike vozila (opcionalno)
                </label>
                <div className="border-2 border-dashed border-border rounded-lg p-6 hover:border-primary/50 transition-colors cursor-pointer bg-secondary/30">
                  <Input
                    type="file"
                    name="vehicle_images"
                    accept="image/*"
                    multiple
                    className="hidden"
                    id="vehicle_images"
                  />
                  <label htmlFor="vehicle_images" className="cursor-pointer flex flex-col items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <span className="text-muted-foreground text-sm">Kliknite za učitavanje slika automobila</span>
                  </label>
                </div>
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-accent to-orange-500 hover:from-accent/90 hover:to-orange-500/90 text-white text-base sm:text-lg py-6 sm:py-7 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              >
                {isSubmitting ? "Šalje se..." : "Pošaljite upit"}
                <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8 animate-slide-in-right">
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-background rounded-2xl shadow-lg hover-lift">
                <div className="p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2 text-lg">Telefon</h4>
                  <a 
                    href="tel:+385912345678" 
                    className="text-primary hover:underline text-lg font-semibold"
                  >
                    +385 91 234 5678
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">Dostupni 24/7</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-background rounded-2xl shadow-lg hover-lift">
                <div className="p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2 text-lg">Email</h4>
                  <a 
                    href="mailto:otkupvozila@gmail.com" 
                    className="text-primary hover:underline break-all"
                  >
                    otkupvozila@gmail.com
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">Odgovor u roku 24h</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-background rounded-2xl shadow-lg hover-lift">
                <div className="p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2 text-lg">Lokacija</h4>
                  <p className="text-foreground font-semibold">Zagreb, Hrvatska</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Poslujemo diljem cijele Hrvatske
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="rounded-2xl overflow-hidden shadow-2xl h-80 border-2 border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89828.98710280832!2d15.87767!3d45.81501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d692c902b1f1%3A0x301a4f68c6c9fc0!2sZagreb%2C%20Croatia!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Zagreb Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};