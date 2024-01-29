import React from 'react'
import PictureBox from './PictureBox'
import { Link } from 'react-router-dom'
import currency from 'currency.js';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../state/cartSlice';


export default function ProductDetail() {
    const dispatch = useDispatch()
    // eslint-disable-next-line no-undef
    var product = Props.product


    return (
        <div className="well well-small">
            <div className="row-fluid">
                <div className="span5">
                    <PictureBox/>
                </div>
                <div className="span7">
                    <h3>Name of the Item [$140.00]</h3>
                    <hr className="soft" />
                    <form className="form-horizontal qtyFrm">
                        <div className="control-group">
                            <label className="control-label"><span>$140.00</span></label>
                            <div className="controls">
                                <input type="number" className="span6" placeholder="Qty." />
                            </div>
                        </div>
                        <p>Nowadays the lingerie industry is one of the most successful business spheres.
                            Nowadays the lingerie industry is one of ...
                        </p><p>
                        <a href="#st" className='shopBtn' title='add to cart'><Link className='shopBtn' href="#st" onClick={()=>dispatch(addToCart({item:{...product,count:1}}))}> Add To Cart</Link></a>
                        </p></form>
                </div>
            </div>
            <hr className="softn clr" />
            <ul id="productDetail" className="nav nav-tabs">
                <li className="active"><a href="#home" data-toggle="tab">Product Details</a></li>
            </ul>
            <div id="myTabContent" className="tab-content tabWrapper">
                <div className="tab-pane fade active in" id="home">
                    <h4>Product Information</h4>
                    <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
                </div>
            </div>
        </div>




    )
}
