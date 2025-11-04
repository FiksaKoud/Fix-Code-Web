import Link from "next/link";
import AutoCarousel from "@/components/AutoCarousel";
import CountDown from "@/components/CountDown";
import Table from "@/components/Table";
import SortedTable from "@/components/SortedTable";
import RadialProgress from "@/components/RadialProgress";


export default function Home() {
  return (
    <>

      <AutoCarousel />


      

      <br />

      <section className="py-12 bg-base-100">
  <div className="max-w-4xl mx-auto bg-base-200 p-8 rounded-2xl shadow">
    <h2 className="text-3xl font-bold text-center mb-4">
      <i>Bienvenido</i>
    </h2>

    <hr className="hr1 border-t border-gray-300 mb-6" />

    <p className="leading-relaxed text-justify text-base">
      ¡Bienvenido a <b>Fix &amp; Code</b>!
      <br /><br />

      En <b>Fix &amp; Code</b>, abarcamos todas las salidas profesionales que puede ofrecer la informática
      (técnico, administrador de sistemas, desarrollador...).
      <br /><br />

      Disponemos de un equipo de técnicos profesionales dispuestos a atender cualquier incidencia que nos traigan
      los equipos de los clientes con solo su visita con equipo en la mano. También les podemos instalar el pequeño
      software que necesitan de antivirus, copias de seguridad, etc.
      <br /><br />

      En el ámbito de la <b>administración de sistemas</b>, nuestros técnicos superiores son capaces de instalar
      y manejar cualquier servicio que requiera una gran empresa para sus servidores, como servicios en red
      (Apache, DNS...), así como la optimización o seguridad de tu sistema servidor.
      <br /><br />

      Nuestro departamento de <b>desarrollo</b> tanto web como multiplataforma está dispuesto a crear aplicaciones
      esenciales para tus necesidades, diseñar tu página web, automatizar tareas en tu servidor y agilizar la búsqueda
      de datos con lenguajes como Bash, Java o HTML. Es actualmente el departamento más pequeño y necesitamos
      urgentemente personal cualificado.
      <br /><br />

      Actualmente también estamos planeando nuestra expansión hacia más campos, como <b>diseño gráfico</b> y
      <b> telecomunicaciones</b>. Nuestro objetivo es aportar soluciones a todo el ámbito informático.
      <br /><br />

      En <b>Fix &amp; Code</b>, estamos comprometidos a brindarte soluciones informáticas de calidad con tan solo
      una visita o una llamada. ¡Estaremos siempre encantados de recibirte!
    </p>
  </div>
</section>

    </>
  );
}
