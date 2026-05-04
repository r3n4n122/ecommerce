import { authLogin } from "../services/authService.js";

export const signIn = async (req, res, next) => {
  try{
    console.log(req.body)

    // const autentication = await authLogin();

   return res.status(200).json({
      user: "teste"
    })
  }catch(error){
    console.log("error")
  }
}