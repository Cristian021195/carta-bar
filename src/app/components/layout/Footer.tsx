import { IconCake, IconCalendar, IconCart, IconDesign, IconFB, IconGlobal, IconGraduate, IconInstagram, IconMail, IconTel, IconWebsite } from "../icon"

export const Footer = () => {
  return (
    <div>
      <footer className="w-full p-4 bg-orange-700 flex sm:justify-evenly flex-wrap gap-4 [&>div]:max-w-72 text-gray-300 sm:space-y-0 space-y-10 pb-20">
          <div>
            <b>SOBRE NOSOTROS</b>
            <div className="mt-2">
              <p>Disfruta de nuestra variada carta, elaborada con ingredientes frescos y de temporada, en un ambiente apropiado para todas las edades ¡Te esperamos!</p>
            </div>
          </div>
          <div>
            <b>SERVICIOS DEL BAR</b>
            <div className="mt-2">
              <ul className="[&>li]:flex [&>li]:items-center [&>li]:gap-2 space-y-2">
                <li><IconCake/> Cumpleaños</li>
                <li><IconCalendar/> Reservas personalizadas</li>
                <li><IconGraduate/> Especial para graduados</li>
              </ul>
            </div>
          </div>
          <div>
            <b>OTROS PRODUCTOS</b>
            <div className="mt-2">
              <ul className="[&>li]:flex [&>li]:items-center [&>li]:gap-2 space-y-2">
                <li><IconCart/> <a href="https://listacompras-iota.vercel.app/">App para supermercados</a></li>
                <li><IconDesign/>Diseños de logos e interfaces</li>
                <li><IconWebsite/>Sistemas a medida</li>
              </ul>
            </div>
          </div>
          <div>
            <b>CONTACTO</b>
            <div className="mt-2">
              <ul className="[&>li]:flex [&>li]:items-center [&>li]:gap-2 space-y-2">
                <li><IconMail/> <a href="mailto:cristiangramajo015@gmail.com">cristiangramajo015@gmail.com</a></li>
                <li><IconGlobal/> <a href="https://cristian021195.github.io/portfolio/">Portafolio personal</a></li>
                <li><IconFB/> <a href="https://www.facebook.com/cristianismael.gramajo">Facebook</a></li>
                <li><IconInstagram/> <a href="https://www.instagram.com/cristiangramajo015">Instagram</a></li>
                <li><IconTel/> <a href="#">+5438653323.. (Enviar mail)</a></li>
              </ul>
            </div>
          </div>
      </footer>
    </div>
  )
}
