import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    const posts = [
        {
            id: 1,
            title: "The Power of Faith",
            date: "March 1, 2025",
            excerpt: "Faith is the substance of things hoped for, the evidence of things not seen. Discover how faith can transform your life.",
            content: "Full content of The Power of Faith post..."
        },
        {
            id: 2,
            title: "Walking in Love",
            date: "February 20, 2025",
            excerpt: "Love is the greatest commandment. Learn how to walk in love and show God's love to others.",
            content: "Full content of Walking in Love post..."
        },
        {
            id: 3,
            title: "The Importance of Prayer",
            date: "February 10, 2025",
            excerpt: "Prayer is our direct line to God. Explore the importance of prayer and how it can strengthen your relationship with Him.",
            content: "Full content of The Importance of Prayer post..."
        },
        {
            id: 4,
            title: "Living a Life of Purpose",
            date: "January 30, 2025",
            excerpt: "God has a purpose for each of us. Find out how to discover and live out your God-given purpose.",
            content: "Full content of Living a Life of Purpose post..."
        }
    ];

    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">Christian Blog</h2>
            <div className="grid grid-cols-1 gap-6">
                {posts.map((post) => (
                    <div key={post.id} className="border p-4 rounded-lg bg-gray-800">
                        <h3 className="text-xl font-semibold text-green-300 mb-2">{post.title}</h3>
                        <p className="text-gray-400 mb-2">{post.date}</p>
                        <p className="text-gray-300 mb-2">{post.excerpt}</p>
                        <Link to={`/blog/${post.id}`} className="text-blue-500 hover:underline">Read more</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;