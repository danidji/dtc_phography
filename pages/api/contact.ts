import type { NextApiRequest, NextApiResponse } from 'next';

import { processSendMail } from '../../back-end/controllers/contact.controller';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if (req.method === "POST") {
    processSendMail(req, res)
  }
}