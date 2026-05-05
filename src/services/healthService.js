import { getInstance } from "../services/fetchApiService.js"
import AppError from "../errors/AppError.js"

export const checkApplication = async () => {
  const response = await getInstance({
    path: "health"
  })

  if(!response.data){
    throw new AppError("Dados não encontratos", 404)
  }
  
  return {
    status: response.data.status, 
    timestamp: new Date().toISOString() 
  }
} 