import { v4 as uuidV4 } from "uuid"
import { db } from "../../database/db.js"

export default async function tokenFunc(require, response) {
    const unique = require.sanitizedBody.userId
    const token = uuidV4()
    try {
        await db.query("INSERT INTO tokens (token, user_id) VALUES ($1, $2)", [token, unique])
        return response.send({ token })
    }
    //Se der ruim, exibir status 500
    catch(err) { console.log(err); return response.sendStatus(500);}
}