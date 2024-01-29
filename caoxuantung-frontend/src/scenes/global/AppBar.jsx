import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import currency from 'cerrency.js';

export default function AppBar() {
    var cartItems = useSelector((state) => state.cart.items)
    const totalItems = cartItems.reduce((total, item) => {
        return total + item.count;
    }, 0);
    const total = cartItems.reduce((totalPrice, item) => {
        console.log(item)
        return totalPrice + item.count * item.attributes.price;
    }, 0);
    return (
        <div>
            <div className="navbar navbar-inverse navbar-fixed-top">
                <div className="topNav">
                    <div className="container">
                        <div className="alignR">
                            <div className="pull-left socialNw">
                                <a href="#st"><span className="icon-twitter" /></a>
                                <a href="#st"><span className="icon-facebook" /></a>
                                <a href="#st"><span className="icon-youtube" /></a>
                                <a href="#st"><span className="icon-tumblr" /></a>
                            </div>
                            <a href="index.html"> <span className="icon-home" /> Home</a>
                            {/* <Link to='/register'> */}
                                <a href="#st"><span className="icon-edit" /> Free Register </a>
                            {/* </Link> */}
                            {/* <Link to='login'> */}
                                <a href="#st"><span className="icon-user" /> My Account</a>
{/* 
                            </Link> */}
                            <a href="contact.html"><span className="icon-envelope" /> Contact us</a>
                            <Link to='/cart'><span className="icon-shopping-cart" /> {totalItems} Item(s) - <span className="badge badge-warning"> ${total}</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
