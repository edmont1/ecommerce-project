import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    let status = false
    try{
      const response = await axios.get('https://login-front-end-ed-default-rtdb.firebaseio.com/teste.json')

      let data_array = Object.keys(response.data)

      for(let i=0; i < data_array.length; i++){
        if(req.body.email == response.data[data_array[i]].email && req.body.password == response.data[data_array[i]].password){
          status = true
        }
      }

      res.status(200).json({ status: status })
    }
    catch(error){
      console.log(error)
    }
  } else {
    res.status(404).json({ status: false })
  }
}
