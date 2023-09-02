import { useState } from 'react'
import { FaGoogle } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import Card from '../../components/card/Card'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase/config'
import Loader from '../../components/loader/Loader'
import { ToastContainer, toast } from 'react-toastify';



const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsloading] = useState(false)

  const navigate = useNavigate()


const loginUser = (e) => {
    e.preventDefault()
    setIsloading(true)


   signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => { 
    const user = userCredential.user;
    console.log(user)
    setIsloading(false)
    toast.success('Login Successful...')
    navigate('/')

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
          <h2 className='text-center text-[#00a35c]'>Login</h2>
          <form name='login' onSubmit={loginUser}>
            <input type="email" className='block text-[1.6rem] font-light p-[1rem] my-[1rem] mx-[auto] w-[100%] border-[1px] border-solid border-[#777]' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
            <input type="Password" className='block text-[1.6rem] font-light p-[1rem] my-[1rem] mx-[auto] w-[100%] border-[1px] border-solid border-[#777]' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
            <button type='submit' className='--btn --btn-primary --btn-block'>Login</button>
            <div className='flex justify-between my-[5px] mx-0'>
              <Link to="/reset">Reset Password</Link>
            </div>
            <p className='text-center m-[1rem]'>--- or ---</p>
          </form>
          <button className='--btn bg-[#00a35c] text-white --btn-block'><FaGoogle className='pr-1'/> Login With Google</button>
          <span className='flex justify-center items-center mt-[1rem]'>
            <p>Don't have an account?</p>
            <Link to="/register" className='font-bold pl-2'>Register</Link>
          </span>
        </div>
        </Card>
      </section>
    </>
  )
}

export default Login