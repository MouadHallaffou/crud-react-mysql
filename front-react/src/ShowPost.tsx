import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ShowPost() {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const { id } = useParams();

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:8000/api/post/${id}`).then(res => {
                setTitle(res.data.title)
                setBody(res.data.body)
            })
        }

    }, [id]);


    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="w-full max-w-lg bg-white p-8 rounded-xl shadow-lg space-y-8">
                <div className="flex justify-between items-center border-b pb-4 mb-6">
                    <h1 className="text-3xl font-extrabold text-gray-800">Detail Post</h1>
                    <Link
                        to="/"
                        className="text-blue-600 font-semibold hover:underline transition-colors"
                    >
                        Back
                    </Link>
                </div>
                <div className="space-y-4">
                    <div>
                        <span className="block text-gray-500 text-sm font-medium mb-1">Title</span>
                        <h2 className="text-xl font-bold text-gray-900 break-words">{title}</h2>
                    </div>
                    <div>
                        <span className="block text-gray-500 text-sm font-medium mb-1">Body</span>
                        <p className="text-gray-700 text-base break-words">{body}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
