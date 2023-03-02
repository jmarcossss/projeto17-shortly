//Biblioteca para criptografar a senha
import bcrypt from "bcrypt"
import { db } from "../database/db.js";

//Definindo como async
export async function cadastroUsuario(require, response, funcAuxi) {
    const { name, email, password } = require.sanitizedBody
    try {
        await db.query("INSERT INTO users (name, email, password) VALUES ($1, $2, $3)", [name, email, bcrypt.hashSync(password, 10)])}
    //Se der ruim, exibir status 500
    catch(err) {console.log(err); return response.sendStatus(500)}
    return response.sendStatus(201)
}

//Definindo como async
export async function loginUsuario(require, response, funcAuxi) {
    const { email, password: passwordSent } = require.sanitizedBody
    try {
        const response = await db.query(
            "SELECT * FROM users WHERE email = $1", [email])
        if(response.rowCount === 0) {
            return response.sendStatus(401)
        }
        const { id, password: passwordInDb } = response.rows[0]
        require.sanitizedBody.userId = id
        //Comparando para ver se as senhas batem (a do banco com a criada)
        if(!(bcrypt.compareSync(passwordSent, passwordInDb))) {
            return response.sendStatus(401)
        }

    }
    //Se der ruim, exibir status 500
    catch(err) {console.log(err); return response.sendStatus(500)}
    funcAuxi()
}