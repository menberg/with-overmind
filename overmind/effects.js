import fetch from 'isomorphic-unfetch'

export const request = async url => {
  const response = await fetch(url)
  return response.json()
}
