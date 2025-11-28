import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  {
    question: "Koliko brzo mogu dobiti novac za svoje vozilo?",
    answer: "Nakon dogovora dolazimo na Vašu lokaciju, obavljamo pregled vozila i procjenu. Ako se dogovorimo, isplata se obavlja istog dana, gotovinom ili bankovnim prijenosom prema Vašoj želji.",
  },
  {
    question: "Koje vrste vozila otkupljujete?",
    answer: "Otkupljujemo sva putnička vozila — sve marke i modele, bez obzira na godište, kilometražu ili stanje. To uključuje nova, polovna, oštećena, havarisana i neispravna vozila. Također otkupljujemo i dostavna vozila, kombije i teretna vozila manje tonaže.",
  },
  {
    question: "Trebam li imati svu dokumentaciju vozila?",
    answer: "Poželjno je da imate osnovne dokumente (prometnu dozvolu, servisnu knjižicu, dokaz o vlasništvu), no i ako nemate svu dokumentaciju, možemo razgovarati o opcijama. Pomažemo vam oko svih papira potrebnih za prijenos vlasništva.",
  },
  {
    question: "Dolazite li na moju lokaciju?",
    answer: "Da! Dolazimo na Vašu adresu bilo gdje u Hrvatskoj — Zagreb, Varaždin, Split, Rijeka, Osijek i sve ostale gradove. Dolazak i procjena su potpuno besplatni bez obaveze kupnje.",
  },
  {
    question: "Što ako vozilo nije u voznom stanju?",
    answer: "Nije problem! Otkupljujemo i neispravna, havarisana ili oštećena vozila koja se ne mogu voziti. U tom slučaju možemo organizirati prijevoz vozila bez dodatnih troškova za Vas.",
  },
  {
    question: "Kako se utvrđuje cijena vozila?",
    answer: "Cijena se određuje na osnovu tržišne vrijednosti, godišta, kilometraže, stanja vozila, opreme i potražnje na tržištu. Naša procjena je uvijek poštena, transparentna i realna. Dajemo vam najbolju moguću cijenu.",
  },
  {
    question: "Koliko košta vaša usluga?",
    answer: "Naša usluga procjene i dolaska na lokaciju je potpuno besplatna. Ne naplaćujemo nikakve skrivene troškove. Jedini trošak koji postoji je zakonska pristojba od 5% za prijenos vlasništva koju mi pokrivamo u dogovorenoj cijeni.",
  },
  {
    question: "Mogu li prodati vozilo ako još imam kredit na njemu?",
    answer: "Da, moguće je. U tom slučaju možemo pomoći s isplatom kredita i rješavanjem administrativnih stvari s bankom. Kontaktirajte nas kako bismo razgovarali o Vašoj specifičnoj situaciji.",
  },
];

export const FAQ = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  return (
    <section 
      ref={elementRef}
      id="faq" 
      className={`py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-secondary to-background transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-foreground">
            Često postavljana pitanja
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Odgovori na najčešća pitanja o otkupu vozila
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4 animate-slide-up">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-background border-2 border-border rounded-2xl px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/50"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary py-6 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6 pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center p-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border-2 border-primary/20">
          <p className="text-lg text-foreground mb-4 font-semibold">
            Imate dodatno pitanje?
          </p>
          <p className="text-muted-foreground mb-6">
            Kontaktirajte nas putem telefona, WhatsApp-a ili emaila — rado ćemo odgovoriti!
          </p>
          <a
            href="tel:+385912345678"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Nazovite nas
          </a>
        </div>
      </div>
    </section>
  );
};
