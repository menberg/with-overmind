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
      <h4>Show count</h4>
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
      <h5 onClick={actions.switchStateMode}>
        {state.useDerivedState ? 'Using Derived State' : 'Using Getter'}
      </h5>
      <ul>
        {filteredPosts.map(post => (
          <li key={post.id}>
            <h4>
              <Link href={`/post?id=${post.id}`} as={`/post/${post.id}`}>
                <a>
                  {post.id}. {post.title}
                </a>
              </Link>
            </h4>
            {post.body}
          </li>
        ))}
      </ul>
    </div>
  )
}
