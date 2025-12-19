
import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const prisma = new PrismaClient();

async function backup() {
  try {
    // console.log('Modelos disponíveis no Prisma Client:', Object.keys(prisma));

    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupFile = path.join(__dirname, `../backups/backup_${timestamp}.json`);

    console.log('Buscando usuarios...');
    const usuarios = await prisma.usuario.findMany();
    console.log('Buscando clientes...');
    const clientes = await prisma.clientes.findMany();
    console.log('Buscando historico...');
    const historico = await prisma.historico.findMany();
    console.log('Buscando agenda...');
    const agenda = await prisma.agenda.findMany();
    console.log('Buscando dados...');
    const dados = await prisma.dados.findMany();
    console.log('Buscando mensalix...');
    const mensalix = await prisma.mensalix.findMany();

    const backupData = {
      timestamp: new Date().toISOString(),
      data: {
        usuarios,
        clientes,
        historico,
        agenda,
        dados,
        mensalix
      }
    };

    fs.writeFileSync(backupFile, JSON.stringify(backupData, null, 2));
    
    console.log(`Backup realizado com sucesso em: ${backupFile}`);
    console.log(`Resumo:`);
    console.log(`- Usuarios: ${usuarios.length}`);
    console.log(`- Clientes: ${clientes.length}`);
    console.log(`- Historico: ${historico.length}`);
    console.log(`- Agenda: ${agenda.length}`);
    console.log(`- Dados: ${dados.length}`);
    console.log(`- Mensalix: ${mensalix.length}`);

  } catch (error) {
    console.error('Erro ao realizar backup:', error);
  } finally {
    await prisma.$disconnect();
  }
}

backup();
