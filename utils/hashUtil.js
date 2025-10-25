import bcrypt from 'bcrypt'

export const hash = (plaintext) => {
    return bcrypt.hashSync(plaintext,10)
}

export const compare = (plaintext, hashText) => {
    return bcrypt.compareSync(plaintext, hashText)
}