"use client";
import { useRouter } from "next/navigation";
import React from "react";

const DeletePost = ({ postId }) => {
  const router = useRouter();

  const handelDelete = async () => {
    const response = await fetch(`http://localhost:3005/posts/${postId}`, {
      method: "DELETE",
    });
    if (response.ok) {
      router.push('/');
    } else {
      console.error(response.status);
      console.error(response.statusText);
    }
  };

  const handleEdit = () => {
    router.push(`/post/${postId}/edit`);

  }

  return (
    <div className="my-10">
      <button onClick={handelDelete} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        Delete
      </button>
      <button onClick={handleEdit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-5 rounded">
        Edit
      </button>
    </div>
  );
};

export default DeletePost;
