import { db } from "../database/db.js"

export async function tokenMiddleware(require, response, funcAuxi) {
    let token = require.headers.authorization
    if(!token) {
        return response.sendStatus(401)
    }
    token = token.replace("Bearer ", "")
    try {
        const response = await db.query("SELECT * FROM tokens WHERE token = $1", [token])
        if(response.rowCount === 0) {
            return response.sendStatus(401)
        }
        require.userId = response.rows[0].user_id
    }
    catch(err) {console.log(err); return response.sendStatus(200)}
    funcAuxi()
}