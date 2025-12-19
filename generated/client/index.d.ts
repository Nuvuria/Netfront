
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Clientes
 * 
 */
export type Clientes = $Result.DefaultSelection<Prisma.$ClientesPayload>
/**
 * Model Historico
 * 
 */
export type Historico = $Result.DefaultSelection<Prisma.$HistoricoPayload>
/**
 * Model Agenda
 * 
 */
export type Agenda = $Result.DefaultSelection<Prisma.$AgendaPayload>
/**
 * Model dados
 * 
 */
export type dados = $Result.DefaultSelection<Prisma.$dadosPayload>
/**
 * Model mensalix
 * 
 */
export type mensalix = $Result.DefaultSelection<Prisma.$mensalixPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs>;

  /**
   * `prisma.clientes`: Exposes CRUD operations for the **Clientes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.clientes.findMany()
    * ```
    */
  get clientes(): Prisma.ClientesDelegate<ExtArgs>;

  /**
   * `prisma.historico`: Exposes CRUD operations for the **Historico** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Historicos
    * const historicos = await prisma.historico.findMany()
    * ```
    */
  get historico(): Prisma.HistoricoDelegate<ExtArgs>;

  /**
   * `prisma.agenda`: Exposes CRUD operations for the **Agenda** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Agenda
    * const agenda = await prisma.agenda.findMany()
    * ```
    */
  get agenda(): Prisma.AgendaDelegate<ExtArgs>;

  /**
   * `prisma.dados`: Exposes CRUD operations for the **dados** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dados
    * const dados = await prisma.dados.findMany()
    * ```
    */
  get dados(): Prisma.dadosDelegate<ExtArgs>;

  /**
   * `prisma.mensalix`: Exposes CRUD operations for the **mensalix** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mensalixes
    * const mensalixes = await prisma.mensalix.findMany()
    * ```
    */
  get mensalix(): Prisma.mensalixDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Usuario: 'Usuario',
    Clientes: 'Clientes',
    Historico: 'Historico',
    Agenda: 'Agenda',
    dados: 'dados',
    mensalix: 'mensalix'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "usuario" | "clientes" | "historico" | "agenda" | "dados" | "mensalix"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Clientes: {
        payload: Prisma.$ClientesPayload<ExtArgs>
        fields: Prisma.ClientesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload>
          }
          findFirst: {
            args: Prisma.ClientesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload>
          }
          findMany: {
            args: Prisma.ClientesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload>[]
          }
          create: {
            args: Prisma.ClientesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload>
          }
          createMany: {
            args: Prisma.ClientesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload>[]
          }
          delete: {
            args: Prisma.ClientesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload>
          }
          update: {
            args: Prisma.ClientesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload>
          }
          deleteMany: {
            args: Prisma.ClientesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClientesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload>
          }
          aggregate: {
            args: Prisma.ClientesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClientes>
          }
          groupBy: {
            args: Prisma.ClientesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientesCountArgs<ExtArgs>
            result: $Utils.Optional<ClientesCountAggregateOutputType> | number
          }
        }
      }
      Historico: {
        payload: Prisma.$HistoricoPayload<ExtArgs>
        fields: Prisma.HistoricoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HistoricoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HistoricoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPayload>
          }
          findFirst: {
            args: Prisma.HistoricoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HistoricoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPayload>
          }
          findMany: {
            args: Prisma.HistoricoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPayload>[]
          }
          create: {
            args: Prisma.HistoricoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPayload>
          }
          createMany: {
            args: Prisma.HistoricoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HistoricoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPayload>[]
          }
          delete: {
            args: Prisma.HistoricoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPayload>
          }
          update: {
            args: Prisma.HistoricoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPayload>
          }
          deleteMany: {
            args: Prisma.HistoricoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HistoricoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HistoricoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPayload>
          }
          aggregate: {
            args: Prisma.HistoricoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistorico>
          }
          groupBy: {
            args: Prisma.HistoricoGroupByArgs<ExtArgs>
            result: $Utils.Optional<HistoricoGroupByOutputType>[]
          }
          count: {
            args: Prisma.HistoricoCountArgs<ExtArgs>
            result: $Utils.Optional<HistoricoCountAggregateOutputType> | number
          }
        }
      }
      Agenda: {
        payload: Prisma.$AgendaPayload<ExtArgs>
        fields: Prisma.AgendaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgendaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgendaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendaPayload>
          }
          findFirst: {
            args: Prisma.AgendaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgendaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendaPayload>
          }
          findMany: {
            args: Prisma.AgendaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendaPayload>[]
          }
          create: {
            args: Prisma.AgendaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendaPayload>
          }
          createMany: {
            args: Prisma.AgendaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AgendaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendaPayload>[]
          }
          delete: {
            args: Prisma.AgendaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendaPayload>
          }
          update: {
            args: Prisma.AgendaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendaPayload>
          }
          deleteMany: {
            args: Prisma.AgendaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgendaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AgendaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendaPayload>
          }
          aggregate: {
            args: Prisma.AgendaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgenda>
          }
          groupBy: {
            args: Prisma.AgendaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgendaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgendaCountArgs<ExtArgs>
            result: $Utils.Optional<AgendaCountAggregateOutputType> | number
          }
        }
      }
      dados: {
        payload: Prisma.$dadosPayload<ExtArgs>
        fields: Prisma.dadosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.dadosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dadosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.dadosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dadosPayload>
          }
          findFirst: {
            args: Prisma.dadosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dadosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.dadosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dadosPayload>
          }
          findMany: {
            args: Prisma.dadosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dadosPayload>[]
          }
          create: {
            args: Prisma.dadosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dadosPayload>
          }
          createMany: {
            args: Prisma.dadosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.dadosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dadosPayload>[]
          }
          delete: {
            args: Prisma.dadosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dadosPayload>
          }
          update: {
            args: Prisma.dadosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dadosPayload>
          }
          deleteMany: {
            args: Prisma.dadosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.dadosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.dadosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dadosPayload>
          }
          aggregate: {
            args: Prisma.DadosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDados>
          }
          groupBy: {
            args: Prisma.dadosGroupByArgs<ExtArgs>
            result: $Utils.Optional<DadosGroupByOutputType>[]
          }
          count: {
            args: Prisma.dadosCountArgs<ExtArgs>
            result: $Utils.Optional<DadosCountAggregateOutputType> | number
          }
        }
      }
      mensalix: {
        payload: Prisma.$mensalixPayload<ExtArgs>
        fields: Prisma.mensalixFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mensalixFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mensalixPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mensalixFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mensalixPayload>
          }
          findFirst: {
            args: Prisma.mensalixFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mensalixPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mensalixFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mensalixPayload>
          }
          findMany: {
            args: Prisma.mensalixFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mensalixPayload>[]
          }
          create: {
            args: Prisma.mensalixCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mensalixPayload>
          }
          createMany: {
            args: Prisma.mensalixCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.mensalixCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mensalixPayload>[]
          }
          delete: {
            args: Prisma.mensalixDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mensalixPayload>
          }
          update: {
            args: Prisma.mensalixUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mensalixPayload>
          }
          deleteMany: {
            args: Prisma.mensalixDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mensalixUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.mensalixUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mensalixPayload>
          }
          aggregate: {
            args: Prisma.MensalixAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMensalix>
          }
          groupBy: {
            args: Prisma.mensalixGroupByArgs<ExtArgs>
            result: $Utils.Optional<MensalixGroupByOutputType>[]
          }
          count: {
            args: Prisma.mensalixCountArgs<ExtArgs>
            result: $Utils.Optional<MensalixCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    agenda: number
    clientes: number
    historico: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agenda?: boolean | UsuarioCountOutputTypeCountAgendaArgs
    clientes?: boolean | UsuarioCountOutputTypeCountClientesArgs
    historico?: boolean | UsuarioCountOutputTypeCountHistoricoArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountAgendaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgendaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountClientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientesWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountHistoricoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoricoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    senha: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nome: string
    email: string
    senha: string
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    agenda?: boolean | Usuario$agendaArgs<ExtArgs>
    clientes?: boolean | Usuario$clientesArgs<ExtArgs>
    historico?: boolean | Usuario$historicoArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
  }

  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agenda?: boolean | Usuario$agendaArgs<ExtArgs>
    clientes?: boolean | Usuario$clientesArgs<ExtArgs>
    historico?: boolean | Usuario$historicoArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      agenda: Prisma.$AgendaPayload<ExtArgs>[]
      clientes: Prisma.$ClientesPayload<ExtArgs>[]
      historico: Prisma.$HistoricoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string
      senha: string
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agenda<T extends Usuario$agendaArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$agendaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgendaPayload<ExtArgs>, T, "findMany"> | Null>
    clientes<T extends Usuario$clientesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$clientesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "findMany"> | Null>
    historico<T extends Usuario$historicoArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$historicoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */ 
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly senha: FieldRef<"Usuario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
  }

  /**
   * Usuario.agenda
   */
  export type Usuario$agendaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendaInclude<ExtArgs> | null
    where?: AgendaWhereInput
    orderBy?: AgendaOrderByWithRelationInput | AgendaOrderByWithRelationInput[]
    cursor?: AgendaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AgendaScalarFieldEnum | AgendaScalarFieldEnum[]
  }

  /**
   * Usuario.clientes
   */
  export type Usuario$clientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientesInclude<ExtArgs> | null
    where?: ClientesWhereInput
    orderBy?: ClientesOrderByWithRelationInput | ClientesOrderByWithRelationInput[]
    cursor?: ClientesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientesScalarFieldEnum | ClientesScalarFieldEnum[]
  }

  /**
   * Usuario.historico
   */
  export type Usuario$historicoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoInclude<ExtArgs> | null
    where?: HistoricoWhereInput
    orderBy?: HistoricoOrderByWithRelationInput | HistoricoOrderByWithRelationInput[]
    cursor?: HistoricoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoricoScalarFieldEnum | HistoricoScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Clientes
   */

  export type AggregateClientes = {
    _count: ClientesCountAggregateOutputType | null
    _avg: ClientesAvgAggregateOutputType | null
    _sum: ClientesSumAggregateOutputType | null
    _min: ClientesMinAggregateOutputType | null
    _max: ClientesMaxAggregateOutputType | null
  }

  export type ClientesAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type ClientesSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type ClientesMinAggregateOutputType = {
    numeroTelefone: string | null
    nome: string | null
    endereco: string | null
    plano: string | null
    status: string | null
    cpf: string | null
    vencimento: string | null
    id: number | null
    dataUltimoPagamento: Date | null
    usuarioId: number | null
  }

  export type ClientesMaxAggregateOutputType = {
    numeroTelefone: string | null
    nome: string | null
    endereco: string | null
    plano: string | null
    status: string | null
    cpf: string | null
    vencimento: string | null
    id: number | null
    dataUltimoPagamento: Date | null
    usuarioId: number | null
  }

  export type ClientesCountAggregateOutputType = {
    numeroTelefone: number
    nome: number
    endereco: number
    plano: number
    status: number
    cpf: number
    vencimento: number
    id: number
    dataUltimoPagamento: number
    usuarioId: number
    _all: number
  }


  export type ClientesAvgAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type ClientesSumAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type ClientesMinAggregateInputType = {
    numeroTelefone?: true
    nome?: true
    endereco?: true
    plano?: true
    status?: true
    cpf?: true
    vencimento?: true
    id?: true
    dataUltimoPagamento?: true
    usuarioId?: true
  }

  export type ClientesMaxAggregateInputType = {
    numeroTelefone?: true
    nome?: true
    endereco?: true
    plano?: true
    status?: true
    cpf?: true
    vencimento?: true
    id?: true
    dataUltimoPagamento?: true
    usuarioId?: true
  }

  export type ClientesCountAggregateInputType = {
    numeroTelefone?: true
    nome?: true
    endereco?: true
    plano?: true
    status?: true
    cpf?: true
    vencimento?: true
    id?: true
    dataUltimoPagamento?: true
    usuarioId?: true
    _all?: true
  }

  export type ClientesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to aggregate.
     */
    where?: ClientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClientesOrderByWithRelationInput | ClientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClientesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientesMaxAggregateInputType
  }

  export type GetClientesAggregateType<T extends ClientesAggregateArgs> = {
        [P in keyof T & keyof AggregateClientes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClientes[P]>
      : GetScalarType<T[P], AggregateClientes[P]>
  }




  export type ClientesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientesWhereInput
    orderBy?: ClientesOrderByWithAggregationInput | ClientesOrderByWithAggregationInput[]
    by: ClientesScalarFieldEnum[] | ClientesScalarFieldEnum
    having?: ClientesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientesCountAggregateInputType | true
    _avg?: ClientesAvgAggregateInputType
    _sum?: ClientesSumAggregateInputType
    _min?: ClientesMinAggregateInputType
    _max?: ClientesMaxAggregateInputType
  }

  export type ClientesGroupByOutputType = {
    numeroTelefone: string | null
    nome: string | null
    endereco: string | null
    plano: string | null
    status: string | null
    cpf: string | null
    vencimento: string | null
    id: number
    dataUltimoPagamento: Date | null
    usuarioId: number
    _count: ClientesCountAggregateOutputType | null
    _avg: ClientesAvgAggregateOutputType | null
    _sum: ClientesSumAggregateOutputType | null
    _min: ClientesMinAggregateOutputType | null
    _max: ClientesMaxAggregateOutputType | null
  }

  type GetClientesGroupByPayload<T extends ClientesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientesGroupByOutputType[P]>
            : GetScalarType<T[P], ClientesGroupByOutputType[P]>
        }
      >
    >


  export type ClientesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    numeroTelefone?: boolean
    nome?: boolean
    endereco?: boolean
    plano?: boolean
    status?: boolean
    cpf?: boolean
    vencimento?: boolean
    id?: boolean
    dataUltimoPagamento?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientes"]>

  export type ClientesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    numeroTelefone?: boolean
    nome?: boolean
    endereco?: boolean
    plano?: boolean
    status?: boolean
    cpf?: boolean
    vencimento?: boolean
    id?: boolean
    dataUltimoPagamento?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientes"]>

  export type ClientesSelectScalar = {
    numeroTelefone?: boolean
    nome?: boolean
    endereco?: boolean
    plano?: boolean
    status?: boolean
    cpf?: boolean
    vencimento?: boolean
    id?: boolean
    dataUltimoPagamento?: boolean
    usuarioId?: boolean
  }

  export type ClientesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type ClientesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $ClientesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Clientes"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      numeroTelefone: string | null
      nome: string | null
      endereco: string | null
      plano: string | null
      status: string | null
      cpf: string | null
      vencimento: string | null
      id: number
      dataUltimoPagamento: Date | null
      usuarioId: number
    }, ExtArgs["result"]["clientes"]>
    composites: {}
  }

  type ClientesGetPayload<S extends boolean | null | undefined | ClientesDefaultArgs> = $Result.GetResult<Prisma.$ClientesPayload, S>

  type ClientesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ClientesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ClientesCountAggregateInputType | true
    }

  export interface ClientesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Clientes'], meta: { name: 'Clientes' } }
    /**
     * Find zero or one Clientes that matches the filter.
     * @param {ClientesFindUniqueArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientesFindUniqueArgs>(args: SelectSubset<T, ClientesFindUniqueArgs<ExtArgs>>): Prisma__ClientesClient<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Clientes that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ClientesFindUniqueOrThrowArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientesFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientesClient<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientesFindFirstArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientesFindFirstArgs>(args?: SelectSubset<T, ClientesFindFirstArgs<ExtArgs>>): Prisma__ClientesClient<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Clientes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientesFindFirstOrThrowArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientesFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientesClient<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.clientes.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.clientes.findMany({ take: 10 })
     * 
     * // Only select the `numeroTelefone`
     * const clientesWithNumeroTelefoneOnly = await prisma.clientes.findMany({ select: { numeroTelefone: true } })
     * 
     */
    findMany<T extends ClientesFindManyArgs>(args?: SelectSubset<T, ClientesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Clientes.
     * @param {ClientesCreateArgs} args - Arguments to create a Clientes.
     * @example
     * // Create one Clientes
     * const Clientes = await prisma.clientes.create({
     *   data: {
     *     // ... data to create a Clientes
     *   }
     * })
     * 
     */
    create<T extends ClientesCreateArgs>(args: SelectSubset<T, ClientesCreateArgs<ExtArgs>>): Prisma__ClientesClient<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Clientes.
     * @param {ClientesCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const clientes = await prisma.clientes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientesCreateManyArgs>(args?: SelectSubset<T, ClientesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clientes and returns the data saved in the database.
     * @param {ClientesCreateManyAndReturnArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const clientes = await prisma.clientes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clientes and only return the `numeroTelefone`
     * const clientesWithNumeroTelefoneOnly = await prisma.clientes.createManyAndReturn({ 
     *   select: { numeroTelefone: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientesCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Clientes.
     * @param {ClientesDeleteArgs} args - Arguments to delete one Clientes.
     * @example
     * // Delete one Clientes
     * const Clientes = await prisma.clientes.delete({
     *   where: {
     *     // ... filter to delete one Clientes
     *   }
     * })
     * 
     */
    delete<T extends ClientesDeleteArgs>(args: SelectSubset<T, ClientesDeleteArgs<ExtArgs>>): Prisma__ClientesClient<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Clientes.
     * @param {ClientesUpdateArgs} args - Arguments to update one Clientes.
     * @example
     * // Update one Clientes
     * const clientes = await prisma.clientes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientesUpdateArgs>(args: SelectSubset<T, ClientesUpdateArgs<ExtArgs>>): Prisma__ClientesClient<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Clientes.
     * @param {ClientesDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.clientes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientesDeleteManyArgs>(args?: SelectSubset<T, ClientesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const clientes = await prisma.clientes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientesUpdateManyArgs>(args: SelectSubset<T, ClientesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Clientes.
     * @param {ClientesUpsertArgs} args - Arguments to update or create a Clientes.
     * @example
     * // Update or create a Clientes
     * const clientes = await prisma.clientes.upsert({
     *   create: {
     *     // ... data to create a Clientes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clientes we want to update
     *   }
     * })
     */
    upsert<T extends ClientesUpsertArgs>(args: SelectSubset<T, ClientesUpsertArgs<ExtArgs>>): Prisma__ClientesClient<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientesCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.clientes.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClientesCountArgs>(
      args?: Subset<T, ClientesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientesAggregateArgs>(args: Subset<T, ClientesAggregateArgs>): Prisma.PrismaPromise<GetClientesAggregateType<T>>

    /**
     * Group by Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientesGroupByArgs['orderBy'] }
        : { orderBy?: ClientesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Clientes model
   */
  readonly fields: ClientesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Clientes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Clientes model
   */ 
  interface ClientesFieldRefs {
    readonly numeroTelefone: FieldRef<"Clientes", 'String'>
    readonly nome: FieldRef<"Clientes", 'String'>
    readonly endereco: FieldRef<"Clientes", 'String'>
    readonly plano: FieldRef<"Clientes", 'String'>
    readonly status: FieldRef<"Clientes", 'String'>
    readonly cpf: FieldRef<"Clientes", 'String'>
    readonly vencimento: FieldRef<"Clientes", 'String'>
    readonly id: FieldRef<"Clientes", 'Int'>
    readonly dataUltimoPagamento: FieldRef<"Clientes", 'DateTime'>
    readonly usuarioId: FieldRef<"Clientes", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Clientes findUnique
   */
  export type ClientesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientesInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where: ClientesWhereUniqueInput
  }

  /**
   * Clientes findUniqueOrThrow
   */
  export type ClientesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientesInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where: ClientesWhereUniqueInput
  }

  /**
   * Clientes findFirst
   */
  export type ClientesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientesInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClientesOrderByWithRelationInput | ClientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClientesScalarFieldEnum | ClientesScalarFieldEnum[]
  }

  /**
   * Clientes findFirstOrThrow
   */
  export type ClientesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientesInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClientesOrderByWithRelationInput | ClientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClientesScalarFieldEnum | ClientesScalarFieldEnum[]
  }

  /**
   * Clientes findMany
   */
  export type ClientesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientesInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClientesOrderByWithRelationInput | ClientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    distinct?: ClientesScalarFieldEnum | ClientesScalarFieldEnum[]
  }

  /**
   * Clientes create
   */
  export type ClientesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientesInclude<ExtArgs> | null
    /**
     * The data needed to create a Clientes.
     */
    data: XOR<ClientesCreateInput, ClientesUncheckedCreateInput>
  }

  /**
   * Clientes createMany
   */
  export type ClientesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClientesCreateManyInput | ClientesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Clientes createManyAndReturn
   */
  export type ClientesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Clientes.
     */
    data: ClientesCreateManyInput | ClientesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Clientes update
   */
  export type ClientesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientesInclude<ExtArgs> | null
    /**
     * The data needed to update a Clientes.
     */
    data: XOR<ClientesUpdateInput, ClientesUncheckedUpdateInput>
    /**
     * Choose, which Clientes to update.
     */
    where: ClientesWhereUniqueInput
  }

  /**
   * Clientes updateMany
   */
  export type ClientesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClientesUpdateManyMutationInput, ClientesUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClientesWhereInput
  }

  /**
   * Clientes upsert
   */
  export type ClientesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientesInclude<ExtArgs> | null
    /**
     * The filter to search for the Clientes to update in case it exists.
     */
    where: ClientesWhereUniqueInput
    /**
     * In case the Clientes found by the `where` argument doesn't exist, create a new Clientes with this data.
     */
    create: XOR<ClientesCreateInput, ClientesUncheckedCreateInput>
    /**
     * In case the Clientes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientesUpdateInput, ClientesUncheckedUpdateInput>
  }

  /**
   * Clientes delete
   */
  export type ClientesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientesInclude<ExtArgs> | null
    /**
     * Filter which Clientes to delete.
     */
    where: ClientesWhereUniqueInput
  }

  /**
   * Clientes deleteMany
   */
  export type ClientesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClientesWhereInput
  }

  /**
   * Clientes without action
   */
  export type ClientesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientesInclude<ExtArgs> | null
  }


  /**
   * Model Historico
   */

  export type AggregateHistorico = {
    _count: HistoricoCountAggregateOutputType | null
    _avg: HistoricoAvgAggregateOutputType | null
    _sum: HistoricoSumAggregateOutputType | null
    _min: HistoricoMinAggregateOutputType | null
    _max: HistoricoMaxAggregateOutputType | null
  }

  export type HistoricoAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type HistoricoSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type HistoricoMinAggregateOutputType = {
    id: number | null
    numeroTelefone: string | null
    nome: string | null
    mensagem: string | null
    usuarioId: number | null
  }

  export type HistoricoMaxAggregateOutputType = {
    id: number | null
    numeroTelefone: string | null
    nome: string | null
    mensagem: string | null
    usuarioId: number | null
  }

  export type HistoricoCountAggregateOutputType = {
    id: number
    numeroTelefone: number
    nome: number
    mensagem: number
    usuarioId: number
    _all: number
  }


  export type HistoricoAvgAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type HistoricoSumAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type HistoricoMinAggregateInputType = {
    id?: true
    numeroTelefone?: true
    nome?: true
    mensagem?: true
    usuarioId?: true
  }

  export type HistoricoMaxAggregateInputType = {
    id?: true
    numeroTelefone?: true
    nome?: true
    mensagem?: true
    usuarioId?: true
  }

  export type HistoricoCountAggregateInputType = {
    id?: true
    numeroTelefone?: true
    nome?: true
    mensagem?: true
    usuarioId?: true
    _all?: true
  }

  export type HistoricoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Historico to aggregate.
     */
    where?: HistoricoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Historicos to fetch.
     */
    orderBy?: HistoricoOrderByWithRelationInput | HistoricoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HistoricoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Historicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Historicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Historicos
    **/
    _count?: true | HistoricoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HistoricoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HistoricoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HistoricoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HistoricoMaxAggregateInputType
  }

  export type GetHistoricoAggregateType<T extends HistoricoAggregateArgs> = {
        [P in keyof T & keyof AggregateHistorico]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistorico[P]>
      : GetScalarType<T[P], AggregateHistorico[P]>
  }




  export type HistoricoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoricoWhereInput
    orderBy?: HistoricoOrderByWithAggregationInput | HistoricoOrderByWithAggregationInput[]
    by: HistoricoScalarFieldEnum[] | HistoricoScalarFieldEnum
    having?: HistoricoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HistoricoCountAggregateInputType | true
    _avg?: HistoricoAvgAggregateInputType
    _sum?: HistoricoSumAggregateInputType
    _min?: HistoricoMinAggregateInputType
    _max?: HistoricoMaxAggregateInputType
  }

  export type HistoricoGroupByOutputType = {
    id: number
    numeroTelefone: string | null
    nome: string | null
    mensagem: string | null
    usuarioId: number
    _count: HistoricoCountAggregateOutputType | null
    _avg: HistoricoAvgAggregateOutputType | null
    _sum: HistoricoSumAggregateOutputType | null
    _min: HistoricoMinAggregateOutputType | null
    _max: HistoricoMaxAggregateOutputType | null
  }

  type GetHistoricoGroupByPayload<T extends HistoricoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HistoricoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HistoricoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HistoricoGroupByOutputType[P]>
            : GetScalarType<T[P], HistoricoGroupByOutputType[P]>
        }
      >
    >


  export type HistoricoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numeroTelefone?: boolean
    nome?: boolean
    mensagem?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historico"]>

  export type HistoricoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numeroTelefone?: boolean
    nome?: boolean
    mensagem?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historico"]>

  export type HistoricoSelectScalar = {
    id?: boolean
    numeroTelefone?: boolean
    nome?: boolean
    mensagem?: boolean
    usuarioId?: boolean
  }

  export type HistoricoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type HistoricoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $HistoricoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Historico"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      numeroTelefone: string | null
      nome: string | null
      mensagem: string | null
      usuarioId: number
    }, ExtArgs["result"]["historico"]>
    composites: {}
  }

  type HistoricoGetPayload<S extends boolean | null | undefined | HistoricoDefaultArgs> = $Result.GetResult<Prisma.$HistoricoPayload, S>

  type HistoricoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<HistoricoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: HistoricoCountAggregateInputType | true
    }

  export interface HistoricoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Historico'], meta: { name: 'Historico' } }
    /**
     * Find zero or one Historico that matches the filter.
     * @param {HistoricoFindUniqueArgs} args - Arguments to find a Historico
     * @example
     * // Get one Historico
     * const historico = await prisma.historico.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HistoricoFindUniqueArgs>(args: SelectSubset<T, HistoricoFindUniqueArgs<ExtArgs>>): Prisma__HistoricoClient<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Historico that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {HistoricoFindUniqueOrThrowArgs} args - Arguments to find a Historico
     * @example
     * // Get one Historico
     * const historico = await prisma.historico.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HistoricoFindUniqueOrThrowArgs>(args: SelectSubset<T, HistoricoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HistoricoClient<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Historico that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoFindFirstArgs} args - Arguments to find a Historico
     * @example
     * // Get one Historico
     * const historico = await prisma.historico.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HistoricoFindFirstArgs>(args?: SelectSubset<T, HistoricoFindFirstArgs<ExtArgs>>): Prisma__HistoricoClient<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Historico that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoFindFirstOrThrowArgs} args - Arguments to find a Historico
     * @example
     * // Get one Historico
     * const historico = await prisma.historico.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HistoricoFindFirstOrThrowArgs>(args?: SelectSubset<T, HistoricoFindFirstOrThrowArgs<ExtArgs>>): Prisma__HistoricoClient<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Historicos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Historicos
     * const historicos = await prisma.historico.findMany()
     * 
     * // Get first 10 Historicos
     * const historicos = await prisma.historico.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const historicoWithIdOnly = await prisma.historico.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HistoricoFindManyArgs>(args?: SelectSubset<T, HistoricoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Historico.
     * @param {HistoricoCreateArgs} args - Arguments to create a Historico.
     * @example
     * // Create one Historico
     * const Historico = await prisma.historico.create({
     *   data: {
     *     // ... data to create a Historico
     *   }
     * })
     * 
     */
    create<T extends HistoricoCreateArgs>(args: SelectSubset<T, HistoricoCreateArgs<ExtArgs>>): Prisma__HistoricoClient<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Historicos.
     * @param {HistoricoCreateManyArgs} args - Arguments to create many Historicos.
     * @example
     * // Create many Historicos
     * const historico = await prisma.historico.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HistoricoCreateManyArgs>(args?: SelectSubset<T, HistoricoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Historicos and returns the data saved in the database.
     * @param {HistoricoCreateManyAndReturnArgs} args - Arguments to create many Historicos.
     * @example
     * // Create many Historicos
     * const historico = await prisma.historico.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Historicos and only return the `id`
     * const historicoWithIdOnly = await prisma.historico.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HistoricoCreateManyAndReturnArgs>(args?: SelectSubset<T, HistoricoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Historico.
     * @param {HistoricoDeleteArgs} args - Arguments to delete one Historico.
     * @example
     * // Delete one Historico
     * const Historico = await prisma.historico.delete({
     *   where: {
     *     // ... filter to delete one Historico
     *   }
     * })
     * 
     */
    delete<T extends HistoricoDeleteArgs>(args: SelectSubset<T, HistoricoDeleteArgs<ExtArgs>>): Prisma__HistoricoClient<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Historico.
     * @param {HistoricoUpdateArgs} args - Arguments to update one Historico.
     * @example
     * // Update one Historico
     * const historico = await prisma.historico.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HistoricoUpdateArgs>(args: SelectSubset<T, HistoricoUpdateArgs<ExtArgs>>): Prisma__HistoricoClient<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Historicos.
     * @param {HistoricoDeleteManyArgs} args - Arguments to filter Historicos to delete.
     * @example
     * // Delete a few Historicos
     * const { count } = await prisma.historico.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HistoricoDeleteManyArgs>(args?: SelectSubset<T, HistoricoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Historicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Historicos
     * const historico = await prisma.historico.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HistoricoUpdateManyArgs>(args: SelectSubset<T, HistoricoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Historico.
     * @param {HistoricoUpsertArgs} args - Arguments to update or create a Historico.
     * @example
     * // Update or create a Historico
     * const historico = await prisma.historico.upsert({
     *   create: {
     *     // ... data to create a Historico
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Historico we want to update
     *   }
     * })
     */
    upsert<T extends HistoricoUpsertArgs>(args: SelectSubset<T, HistoricoUpsertArgs<ExtArgs>>): Prisma__HistoricoClient<$Result.GetResult<Prisma.$HistoricoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Historicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoCountArgs} args - Arguments to filter Historicos to count.
     * @example
     * // Count the number of Historicos
     * const count = await prisma.historico.count({
     *   where: {
     *     // ... the filter for the Historicos we want to count
     *   }
     * })
    **/
    count<T extends HistoricoCountArgs>(
      args?: Subset<T, HistoricoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HistoricoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Historico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HistoricoAggregateArgs>(args: Subset<T, HistoricoAggregateArgs>): Prisma.PrismaPromise<GetHistoricoAggregateType<T>>

    /**
     * Group by Historico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HistoricoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HistoricoGroupByArgs['orderBy'] }
        : { orderBy?: HistoricoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HistoricoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistoricoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Historico model
   */
  readonly fields: HistoricoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Historico.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HistoricoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Historico model
   */ 
  interface HistoricoFieldRefs {
    readonly id: FieldRef<"Historico", 'Int'>
    readonly numeroTelefone: FieldRef<"Historico", 'String'>
    readonly nome: FieldRef<"Historico", 'String'>
    readonly mensagem: FieldRef<"Historico", 'String'>
    readonly usuarioId: FieldRef<"Historico", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Historico findUnique
   */
  export type HistoricoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoInclude<ExtArgs> | null
    /**
     * Filter, which Historico to fetch.
     */
    where: HistoricoWhereUniqueInput
  }

  /**
   * Historico findUniqueOrThrow
   */
  export type HistoricoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoInclude<ExtArgs> | null
    /**
     * Filter, which Historico to fetch.
     */
    where: HistoricoWhereUniqueInput
  }

  /**
   * Historico findFirst
   */
  export type HistoricoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoInclude<ExtArgs> | null
    /**
     * Filter, which Historico to fetch.
     */
    where?: HistoricoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Historicos to fetch.
     */
    orderBy?: HistoricoOrderByWithRelationInput | HistoricoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Historicos.
     */
    cursor?: HistoricoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Historicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Historicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Historicos.
     */
    distinct?: HistoricoScalarFieldEnum | HistoricoScalarFieldEnum[]
  }

  /**
   * Historico findFirstOrThrow
   */
  export type HistoricoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoInclude<ExtArgs> | null
    /**
     * Filter, which Historico to fetch.
     */
    where?: HistoricoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Historicos to fetch.
     */
    orderBy?: HistoricoOrderByWithRelationInput | HistoricoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Historicos.
     */
    cursor?: HistoricoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Historicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Historicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Historicos.
     */
    distinct?: HistoricoScalarFieldEnum | HistoricoScalarFieldEnum[]
  }

  /**
   * Historico findMany
   */
  export type HistoricoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoInclude<ExtArgs> | null
    /**
     * Filter, which Historicos to fetch.
     */
    where?: HistoricoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Historicos to fetch.
     */
    orderBy?: HistoricoOrderByWithRelationInput | HistoricoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Historicos.
     */
    cursor?: HistoricoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Historicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Historicos.
     */
    skip?: number
    distinct?: HistoricoScalarFieldEnum | HistoricoScalarFieldEnum[]
  }

  /**
   * Historico create
   */
  export type HistoricoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoInclude<ExtArgs> | null
    /**
     * The data needed to create a Historico.
     */
    data: XOR<HistoricoCreateInput, HistoricoUncheckedCreateInput>
  }

  /**
   * Historico createMany
   */
  export type HistoricoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Historicos.
     */
    data: HistoricoCreateManyInput | HistoricoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Historico createManyAndReturn
   */
  export type HistoricoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Historicos.
     */
    data: HistoricoCreateManyInput | HistoricoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Historico update
   */
  export type HistoricoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoInclude<ExtArgs> | null
    /**
     * The data needed to update a Historico.
     */
    data: XOR<HistoricoUpdateInput, HistoricoUncheckedUpdateInput>
    /**
     * Choose, which Historico to update.
     */
    where: HistoricoWhereUniqueInput
  }

  /**
   * Historico updateMany
   */
  export type HistoricoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Historicos.
     */
    data: XOR<HistoricoUpdateManyMutationInput, HistoricoUncheckedUpdateManyInput>
    /**
     * Filter which Historicos to update
     */
    where?: HistoricoWhereInput
  }

  /**
   * Historico upsert
   */
  export type HistoricoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoInclude<ExtArgs> | null
    /**
     * The filter to search for the Historico to update in case it exists.
     */
    where: HistoricoWhereUniqueInput
    /**
     * In case the Historico found by the `where` argument doesn't exist, create a new Historico with this data.
     */
    create: XOR<HistoricoCreateInput, HistoricoUncheckedCreateInput>
    /**
     * In case the Historico was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HistoricoUpdateInput, HistoricoUncheckedUpdateInput>
  }

  /**
   * Historico delete
   */
  export type HistoricoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoInclude<ExtArgs> | null
    /**
     * Filter which Historico to delete.
     */
    where: HistoricoWhereUniqueInput
  }

  /**
   * Historico deleteMany
   */
  export type HistoricoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Historicos to delete
     */
    where?: HistoricoWhereInput
  }

  /**
   * Historico without action
   */
  export type HistoricoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historico
     */
    select?: HistoricoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoInclude<ExtArgs> | null
  }


  /**
   * Model Agenda
   */

  export type AggregateAgenda = {
    _count: AgendaCountAggregateOutputType | null
    _avg: AgendaAvgAggregateOutputType | null
    _sum: AgendaSumAggregateOutputType | null
    _min: AgendaMinAggregateOutputType | null
    _max: AgendaMaxAggregateOutputType | null
  }

  export type AgendaAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type AgendaSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type AgendaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    telefone: string | null
    endereco: string | null
    tipo: string | null
    data: Date | null
    descricao: string | null
    status: string | null
    createdAt: Date | null
    usuarioId: number | null
  }

  export type AgendaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    telefone: string | null
    endereco: string | null
    tipo: string | null
    data: Date | null
    descricao: string | null
    status: string | null
    createdAt: Date | null
    usuarioId: number | null
  }

  export type AgendaCountAggregateOutputType = {
    id: number
    nome: number
    telefone: number
    endereco: number
    tipo: number
    data: number
    descricao: number
    status: number
    createdAt: number
    usuarioId: number
    _all: number
  }


  export type AgendaAvgAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type AgendaSumAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type AgendaMinAggregateInputType = {
    id?: true
    nome?: true
    telefone?: true
    endereco?: true
    tipo?: true
    data?: true
    descricao?: true
    status?: true
    createdAt?: true
    usuarioId?: true
  }

  export type AgendaMaxAggregateInputType = {
    id?: true
    nome?: true
    telefone?: true
    endereco?: true
    tipo?: true
    data?: true
    descricao?: true
    status?: true
    createdAt?: true
    usuarioId?: true
  }

  export type AgendaCountAggregateInputType = {
    id?: true
    nome?: true
    telefone?: true
    endereco?: true
    tipo?: true
    data?: true
    descricao?: true
    status?: true
    createdAt?: true
    usuarioId?: true
    _all?: true
  }

  export type AgendaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agenda to aggregate.
     */
    where?: AgendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agenda to fetch.
     */
    orderBy?: AgendaOrderByWithRelationInput | AgendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agenda from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agenda.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Agenda
    **/
    _count?: true | AgendaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AgendaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AgendaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgendaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgendaMaxAggregateInputType
  }

  export type GetAgendaAggregateType<T extends AgendaAggregateArgs> = {
        [P in keyof T & keyof AggregateAgenda]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgenda[P]>
      : GetScalarType<T[P], AggregateAgenda[P]>
  }




  export type AgendaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgendaWhereInput
    orderBy?: AgendaOrderByWithAggregationInput | AgendaOrderByWithAggregationInput[]
    by: AgendaScalarFieldEnum[] | AgendaScalarFieldEnum
    having?: AgendaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgendaCountAggregateInputType | true
    _avg?: AgendaAvgAggregateInputType
    _sum?: AgendaSumAggregateInputType
    _min?: AgendaMinAggregateInputType
    _max?: AgendaMaxAggregateInputType
  }

  export type AgendaGroupByOutputType = {
    id: number
    nome: string | null
    telefone: string | null
    endereco: string | null
    tipo: string | null
    data: Date | null
    descricao: string | null
    status: string | null
    createdAt: Date
    usuarioId: number
    _count: AgendaCountAggregateOutputType | null
    _avg: AgendaAvgAggregateOutputType | null
    _sum: AgendaSumAggregateOutputType | null
    _min: AgendaMinAggregateOutputType | null
    _max: AgendaMaxAggregateOutputType | null
  }

  type GetAgendaGroupByPayload<T extends AgendaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgendaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgendaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgendaGroupByOutputType[P]>
            : GetScalarType<T[P], AgendaGroupByOutputType[P]>
        }
      >
    >


  export type AgendaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    telefone?: boolean
    endereco?: boolean
    tipo?: boolean
    data?: boolean
    descricao?: boolean
    status?: boolean
    createdAt?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agenda"]>

  export type AgendaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    telefone?: boolean
    endereco?: boolean
    tipo?: boolean
    data?: boolean
    descricao?: boolean
    status?: boolean
    createdAt?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agenda"]>

  export type AgendaSelectScalar = {
    id?: boolean
    nome?: boolean
    telefone?: boolean
    endereco?: boolean
    tipo?: boolean
    data?: boolean
    descricao?: boolean
    status?: boolean
    createdAt?: boolean
    usuarioId?: boolean
  }

  export type AgendaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type AgendaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $AgendaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Agenda"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string | null
      telefone: string | null
      endereco: string | null
      tipo: string | null
      data: Date | null
      descricao: string | null
      status: string | null
      createdAt: Date
      usuarioId: number
    }, ExtArgs["result"]["agenda"]>
    composites: {}
  }

  type AgendaGetPayload<S extends boolean | null | undefined | AgendaDefaultArgs> = $Result.GetResult<Prisma.$AgendaPayload, S>

  type AgendaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AgendaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AgendaCountAggregateInputType | true
    }

  export interface AgendaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Agenda'], meta: { name: 'Agenda' } }
    /**
     * Find zero or one Agenda that matches the filter.
     * @param {AgendaFindUniqueArgs} args - Arguments to find a Agenda
     * @example
     * // Get one Agenda
     * const agenda = await prisma.agenda.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgendaFindUniqueArgs>(args: SelectSubset<T, AgendaFindUniqueArgs<ExtArgs>>): Prisma__AgendaClient<$Result.GetResult<Prisma.$AgendaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Agenda that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AgendaFindUniqueOrThrowArgs} args - Arguments to find a Agenda
     * @example
     * // Get one Agenda
     * const agenda = await prisma.agenda.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgendaFindUniqueOrThrowArgs>(args: SelectSubset<T, AgendaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgendaClient<$Result.GetResult<Prisma.$AgendaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Agenda that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendaFindFirstArgs} args - Arguments to find a Agenda
     * @example
     * // Get one Agenda
     * const agenda = await prisma.agenda.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgendaFindFirstArgs>(args?: SelectSubset<T, AgendaFindFirstArgs<ExtArgs>>): Prisma__AgendaClient<$Result.GetResult<Prisma.$AgendaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Agenda that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendaFindFirstOrThrowArgs} args - Arguments to find a Agenda
     * @example
     * // Get one Agenda
     * const agenda = await prisma.agenda.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgendaFindFirstOrThrowArgs>(args?: SelectSubset<T, AgendaFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgendaClient<$Result.GetResult<Prisma.$AgendaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Agenda that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agenda
     * const agenda = await prisma.agenda.findMany()
     * 
     * // Get first 10 Agenda
     * const agenda = await prisma.agenda.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agendaWithIdOnly = await prisma.agenda.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AgendaFindManyArgs>(args?: SelectSubset<T, AgendaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgendaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Agenda.
     * @param {AgendaCreateArgs} args - Arguments to create a Agenda.
     * @example
     * // Create one Agenda
     * const Agenda = await prisma.agenda.create({
     *   data: {
     *     // ... data to create a Agenda
     *   }
     * })
     * 
     */
    create<T extends AgendaCreateArgs>(args: SelectSubset<T, AgendaCreateArgs<ExtArgs>>): Prisma__AgendaClient<$Result.GetResult<Prisma.$AgendaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Agenda.
     * @param {AgendaCreateManyArgs} args - Arguments to create many Agenda.
     * @example
     * // Create many Agenda
     * const agenda = await prisma.agenda.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgendaCreateManyArgs>(args?: SelectSubset<T, AgendaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Agenda and returns the data saved in the database.
     * @param {AgendaCreateManyAndReturnArgs} args - Arguments to create many Agenda.
     * @example
     * // Create many Agenda
     * const agenda = await prisma.agenda.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Agenda and only return the `id`
     * const agendaWithIdOnly = await prisma.agenda.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AgendaCreateManyAndReturnArgs>(args?: SelectSubset<T, AgendaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgendaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Agenda.
     * @param {AgendaDeleteArgs} args - Arguments to delete one Agenda.
     * @example
     * // Delete one Agenda
     * const Agenda = await prisma.agenda.delete({
     *   where: {
     *     // ... filter to delete one Agenda
     *   }
     * })
     * 
     */
    delete<T extends AgendaDeleteArgs>(args: SelectSubset<T, AgendaDeleteArgs<ExtArgs>>): Prisma__AgendaClient<$Result.GetResult<Prisma.$AgendaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Agenda.
     * @param {AgendaUpdateArgs} args - Arguments to update one Agenda.
     * @example
     * // Update one Agenda
     * const agenda = await prisma.agenda.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AgendaUpdateArgs>(args: SelectSubset<T, AgendaUpdateArgs<ExtArgs>>): Prisma__AgendaClient<$Result.GetResult<Prisma.$AgendaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Agenda.
     * @param {AgendaDeleteManyArgs} args - Arguments to filter Agenda to delete.
     * @example
     * // Delete a few Agenda
     * const { count } = await prisma.agenda.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgendaDeleteManyArgs>(args?: SelectSubset<T, AgendaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agenda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agenda
     * const agenda = await prisma.agenda.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AgendaUpdateManyArgs>(args: SelectSubset<T, AgendaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Agenda.
     * @param {AgendaUpsertArgs} args - Arguments to update or create a Agenda.
     * @example
     * // Update or create a Agenda
     * const agenda = await prisma.agenda.upsert({
     *   create: {
     *     // ... data to create a Agenda
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agenda we want to update
     *   }
     * })
     */
    upsert<T extends AgendaUpsertArgs>(args: SelectSubset<T, AgendaUpsertArgs<ExtArgs>>): Prisma__AgendaClient<$Result.GetResult<Prisma.$AgendaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Agenda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendaCountArgs} args - Arguments to filter Agenda to count.
     * @example
     * // Count the number of Agenda
     * const count = await prisma.agenda.count({
     *   where: {
     *     // ... the filter for the Agenda we want to count
     *   }
     * })
    **/
    count<T extends AgendaCountArgs>(
      args?: Subset<T, AgendaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgendaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Agenda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AgendaAggregateArgs>(args: Subset<T, AgendaAggregateArgs>): Prisma.PrismaPromise<GetAgendaAggregateType<T>>

    /**
     * Group by Agenda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AgendaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgendaGroupByArgs['orderBy'] }
        : { orderBy?: AgendaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AgendaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgendaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Agenda model
   */
  readonly fields: AgendaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Agenda.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgendaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Agenda model
   */ 
  interface AgendaFieldRefs {
    readonly id: FieldRef<"Agenda", 'Int'>
    readonly nome: FieldRef<"Agenda", 'String'>
    readonly telefone: FieldRef<"Agenda", 'String'>
    readonly endereco: FieldRef<"Agenda", 'String'>
    readonly tipo: FieldRef<"Agenda", 'String'>
    readonly data: FieldRef<"Agenda", 'DateTime'>
    readonly descricao: FieldRef<"Agenda", 'String'>
    readonly status: FieldRef<"Agenda", 'String'>
    readonly createdAt: FieldRef<"Agenda", 'DateTime'>
    readonly usuarioId: FieldRef<"Agenda", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Agenda findUnique
   */
  export type AgendaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendaInclude<ExtArgs> | null
    /**
     * Filter, which Agenda to fetch.
     */
    where: AgendaWhereUniqueInput
  }

  /**
   * Agenda findUniqueOrThrow
   */
  export type AgendaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendaInclude<ExtArgs> | null
    /**
     * Filter, which Agenda to fetch.
     */
    where: AgendaWhereUniqueInput
  }

  /**
   * Agenda findFirst
   */
  export type AgendaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendaInclude<ExtArgs> | null
    /**
     * Filter, which Agenda to fetch.
     */
    where?: AgendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agenda to fetch.
     */
    orderBy?: AgendaOrderByWithRelationInput | AgendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agenda.
     */
    cursor?: AgendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agenda from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agenda.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agenda.
     */
    distinct?: AgendaScalarFieldEnum | AgendaScalarFieldEnum[]
  }

  /**
   * Agenda findFirstOrThrow
   */
  export type AgendaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendaInclude<ExtArgs> | null
    /**
     * Filter, which Agenda to fetch.
     */
    where?: AgendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agenda to fetch.
     */
    orderBy?: AgendaOrderByWithRelationInput | AgendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agenda.
     */
    cursor?: AgendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agenda from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agenda.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agenda.
     */
    distinct?: AgendaScalarFieldEnum | AgendaScalarFieldEnum[]
  }

  /**
   * Agenda findMany
   */
  export type AgendaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendaInclude<ExtArgs> | null
    /**
     * Filter, which Agenda to fetch.
     */
    where?: AgendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agenda to fetch.
     */
    orderBy?: AgendaOrderByWithRelationInput | AgendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Agenda.
     */
    cursor?: AgendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agenda from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agenda.
     */
    skip?: number
    distinct?: AgendaScalarFieldEnum | AgendaScalarFieldEnum[]
  }

  /**
   * Agenda create
   */
  export type AgendaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendaInclude<ExtArgs> | null
    /**
     * The data needed to create a Agenda.
     */
    data: XOR<AgendaCreateInput, AgendaUncheckedCreateInput>
  }

  /**
   * Agenda createMany
   */
  export type AgendaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Agenda.
     */
    data: AgendaCreateManyInput | AgendaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Agenda createManyAndReturn
   */
  export type AgendaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Agenda.
     */
    data: AgendaCreateManyInput | AgendaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Agenda update
   */
  export type AgendaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendaInclude<ExtArgs> | null
    /**
     * The data needed to update a Agenda.
     */
    data: XOR<AgendaUpdateInput, AgendaUncheckedUpdateInput>
    /**
     * Choose, which Agenda to update.
     */
    where: AgendaWhereUniqueInput
  }

  /**
   * Agenda updateMany
   */
  export type AgendaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Agenda.
     */
    data: XOR<AgendaUpdateManyMutationInput, AgendaUncheckedUpdateManyInput>
    /**
     * Filter which Agenda to update
     */
    where?: AgendaWhereInput
  }

  /**
   * Agenda upsert
   */
  export type AgendaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendaInclude<ExtArgs> | null
    /**
     * The filter to search for the Agenda to update in case it exists.
     */
    where: AgendaWhereUniqueInput
    /**
     * In case the Agenda found by the `where` argument doesn't exist, create a new Agenda with this data.
     */
    create: XOR<AgendaCreateInput, AgendaUncheckedCreateInput>
    /**
     * In case the Agenda was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgendaUpdateInput, AgendaUncheckedUpdateInput>
  }

  /**
   * Agenda delete
   */
  export type AgendaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendaInclude<ExtArgs> | null
    /**
     * Filter which Agenda to delete.
     */
    where: AgendaWhereUniqueInput
  }

  /**
   * Agenda deleteMany
   */
  export type AgendaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agenda to delete
     */
    where?: AgendaWhereInput
  }

  /**
   * Agenda without action
   */
  export type AgendaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendaInclude<ExtArgs> | null
  }


  /**
   * Model dados
   */

  export type AggregateDados = {
    _count: DadosCountAggregateOutputType | null
    _avg: DadosAvgAggregateOutputType | null
    _sum: DadosSumAggregateOutputType | null
    _min: DadosMinAggregateOutputType | null
    _max: DadosMaxAggregateOutputType | null
  }

  export type DadosAvgAggregateOutputType = {
    id: number | null
  }

  export type DadosSumAggregateOutputType = {
    id: number | null
  }

  export type DadosMinAggregateOutputType = {
    id: number | null
    session_id: string | null
  }

  export type DadosMaxAggregateOutputType = {
    id: number | null
    session_id: string | null
  }

  export type DadosCountAggregateOutputType = {
    id: number
    session_id: number
    message: number
    _all: number
  }


  export type DadosAvgAggregateInputType = {
    id?: true
  }

  export type DadosSumAggregateInputType = {
    id?: true
  }

  export type DadosMinAggregateInputType = {
    id?: true
    session_id?: true
  }

  export type DadosMaxAggregateInputType = {
    id?: true
    session_id?: true
  }

  export type DadosCountAggregateInputType = {
    id?: true
    session_id?: true
    message?: true
    _all?: true
  }

  export type DadosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which dados to aggregate.
     */
    where?: dadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dados to fetch.
     */
    orderBy?: dadosOrderByWithRelationInput | dadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: dadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned dados
    **/
    _count?: true | DadosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DadosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DadosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DadosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DadosMaxAggregateInputType
  }

  export type GetDadosAggregateType<T extends DadosAggregateArgs> = {
        [P in keyof T & keyof AggregateDados]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDados[P]>
      : GetScalarType<T[P], AggregateDados[P]>
  }




  export type dadosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: dadosWhereInput
    orderBy?: dadosOrderByWithAggregationInput | dadosOrderByWithAggregationInput[]
    by: DadosScalarFieldEnum[] | DadosScalarFieldEnum
    having?: dadosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DadosCountAggregateInputType | true
    _avg?: DadosAvgAggregateInputType
    _sum?: DadosSumAggregateInputType
    _min?: DadosMinAggregateInputType
    _max?: DadosMaxAggregateInputType
  }

  export type DadosGroupByOutputType = {
    id: number
    session_id: string
    message: JsonValue
    _count: DadosCountAggregateOutputType | null
    _avg: DadosAvgAggregateOutputType | null
    _sum: DadosSumAggregateOutputType | null
    _min: DadosMinAggregateOutputType | null
    _max: DadosMaxAggregateOutputType | null
  }

  type GetDadosGroupByPayload<T extends dadosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DadosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DadosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DadosGroupByOutputType[P]>
            : GetScalarType<T[P], DadosGroupByOutputType[P]>
        }
      >
    >


  export type dadosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    session_id?: boolean
    message?: boolean
  }, ExtArgs["result"]["dados"]>

  export type dadosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    session_id?: boolean
    message?: boolean
  }, ExtArgs["result"]["dados"]>

  export type dadosSelectScalar = {
    id?: boolean
    session_id?: boolean
    message?: boolean
  }


  export type $dadosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "dados"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      session_id: string
      message: Prisma.JsonValue
    }, ExtArgs["result"]["dados"]>
    composites: {}
  }

  type dadosGetPayload<S extends boolean | null | undefined | dadosDefaultArgs> = $Result.GetResult<Prisma.$dadosPayload, S>

  type dadosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<dadosFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DadosCountAggregateInputType | true
    }

  export interface dadosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['dados'], meta: { name: 'dados' } }
    /**
     * Find zero or one Dados that matches the filter.
     * @param {dadosFindUniqueArgs} args - Arguments to find a Dados
     * @example
     * // Get one Dados
     * const dados = await prisma.dados.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends dadosFindUniqueArgs>(args: SelectSubset<T, dadosFindUniqueArgs<ExtArgs>>): Prisma__dadosClient<$Result.GetResult<Prisma.$dadosPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Dados that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {dadosFindUniqueOrThrowArgs} args - Arguments to find a Dados
     * @example
     * // Get one Dados
     * const dados = await prisma.dados.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends dadosFindUniqueOrThrowArgs>(args: SelectSubset<T, dadosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__dadosClient<$Result.GetResult<Prisma.$dadosPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Dados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dadosFindFirstArgs} args - Arguments to find a Dados
     * @example
     * // Get one Dados
     * const dados = await prisma.dados.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends dadosFindFirstArgs>(args?: SelectSubset<T, dadosFindFirstArgs<ExtArgs>>): Prisma__dadosClient<$Result.GetResult<Prisma.$dadosPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Dados that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dadosFindFirstOrThrowArgs} args - Arguments to find a Dados
     * @example
     * // Get one Dados
     * const dados = await prisma.dados.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends dadosFindFirstOrThrowArgs>(args?: SelectSubset<T, dadosFindFirstOrThrowArgs<ExtArgs>>): Prisma__dadosClient<$Result.GetResult<Prisma.$dadosPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Dados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dadosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dados
     * const dados = await prisma.dados.findMany()
     * 
     * // Get first 10 Dados
     * const dados = await prisma.dados.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dadosWithIdOnly = await prisma.dados.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends dadosFindManyArgs>(args?: SelectSubset<T, dadosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dadosPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Dados.
     * @param {dadosCreateArgs} args - Arguments to create a Dados.
     * @example
     * // Create one Dados
     * const Dados = await prisma.dados.create({
     *   data: {
     *     // ... data to create a Dados
     *   }
     * })
     * 
     */
    create<T extends dadosCreateArgs>(args: SelectSubset<T, dadosCreateArgs<ExtArgs>>): Prisma__dadosClient<$Result.GetResult<Prisma.$dadosPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Dados.
     * @param {dadosCreateManyArgs} args - Arguments to create many Dados.
     * @example
     * // Create many Dados
     * const dados = await prisma.dados.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends dadosCreateManyArgs>(args?: SelectSubset<T, dadosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dados and returns the data saved in the database.
     * @param {dadosCreateManyAndReturnArgs} args - Arguments to create many Dados.
     * @example
     * // Create many Dados
     * const dados = await prisma.dados.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dados and only return the `id`
     * const dadosWithIdOnly = await prisma.dados.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends dadosCreateManyAndReturnArgs>(args?: SelectSubset<T, dadosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dadosPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Dados.
     * @param {dadosDeleteArgs} args - Arguments to delete one Dados.
     * @example
     * // Delete one Dados
     * const Dados = await prisma.dados.delete({
     *   where: {
     *     // ... filter to delete one Dados
     *   }
     * })
     * 
     */
    delete<T extends dadosDeleteArgs>(args: SelectSubset<T, dadosDeleteArgs<ExtArgs>>): Prisma__dadosClient<$Result.GetResult<Prisma.$dadosPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Dados.
     * @param {dadosUpdateArgs} args - Arguments to update one Dados.
     * @example
     * // Update one Dados
     * const dados = await prisma.dados.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends dadosUpdateArgs>(args: SelectSubset<T, dadosUpdateArgs<ExtArgs>>): Prisma__dadosClient<$Result.GetResult<Prisma.$dadosPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Dados.
     * @param {dadosDeleteManyArgs} args - Arguments to filter Dados to delete.
     * @example
     * // Delete a few Dados
     * const { count } = await prisma.dados.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends dadosDeleteManyArgs>(args?: SelectSubset<T, dadosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dadosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dados
     * const dados = await prisma.dados.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends dadosUpdateManyArgs>(args: SelectSubset<T, dadosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Dados.
     * @param {dadosUpsertArgs} args - Arguments to update or create a Dados.
     * @example
     * // Update or create a Dados
     * const dados = await prisma.dados.upsert({
     *   create: {
     *     // ... data to create a Dados
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dados we want to update
     *   }
     * })
     */
    upsert<T extends dadosUpsertArgs>(args: SelectSubset<T, dadosUpsertArgs<ExtArgs>>): Prisma__dadosClient<$Result.GetResult<Prisma.$dadosPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Dados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dadosCountArgs} args - Arguments to filter Dados to count.
     * @example
     * // Count the number of Dados
     * const count = await prisma.dados.count({
     *   where: {
     *     // ... the filter for the Dados we want to count
     *   }
     * })
    **/
    count<T extends dadosCountArgs>(
      args?: Subset<T, dadosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DadosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DadosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DadosAggregateArgs>(args: Subset<T, DadosAggregateArgs>): Prisma.PrismaPromise<GetDadosAggregateType<T>>

    /**
     * Group by Dados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dadosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends dadosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: dadosGroupByArgs['orderBy'] }
        : { orderBy?: dadosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, dadosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDadosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the dados model
   */
  readonly fields: dadosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for dados.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__dadosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the dados model
   */ 
  interface dadosFieldRefs {
    readonly id: FieldRef<"dados", 'Int'>
    readonly session_id: FieldRef<"dados", 'String'>
    readonly message: FieldRef<"dados", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * dados findUnique
   */
  export type dadosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dados
     */
    select?: dadosSelect<ExtArgs> | null
    /**
     * Filter, which dados to fetch.
     */
    where: dadosWhereUniqueInput
  }

  /**
   * dados findUniqueOrThrow
   */
  export type dadosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dados
     */
    select?: dadosSelect<ExtArgs> | null
    /**
     * Filter, which dados to fetch.
     */
    where: dadosWhereUniqueInput
  }

  /**
   * dados findFirst
   */
  export type dadosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dados
     */
    select?: dadosSelect<ExtArgs> | null
    /**
     * Filter, which dados to fetch.
     */
    where?: dadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dados to fetch.
     */
    orderBy?: dadosOrderByWithRelationInput | dadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dados.
     */
    cursor?: dadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dados.
     */
    distinct?: DadosScalarFieldEnum | DadosScalarFieldEnum[]
  }

  /**
   * dados findFirstOrThrow
   */
  export type dadosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dados
     */
    select?: dadosSelect<ExtArgs> | null
    /**
     * Filter, which dados to fetch.
     */
    where?: dadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dados to fetch.
     */
    orderBy?: dadosOrderByWithRelationInput | dadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dados.
     */
    cursor?: dadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dados.
     */
    distinct?: DadosScalarFieldEnum | DadosScalarFieldEnum[]
  }

  /**
   * dados findMany
   */
  export type dadosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dados
     */
    select?: dadosSelect<ExtArgs> | null
    /**
     * Filter, which dados to fetch.
     */
    where?: dadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dados to fetch.
     */
    orderBy?: dadosOrderByWithRelationInput | dadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing dados.
     */
    cursor?: dadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dados.
     */
    skip?: number
    distinct?: DadosScalarFieldEnum | DadosScalarFieldEnum[]
  }

  /**
   * dados create
   */
  export type dadosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dados
     */
    select?: dadosSelect<ExtArgs> | null
    /**
     * The data needed to create a dados.
     */
    data: XOR<dadosCreateInput, dadosUncheckedCreateInput>
  }

  /**
   * dados createMany
   */
  export type dadosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many dados.
     */
    data: dadosCreateManyInput | dadosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * dados createManyAndReturn
   */
  export type dadosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dados
     */
    select?: dadosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many dados.
     */
    data: dadosCreateManyInput | dadosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * dados update
   */
  export type dadosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dados
     */
    select?: dadosSelect<ExtArgs> | null
    /**
     * The data needed to update a dados.
     */
    data: XOR<dadosUpdateInput, dadosUncheckedUpdateInput>
    /**
     * Choose, which dados to update.
     */
    where: dadosWhereUniqueInput
  }

  /**
   * dados updateMany
   */
  export type dadosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update dados.
     */
    data: XOR<dadosUpdateManyMutationInput, dadosUncheckedUpdateManyInput>
    /**
     * Filter which dados to update
     */
    where?: dadosWhereInput
  }

  /**
   * dados upsert
   */
  export type dadosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dados
     */
    select?: dadosSelect<ExtArgs> | null
    /**
     * The filter to search for the dados to update in case it exists.
     */
    where: dadosWhereUniqueInput
    /**
     * In case the dados found by the `where` argument doesn't exist, create a new dados with this data.
     */
    create: XOR<dadosCreateInput, dadosUncheckedCreateInput>
    /**
     * In case the dados was found with the provided `where` argument, update it with this data.
     */
    update: XOR<dadosUpdateInput, dadosUncheckedUpdateInput>
  }

  /**
   * dados delete
   */
  export type dadosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dados
     */
    select?: dadosSelect<ExtArgs> | null
    /**
     * Filter which dados to delete.
     */
    where: dadosWhereUniqueInput
  }

  /**
   * dados deleteMany
   */
  export type dadosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which dados to delete
     */
    where?: dadosWhereInput
  }

  /**
   * dados without action
   */
  export type dadosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dados
     */
    select?: dadosSelect<ExtArgs> | null
  }


  /**
   * Model mensalix
   */

  export type AggregateMensalix = {
    _count: MensalixCountAggregateOutputType | null
    _avg: MensalixAvgAggregateOutputType | null
    _sum: MensalixSumAggregateOutputType | null
    _min: MensalixMinAggregateOutputType | null
    _max: MensalixMaxAggregateOutputType | null
  }

  export type MensalixAvgAggregateOutputType = {
    id: number | null
  }

  export type MensalixSumAggregateOutputType = {
    id: number | null
  }

  export type MensalixMinAggregateOutputType = {
    id: number | null
    session_id: string | null
  }

  export type MensalixMaxAggregateOutputType = {
    id: number | null
    session_id: string | null
  }

  export type MensalixCountAggregateOutputType = {
    id: number
    session_id: number
    message: number
    _all: number
  }


  export type MensalixAvgAggregateInputType = {
    id?: true
  }

  export type MensalixSumAggregateInputType = {
    id?: true
  }

  export type MensalixMinAggregateInputType = {
    id?: true
    session_id?: true
  }

  export type MensalixMaxAggregateInputType = {
    id?: true
    session_id?: true
  }

  export type MensalixCountAggregateInputType = {
    id?: true
    session_id?: true
    message?: true
    _all?: true
  }

  export type MensalixAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mensalix to aggregate.
     */
    where?: mensalixWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mensalixes to fetch.
     */
    orderBy?: mensalixOrderByWithRelationInput | mensalixOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mensalixWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mensalixes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mensalixes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mensalixes
    **/
    _count?: true | MensalixCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MensalixAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MensalixSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MensalixMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MensalixMaxAggregateInputType
  }

  export type GetMensalixAggregateType<T extends MensalixAggregateArgs> = {
        [P in keyof T & keyof AggregateMensalix]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMensalix[P]>
      : GetScalarType<T[P], AggregateMensalix[P]>
  }




  export type mensalixGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mensalixWhereInput
    orderBy?: mensalixOrderByWithAggregationInput | mensalixOrderByWithAggregationInput[]
    by: MensalixScalarFieldEnum[] | MensalixScalarFieldEnum
    having?: mensalixScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MensalixCountAggregateInputType | true
    _avg?: MensalixAvgAggregateInputType
    _sum?: MensalixSumAggregateInputType
    _min?: MensalixMinAggregateInputType
    _max?: MensalixMaxAggregateInputType
  }

  export type MensalixGroupByOutputType = {
    id: number
    session_id: string
    message: JsonValue
    _count: MensalixCountAggregateOutputType | null
    _avg: MensalixAvgAggregateOutputType | null
    _sum: MensalixSumAggregateOutputType | null
    _min: MensalixMinAggregateOutputType | null
    _max: MensalixMaxAggregateOutputType | null
  }

  type GetMensalixGroupByPayload<T extends mensalixGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MensalixGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MensalixGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MensalixGroupByOutputType[P]>
            : GetScalarType<T[P], MensalixGroupByOutputType[P]>
        }
      >
    >


  export type mensalixSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    session_id?: boolean
    message?: boolean
  }, ExtArgs["result"]["mensalix"]>

  export type mensalixSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    session_id?: boolean
    message?: boolean
  }, ExtArgs["result"]["mensalix"]>

  export type mensalixSelectScalar = {
    id?: boolean
    session_id?: boolean
    message?: boolean
  }


  export type $mensalixPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mensalix"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      session_id: string
      message: Prisma.JsonValue
    }, ExtArgs["result"]["mensalix"]>
    composites: {}
  }

  type mensalixGetPayload<S extends boolean | null | undefined | mensalixDefaultArgs> = $Result.GetResult<Prisma.$mensalixPayload, S>

  type mensalixCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<mensalixFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MensalixCountAggregateInputType | true
    }

  export interface mensalixDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mensalix'], meta: { name: 'mensalix' } }
    /**
     * Find zero or one Mensalix that matches the filter.
     * @param {mensalixFindUniqueArgs} args - Arguments to find a Mensalix
     * @example
     * // Get one Mensalix
     * const mensalix = await prisma.mensalix.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mensalixFindUniqueArgs>(args: SelectSubset<T, mensalixFindUniqueArgs<ExtArgs>>): Prisma__mensalixClient<$Result.GetResult<Prisma.$mensalixPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Mensalix that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {mensalixFindUniqueOrThrowArgs} args - Arguments to find a Mensalix
     * @example
     * // Get one Mensalix
     * const mensalix = await prisma.mensalix.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mensalixFindUniqueOrThrowArgs>(args: SelectSubset<T, mensalixFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mensalixClient<$Result.GetResult<Prisma.$mensalixPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Mensalix that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mensalixFindFirstArgs} args - Arguments to find a Mensalix
     * @example
     * // Get one Mensalix
     * const mensalix = await prisma.mensalix.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mensalixFindFirstArgs>(args?: SelectSubset<T, mensalixFindFirstArgs<ExtArgs>>): Prisma__mensalixClient<$Result.GetResult<Prisma.$mensalixPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Mensalix that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mensalixFindFirstOrThrowArgs} args - Arguments to find a Mensalix
     * @example
     * // Get one Mensalix
     * const mensalix = await prisma.mensalix.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mensalixFindFirstOrThrowArgs>(args?: SelectSubset<T, mensalixFindFirstOrThrowArgs<ExtArgs>>): Prisma__mensalixClient<$Result.GetResult<Prisma.$mensalixPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Mensalixes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mensalixFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mensalixes
     * const mensalixes = await prisma.mensalix.findMany()
     * 
     * // Get first 10 Mensalixes
     * const mensalixes = await prisma.mensalix.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mensalixWithIdOnly = await prisma.mensalix.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends mensalixFindManyArgs>(args?: SelectSubset<T, mensalixFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mensalixPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Mensalix.
     * @param {mensalixCreateArgs} args - Arguments to create a Mensalix.
     * @example
     * // Create one Mensalix
     * const Mensalix = await prisma.mensalix.create({
     *   data: {
     *     // ... data to create a Mensalix
     *   }
     * })
     * 
     */
    create<T extends mensalixCreateArgs>(args: SelectSubset<T, mensalixCreateArgs<ExtArgs>>): Prisma__mensalixClient<$Result.GetResult<Prisma.$mensalixPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Mensalixes.
     * @param {mensalixCreateManyArgs} args - Arguments to create many Mensalixes.
     * @example
     * // Create many Mensalixes
     * const mensalix = await prisma.mensalix.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mensalixCreateManyArgs>(args?: SelectSubset<T, mensalixCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mensalixes and returns the data saved in the database.
     * @param {mensalixCreateManyAndReturnArgs} args - Arguments to create many Mensalixes.
     * @example
     * // Create many Mensalixes
     * const mensalix = await prisma.mensalix.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mensalixes and only return the `id`
     * const mensalixWithIdOnly = await prisma.mensalix.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends mensalixCreateManyAndReturnArgs>(args?: SelectSubset<T, mensalixCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mensalixPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Mensalix.
     * @param {mensalixDeleteArgs} args - Arguments to delete one Mensalix.
     * @example
     * // Delete one Mensalix
     * const Mensalix = await prisma.mensalix.delete({
     *   where: {
     *     // ... filter to delete one Mensalix
     *   }
     * })
     * 
     */
    delete<T extends mensalixDeleteArgs>(args: SelectSubset<T, mensalixDeleteArgs<ExtArgs>>): Prisma__mensalixClient<$Result.GetResult<Prisma.$mensalixPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Mensalix.
     * @param {mensalixUpdateArgs} args - Arguments to update one Mensalix.
     * @example
     * // Update one Mensalix
     * const mensalix = await prisma.mensalix.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mensalixUpdateArgs>(args: SelectSubset<T, mensalixUpdateArgs<ExtArgs>>): Prisma__mensalixClient<$Result.GetResult<Prisma.$mensalixPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Mensalixes.
     * @param {mensalixDeleteManyArgs} args - Arguments to filter Mensalixes to delete.
     * @example
     * // Delete a few Mensalixes
     * const { count } = await prisma.mensalix.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mensalixDeleteManyArgs>(args?: SelectSubset<T, mensalixDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mensalixes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mensalixUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mensalixes
     * const mensalix = await prisma.mensalix.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mensalixUpdateManyArgs>(args: SelectSubset<T, mensalixUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mensalix.
     * @param {mensalixUpsertArgs} args - Arguments to update or create a Mensalix.
     * @example
     * // Update or create a Mensalix
     * const mensalix = await prisma.mensalix.upsert({
     *   create: {
     *     // ... data to create a Mensalix
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mensalix we want to update
     *   }
     * })
     */
    upsert<T extends mensalixUpsertArgs>(args: SelectSubset<T, mensalixUpsertArgs<ExtArgs>>): Prisma__mensalixClient<$Result.GetResult<Prisma.$mensalixPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Mensalixes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mensalixCountArgs} args - Arguments to filter Mensalixes to count.
     * @example
     * // Count the number of Mensalixes
     * const count = await prisma.mensalix.count({
     *   where: {
     *     // ... the filter for the Mensalixes we want to count
     *   }
     * })
    **/
    count<T extends mensalixCountArgs>(
      args?: Subset<T, mensalixCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MensalixCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mensalix.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensalixAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MensalixAggregateArgs>(args: Subset<T, MensalixAggregateArgs>): Prisma.PrismaPromise<GetMensalixAggregateType<T>>

    /**
     * Group by Mensalix.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mensalixGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends mensalixGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mensalixGroupByArgs['orderBy'] }
        : { orderBy?: mensalixGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, mensalixGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMensalixGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mensalix model
   */
  readonly fields: mensalixFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mensalix.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mensalixClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the mensalix model
   */ 
  interface mensalixFieldRefs {
    readonly id: FieldRef<"mensalix", 'Int'>
    readonly session_id: FieldRef<"mensalix", 'String'>
    readonly message: FieldRef<"mensalix", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * mensalix findUnique
   */
  export type mensalixFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensalix
     */
    select?: mensalixSelect<ExtArgs> | null
    /**
     * Filter, which mensalix to fetch.
     */
    where: mensalixWhereUniqueInput
  }

  /**
   * mensalix findUniqueOrThrow
   */
  export type mensalixFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensalix
     */
    select?: mensalixSelect<ExtArgs> | null
    /**
     * Filter, which mensalix to fetch.
     */
    where: mensalixWhereUniqueInput
  }

  /**
   * mensalix findFirst
   */
  export type mensalixFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensalix
     */
    select?: mensalixSelect<ExtArgs> | null
    /**
     * Filter, which mensalix to fetch.
     */
    where?: mensalixWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mensalixes to fetch.
     */
    orderBy?: mensalixOrderByWithRelationInput | mensalixOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mensalixes.
     */
    cursor?: mensalixWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mensalixes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mensalixes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mensalixes.
     */
    distinct?: MensalixScalarFieldEnum | MensalixScalarFieldEnum[]
  }

  /**
   * mensalix findFirstOrThrow
   */
  export type mensalixFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensalix
     */
    select?: mensalixSelect<ExtArgs> | null
    /**
     * Filter, which mensalix to fetch.
     */
    where?: mensalixWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mensalixes to fetch.
     */
    orderBy?: mensalixOrderByWithRelationInput | mensalixOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mensalixes.
     */
    cursor?: mensalixWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mensalixes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mensalixes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mensalixes.
     */
    distinct?: MensalixScalarFieldEnum | MensalixScalarFieldEnum[]
  }

  /**
   * mensalix findMany
   */
  export type mensalixFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensalix
     */
    select?: mensalixSelect<ExtArgs> | null
    /**
     * Filter, which mensalixes to fetch.
     */
    where?: mensalixWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mensalixes to fetch.
     */
    orderBy?: mensalixOrderByWithRelationInput | mensalixOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mensalixes.
     */
    cursor?: mensalixWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mensalixes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mensalixes.
     */
    skip?: number
    distinct?: MensalixScalarFieldEnum | MensalixScalarFieldEnum[]
  }

  /**
   * mensalix create
   */
  export type mensalixCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensalix
     */
    select?: mensalixSelect<ExtArgs> | null
    /**
     * The data needed to create a mensalix.
     */
    data: XOR<mensalixCreateInput, mensalixUncheckedCreateInput>
  }

  /**
   * mensalix createMany
   */
  export type mensalixCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mensalixes.
     */
    data: mensalixCreateManyInput | mensalixCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mensalix createManyAndReturn
   */
  export type mensalixCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensalix
     */
    select?: mensalixSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many mensalixes.
     */
    data: mensalixCreateManyInput | mensalixCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mensalix update
   */
  export type mensalixUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensalix
     */
    select?: mensalixSelect<ExtArgs> | null
    /**
     * The data needed to update a mensalix.
     */
    data: XOR<mensalixUpdateInput, mensalixUncheckedUpdateInput>
    /**
     * Choose, which mensalix to update.
     */
    where: mensalixWhereUniqueInput
  }

  /**
   * mensalix updateMany
   */
  export type mensalixUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mensalixes.
     */
    data: XOR<mensalixUpdateManyMutationInput, mensalixUncheckedUpdateManyInput>
    /**
     * Filter which mensalixes to update
     */
    where?: mensalixWhereInput
  }

  /**
   * mensalix upsert
   */
  export type mensalixUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensalix
     */
    select?: mensalixSelect<ExtArgs> | null
    /**
     * The filter to search for the mensalix to update in case it exists.
     */
    where: mensalixWhereUniqueInput
    /**
     * In case the mensalix found by the `where` argument doesn't exist, create a new mensalix with this data.
     */
    create: XOR<mensalixCreateInput, mensalixUncheckedCreateInput>
    /**
     * In case the mensalix was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mensalixUpdateInput, mensalixUncheckedUpdateInput>
  }

  /**
   * mensalix delete
   */
  export type mensalixDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensalix
     */
    select?: mensalixSelect<ExtArgs> | null
    /**
     * Filter which mensalix to delete.
     */
    where: mensalixWhereUniqueInput
  }

  /**
   * mensalix deleteMany
   */
  export type mensalixDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mensalixes to delete
     */
    where?: mensalixWhereInput
  }

  /**
   * mensalix without action
   */
  export type mensalixDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensalix
     */
    select?: mensalixSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senha: 'senha'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const ClientesScalarFieldEnum: {
    numeroTelefone: 'numeroTelefone',
    nome: 'nome',
    endereco: 'endereco',
    plano: 'plano',
    status: 'status',
    cpf: 'cpf',
    vencimento: 'vencimento',
    id: 'id',
    dataUltimoPagamento: 'dataUltimoPagamento',
    usuarioId: 'usuarioId'
  };

  export type ClientesScalarFieldEnum = (typeof ClientesScalarFieldEnum)[keyof typeof ClientesScalarFieldEnum]


  export const HistoricoScalarFieldEnum: {
    id: 'id',
    numeroTelefone: 'numeroTelefone',
    nome: 'nome',
    mensagem: 'mensagem',
    usuarioId: 'usuarioId'
  };

  export type HistoricoScalarFieldEnum = (typeof HistoricoScalarFieldEnum)[keyof typeof HistoricoScalarFieldEnum]


  export const AgendaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    telefone: 'telefone',
    endereco: 'endereco',
    tipo: 'tipo',
    data: 'data',
    descricao: 'descricao',
    status: 'status',
    createdAt: 'createdAt',
    usuarioId: 'usuarioId'
  };

  export type AgendaScalarFieldEnum = (typeof AgendaScalarFieldEnum)[keyof typeof AgendaScalarFieldEnum]


  export const DadosScalarFieldEnum: {
    id: 'id',
    session_id: 'session_id',
    message: 'message'
  };

  export type DadosScalarFieldEnum = (typeof DadosScalarFieldEnum)[keyof typeof DadosScalarFieldEnum]


  export const MensalixScalarFieldEnum: {
    id: 'id',
    session_id: 'session_id',
    message: 'message'
  };

  export type MensalixScalarFieldEnum = (typeof MensalixScalarFieldEnum)[keyof typeof MensalixScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    agenda?: AgendaListRelationFilter
    clientes?: ClientesListRelationFilter
    historico?: HistoricoListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    agenda?: AgendaOrderByRelationAggregateInput
    clientes?: ClientesOrderByRelationAggregateInput
    historico?: HistoricoOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nome?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    agenda?: AgendaListRelationFilter
    clientes?: ClientesListRelationFilter
    historico?: HistoricoListRelationFilter
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    senha?: StringWithAggregatesFilter<"Usuario"> | string
  }

  export type ClientesWhereInput = {
    AND?: ClientesWhereInput | ClientesWhereInput[]
    OR?: ClientesWhereInput[]
    NOT?: ClientesWhereInput | ClientesWhereInput[]
    numeroTelefone?: StringNullableFilter<"Clientes"> | string | null
    nome?: StringNullableFilter<"Clientes"> | string | null
    endereco?: StringNullableFilter<"Clientes"> | string | null
    plano?: StringNullableFilter<"Clientes"> | string | null
    status?: StringNullableFilter<"Clientes"> | string | null
    cpf?: StringNullableFilter<"Clientes"> | string | null
    vencimento?: StringNullableFilter<"Clientes"> | string | null
    id?: IntFilter<"Clientes"> | number
    dataUltimoPagamento?: DateTimeNullableFilter<"Clientes"> | Date | string | null
    usuarioId?: IntFilter<"Clientes"> | number
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
  }

  export type ClientesOrderByWithRelationInput = {
    numeroTelefone?: SortOrderInput | SortOrder
    nome?: SortOrderInput | SortOrder
    endereco?: SortOrderInput | SortOrder
    plano?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    cpf?: SortOrderInput | SortOrder
    vencimento?: SortOrderInput | SortOrder
    id?: SortOrder
    dataUltimoPagamento?: SortOrderInput | SortOrder
    usuarioId?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type ClientesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ClientesWhereInput | ClientesWhereInput[]
    OR?: ClientesWhereInput[]
    NOT?: ClientesWhereInput | ClientesWhereInput[]
    numeroTelefone?: StringNullableFilter<"Clientes"> | string | null
    nome?: StringNullableFilter<"Clientes"> | string | null
    endereco?: StringNullableFilter<"Clientes"> | string | null
    plano?: StringNullableFilter<"Clientes"> | string | null
    status?: StringNullableFilter<"Clientes"> | string | null
    cpf?: StringNullableFilter<"Clientes"> | string | null
    vencimento?: StringNullableFilter<"Clientes"> | string | null
    dataUltimoPagamento?: DateTimeNullableFilter<"Clientes"> | Date | string | null
    usuarioId?: IntFilter<"Clientes"> | number
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
  }, "id">

  export type ClientesOrderByWithAggregationInput = {
    numeroTelefone?: SortOrderInput | SortOrder
    nome?: SortOrderInput | SortOrder
    endereco?: SortOrderInput | SortOrder
    plano?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    cpf?: SortOrderInput | SortOrder
    vencimento?: SortOrderInput | SortOrder
    id?: SortOrder
    dataUltimoPagamento?: SortOrderInput | SortOrder
    usuarioId?: SortOrder
    _count?: ClientesCountOrderByAggregateInput
    _avg?: ClientesAvgOrderByAggregateInput
    _max?: ClientesMaxOrderByAggregateInput
    _min?: ClientesMinOrderByAggregateInput
    _sum?: ClientesSumOrderByAggregateInput
  }

  export type ClientesScalarWhereWithAggregatesInput = {
    AND?: ClientesScalarWhereWithAggregatesInput | ClientesScalarWhereWithAggregatesInput[]
    OR?: ClientesScalarWhereWithAggregatesInput[]
    NOT?: ClientesScalarWhereWithAggregatesInput | ClientesScalarWhereWithAggregatesInput[]
    numeroTelefone?: StringNullableWithAggregatesFilter<"Clientes"> | string | null
    nome?: StringNullableWithAggregatesFilter<"Clientes"> | string | null
    endereco?: StringNullableWithAggregatesFilter<"Clientes"> | string | null
    plano?: StringNullableWithAggregatesFilter<"Clientes"> | string | null
    status?: StringNullableWithAggregatesFilter<"Clientes"> | string | null
    cpf?: StringNullableWithAggregatesFilter<"Clientes"> | string | null
    vencimento?: StringNullableWithAggregatesFilter<"Clientes"> | string | null
    id?: IntWithAggregatesFilter<"Clientes"> | number
    dataUltimoPagamento?: DateTimeNullableWithAggregatesFilter<"Clientes"> | Date | string | null
    usuarioId?: IntWithAggregatesFilter<"Clientes"> | number
  }

  export type HistoricoWhereInput = {
    AND?: HistoricoWhereInput | HistoricoWhereInput[]
    OR?: HistoricoWhereInput[]
    NOT?: HistoricoWhereInput | HistoricoWhereInput[]
    id?: IntFilter<"Historico"> | number
    numeroTelefone?: StringNullableFilter<"Historico"> | string | null
    nome?: StringNullableFilter<"Historico"> | string | null
    mensagem?: StringNullableFilter<"Historico"> | string | null
    usuarioId?: IntFilter<"Historico"> | number
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
  }

  export type HistoricoOrderByWithRelationInput = {
    id?: SortOrder
    numeroTelefone?: SortOrderInput | SortOrder
    nome?: SortOrderInput | SortOrder
    mensagem?: SortOrderInput | SortOrder
    usuarioId?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type HistoricoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HistoricoWhereInput | HistoricoWhereInput[]
    OR?: HistoricoWhereInput[]
    NOT?: HistoricoWhereInput | HistoricoWhereInput[]
    numeroTelefone?: StringNullableFilter<"Historico"> | string | null
    nome?: StringNullableFilter<"Historico"> | string | null
    mensagem?: StringNullableFilter<"Historico"> | string | null
    usuarioId?: IntFilter<"Historico"> | number
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
  }, "id">

  export type HistoricoOrderByWithAggregationInput = {
    id?: SortOrder
    numeroTelefone?: SortOrderInput | SortOrder
    nome?: SortOrderInput | SortOrder
    mensagem?: SortOrderInput | SortOrder
    usuarioId?: SortOrder
    _count?: HistoricoCountOrderByAggregateInput
    _avg?: HistoricoAvgOrderByAggregateInput
    _max?: HistoricoMaxOrderByAggregateInput
    _min?: HistoricoMinOrderByAggregateInput
    _sum?: HistoricoSumOrderByAggregateInput
  }

  export type HistoricoScalarWhereWithAggregatesInput = {
    AND?: HistoricoScalarWhereWithAggregatesInput | HistoricoScalarWhereWithAggregatesInput[]
    OR?: HistoricoScalarWhereWithAggregatesInput[]
    NOT?: HistoricoScalarWhereWithAggregatesInput | HistoricoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Historico"> | number
    numeroTelefone?: StringNullableWithAggregatesFilter<"Historico"> | string | null
    nome?: StringNullableWithAggregatesFilter<"Historico"> | string | null
    mensagem?: StringNullableWithAggregatesFilter<"Historico"> | string | null
    usuarioId?: IntWithAggregatesFilter<"Historico"> | number
  }

  export type AgendaWhereInput = {
    AND?: AgendaWhereInput | AgendaWhereInput[]
    OR?: AgendaWhereInput[]
    NOT?: AgendaWhereInput | AgendaWhereInput[]
    id?: IntFilter<"Agenda"> | number
    nome?: StringNullableFilter<"Agenda"> | string | null
    telefone?: StringNullableFilter<"Agenda"> | string | null
    endereco?: StringNullableFilter<"Agenda"> | string | null
    tipo?: StringNullableFilter<"Agenda"> | string | null
    data?: DateTimeNullableFilter<"Agenda"> | Date | string | null
    descricao?: StringNullableFilter<"Agenda"> | string | null
    status?: StringNullableFilter<"Agenda"> | string | null
    createdAt?: DateTimeFilter<"Agenda"> | Date | string
    usuarioId?: IntFilter<"Agenda"> | number
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
  }

  export type AgendaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrderInput | SortOrder
    telefone?: SortOrderInput | SortOrder
    endereco?: SortOrderInput | SortOrder
    tipo?: SortOrderInput | SortOrder
    data?: SortOrderInput | SortOrder
    descricao?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    usuarioId?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type AgendaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AgendaWhereInput | AgendaWhereInput[]
    OR?: AgendaWhereInput[]
    NOT?: AgendaWhereInput | AgendaWhereInput[]
    nome?: StringNullableFilter<"Agenda"> | string | null
    telefone?: StringNullableFilter<"Agenda"> | string | null
    endereco?: StringNullableFilter<"Agenda"> | string | null
    tipo?: StringNullableFilter<"Agenda"> | string | null
    data?: DateTimeNullableFilter<"Agenda"> | Date | string | null
    descricao?: StringNullableFilter<"Agenda"> | string | null
    status?: StringNullableFilter<"Agenda"> | string | null
    createdAt?: DateTimeFilter<"Agenda"> | Date | string
    usuarioId?: IntFilter<"Agenda"> | number
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
  }, "id">

  export type AgendaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrderInput | SortOrder
    telefone?: SortOrderInput | SortOrder
    endereco?: SortOrderInput | SortOrder
    tipo?: SortOrderInput | SortOrder
    data?: SortOrderInput | SortOrder
    descricao?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    usuarioId?: SortOrder
    _count?: AgendaCountOrderByAggregateInput
    _avg?: AgendaAvgOrderByAggregateInput
    _max?: AgendaMaxOrderByAggregateInput
    _min?: AgendaMinOrderByAggregateInput
    _sum?: AgendaSumOrderByAggregateInput
  }

  export type AgendaScalarWhereWithAggregatesInput = {
    AND?: AgendaScalarWhereWithAggregatesInput | AgendaScalarWhereWithAggregatesInput[]
    OR?: AgendaScalarWhereWithAggregatesInput[]
    NOT?: AgendaScalarWhereWithAggregatesInput | AgendaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Agenda"> | number
    nome?: StringNullableWithAggregatesFilter<"Agenda"> | string | null
    telefone?: StringNullableWithAggregatesFilter<"Agenda"> | string | null
    endereco?: StringNullableWithAggregatesFilter<"Agenda"> | string | null
    tipo?: StringNullableWithAggregatesFilter<"Agenda"> | string | null
    data?: DateTimeNullableWithAggregatesFilter<"Agenda"> | Date | string | null
    descricao?: StringNullableWithAggregatesFilter<"Agenda"> | string | null
    status?: StringNullableWithAggregatesFilter<"Agenda"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Agenda"> | Date | string
    usuarioId?: IntWithAggregatesFilter<"Agenda"> | number
  }

  export type dadosWhereInput = {
    AND?: dadosWhereInput | dadosWhereInput[]
    OR?: dadosWhereInput[]
    NOT?: dadosWhereInput | dadosWhereInput[]
    id?: IntFilter<"dados"> | number
    session_id?: StringFilter<"dados"> | string
    message?: JsonFilter<"dados">
  }

  export type dadosOrderByWithRelationInput = {
    id?: SortOrder
    session_id?: SortOrder
    message?: SortOrder
  }

  export type dadosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: dadosWhereInput | dadosWhereInput[]
    OR?: dadosWhereInput[]
    NOT?: dadosWhereInput | dadosWhereInput[]
    session_id?: StringFilter<"dados"> | string
    message?: JsonFilter<"dados">
  }, "id">

  export type dadosOrderByWithAggregationInput = {
    id?: SortOrder
    session_id?: SortOrder
    message?: SortOrder
    _count?: dadosCountOrderByAggregateInput
    _avg?: dadosAvgOrderByAggregateInput
    _max?: dadosMaxOrderByAggregateInput
    _min?: dadosMinOrderByAggregateInput
    _sum?: dadosSumOrderByAggregateInput
  }

  export type dadosScalarWhereWithAggregatesInput = {
    AND?: dadosScalarWhereWithAggregatesInput | dadosScalarWhereWithAggregatesInput[]
    OR?: dadosScalarWhereWithAggregatesInput[]
    NOT?: dadosScalarWhereWithAggregatesInput | dadosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"dados"> | number
    session_id?: StringWithAggregatesFilter<"dados"> | string
    message?: JsonWithAggregatesFilter<"dados">
  }

  export type mensalixWhereInput = {
    AND?: mensalixWhereInput | mensalixWhereInput[]
    OR?: mensalixWhereInput[]
    NOT?: mensalixWhereInput | mensalixWhereInput[]
    id?: IntFilter<"mensalix"> | number
    session_id?: StringFilter<"mensalix"> | string
    message?: JsonFilter<"mensalix">
  }

  export type mensalixOrderByWithRelationInput = {
    id?: SortOrder
    session_id?: SortOrder
    message?: SortOrder
  }

  export type mensalixWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: mensalixWhereInput | mensalixWhereInput[]
    OR?: mensalixWhereInput[]
    NOT?: mensalixWhereInput | mensalixWhereInput[]
    session_id?: StringFilter<"mensalix"> | string
    message?: JsonFilter<"mensalix">
  }, "id">

  export type mensalixOrderByWithAggregationInput = {
    id?: SortOrder
    session_id?: SortOrder
    message?: SortOrder
    _count?: mensalixCountOrderByAggregateInput
    _avg?: mensalixAvgOrderByAggregateInput
    _max?: mensalixMaxOrderByAggregateInput
    _min?: mensalixMinOrderByAggregateInput
    _sum?: mensalixSumOrderByAggregateInput
  }

  export type mensalixScalarWhereWithAggregatesInput = {
    AND?: mensalixScalarWhereWithAggregatesInput | mensalixScalarWhereWithAggregatesInput[]
    OR?: mensalixScalarWhereWithAggregatesInput[]
    NOT?: mensalixScalarWhereWithAggregatesInput | mensalixScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"mensalix"> | number
    session_id?: StringWithAggregatesFilter<"mensalix"> | string
    message?: JsonWithAggregatesFilter<"mensalix">
  }

  export type UsuarioCreateInput = {
    nome: string
    email: string
    senha: string
    agenda?: AgendaCreateNestedManyWithoutUsuarioInput
    clientes?: ClientesCreateNestedManyWithoutUsuarioInput
    historico?: HistoricoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    senha: string
    agenda?: AgendaUncheckedCreateNestedManyWithoutUsuarioInput
    clientes?: ClientesUncheckedCreateNestedManyWithoutUsuarioInput
    historico?: HistoricoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    agenda?: AgendaUpdateManyWithoutUsuarioNestedInput
    clientes?: ClientesUpdateManyWithoutUsuarioNestedInput
    historico?: HistoricoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    agenda?: AgendaUncheckedUpdateManyWithoutUsuarioNestedInput
    clientes?: ClientesUncheckedUpdateManyWithoutUsuarioNestedInput
    historico?: HistoricoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nome: string
    email: string
    senha: string
  }

  export type UsuarioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
  }

  export type ClientesCreateInput = {
    numeroTelefone?: string | null
    nome?: string | null
    endereco?: string | null
    plano?: string | null
    status?: string | null
    cpf?: string | null
    vencimento?: string | null
    dataUltimoPagamento?: Date | string | null
    usuario?: UsuarioCreateNestedOneWithoutClientesInput
  }

  export type ClientesUncheckedCreateInput = {
    numeroTelefone?: string | null
    nome?: string | null
    endereco?: string | null
    plano?: string | null
    status?: string | null
    cpf?: string | null
    vencimento?: string | null
    id?: number
    dataUltimoPagamento?: Date | string | null
    usuarioId?: number
  }

  export type ClientesUpdateInput = {
    numeroTelefone?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    plano?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    vencimento?: NullableStringFieldUpdateOperationsInput | string | null
    dataUltimoPagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario?: UsuarioUpdateOneRequiredWithoutClientesNestedInput
  }

  export type ClientesUncheckedUpdateInput = {
    numeroTelefone?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    plano?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    vencimento?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
    dataUltimoPagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type ClientesCreateManyInput = {
    numeroTelefone?: string | null
    nome?: string | null
    endereco?: string | null
    plano?: string | null
    status?: string | null
    cpf?: string | null
    vencimento?: string | null
    id?: number
    dataUltimoPagamento?: Date | string | null
    usuarioId?: number
  }

  export type ClientesUpdateManyMutationInput = {
    numeroTelefone?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    plano?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    vencimento?: NullableStringFieldUpdateOperationsInput | string | null
    dataUltimoPagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClientesUncheckedUpdateManyInput = {
    numeroTelefone?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    plano?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    vencimento?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
    dataUltimoPagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type HistoricoCreateInput = {
    numeroTelefone?: string | null
    nome?: string | null
    mensagem?: string | null
    usuario?: UsuarioCreateNestedOneWithoutHistoricoInput
  }

  export type HistoricoUncheckedCreateInput = {
    id?: number
    numeroTelefone?: string | null
    nome?: string | null
    mensagem?: string | null
    usuarioId?: number
  }

  export type HistoricoUpdateInput = {
    numeroTelefone?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    mensagem?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: UsuarioUpdateOneRequiredWithoutHistoricoNestedInput
  }

  export type HistoricoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    numeroTelefone?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    mensagem?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type HistoricoCreateManyInput = {
    id?: number
    numeroTelefone?: string | null
    nome?: string | null
    mensagem?: string | null
    usuarioId?: number
  }

  export type HistoricoUpdateManyMutationInput = {
    numeroTelefone?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    mensagem?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HistoricoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    numeroTelefone?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    mensagem?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type AgendaCreateInput = {
    nome?: string | null
    telefone?: string | null
    endereco?: string | null
    tipo?: string | null
    data?: Date | string | null
    descricao?: string | null
    status?: string | null
    createdAt?: Date | string
    usuario?: UsuarioCreateNestedOneWithoutAgendaInput
  }

  export type AgendaUncheckedCreateInput = {
    id?: number
    nome?: string | null
    telefone?: string | null
    endereco?: string | null
    tipo?: string | null
    data?: Date | string | null
    descricao?: string | null
    status?: string | null
    createdAt?: Date | string
    usuarioId?: number
  }

  export type AgendaUpdateInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutAgendaNestedInput
  }

  export type AgendaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type AgendaCreateManyInput = {
    id?: number
    nome?: string | null
    telefone?: string | null
    endereco?: string | null
    tipo?: string | null
    data?: Date | string | null
    descricao?: string | null
    status?: string | null
    createdAt?: Date | string
    usuarioId?: number
  }

  export type AgendaUpdateManyMutationInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgendaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type dadosCreateInput = {
    session_id: string
    message: JsonNullValueInput | InputJsonValue
  }

  export type dadosUncheckedCreateInput = {
    id?: number
    session_id: string
    message: JsonNullValueInput | InputJsonValue
  }

  export type dadosUpdateInput = {
    session_id?: StringFieldUpdateOperationsInput | string
    message?: JsonNullValueInput | InputJsonValue
  }

  export type dadosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    session_id?: StringFieldUpdateOperationsInput | string
    message?: JsonNullValueInput | InputJsonValue
  }

  export type dadosCreateManyInput = {
    id?: number
    session_id: string
    message: JsonNullValueInput | InputJsonValue
  }

  export type dadosUpdateManyMutationInput = {
    session_id?: StringFieldUpdateOperationsInput | string
    message?: JsonNullValueInput | InputJsonValue
  }

  export type dadosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    session_id?: StringFieldUpdateOperationsInput | string
    message?: JsonNullValueInput | InputJsonValue
  }

  export type mensalixCreateInput = {
    session_id: string
    message: JsonNullValueInput | InputJsonValue
  }

  export type mensalixUncheckedCreateInput = {
    id?: number
    session_id: string
    message: JsonNullValueInput | InputJsonValue
  }

  export type mensalixUpdateInput = {
    session_id?: StringFieldUpdateOperationsInput | string
    message?: JsonNullValueInput | InputJsonValue
  }

  export type mensalixUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    session_id?: StringFieldUpdateOperationsInput | string
    message?: JsonNullValueInput | InputJsonValue
  }

  export type mensalixCreateManyInput = {
    id?: number
    session_id: string
    message: JsonNullValueInput | InputJsonValue
  }

  export type mensalixUpdateManyMutationInput = {
    session_id?: StringFieldUpdateOperationsInput | string
    message?: JsonNullValueInput | InputJsonValue
  }

  export type mensalixUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    session_id?: StringFieldUpdateOperationsInput | string
    message?: JsonNullValueInput | InputJsonValue
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type AgendaListRelationFilter = {
    every?: AgendaWhereInput
    some?: AgendaWhereInput
    none?: AgendaWhereInput
  }

  export type ClientesListRelationFilter = {
    every?: ClientesWhereInput
    some?: ClientesWhereInput
    none?: ClientesWhereInput
  }

  export type HistoricoListRelationFilter = {
    every?: HistoricoWhereInput
    some?: HistoricoWhereInput
    none?: HistoricoWhereInput
  }

  export type AgendaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HistoricoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UsuarioRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ClientesCountOrderByAggregateInput = {
    numeroTelefone?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
    plano?: SortOrder
    status?: SortOrder
    cpf?: SortOrder
    vencimento?: SortOrder
    id?: SortOrder
    dataUltimoPagamento?: SortOrder
    usuarioId?: SortOrder
  }

  export type ClientesAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type ClientesMaxOrderByAggregateInput = {
    numeroTelefone?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
    plano?: SortOrder
    status?: SortOrder
    cpf?: SortOrder
    vencimento?: SortOrder
    id?: SortOrder
    dataUltimoPagamento?: SortOrder
    usuarioId?: SortOrder
  }

  export type ClientesMinOrderByAggregateInput = {
    numeroTelefone?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
    plano?: SortOrder
    status?: SortOrder
    cpf?: SortOrder
    vencimento?: SortOrder
    id?: SortOrder
    dataUltimoPagamento?: SortOrder
    usuarioId?: SortOrder
  }

  export type ClientesSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type HistoricoCountOrderByAggregateInput = {
    id?: SortOrder
    numeroTelefone?: SortOrder
    nome?: SortOrder
    mensagem?: SortOrder
    usuarioId?: SortOrder
  }

  export type HistoricoAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type HistoricoMaxOrderByAggregateInput = {
    id?: SortOrder
    numeroTelefone?: SortOrder
    nome?: SortOrder
    mensagem?: SortOrder
    usuarioId?: SortOrder
  }

  export type HistoricoMinOrderByAggregateInput = {
    id?: SortOrder
    numeroTelefone?: SortOrder
    nome?: SortOrder
    mensagem?: SortOrder
    usuarioId?: SortOrder
  }

  export type HistoricoSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AgendaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
    endereco?: SortOrder
    tipo?: SortOrder
    data?: SortOrder
    descricao?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    usuarioId?: SortOrder
  }

  export type AgendaAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type AgendaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
    endereco?: SortOrder
    tipo?: SortOrder
    data?: SortOrder
    descricao?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    usuarioId?: SortOrder
  }

  export type AgendaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
    endereco?: SortOrder
    tipo?: SortOrder
    data?: SortOrder
    descricao?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    usuarioId?: SortOrder
  }

  export type AgendaSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type dadosCountOrderByAggregateInput = {
    id?: SortOrder
    session_id?: SortOrder
    message?: SortOrder
  }

  export type dadosAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type dadosMaxOrderByAggregateInput = {
    id?: SortOrder
    session_id?: SortOrder
  }

  export type dadosMinOrderByAggregateInput = {
    id?: SortOrder
    session_id?: SortOrder
  }

  export type dadosSumOrderByAggregateInput = {
    id?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type mensalixCountOrderByAggregateInput = {
    id?: SortOrder
    session_id?: SortOrder
    message?: SortOrder
  }

  export type mensalixAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type mensalixMaxOrderByAggregateInput = {
    id?: SortOrder
    session_id?: SortOrder
  }

  export type mensalixMinOrderByAggregateInput = {
    id?: SortOrder
    session_id?: SortOrder
  }

  export type mensalixSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AgendaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<AgendaCreateWithoutUsuarioInput, AgendaUncheckedCreateWithoutUsuarioInput> | AgendaCreateWithoutUsuarioInput[] | AgendaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AgendaCreateOrConnectWithoutUsuarioInput | AgendaCreateOrConnectWithoutUsuarioInput[]
    createMany?: AgendaCreateManyUsuarioInputEnvelope
    connect?: AgendaWhereUniqueInput | AgendaWhereUniqueInput[]
  }

  export type ClientesCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ClientesCreateWithoutUsuarioInput, ClientesUncheckedCreateWithoutUsuarioInput> | ClientesCreateWithoutUsuarioInput[] | ClientesUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ClientesCreateOrConnectWithoutUsuarioInput | ClientesCreateOrConnectWithoutUsuarioInput[]
    createMany?: ClientesCreateManyUsuarioInputEnvelope
    connect?: ClientesWhereUniqueInput | ClientesWhereUniqueInput[]
  }

  export type HistoricoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<HistoricoCreateWithoutUsuarioInput, HistoricoUncheckedCreateWithoutUsuarioInput> | HistoricoCreateWithoutUsuarioInput[] | HistoricoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: HistoricoCreateOrConnectWithoutUsuarioInput | HistoricoCreateOrConnectWithoutUsuarioInput[]
    createMany?: HistoricoCreateManyUsuarioInputEnvelope
    connect?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
  }

  export type AgendaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<AgendaCreateWithoutUsuarioInput, AgendaUncheckedCreateWithoutUsuarioInput> | AgendaCreateWithoutUsuarioInput[] | AgendaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AgendaCreateOrConnectWithoutUsuarioInput | AgendaCreateOrConnectWithoutUsuarioInput[]
    createMany?: AgendaCreateManyUsuarioInputEnvelope
    connect?: AgendaWhereUniqueInput | AgendaWhereUniqueInput[]
  }

  export type ClientesUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ClientesCreateWithoutUsuarioInput, ClientesUncheckedCreateWithoutUsuarioInput> | ClientesCreateWithoutUsuarioInput[] | ClientesUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ClientesCreateOrConnectWithoutUsuarioInput | ClientesCreateOrConnectWithoutUsuarioInput[]
    createMany?: ClientesCreateManyUsuarioInputEnvelope
    connect?: ClientesWhereUniqueInput | ClientesWhereUniqueInput[]
  }

  export type HistoricoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<HistoricoCreateWithoutUsuarioInput, HistoricoUncheckedCreateWithoutUsuarioInput> | HistoricoCreateWithoutUsuarioInput[] | HistoricoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: HistoricoCreateOrConnectWithoutUsuarioInput | HistoricoCreateOrConnectWithoutUsuarioInput[]
    createMany?: HistoricoCreateManyUsuarioInputEnvelope
    connect?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type AgendaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<AgendaCreateWithoutUsuarioInput, AgendaUncheckedCreateWithoutUsuarioInput> | AgendaCreateWithoutUsuarioInput[] | AgendaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AgendaCreateOrConnectWithoutUsuarioInput | AgendaCreateOrConnectWithoutUsuarioInput[]
    upsert?: AgendaUpsertWithWhereUniqueWithoutUsuarioInput | AgendaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: AgendaCreateManyUsuarioInputEnvelope
    set?: AgendaWhereUniqueInput | AgendaWhereUniqueInput[]
    disconnect?: AgendaWhereUniqueInput | AgendaWhereUniqueInput[]
    delete?: AgendaWhereUniqueInput | AgendaWhereUniqueInput[]
    connect?: AgendaWhereUniqueInput | AgendaWhereUniqueInput[]
    update?: AgendaUpdateWithWhereUniqueWithoutUsuarioInput | AgendaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: AgendaUpdateManyWithWhereWithoutUsuarioInput | AgendaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: AgendaScalarWhereInput | AgendaScalarWhereInput[]
  }

  export type ClientesUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ClientesCreateWithoutUsuarioInput, ClientesUncheckedCreateWithoutUsuarioInput> | ClientesCreateWithoutUsuarioInput[] | ClientesUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ClientesCreateOrConnectWithoutUsuarioInput | ClientesCreateOrConnectWithoutUsuarioInput[]
    upsert?: ClientesUpsertWithWhereUniqueWithoutUsuarioInput | ClientesUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ClientesCreateManyUsuarioInputEnvelope
    set?: ClientesWhereUniqueInput | ClientesWhereUniqueInput[]
    disconnect?: ClientesWhereUniqueInput | ClientesWhereUniqueInput[]
    delete?: ClientesWhereUniqueInput | ClientesWhereUniqueInput[]
    connect?: ClientesWhereUniqueInput | ClientesWhereUniqueInput[]
    update?: ClientesUpdateWithWhereUniqueWithoutUsuarioInput | ClientesUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ClientesUpdateManyWithWhereWithoutUsuarioInput | ClientesUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ClientesScalarWhereInput | ClientesScalarWhereInput[]
  }

  export type HistoricoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<HistoricoCreateWithoutUsuarioInput, HistoricoUncheckedCreateWithoutUsuarioInput> | HistoricoCreateWithoutUsuarioInput[] | HistoricoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: HistoricoCreateOrConnectWithoutUsuarioInput | HistoricoCreateOrConnectWithoutUsuarioInput[]
    upsert?: HistoricoUpsertWithWhereUniqueWithoutUsuarioInput | HistoricoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: HistoricoCreateManyUsuarioInputEnvelope
    set?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    disconnect?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    delete?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    connect?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    update?: HistoricoUpdateWithWhereUniqueWithoutUsuarioInput | HistoricoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: HistoricoUpdateManyWithWhereWithoutUsuarioInput | HistoricoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: HistoricoScalarWhereInput | HistoricoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AgendaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<AgendaCreateWithoutUsuarioInput, AgendaUncheckedCreateWithoutUsuarioInput> | AgendaCreateWithoutUsuarioInput[] | AgendaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AgendaCreateOrConnectWithoutUsuarioInput | AgendaCreateOrConnectWithoutUsuarioInput[]
    upsert?: AgendaUpsertWithWhereUniqueWithoutUsuarioInput | AgendaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: AgendaCreateManyUsuarioInputEnvelope
    set?: AgendaWhereUniqueInput | AgendaWhereUniqueInput[]
    disconnect?: AgendaWhereUniqueInput | AgendaWhereUniqueInput[]
    delete?: AgendaWhereUniqueInput | AgendaWhereUniqueInput[]
    connect?: AgendaWhereUniqueInput | AgendaWhereUniqueInput[]
    update?: AgendaUpdateWithWhereUniqueWithoutUsuarioInput | AgendaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: AgendaUpdateManyWithWhereWithoutUsuarioInput | AgendaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: AgendaScalarWhereInput | AgendaScalarWhereInput[]
  }

  export type ClientesUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ClientesCreateWithoutUsuarioInput, ClientesUncheckedCreateWithoutUsuarioInput> | ClientesCreateWithoutUsuarioInput[] | ClientesUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ClientesCreateOrConnectWithoutUsuarioInput | ClientesCreateOrConnectWithoutUsuarioInput[]
    upsert?: ClientesUpsertWithWhereUniqueWithoutUsuarioInput | ClientesUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ClientesCreateManyUsuarioInputEnvelope
    set?: ClientesWhereUniqueInput | ClientesWhereUniqueInput[]
    disconnect?: ClientesWhereUniqueInput | ClientesWhereUniqueInput[]
    delete?: ClientesWhereUniqueInput | ClientesWhereUniqueInput[]
    connect?: ClientesWhereUniqueInput | ClientesWhereUniqueInput[]
    update?: ClientesUpdateWithWhereUniqueWithoutUsuarioInput | ClientesUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ClientesUpdateManyWithWhereWithoutUsuarioInput | ClientesUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ClientesScalarWhereInput | ClientesScalarWhereInput[]
  }

  export type HistoricoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<HistoricoCreateWithoutUsuarioInput, HistoricoUncheckedCreateWithoutUsuarioInput> | HistoricoCreateWithoutUsuarioInput[] | HistoricoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: HistoricoCreateOrConnectWithoutUsuarioInput | HistoricoCreateOrConnectWithoutUsuarioInput[]
    upsert?: HistoricoUpsertWithWhereUniqueWithoutUsuarioInput | HistoricoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: HistoricoCreateManyUsuarioInputEnvelope
    set?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    disconnect?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    delete?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    connect?: HistoricoWhereUniqueInput | HistoricoWhereUniqueInput[]
    update?: HistoricoUpdateWithWhereUniqueWithoutUsuarioInput | HistoricoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: HistoricoUpdateManyWithWhereWithoutUsuarioInput | HistoricoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: HistoricoScalarWhereInput | HistoricoScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutClientesInput = {
    create?: XOR<UsuarioCreateWithoutClientesInput, UsuarioUncheckedCreateWithoutClientesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutClientesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UsuarioUpdateOneRequiredWithoutClientesNestedInput = {
    create?: XOR<UsuarioCreateWithoutClientesInput, UsuarioUncheckedCreateWithoutClientesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutClientesInput
    upsert?: UsuarioUpsertWithoutClientesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutClientesInput, UsuarioUpdateWithoutClientesInput>, UsuarioUncheckedUpdateWithoutClientesInput>
  }

  export type UsuarioCreateNestedOneWithoutHistoricoInput = {
    create?: XOR<UsuarioCreateWithoutHistoricoInput, UsuarioUncheckedCreateWithoutHistoricoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutHistoricoInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutHistoricoNestedInput = {
    create?: XOR<UsuarioCreateWithoutHistoricoInput, UsuarioUncheckedCreateWithoutHistoricoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutHistoricoInput
    upsert?: UsuarioUpsertWithoutHistoricoInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutHistoricoInput, UsuarioUpdateWithoutHistoricoInput>, UsuarioUncheckedUpdateWithoutHistoricoInput>
  }

  export type UsuarioCreateNestedOneWithoutAgendaInput = {
    create?: XOR<UsuarioCreateWithoutAgendaInput, UsuarioUncheckedCreateWithoutAgendaInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAgendaInput
    connect?: UsuarioWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UsuarioUpdateOneRequiredWithoutAgendaNestedInput = {
    create?: XOR<UsuarioCreateWithoutAgendaInput, UsuarioUncheckedCreateWithoutAgendaInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAgendaInput
    upsert?: UsuarioUpsertWithoutAgendaInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutAgendaInput, UsuarioUpdateWithoutAgendaInput>, UsuarioUncheckedUpdateWithoutAgendaInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AgendaCreateWithoutUsuarioInput = {
    nome?: string | null
    telefone?: string | null
    endereco?: string | null
    tipo?: string | null
    data?: Date | string | null
    descricao?: string | null
    status?: string | null
    createdAt?: Date | string
  }

  export type AgendaUncheckedCreateWithoutUsuarioInput = {
    id?: number
    nome?: string | null
    telefone?: string | null
    endereco?: string | null
    tipo?: string | null
    data?: Date | string | null
    descricao?: string | null
    status?: string | null
    createdAt?: Date | string
  }

  export type AgendaCreateOrConnectWithoutUsuarioInput = {
    where: AgendaWhereUniqueInput
    create: XOR<AgendaCreateWithoutUsuarioInput, AgendaUncheckedCreateWithoutUsuarioInput>
  }

  export type AgendaCreateManyUsuarioInputEnvelope = {
    data: AgendaCreateManyUsuarioInput | AgendaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type ClientesCreateWithoutUsuarioInput = {
    numeroTelefone?: string | null
    nome?: string | null
    endereco?: string | null
    plano?: string | null
    status?: string | null
    cpf?: string | null
    vencimento?: string | null
    dataUltimoPagamento?: Date | string | null
  }

  export type ClientesUncheckedCreateWithoutUsuarioInput = {
    numeroTelefone?: string | null
    nome?: string | null
    endereco?: string | null
    plano?: string | null
    status?: string | null
    cpf?: string | null
    vencimento?: string | null
    id?: number
    dataUltimoPagamento?: Date | string | null
  }

  export type ClientesCreateOrConnectWithoutUsuarioInput = {
    where: ClientesWhereUniqueInput
    create: XOR<ClientesCreateWithoutUsuarioInput, ClientesUncheckedCreateWithoutUsuarioInput>
  }

  export type ClientesCreateManyUsuarioInputEnvelope = {
    data: ClientesCreateManyUsuarioInput | ClientesCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type HistoricoCreateWithoutUsuarioInput = {
    numeroTelefone?: string | null
    nome?: string | null
    mensagem?: string | null
  }

  export type HistoricoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    numeroTelefone?: string | null
    nome?: string | null
    mensagem?: string | null
  }

  export type HistoricoCreateOrConnectWithoutUsuarioInput = {
    where: HistoricoWhereUniqueInput
    create: XOR<HistoricoCreateWithoutUsuarioInput, HistoricoUncheckedCreateWithoutUsuarioInput>
  }

  export type HistoricoCreateManyUsuarioInputEnvelope = {
    data: HistoricoCreateManyUsuarioInput | HistoricoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type AgendaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: AgendaWhereUniqueInput
    update: XOR<AgendaUpdateWithoutUsuarioInput, AgendaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<AgendaCreateWithoutUsuarioInput, AgendaUncheckedCreateWithoutUsuarioInput>
  }

  export type AgendaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: AgendaWhereUniqueInput
    data: XOR<AgendaUpdateWithoutUsuarioInput, AgendaUncheckedUpdateWithoutUsuarioInput>
  }

  export type AgendaUpdateManyWithWhereWithoutUsuarioInput = {
    where: AgendaScalarWhereInput
    data: XOR<AgendaUpdateManyMutationInput, AgendaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type AgendaScalarWhereInput = {
    AND?: AgendaScalarWhereInput | AgendaScalarWhereInput[]
    OR?: AgendaScalarWhereInput[]
    NOT?: AgendaScalarWhereInput | AgendaScalarWhereInput[]
    id?: IntFilter<"Agenda"> | number
    nome?: StringNullableFilter<"Agenda"> | string | null
    telefone?: StringNullableFilter<"Agenda"> | string | null
    endereco?: StringNullableFilter<"Agenda"> | string | null
    tipo?: StringNullableFilter<"Agenda"> | string | null
    data?: DateTimeNullableFilter<"Agenda"> | Date | string | null
    descricao?: StringNullableFilter<"Agenda"> | string | null
    status?: StringNullableFilter<"Agenda"> | string | null
    createdAt?: DateTimeFilter<"Agenda"> | Date | string
    usuarioId?: IntFilter<"Agenda"> | number
  }

  export type ClientesUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: ClientesWhereUniqueInput
    update: XOR<ClientesUpdateWithoutUsuarioInput, ClientesUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ClientesCreateWithoutUsuarioInput, ClientesUncheckedCreateWithoutUsuarioInput>
  }

  export type ClientesUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: ClientesWhereUniqueInput
    data: XOR<ClientesUpdateWithoutUsuarioInput, ClientesUncheckedUpdateWithoutUsuarioInput>
  }

  export type ClientesUpdateManyWithWhereWithoutUsuarioInput = {
    where: ClientesScalarWhereInput
    data: XOR<ClientesUpdateManyMutationInput, ClientesUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type ClientesScalarWhereInput = {
    AND?: ClientesScalarWhereInput | ClientesScalarWhereInput[]
    OR?: ClientesScalarWhereInput[]
    NOT?: ClientesScalarWhereInput | ClientesScalarWhereInput[]
    numeroTelefone?: StringNullableFilter<"Clientes"> | string | null
    nome?: StringNullableFilter<"Clientes"> | string | null
    endereco?: StringNullableFilter<"Clientes"> | string | null
    plano?: StringNullableFilter<"Clientes"> | string | null
    status?: StringNullableFilter<"Clientes"> | string | null
    cpf?: StringNullableFilter<"Clientes"> | string | null
    vencimento?: StringNullableFilter<"Clientes"> | string | null
    id?: IntFilter<"Clientes"> | number
    dataUltimoPagamento?: DateTimeNullableFilter<"Clientes"> | Date | string | null
    usuarioId?: IntFilter<"Clientes"> | number
  }

  export type HistoricoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: HistoricoWhereUniqueInput
    update: XOR<HistoricoUpdateWithoutUsuarioInput, HistoricoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<HistoricoCreateWithoutUsuarioInput, HistoricoUncheckedCreateWithoutUsuarioInput>
  }

  export type HistoricoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: HistoricoWhereUniqueInput
    data: XOR<HistoricoUpdateWithoutUsuarioInput, HistoricoUncheckedUpdateWithoutUsuarioInput>
  }

  export type HistoricoUpdateManyWithWhereWithoutUsuarioInput = {
    where: HistoricoScalarWhereInput
    data: XOR<HistoricoUpdateManyMutationInput, HistoricoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type HistoricoScalarWhereInput = {
    AND?: HistoricoScalarWhereInput | HistoricoScalarWhereInput[]
    OR?: HistoricoScalarWhereInput[]
    NOT?: HistoricoScalarWhereInput | HistoricoScalarWhereInput[]
    id?: IntFilter<"Historico"> | number
    numeroTelefone?: StringNullableFilter<"Historico"> | string | null
    nome?: StringNullableFilter<"Historico"> | string | null
    mensagem?: StringNullableFilter<"Historico"> | string | null
    usuarioId?: IntFilter<"Historico"> | number
  }

  export type UsuarioCreateWithoutClientesInput = {
    nome: string
    email: string
    senha: string
    agenda?: AgendaCreateNestedManyWithoutUsuarioInput
    historico?: HistoricoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutClientesInput = {
    id?: number
    nome: string
    email: string
    senha: string
    agenda?: AgendaUncheckedCreateNestedManyWithoutUsuarioInput
    historico?: HistoricoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutClientesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutClientesInput, UsuarioUncheckedCreateWithoutClientesInput>
  }

  export type UsuarioUpsertWithoutClientesInput = {
    update: XOR<UsuarioUpdateWithoutClientesInput, UsuarioUncheckedUpdateWithoutClientesInput>
    create: XOR<UsuarioCreateWithoutClientesInput, UsuarioUncheckedCreateWithoutClientesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutClientesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutClientesInput, UsuarioUncheckedUpdateWithoutClientesInput>
  }

  export type UsuarioUpdateWithoutClientesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    agenda?: AgendaUpdateManyWithoutUsuarioNestedInput
    historico?: HistoricoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutClientesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    agenda?: AgendaUncheckedUpdateManyWithoutUsuarioNestedInput
    historico?: HistoricoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateWithoutHistoricoInput = {
    nome: string
    email: string
    senha: string
    agenda?: AgendaCreateNestedManyWithoutUsuarioInput
    clientes?: ClientesCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutHistoricoInput = {
    id?: number
    nome: string
    email: string
    senha: string
    agenda?: AgendaUncheckedCreateNestedManyWithoutUsuarioInput
    clientes?: ClientesUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutHistoricoInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutHistoricoInput, UsuarioUncheckedCreateWithoutHistoricoInput>
  }

  export type UsuarioUpsertWithoutHistoricoInput = {
    update: XOR<UsuarioUpdateWithoutHistoricoInput, UsuarioUncheckedUpdateWithoutHistoricoInput>
    create: XOR<UsuarioCreateWithoutHistoricoInput, UsuarioUncheckedCreateWithoutHistoricoInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutHistoricoInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutHistoricoInput, UsuarioUncheckedUpdateWithoutHistoricoInput>
  }

  export type UsuarioUpdateWithoutHistoricoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    agenda?: AgendaUpdateManyWithoutUsuarioNestedInput
    clientes?: ClientesUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutHistoricoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    agenda?: AgendaUncheckedUpdateManyWithoutUsuarioNestedInput
    clientes?: ClientesUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateWithoutAgendaInput = {
    nome: string
    email: string
    senha: string
    clientes?: ClientesCreateNestedManyWithoutUsuarioInput
    historico?: HistoricoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutAgendaInput = {
    id?: number
    nome: string
    email: string
    senha: string
    clientes?: ClientesUncheckedCreateNestedManyWithoutUsuarioInput
    historico?: HistoricoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutAgendaInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutAgendaInput, UsuarioUncheckedCreateWithoutAgendaInput>
  }

  export type UsuarioUpsertWithoutAgendaInput = {
    update: XOR<UsuarioUpdateWithoutAgendaInput, UsuarioUncheckedUpdateWithoutAgendaInput>
    create: XOR<UsuarioCreateWithoutAgendaInput, UsuarioUncheckedCreateWithoutAgendaInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutAgendaInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutAgendaInput, UsuarioUncheckedUpdateWithoutAgendaInput>
  }

  export type UsuarioUpdateWithoutAgendaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    clientes?: ClientesUpdateManyWithoutUsuarioNestedInput
    historico?: HistoricoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutAgendaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    clientes?: ClientesUncheckedUpdateManyWithoutUsuarioNestedInput
    historico?: HistoricoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type AgendaCreateManyUsuarioInput = {
    id?: number
    nome?: string | null
    telefone?: string | null
    endereco?: string | null
    tipo?: string | null
    data?: Date | string | null
    descricao?: string | null
    status?: string | null
    createdAt?: Date | string
  }

  export type ClientesCreateManyUsuarioInput = {
    numeroTelefone?: string | null
    nome?: string | null
    endereco?: string | null
    plano?: string | null
    status?: string | null
    cpf?: string | null
    vencimento?: string | null
    id?: number
    dataUltimoPagamento?: Date | string | null
  }

  export type HistoricoCreateManyUsuarioInput = {
    id?: number
    numeroTelefone?: string | null
    nome?: string | null
    mensagem?: string | null
  }

  export type AgendaUpdateWithoutUsuarioInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgendaUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgendaUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientesUpdateWithoutUsuarioInput = {
    numeroTelefone?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    plano?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    vencimento?: NullableStringFieldUpdateOperationsInput | string | null
    dataUltimoPagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClientesUncheckedUpdateWithoutUsuarioInput = {
    numeroTelefone?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    plano?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    vencimento?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
    dataUltimoPagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClientesUncheckedUpdateManyWithoutUsuarioInput = {
    numeroTelefone?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    plano?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    vencimento?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
    dataUltimoPagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type HistoricoUpdateWithoutUsuarioInput = {
    numeroTelefone?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    mensagem?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HistoricoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    numeroTelefone?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    mensagem?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HistoricoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    numeroTelefone?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    mensagem?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UsuarioCountOutputTypeDefaultArgs instead
     */
    export type UsuarioCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsuarioCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsuarioDefaultArgs instead
     */
    export type UsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsuarioDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClientesDefaultArgs instead
     */
    export type ClientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClientesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HistoricoDefaultArgs instead
     */
    export type HistoricoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HistoricoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AgendaDefaultArgs instead
     */
    export type AgendaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AgendaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use dadosDefaultArgs instead
     */
    export type dadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = dadosDefaultArgs<ExtArgs>
    /**
     * @deprecated Use mensalixDefaultArgs instead
     */
    export type mensalixArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = mensalixDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}