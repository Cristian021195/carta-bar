"use client"

import { useEffect, useState } from "react"

export default function Page(){
    const [result, setResult] = useState('{"nombre":"","vigencia":"","direccion":"","telefono":"","horario":"","happy":"","direcciones":[""],"telefonos":[""],"redes":[""]}');
    const [fdata, setFdata] = useState({
        nombre:"",
        vigencia:"",
        direccion:"",
        telefono:"",
        horario:"",
        happy:"",
        direcciones:[""],
        telefonos:[""],
        redes:[""]
    })
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFdata((prevData) => {
            if(name == 'telefonos' || name == 'direcciones' || name == 'redes'){
                const arr = value.split(',');
                return {
                    ...prevData,
                    [name]: arr,
                }
            }
            return {
                ...prevData,
                [name]: value,
            }
        }
        );
    };

    const handleCopy = () => {
        try {
            navigator.clipboard.writeText(result)
            .then(()=>{
                alert('¡Información copiada con éxito!')
            });
        } catch (error) {
            alert('Error al copiar revise la consola');
            console.log(error)
        }
    }

    useEffect(()=>{
        setResult(JSON.stringify(fdata))
    },[fdata])

    useEffect(()=>{
        try {            
            const val = JSON.parse(result);
            console.log(val);
            setFdata({...fdata, ...val});
        } catch (error) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const val = cleanCopiedJson(result) as any;
            if(val.nombre){
                setFdata(val);
            }else{
                alert('Error de parseo, verifique el texto copiado');
                console.log('Json incorrecto');
                console.log(error);
            }
        }
    },[result])

    return (
        <div className="text-gray-300 grid grid-cols-2 gap-12">
            <div className="flex justify-between col-span-2 sm:col-span-1">
                <label htmlFor="nombre">Razón Social: </label>
                <input type="text" className="text-black px-2 py-1" name="nombre" id="nombre" value={fdata.nombre} onChange={handleChange} required min={3} max={100} placeholder="Razón social"/>
            </div>
            <div className="flex justify-between col-span-2 sm:col-span-1">
                <label htmlFor="vigencia">Vigencia: </label>
                <input type="date" name="vigencia" id="vigencia" value={fdata.vigencia} onChange={handleChange} required/>
            </div>
            <div className="flex justify-between col-span-2 sm:col-span-1">
                <label htmlFor="telefono">Dirección Actual: </label>
                <input type="text" className="text-black px-2 py-1" name="direccion" id="direccion" value={fdata.direccion} onChange={handleChange} required min={3} max={100} placeholder="Las Piedras 1200"/>
            </div>
            <div className="flex justify-between col-span-2 sm:col-span-1">
                <label htmlFor="telefono">Telefono: </label>
                <input type="text" className="text-black px-2 py-1" name="telefono" id="telefono" value={fdata.telefono} onChange={handleChange} required min={3} max={100} placeholder="+543865332333"/>
            </div>
            <div className="flex justify-between col-span-2 sm:col-span-1">
                <label htmlFor="horario">Horario: <span className="text-slate-400"><i>Ej: 17pm a 4pm</i></span></label>
                <input type="text" className="text-black px-2 py-1" name="horario" id="horario" value={fdata.horario} onChange={handleChange} required min={3} max={100} placeholder="17pm a 4pm"/>
            </div>
            <div className="flex justify-between col-span-2 sm:col-span-1">
                <label htmlFor="happy">Happy Hour: <span className="text-slate-400"><i>Ej: 20pm a 22pm</i></span></label>
                <input type="text" className="text-black px-2 py-1" name="happy" id="happy" value={fdata.happy} onChange={handleChange} required min={3} max={100} placeholder="20pm a 22pm"/>
            </div>

            <div className="col-span-2">
                <label htmlFor="direcciones">Otros direcciones: <span className="text-slate-400"><i>Separadas por coma</i></span></label>
                <input type="text" className="text-black px-2 py-1 w-full" name="direcciones" id="direcciones" value={fdata.direcciones.join(',')} onChange={handleChange} required min={3} max={100} placeholder="Las Piedras 246, San Lorenzo..."/>
            </div>

            <div className="col-span-2">
                <label htmlFor="telefonos">Otros telefonos: <span className="text-slate-400"><i>Separados por coma</i></span></label>
                <input type="text" className="text-black px-2 py-1 w-full" name="telefonos" id="telefonos" value={fdata.telefonos.join(',')} onChange={handleChange} required min={3} max={100} placeholder="+543865332333, +543865331..."/>
            </div>

            <div className="col-span-2">
                <label htmlFor="redes">Redes sociales: <span className="text-slate-400"><i>Link o URL del perfíl, separadas por coma</i></span></label>
                <input type="text" className="text-black px-2 py-1 w-full" name="redes" id="redes" value={fdata.redes.join(',')} onChange={handleChange} required min={3} max={100} placeholder="https://instagram.com/yo, https://facebook.com/..."/>
            </div>

            <div className="col-span-2">
                <label htmlFor="">Resultado: <span className="text-slate-400"><i>Copiar y pegar este resultado en la hoja info en la primer celda</i></span></label>
                <textarea className="p-2 w-full bg-transparent border-2 border-[#DA5C26] rounded-lg text-[#DA5C26] min-h-40" value={result} onChange={(e:React.ChangeEvent<HTMLTextAreaElement>)=>{setResult(e.target.value)}}></textarea>
            </div>
            <div className="flex justify-center col-span-2">
                <button className="btn bg-slate-600" type="button" onClick={handleCopy}>COPIAR INFORMACIÓN</button>
            </div>
        </div>
    )
}

const cleanCopiedJson = (input: string): string => {
    try {
      // Remove the starting and ending quotes
      const trimmed = input.trim().replace(/^"|"$/g, "");
  
      // Replace double double quotes ("") with a single double quote (")
      const fixedJsonString = trimmed.replace(/""/g, '"');
  
      // Parse and re-stringify to ensure valid JSON format
      const jsonObject = JSON.parse(fixedJsonString);
      return JSON.stringify(jsonObject, null, 2); // Pretty print JSON
    } catch (error) {
      console.error("Invalid JSON:", error);
      return "";
    }
};

/*
"{
    ""nombre"": ""Bar Lambda"",
    ""vigencia"": ""20-1-25"",
    ""direccion"": ""SanLuis1216"",
    ""telefono"": ""+543865332311"",
    ""horario"":""17pm a 4am"",
    ""happy"":""20pm a 22pm"",
    ""direcciones"": [
        ""Florida2500"",
        ""SanLuis1216""
    ],
    ""telefonos"": [
        ""+543865332311"",
        ""+543865332312""
    ],
    ""redes"": [
        ""https://www.instagram.com/cristiangramajo015"",
        ""https://www.facebook.com/cristianismael.gramajo""
    ]
}"
*/