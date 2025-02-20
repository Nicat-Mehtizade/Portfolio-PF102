import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `products`,
    }),
    getProductById: builder.query({
      query: (id) => `products/${id}`,
    }),
    addProduct:builder.mutation({
      query:(newProduct)=>({
        url:"/products",
        method:"POST",
        body:newProduct,
      })
    }),
    deleteProduct:builder.mutation({
      query:(id)=>({
        url:`/products/${id}`,
        method:"DELETE"
      })
    })
  }),
});

export const { useGetAllProductsQuery, useGetProductByIdQuery, useAddProductMutation, useDeleteProductMutation } = productsApi;
