import { useState, useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import prism from "prismjs"
import Editor from "react-simple-code-editor"
import axios from "axios"
import Markdown from 'react-markdown'
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [code, setCode] = useState(`function sum(){
  return 1+1
}`)

  const [review, setReview] = useState("")

  useEffect(() => {
    prism.highlightAll()
  }, [review])

  async function reviewCode() {
    const backendUrl = import.meta.env.VITE_BACKEND_URL || ''
    const url = `${backendUrl}/ai/get-review`
    try {
      const response = await axios.post(url, { code })
      setReview(response.data)
    } catch (error) {
      console.error('API call error:', error)
      setReview('Error fetching review. Please try again.')
    }
  }

  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={code => setCode(code)}
              highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
              padding={10}
              style={{}}
            />
          </div>
          <div onClick={reviewCode} className="review">Review</div>
        </div>
        <div className="right">
          <Markdown rehypePlugins={[rehypeHighlight]}>
            {review}
          </Markdown>
        </div>
      </main>
    </>
  )
}

export default App
