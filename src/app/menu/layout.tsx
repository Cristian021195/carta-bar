import type { Metadata } from "next";
import Link from "next/link";

const URL = process.env.URL_GOOGLE_SHETS+"";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const res = await fetch(URL);
  const data = await res.json();
  return (
    <div>
      <div className="right-0 bg-[#DA5C26] px-2 py-4 fixed bottom-0 sm:hidden w-full uppercase text-white font-bold overflow-x-scroll">
        <ul className="flex text-nowrap gap-4">
          <Link href="./info">INFORMACIÓN</Link>
          {data.data.map((item: { hoja: string }) => (
            <Link key={item.hoja} href={`./${item.hoja}`}>{item.hoja}</Link>
          ))}
        </ul>
      </div>
      <main className="mx-auto sm:my-20 my-4 px-4">
        <nav className="bg-[#DA5C26] p-4 font-bold text-gray-300 sm:flex justify-evenly my-10 [&>a]:uppercase print:hidden hidden">
            <Link href="./info">INFORMACIÓN</Link>
            {data.data.map((item: { hoja: string }) => (
              <Link key={item.hoja} href={`./${item.hoja}`}>{item.hoja}</Link>
            ))}
        </nav>        
        {children}
      </main>
    </div>
  );
}
