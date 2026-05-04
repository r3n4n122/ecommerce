import { authLogin } from "../services/authService.js";
import AppError from "../errors/AppError.js";

export const signIn = async (req, res, next) => {
  try{
    const credentials = req.body;

    if(!credentials.username){
      throw new AppError('Parâmetro username é obrigatório', 400)
    }

    if(!credentials.password){
      throw new AppError('Parâmetro password é obrigatório', 400)
    }

    const response = await authLogin({
      username: credentials.username,
      password: credentials.password
    });

    return res.status(200).json(
      response
    )
  }catch(error){
    next(error);
  }
}