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
      <section className="">
      <div className="contact tm-bgcolor-3 tm-border-rounded">
      <div className="contitle">
      <h2>{title}</h2>
        <p>By {authorName}</p>
			</div>

      <hr />

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
       
       </div>
       <div className="botones">
        <button
            className="btnp"
            onClick={async () => {
              await deletePostMutation.mutateAsync({ id: Number(id) })
              Router.push("/")
            }}>
            Delete
          </button>

          <button
            className="btnp"
            onClick={() => Router.push("/Temas")}>
            Back
          </button>

          <button 
          className="btnp"
          onClick={() => Router.push("/p/edit/[id]", `/p/edit/${post?.id}`)}>
              Update
          </button>

        </div>
        </section>

    </Layout>
  )
}

export default Post