import axios from "axios";
import cookies from "./setcookie";

export default async function verifyLogin(data: any) {
  let logged = false;

  if (data) {
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
  }
  else{
    alert('Não deixe campos em branco!')
  }

  cookies(logged);
}
