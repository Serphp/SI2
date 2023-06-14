import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'
//import { getSession } from 'next-auth/react'
import { getSession } from 'next-auth/react'


// POST /api/post
// Required fields in body: title
// Optional fields in body: content
//

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  //const { title, content } = req.body;

  // const title = req.body.title;
  // const content = req.body.content;

  const title = 'test title';
  const content = 'test content';
//   if (!title) {
//     res.status(400).send({ message: 'Title is required' });
//     return;
//   }
  //const { data: session } = useSession()
  const session = await getSession({ req });
  if (session?.user) {
    const result = await prisma.post.create({
      data: {
        title: title,
        content: content,
        author: { connect: { email: session.user.email ?? undefined }},
      },
    });
    res.json(result);
  } else {
    res.status(401).send({ message: 'Unauthorized' })
  }
}