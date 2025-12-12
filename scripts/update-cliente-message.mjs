import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

try {
  const updated = await prisma.cliente.updateMany({
    where: { numeroTelefone: '81981192030' },
    data: { message: 'Bem-vindo, André!' },
  })
  console.log(JSON.stringify(updated, null, 2))
} catch (e) {
  console.error(e)
  process.exitCode = 1
} finally {
  await prisma.$disconnect()
}

