
const API_URL = 'http://localhost:11434/api/generate'

export const useOllama = () => {
  const handleRequest = async ($prompt) => {
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
    } catch (error) {
      console.log(`Streaming error: ${error}`)
      setError(error.message || 'Streaming error')
    } 
  }
}