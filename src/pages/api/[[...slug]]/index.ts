import { HttpStatusCode } from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'
import httpProxyMiddleware from 'next-http-proxy-middleware'

// For preventing header corruption, specifically Content-Length header
export const config = {
  api: {
    bodyParser: false,
  },
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (process.env.NEXT_PUBLIC_API) {
      const result = await httpProxyMiddleware(req, res, {
        target: process.env.NEXT_PUBLIC_API,
      })

      res.status(result.status ?? 200).send(result)
    } else {
      res.status(HttpStatusCode.InternalServerError).send('API Not Set')
    }
  } catch (e: any) {
    res.status(e.response.status).send(e)
  }
}
