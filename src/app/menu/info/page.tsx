const URL = process.env.URL_GOOGLE_SHETS+"";

import { mapSocialMediaUrls } from '@/helpers/mapSocialMediaUrls';
import { ApiResponse, HojaData } from '@/interfaces';

export async function generateStaticParams() {
  // Fetch all "hoja" values to pre-generate static paths (optional, if you're using static generation)
  const res = await fetch(URL);
  const data: ApiResponse = await res.json();
  
  return data.data.map((item:HojaData) => ({
    hoja: item.hoja,
  }));
}

export default async function Page(){

    const redes = [
        {name:'x',color:'bg-blue-400'},
        {name:'twitter',color:'bg-blue-400'},
        {name:'instagram',color:'bg-pink-400'},
        {name:'facebook',color:'bg-blue-500'},
        {name:'whatsapp',color:'bg-green-500'},
        {name:'threads',color:'bg-slate-600'}
    ];
    const res = await fetch(URL);
    const data:ApiResponse = await res.json();
    const _telefonos = data.info.bar.telefonos.join(', ');
    const _direcciones = data.info.bar.direcciones.join(', ');
    const _redes = mapSocialMediaUrls(redes, data.info.bar.redes);

    return (
        <article className='text-gray-300'>
            <div className='sm:mt-20 mt-4'>
                <h1 className='text-5xl otxt text-gray-300'>INFORMACIÓN</h1>
            </div>
            <br />
            <div className='flex justify-between mb-4'>
                <p><b className='text-[#DA5C26]'>NOMBRE / RAZÓN SOCIAL</b> {data.info.bar.nombre}</p>
                <p><b className='text-[#DA5C26]'>ÚLTIMA ACTUALIZACIÓN DE LA CARTA</b> {data.info.bar.vigencia}</p>
            </div>
            <div className='space-y-4'>
                <p><b className='text-[#DA5C26]'>HORARIO DE ATENCIÓN</b> {data.info.bar.horario}</p>
                <p><b className='text-[#DA5C26]'>HAPPY HOUR</b> {data.info.bar.happy}</p>
                <p><b className='text-[#DA5C26]'>DIRECCIONES</b> {_direcciones}</p>
                <p><b className='text-[#DA5C26]'>TELEFONOS</b> {_telefonos}</p>
                <p><b className='text-[#DA5C26]'>REDES</b> </p>
                <div className='ms-4 font-bold uppercase flex gap-4 text-sm'>
                    {
                        _redes.map((rd,rdi)=>{
                            return (
                                <a key={rdi} href={rd.url} target='_blank' className={'rounded-sm p-1 '+rd.color}>{rd.name}</a>
                            )
                        })
                    }
                    <a href=""></a>
                </div>
            </div>
        </article>
    )
}

export const revalidate = 240;