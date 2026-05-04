import { response } from "express"
import { postInstance } from "./fetchApiService.js"
import AppError from "../errors/AppError.js";

export const authLogin = async ({ username, password }) => {
  try {
    const response = await postInstance({
      path: '/auth/login',
      params: { 
        username: username, 
        password: password,
        expiresInMins: 30 
      }
    });

    const user = response.data

    return {
      token: response.data.accessToken,
      user: { 
        id: response.data.id, 
        username: response.data.username,
        email: response.data.email
      }
    };

  } catch (e) {
    if (e.response && e.response.data) {
      const message = e.response.data.message;
      const status = e.response.status;

      if (status === 400 && message.toLowerCase().includes("invalid credentials")) {
        throw new AppError("invalid credentials", 401);
      }
      throw new AppError(message, status);
    }
    throw new AppError(e.message, 500);
  }
};
