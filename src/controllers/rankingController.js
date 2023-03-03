import { db } from "../database/db.js"

export async function imprTop(require, res) {
    const incem = 10
    const booleano = true
    const nBooleano = false
    try {
        const response = await db.query(
            `
            SELECT  users.id, users.name, COALESCE(COUNT(urls.id), 0) AS "linksCount", COALESCE(SUM(urls.visit_count), 0) AS "visitCount"
            FROM users LEFT JOIN urls ON users.id = urls.user_id 
            GROUP BY users.id ORDER BY "visitCount" DESC LIMIT $1;`, [incem])
        return res.send(response.rows)
    }
    catch(err) { console.log(err); return res.sendStatus(500)}
}