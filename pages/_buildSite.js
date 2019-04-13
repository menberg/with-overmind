import React from 'react'
import { Provider } from 'overmind-react'
import { createOvermind } from 'overmind'
import { configFactory, overmindFactory } from '../overmind'

export default function buildSite (initPageAction, Site) {
  return class extends React.Component {
    static async getInitialProps ({ req, query }) {
      const isClient = !req
      if (isClient) {
        // Client only:
        const overmind = overmindFactory()
        if (overmind.actions[initPageAction]) {
          await overmind.actions[initPageAction]()
        }
        return {}
      }
      // Server only:
      const overmind = overmindFactory(configFactory())
      if (overmind.actions[initPageAction]) {
        await overmind.actions[initPageAction]()
      }
      const initialState = overmind.state
      return { initialState }
    }
    constructor (props) {
      // Client only, rehydration:
      super(props)
      const { initialState } = props
      overmindFactory(configFactory(initialState))
    }
    render () {
      return <Site />
    }
  }
}
