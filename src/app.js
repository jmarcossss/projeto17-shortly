import express from "express"
import cors from "cors"
// import { rotaLogin } from "./routers/rotaLogin.js";
// import { rotaUrl } from "./routers/rotaUrl.js";
// import { rotaUsuario } from "./routers/rotaUsuario.js";
// import { rotaRanking } from "./routers/rotaRanking.js";

import routers from "./routers/rotas.js";

const server = express()
const PORT= 5000

server.use(cors())
server.use(express.json())

server.use(routers);

// server.use(rotaLogin)
// server.use(rotaUrl)
// server.use(rotaUsuario)
// server.use(rotaRanking)

server.listen(PORT, () => {
    console.log("Servidor rodando na porta 5000...")
});