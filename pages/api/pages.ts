import type { NextApiRequest, NextApiResponse } from 'next';

import { processGetPage } from '../../back-end/controllers/pages.controller';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if (req.method === "GET") {
    processGetPage(req, res)
  }
}