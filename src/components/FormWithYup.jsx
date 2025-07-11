import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object({
  username: yup.string().required('User mandatory'),
  email: yup.string().email('E-mail no valid').required('e-mail mandatory'),

}).required()

export const FormWithYup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })
  return (
    <>
      <form className='border rounded-xl grid grid-cols-2 gap-4 p-3' onSubmit={handleSubmit((data) => console.log(`With schema: ${data}`))}>
        <div className='flex'>
          {errors.username && <p className='text-red-500'>{errors.username.message}</p>}
          <input className='text-white p-1 rounded-full hover:bg-teal-600 focus:outline-2 focus:outline-offset-2 focus:outline-teal-500 active:bg-teal-700' placeholder='Your name' {...register('username')} />
        </div>
        <input className='text-white p-1 rounded-full hover:bg-teal-600 focus:outline-2 focus:outline-offset-2 focus:outline-teal-500 active:bg-teal-700' placeholder='E-mail' {...register('email')} />
        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
        <button className='p-3 m-3 rounded-full bg-teal-500 active:bg-teal-700' type='submit'>Submit</button>
      </form>
    </>
  )
}
