import React from 'react'
import './Navbar.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const[menu,setMenu]=useState("Shop");
    return (
        <div className='navbar'>
            <div className="nav-logo">
               <img src={require('../Assets/Images/logo.png')} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className="nav-manu">
                <li onClick={()=>{setMenu("Shop")}}><Link to='/' style={{textDecoration:'none'}}>Shop</Link>{menu==="Shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Men")}}><Link to='/mens' style={{textDecoration:'none'}}>Men</Link>{menu==="Men"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Women")}}><Link to='/womens' style={{textDecoration:'none'}}>Women</Link>{menu==="Women"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Kids")}}><Link to='kids' style={{textDecoration:'none'}}>Kids</Link>{menu==="Kids"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={require('../Assets/Images/cart_icon.png')} alt="" /></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}
export default Navbar
