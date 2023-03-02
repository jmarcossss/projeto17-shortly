//* Libraries
import { db } from "../database/db.js"

export async function validateToken(req, res, next) {

    let token = req.headers.authorization

    if(!token) return res.sendStatus(401)

    token = token.replace("Bearer ", "")

    try {

        const response = await db.query("SELECT * FROM tokens WHERE token = $1", [token])

        if(response.rowCount === 0) return res.sendStatus(401)

        req.userId = response.rows[0].user_id

    } catch (err) {
        console.log(err)
        return res.sendStatus(500)
    }

    next()
}