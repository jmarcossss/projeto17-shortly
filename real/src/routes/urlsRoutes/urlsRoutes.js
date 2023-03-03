//* Libraries
import { Router } from "express";

//* Controllers
import { createShortenUrl, deleteUrlById, getUrlById, redirectToUrl } from "../../controllers/urlsController/urlsController.js";

//* Middlewares
import { validateToken } from "../../middlewares/validateToken.js";

//* Schemas
import { verifySchema } from "../../middlewares/verifySchema.js";
import { shortenUrlSchema } from "../../schemas/shortenUrlSchema.js";

export const urlsRoutes = Router()

urlsRoutes.get('/urls/:id', getUrlById)

urlsRoutes.get('/urls/open/:shortUrl', redirectToUrl)

urlsRoutes.post('/urls/shorten', validateToken, verifySchema(shortenUrlSchema), createShortenUrl)

urlsRoutes.delete('/urls/:id', validateToken, deleteUrlById)