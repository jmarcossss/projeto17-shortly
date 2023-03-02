import { Router } from "express";
import { linkUrl } from "../controllers/urlsController.js";
import { matarUrl } from "../controllers/urlsController.js";
import { pegarUrl } from "../controllers/urlsController.js";
import { camUrl } from "../controllers/urlsController.js";

import { tokenMiddleware } from "../middlewares/tokenMiddleware.js";
import { tokMiddleware } from "../middlewares/tokMiddleware.js";
import { padraoSchemaUrl } from "../schemas/padraoSchema.js";

export const rotaUrl = Router()

//Coletar as urls a partir do id
rotaUrl.get('/urls/:id', pegarUrl)

//Redirecionar o usuário para o link correspondente
rotaUrl.get('/urls/open/:shortUrl', camUrl)

//Coletar as urls a partir do shorten
rotaUrl.post('/urls/shorten', tokenMiddleware, tokMiddleware(padraoSchemaUrl), linkUrl)

//Deletar as urls a partir do id
rotaUrl.delete('/urls/:id', tokenMiddleware, matarUrl)