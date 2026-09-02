const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(`
    <html>
    <head>
      <title>Mael Binary</title>
      <style>
        body{
          background:#111;
          color:white;
          font-family:Arial;
          text-align:center;
          padding:40px;
        }
      </style>
    </head>
    <body>
      <h1>MAEL BINARY</h1>
      <h2>Sistema Online</h2>

      <h3>Análise dos 10 Quadrantes</h3>

      <p>Últimas 3 velas: 🟢 🟢 🔴</p>

      <p>Sinal Atual: CALL</p>

      <p>Probabilidade: 80%</p>

      <p>Status: Funcionando</p>
    </body>
    </html>
  `);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Servidor iniciado");
});
