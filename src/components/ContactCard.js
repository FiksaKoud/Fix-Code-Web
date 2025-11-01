export default function ContactCard({ icon: Icon, titulo, info, enlace }) {
  const contenido = enlace ? (
    <a href={enlace} className="text-primary font-medium hover:underline">
      {info}
    </a>
  ) : (
    <span>{info}</span>
  );

  return (
    <div className="flex items-center gap-3 bg-base-200 p-4 rounded-xl shadow-sm w-full hover:scale-[1.02] transition">
      <Icon className="text-primary w-6 h-6" />
      <div>
        <p className="font-semibold">{titulo}</p>
        {contenido}
      </div>
    </div>
  );
}