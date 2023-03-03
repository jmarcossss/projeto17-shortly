import { stripHtml } from "string-strip-html"

export function filtContent(obj) {
    for(let [key, value] of Object.entries(obj)) {
        if (typeof value === 'string') {
            obj[key] = stripHtml(value.trim()).result
        }
    }
    return obj
}