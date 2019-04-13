import { Overmind, createOvermind } from 'overmind'
import { createConnect } from 'overmind-react'
import { state } from './state'
import * as actions from './actions'
import * as effects from './effects'

export const config = {
  state,
  actions,
  effects
}

export const createConfigWithInitialState = initialState => {
  return {
    state: initialState,
    actions,
    effects
  }
}

export const connect = createConnect()

let overmind = false

export const overmindCreator = myConfig => {
  if (!overmind) {
    overmind = createOvermind(myConfig)
  }
  return overmind
}