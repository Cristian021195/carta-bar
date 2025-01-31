"use client";

import { HojaData } from "@/interfaces";
import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { IconPrint } from "../icon";

interface IClientPage{
    data: HojaData[]
}
export function ClientPage({data}: IClientPage){
    const hojas = data;
    const articleRef = useRef<HTMLElement | null>(null);
    const divRef = useRef<HTMLDivElement | null>(null);
    const [currentPrintIndex, setCurrentPrintIndex] = useState<number | null>(null);
    const printArticle = useReactToPrint({
        contentRef: articleRef,
    });
    const printDiv = useReactToPrint({
        contentRef: divRef,
    });

    const handlePrint = (index: number) => {
        setCurrentPrintIndex(index);
        articleRef.current = document.getElementById(`article-${index}`) as HTMLDivElement;
        printArticle();
    };

    const handlePrintAll = () => {
        printDiv();
    };

    return (
        <div ref={divRef} className="[&>div]:sm:my-4 [&>div]:my-2 md:mx-auto text-gray-300">
            <div className="text-center print:!hidden">
                <button className="btn bg-slate-600" onClick={handlePrintAll}>
                    <IconPrint/> IMPRIMIR TODA LA CARTA
                </button>
            </div>
            {
                hojas.map((h, hi)=>{
                    const cabecera = h.data[0];
                    return (
                        <article 
                            id={'article-'+hi}
                            className="article relative my-20 lg:my-0"
                            key={hi} 
                            ref={hi === currentPrintIndex ? articleRef : null}
                        >
                            <div className='text-gray-300 sm:mt-20 mt-4 flex flex-wrap justify-between items-center mb-4 print:mt-0 print:mb-2'>
                                <h1 className='text-3xl md:text-5xl uppercase otxt print:text-[#DA5C26] font-bold print:text-3xl'>{h.hoja}</h1>
                                <div>
                                    <button onClick={()=>{handlePrint(hi);}} className="btn bg-slate-600">
                                        <IconPrint/> IMPRIMIR {h.hoja}
                                    </button>
                                </div>
                            </div>
                            <div className='print:text-sm [&>div]:sm:my-4 [&>div]:my-2 text-gray-300 print:!text-gray-800 overflow-x-scroll md:px-20 xl:overflow-x-hidden print:overflow-x-hidden'>
                                {
                                h.data?.map((cu,cui)=>{
                                    if(cui >= 1){
                                        return (
                                            <div key={cui+'f'} className='[&>div]:hover:bg-neutral-700 mx-auto print:!my-0.5'>
                                                <div className='flex justify-between w-full gap-16 print:gap-4 print:justify-start'>
                                                    {
                                                    cu.map((co, coi)=>{
                                                        const nro = typeof co === 'number' && !isNaN(co);
                                                        if(coi > 1){
                                                            return (
                                                                <div key={cui+'-'+coi} className='text-nowrap'>
                                                                <b className='uppercase text-[#DA5C26]'>{cabecera[coi]}</b> &nbsp; {nro ? "$"+co : co}
                                                                </div>
                                                            )
                                                        }else if(coi == 0){
                                                            return (
                                                                <div key={cui+'-'+coi}>
                                                                <div className='w-96 print:w-80'>
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
                            <div className="w-full h-full absolute top-0 -z-10 flex items-center justify-center">
                                <img src="/brand-sm.svg" alt="Logo de bar" className={"w-96 opacity-20 bg-gray-600 p-10 hidden print:block"}/>
                            </div>
                        </article>
                    )
                })
            }
        </div>
    );
}