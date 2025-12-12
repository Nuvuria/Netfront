CREATE TABLE clientes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255),
    endereco TEXT,
    plano VARCHAR(255),
    vencimento DATE,
    status VARCHAR(50),
    telefone VARCHAR(30),
    cpf VARCHAR(20)
);

