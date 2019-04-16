import React from 'react'
import App, { Container } from 'next/app'
import { overmindFactory, cloneStateWithoutGettersAndDerivedState } from '../overmind'



class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    const { req, query } = ctx

    const isClient = !req

    if (isClient) {
      const pageName = ctx.pathname.split('/').join('_')
      const initPageAction = `initPage${pageName}`
      const overmind = overmindFactory()
      if (overmind.actions[initPageAction]) {
        await overmind.actions[initPageAction](ctx.query)
      }
      return {}
    }

    const pageName = router.pathname.split('/').join('_')
    const initPageAction = `initPage${pageName}`
    const overmind = overmindFactory({ isServer: true })
    if (overmind.actions[initPageAction]) {
      await overmind.actions[initPageAction](router.query)
    }
    const transmitState = cloneStateWithoutGettersAndDerivedState(overmind.state)
    return { transmitState }
  }

  constructor (props) {
    super(props)
    const { transmitState } = props
    overmindFactory({ transmitState })
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
