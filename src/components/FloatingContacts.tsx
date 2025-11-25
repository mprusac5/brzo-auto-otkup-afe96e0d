import { MessageCircle, Phone as PhoneIcon } from "lucide-react";

export const FloatingContacts = () => {
  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
      {/* WhatsApp */}
      <a
        href="https://wa.me/385912345678"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative bg-[#25D366] hover:bg-[#20BA5A] text-white p-5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 animate-scale-in"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#25D366] text-white px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
          WhatsApp
        </span>
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
      </a>

      {/* Viber */}
      <a
        href="viber://chat?number=385912345678"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative bg-[#7360F2] hover:bg-[#5F4FD1] text-white p-5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 animate-scale-in"
        style={{ animationDelay: "0.1s" }}
        aria-label="Viber"
      >
        <PhoneIcon className="h-7 w-7" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#7360F2] text-white px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
          Viber
        </span>
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
      </a>
    </div>
  );
};