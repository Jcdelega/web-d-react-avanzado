import { useState } from 'react'
const API_URL = 'http://localhost:11434/api/generate'

export const useOllama = () => {
  const [response, setResponse] = useState('')
  const [loader, setLoader] = useState(false)
  const [error, setError] = useState(null)

  const handleRequest = async ($prompt) => {
    setLoader(true)
    setResponse('')
    try {
      const output = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'gemma:2b',
          prompt: $prompt,
          max_tokens: 200,
          stream: false,
        }),
      })
      const data = await output.json()
      console.log(data.response)
      setResponse(data.response)

      /* if (!output.ok || !output.body) {
        throw new Error('Respuesta inválida')
      }

      const reader = output.body.getReader()
      const decoder = new TextDecoder('utf-8')
      let buffer = ''

      while (true) {
        const { value, done } = await reader.read()
        if (done) break

        buffer += decoder.decode(value, { stream: true })

        const lines = buffer.split('\n')
        buffer = lines.pop()

        for (const line of lines) {
          if (!line.trim()) continue

          try {
            const parsed = JSON.parse(line)
            if (parsed.done) {
              console.log('Generation done')
              return
            }
            if (parsed.response) {
              setResponse((prev) => prev + parsed.response)
            }
          } catch (err) {
            console.warn('Error while parsing', err, line)
          }
        }
      } */
    } catch (error) {
      console.log(`Streaming error: ${error}`)
      setError(error.message || 'Streaming error')
    } finally {
      setLoader(false)
    }
  }
  return { handleRequest, response, error, loader }
}
