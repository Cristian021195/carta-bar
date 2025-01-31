import { headers } from "next/headers";
import QRCodeClient from "../components/ui/QRCodeClient";


export default async function Page() {
  const headersList = headers();
  const host = (await headersList).get("host"); // Get the current host
  const protocol = (await headersList).get("x-forwarded-proto") || "https"; // Get protocol
  const url = `${protocol}://${host}`; // Construct full URL

  return <div className="py-20"><QRCodeClient url={url}/></div>;
}

/*
"use client"
import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import QRCodeClient from '../components/ui/QRCodeClient';
export default function Page(){
    const [url, setUrl] = useState(""); // Default to an empty string
    useEffect(()=>{
        setUrl(document.location.href);
    },[])
    return (
        <div className="px-10 md:px-2 w-3/4 md:w-1/4 mx-auto">
            <QRCode
                size={180}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                value={url}
                viewBox={`0 0 180 180`}
            />
        </div>
    )
}
*/