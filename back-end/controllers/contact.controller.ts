import type { NextApiRequest, NextApiResponse } from 'next'

export const processSendMail = (req: NextApiRequest, res: NextApiResponse): void => {

  res.status(200).json({ test: "test" })
}