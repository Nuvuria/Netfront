
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Testing Dados table refactor...');

  try {
    // 1. Create with upsert
    const phone = '5511888889999';
    console.log('Upserting phone:', phone);
    const upserted = await prisma.dados.upsert({
      where: { numeroTelefone: phone },
      update: { nome: 'Refactor Test Updated' },
      create: {
        numeroTelefone: phone,
        nome: 'Refactor Test',
      }
    });
    console.log('Upsert result:', upserted);

    if (upserted.id !== undefined) throw new Error('ID field should not exist');
    if (upserted.mensagem !== undefined) throw new Error('Mensagem field should not exist');
    if (upserted.numeroTelefone !== phone) throw new Error('Phone mismatch');

    // 2. Find Unique
    console.log('Finding unique...');
    const found = await prisma.dados.findUnique({
      where: { numeroTelefone: phone }
    });
    console.log('Found:', found);
    if (!found) throw new Error('Record not found');

    // 3. Update
    console.log('Updating...');
    const updated = await prisma.dados.update({
      where: { numeroTelefone: phone },
      data: { nome: 'Refactor Test Final' }
    });
    console.log('Updated:', updated);
    if (updated.nome !== 'Refactor Test Final') throw new Error('Update failed');

    // 4. Delete
    console.log('Deleting...');
    await prisma.dados.delete({
      where: { numeroTelefone: phone }
    });
    console.log('Deleted.');

    const check = await prisma.dados.findUnique({ where: { numeroTelefone: phone } });
    if (check) throw new Error('Delete failed');

  } catch (e) {
    console.error('Error testing Dados refactor:', e);
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
