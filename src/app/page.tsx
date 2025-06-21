"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold mb-8">CivisRate</h1>
      
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        
        <button onClick={() => router.push("/people")} className="rounded-full border border-solid border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#1a101a] hover:border-transparent hover:cursor-pointer font-medium browse-font text-sm sm:text-base h-10 sm:h-16 px-4 sm:px-5 w-full sm:w-auto md:w-full">Browse People</button>
      
        <div className="p-10 rounded-4xl w-6xl text-white border border-white backdrop-blur-2xl backdrop-brightness-75">
          
          <h1 className="text-3xl font-bold mb-5">Welcome to CivisRate</h1>
          <ul>
            <li className="main-font">CivisRate is a platform where everyone can give famous people a <strong>1 to 5 star</strong> ranking.<br></br><br></br>Don't you sometimes find yourself curious about the reputation of certain celebrities - what others truly think of them?</li>
            <li className="main-font"></li>
        </ul>
          
          </div>


        <div className="flex gap-4 items-center flex-col sm:flex-row">
          
          <button onClick={() => router.push("/about")} className="rounded-full border border-solid border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#1a101a] hover:border-transparent hover:cursor-pointer font-medium main-font text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-full">About CivisRate</button>

          
        </div>
      </main>

    </div>
  );
}
