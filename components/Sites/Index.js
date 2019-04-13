import React from 'react'
import { connect } from '../../overmind'
import Header from '../Header'
import Posts from '../Posts'

function Index ({ overmind }) {
  const { state, actions } = overmind
  return (
    <div>
      <Header />
      <Posts />
    </div>
  )
}

export default connect(Index)
