import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../../components/card/Card'
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebase/config';
import { toast } from 'react-toastify';
import Loader from '../../components/loader/loader';

const Reset = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsloading] = useState(false)

  const resetPassword = (e) => {
    e.preventDefault();
    setIsloading(true)

    sendPasswordResetEmail(auth, email).then(() => {
      setIsloading(false)
      toast.success('Check your email for a reset link')

    }).catch((error) => {
      setIsloading(false)
      toast.error(error.message)
    })
  }

  return (
    <>
      {isLoading && <Loader />}
      <section className='container min-h-[80vh] flex justify-center items-center'>
       <Card>
        <div className='w-[35rem] p-[1.5rem] animate-[slide-up-0.5s-ease]'>
          <h2 className='text-center text-[#00a35c]'>Reset Password</h2>
          <form name='reset' onSubmit={resetPassword}>
            <input type="email" className='block text-[1.6rem] font-light p-[1rem] my-[1rem] mx-[auto] w-[100%] border-[1px] border-solid border-[#777]' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
            <button type='submit' className='--btn --btn-primary --btn-block'>Reset Password</button>
            <div className='flex justify-between my-[5px] mx-0'>
            <p><Link to="/login" >* Login</Link></p> 
            <p><Link to="/register" >* Register</Link></p>
            </div>
          </form>
        </div>
        </Card>
      </section>
    </>
  )
}

export default Reset