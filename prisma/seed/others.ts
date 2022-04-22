import prisma from '../../lib/prisma'
import { nanoid } from 'nanoid'

export const seedOthers = async() => {

  return await prisma.other.create({
    data: {
      id: nanoid(),
      title: nanoid()
    }
  })
}