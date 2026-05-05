export const errorMiddleware = (err, req, res, next) => {
  const status = err.status || 500
  const isProduction = process.env.NODE_ENV === 'production';

  switch(status){
    case 400:
      return res.status(status).json({
        message: err.message || "Parâmetro invalido",
        stack: isProduction ? undefined : err.stack,
      })
    case 401:
      return res.status(status).json({
        message: err.message || "usuário ou senha inválido",
        stack: isProduction ? undefined : err.stack,
      })
    case 404:
      return res.status(status).json({
        message: err.message || "Página não encontrada.",
        stack: isProduction ? undefined : err.stack,
      })
    case 500:
      console.log(err)
      return res.status(status).json({
        message: "Erro interno no servidor",
        stack: isProduction ? undefined : err.stack,
      })
    default: 
      return res.status(status).json({
        message: "Ocorreu um erro inesperado. Tente novamente mais tarde.",
        stack: isProduction ? undefined : err.stack,
      })
  }
};