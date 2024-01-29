import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../state/cartSlice';
import { AppUrl } from '../../Api/AppUrl';
import { Link } from 'react-router-dom';
import currency from 'currency.js';
import { removeFromCart, increaseCount, decreaseCount }  from '../../state/cartSlice';

export default function CartMenu() {
  const dispatch = useDispatch()
  var cartItems=useSelector((state)=>state.cart.items)
  const totalItems=cartItems.reduce((total,item)=>{
      return total+item.count;
  },0);
  const total=cartItems.reduce((totalPrice,item)=>{
      console.log(item)
      return totalPrice+item.count*item.attributes.price;
  },0);
  var myview=cartItems.map((item)=>(    <tr>
    <td><img src={AppUrl.ImageURL + item.attributes.image.data[0].attributes.url} alt='tam' style={{ height: '160px' }} /></td>
    <td>{item.attributes.productName}</td>
    <td> - </td>
    <td><span className="shopBtn"><span className="icon-ok" /></span> </td>
    <td> {currency(item.attributes.price, { separtor: '.', decimal: ',', symbol: 'VND ' }).format()}</td>
    <td>
      <input className="span1" style={{ maxWidth: 34 }} placeholder={1} id="appendedInputButtons" size={16} type="text" Value={item.count} />
      <div className="input-append">
        <button className="btn btn-mini" type="button"  onClick={()=>dispatch(decreaseCount({id:item.id}))}>-</button>
        <button className="btn btn-mini" type="button"  onClick={()=>dispatch(increaseCount({id:item.id}))}> + </button>
        <button className="btn btn-mini btn-danger" type="button"><span className="icon-remove"  onClick={()=>dispatch(removeFromCart({id:item.id}))}/></button>
      </div>
    </td>
    <td> {currency(item.attributes.price*item.count, { separtor: '.', decimal: ',', symbol: 'VND ' }).format()}</td>
  </tr>
  ))
  return (
    <div className="row">
      <div className="span12">
        <ul className="breadcrumb">
          <li><a href="index.html">Home</a> <span className="divider">/</span></li>
          <li className="active">Check Out</li>
        </ul>
        <div className="well well-small">
          <h1>Check Out</h1>
          <hr className="soften" />
          <table className="table table-bordered table-condensed">
            <thead>
              <tr>
                <th>Image</th>
                <th>Product</th>
                <th>	Ref. </th>
                <th>Avail.</th>
                <th>Unit price</th>
                <th>Qty </th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
             {myview}



              <tr>
                <td colSpan={6} className="alignR">Total products:	{totalItems}</td>
                <td className="label label-primary"> {currency(total, { separtor: '.', decimal: ',', symbol: 'VND ' }).format()}</td>
              </tr>
            </tbody>
          </table><br />


          <a href="products.html" className="shopBtn btn-large"><span className="icon-arrow-left" /> Continue Shopping </a>
          <a href="login.html" className="shopBtn btn-large pull-right">Next <span className="icon-arrow-right" /></a>
        </div>
      </div>
    </div>

  )
}
