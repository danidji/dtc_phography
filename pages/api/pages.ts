import type { NextApiRequest, NextApiResponse } from 'next';

import { processGetPage } from '../../back-end/controllers/pages.controller';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if (req.method === "GET") {
    await processGetPage(req, res)
  }
}