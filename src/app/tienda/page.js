"use client";

import { useState } from "react";

function Page1() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const items = [
    // Productos Hardware
    {
      img: "/ryzen.png",
      title: "AMD Ryzen 5 5600X",
      list: ["6 núcleos", "Compatible con overclocking", "3,7 GHz"],
      price: "149,90€",
      link: "https://www.pccomponentes.com/amd-ryzen-5-5600x-37ghz",
      category: "Hardware",
    },
    {
      img: "/corsair.png",
      title: "Corsair Vengeance RGB",
      list: ["32 GB (2 x 16 GB)", "DDR5", "DIMM"],
      price: "128,99€",
      link: "https://www.pccomponentes.com/corsair-vengeance-rgb-ddr5-6000mhz-pc5-48000-32gb-2x16gb-cl36-negra",
      category: "Hardware",
    },
    {
      img: "/monitor.png",
      title: "AOC 24G2SAE",
      list: ["23,8 pulgadas", "Resolución 1920 x 1080", "165 Hz"],
      price: "129,90€",
      link: "https://www.pccomponentes.com/aoc-24g2sae-bk-238-led-fullhd-165hz-freesync-premium",
      category: "Hardware",
    },

    // Servicios
    {
      img: "/apache.png",
      title: "Configuración de servidor Apache",
      list: [
        "Alojamos tu página web",
        "Solo trabajamos este servicio en distribuciones Red Hat y Debian",
      ],
      price: "3€",
      link: "https://httpd.apache.org/download.cgi",
      category: "Servicios",
    },
    {
      img: "/dns.png",
      title: "Configuración de servidor DNS",
      list: [
        "Capaz de resolver nombres de dominio",
        "Convierte dominios en direcciones IP",
        "Solo en Windows Server, Red Hat y Debian",
      ],
      price: "4€",
      link: "https://www.investigacion.frc.utn.edu.ar/labsis/publicaciones/admintcp/config-bind.html",
      category: "Servicios",
    },
    {
      img: "/openldap.png",
      title: "Configuración de OpenLDAP",
      list: [
        "Instalación y configuración del servidor",
        "Gestión de usuarios y grupos",
        "Perfiles móviles (ldif, ldapscripts o ADS)",
        "Solo en Debian",
      ],
      price: "3–6€ (ldif) | 6–12€ (ldapscripts) | 9–18€ (ADS)",
      link: "https://www.openldap.org/",
      category: "Servicios",
    },
    {
      img: "/mail.png",
      title: "Configuración de servidor de correo",
      list: [
        "Permite envío y recepción de correo",
        "Filtrado de spam opcional",
        "Solo disponible en Red Hat",
      ],
      price: "3€ + 1€ (filtro)",
      link: "https://docs.fedoraproject.org/es/fedora/f36/system-administrators-guide/servers/Mail_Servers/",
      category: "Servicios",
    },
    {
      img: "/ssh.png",
      title: "Configuración de servidor SSH",
      list: [
        "Acceso remoto seguro a tu servidor",
        "Administración por terminal",
        "Solo en Debian",
      ],
      price: "1€ + 0,50€ (cliente)",
      link: "https://www.openssh.com/",
      category: "Servicios",
    },
    {
      img: "/asterisk.png",
      title: "Configuración de Asterisk",
      list: [
        "Permite realizar y recibir llamadas",
        "Creación de perfiles y configuración de IPs",
      ],
      price: "20€ (centralita) + 2€ (perfil)",
      link: "https://www.asterisk.org/",
      category: "Servicios",
    },
    {
      img: "/aws.png",
      title: "Configuración de Amazon Web Service",
      list: [
        "Gestión de servicios en la nube de Amazon Web Services",
        "Podemos alojarte cada servicio de tu empresa en la nube",
        "Solo trabajamos este servicio en distribuciones Red Hat",
      ],
      price: "Próximamente...",
      link: null,
      category: "Servicios",
    },

    // Desarrollo
    {
      img: "/shell.png",
      title: "Programación con Bash",
      list: [
        "Automatización de tareas en el sistema",
        "Desarrollo de scripts personalizados",
        "Compatible con sistemas Unix",
      ],
      price: "2€ por script",
      link: "http://trajano.us.es/~fjfj/shell/shellscript.htm",
      category: "Desarrollo",
    },
    {
      img: "/sql.png",
      title: "Desarrollo de bases de datos con SQL",
      list: ["Diseño y creación de bases de datos", "Tratamiento de datos", "Consultas personalizadas"],
      price: "30€ (Base de datos) | 0,25€ (Por consulta)",
      link: "https://www.mysql.com/",
      category: "Desarrollo",
    },
    {
      img: "/html.png",
      title: "Desarrollo web con HTML, CSS y JavaScript",
      list: ["Creación de páginas web atractivas", "Diseño y estilo con HTML, CSS y JavaScript", "Compatible con cualquier navegador"],
      price: "30€",
      link: "https://www.w3schools.com/",
      category: "Desarrollo",
    },
    {
      img: "/java.png",
      title: "Desarrollo de aplicaciones con Java",
      list: ["Creación de aplicaciones robustas", "Desarrollo orientado a objetos", "Compatibilidad multiplataforma"],
      price: "5€ (Script individual) | 50€ (Aplicación)",
      link: "https://www.java.com/es/",
      category: "Desarrollo",
    },
    {
      img: "/xml.png",
      title: "Tratamiento de datos con XML",
      list: ["Almacenamiento de datos en lenguaje de marcas", "Completamente legible por personas", "Compatible entre varios sistemas"],
      price: "1€ (Archivo XML) | 0,75€ (DTD o XSD)",
      link: "https://support.microsoft.com/es-es/office/xml-para-no-iniciados-a87d234d-4c2e-4409-9cbc-45e4eb857d44",
      category: "Desarrollo",
    },
    {
      img: "/python.png",
      title: "Desarrollo de scripts y aplicaciones con Python",
      list: ["Automatización de tareas y procesamiento de datos", "Desarrollo de aplicaciones y scripts personalizados", "Compatible con múltiples plataformas"],
      price: "4€ (Script individual) | 40€ (Aplicación)",
      link: "https://www.python.org/",
      category: "Desarrollo",
    },
    {
      img: "/nextjs.png",
      title: "Desarrollo con Next.js",
      list: ["Creación de aplicaciones web modernas", "Renderizado del lado del servidor (SSR) y generación estática", "Compatible con React y TypeScript"],
      price: "Próximamente...",
      link: null,
      category: "Desarrollo",
    },
    {
      img: "/react.png",
      title: "Desarrollo con React",
      list: ["Construcción de interfaces interactivas", "Componentes reutilizables y gestión de estado", "Integración con librerías modernas"],
      price: "Próximamente...",
      link: null,
      category: "Desarrollo",
    },
    {
      img: "/typescript.png",
      title: "Desarrollo con TypeScript",
      list: ["Tipado estático para JavaScript", "Mayor seguridad y mantenimiento de código", "Compatible con React y Node.js"],
      price: "Próximamente...",
      link: null,
      category: "Desarrollo",
    },
  ];

  const filteredItems =
    selectedCategory === "Todos"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <>
      <br />
      {/* Mensaje introductorio */}
      <div className="flex justify-center items-center p-6 bg-base-100 rounded-2xl mb-4 shadow-md text-center max-w-3xl mx-auto">
        <div>
            <h2 className="text-3xl font-bold mb-3">¡Bienvenido a nuestra tienda!</h2>
            <p>
            Explora nuestros productos y servicios. Usa el filtro de categorías
            para encontrar rápidamente lo que necesitas. 
            Descubre hardware, servicios de administración y desarrollo a tu alcance.
            </p>
        </div>
       </div>



      {/* Selector de categoría */}
      <div className="p-4 bg-base-200 rounded-2xl mb-6">
        <label htmlFor="category-select" className="mr-2 font-bold">
          Filtrar por categoría:
        </label>
        <select
          id="category-select"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 rounded-lg border border-gray-300"
        >
          <option value="Todos">Todos</option>
          <option value="Hardware">Hardware</option>
          <option value="Servicios">Servicios</option>
          <option value="Desarrollo">Desarrollo</option>
        </select>
      </div>

      {/* Mostrar productos y servicios filtrados */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {filteredItems.map((servicio, index) => (
          <div
            key={index}
            className="divsection1 bg-base-200 p-4 rounded-2xl shadow-md hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
          >
            <img
              className="imgcomprar mx-auto"
              src={servicio.img}
              alt={servicio.title}
            />
            <hr className="hr1 my-2" />
            <h3 className="text-center font-bold text-lg">{servicio.title}</h3>
            <ul className="mt-2 text-sm list-disc list-inside">
              {servicio.list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
              <li className="precio font-bold text-blue-500 text-lg mt-2 list-none">
                {servicio.price}
              </li>
            </ul>
            {servicio.link && (
              <a href={servicio.link} target="_blank" rel="noopener noreferrer">
                <button className="boton1 btn btn-primary w-full mt-3">
                  Más info
                </button>
              </a>
            )}
          </div>
        ))}
      </section>
    </>
  );
}

export default Page1;