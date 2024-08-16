import React from 'react'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {AddCart, RemoveCart} from '../Redux/CartSlice'
import {RemoveSubPrice, RemoveSubTotal, SubPrice, SubTotal} from '../Redux/ProductSlice'
import findIndex from './Helper';

function ProductCard({data}) {
    let ide = data.id;
    let subtot = 0;
    let [quantity, setQuantity] = useState(0);
    let list = useSelector(state=>state.cart);
    let prod = useSelector(state=>state.product)

    let dispatch = useDispatch();
    let [subtots, setSubtots] = useState(0);
    let [toogle, setToogle] = useState(true);

    // function handleCart(){
    //   let index = findIndex(total, data.id);
    //   let ide = data.id
    //   dispatch(AddCart({ide, subtot}))
    //   let discount = ((data.price*data.discountPercentage)/100)*subtot;
    //   let finprice = subtot*data.price - discount;
    //   let fin = {id: Number(total[index].id), subtotal: finprice}
    //   total.splice(index, 1, fin);
    //   setTotal([...total])
    //   console.log(total)
    //   setToogle(false);
    // }

    function handleChange(val){
      // let index = findIndex(prod, data.id)
      val = Number(val)
      dispatch(SubTotal({ide, val}))
      setQuantity(val)

      
      // subtot = prod[index].subtotal;
      // let discount = ((data.price*data.discountPercentage)/100)*subtot;
      // subtot = subtot*data.price - discount;
      // setSubtots(subtot)
      
    }
    function handleCart(){
      let index = findIndex(prod, data.id)
      subtot = prod[index].subtotal;
      let discount = ((data.price*data.discountPercentage)/100)*subtot;
      dispatch(AddCart({ide, subtot}))
      subtot = subtot*data.price - discount;
      let val = subtot*data.price - discount
      console.log(subtot)
      dispatch(SubPrice({ide, subtot}));
      setSubtots(subtot)
      setToogle(false) 
    }

    function removeCart(){
      
      let index = findIndex(prod, data.id);
      subtot = quantity;
      dispatch(RemoveCart({ide, subtot}))
      let reinit = 0
      dispatch(RemoveSubTotal({ide, reinit}));
      dispatch(RemoveSubPrice({ide, reinit}))
      console.log(prod);
      setSubtots(0)
      setToogle(true);
    }

  return <>
    <div className="row mt-1">
        <div className='d-flex justify-content-start gap-3 align-items-center border border-secondary'>
            <img src={data.thumbnail} alt="Image Not Found" style={{height: "auto", width: "200px"}}/>
            <div style={{width: "400px"}} className='ml-3 p-4'>
                <h3>{data.title}</h3>
                <h5>Brand: {data.brand}</h5>
                <h6>Stock: {data.stock}</h6>
                <h6>Category: {data.category}</h6>
                <h6>Rating: {data.rating}</h6>
                <h6>Discount Percentage: {data.discountPercentage}</h6>
                <p>{data.description}</p>  
            </div>
            <div>
              <div className='d-flex gap-2 align-items-start'>
                <select onChange={(e)=>handleChange(e.target.value)}>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                <h4>${data.price}</h4>
              </div>
              <div className='mt-5'>
                {/* <Button variant='primary' onClick={()=>{handleCart()}}>Add to Cart</Button> */}
                {
                  toogle?<Button variant='primary' onClick={()=>{handleCart()}}>Add to Cart</Button>:<Button variant='danger' onClick={()=>{removeCart()}}>Remove From Cart</Button>
                }
              </div>
              <div className='mt-3'>
                <h5>SubTotal: {subtots}</h5>
              </div>
            </div>
        </div>
    </div>
  </>
}

export default ProductCard