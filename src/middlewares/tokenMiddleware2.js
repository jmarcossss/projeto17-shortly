import { db } from "../database/db.js"

export default async function tokenMiddleware2(require, res, funcAuxi) {
    const unique = require.sanitizedBody.userId
    try {
        const response = await db.query('SELECT token FROM tokens WHERE "user_id" = $1', [unique])
        if (response.rowCount !== 0) { const { token } = response.rows[0]; return res.send({ token });}
    }
    catch(err) {console.log(err); return res.sendStatus(500)}
    funcAuxi()
}