import { getInstance } from "../services/fetchApiService.js"

export const checkApplication = async () => {
  const response = await getInstance({
    path: "health"
  })

  return {status: response.data.status}
} 