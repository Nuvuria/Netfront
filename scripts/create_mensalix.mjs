import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Creating table "mensalix" (if not exists)...');
  await prisma.$executeRawUnsafe(`
    CREATE TABLE IF NOT EXISTS "mensalix" (
      id SERIAL PRIMARY KEY,
      session_id VARCHAR(255) NOT NULL,
      message JSONB NOT NULL
    );
  `);
  console.log('Table "mensalix" ensured.');
}

main()
  .catch((e) => {
    console.error('Failed to create table "mensalix":', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
