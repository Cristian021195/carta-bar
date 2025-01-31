import { IconCake, IconCalendar, IconCart, IconDesign, IconFB, IconGlobal, IconGraduate, IconInstagram, IconMail, IconTel, IconWebsite } from "../icon"

export const Footer = () => {
  return (
    <div className="print:!hidden">
      <div className="bg-orange-700">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 50" preserveAspectRatio="none">
          <path fill="#171717" fillOpacity="1" d="M1200 0L0 50 0 0 1200 0 1200 120z" className="shape-fill"></path>
        </svg>
      </div>
      <footer className="w-full p-4 bg-orange-700 flex sm:justify-evenly flex-wrap gap-4 [&>div]:max-w-72 text-gray-300 sm:space-y-0 space-y-10 pb-20 [&>div]:mx-auto">
          <div>
            <b>SOBRE NOSOTROS</b>
            <div className="my-4 p-4 bg-neutral-900">
              <img src="/banner.svg" alt="Banner de Bar Lambda" className="max-w-64 min-w-56"/>
            </div>
            <div className="mt-2">
              <p>Disfruta de nuestra variada carta, elaborada con ingredientes frescos y de temporada, en un ambiente apropiado para todas las edades ¡Te esperamos!</p>
            </div>
          </div>
          <div>
            <b>SERVICIOS DEL BAR</b>
            <div className="mt-2">
              <ul className="[&>li]:flex [&>li]:px-2 [&>li]:items-center [&>li]:gap-2 space-y-2">
                <li><IconCake/> Cumpleaños</li>
                <li><IconCalendar/> Reservas personalizadas</li>
                <li><IconGraduate/> Especial para graduados</li>
              </ul>
            </div>
          </div>
          <div>
            <b>OTROS PRODUCTOS</b>
            <div className="mt-2">
              <ul className="[&>li]:flex [&>li]:px-2 [&>li]:items-center [&>li]:gap-2 space-y-2">
                <li className="linkho"><IconCart/> <a href="https://listacompras-iota.vercel.app/">App para supermercados</a></li>
                <li><IconDesign/>Diseños de logos e interfaces</li>
                <li><IconWebsite/>Sistemas a medida</li>
              </ul>
            </div>
          </div>
          <div>
            <b>CONTACTO</b>
            <div className="mt-2">
              <ul className="[&>li]:flex [&>li]:px-2 [&>li]:items-center [&>li]:gap-2 space-y-2">
                <li className="linkho"><IconMail/> <a href="mailto:cristiangramajo015@gmail.com">cristiangramajo015@gmail.com</a></li>
                <li className="linkho"><IconGlobal/> <a href="https://cristian021195.github.io/portfolio/">Portafolio personal</a></li>
                <li className="linkho"><IconFB/> <a href="https://www.facebook.com/cristianismael.gramajo">Facebook</a></li>
                <li className="linkho"><IconInstagram/> <a href="https://www.instagram.com/cristiangramajo015">Instagram</a></li>
                <li><IconTel/> <a href="#">+5438653323.. (Enviar mail)</a></li>
              </ul>
            </div>
          </div>
      </footer>
    </div>
  )
}
