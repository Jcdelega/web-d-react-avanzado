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
    ollama.handleSubmit(query.userPrompt)
    setMessages([...messages, ollama.response])
  }
  return (
    <>
      <section className='relative'>
        <div className='border'>
          {
            messages.map(( mess, index) => (
              <p key={index}>{mess}</p>
            ))
          }
        </div>
        <form className='block m-3 fixed bottom-0 right-0 left-0' onSubmit={handleSubmit(onSubmit)}>
          <div className='flex justify-evenly'>
            <div className='w-4/6'>
              <input
                className='text-white p-1 m-2 w-full h-10 rounded-full hover:bg-teal-600 focus:outline-2 focus:outline-offset-2 focus:outline-teal-500 active:bg-teal-700'
                placeholder='Do you need help with something?'
                {...register('userPrompt')}
              />
              {errors.username && <p className='text-red-500'>{errors.username.message}</p>}
            </div>
            <button className='p-3 m-1 w-1/6 rounded-full bg-teal-500 active:bg-teal-700' type='submit'>Send</button>
          </div>
        </form>
      </section>
    </>
  )
}
export default App
