"use client"
import QRCode from "react-qr-code";
const URL = document.location.href;
export default function Page(){

    return (
        <div>
            <QRCode
                size={180}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                value={URL}
                viewBox={`0 0 180 180`}
            />
        </div>
    )
}