import React from "react";
import { useState } from "react";

interface Person {
    id: number;
    name: string;
    ratings: number[];
    url: string;
    bio: string;
    links: string[];
    tags: string[];
}

interface dataProps {
    data: Person[];
}
export const Result = ({ data }: dataProps) => {
    
    return (
        <div className="p-4 rounded-4xl w-full max-w-md text-white border border-white backdrop-blur-2xl backdrop-brightness-75" style={{
            position: 'relative',
            margin: '2rem auto',
            width: '100%',
        }}>
            {data.map(person => (

                <div key={person.id}>
                    <h3 className="font-bold main-font"><a href={"people/"+person.url} className="text-blue-300 underline main-font">{person.name}</a></h3>
                    
                    <div>
                        <strong className="main-font">{((person.ratings.reduce((a, b) => a + b, 0)) / person.ratings.length).toFixed(2)} Stars</strong>
                    </div>
                    
                    <div>
                        <strong className="main-font">Tags:</strong> {person.tags.join(', ')}
                    </div>
                </div>
                
            ))}
        </div>
    );
};

export default Result;