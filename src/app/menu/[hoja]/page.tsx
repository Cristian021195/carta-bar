/*
export default async function Page({params}:Readonly<{params:{hoja:string}}>) {
    const {hoja} = await params;
    return <div>menu hoja: {hoja}</div>
}
*/

const URL = process.env.URL_GOOGLE_SHETS+"";

import { ApiResponse, HojaData } from '@/interfaces';
import { notFound } from 'next/navigation';

type Props = {
    params: Promise<{ hoja: string }>;
};

/*
export async function generateMetadata({ params }: Props) {
  const { hoja } = await params;
  return {
    title: `Menu - ${hoja}`,
    description: `Explore the ${hoja} section in the menu.`,
  };
}
*/

export async function generateStaticParams() {
  // Fetch all "hoja" values to pre-generate static paths (optional, if you're using static generation)
  const res = await fetch(URL);
  const data: ApiResponse = await res.json();
  
  return data.data.map((item:HojaData) => ({
    hoja: item.hoja,
  }));
}

export default async function MenuItemPage({ params }: Props) {
  const { hoja } = await params;
  
  // Fetch the data from your API
  const res = await fetch(URL);
  const data:ApiResponse = await res.json();
  
  const hojaData = data.data.find((item: HojaData) => item.hoja === hoja);
  const cabecera = hojaData?.data[0];
  const cuerpo = hojaData?.data;


  if (!hojaData) {
    // If the hoja doesn't exist, return a 404
    notFound();
  }

  return (
    <article>
      <div className='sm:mt-20 mt-4'>
        <h1 className='text-5xl uppercase otxt text-gray-300'>{hojaData.hoja}</h1>
      </div>
      <br />
      <div className='flex justify-between flex-wrap [&>div]:sm:my-4 [&>div]:my-2 text-gray-300 overflow-x-scroll'>
        {
          cuerpo?.map((cu,cui)=>{
            if(cui > 1){
              return (
                <div key={cui+'f'} className='[&>div]:hover:bg-neutral-700 mx-auto'>
                  <div className='flex justify-between w-full gap-16'>
                    {
                      cu.map((co, coi)=>{
                        const nro = typeof co === 'number' && !isNaN(co);
                        if(coi > 1){
                          return (
                            <div key={cui+'-'+coi} className='text-nowrap'>
                              <b className='uppercase text-[#DA5C26]'>{cabecera![coi]}</b> &nbsp; {nro ? "$"+co : co}
                            </div>
                          )
                        }else if(coi == 0){
                          return (
                            <div key={cui+'-'+coi}>
                              <div className='w-96'>
                                <b className='uppercase text-[#DA5C26]'>{cu[0]}</b>
                                <p>{cu[1]}</p>
                              </div>
                            </div>
                          )
                        }
                      })
                    }
                  </div>
                </div>
              )
            }
          })
        }
      </div>
    </article>
  );
}

// Enable ISR-like behavior with revalidation (in seconds)
export const revalidate = 240;