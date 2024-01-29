import React from 'react'
import { AppUrl } from '../Api/AppUrl';
import { Link } from 'react-router-dom'
import currency from 'currency.js';
import { useDispatch } from 'react-redux';
import { addToCart } from '../state/cartSlice';

export default function Product(Props) {
    const dispatch = useDispatch()
    var product = Props.product
    return (
        <div>
            <div className="thumbnail" style={{ height: '300px' }}>
                <a href="product_details.html" className="overlay" />
                <Link to={'/product/' + product.id}><img src={AppUrl.ImageURL + product.attributes.image.data[0].attributes.url} alt='tam' style={{ height: '160px' }} /></Link>
                <div className="caption cntr">
                    <Link to={'/product/' + product.id}><p>{product.attributes.productName}</p><p><strong> {currency(product.attributes.price, { separtor: '.', decimal: ',', symbol: 'VND ' }).format()}</strong></p></Link>
                    <div className="actionList" style={{ height: "20px" }}>
                        <a className="pull-left" href="#st">Add to Wish List </a>
                        <a className="pull-left" href="#st"> Add to Compare </a>
                    </div>
                    <br classNam e="clr" />
                    <a href="#st" className='shopBtn' title='add to cart'><Link className='shopBtn' href="#st" onClick={()=>dispatch(addToCart({item:{...product,count:1}}))}> Add To Cart</Link></a>
                </div>
            </div>
        </div>
    )
}