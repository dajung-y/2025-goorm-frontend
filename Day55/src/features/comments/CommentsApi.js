import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const commentsApi = createApi({
  reducerPath: 'commentsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com'
  }),
  endpoints: (builder) => ({
    getComments: builder.query({
      query: (postId) => `comments?postId=${postId}`
    }),
    createComment: builder.mutation({
      query: (newComment) => ({
        url: '/comments',
        method: 'POST',
        body: newComment,
      })
    })
  })
});

export const {useGetCommentsQuery, useCreateCommentMutation} = commentsApi