import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Card from '../../components/card/Card';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/config';
import Loader from '../../components/loader/Loader';



const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cpassword, setCpassword] = useState('')
  const [isLoading, setIsloading] = useState(false)

  const navigate = useNavigate()


 const registerUser = (e) => {
  e.preventDefault();
  if (password !== cpassword) {
    toast.error('password do not match.')
  }

  setIsloading(true)

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => { 
    const user = userCredential.user;
    console.log(user)
    setIsloading(false)
    toast.success('Registration Successful...')
    navigate('/login')

  })
  .catch((error) => {
    setIsloading(false)
    toast.error(error.message)
  });
}


  return (
    <>
    <ToastContainer />
    {isLoading && <Loader /> }
      <section className='container min-h-[80vh] flex justify-center items-center'>
       <Card>
        <div className='w-[35rem] p-[1.5rem] animate-[slide-up-0.5s-ease]'>
          <h2 className='text-center text-[#00a35c]'>Register</h2>
          <form name='register' onSubmit={registerUser}>
            <input type="email" className='block text-[1.6rem] font-light p-[1rem] my-[1rem] mx-[auto] w-[100%] border-[1px] border-solid border-[#777]' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
            <input type="Password" className='block text-[1.6rem] font-light p-[1rem] my-[1rem] mx-[auto] w-[100%] border-[1px] border-solid border-[#777]' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
            <input type="Password" className='block text-[1.6rem] font-light p-[1rem] my-[1rem] mx-[auto] w-[100%] border-[1px] border-solid border-[#777]' placeholder='Confirm Password' value={cpassword} onChange={(e) => setCpassword(e.target.value)} required/>
            <button type='submit' className='--btn --btn-primary --btn-block'>Register</button>
          </form>
          <span className='flex justify-center items-center mt-[1rem]'>
            <p>Already have an account?</p>
            <Link to="/login" className='font-bold pl-2'>Login</Link>
          </span>
        </div>
        </Card>
      </section>
    </>
  )
}

export default Register