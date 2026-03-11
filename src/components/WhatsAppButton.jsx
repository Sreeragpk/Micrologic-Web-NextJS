import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919663521132?text=Hello!%20Can%20you%20help%20me%20with"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 group"
    >
      {/* Pulse Ring
      <span className="absolute inline-flex h-16 w-16 rounded-full bg-green-500 opacity-75 animate-ping"></span> */}

      {/* Proper WhatsApp Logo */}
      <span className="relative flex items-center justify-center h-16 w-16 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg transition-transform transform group-hover:scale-110">
        <FaWhatsapp size={32} />
      </span>
    </a>
  );
}