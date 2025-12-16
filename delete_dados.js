
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  try {
    const deleted = await prisma.dados.deleteMany({})
    console.log(`Deleted ${deleted.count} records from 'dados' table.`)
  } catch (e) {
    console.error(e)
  } finally {
    await prisma.$disconnect()
  }
}

main()
