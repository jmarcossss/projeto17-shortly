import { filtContent } from "./filtContent.js"
import { db } from "../database/db.js"

export default async function comparaMails(require, response, funcAuxi) {
    require.sanitizedBody = filtContent({ ...require.body })
    const { email } = require.sanitizedBody
    try {
        const { rowCount } = await db.query("SELECT * FROM users WHERE email = $1", [email])
        if(rowCount !== 0) {
            return response.sendStatus(409)
        }
    }
    catch (err) { console.log(err); return response.sendStatus(500);}
    funcAuxi()
}