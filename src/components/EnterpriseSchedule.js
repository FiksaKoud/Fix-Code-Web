"use client";
import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

export default function EnterpriseSchedule() {
  const [abierto, setAbierto] = useState(false);

  useEffect(() => {
    const ahora = new Date();
    const hora = ahora.getHours();
    const dia = ahora.getDay(); // 0 = domingo, 6 = sábado

    if (dia >= 1 && dia <= 5 && hora >= 8 && hora < 14) {
      setAbierto(true);
    } else {
      setAbierto(false);
    }
  }, []);

  return (
    <div className="bg-base-200 p-6 rounded-xl shadow-md text-center">
      <Clock className="w-6 h-6 mx-auto text-primary mb-2" />
      <p className="text-lg font-semibold mb-1">Horario de atención</p>
      <p>Lunes a Viernes: 8:00 - 14:00 (Mañana)</p>
      <p>Lunes a Viernes: 16:00 - 21:45 (Tarde)</p>
      <p className={`mt-2 font-bold ${abierto ? "text-green-600" : "text-red-500"}`}>
        {abierto ? "🟢 Estamos abiertos" : "🔴 Cerrado ahora"}
      </p>
    </div>
  );
}
