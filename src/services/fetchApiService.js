import axios from "axios";

const baseURL = "https://dummyjson.com"

const createAxios = ({token=''}) => {
  axios.create({
    baseURL: baseUrl,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })
}

export const getInstance = ({path, token='', params={}}) => {
  return createAxios(token).get(
    path,
    {
      params: params
    }
  )
}

export const postInstance = ({path, token='', params={}}) => {
  return createAxios(token).post(
    path,
    {
      params: params
    }
  )
}
