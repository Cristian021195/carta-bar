"use client"
import Link from "next/link"
import { IconHamburger } from "../icon"
import { useState } from "react"

export const Header = () => {
  const [show, setShow] = useState(true);
  return (
    <header className="p-4 sm:px-6 text-center sm:text-start flex justify-center sm:justify-between text-[#DA5C26] font-bold items-center flex-wrap print:!hidden">
        <div>
            <img src="/banner.svg" alt="Banner de Bar Lambda" className="max-w-64 min-w-56"/>
        </div>
        <div className={show ? '' : 'hidden'}>
          <div className="flex flex-wrap gap-1 sm:gap-4 mt-6 sm:mt-4 [&>a]:border-[#DA5C26] hover:[&>a]:text-gray-300 hover:[&>a]:bg-[#DA5C26]">
              <Link className="w-full sm:w-auto border-2 md:py-2 px-4 transition-all duration-200" href="/print">IMPRESIÓN</Link>
              <Link className="w-full sm:w-auto border-2 md:py-2 px-4 transition-all duration-200" href="/menu/info">MENÚ</Link>
              <Link className="w-full sm:w-auto border-2 md:py-2 px-4 transition-all duration-200" href="/share">CÓDIGO QR</Link>
          </div>
        </div>
        <div className="absolute top-4 right-4 sm:hidden">
          <button className="bg-orange-600 rounded-full p-2 text-gray-300 hover:shadow-[0px_0px_0px_2px_rgba(209,_213,_219,1)]" onClick={()=>{setShow(!show)}}>
           <IconHamburger/>
          </button>
        </div>
    </header>
  )
}
