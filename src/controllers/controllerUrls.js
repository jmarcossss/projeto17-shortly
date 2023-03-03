import { db } from "../database/db.js"
// import encUrl from "./utils/encUrl.js"

import { nanoid } from 'nanoid';

export default function encUrl() { return nanoid() }

// Obter uma URL pelo seu ID
export async function pegarUrl(require, res) {
    const { id } = { ...require.params }
    try {
        const response = await db.query(`SELECT id, short_url as "shortUrl", url FROM urls WHERE id = $1`,[id])
        // Se não houver nenhuma URL com esse ID, retorna um status 404
        if(response.rowCount === 0) {
            return res.sendStatus(404)
        }
        // Caso contrário, retorna a URL encontrada
        return res.send(response.rows[0])
    }
    catch(err) { console.log(err); return res.sendStatus(500)}
}

// Redirecionar para a URL original a partir da URL encurtada
export async function camUrl(require, response) {
    const { shortUrl } = { ...require.params }
    // Consulta o banco de dados para obter a URL original com base na URL encurtada
    try {
        const { rowCount, rows } = await db.query('SELECT url, visit_count as "visitCount" FROM urls WHERE short_url = $1', [shortUrl])
        // Se não houver nenhuma URL com essa URL encurtada, retorna um status 404
        if(rowCount === 0) {
            return response.sendStatus(404)
        }
        // Atualiza o contador de visitas da URL
        await db.query("UPDATE urls SET visit_count = $1 WHERE short_url = $2", [rows[0].visitCount + 1, shortUrl])
        // Redireciona para a URL original
        return response.redirect(rows[0].url)
    }
    catch(err) { console.log(err); return response.sendStatus(500)}
}

// Cria uma URL encurtada a partir de uma URL longa
export async function linkUrl(require, response) {
    const { url } = require.sanitizedBody
    const userId = require.userId
    // Gera uma URL encurtada única
    const shortenedUrl = encUrl()
    let requestId
    // Insere a URL longa e a URL encurtada no banco de dados
    try {
        const response = await db.query('INSERT INTO urls (user_id, url, short_url) VALUES ($1, $2, $3)', [userId, url, shortenedUrl])
        // Se a inserção foi bem-sucedida, obtém o ID da URL encurtada recém-criada
        if(response.rowCount === 1) {
            const { rows } = await db.query('SELECT max(id) as "insertedId" FROM urls')
            requestId = rows[0].insertedId
        }
    }
    catch(err) { console.log(err); return response.sendStatus(401)}
    // Retorna o ID da URL encurtada recém-criada e a própria URL encurtada
    return response.status(201).send({id: requestId, shortUrl: shortenedUrl})
}

export async function matarUrl(require, response) {
    const { id } = { ...require.params }
    const userIdRequest = require.userId
    try {
        const { rows } = await db.query('SELECT user_id as "userId" FROM urls WHERE id = $1', [id])
        const userIdInDb = rows[0]?.userId
        if(!userIdInDb) return response.sendStatus(404)
        if(userIdRequest !== userIdInDb) return response.sendStatus(401)
        const { rowCount } = await db.query("DELETE FROM urls WHERE id = $1", [id])
        if(rowCount === 0) {
            return response.sendStatus(404)
        }
    }
    catch(err) { console.log(err); return response.sendStatus(500)}    
    return response.sendStatus(204)
}