import { useState } from "react";
import SearchResults from "./search_result";

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
export default function SearchBar( { data }: dataProps) {
    const [query, setQuery] = useState("");

    const filteredData = data.filter((item) =>
    item.tags.join(" ").toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div>
            <input
            type="text"
            placeholder="Search tags"
            className="p-4 rounded-2xl w-1xl text-white border border-white backdrop-blur-2xl backdrop-brightness-75"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
                width: "100%",
                fontSize: "20px"
            }}
            />
            {query && (
            <ul style={{ listStyle: "none", padding: 0, marginTop: "24px" }}>
                {filteredData.map((item) => (
                <li key={item.id}>
                    <SearchResults data={[item]} />
                </li>
                ))}
            </ul>
            )}
        </div>
    )
}