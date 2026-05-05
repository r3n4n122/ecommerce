export const errorMiddleware = (err, req, res, next) => {
  const status = err.status || 500
  
  switch(status){
    case 400:
      return res.status(status).json({
        message: err.message || "Parâmetro invalido"
      })
    case 401:
      return res.status(status).json({
        message: err.message || "usuário ou senha inválido"
      })
    case 404:
      return res.status(status).json({
        message: err.message || "Página não encontrada."
      })
    case 500:
      console.log(err)
      return res.status(status).json({
        message: "Erro interno no servidor"
      })
    default: 
      return res.status(status).json({
        message: "Ocorreu um erro inesperado. Tente novamente mais tarde."
      })
  }
};