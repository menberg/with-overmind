import { createOvermind } from 'overmind'
import { createHook } from 'overmind-react'
import { state } from './state'
import * as actions from './actions'
import * as effects from './effects'

export const configFactory = (initialState) => {
  return {
    state: initialState || state,
    actions,
    effects
  }
}

let overmind = false
export let useOvermind = false

export const overmindFactory = ({ initialState, isServer }) => {
  if (isServer) {
    // always reinitialize Overmind for each server request
    // to avoid Overmind's hotReloadingCache, we need a new name for the Overmind instance
    overmind = createOvermind(configFactory(initialState), { name: Math.random()})
    useOvermind = createHook(overmind)
  }
  if (!overmind) {
    overmind = createOvermind(configFactory(initialState))
    useOvermind = createHook(overmind)
  }
  return overmind
}
