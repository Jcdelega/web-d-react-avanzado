import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useOllama } from '../hooks/useOllama'
import { useContext } from 'react'
import { ChatContext } from '../context/ChatContext'

const querySchema = yup.object({
  userPrompt: yup.string().required('Prompt mandatory').min(3, 'At least 3 characters minimun')
}).required()

const Friday = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(querySchema)
  })
  const { handleRequest, response, loader } = useOllama()
  const { state, dispatch } = useContext(ChatContext)

  /* useEffect(() => {
    if (!response) return

    setMessages((prevMessages) => {
      const updatedMessages = [...prevMessages]
      const lastBotIndex = [...updatedMessages]
        .reverse()
        .findIndex((msg) => msg.sender === 'bot')

      if (lastBotIndex !== -1) {
        const realIndex = updatedMessages.length - 1 - lastBotIndex
        updatedMessages[realIndex] = {
          ...updatedMessages[realIndex],
          text: response,
        }
      } else {
        updatedMessages.push({ text: response, sender: 'bot' })
      }

      return updatedMessages
    })
  }, [response]) */

  const onSubmit = (query) => {
    
    dispatch({ type: 'ADD_MESSAGE', payload: { from: 'user', text: query.userPrompt } })
    reset()

    handleRequest(query.userPrompt)
    dispatch({ type: 'ADD_MESSAGE', payload: { from: 'Friday', text: response } })
  }
  return (
    <>
      <section className='grid grid-cols-1 gap-1 min-h-screen content-end'>
        <div className=''>
          <p className='text-center'>
            {loader ? 'loading...' : null}
          </p>
          {
            state.messages.map((mess, index) => (
              <p key={index} className={mess.from === 'user' ? 'rounded-xl ml-[25%] mr-2 my-2 bg-teal-600/50 p-1' : 'mr-[25%] m-2'}>
                {mess.text}
              </p>
            ))
          }
        </div>
        <form className='block m-3 self-end' onSubmit={handleSubmit(onSubmit)}>
          <div className='flex justify-evenly'>
            <div className='w-4/6'>
              <input
                className='text-white p-1 m-2 w-full h-10 rounded-full hover:bg-teal-600 focus:outline-2 focus:outline-offset-2 focus:outline-teal-500 active:bg-teal-700'
                placeholder='Do you need help with something?'
                {...register('userPrompt')}
              />
              {errors.userPrompt && <p className='text-red-500'>{errors.userPrompt.message}</p>}
            </div>
            <button className='p-3 m-1 w-1/6 rounded-full bg-teal-500 active:bg-teal-700' type='submit'>Send</button>
          </div>
        </form>
      </section>
    </>
  )
}
export default Friday
