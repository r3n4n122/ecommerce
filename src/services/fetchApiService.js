import axios from "axios";

const createAxios = (token='') => {
  return axios.create({
    baseURL: process.env.EXTERNAL_API_URL,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })
}

export const getInstance = ({path, token='', body={}}) => {
  return createAxios(token).get(
    path,
    body
  )
}

export const postInstance = ({path, token='', body={}}) => {

  return createAxios(token).post(
    path,
    body
  )
}

export const putInstance = ({path, token='', body={}}) => {

  return createAxios(token).put(
    path,
    body
  )
}
