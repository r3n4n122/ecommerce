import AppError from "../errors/AppError.js";

export const errorMiddleware = (err, req, res, next) => {
  if (err instanceof AppError) {
    return res.status(err.status).json({
      message: err.message
    });
  }

  if (err.isAxiosError && err.response) {
    const axiosStatus = err.response.status;
    const axiosMessage = err.response.data?.message || "Erro na integração externa";
    
    return res.status(axiosStatus).json({
      message: axiosMessage
    });
  }

  const status = err.status || 500;
  const message = status === 500 
    ? "Erro interno no servidor" 
    : (err.message || "Ocorreu um erro inesperado");

  console.error(`[ERROR] ${req.method} ${req.url} - ${err.message}`);

  return res.status(status).json({
    message
  });
};
