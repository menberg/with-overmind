import React from 'react'
import { Provider } from 'overmind-react'
import { createOvermind } from 'overmind'
import { config, overmindCreator, createConfigWithInitialState } from '../overmind'
import App from '../components/App'

export default function buildSite (initPageAction, Site) {
  return class extends React.Component {
    static async getInitialProps ({ req, query }) {
      const isClient = !req
      if (isClient) {
        const overmind = overmindCreator(createConfigWithInitialState({}))
        if (overmind.actions[initPageAction]) {
          await overmind.actions[initPageAction]()
        }
        return {}
      }
      // ifServer:
      const overmind = createOvermind(config)
      if (overmind.actions[initPageAction]) {
        await overmind.actions[initPageAction]()
      }
      const initialState = overmind.state
      return { initialState }
    }
    constructor (props) {
      super(props)
      const { initialState } = props
      this.overmind = overmindCreator(createConfigWithInitialState(initialState))
    }
    componentDidMount () {}
    render () {
      return (
        <Provider value={this.overmind}>
          <Site />
        </Provider>
      )
    }
  }
}
