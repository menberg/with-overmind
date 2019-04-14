import React from 'react'
import App, { Container } from 'next/app'
import { createOvermind } from 'overmind'
import { configFactory, overmindFactory } from '../overmind'

class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    const { req, query } = ctx

    const isClient = !req
    const isServer = !isClient

    if (isClient) {
      const pageName = ctx.pathname.split('/').join('_')
      const initPageAction = `initPage${pageName}`
      const overmind = overmindFactory()
      if (overmind.actions[initPageAction]) {
        await overmind.actions[initPageAction]()
      }
      return {}
    }

    if (isServer) {
      const pageName = router.pathname.split('/').join('_')
      const initPageAction = `initPage${pageName}`
      const overmind = overmindFactory(configFactory())
      if (overmind.actions[initPageAction]) {
        await overmind.actions[initPageAction]()
      }
      const initialState = overmind.state
      return { initialState }
    }   
  }

  constructor (props) {
    // Client only, rehydration:
    super(props)
    const { initialState } = props
    overmindFactory(configFactory(initialState))
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
