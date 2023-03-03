import { Router } from "express";
import { tokenMiddleware } from "../middlewares/tokenMiddleware.js";
import { pegPeop } from "../controllers/controllerUsuarios.js";

export const rotaUsuario = Router();

//Coletar a lista de usuários
rotaUsuario.get("/users/me", tokenMiddleware, pegPeop);