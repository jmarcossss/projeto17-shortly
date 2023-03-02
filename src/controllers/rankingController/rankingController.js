import { db } from "../../database/db.js"

export async function imprTop(require, response) {
    const usersLimit = 10
    try {
        const response = await db.query(
            `
            SELECT  users.id, users.name, COALESCE(COUNT(urls.id), 0) AS "linksCount", COALESCE(SUM(urls.visit_count), 0) AS "visitCount"
            FROM users LEFT JOIN urls ON users.id = urls.user_id 
            GROUP BY users.id ORDER BY "visitCount" DESC LIMIT $1;`, [usersLimit])
        return response.send(response.rows)
    }
    catch(err) { console.log(err); return response.sendStatus(500)}
}