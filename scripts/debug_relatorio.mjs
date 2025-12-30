
import { PrismaClient } from '@prisma/client';
import 'dotenv/config';
const prisma = new PrismaClient();

async function main() {
  const users = await prisma.usuario.findMany();
  console.log('Usuários encontrados:', users.length);

  for (const user of users) {
    console.log(`\nVerificando usuário: ${user.nome} (${user.email}) - ID: ${user.id}`);
    
    // Vamos pegar o mês atual e anterior para garantir
    const now = new Date();
    const currentMonth = now.getMonth(); 
    const currentYear = now.getFullYear();

    // Ajuste conforme o relato do usuário (ele não disse o mês, assumo atual ou último)
    // Vou listar todos os meses que têm dados
    const relatorios = await prisma.relatorio.findMany({
        where: { 
            usuarioId: user.id,
            tipoEvento: 'PAGAMENTO'
        }
    });

    console.log(`Total de pagamentos encontrados (geral): ${relatorios.length}`);

    // Agrupar por Mês/Ano
    const porMes = relatorios.reduce((acc, r) => {
        const d = new Date(r.dataEvento);
        const key = `${d.getMonth() + 1}/${d.getFullYear()}`;
        if (!acc[key]) acc[key] = { count: 0, sum: 0, values: [] };
        acc[key].count++;
        acc[key].sum += r.valor;
        acc[key].values.push(r.valor);
        return acc;
    }, {});

    for (const [key, data] of Object.entries(porMes)) {
        console.log(`  Mês ${key}: ${data.count} pagamentos. Soma: ${data.sum}`);
        if (data.count === 100) {
            console.warn('  ⚠️ ALERTA: Exatamente 100 pagamentos encontrados neste mês!');
        }
        // Verificar se tem valores zerados
        const zeros = relatorios.filter(r => r.valor === 0);
        if (zeros.length > 0) {
            console.log(`    ⚠️ Pagamentos com valor 0: ${zeros.length}`);
            console.log('    Exemplos de clientes com valor 0:');
            
            // Buscar detalhes dos clientes desses relatórios
            const zeroIds = zeros.map(z => z.clienteId).slice(0, 5);
            const clientes = await prisma.clientes.findMany({
                where: { id: { in: zeroIds } },
                select: { id: true, nome: true, plano: true }
            });
            
            clientes.forEach(c => console.log(`      Cliente: ${c.nome}, Plano: "${c.plano}"`));
        }
    }
  }
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
