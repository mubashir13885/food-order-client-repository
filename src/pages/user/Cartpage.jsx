import React, { useEffect } from 'react'
import { getCart, removeItem } from '../../services/cartApi'
import { useState } from 'react'
import { toast } from 'sonner'


function Cartpage() {

  const [cartItems , setCartItems]=useState([])
  const [total , setTotal]=useState([])

  useEffect(()=>{
    getCart().then((res)=>{
      console.log(res);
      setCartItems(res?.data?.items)
      setTotal(res?.data)

    }).catch((err)=>{
      console.log(err);
      
    })
  },[])
  const handleRemoveCart=(itemId)=>{
       removeItem(itemId).then((res)=>{
        console.log(res);
        toast.success(res?.data?.message)
  
        getCart().then((res) => {
          setCartItems(res?.data?.items);
          setTotal(res?.data);
        });
        
       }).catch((err)=>{
        console.log(err)
        toast.error(err?.response?.data?.error);
        
       });
        
       }


  return (
    
   <div className='text-balck'>

<div className="overflow-x-auto p-8">
  <table className="table  w-full ">
    <thead >
      <tr>
        <th className='text-black'>Items</th>
        <th  className='text-black'>Title</th>
        <th  className='text-black'>Price</th>
        <th  className='text-black'>Quantity</th>
        <th  className='text-black'>Total</th>
        <th  className='text-black'>Remove</th>
      </tr>
    </thead>
    <tbody>
      
        {
          cartItems.map((item)=>(
            <tr key={item?._id}>
            <td>
          <div  className="avatar">
            <div className="w-16 h-16 rounded-lg">
              <img src={item?.itemId?.image} alt="Gulab jamun" />
            </div>
          </div>
        </td>
        <td>{item?.itemId?.item_name}</td>
        <td>{item?.price}</td>
        <td>1</td>
        <td>{item?.price}</td>
        <td>
          <button className="btn btn-ghost btn-xs"onClick={()=> handleRemoveCart(item.itemId._id)}>✕</button>
        </td>
        </tr>
          ))
        }
      
      
    </tbody>
  </table>
</div>


<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-8 pb-16">
  <div>
  
      
    
            <div>
            <div className=" mb-4">
            <span className="text-lg font-semibold">Cart Total: </span>
            <span className="text-2xl font-bold">{total.totalPrice}</span>
          </div>
      </div>
      
    
    <button className="btn btn-primary mt-4 w-full">Proceed to Checkout</button>
  </div>


  <div>
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text">If you have coupon code, enter here</span>
      </label>
      <div className="input-group">
        <input type="text" placeholder="Coupon code" className="input input-bordered w-full bg-white border-black" />
        <button className="btn btn-secondary">Submit</button>
      </div>
    </div>
  </div>
</div>

   </div>
  )
}

export default Cartpage