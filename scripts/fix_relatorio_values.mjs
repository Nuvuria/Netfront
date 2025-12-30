
import { PrismaClient } from '@prisma/client';
import 'dotenv/config';

const prisma = new PrismaClient();

async function main() {
  // ID do usuário Jeova recuperado da análise anterior
  const USUARIO_ID = 4;
  const NOVO_VALOR = 60;

  console.log(`Iniciando correção para usuário ID ${USUARIO_ID}...`);

  // Buscar quantos registros serão afetados
  const count = await prisma.relatorio.count({
    where: {
      usuarioId: USUARIO_ID,
      valor: 0
    }
  });

  console.log(`Encontrados ${count} registros com valor 0.`);

  if (count > 0) {
    const updated = await prisma.relatorio.updateMany({
      where: {
        usuarioId: USUARIO_ID,
        valor: 0
      },
      data: {
        valor: NOVO_VALOR
      }
    });

    console.log(`✅ Sucesso! ${updated.count} registros atualizados para R$ ${NOVO_VALOR}.`);
  } else {
    console.log('Nenhum registro para atualizar.');
  }
}

main()
  .catch(e => {
    console.error('Erro ao executar correção:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
