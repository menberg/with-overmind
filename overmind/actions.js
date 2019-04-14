import React from 'react'

export const initPage_ = async ({ state, actions }, count) => {
  state.showCount = 3
  if (!state.posts || !state.posts.length) {
    await actions.getPosts()
  }
}

export const initPage_10 = async ({ state, actions }, count) => {
  state.showCount = 10
  if (!state.posts || !state.posts.length) {
    await actions.getPosts()
  }
}

export const initPage_20 = async ({ state, actions }, count) => {
  state.showCount = 20
  if (!state.posts || !state.posts.length) {
    await actions.getPosts()
  }
}

export const initPage_50 = async ({ state, actions }, count) => {
  state.showCount = 50
  if (!state.posts || !state.posts.length) {
    await actions.getPosts()
  }
}

export const getPosts = async ({ state, effects }) => {
  state.isLoadingPosts = true
  state.posts = await effects.request(
    'https://jsonplaceholder.typicode.com/posts'
  )
  state.isLoadingPosts = false
}

export const changeShowCount = ({ state }, count) => {
  state.showCount = count
}
