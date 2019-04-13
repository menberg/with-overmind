import React from 'react'
import { connect } from '../overmind'
import Link from 'next/link'

function Header ({ overmind }) {
  const { state, actions } = overmind
  return (
    <div>
      <h1>{state.page}</h1>
      <div>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </div>
      <div>
        <Link href='/3'>
          <a>Show 3 posts</a>
        </Link>
      </div>
      <div>
        <Link href='/10'>
          <a>Show 10 posts</a>
        </Link>
      </div>
      <div>
        <Link href='/20'>
          <a>Show 20 posts</a>
        </Link>
      </div>
      <div>
        <Link href='/50'>
          <a>Show 50 posts</a>
        </Link>
      </div>
      <div>
        <h4>Enter custom count</h4>
        <input
          type='number'
          min='0'
          max='100'
          step='1'
          value={state.showCount}
          onChange={event => actions.changeShowCount(Math.floor(event.target.value))}
        />
      </div>
    </div>
  )
}

export default connect(Header)
