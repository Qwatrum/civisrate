"use client";
import { useRouter } from "next/navigation";

export default function Login() {
    const router = useRouter();
    
    return (
      
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="main-font text-4xl font-bold mb-8">Login</h1>
      
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-center">
        <button onClick={() => router.push("/")} className="rounded-full border border-solid border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#1a101a] hover:border-transparent hover:cursor-pointer font-medium main-font text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[128px]">Login</button>
        <button onClick={() => router.push("/")} className="rounded-full border border-solid border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#1a101a] hover:border-transparent hover:cursor-pointer font-medium main-font text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[128px]">Signup</button>

        <div className="p-10 rounded-4xl w-6xl text-white border border-white backdrop-blur-2xl backdrop-brightness-75">
          <ul>
            <li className="main-font">CivisRate is still in development. At the moment accounts can't be created. <br></br> <br></br>The code is open source <a href="https://github.com/qwatrum/civisrate" target="_blank" className="hover-credits">here</a>.</li>
        </ul>
        
        </div>


        <div className="flex gap-4 items-center flex-col sm:flex-row">

        <button onClick={() => router.push("/")} className="rounded-full border border-solid border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#1a101a] hover:border-transparent hover:cursor-pointer font-medium main-font text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-auto">Return home</button>

        </div>
      </main>

    </div>
  );
}