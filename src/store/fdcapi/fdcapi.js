import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import http from "../../services/http/baseUrl"

export const FetchAllData = createAsyncThunk('fdcapi/FetchAllData', async()=>{
    try {
        const response = await http.get('/posts');
        console.log('data ----', response.data)
            return  response.data;
    } catch (error) {
        console.log(err)
    }

})

export const FetchSingleData = createAsyncThunk('fdcapi/FetchSingleData', async(id)=>{
  try {
      const response = await http.get(`/posts/${id}`);
      console.log('data ----', response.data)
          return  response.data;
  } catch (error) {
      console.log(err)
  }

})
const fdcapiSlice = createSlice({
  name: 'fdcapi',
  initialState:{
    loading: false,
      data:[],
      post:{}
  },
  reducers: {},
  extraReducers(builder){
    builder
    .addCase(FetchAllData.pending, (state, action)=>{
      state.loading = true;
    })
    .addCase(FetchAllData.fulfilled, (state, action)=>{
      console.log('datttttttttttt', action.payload)
        state.data = action.payload;
      })
    .addCase(FetchAllData.rejected, (state, action)=>{
        state.loading = false;
      })  
//single data
      .addCase(FetchSingleData.pending, (state, action)=>{
        state.loading = true;
      })
      .addCase(FetchSingleData.fulfilled, (state, action)=>{
     //   console.log('datttttttttttt', action.payload)
          state.post = action.payload;
        })
      .addCase(FetchSingleData.rejected, (state, action)=>{
          state.loading = false;
        })  
    }
})

export default fdcapiSlice.reducer