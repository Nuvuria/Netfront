import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

dotenv.config()

const app = express()
app.use(express.json())
const corsOrigin = process.env.CORS_ORIGIN || 'http://localhost:5173'
app.use(cors({ origin: corsOrigin }))

const prisma = new PrismaClient()

app.get('/health', (req, res) => {
  res.json({ status: 'ok' })
})

// Login Route
app.post('/login', async (req, res) => {
  const { email, senha } = req.body
  try {
    const user = await prisma.usuario.findUnique({ where: { email } })
    if (!user) {
        return res.status(401).json({ error: 'Credenciais inválidas' })
    }
    const valid = await bcrypt.compare(senha, user.senha)
    if (!valid) {
         return res.status(401).json({ error: 'Credenciais inválidas' })
    }
    res.json({ id: user.id, nome: user.nome, email: user.email })
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: 'Erro no login' })
  }
})

// Register Route
app.post('/register', async (req, res) => {
  const { email, senha, nome } = req.body
  try {
    const existing = await prisma.usuario.findUnique({ where: { email } })
    if (existing) {
        return res.status(400).json({ message: 'Email já cadastrado' })
    }
    const hash = await bcrypt.hash(senha, 10)
    const user = await prisma.usuario.create({
        data: {
            nome: nome || 'Usuário',
            email,
            senha: hash
        }
    })
    res.status(201).json({ id: user.id, nome: user.nome, email: user.email })
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: 'Erro ao registrar' })
  }
})

// Helpers
function normalizeBody(b) {
  const get = (...keys) => {
    for (const k of keys) {
      if (b[k] !== undefined && b[k] !== null) return b[k]
    }
    return undefined
  }
  return {
    id: get('id', 'ID'),
    cpf: get('cpf', 'CPF', 'cpf_cliente', 'CPF_CLIENTE'),
    numeroTelefone: get('numeroTelefone', 'numero_telefone', 'NUMERO DE TELEFONE'),
    nome: get('nome', 'nome_cliente', 'NOME'),
    endereco: get('endereco', 'endereco_completo', 'ENDEREÇO'),
    plano: get('plano', 'plano_contratado', 'PLANO'),
    vencimento: get('vencimento', 'data_vencimento'),
    status: get('status', 'status_cliente', 'STATUS'),
  }
}

// Rotas para Clientes
app.get('/clientes', async (req, res) => {
  const q = req.query
  const numeroTelefone = q.numeroTelefone ?? q.numero_telefone ?? q['NUMERO DE TELEFONE']
  const cpf = q.cpf ?? q.CPF ?? q.cpf_cliente ?? q.CPF_CLIENTE
  const nome = q.nome ?? q.nome_cliente ?? q.NOME
  const status = q.status ?? q.status_cliente ?? q.STATUS
  const vencimento = q.vencimento ?? q.data_vencimento
  
  try {
    const where = {}
    if (numeroTelefone) where.numeroTelefone = String(numeroTelefone)
    if (cpf) where.cpf = String(cpf)
    if (nome) where.nome = { contains: String(nome), mode: 'insensitive' }
    if (status) where.status = String(status)
    if (vencimento) where.vencimento = String(vencimento)
    const result = await prisma.clientes.findMany({ where, orderBy: { id: 'desc' } })
    res.json(result)
  } catch (e) {
    res.status(500).json({ error: 'Erro ao listar clientes' })
  }
})

app.post('/clientes', async (req, res) => {
  const nb = normalizeBody(req.body)
  try {
    // Se ID fornecido, tenta atualizar. Senão, cria novo.
    if (nb.id) {
        const updated = await prisma.clientes.update({
            where: { id: Number(nb.id) },
            data: {
                nome: nb.nome ?? undefined,
                numeroTelefone: nb.numeroTelefone ?? undefined,
                endereco: nb.endereco ?? undefined,
                plano: nb.plano ?? undefined,
                vencimento: nb.vencimento ? String(nb.vencimento) : undefined,
                status: nb.status ?? undefined,
                cpf: nb.cpf ?? undefined,
            }
        })
        return res.status(200).json(updated)
    }

    // Criar novo
    const created = await prisma.clientes.create({
      data: {
        numeroTelefone: nb.numeroTelefone ?? null,
        nome: nb.nome ?? null,
        endereco: nb.endereco ?? null,
        plano: nb.plano ?? null,
        vencimento: nb.vencimento ? String(nb.vencimento) : null,
        status: nb.status ?? null,
        cpf: nb.cpf ?? null,
      },
    })
    res.status(201).json(created)
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: 'Erro ao processar cliente', code: e.code, detail: String(e.message ?? e) })
  }
})

app.delete('/clientes/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    await prisma.clientes.delete({ where: { id } })
    res.status(204).send()
  } catch (e) {
    if (e.code === 'P2025') {
      res.status(404).json({ error: 'Cliente não encontrado' })
      return
    }
    res.status(500).json({ error: 'Erro ao remover cliente' })
  }
})

// Atualizar Status
app.patch('/clientes/:id/status', async (req, res) => {
    const id = Number(req.params.id)
    const { status } = req.body
    try {
        const updated = await prisma.clientes.update({
            where: { id },
            data: { status }
        })
        res.json(updated)
    } catch (e) {
        console.error(e)
        res.status(500).json({ error: 'Erro ao atualizar status' })
    }
})

