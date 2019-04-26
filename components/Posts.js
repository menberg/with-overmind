import React from 'react'
import Link from 'next/link'
import { useOvermind } from '../overmind'

export default ({ overmind }) => {
  const { state, actions } = useOvermind()
  const filteredPosts = state.useDerivedState
    ? state.filteredPostsAsDerivedState
    : state.filteredPostsAsGetter
  if (state.isLoadingPosts || !filteredPosts) {
    return (
      <div>
        <h4>Loading posts...</h4>
      </div>
    )
  }
  return (
    <div>
      <hr />
      <span>Show count: </span>
      <input
        type='number'
        min='0'
        max='100'
        step='1'
        value={state.showCount}
        onChange={event =>
          actions.changeShowCount(Math.floor(event.target.value))
        }
      />
      <button onClick={actions.switchStateMode}>
        {state.useDerivedState ? 'Using Derived State' : 'Using Getter'}
      </button>
      <ul>
        {filteredPosts.map(post => (
          <li key={post.id}>
            <h4>
              <Link href={`/post?id=${post.id}`} as={`/post/${post.id}`}>
                <a>{`${post.id}. ${post.title}`}</a>
              </Link>
            </h4>
            <pre>{post.body}</pre>
          </li>
        ))}
      </ul>
    </div>
  )
}
