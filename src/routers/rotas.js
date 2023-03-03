import { Router } from "express";

import { rotaLogin } from "./rotaLogin.js";
import { rotaUrl } from "./rotaUrl.js";
import { rotaUsuario } from "./rotaUsuario.js";
import { rotaRanking } from "./rotaRanking.js";

const router = Router();

//Rota do login
router.use(rotaLogin);
//Rota das urls
router.use(rotaUrl);
//Rota dos usuários
router.use(rotaUsuario);
//Rota dos rankings
router.use(rotaRanking);

export default router;