// Atualizar Pagamento
app.patch('/clientes/:id/pagamento', async (req, res) => {
    const id = Number(req.params.id)
    try {
        const updated = await prisma.clientes.update({
            where: { id },
            data: { 
                dataUltimoPagamento: new Date(),
                status: 'Ativo'
            }
        })
        res.json(updated)
    } catch (e) {
        console.error(e)
        res.status(500).json({ error: 'Erro ao registrar pagamento' })
    }
})

// Rotas para Agenda
app.get('/agenda', async (req, res) => {
  try {
    const agendamentos = await prisma.agenda.findMany({
      orderBy: { createdAt: 'desc' }
    })
    res.json(agendamentos)
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: 'Erro ao listar agendamentos' })
  }
})

app.post('/agenda', async (req, res) => {
  const { nome, telefone, endereco, tipo, data, descricao, status } = req.body
  try {
    const novo = await prisma.agenda.create({
      data: {
        nome,
        telefone,
        endereco,
        tipo,
        data: data ? new Date(data) : undefined,
        descricao,
        status: status || 'Pendente'
      }
    })
    res.status(201).json(novo)
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: 'Erro ao criar agendamento' })
  }
})

app.patch('/agenda/:id', async (req, res) => {
  const id = Number(req.params.id)
  const { status, data, descricao } = req.body
  try {
    const updated = await prisma.agenda.update({
      where: { id },
      data: {
        status: status ?? undefined,
        data: data ? new Date(data) : undefined,
        descricao: descricao ?? undefined
      }
    })
    res.json(updated)
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: 'Erro ao atualizar agendamento' })
  }
})

app.delete('/agenda/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    await prisma.agenda.delete({ where: { id } })
    res.status(204).send()
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: 'Erro ao excluir agendamento' })
  }
})

// Dashboard Route
app.get('/dashboard', async (req, res) => {
  try {
    const totalClientes = await prisma.clientes.count()
    const clientesAtivos = await prisma.clientes.count({
      where: { status: { equals: 'Ativo', mode: 'insensitive' } }
    })
    
    // Check vencimento = current day
    const today = new Date().getDate().toString()
    const now = new Date()
    const currentMonth = now.getMonth()
    const currentYear = now.getFullYear()

    // Helper para checar se pagou este mês
    const pagouEsteMes = (data) => {
        if (!data) return false
        const d = new Date(data)
        return d.getMonth() === currentMonth && d.getFullYear() === currentYear
    }

    // Buscamos todos que vencem hoje para filtrar no código quem já pagou
    const vencendoHojeRaw = await prisma.clientes.findMany({
      where: { vencimento: today }
    })
    
    const vencendoHoje = vencendoHojeRaw.filter(c => !pagouEsteMes(c.dataUltimoPagamento)).length

    // Planos distribution
    const planosGroup = await prisma.clientes.groupBy({
      by: ['plano'],
      _count: {
        plano: true
      },
      orderBy: {
        _count: {
          plano: 'desc'
        }
      },
      take: 5
    })

    const planos = planosGroup
      .filter(p => p.plano)
      .map(p => ({ name: p.plano, value: p._count.plano }))

    // Vencidos (dia atual > vencimento e status != Inativo)
    // Precisamos buscar todos os ativos e filtrar no JS pois vencimento é string
    const allActive = await prisma.clientes.findMany({
        where: {
            status: { not: 'Inativo' },
            vencimento: { not: null }
        },
        select: { id: true, nome: true, numeroTelefone: true, vencimento: true, status: true, dataUltimoPagamento: true }
    })

    const todayNum = new Date().getDate()
    const clientesVencidos = allActive.filter(c => {
        const v = parseInt(c.vencimento)
        if (isNaN(v)) return false
        
        // Se já pagou este mês, não está vencido
        if (pagouEsteMes(c.dataUltimoPagamento)) return false

        return todayNum > v
    })

    // Clientes que pagaram este mês
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59)
    
    const clientesPagos = await prisma.clientes.findMany({
        where: {
            dataUltimoPagamento: {
                gte: startOfMonth,
                lte: endOfMonth
            }
        },
        orderBy: { dataUltimoPagamento: 'desc' }
    })

    res.json({
      totalClientes,
      clientesAtivos,
      vencendoHoje,
      planos,
      clientesVencidos,
      clientesPagos
    })
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: 'Erro ao buscar dados do dashboard' })
  }
})

const port = process.env.PORT || 3000
app.listen(port, async () => {
  console.log(`Server listening on port ${port}`)
  
  // Seed default user if not exists
  try {
    const count = await prisma.usuario.count()
    if (count === 0) {
      console.log('Seeding default user...')
      const hash = await bcrypt.hash('123456', 10)
      await prisma.usuario.create({
        data: {
          nome: 'Admin',
          email: 'admin@admin.com',
          senha: hash
        }
      })
      console.log('Default user created: admin@admin.com / 123456')
    }
  } catch (e) {
    console.error('Error seeding user:', e)
  }
})
