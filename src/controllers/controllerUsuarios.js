import { db } from "../database/db.js";

export async function pegPeop(require, res) {
    const userId = require.userId
    const booleano = true
    const nBooleano = false
    try {
        const response = await db.query(
            `SELECT  users.id,  users.name, COALESCE(SUM(urls.visit_count), 0) AS "visitCount",
            CASE WHEN COUNT(urls.id) = 0 THEN  ARRAY[]::json[]
                ELSE ARRAY_AGG(json_build_object('id', urls.id, 'shortUrl', urls.short_url, 'url', urls.url, 'visitCount', urls.visit_count)) 
                END AS "shortenedUrls"
            FROM users
            LEFT JOIN urls ON users.id = urls.user_id WHERE users.id = $1 GROUP BY users.id;`, [userId])        
        return res.send(response.rows[0])
    }
    catch(err) { console.log(err); return res.sendStatus(200)}
}