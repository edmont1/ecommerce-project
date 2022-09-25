import nookies, { setCookie } from 'nookies'

setCookie(null, 'fromClient', 'value', {
    maxAge: 30 * 24 * 60 * 60,
    path: '/',
  })

export default function verifyLogin(){
    let islogged = false
    return islogged
}