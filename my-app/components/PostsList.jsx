"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const PostsList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3005/posts");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const postsList = posts.map((post) => {
    return (
      <div
        key={post.id}
        className="rounded overflow-hidden shadow-lg bg-white mb-5"
      >
        <div className="px-6 py-4">
          <Link className="font-bold text-xl mb-2 " href={`/posts/${post.id}`}>
            {post.id} {post.title}
          </Link>
          <p className="text-gray-700 text-base">{post.body}</p>
        </div>
      </div>
    );
  });

  return <div className="w-3/4">{postsList}</div>;
};

export default PostsList;

module.exports = PostsList;