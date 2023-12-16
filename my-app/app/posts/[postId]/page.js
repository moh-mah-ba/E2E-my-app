import DeletePost from "@/components/DeletePost";

const PageDetails = async ({ params }) => {
  const postId = params.postId;

  const response = await fetch(`http://localhost:3005/posts/${postId}`);
  const post = await response.json();

  return (
    <div className="flex justify-center ">
      <div className="w-3/4 rounded overflow-hidden shadow-lg bg-white mb-5">
      <div className="px-6 py-4">
        <h1 className="font-bold text-xl mb-2">
          {post.id} {post.title}
        </h1>
        <p className="text-gray-700 text-base">{post.body}</p>
        <div className="flex justify-center mb-5">
          <DeletePost postId={postId} />
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default PageDetails;
