import React from 'react'
import { connect } from '../overmind'

function Posts ({ overmind }) {
  const { state, actions } = overmind
  if (state.isLoadingPosts) {
    return (
      <div>
        <h4>Loading...</h4>
      </div>
    )
  }
  if (!state.posts) {
    return (
      <div>
        <h4>No posts loaded.</h4>
      </div>
    )
  }
  return (
    <div>
      {state.isLoadingPosts ? (
        <h4>Loading...</h4>
      ) : (
        <div>
          Show count: {state.showCount}
          <ul>
            {state.posts.slice(0, state.showCount).map((post, index) => (
              <li key={post.id}>
                <h4>
                  {index + 1}. {post.title}
                </h4>
                {post.body}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default connect(Posts)
