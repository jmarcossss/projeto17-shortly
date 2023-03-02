import { sanitizeBody } from "./utils/sanitizeBody.js"

export function tokMiddleware(schema) {
    return (require, response, funcAuxi) => {
        require.sanitizedBody = sanitizeBody({...require.body})
        const { error } = schema.validate(require.sanitizedBody, { abortEarly: false })
        if(error) { const errorMessage = error.details.map(err => err.message).join(", "); return response.status(422).json({ message: errorMessage });}
        funcAuxi()
    }
}