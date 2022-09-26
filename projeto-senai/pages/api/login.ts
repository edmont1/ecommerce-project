import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    axios.get('https://login-front-end-ed-default-rtdb.firebaseio.com/teste.json')
    .then((resp) => {return resp.data})
    .catch((error)=>{console.log(error)})
    res.status(200).json({ name: 'John Doe' })
  } else {
    res.status(404).json({ status: false })
  }
}
