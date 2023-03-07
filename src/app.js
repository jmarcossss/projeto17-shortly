import express from "express"
import cors from "cors"
import routers from "./routers/rotas.js";

const server = express()
const port = process.env.PORT || 5000;
// const PORT= 5000

server.use(cors())
server.use(express.json())
server.use(routers);

// server.listen(PORT, () => {
//     console.log("Servidor rodando na porta 5000...")
// });
server.listen(port, () => {
    console.log(`Server running in port: ${port}`)
});