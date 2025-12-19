-- Ajustar tabela clientes para novo esquema esperado pelo Prisma
-- 1) Remover PK antiga baseada em "NUMERO DE TELEFONE"
DO $$
BEGIN
  IF EXISTS (
    SELECT 1
    FROM pg_constraint
    WHERE conname = 'clientes_pkey'
  ) THEN
    ALTER TABLE "clientes" DROP CONSTRAINT "clientes_pkey";
  END IF;
END $$;

-- 2) Adicionar coluna id (chave primária autoincremento)
ALTER TABLE "clientes" ADD COLUMN IF NOT EXISTS "id" SERIAL;

-- 3) Definir nova PK em id se ainda não existir
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_constraint
    WHERE conname = 'clientes_pkey'
  ) THEN
    ALTER TABLE "clientes" ADD CONSTRAINT "clientes_pkey" PRIMARY KEY ("id");
  END IF;
END $$;

-- 4) Adicionar coluna usuarioId com padrão 1
ALTER TABLE "clientes" ADD COLUMN IF NOT EXISTS "usuarioId" INTEGER DEFAULT 1;

-- 5) Vincular FK para usuario(id) se ainda não existir
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_constraint
    WHERE conname = 'clientes_usuarioId_fkey'
  ) THEN
    ALTER TABLE "clientes"
    ADD CONSTRAINT "clientes_usuarioId_fkey"
    FOREIGN KEY ("usuarioId") REFERENCES "usuario"("id");
  END IF;
END $$;

-- 6) Adicionar coluna DATA_ULTIMO_PAGAMENTO
ALTER TABLE "clientes" ADD COLUMN IF NOT EXISTS "DATA_ULTIMO_PAGAMENTO" TIMESTAMP NULL;

-- 7) Alterar tipo de VENCIMENTO para VARCHAR(10), mantendo apenas o dia
DO $$
DECLARE
  venc_tipo TEXT;
BEGIN
  SELECT data_type INTO venc_tipo
  FROM information_schema.columns
  WHERE table_name = 'clientes' AND column_name = 'VENCIMENTO';

  IF venc_tipo = 'timestamp without time zone' THEN
    ALTER TABLE "clientes"
    ALTER COLUMN "VENCIMENTO" TYPE VARCHAR(10)
    USING CASE
      WHEN "VENCIMENTO" IS NULL THEN NULL
      ELSE EXTRACT(DAY FROM "VENCIMENTO")::text
    END;
  ELSIF venc_tipo = 'character varying' THEN
    -- já é VARCHAR, nada a fazer
    NULL;
  ELSE
    -- fallback: apenas tentar converter para texto
    ALTER TABLE "clientes"
    ALTER COLUMN "VENCIMENTO" TYPE VARCHAR(10)
    USING COALESCE("VENCIMENTO"::text, NULL);
  END IF;
END $$;
