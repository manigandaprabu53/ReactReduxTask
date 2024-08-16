import React from 'react'
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProductCard from './ProductCard';

function Cards() {
    
    let vals = 0;
    let list = useSelector(state=>state.cart)
    let prod = useSelector(state=>state.product)
    let qty = 0;

    function handleQuantity(){
      console.log(prod);
      
      prod.forEach(e => {
        vals = vals + Number(e.subtotal);
        console.log(vals)
      });
      return vals
    }

    function finalPrice(){
      let sum = 0;
      prod.forEach((e)=>{
        sum = sum + Number(e.subprice);
      })
      return sum;
    }

    function reload(){
      location.reload();
    }

    
    return <div className='d-flex justify-content-around'>
        <div className="container" style={{width: "65%"}}>
            {
            list.map((e, i)=>{
                return <ProductCard data={e} key={i}/>
            })
            }
        </div>
        <div className='m-2' style={{width: "35%", height: "40px"}}>
        <Card>
            <Card.Header><h4>Cart</h4></Card.Header>
            <Card.Body>
            
                <h5 className='mb-3'>Number of Products: {handleQuantity()}</h5>
                <h5 className='mb-3'>Total:{finalPrice()}</h5> 
            
            <Button variant="primary" onClick={reload}>Reset Cart</Button>
            </Card.Body>
        </Card>
        </div>
  </div>
}

export default Cards