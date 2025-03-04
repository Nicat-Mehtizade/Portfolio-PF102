import { createSlice } from '@reduxjs/toolkit'

export const FavoritesSlice=createSlice({
    name:"favorites",
    initialState:{
        items:[]
    },
    reducers:{
        toggleFavs:(state,action)=>{
            const found=state.items.findIndex((p)=>p.id== action.payload.id)
            if(found==-1){
                state.items=[...state.items,action.payload]
            }
            else{
                state.items=state.items.filter((p)=>p.id!==action.payload.id)
                
            }
        }
    }

})

export const { toggleFavs } = FavoritesSlice.actions

export default FavoritesSlice.reducer