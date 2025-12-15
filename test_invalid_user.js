import fetch from 'node-fetch';
import jwt from 'jsonwebtoken';

const JWT_SECRET = 'secret_key'; // Default do index.js

async function test() {
    // 1. Gerar token para usuário inexistente
    const token = jwt.sign({ id: 999 }, JWT_SECRET, { expiresIn: '30d' });
    console.log('Token fake gerado para ID 999');

    try {
        // 2. Tentar Criar Cliente
        console.log('Tentando criar cliente com usuário inexistente...');
        const clienteRes = await fetch('http://localhost:3001/clientes', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                nome: 'Cliente Fantasma',
                numeroTelefone: '000000000',
                status: 'Ativo'
            })
        });

        const clienteData = await clienteRes.json();
        console.log('Status:', clienteRes.status);
        console.log('Body:', clienteData);

    } catch (e) {
        console.error('Erro no teste:', e);
    }
}

test();
