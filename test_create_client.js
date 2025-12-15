import fetch from 'node-fetch';

async function test() {
    try {
        // 1. Login
        console.log('Tentando login...');
        const loginRes = await fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: 'jeova@net.com', senha: '123456789' })
        });
        
        const loginData = await loginRes.json();
        console.log('Login Status:', loginRes.status);
        if (!loginRes.ok) {
            console.error('Login falhou:', loginData);
            return;
        }
        
        const token = loginData.token;
        console.log('Token obtido.');

        // 2. Criar Cliente
        console.log('Tentando criar cliente...');
        const clienteRes = await fetch('http://localhost:3001/clientes', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                nome: 'Cliente Teste',
                numeroTelefone: '11999999999',
                endereco: 'Rua Teste, 123',
                plano: '100MB',
                vencimento: '10',
                status: 'Ativo'
            })
        });

        const clienteData = await clienteRes.json();
        console.log('Cliente Status:', clienteRes.status);
        console.log('Cliente Body:', clienteData);

    } catch (e) {
        console.error('Erro no teste:', e);
    }
}

test();
