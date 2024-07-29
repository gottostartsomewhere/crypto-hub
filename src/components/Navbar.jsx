import React from 'react'
import ThemeToggle from '../components/ThemeToggle';
import { Link,  useNavigate } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import {useState} from 'react'
import {AiOutlineClose} from 'react-icons/ai';
import {UserAuth} from '../context/AuthContext'
const Navbar = () => {
  const[nav,setNav]=useState(false)
  const {user, logout}=UserAuth();
  const navigate =useNavigate();
  const handleNav = () =>{
    setNav(!nav);
  }
  const handleSignOut= async () => {
    try{
        await logout()
        navigate('/')

    }  catch(e){
        console.log(e.message)
    }
}
  return (
    <div className='rounded-div flex flex-row items-center justify-between h-20 font-bold'>
      <Link to='/'>
      <h1 className='text-2xl'>CryptoHub</h1>
      </Link>
      <div className='hidden md:block'>
      <ThemeToggle/>
      </div>
       
       {user?.email ? (
        <div>
          <Link to= '/account' className='p-4'>Account</Link>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
       ) : 
      (
      <div className='hidden md:block'>
        <Link to='/signin' className='p-4 hover:text-accent'>Sign in</Link>
        <Link to='/signup' className='bg-button text-btnText px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl'>Sign up</Link>

      </div>
      )
      }
      <div onClick={handleNav} className='block md:hidden cursor-pointer z-10'>
        {nav? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25}/>}
      </div>

      <div className={ nav? 'md:hidden fixed left-0 top-20 flex flex-col items-center justify-between w-full h-[90%] bg-primary ease-in duration-300 z-10' :
       'fixed left-[-100%] top-20 h-[-90%] flex flex-col items-center justify-between ease-in duration-300'
      }>
        <ul className='w-full p-4'>
          <li onClick={handleNav} className='border-b py-6'>
            <Link to='/'>Home</Link>

          </li>
          <li onClick={handleNav} className='border-b py-6'>
            <Link to='/account'>Account</Link>
            
          </li>
          <li className='py-6'>
            <ThemeToggle/>
            
          </li>
        </ul>

        
        <div  onClick={handleNav}  className='flex flex-col w-full p-4'>
          <Link to='signin'>
          <button  onClick={handleNav}  className='w-full my-2 p-3 bg-primary text-primary border border-secondary rounded-2xl shadow-xl'>Sign in</button>
          </Link>
          <Link to='signup'>
          <button className='w-full my-2 p-3 bg-primary text-primary border border-secondary rounded-2xl shadow-xl'>Sign Up</button>
          </Link>
        </div>
        
      </div>
    </div>
      
  )
}

export default Navbar;
