import { React, useContext, useState } from 'react';
import "./Login.css"
import {useNavigate} from "react-router-dom"
import { CartContext } from '../../Context/CartContext';

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
    loginUpdate(login)
    navigate("/cart")
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
                <button className='btn btn-primary btnLogin' type="submit" form="form1" value="Submit" >Proceed to Checkout</button>
            </form>
        </div>
    </div>
  )
}