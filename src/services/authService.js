import { postInstance } from "./fetchApiService.js"

export const authLogin = async ({username, password}) => {
  const result = await postInstance({
    path: '/auth/login', 
    params: {
      username: username,
      password: password,
      expiresInMins: 30,
    }
  })

  return
}