import EditPostForm from '@/components/EditPostForm'

const EditPost = ({params}) => {
    const postId = params.postid;
  return (
    <div>
        <EditPostForm postId={postId}/>
    </div>
  )
}

export default EditPost