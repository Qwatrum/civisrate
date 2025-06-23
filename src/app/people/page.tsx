"use client";
import { useRouter } from "next/navigation";
import peopleData from "../data";
import SearchBar from "../components/search_bar";
import SearchBarTags from "../components/search_bar_tags";

export default function People() {
    const router = useRouter();
    const random_url = "/people/" + peopleData[Math.floor(Math.random() * peopleData.length)].url

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="main-font text-4xl font-bold mb-8">Browse people</h1>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        
        <div className="p-10 rounded-4xl w-6xl text-white border border-white backdrop-blur-2xl backdrop-brightness-75">
        
            <h2 className="main-font text-3xl font-bold mb-8">Search:</h2>
              <SearchBar data={peopleData} /> <br></br>
              <SearchBarTags data={peopleData} /> <br></br>
          

        <div className="flex gap-4 items-center flex-col sm:flex-row">

            <button onClick={() => router.push(random_url)} className="rounded-full border border-solid border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#1a101a] hover:border-transparent hover:cursor-pointer font-medium main-font text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-auto">Random person</button>

        </div>
        
        </div>


        <div className="flex gap-4 items-center flex-col sm:flex-row">

          <button onClick={() => router.push("/")} className="rounded-full border border-solid border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#1a101a] hover:border-transparent hover:cursor-pointer font-medium main-font text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-auto">Return home</button>
        </div>
      </main>

    </div>
  );
}