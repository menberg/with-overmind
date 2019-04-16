import React from 'react'

export * from './initPageActions'

const arrayToObject = (arr, keyField) =>
  Object.assign({}, ...arr.map(item => ({ [item[keyField]]: item })))

export const getPosts = async ({ state, effects }) => {
  state.isLoadingPosts = true
  const posts = await effects.request(
    'https://jsonplaceholder.typicode.com/posts'
  )
  state.posts = arrayToObject(posts, 'id')
  state.isLoadingPosts = false
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

export const switchStateMode = ({ state }) => {
  state.useDerivedState = !state.useDerivedState
}
