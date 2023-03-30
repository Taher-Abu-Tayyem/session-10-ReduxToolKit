import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchProducts= createAsyncThunk('productsSlice/fetchProducts', async ()=>{
  const res = await fetch(
    "https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8"
  );
  const data = await res.json();
  console.log(data);
  return data;
})
export const productsSlice = createSlice({
    initialState:[{id:1,title:'product1'}],
    name: 'productsSlice',
    reducers: {
      addProduct: (state,action) => {
        state.push(action.payload)
      },     
},
extraReducer:(builder)=>{
  // builder.addCase(fetchProducts.pending,(state,action)=>{
  //   //loader here
  
  // })
builder.addCase(fetchProducts.fulfilled,(state,action)=>{
  //logic here
  console.log(action);
  state=action.payload;

})}
})

export const {addProduct} = productsSlice.actions

export default productsSlice.reducer