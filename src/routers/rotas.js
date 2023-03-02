//Importação de bibliotecas padrão
import { Router } from "express";
import rotaGames from "./rotaGames.js";
import rotaCustomers from "./rotaCustomers.js";
import rentals from "./rotaRentals.js";

const router = Router();

//Rota dos jogos
router.use(rotaGames);
//Rota dos customers
router.use(rotaCustomers);
//Rota das rentals
router.use(rentals);

export default router;