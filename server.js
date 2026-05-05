import app from "./src/App.js";

app.listen(process.env.PORT || 3000, () => {
  console.log("Servidor rodando");
});