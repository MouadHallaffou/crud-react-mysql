import { Link, useNavigate} from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

export default function CreatePost() {

    const [title, setTitle] = useState(' ');
    const [body, setBody] = useState(' ');
    const navigate = useNavigate();

    const SubmitEvent = (e: React.FormEvent) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/post", {title: title, body: body})
            .then(() =>{
                navigate("/");
            });
    }

    return (
        <>
            <div className="max-w-md mx-auto bg-white p-8 rounded shadow-md space-y-6 mt-8">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold mb-4">Create New Post</h1>
                    <Link to="/" className="text-blue-500 font-extrabold hover:underline mb-4 inline-block">
                        Back
                    </Link>
                </div>
                
            <form onSubmit={SubmitEvent} className="">
                <div>
                    <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter title"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>
                <div>
                    <label htmlFor="body" className="block text-gray-700 font-semibold mb-2">Description:</label>
                    <textarea
                        id="body"
                        name="body"
                        value = {body}
                        onChange={(e) =>setBody(e.target.value)}
                        placeholder="Enter description"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                >
                    Create Post
                </button>
            </form>
            </div>
        </>
    );
};
