-- Aumentar tamanho das colunas PLANO e STATUS na tabela clientes
ALTER TABLE "clientes"
  ALTER COLUMN "PLANO" TYPE VARCHAR(100);

ALTER TABLE "clientes"
  ALTER COLUMN "STATUS" TYPE VARCHAR(50);

