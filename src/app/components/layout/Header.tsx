import Link from "next/link"

export const Header = () => {
  return (
    <header className="p-4 sm:px-6 text-center sm:text-start flex justify-center sm:justify-between text-[#DA5C26] font-bold items-center flex-wrap print:!hidden">
        <div>
            <img src="/banner.svg" alt="Banner de Bar Lambda" className="max-w-64 min-w-56"/>
        </div>
        <div className="space-x-4 mt-6 sm:mt-0 [&>a]:border-[#DA5C26] hover:[&>a]:text-gray-300 hover:[&>a]:bg-[#DA5C26]">
            <Link className="border-2 py-2 px-4 transition-all duration-200" href="/print">IMPRESIÓN</Link>
            <Link className="border-2 py-2 px-4 transition-all duration-200" href="/menu/info">MENÚ</Link>
            <Link className="border-2 py-2 px-4 transition-all duration-200" href="/share">CÓDIGO QR</Link>
        </div>
    </header>
  )
}
