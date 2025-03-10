import React from 'react';
import { useParams } from 'react-router-dom';

const SingleBlog = () => {
    const { id } = useParams();
    const posts = [
        {
            id: 1,
            title: "The Power of Faith",
            date: "March 1, 2025",
            content: "Full content of The Power of Faith post..."
        },
        {
            id: 2,
            title: "Walking in Love",
            date: "February 20, 2025",
            content: "Full content of Walking in Love post..."
        },
        {
            id: 3,
            title: "The Importance of Prayer",
            date: "February 10, 2025",
            content: "Full content of The Importance of Prayer post..."
        },
        {
            id: 4,
            title: "Living a Life of Purpose",
            date: "January 30, 2025",
            content: "Full content of Living a Life of Purpose post..."
        }
    ];

    const post = posts.find((post) => post.id === parseInt(id));

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
            <p className="text-gray-400 mb-4">{post.date}</p>
            <p className="text-gray-300">{post.content}</p>
        </div>
    );
};

export default SingleBlog;