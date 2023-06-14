import React, { useState } from "react"
import Router, { useRouter } from "next/router"
import { api } from "../../../utils/api"
import Layout from "../../components/Layout"
import { useSession } from "next-auth/react"


function Edit() {
    const id = useRouter().query.id
    const session = useSession()
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [editPost, setEditPost] = useState(true)

    const updatePostMutation = api.post.updatePost.useMutation()

  
    return (
      <Layout>
        <div>
          
            <form
            onSubmit={async (e) => {
                e.preventDefault()
                await updatePostMutation.mutateAsync({
                id: Number(id),
                title,
                content,
                editPost,
                })
                Router.push("/")
            }}
            >
            
            <h1>Edit Draft</h1>
            <input
                autoFocus
                onChange={() => setEditPost( !editPost)}
                placeholder="Editando"
                type="text"
                disabled
            />

            <input
              autoFocus
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              type="text"
              value={title}
            />
            <input
                //onChange={(e) => setContent(e.target.value)}
                placeholder={session?.data?.user?.email ?? "Author's Email"}
                type="text"
                //value={authorEmail}
                disabled
                />
            <textarea
              cols={50}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Content"
              rows={8}
              value={content}
            />
            <input
              disabled={!content || !title}
              type="submit"
              value="Edit"
            />
            <a className="back" href="#" onClick={() => Router.push("/")}>
              or Cancel
            </a>
          </form>
        </div>

      </Layout>
    )
  }

export default Edit