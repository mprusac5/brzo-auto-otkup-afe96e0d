import { Banknote, Car, FileText, MapPin, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: Banknote,
    title: "Trenutna isplata gotovinom",
    description: "Plaćamo odmah nakon pregleda vozila, bez čekanja",
    color: "text-green-500"
  },
  {
    icon: Car,
    title: "Otkupljujemo sva vozila",
    description: "Nova, stara, oštećena ili neispravna — otkupljujemo sve",
    color: "text-blue-500"
  },
  {
    icon: FileText,
    title: "Riješena sva dokumentacija",
    description: "Mi se brinemo o svim papirima — bez skrivenih troškova",
    color: "text-purple-500"
  },
  {
    icon: MapPin,
    title: "Dolazimo na vašu adresu",
    description: "Bilo gdje u Hrvatskoj, besplatan dolazak",
    color: "text-red-500"
  },
  {
    icon: CheckCircle,
    title: "Poštena i transparentna procjena",
    description: "Fer cijene bez skrivenih naknada ili iznuđivanja",
    color: "text-orange-500"
  }
];

export const Benefits = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary" id="benefits">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Zašto odabrati nas?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Činimo proces prodaje automobila jednostavnim, brzim i transparentnim
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="border-border hover:border-primary/50 transition-all duration-300 hover-lift bg-background/80 backdrop-blur-sm animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 mb-6`}>
                  <benefit.icon className={`h-10 w-10 ${benefit.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};