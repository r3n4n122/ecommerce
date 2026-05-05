import { checkApplication } from "../services/healthService.js"

export const healthIndex = async (req, res, next) => {
  try{
    const response = await checkApplication();

    res.status(200).json({
      response
    })

  }catch(error){
    next(error)
  }
}