
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Advisory
 * 
 */
export type Advisory = $Result.DefaultSelection<Prisma.$AdvisoryPayload>
/**
 * Model MarketPrice
 * 
 */
export type MarketPrice = $Result.DefaultSelection<Prisma.$MarketPricePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.advisory`: Exposes CRUD operations for the **Advisory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Advisories
    * const advisories = await prisma.advisory.findMany()
    * ```
    */
  get advisory(): Prisma.AdvisoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.marketPrice`: Exposes CRUD operations for the **MarketPrice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MarketPrices
    * const marketPrices = await prisma.marketPrice.findMany()
    * ```
    */
  get marketPrice(): Prisma.MarketPriceDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.6.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    Advisory: 'Advisory',
    MarketPrice: 'MarketPrice'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "advisory" | "marketPrice"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Advisory: {
        payload: Prisma.$AdvisoryPayload<ExtArgs>
        fields: Prisma.AdvisoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdvisoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvisoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdvisoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvisoryPayload>
          }
          findFirst: {
            args: Prisma.AdvisoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvisoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdvisoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvisoryPayload>
          }
          findMany: {
            args: Prisma.AdvisoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvisoryPayload>[]
          }
          create: {
            args: Prisma.AdvisoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvisoryPayload>
          }
          createMany: {
            args: Prisma.AdvisoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdvisoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvisoryPayload>[]
          }
          delete: {
            args: Prisma.AdvisoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvisoryPayload>
          }
          update: {
            args: Prisma.AdvisoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvisoryPayload>
          }
          deleteMany: {
            args: Prisma.AdvisoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdvisoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdvisoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvisoryPayload>[]
          }
          upsert: {
            args: Prisma.AdvisoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvisoryPayload>
          }
          aggregate: {
            args: Prisma.AdvisoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdvisory>
          }
          groupBy: {
            args: Prisma.AdvisoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdvisoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdvisoryCountArgs<ExtArgs>
            result: $Utils.Optional<AdvisoryCountAggregateOutputType> | number
          }
        }
      }
      MarketPrice: {
        payload: Prisma.$MarketPricePayload<ExtArgs>
        fields: Prisma.MarketPriceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MarketPriceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPricePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MarketPriceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPricePayload>
          }
          findFirst: {
            args: Prisma.MarketPriceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPricePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MarketPriceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPricePayload>
          }
          findMany: {
            args: Prisma.MarketPriceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPricePayload>[]
          }
          create: {
            args: Prisma.MarketPriceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPricePayload>
          }
          createMany: {
            args: Prisma.MarketPriceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MarketPriceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPricePayload>[]
          }
          delete: {
            args: Prisma.MarketPriceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPricePayload>
          }
          update: {
            args: Prisma.MarketPriceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPricePayload>
          }
          deleteMany: {
            args: Prisma.MarketPriceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MarketPriceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MarketPriceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPricePayload>[]
          }
          upsert: {
            args: Prisma.MarketPriceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPricePayload>
          }
          aggregate: {
            args: Prisma.MarketPriceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMarketPrice>
          }
          groupBy: {
            args: Prisma.MarketPriceGroupByArgs<ExtArgs>
            result: $Utils.Optional<MarketPriceGroupByOutputType>[]
          }
          count: {
            args: Prisma.MarketPriceCountArgs<ExtArgs>
            result: $Utils.Optional<MarketPriceCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    advisory?: AdvisoryOmit
    marketPrice?: MarketPriceOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    advisories: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    advisories?: boolean | UserCountOutputTypeCountAdvisoriesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAdvisoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdvisoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    location: string | null
    crops: string | null
    language: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    location: string | null
    crops: string | null
    language: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    location: number
    crops: number
    language: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    location?: true
    crops?: true
    language?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    location?: true
    crops?: true
    language?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    location?: true
    crops?: true
    language?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    phone: string | null
    location: string | null
    crops: string | null
    language: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    location?: boolean
    crops?: boolean
    language?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    advisories?: boolean | User$advisoriesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    location?: boolean
    crops?: boolean
    language?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    location?: boolean
    crops?: boolean
    language?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    location?: boolean
    crops?: boolean
    language?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "location" | "crops" | "language" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    advisories?: boolean | User$advisoriesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      advisories: Prisma.$AdvisoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      phone: string | null
      location: string | null
      crops: string | null
      language: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    advisories<T extends User$advisoriesArgs<ExtArgs> = {}>(args?: Subset<T, User$advisoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdvisoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly location: FieldRef<"User", 'String'>
    readonly crops: FieldRef<"User", 'String'>
    readonly language: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.advisories
   */
  export type User$advisoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advisory
     */
    select?: AdvisorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advisory
     */
    omit?: AdvisoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvisoryInclude<ExtArgs> | null
    where?: AdvisoryWhereInput
    orderBy?: AdvisoryOrderByWithRelationInput | AdvisoryOrderByWithRelationInput[]
    cursor?: AdvisoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdvisoryScalarFieldEnum | AdvisoryScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Advisory
   */

  export type AggregateAdvisory = {
    _count: AdvisoryCountAggregateOutputType | null
    _min: AdvisoryMinAggregateOutputType | null
    _max: AdvisoryMaxAggregateOutputType | null
  }

  export type AdvisoryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    title: string | null
    content: string | null
    read: boolean | null
    createdAt: Date | null
  }

  export type AdvisoryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    title: string | null
    content: string | null
    read: boolean | null
    createdAt: Date | null
  }

  export type AdvisoryCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    title: number
    content: number
    read: number
    createdAt: number
    _all: number
  }


  export type AdvisoryMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    title?: true
    content?: true
    read?: true
    createdAt?: true
  }

  export type AdvisoryMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    title?: true
    content?: true
    read?: true
    createdAt?: true
  }

  export type AdvisoryCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    title?: true
    content?: true
    read?: true
    createdAt?: true
    _all?: true
  }

  export type AdvisoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Advisory to aggregate.
     */
    where?: AdvisoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Advisories to fetch.
     */
    orderBy?: AdvisoryOrderByWithRelationInput | AdvisoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdvisoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Advisories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Advisories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Advisories
    **/
    _count?: true | AdvisoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdvisoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdvisoryMaxAggregateInputType
  }

  export type GetAdvisoryAggregateType<T extends AdvisoryAggregateArgs> = {
        [P in keyof T & keyof AggregateAdvisory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdvisory[P]>
      : GetScalarType<T[P], AggregateAdvisory[P]>
  }




  export type AdvisoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdvisoryWhereInput
    orderBy?: AdvisoryOrderByWithAggregationInput | AdvisoryOrderByWithAggregationInput[]
    by: AdvisoryScalarFieldEnum[] | AdvisoryScalarFieldEnum
    having?: AdvisoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdvisoryCountAggregateInputType | true
    _min?: AdvisoryMinAggregateInputType
    _max?: AdvisoryMaxAggregateInputType
  }

  export type AdvisoryGroupByOutputType = {
    id: string
    userId: string
    type: string
    title: string
    content: string
    read: boolean
    createdAt: Date
    _count: AdvisoryCountAggregateOutputType | null
    _min: AdvisoryMinAggregateOutputType | null
    _max: AdvisoryMaxAggregateOutputType | null
  }

  type GetAdvisoryGroupByPayload<T extends AdvisoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdvisoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdvisoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdvisoryGroupByOutputType[P]>
            : GetScalarType<T[P], AdvisoryGroupByOutputType[P]>
        }
      >
    >


  export type AdvisorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    content?: boolean
    read?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["advisory"]>

  export type AdvisorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    content?: boolean
    read?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["advisory"]>

  export type AdvisorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    content?: boolean
    read?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["advisory"]>

  export type AdvisorySelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    content?: boolean
    read?: boolean
    createdAt?: boolean
  }

  export type AdvisoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "title" | "content" | "read" | "createdAt", ExtArgs["result"]["advisory"]>
  export type AdvisoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AdvisoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AdvisoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AdvisoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Advisory"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      title: string
      content: string
      read: boolean
      createdAt: Date
    }, ExtArgs["result"]["advisory"]>
    composites: {}
  }

  type AdvisoryGetPayload<S extends boolean | null | undefined | AdvisoryDefaultArgs> = $Result.GetResult<Prisma.$AdvisoryPayload, S>

  type AdvisoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdvisoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdvisoryCountAggregateInputType | true
    }

  export interface AdvisoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Advisory'], meta: { name: 'Advisory' } }
    /**
     * Find zero or one Advisory that matches the filter.
     * @param {AdvisoryFindUniqueArgs} args - Arguments to find a Advisory
     * @example
     * // Get one Advisory
     * const advisory = await prisma.advisory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdvisoryFindUniqueArgs>(args: SelectSubset<T, AdvisoryFindUniqueArgs<ExtArgs>>): Prisma__AdvisoryClient<$Result.GetResult<Prisma.$AdvisoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Advisory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdvisoryFindUniqueOrThrowArgs} args - Arguments to find a Advisory
     * @example
     * // Get one Advisory
     * const advisory = await prisma.advisory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdvisoryFindUniqueOrThrowArgs>(args: SelectSubset<T, AdvisoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdvisoryClient<$Result.GetResult<Prisma.$AdvisoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Advisory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvisoryFindFirstArgs} args - Arguments to find a Advisory
     * @example
     * // Get one Advisory
     * const advisory = await prisma.advisory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdvisoryFindFirstArgs>(args?: SelectSubset<T, AdvisoryFindFirstArgs<ExtArgs>>): Prisma__AdvisoryClient<$Result.GetResult<Prisma.$AdvisoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Advisory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvisoryFindFirstOrThrowArgs} args - Arguments to find a Advisory
     * @example
     * // Get one Advisory
     * const advisory = await prisma.advisory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdvisoryFindFirstOrThrowArgs>(args?: SelectSubset<T, AdvisoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdvisoryClient<$Result.GetResult<Prisma.$AdvisoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Advisories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvisoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Advisories
     * const advisories = await prisma.advisory.findMany()
     * 
     * // Get first 10 Advisories
     * const advisories = await prisma.advisory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const advisoryWithIdOnly = await prisma.advisory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdvisoryFindManyArgs>(args?: SelectSubset<T, AdvisoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdvisoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Advisory.
     * @param {AdvisoryCreateArgs} args - Arguments to create a Advisory.
     * @example
     * // Create one Advisory
     * const Advisory = await prisma.advisory.create({
     *   data: {
     *     // ... data to create a Advisory
     *   }
     * })
     * 
     */
    create<T extends AdvisoryCreateArgs>(args: SelectSubset<T, AdvisoryCreateArgs<ExtArgs>>): Prisma__AdvisoryClient<$Result.GetResult<Prisma.$AdvisoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Advisories.
     * @param {AdvisoryCreateManyArgs} args - Arguments to create many Advisories.
     * @example
     * // Create many Advisories
     * const advisory = await prisma.advisory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdvisoryCreateManyArgs>(args?: SelectSubset<T, AdvisoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Advisories and returns the data saved in the database.
     * @param {AdvisoryCreateManyAndReturnArgs} args - Arguments to create many Advisories.
     * @example
     * // Create many Advisories
     * const advisory = await prisma.advisory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Advisories and only return the `id`
     * const advisoryWithIdOnly = await prisma.advisory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdvisoryCreateManyAndReturnArgs>(args?: SelectSubset<T, AdvisoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdvisoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Advisory.
     * @param {AdvisoryDeleteArgs} args - Arguments to delete one Advisory.
     * @example
     * // Delete one Advisory
     * const Advisory = await prisma.advisory.delete({
     *   where: {
     *     // ... filter to delete one Advisory
     *   }
     * })
     * 
     */
    delete<T extends AdvisoryDeleteArgs>(args: SelectSubset<T, AdvisoryDeleteArgs<ExtArgs>>): Prisma__AdvisoryClient<$Result.GetResult<Prisma.$AdvisoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Advisory.
     * @param {AdvisoryUpdateArgs} args - Arguments to update one Advisory.
     * @example
     * // Update one Advisory
     * const advisory = await prisma.advisory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdvisoryUpdateArgs>(args: SelectSubset<T, AdvisoryUpdateArgs<ExtArgs>>): Prisma__AdvisoryClient<$Result.GetResult<Prisma.$AdvisoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Advisories.
     * @param {AdvisoryDeleteManyArgs} args - Arguments to filter Advisories to delete.
     * @example
     * // Delete a few Advisories
     * const { count } = await prisma.advisory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdvisoryDeleteManyArgs>(args?: SelectSubset<T, AdvisoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Advisories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvisoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Advisories
     * const advisory = await prisma.advisory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdvisoryUpdateManyArgs>(args: SelectSubset<T, AdvisoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Advisories and returns the data updated in the database.
     * @param {AdvisoryUpdateManyAndReturnArgs} args - Arguments to update many Advisories.
     * @example
     * // Update many Advisories
     * const advisory = await prisma.advisory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Advisories and only return the `id`
     * const advisoryWithIdOnly = await prisma.advisory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdvisoryUpdateManyAndReturnArgs>(args: SelectSubset<T, AdvisoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdvisoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Advisory.
     * @param {AdvisoryUpsertArgs} args - Arguments to update or create a Advisory.
     * @example
     * // Update or create a Advisory
     * const advisory = await prisma.advisory.upsert({
     *   create: {
     *     // ... data to create a Advisory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Advisory we want to update
     *   }
     * })
     */
    upsert<T extends AdvisoryUpsertArgs>(args: SelectSubset<T, AdvisoryUpsertArgs<ExtArgs>>): Prisma__AdvisoryClient<$Result.GetResult<Prisma.$AdvisoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Advisories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvisoryCountArgs} args - Arguments to filter Advisories to count.
     * @example
     * // Count the number of Advisories
     * const count = await prisma.advisory.count({
     *   where: {
     *     // ... the filter for the Advisories we want to count
     *   }
     * })
    **/
    count<T extends AdvisoryCountArgs>(
      args?: Subset<T, AdvisoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdvisoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Advisory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvisoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdvisoryAggregateArgs>(args: Subset<T, AdvisoryAggregateArgs>): Prisma.PrismaPromise<GetAdvisoryAggregateType<T>>

    /**
     * Group by Advisory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvisoryGroupByArgs} args - Group by arguments.
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
      T extends AdvisoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdvisoryGroupByArgs['orderBy'] }
        : { orderBy?: AdvisoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdvisoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdvisoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Advisory model
   */
  readonly fields: AdvisoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Advisory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdvisoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Advisory model
   */
  interface AdvisoryFieldRefs {
    readonly id: FieldRef<"Advisory", 'String'>
    readonly userId: FieldRef<"Advisory", 'String'>
    readonly type: FieldRef<"Advisory", 'String'>
    readonly title: FieldRef<"Advisory", 'String'>
    readonly content: FieldRef<"Advisory", 'String'>
    readonly read: FieldRef<"Advisory", 'Boolean'>
    readonly createdAt: FieldRef<"Advisory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Advisory findUnique
   */
  export type AdvisoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advisory
     */
    select?: AdvisorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advisory
     */
    omit?: AdvisoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvisoryInclude<ExtArgs> | null
    /**
     * Filter, which Advisory to fetch.
     */
    where: AdvisoryWhereUniqueInput
  }

  /**
   * Advisory findUniqueOrThrow
   */
  export type AdvisoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advisory
     */
    select?: AdvisorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advisory
     */
    omit?: AdvisoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvisoryInclude<ExtArgs> | null
    /**
     * Filter, which Advisory to fetch.
     */
    where: AdvisoryWhereUniqueInput
  }

  /**
   * Advisory findFirst
   */
  export type AdvisoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advisory
     */
    select?: AdvisorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advisory
     */
    omit?: AdvisoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvisoryInclude<ExtArgs> | null
    /**
     * Filter, which Advisory to fetch.
     */
    where?: AdvisoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Advisories to fetch.
     */
    orderBy?: AdvisoryOrderByWithRelationInput | AdvisoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Advisories.
     */
    cursor?: AdvisoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Advisories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Advisories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Advisories.
     */
    distinct?: AdvisoryScalarFieldEnum | AdvisoryScalarFieldEnum[]
  }

  /**
   * Advisory findFirstOrThrow
   */
  export type AdvisoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advisory
     */
    select?: AdvisorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advisory
     */
    omit?: AdvisoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvisoryInclude<ExtArgs> | null
    /**
     * Filter, which Advisory to fetch.
     */
    where?: AdvisoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Advisories to fetch.
     */
    orderBy?: AdvisoryOrderByWithRelationInput | AdvisoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Advisories.
     */
    cursor?: AdvisoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Advisories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Advisories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Advisories.
     */
    distinct?: AdvisoryScalarFieldEnum | AdvisoryScalarFieldEnum[]
  }

  /**
   * Advisory findMany
   */
  export type AdvisoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advisory
     */
    select?: AdvisorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advisory
     */
    omit?: AdvisoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvisoryInclude<ExtArgs> | null
    /**
     * Filter, which Advisories to fetch.
     */
    where?: AdvisoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Advisories to fetch.
     */
    orderBy?: AdvisoryOrderByWithRelationInput | AdvisoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Advisories.
     */
    cursor?: AdvisoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Advisories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Advisories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Advisories.
     */
    distinct?: AdvisoryScalarFieldEnum | AdvisoryScalarFieldEnum[]
  }

  /**
   * Advisory create
   */
  export type AdvisoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advisory
     */
    select?: AdvisorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advisory
     */
    omit?: AdvisoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvisoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Advisory.
     */
    data: XOR<AdvisoryCreateInput, AdvisoryUncheckedCreateInput>
  }

  /**
   * Advisory createMany
   */
  export type AdvisoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Advisories.
     */
    data: AdvisoryCreateManyInput | AdvisoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Advisory createManyAndReturn
   */
  export type AdvisoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advisory
     */
    select?: AdvisorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Advisory
     */
    omit?: AdvisoryOmit<ExtArgs> | null
    /**
     * The data used to create many Advisories.
     */
    data: AdvisoryCreateManyInput | AdvisoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvisoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Advisory update
   */
  export type AdvisoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advisory
     */
    select?: AdvisorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advisory
     */
    omit?: AdvisoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvisoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Advisory.
     */
    data: XOR<AdvisoryUpdateInput, AdvisoryUncheckedUpdateInput>
    /**
     * Choose, which Advisory to update.
     */
    where: AdvisoryWhereUniqueInput
  }

  /**
   * Advisory updateMany
   */
  export type AdvisoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Advisories.
     */
    data: XOR<AdvisoryUpdateManyMutationInput, AdvisoryUncheckedUpdateManyInput>
    /**
     * Filter which Advisories to update
     */
    where?: AdvisoryWhereInput
    /**
     * Limit how many Advisories to update.
     */
    limit?: number
  }

  /**
   * Advisory updateManyAndReturn
   */
  export type AdvisoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advisory
     */
    select?: AdvisorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Advisory
     */
    omit?: AdvisoryOmit<ExtArgs> | null
    /**
     * The data used to update Advisories.
     */
    data: XOR<AdvisoryUpdateManyMutationInput, AdvisoryUncheckedUpdateManyInput>
    /**
     * Filter which Advisories to update
     */
    where?: AdvisoryWhereInput
    /**
     * Limit how many Advisories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvisoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Advisory upsert
   */
  export type AdvisoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advisory
     */
    select?: AdvisorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advisory
     */
    omit?: AdvisoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvisoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Advisory to update in case it exists.
     */
    where: AdvisoryWhereUniqueInput
    /**
     * In case the Advisory found by the `where` argument doesn't exist, create a new Advisory with this data.
     */
    create: XOR<AdvisoryCreateInput, AdvisoryUncheckedCreateInput>
    /**
     * In case the Advisory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdvisoryUpdateInput, AdvisoryUncheckedUpdateInput>
  }

  /**
   * Advisory delete
   */
  export type AdvisoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advisory
     */
    select?: AdvisorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advisory
     */
    omit?: AdvisoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvisoryInclude<ExtArgs> | null
    /**
     * Filter which Advisory to delete.
     */
    where: AdvisoryWhereUniqueInput
  }

  /**
   * Advisory deleteMany
   */
  export type AdvisoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Advisories to delete
     */
    where?: AdvisoryWhereInput
    /**
     * Limit how many Advisories to delete.
     */
    limit?: number
  }

  /**
   * Advisory without action
   */
  export type AdvisoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advisory
     */
    select?: AdvisorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advisory
     */
    omit?: AdvisoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvisoryInclude<ExtArgs> | null
  }


  /**
   * Model MarketPrice
   */

  export type AggregateMarketPrice = {
    _count: MarketPriceCountAggregateOutputType | null
    _avg: MarketPriceAvgAggregateOutputType | null
    _sum: MarketPriceSumAggregateOutputType | null
    _min: MarketPriceMinAggregateOutputType | null
    _max: MarketPriceMaxAggregateOutputType | null
  }

  export type MarketPriceAvgAggregateOutputType = {
    price: number | null
  }

  export type MarketPriceSumAggregateOutputType = {
    price: number | null
  }

  export type MarketPriceMinAggregateOutputType = {
    id: string | null
    crop: string | null
    mandi: string | null
    price: number | null
    unit: string | null
    trend: string | null
    recordedAt: Date | null
  }

  export type MarketPriceMaxAggregateOutputType = {
    id: string | null
    crop: string | null
    mandi: string | null
    price: number | null
    unit: string | null
    trend: string | null
    recordedAt: Date | null
  }

  export type MarketPriceCountAggregateOutputType = {
    id: number
    crop: number
    mandi: number
    price: number
    unit: number
    trend: number
    recordedAt: number
    _all: number
  }


  export type MarketPriceAvgAggregateInputType = {
    price?: true
  }

  export type MarketPriceSumAggregateInputType = {
    price?: true
  }

  export type MarketPriceMinAggregateInputType = {
    id?: true
    crop?: true
    mandi?: true
    price?: true
    unit?: true
    trend?: true
    recordedAt?: true
  }

  export type MarketPriceMaxAggregateInputType = {
    id?: true
    crop?: true
    mandi?: true
    price?: true
    unit?: true
    trend?: true
    recordedAt?: true
  }

  export type MarketPriceCountAggregateInputType = {
    id?: true
    crop?: true
    mandi?: true
    price?: true
    unit?: true
    trend?: true
    recordedAt?: true
    _all?: true
  }

  export type MarketPriceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MarketPrice to aggregate.
     */
    where?: MarketPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketPrices to fetch.
     */
    orderBy?: MarketPriceOrderByWithRelationInput | MarketPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MarketPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketPrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MarketPrices
    **/
    _count?: true | MarketPriceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MarketPriceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MarketPriceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarketPriceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarketPriceMaxAggregateInputType
  }

  export type GetMarketPriceAggregateType<T extends MarketPriceAggregateArgs> = {
        [P in keyof T & keyof AggregateMarketPrice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarketPrice[P]>
      : GetScalarType<T[P], AggregateMarketPrice[P]>
  }




  export type MarketPriceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarketPriceWhereInput
    orderBy?: MarketPriceOrderByWithAggregationInput | MarketPriceOrderByWithAggregationInput[]
    by: MarketPriceScalarFieldEnum[] | MarketPriceScalarFieldEnum
    having?: MarketPriceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarketPriceCountAggregateInputType | true
    _avg?: MarketPriceAvgAggregateInputType
    _sum?: MarketPriceSumAggregateInputType
    _min?: MarketPriceMinAggregateInputType
    _max?: MarketPriceMaxAggregateInputType
  }

  export type MarketPriceGroupByOutputType = {
    id: string
    crop: string
    mandi: string
    price: number
    unit: string
    trend: string
    recordedAt: Date
    _count: MarketPriceCountAggregateOutputType | null
    _avg: MarketPriceAvgAggregateOutputType | null
    _sum: MarketPriceSumAggregateOutputType | null
    _min: MarketPriceMinAggregateOutputType | null
    _max: MarketPriceMaxAggregateOutputType | null
  }

  type GetMarketPriceGroupByPayload<T extends MarketPriceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarketPriceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarketPriceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarketPriceGroupByOutputType[P]>
            : GetScalarType<T[P], MarketPriceGroupByOutputType[P]>
        }
      >
    >


  export type MarketPriceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    crop?: boolean
    mandi?: boolean
    price?: boolean
    unit?: boolean
    trend?: boolean
    recordedAt?: boolean
  }, ExtArgs["result"]["marketPrice"]>

  export type MarketPriceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    crop?: boolean
    mandi?: boolean
    price?: boolean
    unit?: boolean
    trend?: boolean
    recordedAt?: boolean
  }, ExtArgs["result"]["marketPrice"]>

  export type MarketPriceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    crop?: boolean
    mandi?: boolean
    price?: boolean
    unit?: boolean
    trend?: boolean
    recordedAt?: boolean
  }, ExtArgs["result"]["marketPrice"]>

  export type MarketPriceSelectScalar = {
    id?: boolean
    crop?: boolean
    mandi?: boolean
    price?: boolean
    unit?: boolean
    trend?: boolean
    recordedAt?: boolean
  }

  export type MarketPriceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "crop" | "mandi" | "price" | "unit" | "trend" | "recordedAt", ExtArgs["result"]["marketPrice"]>

  export type $MarketPricePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MarketPrice"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      crop: string
      mandi: string
      price: number
      unit: string
      trend: string
      recordedAt: Date
    }, ExtArgs["result"]["marketPrice"]>
    composites: {}
  }

  type MarketPriceGetPayload<S extends boolean | null | undefined | MarketPriceDefaultArgs> = $Result.GetResult<Prisma.$MarketPricePayload, S>

  type MarketPriceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MarketPriceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MarketPriceCountAggregateInputType | true
    }

  export interface MarketPriceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MarketPrice'], meta: { name: 'MarketPrice' } }
    /**
     * Find zero or one MarketPrice that matches the filter.
     * @param {MarketPriceFindUniqueArgs} args - Arguments to find a MarketPrice
     * @example
     * // Get one MarketPrice
     * const marketPrice = await prisma.marketPrice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MarketPriceFindUniqueArgs>(args: SelectSubset<T, MarketPriceFindUniqueArgs<ExtArgs>>): Prisma__MarketPriceClient<$Result.GetResult<Prisma.$MarketPricePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MarketPrice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MarketPriceFindUniqueOrThrowArgs} args - Arguments to find a MarketPrice
     * @example
     * // Get one MarketPrice
     * const marketPrice = await prisma.marketPrice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MarketPriceFindUniqueOrThrowArgs>(args: SelectSubset<T, MarketPriceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MarketPriceClient<$Result.GetResult<Prisma.$MarketPricePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MarketPrice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketPriceFindFirstArgs} args - Arguments to find a MarketPrice
     * @example
     * // Get one MarketPrice
     * const marketPrice = await prisma.marketPrice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MarketPriceFindFirstArgs>(args?: SelectSubset<T, MarketPriceFindFirstArgs<ExtArgs>>): Prisma__MarketPriceClient<$Result.GetResult<Prisma.$MarketPricePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MarketPrice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketPriceFindFirstOrThrowArgs} args - Arguments to find a MarketPrice
     * @example
     * // Get one MarketPrice
     * const marketPrice = await prisma.marketPrice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MarketPriceFindFirstOrThrowArgs>(args?: SelectSubset<T, MarketPriceFindFirstOrThrowArgs<ExtArgs>>): Prisma__MarketPriceClient<$Result.GetResult<Prisma.$MarketPricePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MarketPrices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketPriceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MarketPrices
     * const marketPrices = await prisma.marketPrice.findMany()
     * 
     * // Get first 10 MarketPrices
     * const marketPrices = await prisma.marketPrice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const marketPriceWithIdOnly = await prisma.marketPrice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MarketPriceFindManyArgs>(args?: SelectSubset<T, MarketPriceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketPricePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MarketPrice.
     * @param {MarketPriceCreateArgs} args - Arguments to create a MarketPrice.
     * @example
     * // Create one MarketPrice
     * const MarketPrice = await prisma.marketPrice.create({
     *   data: {
     *     // ... data to create a MarketPrice
     *   }
     * })
     * 
     */
    create<T extends MarketPriceCreateArgs>(args: SelectSubset<T, MarketPriceCreateArgs<ExtArgs>>): Prisma__MarketPriceClient<$Result.GetResult<Prisma.$MarketPricePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MarketPrices.
     * @param {MarketPriceCreateManyArgs} args - Arguments to create many MarketPrices.
     * @example
     * // Create many MarketPrices
     * const marketPrice = await prisma.marketPrice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MarketPriceCreateManyArgs>(args?: SelectSubset<T, MarketPriceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MarketPrices and returns the data saved in the database.
     * @param {MarketPriceCreateManyAndReturnArgs} args - Arguments to create many MarketPrices.
     * @example
     * // Create many MarketPrices
     * const marketPrice = await prisma.marketPrice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MarketPrices and only return the `id`
     * const marketPriceWithIdOnly = await prisma.marketPrice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MarketPriceCreateManyAndReturnArgs>(args?: SelectSubset<T, MarketPriceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketPricePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MarketPrice.
     * @param {MarketPriceDeleteArgs} args - Arguments to delete one MarketPrice.
     * @example
     * // Delete one MarketPrice
     * const MarketPrice = await prisma.marketPrice.delete({
     *   where: {
     *     // ... filter to delete one MarketPrice
     *   }
     * })
     * 
     */
    delete<T extends MarketPriceDeleteArgs>(args: SelectSubset<T, MarketPriceDeleteArgs<ExtArgs>>): Prisma__MarketPriceClient<$Result.GetResult<Prisma.$MarketPricePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MarketPrice.
     * @param {MarketPriceUpdateArgs} args - Arguments to update one MarketPrice.
     * @example
     * // Update one MarketPrice
     * const marketPrice = await prisma.marketPrice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MarketPriceUpdateArgs>(args: SelectSubset<T, MarketPriceUpdateArgs<ExtArgs>>): Prisma__MarketPriceClient<$Result.GetResult<Prisma.$MarketPricePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MarketPrices.
     * @param {MarketPriceDeleteManyArgs} args - Arguments to filter MarketPrices to delete.
     * @example
     * // Delete a few MarketPrices
     * const { count } = await prisma.marketPrice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MarketPriceDeleteManyArgs>(args?: SelectSubset<T, MarketPriceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MarketPrices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketPriceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MarketPrices
     * const marketPrice = await prisma.marketPrice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MarketPriceUpdateManyArgs>(args: SelectSubset<T, MarketPriceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MarketPrices and returns the data updated in the database.
     * @param {MarketPriceUpdateManyAndReturnArgs} args - Arguments to update many MarketPrices.
     * @example
     * // Update many MarketPrices
     * const marketPrice = await prisma.marketPrice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MarketPrices and only return the `id`
     * const marketPriceWithIdOnly = await prisma.marketPrice.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MarketPriceUpdateManyAndReturnArgs>(args: SelectSubset<T, MarketPriceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketPricePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MarketPrice.
     * @param {MarketPriceUpsertArgs} args - Arguments to update or create a MarketPrice.
     * @example
     * // Update or create a MarketPrice
     * const marketPrice = await prisma.marketPrice.upsert({
     *   create: {
     *     // ... data to create a MarketPrice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MarketPrice we want to update
     *   }
     * })
     */
    upsert<T extends MarketPriceUpsertArgs>(args: SelectSubset<T, MarketPriceUpsertArgs<ExtArgs>>): Prisma__MarketPriceClient<$Result.GetResult<Prisma.$MarketPricePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MarketPrices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketPriceCountArgs} args - Arguments to filter MarketPrices to count.
     * @example
     * // Count the number of MarketPrices
     * const count = await prisma.marketPrice.count({
     *   where: {
     *     // ... the filter for the MarketPrices we want to count
     *   }
     * })
    **/
    count<T extends MarketPriceCountArgs>(
      args?: Subset<T, MarketPriceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarketPriceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MarketPrice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketPriceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MarketPriceAggregateArgs>(args: Subset<T, MarketPriceAggregateArgs>): Prisma.PrismaPromise<GetMarketPriceAggregateType<T>>

    /**
     * Group by MarketPrice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketPriceGroupByArgs} args - Group by arguments.
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
      T extends MarketPriceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MarketPriceGroupByArgs['orderBy'] }
        : { orderBy?: MarketPriceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MarketPriceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarketPriceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MarketPrice model
   */
  readonly fields: MarketPriceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MarketPrice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MarketPriceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the MarketPrice model
   */
  interface MarketPriceFieldRefs {
    readonly id: FieldRef<"MarketPrice", 'String'>
    readonly crop: FieldRef<"MarketPrice", 'String'>
    readonly mandi: FieldRef<"MarketPrice", 'String'>
    readonly price: FieldRef<"MarketPrice", 'Float'>
    readonly unit: FieldRef<"MarketPrice", 'String'>
    readonly trend: FieldRef<"MarketPrice", 'String'>
    readonly recordedAt: FieldRef<"MarketPrice", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MarketPrice findUnique
   */
  export type MarketPriceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketPrice
     */
    select?: MarketPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketPrice
     */
    omit?: MarketPriceOmit<ExtArgs> | null
    /**
     * Filter, which MarketPrice to fetch.
     */
    where: MarketPriceWhereUniqueInput
  }

  /**
   * MarketPrice findUniqueOrThrow
   */
  export type MarketPriceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketPrice
     */
    select?: MarketPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketPrice
     */
    omit?: MarketPriceOmit<ExtArgs> | null
    /**
     * Filter, which MarketPrice to fetch.
     */
    where: MarketPriceWhereUniqueInput
  }

  /**
   * MarketPrice findFirst
   */
  export type MarketPriceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketPrice
     */
    select?: MarketPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketPrice
     */
    omit?: MarketPriceOmit<ExtArgs> | null
    /**
     * Filter, which MarketPrice to fetch.
     */
    where?: MarketPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketPrices to fetch.
     */
    orderBy?: MarketPriceOrderByWithRelationInput | MarketPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MarketPrices.
     */
    cursor?: MarketPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketPrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarketPrices.
     */
    distinct?: MarketPriceScalarFieldEnum | MarketPriceScalarFieldEnum[]
  }

  /**
   * MarketPrice findFirstOrThrow
   */
  export type MarketPriceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketPrice
     */
    select?: MarketPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketPrice
     */
    omit?: MarketPriceOmit<ExtArgs> | null
    /**
     * Filter, which MarketPrice to fetch.
     */
    where?: MarketPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketPrices to fetch.
     */
    orderBy?: MarketPriceOrderByWithRelationInput | MarketPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MarketPrices.
     */
    cursor?: MarketPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketPrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarketPrices.
     */
    distinct?: MarketPriceScalarFieldEnum | MarketPriceScalarFieldEnum[]
  }

  /**
   * MarketPrice findMany
   */
  export type MarketPriceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketPrice
     */
    select?: MarketPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketPrice
     */
    omit?: MarketPriceOmit<ExtArgs> | null
    /**
     * Filter, which MarketPrices to fetch.
     */
    where?: MarketPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketPrices to fetch.
     */
    orderBy?: MarketPriceOrderByWithRelationInput | MarketPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MarketPrices.
     */
    cursor?: MarketPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketPrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarketPrices.
     */
    distinct?: MarketPriceScalarFieldEnum | MarketPriceScalarFieldEnum[]
  }

  /**
   * MarketPrice create
   */
  export type MarketPriceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketPrice
     */
    select?: MarketPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketPrice
     */
    omit?: MarketPriceOmit<ExtArgs> | null
    /**
     * The data needed to create a MarketPrice.
     */
    data: XOR<MarketPriceCreateInput, MarketPriceUncheckedCreateInput>
  }

  /**
   * MarketPrice createMany
   */
  export type MarketPriceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MarketPrices.
     */
    data: MarketPriceCreateManyInput | MarketPriceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MarketPrice createManyAndReturn
   */
  export type MarketPriceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketPrice
     */
    select?: MarketPriceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MarketPrice
     */
    omit?: MarketPriceOmit<ExtArgs> | null
    /**
     * The data used to create many MarketPrices.
     */
    data: MarketPriceCreateManyInput | MarketPriceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MarketPrice update
   */
  export type MarketPriceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketPrice
     */
    select?: MarketPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketPrice
     */
    omit?: MarketPriceOmit<ExtArgs> | null
    /**
     * The data needed to update a MarketPrice.
     */
    data: XOR<MarketPriceUpdateInput, MarketPriceUncheckedUpdateInput>
    /**
     * Choose, which MarketPrice to update.
     */
    where: MarketPriceWhereUniqueInput
  }

  /**
   * MarketPrice updateMany
   */
  export type MarketPriceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MarketPrices.
     */
    data: XOR<MarketPriceUpdateManyMutationInput, MarketPriceUncheckedUpdateManyInput>
    /**
     * Filter which MarketPrices to update
     */
    where?: MarketPriceWhereInput
    /**
     * Limit how many MarketPrices to update.
     */
    limit?: number
  }

  /**
   * MarketPrice updateManyAndReturn
   */
  export type MarketPriceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketPrice
     */
    select?: MarketPriceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MarketPrice
     */
    omit?: MarketPriceOmit<ExtArgs> | null
    /**
     * The data used to update MarketPrices.
     */
    data: XOR<MarketPriceUpdateManyMutationInput, MarketPriceUncheckedUpdateManyInput>
    /**
     * Filter which MarketPrices to update
     */
    where?: MarketPriceWhereInput
    /**
     * Limit how many MarketPrices to update.
     */
    limit?: number
  }

  /**
   * MarketPrice upsert
   */
  export type MarketPriceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketPrice
     */
    select?: MarketPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketPrice
     */
    omit?: MarketPriceOmit<ExtArgs> | null
    /**
     * The filter to search for the MarketPrice to update in case it exists.
     */
    where: MarketPriceWhereUniqueInput
    /**
     * In case the MarketPrice found by the `where` argument doesn't exist, create a new MarketPrice with this data.
     */
    create: XOR<MarketPriceCreateInput, MarketPriceUncheckedCreateInput>
    /**
     * In case the MarketPrice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MarketPriceUpdateInput, MarketPriceUncheckedUpdateInput>
  }

  /**
   * MarketPrice delete
   */
  export type MarketPriceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketPrice
     */
    select?: MarketPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketPrice
     */
    omit?: MarketPriceOmit<ExtArgs> | null
    /**
     * Filter which MarketPrice to delete.
     */
    where: MarketPriceWhereUniqueInput
  }

  /**
   * MarketPrice deleteMany
   */
  export type MarketPriceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MarketPrices to delete
     */
    where?: MarketPriceWhereInput
    /**
     * Limit how many MarketPrices to delete.
     */
    limit?: number
  }

  /**
   * MarketPrice without action
   */
  export type MarketPriceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketPrice
     */
    select?: MarketPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketPrice
     */
    omit?: MarketPriceOmit<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    location: 'location',
    crops: 'crops',
    language: 'language',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AdvisoryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    title: 'title',
    content: 'content',
    read: 'read',
    createdAt: 'createdAt'
  };

  export type AdvisoryScalarFieldEnum = (typeof AdvisoryScalarFieldEnum)[keyof typeof AdvisoryScalarFieldEnum]


  export const MarketPriceScalarFieldEnum: {
    id: 'id',
    crop: 'crop',
    mandi: 'mandi',
    price: 'price',
    unit: 'unit',
    trend: 'trend',
    recordedAt: 'recordedAt'
  };

  export type MarketPriceScalarFieldEnum = (typeof MarketPriceScalarFieldEnum)[keyof typeof MarketPriceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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


  /**
   * Field references
   */


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    location?: StringNullableFilter<"User"> | string | null
    crops?: StringNullableFilter<"User"> | string | null
    language?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    advisories?: AdvisoryListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    crops?: SortOrderInput | SortOrder
    language?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    advisories?: AdvisoryOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    location?: StringNullableFilter<"User"> | string | null
    crops?: StringNullableFilter<"User"> | string | null
    language?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    advisories?: AdvisoryListRelationFilter
  }, "id" | "email" | "phone">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    crops?: SortOrderInput | SortOrder
    language?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    location?: StringNullableWithAggregatesFilter<"User"> | string | null
    crops?: StringNullableWithAggregatesFilter<"User"> | string | null
    language?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AdvisoryWhereInput = {
    AND?: AdvisoryWhereInput | AdvisoryWhereInput[]
    OR?: AdvisoryWhereInput[]
    NOT?: AdvisoryWhereInput | AdvisoryWhereInput[]
    id?: StringFilter<"Advisory"> | string
    userId?: StringFilter<"Advisory"> | string
    type?: StringFilter<"Advisory"> | string
    title?: StringFilter<"Advisory"> | string
    content?: StringFilter<"Advisory"> | string
    read?: BoolFilter<"Advisory"> | boolean
    createdAt?: DateTimeFilter<"Advisory"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AdvisoryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    content?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AdvisoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AdvisoryWhereInput | AdvisoryWhereInput[]
    OR?: AdvisoryWhereInput[]
    NOT?: AdvisoryWhereInput | AdvisoryWhereInput[]
    userId?: StringFilter<"Advisory"> | string
    type?: StringFilter<"Advisory"> | string
    title?: StringFilter<"Advisory"> | string
    content?: StringFilter<"Advisory"> | string
    read?: BoolFilter<"Advisory"> | boolean
    createdAt?: DateTimeFilter<"Advisory"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AdvisoryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    content?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    _count?: AdvisoryCountOrderByAggregateInput
    _max?: AdvisoryMaxOrderByAggregateInput
    _min?: AdvisoryMinOrderByAggregateInput
  }

  export type AdvisoryScalarWhereWithAggregatesInput = {
    AND?: AdvisoryScalarWhereWithAggregatesInput | AdvisoryScalarWhereWithAggregatesInput[]
    OR?: AdvisoryScalarWhereWithAggregatesInput[]
    NOT?: AdvisoryScalarWhereWithAggregatesInput | AdvisoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Advisory"> | string
    userId?: StringWithAggregatesFilter<"Advisory"> | string
    type?: StringWithAggregatesFilter<"Advisory"> | string
    title?: StringWithAggregatesFilter<"Advisory"> | string
    content?: StringWithAggregatesFilter<"Advisory"> | string
    read?: BoolWithAggregatesFilter<"Advisory"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Advisory"> | Date | string
  }

  export type MarketPriceWhereInput = {
    AND?: MarketPriceWhereInput | MarketPriceWhereInput[]
    OR?: MarketPriceWhereInput[]
    NOT?: MarketPriceWhereInput | MarketPriceWhereInput[]
    id?: StringFilter<"MarketPrice"> | string
    crop?: StringFilter<"MarketPrice"> | string
    mandi?: StringFilter<"MarketPrice"> | string
    price?: FloatFilter<"MarketPrice"> | number
    unit?: StringFilter<"MarketPrice"> | string
    trend?: StringFilter<"MarketPrice"> | string
    recordedAt?: DateTimeFilter<"MarketPrice"> | Date | string
  }

  export type MarketPriceOrderByWithRelationInput = {
    id?: SortOrder
    crop?: SortOrder
    mandi?: SortOrder
    price?: SortOrder
    unit?: SortOrder
    trend?: SortOrder
    recordedAt?: SortOrder
  }

  export type MarketPriceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MarketPriceWhereInput | MarketPriceWhereInput[]
    OR?: MarketPriceWhereInput[]
    NOT?: MarketPriceWhereInput | MarketPriceWhereInput[]
    crop?: StringFilter<"MarketPrice"> | string
    mandi?: StringFilter<"MarketPrice"> | string
    price?: FloatFilter<"MarketPrice"> | number
    unit?: StringFilter<"MarketPrice"> | string
    trend?: StringFilter<"MarketPrice"> | string
    recordedAt?: DateTimeFilter<"MarketPrice"> | Date | string
  }, "id">

  export type MarketPriceOrderByWithAggregationInput = {
    id?: SortOrder
    crop?: SortOrder
    mandi?: SortOrder
    price?: SortOrder
    unit?: SortOrder
    trend?: SortOrder
    recordedAt?: SortOrder
    _count?: MarketPriceCountOrderByAggregateInput
    _avg?: MarketPriceAvgOrderByAggregateInput
    _max?: MarketPriceMaxOrderByAggregateInput
    _min?: MarketPriceMinOrderByAggregateInput
    _sum?: MarketPriceSumOrderByAggregateInput
  }

  export type MarketPriceScalarWhereWithAggregatesInput = {
    AND?: MarketPriceScalarWhereWithAggregatesInput | MarketPriceScalarWhereWithAggregatesInput[]
    OR?: MarketPriceScalarWhereWithAggregatesInput[]
    NOT?: MarketPriceScalarWhereWithAggregatesInput | MarketPriceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MarketPrice"> | string
    crop?: StringWithAggregatesFilter<"MarketPrice"> | string
    mandi?: StringWithAggregatesFilter<"MarketPrice"> | string
    price?: FloatWithAggregatesFilter<"MarketPrice"> | number
    unit?: StringWithAggregatesFilter<"MarketPrice"> | string
    trend?: StringWithAggregatesFilter<"MarketPrice"> | string
    recordedAt?: DateTimeWithAggregatesFilter<"MarketPrice"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    phone?: string | null
    location?: string | null
    crops?: string | null
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    advisories?: AdvisoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    phone?: string | null
    location?: string | null
    crops?: string | null
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    advisories?: AdvisoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    crops?: NullableStringFieldUpdateOperationsInput | string | null
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    advisories?: AdvisoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    crops?: NullableStringFieldUpdateOperationsInput | string | null
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    advisories?: AdvisoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    phone?: string | null
    location?: string | null
    crops?: string | null
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    crops?: NullableStringFieldUpdateOperationsInput | string | null
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    crops?: NullableStringFieldUpdateOperationsInput | string | null
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdvisoryCreateInput = {
    id?: string
    type: string
    title: string
    content: string
    read?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAdvisoriesInput
  }

  export type AdvisoryUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    title: string
    content: string
    read?: boolean
    createdAt?: Date | string
  }

  export type AdvisoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAdvisoriesNestedInput
  }

  export type AdvisoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdvisoryCreateManyInput = {
    id?: string
    userId: string
    type: string
    title: string
    content: string
    read?: boolean
    createdAt?: Date | string
  }

  export type AdvisoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdvisoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketPriceCreateInput = {
    id?: string
    crop: string
    mandi: string
    price: number
    unit: string
    trend: string
    recordedAt?: Date | string
  }

  export type MarketPriceUncheckedCreateInput = {
    id?: string
    crop: string
    mandi: string
    price: number
    unit: string
    trend: string
    recordedAt?: Date | string
  }

  export type MarketPriceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    crop?: StringFieldUpdateOperationsInput | string
    mandi?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    trend?: StringFieldUpdateOperationsInput | string
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketPriceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    crop?: StringFieldUpdateOperationsInput | string
    mandi?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    trend?: StringFieldUpdateOperationsInput | string
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketPriceCreateManyInput = {
    id?: string
    crop: string
    mandi: string
    price: number
    unit: string
    trend: string
    recordedAt?: Date | string
  }

  export type MarketPriceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    crop?: StringFieldUpdateOperationsInput | string
    mandi?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    trend?: StringFieldUpdateOperationsInput | string
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketPriceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    crop?: StringFieldUpdateOperationsInput | string
    mandi?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    trend?: StringFieldUpdateOperationsInput | string
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type AdvisoryListRelationFilter = {
    every?: AdvisoryWhereInput
    some?: AdvisoryWhereInput
    none?: AdvisoryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AdvisoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    crops?: SortOrder
    language?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    crops?: SortOrder
    language?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    crops?: SortOrder
    language?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AdvisoryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    content?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type AdvisoryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    content?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type AdvisoryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    content?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type MarketPriceCountOrderByAggregateInput = {
    id?: SortOrder
    crop?: SortOrder
    mandi?: SortOrder
    price?: SortOrder
    unit?: SortOrder
    trend?: SortOrder
    recordedAt?: SortOrder
  }

  export type MarketPriceAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type MarketPriceMaxOrderByAggregateInput = {
    id?: SortOrder
    crop?: SortOrder
    mandi?: SortOrder
    price?: SortOrder
    unit?: SortOrder
    trend?: SortOrder
    recordedAt?: SortOrder
  }

  export type MarketPriceMinOrderByAggregateInput = {
    id?: SortOrder
    crop?: SortOrder
    mandi?: SortOrder
    price?: SortOrder
    unit?: SortOrder
    trend?: SortOrder
    recordedAt?: SortOrder
  }

  export type MarketPriceSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type AdvisoryCreateNestedManyWithoutUserInput = {
    create?: XOR<AdvisoryCreateWithoutUserInput, AdvisoryUncheckedCreateWithoutUserInput> | AdvisoryCreateWithoutUserInput[] | AdvisoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdvisoryCreateOrConnectWithoutUserInput | AdvisoryCreateOrConnectWithoutUserInput[]
    createMany?: AdvisoryCreateManyUserInputEnvelope
    connect?: AdvisoryWhereUniqueInput | AdvisoryWhereUniqueInput[]
  }

  export type AdvisoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AdvisoryCreateWithoutUserInput, AdvisoryUncheckedCreateWithoutUserInput> | AdvisoryCreateWithoutUserInput[] | AdvisoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdvisoryCreateOrConnectWithoutUserInput | AdvisoryCreateOrConnectWithoutUserInput[]
    createMany?: AdvisoryCreateManyUserInputEnvelope
    connect?: AdvisoryWhereUniqueInput | AdvisoryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AdvisoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<AdvisoryCreateWithoutUserInput, AdvisoryUncheckedCreateWithoutUserInput> | AdvisoryCreateWithoutUserInput[] | AdvisoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdvisoryCreateOrConnectWithoutUserInput | AdvisoryCreateOrConnectWithoutUserInput[]
    upsert?: AdvisoryUpsertWithWhereUniqueWithoutUserInput | AdvisoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AdvisoryCreateManyUserInputEnvelope
    set?: AdvisoryWhereUniqueInput | AdvisoryWhereUniqueInput[]
    disconnect?: AdvisoryWhereUniqueInput | AdvisoryWhereUniqueInput[]
    delete?: AdvisoryWhereUniqueInput | AdvisoryWhereUniqueInput[]
    connect?: AdvisoryWhereUniqueInput | AdvisoryWhereUniqueInput[]
    update?: AdvisoryUpdateWithWhereUniqueWithoutUserInput | AdvisoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AdvisoryUpdateManyWithWhereWithoutUserInput | AdvisoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AdvisoryScalarWhereInput | AdvisoryScalarWhereInput[]
  }

  export type AdvisoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AdvisoryCreateWithoutUserInput, AdvisoryUncheckedCreateWithoutUserInput> | AdvisoryCreateWithoutUserInput[] | AdvisoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdvisoryCreateOrConnectWithoutUserInput | AdvisoryCreateOrConnectWithoutUserInput[]
    upsert?: AdvisoryUpsertWithWhereUniqueWithoutUserInput | AdvisoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AdvisoryCreateManyUserInputEnvelope
    set?: AdvisoryWhereUniqueInput | AdvisoryWhereUniqueInput[]
    disconnect?: AdvisoryWhereUniqueInput | AdvisoryWhereUniqueInput[]
    delete?: AdvisoryWhereUniqueInput | AdvisoryWhereUniqueInput[]
    connect?: AdvisoryWhereUniqueInput | AdvisoryWhereUniqueInput[]
    update?: AdvisoryUpdateWithWhereUniqueWithoutUserInput | AdvisoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AdvisoryUpdateManyWithWhereWithoutUserInput | AdvisoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AdvisoryScalarWhereInput | AdvisoryScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAdvisoriesInput = {
    create?: XOR<UserCreateWithoutAdvisoriesInput, UserUncheckedCreateWithoutAdvisoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdvisoriesInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutAdvisoriesNestedInput = {
    create?: XOR<UserCreateWithoutAdvisoriesInput, UserUncheckedCreateWithoutAdvisoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdvisoriesInput
    upsert?: UserUpsertWithoutAdvisoriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAdvisoriesInput, UserUpdateWithoutAdvisoriesInput>, UserUncheckedUpdateWithoutAdvisoriesInput>
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type AdvisoryCreateWithoutUserInput = {
    id?: string
    type: string
    title: string
    content: string
    read?: boolean
    createdAt?: Date | string
  }

  export type AdvisoryUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    title: string
    content: string
    read?: boolean
    createdAt?: Date | string
  }

  export type AdvisoryCreateOrConnectWithoutUserInput = {
    where: AdvisoryWhereUniqueInput
    create: XOR<AdvisoryCreateWithoutUserInput, AdvisoryUncheckedCreateWithoutUserInput>
  }

  export type AdvisoryCreateManyUserInputEnvelope = {
    data: AdvisoryCreateManyUserInput | AdvisoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AdvisoryUpsertWithWhereUniqueWithoutUserInput = {
    where: AdvisoryWhereUniqueInput
    update: XOR<AdvisoryUpdateWithoutUserInput, AdvisoryUncheckedUpdateWithoutUserInput>
    create: XOR<AdvisoryCreateWithoutUserInput, AdvisoryUncheckedCreateWithoutUserInput>
  }

  export type AdvisoryUpdateWithWhereUniqueWithoutUserInput = {
    where: AdvisoryWhereUniqueInput
    data: XOR<AdvisoryUpdateWithoutUserInput, AdvisoryUncheckedUpdateWithoutUserInput>
  }

  export type AdvisoryUpdateManyWithWhereWithoutUserInput = {
    where: AdvisoryScalarWhereInput
    data: XOR<AdvisoryUpdateManyMutationInput, AdvisoryUncheckedUpdateManyWithoutUserInput>
  }

  export type AdvisoryScalarWhereInput = {
    AND?: AdvisoryScalarWhereInput | AdvisoryScalarWhereInput[]
    OR?: AdvisoryScalarWhereInput[]
    NOT?: AdvisoryScalarWhereInput | AdvisoryScalarWhereInput[]
    id?: StringFilter<"Advisory"> | string
    userId?: StringFilter<"Advisory"> | string
    type?: StringFilter<"Advisory"> | string
    title?: StringFilter<"Advisory"> | string
    content?: StringFilter<"Advisory"> | string
    read?: BoolFilter<"Advisory"> | boolean
    createdAt?: DateTimeFilter<"Advisory"> | Date | string
  }

  export type UserCreateWithoutAdvisoriesInput = {
    id?: string
    name?: string | null
    email?: string | null
    phone?: string | null
    location?: string | null
    crops?: string | null
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutAdvisoriesInput = {
    id?: string
    name?: string | null
    email?: string | null
    phone?: string | null
    location?: string | null
    crops?: string | null
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutAdvisoriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAdvisoriesInput, UserUncheckedCreateWithoutAdvisoriesInput>
  }

  export type UserUpsertWithoutAdvisoriesInput = {
    update: XOR<UserUpdateWithoutAdvisoriesInput, UserUncheckedUpdateWithoutAdvisoriesInput>
    create: XOR<UserCreateWithoutAdvisoriesInput, UserUncheckedCreateWithoutAdvisoriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAdvisoriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAdvisoriesInput, UserUncheckedUpdateWithoutAdvisoriesInput>
  }

  export type UserUpdateWithoutAdvisoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    crops?: NullableStringFieldUpdateOperationsInput | string | null
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutAdvisoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    crops?: NullableStringFieldUpdateOperationsInput | string | null
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdvisoryCreateManyUserInput = {
    id?: string
    type: string
    title: string
    content: string
    read?: boolean
    createdAt?: Date | string
  }

  export type AdvisoryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdvisoryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdvisoryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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