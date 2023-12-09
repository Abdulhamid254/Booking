import { fetchResults } from "@/lib/fetchResults";
import { notFound } from "next/navigation";

type Props = {
    searchParams: SearchParams;
}

export type SearchParams = {
    url: URL,
 
    // src: string;
    group_adults: string;
    group_chldren: string;
    no_rooms: string;
    checkin: string;
    checkout: string;
}

//server components allows us to do async await at the top level

 async function page({searchParams}:Props) {
   if(!searchParams.url) return notFound()

   const results = await fetchResults(searchParams);
    
  return (
    <div>page</div>
  )
}

export default page