import type { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'cors'
import { processSendMail } from '../../back-end/controllers/contact.controller';
import initMiddleware from '../../back-end/services/init.middleware';

const cors = initMiddleware(Cors({ methods: ['POST'] }))

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if (req.method === "POST") {
    await cors(req, res)
    await processSendMail(req, res)
  }
}