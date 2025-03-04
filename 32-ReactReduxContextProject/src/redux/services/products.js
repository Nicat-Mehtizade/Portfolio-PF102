import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `products`,
    }),
    getProductById: builder.query({
        query: (id)=> `products/${id}`
    }),
    addNewProduct:builder.mutation({
      query:(newProduct)=>({
        url:"products",
        method:"POST",
        body: newProduct
      })
    }),
    deleteProduct: builder.mutation({
      query:(id)=>({
         url:`products/${id}`,
         method:"DELETE"
      })
    }),
    editProduct: builder.mutation({
      query:({id,editedProduct})=>({
        url:`products/${id}`,
        method:"PATCH",
        body: editedProduct
      })
    })
  }),
})

export const { useGetProductsQuery, useGetProductByIdQuery, useAddNewProductMutation, useDeleteProductMutation, useEditProductMutation } = productsApi