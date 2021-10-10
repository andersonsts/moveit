import { NextApiRequest, NextApiResponse } from 'next'

export default (_req: NextApiRequest, _res: NextApiResponse) => {
  _res.status(200).json({ name: 'Jonh Doe' })
}