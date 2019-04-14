import React from 'react'
import { useOvermind } from '../overmind'

export default ({ overmind }) => {
  const { state } = useOvermind()
  if (state.isLoadingPost || !state.post) {
    return (
      <div>
        <h4>Loading post...</h4>
      </div>
    )
  }
  return (
    <div>
      <h4>{state.post.title}</h4>
      <p>{state.post.body}</p>
    </div>
  )
}
