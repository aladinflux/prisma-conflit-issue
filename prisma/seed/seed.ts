import { seedOthers } from './others'
import { seedUsers } from './users'
import { seedPosts } from './posts'
import prisma from '../../lib/prisma'
import { camelCase } from 'change-case'

export const arr = <Return>(length: number, map: () => Return): Return[] => {
  return new Array(length).fill(null).map(map)
}

const sleep = () => new Promise((resolve) => setTimeout(() => resolve(true), 100))
async function* start () {
  
  // @ts-expect-error
  for(const model of prisma._dmmf.datamodel.models) {
    if(camelCase(model.name) in prisma) {
      await prisma[camelCase(model.name)].deleteMany({})
    }
  }
  yield 5
  await sleep()

  await Promise.all(arr(50, () => seedOthers()))
  yield 25
  await sleep()

  await Promise.all(arr(50, () => seedUsers()))
  yield 50
  await sleep()

  await Promise.all(arr(50, () => seedPosts()))
  yield 75

  yield 100
}

export default start
