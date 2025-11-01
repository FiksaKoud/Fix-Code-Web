"use client";
import ContactCard from "@/components/ContactCard";
import UbicationMap from "@/components/UbicationMap";
import EnterpriseSchedule from "@/components/EnterpriseSchedule";
import SocialMedia from "@/components/SocialMedia";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactoPage() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-4">Contáctanos</h1>
      <p className="text-center text-lg mb-8">
        Aquí podrás contactar con nuestra empresa para cualquier tipo de trabajo o duda.
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        <ContactCard
          icon={MapPin}
          titulo="Dirección"
          info="Av. de la Constitución, 14, 14550 Montilla, Córdoba"
        />
        <ContactCard
          icon={Phone}
          titulo="Teléfono"
          info="957 651 474"
          enlace="tel:957651474"
        />
        <ContactCard
          icon={Mail}
          titulo="Correo"
          info="contacto@fixcode.com"
          enlace="mailto:contacto@fixcode.com"
        />
        <EnterpriseSchedule />
      </div>

      <UbicationMap />
      <SocialMedia />
    </section>
  );
}
