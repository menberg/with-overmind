import React from 'react'

export const initPage_ = async ({ state, actions }, count) => {
  state.showCount = 3
  await actions.getPosts()
}

export const initPage_10 = async ({ state, actions }, count) => {
  state.showCount = 10
  await actions.getPosts()
}

export const initPage_20 = async ({ state, actions }, count) => {
  state.showCount = 20
  await actions.getPosts()
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

export const changeShowCount = ({ state }, count) => {
  state.showCount = count
}
