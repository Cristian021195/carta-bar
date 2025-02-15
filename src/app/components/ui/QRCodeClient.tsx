"use client";
import QRCode from "react-qr-code";

interface IProps {
    url:string
}

export default function QRCodeClient({ url }: IProps) {
  return (
    <div className="p-8 md:p-4 w-3/4 md:w-1/4 mx-auto bg-white">
      <QRCode
        size={180}
        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
        value={url}
        viewBox={`0 0 180 180`}
      />
    </div>
  );
}