
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Testing Historico table without dataHora...');

  try {
    // Create a history record
    const created = await prisma.historico.create({
      data: {
        numeroTelefone: '5511777776666',
        nome: 'Test Client No Time',
        mensagem: 'Message without timestamp',
      }
    });
    console.log('Created history record:', created);

    if (created.dataHora !== undefined) throw new Error('dataHora should not exist');
    if (created.numeroTelefone !== '5511777776666') throw new Error('Phone mismatch');

    // List history
    const list = await prisma.historico.findMany({
      where: { numeroTelefone: '5511777776666' }
    });
    console.log('Found history records:', list.length);

  } catch (e) {
    console.error('Error testing Historico:', e);
    process.exit(1);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
