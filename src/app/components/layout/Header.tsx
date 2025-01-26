export const Header = () => {
  return (
    <header className="p-4 sm:px-6 text-center sm:text-start flex justify-center sm:justify-between text-gray-300 items-center flex-wrap">
        <div>
            <img src="/banner.svg" alt="Banner de Bar Lambda" className="max-w-64 min-w-56"/>
        </div>
        <div className="space-x-4 mt-6 sm:mt-0">
            <a className="border-2 border-gray-300 py-2 px-4 hover:bg-gray-300 hover:text-gray-900 transition-all duration-200" href="#">MENÚ</a>
            <a className="border-2 border-gray-300 py-2 px-4 hover:bg-gray-300 hover:text-gray-900 transition-all duration-200" href="#">IMPRESIÓN</a>
            <a className="border-2 border-gray-300 py-2 px-4 hover:bg-gray-300 hover:text-gray-900 transition-all duration-200" href="#">CÓDIGO QR</a>
        </div>
    </header>
  )
}
