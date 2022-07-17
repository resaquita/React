import { React, useContext, useState } from 'react';
import "./Login.css"
import {useNavigate} from "react-router-dom"
import { CartContext } from '../../Context/CartContext';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export const Login = () => {
  const [login, setLogin] = useState({});

  const handleChange = (event) => { 
    const name = event.target.name;
    const value = event.target.value;
    setLogin(values => ({...values, [name]: value}))
  }

  const {loginUpdate} = useContext(CartContext)

  const handleSubmit = (event) => {
    event.preventDefault();
    if(login.email===login.email2){
      loginUpdate(login)
      navigate("/cart")
    } else {
      toast.error("Emails don't match")
    }
    
  }

  let navigate = useNavigate();

  return (
    <div className='row loginRow'>
        <div className='formDiv col-lg-8'>
            <h2>Login to Checkout</h2>
            <form onSubmit={handleSubmit} id="form1">
            <label>Enter your name: 
            <input 
                type="text" 
                name="user" 
                value={login.user || ""} 
                onChange={handleChange}
            />
            </label>
            <label>Enter your phone number: 
                <input 
                type="number" 
                name="phone" 
                value={login.phone || ""} 
                onChange={handleChange}
                />
                </label>
                <label>Enter your email: 
                <input 
                type="email" 
                name="email" 
                value={login.email || ""} 
                onChange={handleChange}
                />
                </label>
                <label>Confirm your email: 
                <input 
                type="email" 
                name="email2" 
                value={login.email2 || ""} 
                onChange={handleChange}
                />
                </label>
                <button className='btn btn-primary btnLogin' type="submit" form="form1" value="Submit" >Proceed to Checkout</button>
                <ToastContainer />
            </form>
        </div>
    </div>
  )
}