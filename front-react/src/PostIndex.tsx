import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function PostIndex() {

    const [posts, setPosts] = useState<{ id: number; title: string; body: string; created_at: string }[]>([]);
    const Navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:8000/api/posts').then(res => setPosts(res.data))
    });

    const deletePost = (id: number) => {
        axios.delete('http://localhost:8000/api/post/'+id).then(() => {
            setPosts(posts.filter(post => post.id !== id));
            Navigate("/");
        })
    };

	return (
        <>
            <div className="container mx-auto mt-8">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Posts Management</h1>
                <Link to="/create" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Create New Post
                </Link>
            </div>
            <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2">ID</th>
                    <th className="border border-gray-300 px-4 py-2">Title</th>
                    <th className="border border-gray-300 px-4 py-2">Body</th>
                    <th className="border border-gray-300 px-4 py-2">Created At</th>
                    <th className="border border-gray-300 px-4 py-2">Actions</th>
                </tr>
                </thead>
                <tbody>
                {/* Example static rows */}
                {posts.map(post => 
                <tr key={post.id}>
                    <td className="border border-gray-300 px-4 py-2">{post.id}</td>
                    <td className="border border-gray-300 px-4 py-2">{post.title}</td>
                    <td className="border border-gray-300 px-4 py-2">{post.body}</td>
                    <td className="border border-gray-300 px-4 py-2">{post.created_at}</td>
                    <td className="border border-gray-300 px-4 py-2 flex justify-center">
                    <button className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600 mr-2">
                        Edit
                    </button>
                    <button onClick={() => deletePost(post.id)} className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 mr-2">
                        Delete
                    </button>
                    <button className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600">
                        show
                    </button>
                    </td>
                </tr>
                    )}
                </tbody>
            </table>
            </div>
        </>
    );
};

