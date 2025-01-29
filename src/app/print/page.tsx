const URL = process.env.URL_GOOGLE_SHETS+"";

import { ApiResponse } from '@/interfaces';
import { notFound } from 'next/navigation';
import {ClientPage} from '../components/page/';

export default async function Page() {
  
  const res = await fetch(URL);
  const data:ApiResponse = await res.json();
  if (!data) {
    notFound();
  }

  return <ClientPage data={data.data}/>
}

// Enable ISR-like behavior with revalidation (in seconds)
export const revalidate = 240;