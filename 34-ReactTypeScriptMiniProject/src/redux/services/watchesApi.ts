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
    }),
    addNewData: build.mutation<Watch, WatchFormData>({
      query: (newData) => ({
        url: "watches",
        method: "POST",
        body: newData,
      }),
    }),
  }),
});

export const {
  useGetDataQuery,
  useGetDataByIdQuery,
  useDeleteDataByIdMutation,
  useAddNewDataMutation,
} = WatchApi;
