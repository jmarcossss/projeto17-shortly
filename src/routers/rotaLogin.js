import { Router } from "express";
import { cadastroUsuario } from "../controllers/controllerLogin.js";
import { loginUsuario} from "../controllers/controllerLogin.js";
import tokenFunc from "../middlewares/tokenFunc.js";
import comparaMails from "../middlewares/emailMiddleware.js";
import tokenMiddleware2 from "../middlewares/tokenMiddleware2.js";
import { tokMiddleware } from "../middlewares/tokMiddleware.js";
import { padraoSchemaCadastro } from "../schemas/padraoSchema.js";
import { padraoSchemaLogin } from "../schemas/padraoSchema.js";

export const rotaLogin = Router();

//Cadastro do usuário
rotaLogin.post("/signup", tokMiddleware(padraoSchemaCadastro), comparaMails, cadastroUsuario);

//Login do usuário
rotaLogin.post("/signin", tokMiddleware(padraoSchemaLogin), loginUsuario, tokenMiddleware2, tokenFunc);