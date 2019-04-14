import React from 'react'

export const initPage_ = async ({ state, actions }, query) => {
  await actions.getPosts()
}

export const initPage_10 = async ({ state, actions }, query) => {
  state.showCount = 10
  await actions.getPosts()
}

export const initPage_20 = async ({ state, actions }, query) => {
  state.showCount = 20
  await actions.getPosts()
}

export const initPage_post = async ({ state, actions }, query) => {
  await actions.getPost(query.id)
}

export const getPosts = async ({ state, effects }) => {
  if (!state.posts || !state.posts.length) {
    state.isLoadingPosts = true
    state.posts = await effects.request(
      'https://jsonplaceholder.typicode.com/posts'
    )
    state.isLoadingPosts = false
  }
}

export const getPost = async ({ state, effects }, postId) => {
  state.isLoadingPost = true
  state.post = await effects.request(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  )
  state.isLoadingPost = false
}

export const changeShowCount = ({ state }, count) => {
  state.showCount = count
}
