import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useOllama } from './hooks/useOllama'
import { useState } from 'react'

const querySchema = yup.object({
  userPrompt: yup.string().required('User mandatory').min(3, 'At least 3 characters minimun')
}).required()

const App = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(querySchema)
  })
  const ollama = useOllama()
  const [messages, setMessages] = useState([])

  const onSubmit = (query) => {
    ollama.handleSubmit(query.text)
    setMessages([...messages, ollama.response])
  }
  return (
    <>
      <form className='border rounded-xl grid grid-cols-2 gap-4 p-3' onSubmit={handleSubmit(onSubmit)}>
        <div className='flex'>
          <input
            className='text-white p-1 rounded-full hover:bg-teal-600 focus:outline-2 focus:outline-offset-2 focus:outline-teal-500 active:bg-teal-700'
            placeholder='Do you need help with something?'
            {...register('userPrompt')}
          />
          {errors.username && <p className='text-red-500'>{errors.username.message}</p>}
          <button className='p-3 m-3 rounded-full bg-teal-500 active:bg-teal-700 justify-self-end-safe' type='submit'>Send</button>
        </div>
      </form>
      <div className='border'>
        <p>{messages}</p>
      </div>
    </>
  )
}
export default App
