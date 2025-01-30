const URL = process.env.URL_GOOGLE_SHETS+"";

import { ApiResponse } from '@/interfaces';
import { ClientPage } from '../components/page/';

export default async function Page() {
  if (!URL) {
    throw new Error("Falta URL");
  }
  const res = await fetch(URL, { 
    next: { revalidate:  300} // ISR: Revalidates every 5min
  });

  if (!res.ok) {
    throw new Error("Error al peticionar");
  }

  const data: ApiResponse = await res.json();

  return <ClientPage data={data.data} />;
}