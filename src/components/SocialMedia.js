import { Instagram, Facebook, Linkedin } from "lucide-react";

export default function SocialMedia() {
  const redes = [
    { icon: Facebook, nombre: "Facebook", url: "https://facebook.com" },
    { icon: Instagram, nombre: "Instagram", url: "https://instagram.com" },
    { icon: Linkedin, nombre: "LinkedIn", url: "https://linkedin.com" },
  ];

  return (
    <div className="mt-10 text-center">
      <p className="font-semibold text-lg mb-3">Síguenos en redes</p>
      <div className="flex justify-center gap-6">
        {redes.map((r) => (
          <a
            key={r.nombre}
            href={r.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-base-200 shadow hover:bg-primary hover:text-white transition"
          >
            <r.icon className="w-6 h-6" />
          </a>
        ))}
      </div>
    </div>
  );
}