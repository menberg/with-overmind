import { Overmind, createOvermind } from 'overmind'
import { createHook } from 'overmind-react'
import { state } from './state'
import * as actions from './actions'
import * as effects from './effects'

export const configFactory = (initialState = null) => {
  return {
    state: initialState || state,
    actions,
    effects
  }
}

let overmind = false
export let useOvermind = false

export const overmindFactory = (config, isServer = false) => {
  if (isServer) {
    // always flush overmind for new server request
    overmind = createOvermind(configFactory())
    useOvermind = false
  }
  if (config && !overmind) {
    overmind = createOvermind(config)
  }
  if (overmind && !useOvermind) {
    useOvermind = createHook(overmind)
  }
  return overmind
}
