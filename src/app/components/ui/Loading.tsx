"use client"

export const Loading = () => {
  return (
    <div className="text-center">
        <div className='breath flex justify-center items-center content-center'>
            <div className="border-4 rounded-full border-gray-300 p-8">
                <img src="/brand-sm.svg" alt="" width={200}/>
            </div>
        </div>
        <i>Cargando, espere...</i>
    </div>
  )
}
