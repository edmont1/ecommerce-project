import axios from "axios";
import { useRef } from "react";
import cookies from "./setcookie";

const divref = useRef<HTMLDivElement>(null)

export default async function verifyLogin(data: any) {
  let logged = false;

  await axios
    .post("/api/login", {
      email: data.email,
      password: data.pass,
    })
    .then((resp) => {
      logged = resp.data.status;
    })
    .catch((error) => {
      console.log(error);
    });

  if (data.email == "" || data.pas == "") {
    alert("Não deixe campos em branco.");
  } else if (logged == false) {
    divref.current?.classList.remove("hidden");
  }
  else if (logged == true){
    divref.current?.classList.add('hidden')
  }

  cookies(logged);

  return logged;
}