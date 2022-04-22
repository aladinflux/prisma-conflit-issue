import prisma from '../../lib/prisma'
import { nanoid } from 'nanoid'

export const seedUsers = async() => {

  return await prisma.user.create({
    data: {
      id: nanoid(),
      email: `${nanoid()}@example.com`
    }
  })
}