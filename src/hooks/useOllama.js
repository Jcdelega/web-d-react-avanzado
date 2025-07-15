import { useState } from 'react'

export const useOllama = () => {
  const [response, setResponse] = useState('')
  const [loader, setLoader] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async ($prompt) => {
    setLoader(true)
    setResponse('')
    try {
      const output = await fetch('http://localhost:11434/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'deepseek-r1:1.5b',
          prompt: $prompt,
          max_tokens: 500,
          stream: true,
        }),
      })
      console.log(output)
      setResponse(output)
    } catch (error) {
      console.log(`Streaming error: ${error}`)
      setError(error.message || 'Streaming error')
    } finally {
      setLoader(false)
    }
  }
  return { handleSubmit, response, error, loader }
}
