import React from 'react'
import App, { Container } from 'next/app'
import { overmindFactory } from '../overmind'

class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    const { req, query } = ctx

    const isClient = !req
    const isServer = !isClient

    if (isClient) {
      const pageName = ctx.pathname.split('/').join('_')
      const initPageAction = `initPage${pageName}`
      const overmind = overmindFactory({})
      if (overmind.actions[initPageAction]) {
        await overmind.actions[initPageAction](ctx.query)
      }
      return {}
    }

    if (isServer) {
      const pageName = router.pathname.split('/').join('_')
      const initPageAction = `initPage${pageName}`
      const overmind = overmindFactory({ isServer })
      if (overmind.actions[initPageAction]) {
        await overmind.actions[initPageAction](router.query)
      }
      const initialState = overmind.state
      return { initialState }
    }   
  }

  constructor (props) {
    super(props)
    const { initialState } = props
    overmindFactory({ initialState })
  }

  render () {
    const { Component } = this.props

    return (
      <Container>
        <Component />
      </Container>
    )
  }
}

export default MyApp
