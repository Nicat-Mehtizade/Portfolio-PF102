import { createSlice } from "@reduxjs/toolkit";

export const BasketSlice=createSlice({
    name:"basket",
    initialState:{
        items:[]
    },
    reducers:{
        addBasket:(state,action)=>{
            const index=state.items.findIndex((p)=>p.id==action.payload.id)

            if(index==-1){
                // state.items.push({...action.payload,quantity:1})
                state.items=[...state.items,{...action.payload,quantity:1}]
            }else{
                state.items[index].quantity++
            }
        },
        removeFromBasket:(state,action)=>{
            state.items=state.items.filter((p)=>p.id!==action.payload.id)
        },
        increment:(state,action)=>{
            const found=state.items.find((p)=>p.id==action.payload.id)
            found.quantity++
        },
        decrement:(state,action)=>{
            const found=state.items.find((p)=>p.id==action.payload.id)
            found.quantity--
        },
        clearBasket:(state)=>{
            state.items=[]
        }
    }
})

export const {addBasket,removeFromBasket,increment,decrement,clearBasket } = BasketSlice.actions

export default BasketSlice.reducer