import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Send, Phone, Mail, MapPin, X, Upload, Image as ImageIcon } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Ime mora imati najmanje 2 znaka").max(100, "Ime može imati najviše 100 znakova"),
  email: z.string().trim().email("Neispravna email adresa"),
  phone: z.string().trim().min(6, "Broj telefona mora imati najmanje 6 znamenki"),
  car_make_model: z.string().trim().min(2, "Unesite marku i model"),
  year: z.string().trim().min(4, "Unesite godinu (npr. 2020)"),
  mileage: z.string().trim().min(1, "Unesite kilometražu"),
});

export const Contact = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const validFiles = files.filter(file => {
      if (file.size > 10 * 1024 * 1024) {
        toast({
          variant: "destructive",
          title: "Greška",
          description: `Slika ${file.name} je prevelika. Maksimalna veličina je 10MB.`,
        });
        return false;
      }
      return true;
    });
    setUploadedFiles(prev => [...prev, ...validFiles]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    // Validate form data
    const formValues = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      car_make_model: formData.get("car_make_model") as string,
      year: formData.get("year") as string,
      mileage: formData.get("mileage") as string,
    };

    const validation = contactSchema.safeParse(formValues);
    
    if (!validation.success) {
      const newErrors: Record<string, string> = {};
      validation.error.issues.forEach(err => {
        if (err.path[0]) {
          newErrors[err.path[0].toString()] = err.message;
        }
      });
      setErrors(newErrors);
      toast({
        variant: "destructive",
        title: "Greška u formi",
        description: "Molimo ispravite označena polja prije slanja.",
      });
      setIsSubmitting(false);
      return;
    }

    // Note: File uploads removed as Web3Forms free tier has limitations with attachments
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "✅ Poruka uspješno poslana!",
          description: "Primili ste potvrdu na vašu email adresu. Javit ćemo vam se uskoro.",
          className: "bg-green-50 border-green-200",
        });
        e.currentTarget.reset();
        setUploadedFiles([]);
        setErrors({});
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch (error) {
      console.error("Form error:", error);
      toast({
        variant: "destructive",
        title: "❌ Greška pri slanju",
        description: "Molimo pokušajte ponovno ili nas nazovite direktno.",
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
              {/* 
                Web3Forms Configuration:
                1. Go to https://web3forms.com and create a free account
                2. Create a new Access Key
                3. Set marinprusac5@gmail.com as the recipient email
                4. Replace YOUR_WEB3FORMS_ACCESS_KEY below with your actual key
              */}
              <input type="hidden" name="access_key" value="991ed36e-6b60-4bb8-acee-1e8dd0eecd30" />
              <input type="hidden" name="subject" value="🚗 Novi Upit - Otkup Automobila" />
              <input type="hidden" name="from_name" value="Otkup Automobila Website" />
              <input type="hidden" name="redirect" value="false" />
              
              {/* Formatted message for owner's email */}
              <input 
                type="hidden" 
                name="message" 
                value="⚠️ HITNO - Novi upit za otkup vozila!"
              />
              
              {/* Autoresponse configuration */}
              <textarea 
                name="autoresponse" 
                style={{ display: 'none' }}
                defaultValue={`Poštovani/a,

✅ Hvala vam što ste nas kontaktirali!

Primili smo vašu ponudu za otkup vozila i radujemo se mogućnosti suradnje s vama.

━━━━━━━━━━━━━━━━━━━━━━━━
📋 VAŠA PRIJAVA
━━━━━━━━━━━━━━━━━━━━━━━━

Uspješno ste poslali upit za sljedeće vozilo. Naš tim će vas kontaktirati u najkraćem roku.

🔄 ŠTO SLIJEDI?

• Naš tim će pregledati vašu prijavu u najkraćem mogućem roku
• Kontaktirat ćemo vas putem telefona ili emaila u roku od 24 sata  
• Dogovorit ćemo pregled vozila na lokaciji koja vama odgovara
• Nakon pregleda, odmah ćete dobiti konkretnu ponudu

━━━━━━━━━━━━━━━━━━━━━━━━
💰 BRZA PROCJENA • 🤝 FER PONUDA • ⚡ TRENUTNA ISPLATA
━━━━━━━━━━━━━━━━━━━━━━━━

Ako imate bilo kakva dodatna pitanja, slobodno nas kontaktirajte:

📞 Telefon: +385 91 234 5678
📧 Email: marinprusac5@gmail.com

S poštovanjem,
Tim Otkup Automobila`}
              />
              
              <div>
                <Input
                  name="name"
                  placeholder="Ime i prezime *"
                  required
                  className={`w-full h-12 text-base ${errors.name ? "border-red-500" : ""}`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Email adresa *"
                  required
                  className={`w-full h-12 text-base ${errors.email ? "border-red-500" : ""}`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              
              <div>
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Broj telefona *"
                  required
                  className={`w-full h-12 text-base ${errors.phone ? "border-red-500" : ""}`}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
              
              <div>
                <Input
                  name="car_make_model"
                  placeholder="Marka i model vozila *"
                  required
                  className={`w-full h-12 text-base ${errors.car_make_model ? "border-red-500" : ""}`}
                />
                {errors.car_make_model && <p className="text-red-500 text-sm mt-1">{errors.car_make_model}</p>}
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Input
                    name="year"
                    placeholder="Godina *"
                    required
                    className={`h-12 text-base ${errors.year ? "border-red-500" : ""}`}
                  />
                  {errors.year && <p className="text-red-500 text-sm mt-1">{errors.year}</p>}
                </div>
                <div>
                  <Input
                    name="mileage"
                    placeholder="Kilometraža *"
                    required
                    className={`h-12 text-base ${errors.mileage ? "border-red-500" : ""}`}
                  />
                  {errors.mileage && <p className="text-red-500 text-sm mt-1">{errors.mileage}</p>}
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Select name="fuel_type">
                  <SelectTrigger className="h-12 text-base">
                    <SelectValue placeholder="Vrsta goriva" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dizel">Dizel</SelectItem>
                    <SelectItem value="benzin">Benzin</SelectItem>
                    <SelectItem value="plin">Plin</SelectItem>
                    <SelectItem value="cng">CNG</SelectItem>
                    <SelectItem value="hibrid">Hibrid</SelectItem>
                    <SelectItem value="elektro">Elektro</SelectItem>
                  </SelectContent>
                </Select>
                <Select name="transmission">
                  <SelectTrigger className="h-12 text-base">
                    <SelectValue placeholder="Vrsta mjenjača" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="manuelni">Manuelni</SelectItem>
                    <SelectItem value="automatik">Automatik</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  name="engine_size"
                  placeholder="Kubikaža (npr. 1.6, 2.0)"
                  className="h-12 text-base"
                />
                <Input
                  name="engine_power"
                  placeholder="Snaga motora (kW)"
                  className="h-12 text-base"
                />
              </div>
              
              <div>
                <Textarea
                  name="additional_info"
                  placeholder="Stanje vozila / Dodatne informacije"
                  rows={4}
                  className="w-full text-base"
                />
              </div>
              
              <div>
                <label className="block mb-2 text-sm font-medium text-foreground">
                  Slike vozila (opcionalno, za slanje slika kontaktirajte nas direktno)
                </label>
                
                {uploadedFiles.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-3">
                    {uploadedFiles.map((file, index) => (
                      <div key={index} className="relative group">
                        <div className="aspect-square rounded-lg overflow-hidden bg-secondary/30 border-2 border-border">
                          <img 
                            src={URL.createObjectURL(file)} 
                            alt={`Preview ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-red-600"
                        >
                          <X className="h-4 w-4" />
                        </button>
                        <div className="absolute bottom-2 left-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded truncate">
                          {file.name}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                <div className="border-2 border-dashed border-border rounded-lg p-6 hover:border-primary/50 transition-colors cursor-pointer bg-secondary/30">
                  <Input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleFileChange}
                    className="hidden"
                    id="vehicle_images"
                  />
                  <label htmlFor="vehicle_images" className="cursor-pointer flex flex-col items-center gap-2">
                    <Upload className="h-10 w-10 text-muted-foreground" />
                    <span className="text-muted-foreground text-sm text-center">
                      {uploadedFiles.length > 0 
                        ? "Dodajte još slika automobila (reference)" 
                        : "Privremeno učitajte slike (kontaktirat ćemo vas za slanje)"}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {uploadedFiles.length > 0 && `(${uploadedFiles.length} ${uploadedFiles.length === 1 ? 'slika' : 'slike'} učitano)`}
                    </span>
                  </label>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Napomena: Možete priložiti slike ovdje, ali je najbolje poslati ih direktno putem WhatsApp-a ili emaila nakon što primite potvrdu.
                </p>
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
            <a 
              href="https://www.google.com/maps/place/Zagreb,+Croatia/@45.8150108,15.8776752,12z" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block rounded-2xl overflow-hidden shadow-2xl h-80 border-2 border-border hover:border-primary/50 transition-colors cursor-pointer"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89828.98710280832!2d15.87767!3d45.81501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d692c902b1f1%3A0x301a4f68c6c9fc0!2sZagreb%2C%20Croatia!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, pointerEvents: 'none' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Zagreb Location"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};