export const state = {
  isLoadingPosts: true,
  showCount: 3,
  get filteredPostsAsGetter() {
    return Object.keys(this.posts)
    .map(id => this.posts[id])
    .slice(0, this.showCount)
  },
  posts: {},
  filteredPostsAsDerivedState: state =>
    Object.keys(state.posts)
      .map(id => state.posts[id])
      .slice(0, state.showCount)
}
