// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  let responseData = {
    name: 'John',
    surname: 'Doe',
    api_url: process.env.WEB_API_URL
  };

  res.status(200).json(responseData);
}
