import Joi from '@hapi/joi'

const linkEnc = /^https?:\/\/.*/

export const padraoSchemaUrl = Joi.object({ url: Joi.string().regex(linkEnc).required() })

export const padraoSchemaLogin = Joi.object({ email: Joi.string().email().invalid("").required(), password: Joi.string().invalid("").required(), })

export const padraoSchemaCadastro = Joi.object({ name: Joi.string().trim().invalid("").required(), email: Joi.string().email().trim().invalid("").required(), password: Joi.string().invalid("").required(), confirmPassword: Joi.string().valid(Joi.ref('password')).required() })