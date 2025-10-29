import Link from "next/link";
import AutoCarousel from "@/components/AutoCarousel";
import CountDown from "@/components/CountDown";
import Table from "@/components/Table";
import SortedTable from "@/components/SortedTable";
import RadialProgress from "@/components/RadialProgress";


export default function Home() {
  return (
    <section>

      <AutoCarousel />


      

      

      <div className="divcontenido">
            <h2>
              <center><i><b>Bienvenido</b></i></center>
            </h2>

            <hr className="hr1" />

            <p>
              ¡Bienvenido a Fix &amp; Code!
              <br /><br />

              En Fix &amp; Code, abarcamos todas las salidas profesionales que puede
              ofrecer la informática (técnico, administrador de sistemas, desarrollador...).
              <br /><br />

              Disponemos de un equipo de técnicos profesionales dispuestos a atender cualquier
              incidencia que nos traigan los equipos de los clientes con solo su visita con
              equipo en la mano, también les podemos instalar el pequeño software que necesitan
              de antivirus, copias de seguridad, etc...
              <br /><br />

              En el ámbito de la administración de sistemas, nuestros técnicos superiores son
              capaces de instalar y manejar cualquier servicio que requiera una gran empresa
              para sus servidores como servicios en red (Apache, DNS...) así como la optimización
              o seguridad de tu sistema servidor.
              <br /><br />

              Y nuestro departamento de desarrollo tanto web como multiplataforma está dispuesto
              a desarrollar aplicaciones esenciales para tus necesidades, diseñar tu página web,
              automatizar las tareas en tu servidor, agilizarte la búsqueda de datos con el uso
              de lenguajes de programación como Bash, Java, HTML, etc... Es hasta ahora el
              departamento más pequeño y necesitamos urgentemente personal cualificado.
              <br /><br />

              Actualmente también estamos planeando nuestra expansión a todavía más campos como
              diseño gráfico, técnico en telecomunicaciones, etc... Nuestro objetivo es aportar
              soluciones a todo el ámbito informático.
              <br /><br />

              En Fix &amp; Code, estamos comprometidos a brindarte soluciones informáticas de
              calidad, con tan solo una visita o una llamada. ¡Estaremos siempre encantados de
              recibirte!
            </p>
          </div>

    </section>
  );
}
