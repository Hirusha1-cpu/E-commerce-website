import {createSlice, createSelector} from '@reduxjs/toolkit';


  
const initialState = {
    user:{
        name:'hirusha',
    }
}
const userSlice = createSlice({
    name:'userSlice',
    initialState,
    reducers:{
        addUser: (state, action)=>{
            state.user = action.payload

        },
        removeUser: (state, action)=>{
            state.user = {}
        }
        
    }


})

export const {addUser, removeUser} = userSlice.actions;
export const userSelector = createSelector([(store)=> store.user.user],(user)=>user)

export default userSlice.reducer;