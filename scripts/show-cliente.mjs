import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

try {
  const cliente = await prisma.cliente.findMany({
    where: { numeroTelefone: '81981192030' },
  })
  console.log(JSON.stringify(cliente, null, 2))
} catch (e) {
  console.error(e)
  process.exitCode = 1
} finally {
  await prisma.$disconnect()
}

