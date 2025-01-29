"use client"
import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
export default function Page(){
    const [url, setUrl] = useState(""); // Default to an empty string
    useEffect(()=>{
        setUrl(document.location.href);
    },[])
    return (
        <div>
            <QRCode
                size={180}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                value={url}
                viewBox={`0 0 180 180`}
            />
        </div>
    )
}