import React from "react";
import SavedCoin from "../components/SavedCoin"
import {UserAuth} from "../context/AuthContext"
import {useNavigate, Link} from 'react-router-dom'
const Account = () => {
    const {user, logout}=UserAuth()
    const navigate= useNavigate()

    const handleSignOut= async () => {
        try{
            await logout()
            navigate('/')

        }  catch(e){
            console.log(e.message)
        }
    }
    if(user){
    return (
        <div className='max-w-[1140px] mx-auto'>
            <div className='flex justify-between items-center my-12 py-8 rounded-div'>
                <div>
                    <h1 className='text-2xl font-bold ml-2'>Account</h1>
                    <div>
                        <p className='ml-2 mt-3'>Welcome, {user?.email}</p>
                    </div>
                </div>
                <div>
                    <button onClick={handleSignOut} className='border px-6 py-2 rounded-2xl shadow-lg hover:shadow-2xl'>Sign Out</button>
                </div>

            </div>
            <div className='flex justify-between items-center my-12 py-8 rounded-div'>
                <div className='w-full min-h-[300px]'>
                    <h1 className='text-2xl font-bold py-4 ml-2'>Watch List</h1>
                    <SavedCoin />
                </div>
            </div> 
        </div>
    );
}else{
    return <navigate to='/signin'/>;
}
};
export default Account;