import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Watch, WatchFormData } from "../../types";

export const WatchApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
  }),
  tagTypes: ["Watch"],
  endpoints: (build) => ({
    getData: build.query<Watch[], void>({
      query: () => "watches",
      providesTags: ["Watch"],
    }),
    getDataById: build.query<Watch, string | number>({
      query: (id) => `watches/${id}`,
    }),
    deleteDataById: build.mutation<void, string | number>({
      query: (id) => ({
        url: `watches/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Watch"]
    }),
    addNewData: build.mutation<Watch, WatchFormData>({
      query: (newData) => ({
        url: "watches",
        method: "POST",
        body: newData,
      }),
    }),
    editData:build.mutation<void,{id:string | number, editedProduct:Partial<Watch>}>({
      query: ({id,editedProduct})=>({
        url:`watches/${id}`,
        method:"PATCH",
        body: editedProduct
      }),
      invalidatesTags: ["Watch"]
    })
  }),
});

export const {
  useGetDataQuery,
  useGetDataByIdQuery,
  useDeleteDataByIdMutation,
  useAddNewDataMutation,
  useEditDataMutation
} = WatchApi;
