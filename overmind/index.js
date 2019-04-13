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

export const overmindFactory = (config) => {
  if (config && !overmind) {
    overmind = createOvermind(config)
  }
  return overmind
}

let overmindHook = false

export const overmindHookFactory = () => {
  if (overmind && !overmindHook && overmind) {
    overmindHook = createHook(overmind)
  }
  return overmindHook
}
