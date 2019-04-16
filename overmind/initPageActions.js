export const initPage_ = async ({ state, actions }, query) => {
  if (!state.posts || !Object.keys(state.posts).length) {
    await actions.getPosts()
  }
}

export const initPage_10 = async ({ state, actions }, query) => {
  state.showCount = 10
  if (!state.posts || !Object.keys(state.posts).length) {
    await actions.getPosts()
  }
}

export const initPage_20 = async ({ state, actions }, query) => {
  state.showCount = 20
  actions.switchStateMode()
  if (!state.posts || !Object.keys(state.posts).length) {
    await actions.getPosts()
  }
}

export const initPage_post = async ({ state, actions }, query) => {
  await actions.getPost(query.id)
}
