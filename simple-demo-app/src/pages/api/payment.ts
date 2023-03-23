// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Payment = {
    idPayment: number,
    occured: Date,
    status: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Payment>
) {

    const response = await fetch(`${process.env.WEB_API_URL}/payments`).then(res => res.json());
    res.status(200).json(response);
}
