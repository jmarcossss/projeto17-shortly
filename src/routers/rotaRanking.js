import { Router } from "express";
import { imprTop } from "../controllers/controllerRanking.js";

export const rotaRanking = Router()

//Rota para listar os rankings existentes
rotaRanking.get("/ranking", imprTop)