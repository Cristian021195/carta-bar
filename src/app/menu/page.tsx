const URL = "https://script.googleusercontent.com/macros/echo?user_content_key=R7PbLcg4yzjFQQf06NijMNqChC_lEmg0Y2DJifQIfZ73xzUaSUbkX_G0HzxUrBTdZ_gekL-dS09581Oqm9VHR4YhXfQsVQrzm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnHBkZ1rJFrRPP9TLChpXEzl-kA93Maf3G5lb9wLYsPhcRboj9rFV3BJYuzZ_v9mL5ZGheVvkmmHSFLJvGn_h1RL7YtCg2Q99J9z9Jw9Md8uu&lib=MsqL6RZUfES4C4NMpj88n9BnUD_6pncia";

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
