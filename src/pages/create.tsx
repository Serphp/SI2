import React, { useState } from "react"
import Router from "next/router"
import { api } from "../utils/api"
import Layout from "./components/Layout"


function Draft() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [authorEmail, setAuthorEmail] = useState("")

  const createDraftMutation = api.post.createDraft.useMutation()
  //console.log("createDraftMutation", createDraftMutation)

  return (
    <Layout>
      <div>
        <form
          onSubmit={async (e) => {
            e.preventDefault()
            await createDraftMutation.mutateAsync({
              title,
              content,
              authorEmail,
            })
            Router.push("/drafts")
          }}
        >
          <h1>Create Draft</h1>
          <input
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            type="text"
            value={title}
          />
          <input
            onChange={(e) => setAuthorEmail(e.target.value)}
            placeholder="Author (email adress)"
            type="text"
            value={authorEmail}
          />
          <textarea
            cols={50}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content"
            rows={8}
            value={content}
          />
          <input
            disabled={!content || !title || !authorEmail}
            type="submit"
            value="Create"
          />
          <a className="back" href="#" onClick={() => Router.push("/")}>
            or Cancel
          </a>
        </form>
      </div>
    </Layout>
  )
}

export default Draft