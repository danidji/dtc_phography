import type { NextApiRequest, NextApiResponse } from 'next'

import { getPage } from '../repositories/pages.repository'

export const processGetPage = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    const { id } = req.query

    if (typeof id === 'string') {

      const pageContent = await getPage(id)

      res.status(200).json(pageContent)
    }


  } catch (err) {
    res.status(500).json(err)
  }
}