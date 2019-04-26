import { createOvermind } from 'overmind'
import { createHook } from 'overmind-react'
import { state } from './state'
import * as actions from './actions'
import * as effects from './effects'

export const cloneStateWithoutGettersAndDerivedState = src => {
  let target = {}
  const descriptors = Object.getOwnPropertyDescriptors(src)
  for (const key in descriptors) {
    if (
      typeof descriptors[key].value !== 'function' &&
      typeof descriptors[key].get !== 'function'
    ) {
      target[key] = src[key]
    }
  }
  return target
}

const addGettersToMergedState = (withGetters, mergedState) => {
  const descriptors = Object.getOwnPropertyDescriptors(withGetters)
  for (const key in descriptors) {
    if (
      typeof descriptors[key].get === 'function'
    ) {
      Object.defineProperty(mergedState, key, descriptors[key])
    }
  }
}

export const configFactory = transmitState => {
  const mergedState = transmitState ? { ...state, ...transmitState } : state
  if (transmitState) {
    addGettersToMergedState(state, mergedState)
  }
  return {
    state: mergedState,
    actions,
    effects
  }
}

let overmind = false
export let useOvermind = false

export const overmindFactory = (options = {}) => {
  const { transmitState, isServer } = options
  // always reinitialize Overmind for each new server request
  if (isServer) {
    overmind = createOvermind(configFactory(transmitState))
    useOvermind = createHook(overmind)
  }
  if (!overmind) {
    overmind = createOvermind(configFactory(transmitState))
    useOvermind = createHook(overmind)
  }
  return overmind
}
