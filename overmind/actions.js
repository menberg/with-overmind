import React from 'react'
import data from './_data'

export const initPageIndex = ({ state, actions }, count) => {
  state.showCount = 3
  if (!state.posts) {
    actions.getPosts()
  }
}

export const initPage3 = initPageIndex

export const initPage10 = ({ state, actions }, count) => {
  state.showCount = 10
  if (!state.posts) {
    actions.getPosts()
  }
}

export const initPage20 = ({ state, actions }, count) => {
  state.showCount = 20
  if (!state.posts) {
    actions.getPosts()
  }
}

export const initPage50 = ({ state, actions }, count) => {
  state.showCount = 50
  if (!state.posts) {
    actions.getPosts()
  }
}

export const getPosts = async ({ state, effects }) => {
  state.isLoadingPosts = true
  /* state.posts = await effects.request(
    'https://jsonplaceholder.typicode.com/posts'
  ) */
  state.posts = data
  state.isLoadingPosts = false
}

export const changeShowCount = ({ state }, count) => {
  state.showCount = count
}

export const loadPage = ({ state, actions }, page) => {
  switch (state.page) {
    case 'index':
      // Do some additional logic
      break
    case '10':
      // Do some additional logic
      break
  }
}