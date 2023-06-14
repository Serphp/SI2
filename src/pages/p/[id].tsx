import Layout from "../components/Layout"
import Router, { useRouter } from "next/router"
import { api } from "../../utils/api"

const Post = () => {
  const id = useRouter().query.id

  const { data: post } = api.post.postById.useQuery({ id: Number(id) })
  const publishMutation = api.post.publish.useMutation()
  const deletePostMutation = api.post.deletePost.useMutation()



  let title = post?.title
  if (!post?.published) {
    title = `${title} (Draft)`
  }

  const authorName = post?.author ? post?.author.name : "Unknown author"
  return (
    <Layout>
      <div>
        <h2>{title}</h2>
        <p>By {authorName}</p>
        <p>{post?.content}</p>
        {!post?.published && (
          <button
            onClick={async () => {
              await publishMutation.mutateAsync({ id: Number(id) })
              Router.push("/")
            }}
          >
            Publish
          </button>
        )}
        <button
          onClick={async () => {
            await deletePostMutation.mutateAsync({ id: Number(id) })
            Router.push("/")
          }}
        >
          Delete
        </button>
        <button 
        onClick={() => Router.push("/p/edit/[id]", `/p/edit/${post?.id}`)}
        >
            Update
        </button>

      </div>
      <style jsx>{`
        .page {
          background: white;
          padding: 2rem;
        }

        .actions {
          margin-top: 2rem;
        }

        button {
          background: #ececec;
          border: 0;
          border-radius: 0.125rem;
          padding: 1rem 2rem;
        }

        button + button {
          margin-left: 1rem;
        }
      `}</style>
    </Layout>
  )
}

export default Post