"use client";
import { useState, useEffect } from "react";

type Comment = {
    id: number;
    body: string;
    postid: number;
    likes: number;
    user: {
        id: number;
        username: string;
        fullName: string;
    };
   

};

export default function Comments() {
    const [comments, setComments] = useState<Comment[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    useEffect(() => {
        async function fetchComments() {
            try {
                const response = await fetch(
                    "https://dummyjson.com/comments"
                );
                if (!response.ok) throw new Error("Failed to fetch comments.");
                const data = await response.json();
                setComments(data.comments);
            } catch (err) {
                setError("Failed to fetch.");
                if (err instanceof Error) {
                    setError(`Failed to fetch comments: ${err.message}`);
                }
            } finally {
                setLoading(false);
            }
        }

        fetchComments();
    }, []);

    if (loading) return <div>Loading comments...</div>;
    if (error) return <div>{error}</div>;

    return (
        <ul className="space-y-4 p-4">
            {comments.slice(0, 10).map((comment) => (
            <li
                key={comment.id}
                className="p-4 bg-white shadow-md rounded-lg text-gray-700 main-font"
            >
                <strong>{comment.user.username}</strong>: {comment.body} 
            </li>
            ))}
        </ul>
    );
}