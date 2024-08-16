import { createSlice } from "@reduxjs/toolkit";
import findIndex from "../Components/Helper";

const ProductSlice = createSlice(
    {
        name: 'product',
        initialState: [
            {
                id: 1,
                subtotal: 0,
                subprice: 0
              },
              {
                id: 2,
                subtotal: 0,
                subprice: 0
              },
              {
                id: 3,
                subtotal: 0,
                subprice: 0
              },
              {
                id: 4,
                subtotal: 0,
                subprice: 0
              },
              {
                id: 5,
                subtotal: 0,
                subprice: 0
              },
              {
                id: 6,
                subtotal: 0,
                subprice: 0
              },
              {
                id: 7,
                subtotal: 0,
                subprice: 0
              },
              {
                id: 8,
                subtotal: 0,
                subprice: 0
              },
              {
                id: 9,
                subtotal: 0,
                subprice: 0
              },
              {
                id: 10,
                subtotal: 0,
                subprice: 0
              }
        ],
        reducers: {
          SubTotal: (state, action)=>{
            let index = findIndex(state, action.payload.ide)
            let val = Number(action.payload.val);
            state[index].subtotal = val;  
          },
          RemoveSubTotal: (state, action)=>{
            
            let index = findIndex(state, action.payload.ide)
            
            let val = Number(action.payload.reinit);
            state[index].subtotal = val; 
            
             
          },
          SubPrice: (state, action)=>{
            let index = findIndex(state, action.payload.ide)
            let val = Number(action.payload.subtot);
            state[index].subprice = val;  
            
          },
          RemoveSubPrice: (state, action)=>{
            let index = findIndex(state, action.payload.ide)
            let val = Number(action.payload.reinit);
            state[index].subprice = val;  
            
          }
        }
    }
)

export const {SubTotal, SubPrice, RemoveSubTotal, RemoveSubPrice} = ProductSlice.actions

export default ProductSlice.reducer