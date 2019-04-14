import React from 'react'
import Link from 'next/link'

export default () => {
  return (
    <div>
      <div>
        <Link href='/'>
          <a>Home</a>
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
    </div>
  )
}
