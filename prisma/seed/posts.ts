import prisma from '../../lib/prisma'
import { nanoid } from 'nanoid'

export const seedPosts = async() => {

  return await prisma.post.create({
    data: {
      id: nanoid(),
      title: nanoid(),
      comments: {
        create: [
          {
            id: nanoid(),
            title: nanoid()
          },
          {
            id: nanoid(),
            title: nanoid(),
            user: {
              create: {
                id: nanoid(),
                email: `${nanoid()}@example.com`
              }
            }
          },
          {
            id: nanoid(),
            title: nanoid()
          }
        ]
      }
    }
  })
}