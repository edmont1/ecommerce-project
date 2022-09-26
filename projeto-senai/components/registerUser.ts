import axios from "axios";

export default function registerUser(data: any) {
  axios
    .post("https://login-front-end-ed-default-rtdb.firebaseio.com/teste.json", {
      name: data.name,
      lastname: data.lastname,
      email: data.email,
      password: data.pass,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}