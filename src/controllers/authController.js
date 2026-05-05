import AppError from "../errors/AppError.js";
import { authLogin } from "../services/authService.js";
import { validationLogin } from "../schema/authSchema.js";

export const signIn = async (req, res, next) => {
  try {
    const validation = validationLogin(req.body);

    if (!validation.success) {
      const firstError = validation.error.issues[0].message;
      throw new AppError(firstError, 400);
    }

    const { username, password } = req.body;

    const response = await authLogin({
      username,
      password
    });

    return res.status(200).json(response);

  } catch (error) {
    next(error);
  }
};