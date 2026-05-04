import axios from "axios";


const createAxios = (token='') => {
  return axios.create({
    baseURL: "https://dummyjson.com",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })
}

export const getInstance = ({path, token='', params={}}) => {
  return createAxios(token).get(
    path,
    params
  )
}

export const postInstance = ({path, token='', params={}}) => {

  console.log(params)
  return createAxios(token).post(
    path,
    params
  )
}
