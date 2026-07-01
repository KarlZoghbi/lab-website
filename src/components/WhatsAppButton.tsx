import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { contact } from "@/content/content";
import { dur } from "@/lib/motion";

export function WhatsAppButton() {
  const digits = contact.whatsapp.replace(/[^\d]/g, "");

  return (
    <motion.a
      href={`https://wa.me/${digits}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with LAB on WhatsApp"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: dur(0.4), delay: dur(1.2) }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-ink shadow-lg shadow-black/30"
    >
      <MessageCircle size={26} strokeWidth={2} fill="currentColor" />
    </motion.a>
  );
}
