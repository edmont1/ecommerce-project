import { setCookie } from "nookies";

export default function cookies(data:any){
    setCookie(null, 'islogged', data.toString(), {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })
    
}