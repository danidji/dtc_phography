import type { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'cors'
import initMiddleware from '../../back-end/services/init.middleware';

import { processGetPage } from '../../back-end/controllers/pages.controller';

const cors = initMiddleware(Cors({ methods: ['GET'] }))

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if (req.method === "GET") {
    await cors(req, res)
    await processGetPage(req, res)
  }
}