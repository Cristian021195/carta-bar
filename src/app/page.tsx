const URL = process.env.URL_GOOGLE_SHETS+"";

import { ApiResponse } from '@/interfaces';
import { notFound } from 'next/navigation';

export default async function Home() {
    
  // Fetch the data from your API
  const res = await fetch(URL);
  const data:ApiResponse = await res.json();  
  const info = data.info;

  if (!info) {
    // If the hoja doesn't exist, return a 404
    notFound();
  }

  return (
    <article>
      <div className='mb-10'>
        <h1 className='text-5xl capitalize text-gray-300'>Información</h1>
      </div>
      <br />
      <div>
        <p><b>BAR LAMBDA</b> San Luis 1216</p>
        <br />
        <p><b>HORARIO ATENCIÓN</b> 17pm a 4am &emsp;<b>HAPPY HOUR</b> 20pm a 22pm</p>
        <br />
        <p><b>REDES SOCIALES</b> Facebook, Instagram</p>
        <br />
        <p><b>OTRAS DIRECCIONES</b> Florida 2500, SanLuis 1216</p>
        <br />
        <p><b>OTROS TELEFONOS</b> +543865332311, +543865332312</p>
      </div>
    </article>
  );
}
