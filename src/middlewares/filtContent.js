import { stripHtml } from "string-strip-html"

export function filtContent(obj) { for(let [ch, num] of Object.entries(obj)) {
    if (typeof num === 'string') { obj[ch] = stripHtml(num.trim()).result }}
    return obj
}