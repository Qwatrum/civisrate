import React from "react";
import Comments from "../../components/comments";
import Rating from "../../components/rating";
import peopleData from "../../data";

export default function Person({ params }: any) {
    
    const people = peopleData;


    const { id } = params;
    const person = people.find(p => p.url === id)
    if (!person) {
        return(
            <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold mb-1">The person "{id}" wasn't found.</h1>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        
        <div className="p-10 rounded-4xl w-6xl text-white border border-white backdrop-blur-2xl backdrop-brightness-75">
          <ul>
            <li className="main-font">CivisRate is still in development. Many features are still yet to code. The code is open source <a href="https://github.com/qwatrum/civisrate" target="_blank" className="hover-credits">here</a>.</li>
        </ul>
    

        
        </div>


        <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a href="/people" className="rounded-full border border-solid border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#1a101a] hover:border-transparent hover:cursor-pointer font-medium main-font text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-auto">Browse people</a>
        </div>
      </main>

    </div>
        );
    }

return (
        


    <div>
        <br></br>
        
        
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">

    
        
        <div className="p-10 rounded-4xl w-5xl text-white border border-white backdrop-blur-2xl backdrop-brightness-75 mt-50">
        <div><h1 className="name main-font">{person.name}</h1></div>
        <h1 className="text-3xl font-bold mb-1">
            <Rating>{((person.ratings.reduce((a, b) => a + b, 0)) / person.ratings.length).toFixed(2)}</Rating>
        </h1>
        <p className="main-font mb-7">({person.ratings.length} reviews)</p>

        <h1 className="text-3xl font-bold mb-4">Bio</h1>
          <ul>
            <li className="main-font">{person.bio}</li>
            <li className="main-font">Link: <a href={person.links[0]} target="_blank" className="hover-credits">{person.links[0]}</a></li>
            <li className="main-font">Tags: {" "}
              {person.tags.map((tag, index) => (
                <React.Fragment key={index}>
                  {tag}
                  {index < person.tags.length -1 && ", "}
                </React.Fragment>
              ))}
            </li>
            
            </ul>

        </div>


        <div className="p-10 rounded-4xl w-5xl text-white border border-white backdrop-blur-2xl backdrop-brightness-75 mt-65">
          
        <h1 className="text-3xl font-bold">Comments</h1>
          <ul>
            <li className="main-font"><Comments/></li>
        </ul>
        

        
        </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row">

          <a
            className="rounded-full border border-solid border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#1a101a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="/"

          >
            Return home
          </a>
          <a
            className="rounded-full border border-solid border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#1a101a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="/people"

          >
            Browse people
          </a>

          
        </div>
        </div>
        
      

    </div>
)
}