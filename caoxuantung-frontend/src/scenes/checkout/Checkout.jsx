import React from 'react'

export default function Checkout() {
  return (
  <table className="table table-bordered">
  <tbody>
    <tr><td>CHECKOUT</td></tr>
    <tr> 
      <td>
        <form className="form-horizontal">
          <div className="control-group">
            <label className="span2 control-label" >Name</label>
            <div className="controls">
              <input type="text" placeholder="name" />
            </div>
          </div>
          <div className="control-group">
            <label className="span2 control-label" htmlFor="inputPassword">Address</label>
            <div className="controls">
              <input type="text" placeholder="address" />
            </div>
          </div>
          <div className="control-group">
            <label className="span2 control-label" htmlFor="inputPassword">Phone</label>
            <div className="controls">
              <input type="text" placeholder="phone" />
            </div>
          </div>
          <div className="control-group">
            <div className="controls">
              <button type="submit" className="shopBtn">Check Out</button>
            </div>
          </div>
        </form> 
      </td>
    </tr>
  </tbody>
</table>

  )
}
