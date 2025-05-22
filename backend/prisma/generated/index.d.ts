
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Goal
 * 
 */
export type Goal = $Result.DefaultSelection<Prisma.$GoalPayload>
/**
 * Model Quest
 * 
 */
export type Quest = $Result.DefaultSelection<Prisma.$QuestPayload>
/**
 * Model QuestCompletion
 * 
 */
export type QuestCompletion = $Result.DefaultSelection<Prisma.$QuestCompletionPayload>
/**
 * Model Reward
 * 
 */
export type Reward = $Result.DefaultSelection<Prisma.$RewardPayload>
/**
 * Model RewardPurchase
 * 
 */
export type RewardPurchase = $Result.DefaultSelection<Prisma.$RewardPurchasePayload>
/**
 * Model Boost
 * 
 */
export type Boost = $Result.DefaultSelection<Prisma.$BoostPayload>
/**
 * Model BoostActivation
 * 
 */
export type BoostActivation = $Result.DefaultSelection<Prisma.$BoostActivationPayload>
/**
 * Model Room
 * 
 */
export type Room = $Result.DefaultSelection<Prisma.$RoomPayload>
/**
 * Model RoomMember
 * 
 */
export type RoomMember = $Result.DefaultSelection<Prisma.$RoomMemberPayload>
/**
 * Model Invitation
 * 
 */
export type Invitation = $Result.DefaultSelection<Prisma.$InvitationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  PARENT: 'PARENT',
  CHILD: 'CHILD'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * `prisma.goal`: Exposes CRUD operations for the **Goal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Goals
    * const goals = await prisma.goal.findMany()
    * ```
    */
  get goal(): Prisma.GoalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quest`: Exposes CRUD operations for the **Quest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quests
    * const quests = await prisma.quest.findMany()
    * ```
    */
  get quest(): Prisma.QuestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.questCompletion`: Exposes CRUD operations for the **QuestCompletion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuestCompletions
    * const questCompletions = await prisma.questCompletion.findMany()
    * ```
    */
  get questCompletion(): Prisma.QuestCompletionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reward`: Exposes CRUD operations for the **Reward** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rewards
    * const rewards = await prisma.reward.findMany()
    * ```
    */
  get reward(): Prisma.RewardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rewardPurchase`: Exposes CRUD operations for the **RewardPurchase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RewardPurchases
    * const rewardPurchases = await prisma.rewardPurchase.findMany()
    * ```
    */
  get rewardPurchase(): Prisma.RewardPurchaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.boost`: Exposes CRUD operations for the **Boost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Boosts
    * const boosts = await prisma.boost.findMany()
    * ```
    */
  get boost(): Prisma.BoostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.boostActivation`: Exposes CRUD operations for the **BoostActivation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BoostActivations
    * const boostActivations = await prisma.boostActivation.findMany()
    * ```
    */
  get boostActivation(): Prisma.BoostActivationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.room`: Exposes CRUD operations for the **Room** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.room.findMany()
    * ```
    */
  get room(): Prisma.RoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roomMember`: Exposes CRUD operations for the **RoomMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoomMembers
    * const roomMembers = await prisma.roomMember.findMany()
    * ```
    */
  get roomMember(): Prisma.RoomMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invitation`: Exposes CRUD operations for the **Invitation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invitations
    * const invitations = await prisma.invitation.findMany()
    * ```
    */
  get invitation(): Prisma.InvitationDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    Goal: 'Goal',
    Quest: 'Quest',
    QuestCompletion: 'QuestCompletion',
    Reward: 'Reward',
    RewardPurchase: 'RewardPurchase',
    Boost: 'Boost',
    BoostActivation: 'BoostActivation',
    Room: 'Room',
    RoomMember: 'RoomMember',
    Invitation: 'Invitation'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "goal" | "quest" | "questCompletion" | "reward" | "rewardPurchase" | "boost" | "boostActivation" | "room" | "roomMember" | "invitation"
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
      Goal: {
        payload: Prisma.$GoalPayload<ExtArgs>
        fields: Prisma.GoalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GoalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GoalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          findFirst: {
            args: Prisma.GoalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GoalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          findMany: {
            args: Prisma.GoalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>[]
          }
          create: {
            args: Prisma.GoalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          createMany: {
            args: Prisma.GoalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GoalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>[]
          }
          delete: {
            args: Prisma.GoalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          update: {
            args: Prisma.GoalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          deleteMany: {
            args: Prisma.GoalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GoalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GoalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>[]
          }
          upsert: {
            args: Prisma.GoalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          aggregate: {
            args: Prisma.GoalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGoal>
          }
          groupBy: {
            args: Prisma.GoalGroupByArgs<ExtArgs>
            result: $Utils.Optional<GoalGroupByOutputType>[]
          }
          count: {
            args: Prisma.GoalCountArgs<ExtArgs>
            result: $Utils.Optional<GoalCountAggregateOutputType> | number
          }
        }
      }
      Quest: {
        payload: Prisma.$QuestPayload<ExtArgs>
        fields: Prisma.QuestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestPayload>
          }
          findFirst: {
            args: Prisma.QuestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestPayload>
          }
          findMany: {
            args: Prisma.QuestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestPayload>[]
          }
          create: {
            args: Prisma.QuestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestPayload>
          }
          createMany: {
            args: Prisma.QuestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestPayload>[]
          }
          delete: {
            args: Prisma.QuestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestPayload>
          }
          update: {
            args: Prisma.QuestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestPayload>
          }
          deleteMany: {
            args: Prisma.QuestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestPayload>[]
          }
          upsert: {
            args: Prisma.QuestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestPayload>
          }
          aggregate: {
            args: Prisma.QuestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuest>
          }
          groupBy: {
            args: Prisma.QuestGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestCountArgs<ExtArgs>
            result: $Utils.Optional<QuestCountAggregateOutputType> | number
          }
        }
      }
      QuestCompletion: {
        payload: Prisma.$QuestCompletionPayload<ExtArgs>
        fields: Prisma.QuestCompletionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestCompletionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestCompletionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestCompletionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestCompletionPayload>
          }
          findFirst: {
            args: Prisma.QuestCompletionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestCompletionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestCompletionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestCompletionPayload>
          }
          findMany: {
            args: Prisma.QuestCompletionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestCompletionPayload>[]
          }
          create: {
            args: Prisma.QuestCompletionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestCompletionPayload>
          }
          createMany: {
            args: Prisma.QuestCompletionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestCompletionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestCompletionPayload>[]
          }
          delete: {
            args: Prisma.QuestCompletionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestCompletionPayload>
          }
          update: {
            args: Prisma.QuestCompletionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestCompletionPayload>
          }
          deleteMany: {
            args: Prisma.QuestCompletionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestCompletionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestCompletionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestCompletionPayload>[]
          }
          upsert: {
            args: Prisma.QuestCompletionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestCompletionPayload>
          }
          aggregate: {
            args: Prisma.QuestCompletionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestCompletion>
          }
          groupBy: {
            args: Prisma.QuestCompletionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestCompletionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestCompletionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestCompletionCountAggregateOutputType> | number
          }
        }
      }
      Reward: {
        payload: Prisma.$RewardPayload<ExtArgs>
        fields: Prisma.RewardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RewardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RewardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>
          }
          findFirst: {
            args: Prisma.RewardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RewardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>
          }
          findMany: {
            args: Prisma.RewardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>[]
          }
          create: {
            args: Prisma.RewardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>
          }
          createMany: {
            args: Prisma.RewardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RewardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>[]
          }
          delete: {
            args: Prisma.RewardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>
          }
          update: {
            args: Prisma.RewardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>
          }
          deleteMany: {
            args: Prisma.RewardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RewardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RewardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>[]
          }
          upsert: {
            args: Prisma.RewardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>
          }
          aggregate: {
            args: Prisma.RewardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReward>
          }
          groupBy: {
            args: Prisma.RewardGroupByArgs<ExtArgs>
            result: $Utils.Optional<RewardGroupByOutputType>[]
          }
          count: {
            args: Prisma.RewardCountArgs<ExtArgs>
            result: $Utils.Optional<RewardCountAggregateOutputType> | number
          }
        }
      }
      RewardPurchase: {
        payload: Prisma.$RewardPurchasePayload<ExtArgs>
        fields: Prisma.RewardPurchaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RewardPurchaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPurchasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RewardPurchaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPurchasePayload>
          }
          findFirst: {
            args: Prisma.RewardPurchaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPurchasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RewardPurchaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPurchasePayload>
          }
          findMany: {
            args: Prisma.RewardPurchaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPurchasePayload>[]
          }
          create: {
            args: Prisma.RewardPurchaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPurchasePayload>
          }
          createMany: {
            args: Prisma.RewardPurchaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RewardPurchaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPurchasePayload>[]
          }
          delete: {
            args: Prisma.RewardPurchaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPurchasePayload>
          }
          update: {
            args: Prisma.RewardPurchaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPurchasePayload>
          }
          deleteMany: {
            args: Prisma.RewardPurchaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RewardPurchaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RewardPurchaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPurchasePayload>[]
          }
          upsert: {
            args: Prisma.RewardPurchaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPurchasePayload>
          }
          aggregate: {
            args: Prisma.RewardPurchaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRewardPurchase>
          }
          groupBy: {
            args: Prisma.RewardPurchaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<RewardPurchaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.RewardPurchaseCountArgs<ExtArgs>
            result: $Utils.Optional<RewardPurchaseCountAggregateOutputType> | number
          }
        }
      }
      Boost: {
        payload: Prisma.$BoostPayload<ExtArgs>
        fields: Prisma.BoostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BoostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BoostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoostPayload>
          }
          findFirst: {
            args: Prisma.BoostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BoostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoostPayload>
          }
          findMany: {
            args: Prisma.BoostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoostPayload>[]
          }
          create: {
            args: Prisma.BoostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoostPayload>
          }
          createMany: {
            args: Prisma.BoostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BoostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoostPayload>[]
          }
          delete: {
            args: Prisma.BoostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoostPayload>
          }
          update: {
            args: Prisma.BoostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoostPayload>
          }
          deleteMany: {
            args: Prisma.BoostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BoostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BoostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoostPayload>[]
          }
          upsert: {
            args: Prisma.BoostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoostPayload>
          }
          aggregate: {
            args: Prisma.BoostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBoost>
          }
          groupBy: {
            args: Prisma.BoostGroupByArgs<ExtArgs>
            result: $Utils.Optional<BoostGroupByOutputType>[]
          }
          count: {
            args: Prisma.BoostCountArgs<ExtArgs>
            result: $Utils.Optional<BoostCountAggregateOutputType> | number
          }
        }
      }
      BoostActivation: {
        payload: Prisma.$BoostActivationPayload<ExtArgs>
        fields: Prisma.BoostActivationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BoostActivationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoostActivationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BoostActivationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoostActivationPayload>
          }
          findFirst: {
            args: Prisma.BoostActivationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoostActivationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BoostActivationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoostActivationPayload>
          }
          findMany: {
            args: Prisma.BoostActivationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoostActivationPayload>[]
          }
          create: {
            args: Prisma.BoostActivationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoostActivationPayload>
          }
          createMany: {
            args: Prisma.BoostActivationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BoostActivationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoostActivationPayload>[]
          }
          delete: {
            args: Prisma.BoostActivationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoostActivationPayload>
          }
          update: {
            args: Prisma.BoostActivationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoostActivationPayload>
          }
          deleteMany: {
            args: Prisma.BoostActivationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BoostActivationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BoostActivationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoostActivationPayload>[]
          }
          upsert: {
            args: Prisma.BoostActivationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoostActivationPayload>
          }
          aggregate: {
            args: Prisma.BoostActivationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBoostActivation>
          }
          groupBy: {
            args: Prisma.BoostActivationGroupByArgs<ExtArgs>
            result: $Utils.Optional<BoostActivationGroupByOutputType>[]
          }
          count: {
            args: Prisma.BoostActivationCountArgs<ExtArgs>
            result: $Utils.Optional<BoostActivationCountAggregateOutputType> | number
          }
        }
      }
      Room: {
        payload: Prisma.$RoomPayload<ExtArgs>
        fields: Prisma.RoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findFirst: {
            args: Prisma.RoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findMany: {
            args: Prisma.RoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          create: {
            args: Prisma.RoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          createMany: {
            args: Prisma.RoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          delete: {
            args: Prisma.RoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          update: {
            args: Prisma.RoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          deleteMany: {
            args: Prisma.RoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          upsert: {
            args: Prisma.RoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          aggregate: {
            args: Prisma.RoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoom>
          }
          groupBy: {
            args: Prisma.RoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomCountArgs<ExtArgs>
            result: $Utils.Optional<RoomCountAggregateOutputType> | number
          }
        }
      }
      RoomMember: {
        payload: Prisma.$RoomMemberPayload<ExtArgs>
        fields: Prisma.RoomMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMemberPayload>
          }
          findFirst: {
            args: Prisma.RoomMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMemberPayload>
          }
          findMany: {
            args: Prisma.RoomMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMemberPayload>[]
          }
          create: {
            args: Prisma.RoomMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMemberPayload>
          }
          createMany: {
            args: Prisma.RoomMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMemberPayload>[]
          }
          delete: {
            args: Prisma.RoomMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMemberPayload>
          }
          update: {
            args: Prisma.RoomMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMemberPayload>
          }
          deleteMany: {
            args: Prisma.RoomMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoomMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMemberPayload>[]
          }
          upsert: {
            args: Prisma.RoomMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMemberPayload>
          }
          aggregate: {
            args: Prisma.RoomMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoomMember>
          }
          groupBy: {
            args: Prisma.RoomMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomMemberCountArgs<ExtArgs>
            result: $Utils.Optional<RoomMemberCountAggregateOutputType> | number
          }
        }
      }
      Invitation: {
        payload: Prisma.$InvitationPayload<ExtArgs>
        fields: Prisma.InvitationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvitationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvitationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          findFirst: {
            args: Prisma.InvitationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvitationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          findMany: {
            args: Prisma.InvitationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>[]
          }
          create: {
            args: Prisma.InvitationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          createMany: {
            args: Prisma.InvitationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvitationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>[]
          }
          delete: {
            args: Prisma.InvitationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          update: {
            args: Prisma.InvitationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          deleteMany: {
            args: Prisma.InvitationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvitationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvitationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>[]
          }
          upsert: {
            args: Prisma.InvitationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          aggregate: {
            args: Prisma.InvitationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvitation>
          }
          groupBy: {
            args: Prisma.InvitationGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvitationGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvitationCountArgs<ExtArgs>
            result: $Utils.Optional<InvitationCountAggregateOutputType> | number
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    goal?: GoalOmit
    quest?: QuestOmit
    questCompletion?: QuestCompletionOmit
    reward?: RewardOmit
    rewardPurchase?: RewardPurchaseOmit
    boost?: BoostOmit
    boostActivation?: BoostActivationOmit
    room?: RoomOmit
    roomMember?: RoomMemberOmit
    invitation?: InvitationOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    quests: number
    completions: number
    rewardsPurchase: number
    rewards: number
    boosts: number
    goals: number
    rooms: number
    createdRooms: number
    roomInvitations: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quests?: boolean | UserCountOutputTypeCountQuestsArgs
    completions?: boolean | UserCountOutputTypeCountCompletionsArgs
    rewardsPurchase?: boolean | UserCountOutputTypeCountRewardsPurchaseArgs
    rewards?: boolean | UserCountOutputTypeCountRewardsArgs
    boosts?: boolean | UserCountOutputTypeCountBoostsArgs
    goals?: boolean | UserCountOutputTypeCountGoalsArgs
    rooms?: boolean | UserCountOutputTypeCountRoomsArgs
    createdRooms?: boolean | UserCountOutputTypeCountCreatedRoomsArgs
    roomInvitations?: boolean | UserCountOutputTypeCountRoomInvitationsArgs
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
  export type UserCountOutputTypeCountQuestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCompletionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestCompletionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRewardsPurchaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RewardPurchaseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRewardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RewardWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBoostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoostActivationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGoalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoalWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomMemberWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRoomInvitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvitationWhereInput
  }


  /**
   * Count Type GoalCountOutputType
   */

  export type GoalCountOutputType = {
    quests: number
  }

  export type GoalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quests?: boolean | GoalCountOutputTypeCountQuestsArgs
  }

  // Custom InputTypes
  /**
   * GoalCountOutputType without action
   */
  export type GoalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoalCountOutputType
     */
    select?: GoalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GoalCountOutputType without action
   */
  export type GoalCountOutputTypeCountQuestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestWhereInput
  }


  /**
   * Count Type QuestCountOutputType
   */

  export type QuestCountOutputType = {
    completions: number
  }

  export type QuestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    completions?: boolean | QuestCountOutputTypeCountCompletionsArgs
  }

  // Custom InputTypes
  /**
   * QuestCountOutputType without action
   */
  export type QuestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestCountOutputType
     */
    select?: QuestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestCountOutputType without action
   */
  export type QuestCountOutputTypeCountCompletionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestCompletionWhereInput
  }


  /**
   * Count Type RewardCountOutputType
   */

  export type RewardCountOutputType = {
    purchases: number
  }

  export type RewardCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchases?: boolean | RewardCountOutputTypeCountPurchasesArgs
  }

  // Custom InputTypes
  /**
   * RewardCountOutputType without action
   */
  export type RewardCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardCountOutputType
     */
    select?: RewardCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RewardCountOutputType without action
   */
  export type RewardCountOutputTypeCountPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RewardPurchaseWhereInput
  }


  /**
   * Count Type BoostCountOutputType
   */

  export type BoostCountOutputType = {
    activations: number
  }

  export type BoostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activations?: boolean | BoostCountOutputTypeCountActivationsArgs
  }

  // Custom InputTypes
  /**
   * BoostCountOutputType without action
   */
  export type BoostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoostCountOutputType
     */
    select?: BoostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BoostCountOutputType without action
   */
  export type BoostCountOutputTypeCountActivationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoostActivationWhereInput
  }


  /**
   * Count Type RoomCountOutputType
   */

  export type RoomCountOutputType = {
    members: number
    invitations: number
    quests: number
  }

  export type RoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | RoomCountOutputTypeCountMembersArgs
    invitations?: boolean | RoomCountOutputTypeCountInvitationsArgs
    quests?: boolean | RoomCountOutputTypeCountQuestsArgs
  }

  // Custom InputTypes
  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCountOutputType
     */
    select?: RoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomMemberWhereInput
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountInvitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvitationWhereInput
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountQuestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    stars: number | null
  }

  export type UserSumAggregateOutputType = {
    stars: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
    stars: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
    stars: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    role: number
    stars: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    stars?: true
  }

  export type UserSumAggregateInputType = {
    stars?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    stars?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    stars?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    stars?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    role: $Enums.UserRole
    stars: number | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    email?: boolean
    password?: boolean
    role?: boolean
    stars?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    quests?: boolean | User$questsArgs<ExtArgs>
    completions?: boolean | User$completionsArgs<ExtArgs>
    rewardsPurchase?: boolean | User$rewardsPurchaseArgs<ExtArgs>
    rewards?: boolean | User$rewardsArgs<ExtArgs>
    boosts?: boolean | User$boostsArgs<ExtArgs>
    goals?: boolean | User$goalsArgs<ExtArgs>
    rooms?: boolean | User$roomsArgs<ExtArgs>
    createdRooms?: boolean | User$createdRoomsArgs<ExtArgs>
    roomInvitations?: boolean | User$roomInvitationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    stars?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    stars?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    stars?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "role" | "stars" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quests?: boolean | User$questsArgs<ExtArgs>
    completions?: boolean | User$completionsArgs<ExtArgs>
    rewardsPurchase?: boolean | User$rewardsPurchaseArgs<ExtArgs>
    rewards?: boolean | User$rewardsArgs<ExtArgs>
    boosts?: boolean | User$boostsArgs<ExtArgs>
    goals?: boolean | User$goalsArgs<ExtArgs>
    rooms?: boolean | User$roomsArgs<ExtArgs>
    createdRooms?: boolean | User$createdRoomsArgs<ExtArgs>
    roomInvitations?: boolean | User$roomInvitationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      quests: Prisma.$QuestPayload<ExtArgs>[]
      completions: Prisma.$QuestCompletionPayload<ExtArgs>[]
      rewardsPurchase: Prisma.$RewardPurchasePayload<ExtArgs>[]
      rewards: Prisma.$RewardPayload<ExtArgs>[]
      boosts: Prisma.$BoostActivationPayload<ExtArgs>[]
      goals: Prisma.$GoalPayload<ExtArgs>[]
      rooms: Prisma.$RoomMemberPayload<ExtArgs>[]
      createdRooms: Prisma.$RoomPayload<ExtArgs>[]
      roomInvitations: Prisma.$InvitationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      role: $Enums.UserRole
      stars: number | null
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
    quests<T extends User$questsArgs<ExtArgs> = {}>(args?: Subset<T, User$questsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    completions<T extends User$completionsArgs<ExtArgs> = {}>(args?: Subset<T, User$completionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestCompletionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rewardsPurchase<T extends User$rewardsPurchaseArgs<ExtArgs> = {}>(args?: Subset<T, User$rewardsPurchaseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardPurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rewards<T extends User$rewardsArgs<ExtArgs> = {}>(args?: Subset<T, User$rewardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    boosts<T extends User$boostsArgs<ExtArgs> = {}>(args?: Subset<T, User$boostsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoostActivationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    goals<T extends User$goalsArgs<ExtArgs> = {}>(args?: Subset<T, User$goalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rooms<T extends User$roomsArgs<ExtArgs> = {}>(args?: Subset<T, User$roomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdRooms<T extends User$createdRoomsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdRoomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    roomInvitations<T extends User$roomInvitationsArgs<ExtArgs> = {}>(args?: Subset<T, User$roomInvitationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly stars: FieldRef<"User", 'Int'>
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
   * User.quests
   */
  export type User$questsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quest
     */
    omit?: QuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
    where?: QuestWhereInput
    orderBy?: QuestOrderByWithRelationInput | QuestOrderByWithRelationInput[]
    cursor?: QuestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestScalarFieldEnum | QuestScalarFieldEnum[]
  }

  /**
   * User.completions
   */
  export type User$completionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestCompletion
     */
    select?: QuestCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestCompletion
     */
    omit?: QuestCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestCompletionInclude<ExtArgs> | null
    where?: QuestCompletionWhereInput
    orderBy?: QuestCompletionOrderByWithRelationInput | QuestCompletionOrderByWithRelationInput[]
    cursor?: QuestCompletionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestCompletionScalarFieldEnum | QuestCompletionScalarFieldEnum[]
  }

  /**
   * User.rewardsPurchase
   */
  export type User$rewardsPurchaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardPurchase
     */
    select?: RewardPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardPurchase
     */
    omit?: RewardPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardPurchaseInclude<ExtArgs> | null
    where?: RewardPurchaseWhereInput
    orderBy?: RewardPurchaseOrderByWithRelationInput | RewardPurchaseOrderByWithRelationInput[]
    cursor?: RewardPurchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RewardPurchaseScalarFieldEnum | RewardPurchaseScalarFieldEnum[]
  }

  /**
   * User.rewards
   */
  export type User$rewardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    where?: RewardWhereInput
    orderBy?: RewardOrderByWithRelationInput | RewardOrderByWithRelationInput[]
    cursor?: RewardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RewardScalarFieldEnum | RewardScalarFieldEnum[]
  }

  /**
   * User.boosts
   */
  export type User$boostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoostActivation
     */
    select?: BoostActivationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoostActivation
     */
    omit?: BoostActivationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoostActivationInclude<ExtArgs> | null
    where?: BoostActivationWhereInput
    orderBy?: BoostActivationOrderByWithRelationInput | BoostActivationOrderByWithRelationInput[]
    cursor?: BoostActivationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BoostActivationScalarFieldEnum | BoostActivationScalarFieldEnum[]
  }

  /**
   * User.goals
   */
  export type User$goalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    where?: GoalWhereInput
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    cursor?: GoalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * User.rooms
   */
  export type User$roomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMember
     */
    select?: RoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMember
     */
    omit?: RoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMemberInclude<ExtArgs> | null
    where?: RoomMemberWhereInput
    orderBy?: RoomMemberOrderByWithRelationInput | RoomMemberOrderByWithRelationInput[]
    cursor?: RoomMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomMemberScalarFieldEnum | RoomMemberScalarFieldEnum[]
  }

  /**
   * User.createdRooms
   */
  export type User$createdRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    cursor?: RoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * User.roomInvitations
   */
  export type User$roomInvitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    where?: InvitationWhereInput
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    cursor?: InvitationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
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
   * Model Goal
   */

  export type AggregateGoal = {
    _count: GoalCountAggregateOutputType | null
    _avg: GoalAvgAggregateOutputType | null
    _sum: GoalSumAggregateOutputType | null
    _min: GoalMinAggregateOutputType | null
    _max: GoalMaxAggregateOutputType | null
  }

  export type GoalAvgAggregateOutputType = {
    starReward: number | null
  }

  export type GoalSumAggregateOutputType = {
    starReward: number | null
  }

  export type GoalMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    starReward: number | null
    creatorId: string | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GoalMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    starReward: number | null
    creatorId: string | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GoalCountAggregateOutputType = {
    id: number
    title: number
    description: number
    starReward: number
    creatorId: number
    completedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GoalAvgAggregateInputType = {
    starReward?: true
  }

  export type GoalSumAggregateInputType = {
    starReward?: true
  }

  export type GoalMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    starReward?: true
    creatorId?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GoalMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    starReward?: true
    creatorId?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GoalCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    starReward?: true
    creatorId?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GoalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Goal to aggregate.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Goals
    **/
    _count?: true | GoalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GoalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GoalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GoalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GoalMaxAggregateInputType
  }

  export type GetGoalAggregateType<T extends GoalAggregateArgs> = {
        [P in keyof T & keyof AggregateGoal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGoal[P]>
      : GetScalarType<T[P], AggregateGoal[P]>
  }




  export type GoalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoalWhereInput
    orderBy?: GoalOrderByWithAggregationInput | GoalOrderByWithAggregationInput[]
    by: GoalScalarFieldEnum[] | GoalScalarFieldEnum
    having?: GoalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GoalCountAggregateInputType | true
    _avg?: GoalAvgAggregateInputType
    _sum?: GoalSumAggregateInputType
    _min?: GoalMinAggregateInputType
    _max?: GoalMaxAggregateInputType
  }

  export type GoalGroupByOutputType = {
    id: string
    title: string
    description: string | null
    starReward: number
    creatorId: string
    completedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: GoalCountAggregateOutputType | null
    _avg: GoalAvgAggregateOutputType | null
    _sum: GoalSumAggregateOutputType | null
    _min: GoalMinAggregateOutputType | null
    _max: GoalMaxAggregateOutputType | null
  }

  type GetGoalGroupByPayload<T extends GoalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GoalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GoalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GoalGroupByOutputType[P]>
            : GetScalarType<T[P], GoalGroupByOutputType[P]>
        }
      >
    >


  export type GoalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    starReward?: boolean
    creatorId?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    quests?: boolean | Goal$questsArgs<ExtArgs>
    _count?: boolean | GoalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["goal"]>

  export type GoalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    starReward?: boolean
    creatorId?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["goal"]>

  export type GoalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    starReward?: boolean
    creatorId?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["goal"]>

  export type GoalSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    starReward?: boolean
    creatorId?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GoalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "starReward" | "creatorId" | "completedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["goal"]>
  export type GoalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    quests?: boolean | Goal$questsArgs<ExtArgs>
    _count?: boolean | GoalCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GoalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GoalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GoalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Goal"
    objects: {
      creator: Prisma.$UserPayload<ExtArgs>
      quests: Prisma.$QuestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      starReward: number
      creatorId: string
      completedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["goal"]>
    composites: {}
  }

  type GoalGetPayload<S extends boolean | null | undefined | GoalDefaultArgs> = $Result.GetResult<Prisma.$GoalPayload, S>

  type GoalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GoalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GoalCountAggregateInputType | true
    }

  export interface GoalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Goal'], meta: { name: 'Goal' } }
    /**
     * Find zero or one Goal that matches the filter.
     * @param {GoalFindUniqueArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GoalFindUniqueArgs>(args: SelectSubset<T, GoalFindUniqueArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Goal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GoalFindUniqueOrThrowArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GoalFindUniqueOrThrowArgs>(args: SelectSubset<T, GoalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Goal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalFindFirstArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GoalFindFirstArgs>(args?: SelectSubset<T, GoalFindFirstArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Goal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalFindFirstOrThrowArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GoalFindFirstOrThrowArgs>(args?: SelectSubset<T, GoalFindFirstOrThrowArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Goals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Goals
     * const goals = await prisma.goal.findMany()
     * 
     * // Get first 10 Goals
     * const goals = await prisma.goal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const goalWithIdOnly = await prisma.goal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GoalFindManyArgs>(args?: SelectSubset<T, GoalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Goal.
     * @param {GoalCreateArgs} args - Arguments to create a Goal.
     * @example
     * // Create one Goal
     * const Goal = await prisma.goal.create({
     *   data: {
     *     // ... data to create a Goal
     *   }
     * })
     * 
     */
    create<T extends GoalCreateArgs>(args: SelectSubset<T, GoalCreateArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Goals.
     * @param {GoalCreateManyArgs} args - Arguments to create many Goals.
     * @example
     * // Create many Goals
     * const goal = await prisma.goal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GoalCreateManyArgs>(args?: SelectSubset<T, GoalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Goals and returns the data saved in the database.
     * @param {GoalCreateManyAndReturnArgs} args - Arguments to create many Goals.
     * @example
     * // Create many Goals
     * const goal = await prisma.goal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Goals and only return the `id`
     * const goalWithIdOnly = await prisma.goal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GoalCreateManyAndReturnArgs>(args?: SelectSubset<T, GoalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Goal.
     * @param {GoalDeleteArgs} args - Arguments to delete one Goal.
     * @example
     * // Delete one Goal
     * const Goal = await prisma.goal.delete({
     *   where: {
     *     // ... filter to delete one Goal
     *   }
     * })
     * 
     */
    delete<T extends GoalDeleteArgs>(args: SelectSubset<T, GoalDeleteArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Goal.
     * @param {GoalUpdateArgs} args - Arguments to update one Goal.
     * @example
     * // Update one Goal
     * const goal = await prisma.goal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GoalUpdateArgs>(args: SelectSubset<T, GoalUpdateArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Goals.
     * @param {GoalDeleteManyArgs} args - Arguments to filter Goals to delete.
     * @example
     * // Delete a few Goals
     * const { count } = await prisma.goal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GoalDeleteManyArgs>(args?: SelectSubset<T, GoalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Goals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Goals
     * const goal = await prisma.goal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GoalUpdateManyArgs>(args: SelectSubset<T, GoalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Goals and returns the data updated in the database.
     * @param {GoalUpdateManyAndReturnArgs} args - Arguments to update many Goals.
     * @example
     * // Update many Goals
     * const goal = await prisma.goal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Goals and only return the `id`
     * const goalWithIdOnly = await prisma.goal.updateManyAndReturn({
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
    updateManyAndReturn<T extends GoalUpdateManyAndReturnArgs>(args: SelectSubset<T, GoalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Goal.
     * @param {GoalUpsertArgs} args - Arguments to update or create a Goal.
     * @example
     * // Update or create a Goal
     * const goal = await prisma.goal.upsert({
     *   create: {
     *     // ... data to create a Goal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Goal we want to update
     *   }
     * })
     */
    upsert<T extends GoalUpsertArgs>(args: SelectSubset<T, GoalUpsertArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Goals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalCountArgs} args - Arguments to filter Goals to count.
     * @example
     * // Count the number of Goals
     * const count = await prisma.goal.count({
     *   where: {
     *     // ... the filter for the Goals we want to count
     *   }
     * })
    **/
    count<T extends GoalCountArgs>(
      args?: Subset<T, GoalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GoalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Goal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GoalAggregateArgs>(args: Subset<T, GoalAggregateArgs>): Prisma.PrismaPromise<GetGoalAggregateType<T>>

    /**
     * Group by Goal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalGroupByArgs} args - Group by arguments.
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
      T extends GoalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GoalGroupByArgs['orderBy'] }
        : { orderBy?: GoalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GoalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGoalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Goal model
   */
  readonly fields: GoalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Goal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GoalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    quests<T extends Goal$questsArgs<ExtArgs> = {}>(args?: Subset<T, Goal$questsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Goal model
   */
  interface GoalFieldRefs {
    readonly id: FieldRef<"Goal", 'String'>
    readonly title: FieldRef<"Goal", 'String'>
    readonly description: FieldRef<"Goal", 'String'>
    readonly starReward: FieldRef<"Goal", 'Int'>
    readonly creatorId: FieldRef<"Goal", 'String'>
    readonly completedAt: FieldRef<"Goal", 'DateTime'>
    readonly createdAt: FieldRef<"Goal", 'DateTime'>
    readonly updatedAt: FieldRef<"Goal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Goal findUnique
   */
  export type GoalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal findUniqueOrThrow
   */
  export type GoalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal findFirst
   */
  export type GoalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Goals.
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Goals.
     */
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * Goal findFirstOrThrow
   */
  export type GoalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Goals.
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Goals.
     */
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * Goal findMany
   */
  export type GoalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goals to fetch.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Goals.
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * Goal create
   */
  export type GoalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * The data needed to create a Goal.
     */
    data: XOR<GoalCreateInput, GoalUncheckedCreateInput>
  }

  /**
   * Goal createMany
   */
  export type GoalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Goals.
     */
    data: GoalCreateManyInput | GoalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Goal createManyAndReturn
   */
  export type GoalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * The data used to create many Goals.
     */
    data: GoalCreateManyInput | GoalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Goal update
   */
  export type GoalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * The data needed to update a Goal.
     */
    data: XOR<GoalUpdateInput, GoalUncheckedUpdateInput>
    /**
     * Choose, which Goal to update.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal updateMany
   */
  export type GoalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Goals.
     */
    data: XOR<GoalUpdateManyMutationInput, GoalUncheckedUpdateManyInput>
    /**
     * Filter which Goals to update
     */
    where?: GoalWhereInput
    /**
     * Limit how many Goals to update.
     */
    limit?: number
  }

  /**
   * Goal updateManyAndReturn
   */
  export type GoalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * The data used to update Goals.
     */
    data: XOR<GoalUpdateManyMutationInput, GoalUncheckedUpdateManyInput>
    /**
     * Filter which Goals to update
     */
    where?: GoalWhereInput
    /**
     * Limit how many Goals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Goal upsert
   */
  export type GoalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * The filter to search for the Goal to update in case it exists.
     */
    where: GoalWhereUniqueInput
    /**
     * In case the Goal found by the `where` argument doesn't exist, create a new Goal with this data.
     */
    create: XOR<GoalCreateInput, GoalUncheckedCreateInput>
    /**
     * In case the Goal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GoalUpdateInput, GoalUncheckedUpdateInput>
  }

  /**
   * Goal delete
   */
  export type GoalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter which Goal to delete.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal deleteMany
   */
  export type GoalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Goals to delete
     */
    where?: GoalWhereInput
    /**
     * Limit how many Goals to delete.
     */
    limit?: number
  }

  /**
   * Goal.quests
   */
  export type Goal$questsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quest
     */
    omit?: QuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
    where?: QuestWhereInput
    orderBy?: QuestOrderByWithRelationInput | QuestOrderByWithRelationInput[]
    cursor?: QuestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestScalarFieldEnum | QuestScalarFieldEnum[]
  }

  /**
   * Goal without action
   */
  export type GoalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
  }


  /**
   * Model Quest
   */

  export type AggregateQuest = {
    _count: QuestCountAggregateOutputType | null
    _avg: QuestAvgAggregateOutputType | null
    _sum: QuestSumAggregateOutputType | null
    _min: QuestMinAggregateOutputType | null
    _max: QuestMaxAggregateOutputType | null
  }

  export type QuestAvgAggregateOutputType = {
    difficulty: number | null
  }

  export type QuestSumAggregateOutputType = {
    difficulty: number | null
  }

  export type QuestMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    deadline: Date | null
    difficulty: number | null
    creatorId: string | null
    goalId: string | null
    roomId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    deadline: Date | null
    difficulty: number | null
    creatorId: string | null
    goalId: string | null
    roomId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestCountAggregateOutputType = {
    id: number
    title: number
    description: number
    deadline: number
    difficulty: number
    creatorId: number
    goalId: number
    roomId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QuestAvgAggregateInputType = {
    difficulty?: true
  }

  export type QuestSumAggregateInputType = {
    difficulty?: true
  }

  export type QuestMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    deadline?: true
    difficulty?: true
    creatorId?: true
    goalId?: true
    roomId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    deadline?: true
    difficulty?: true
    creatorId?: true
    goalId?: true
    roomId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    deadline?: true
    difficulty?: true
    creatorId?: true
    goalId?: true
    roomId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QuestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quest to aggregate.
     */
    where?: QuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quests to fetch.
     */
    orderBy?: QuestOrderByWithRelationInput | QuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Quests
    **/
    _count?: true | QuestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestMaxAggregateInputType
  }

  export type GetQuestAggregateType<T extends QuestAggregateArgs> = {
        [P in keyof T & keyof AggregateQuest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuest[P]>
      : GetScalarType<T[P], AggregateQuest[P]>
  }




  export type QuestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestWhereInput
    orderBy?: QuestOrderByWithAggregationInput | QuestOrderByWithAggregationInput[]
    by: QuestScalarFieldEnum[] | QuestScalarFieldEnum
    having?: QuestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestCountAggregateInputType | true
    _avg?: QuestAvgAggregateInputType
    _sum?: QuestSumAggregateInputType
    _min?: QuestMinAggregateInputType
    _max?: QuestMaxAggregateInputType
  }

  export type QuestGroupByOutputType = {
    id: string
    title: string
    description: string | null
    deadline: Date
    difficulty: number
    creatorId: string
    goalId: string | null
    roomId: string | null
    createdAt: Date
    updatedAt: Date
    _count: QuestCountAggregateOutputType | null
    _avg: QuestAvgAggregateOutputType | null
    _sum: QuestSumAggregateOutputType | null
    _min: QuestMinAggregateOutputType | null
    _max: QuestMaxAggregateOutputType | null
  }

  type GetQuestGroupByPayload<T extends QuestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestGroupByOutputType[P]>
            : GetScalarType<T[P], QuestGroupByOutputType[P]>
        }
      >
    >


  export type QuestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    deadline?: boolean
    difficulty?: boolean
    creatorId?: boolean
    goalId?: boolean
    roomId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    goal?: boolean | Quest$goalArgs<ExtArgs>
    room?: boolean | Quest$roomArgs<ExtArgs>
    completions?: boolean | Quest$completionsArgs<ExtArgs>
    _count?: boolean | QuestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quest"]>

  export type QuestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    deadline?: boolean
    difficulty?: boolean
    creatorId?: boolean
    goalId?: boolean
    roomId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    goal?: boolean | Quest$goalArgs<ExtArgs>
    room?: boolean | Quest$roomArgs<ExtArgs>
  }, ExtArgs["result"]["quest"]>

  export type QuestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    deadline?: boolean
    difficulty?: boolean
    creatorId?: boolean
    goalId?: boolean
    roomId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    goal?: boolean | Quest$goalArgs<ExtArgs>
    room?: boolean | Quest$roomArgs<ExtArgs>
  }, ExtArgs["result"]["quest"]>

  export type QuestSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    deadline?: boolean
    difficulty?: boolean
    creatorId?: boolean
    goalId?: boolean
    roomId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type QuestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "deadline" | "difficulty" | "creatorId" | "goalId" | "roomId" | "createdAt" | "updatedAt", ExtArgs["result"]["quest"]>
  export type QuestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    goal?: boolean | Quest$goalArgs<ExtArgs>
    room?: boolean | Quest$roomArgs<ExtArgs>
    completions?: boolean | Quest$completionsArgs<ExtArgs>
    _count?: boolean | QuestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    goal?: boolean | Quest$goalArgs<ExtArgs>
    room?: boolean | Quest$roomArgs<ExtArgs>
  }
  export type QuestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    goal?: boolean | Quest$goalArgs<ExtArgs>
    room?: boolean | Quest$roomArgs<ExtArgs>
  }

  export type $QuestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Quest"
    objects: {
      creator: Prisma.$UserPayload<ExtArgs>
      goal: Prisma.$GoalPayload<ExtArgs> | null
      room: Prisma.$RoomPayload<ExtArgs> | null
      completions: Prisma.$QuestCompletionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      deadline: Date
      difficulty: number
      creatorId: string
      goalId: string | null
      roomId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["quest"]>
    composites: {}
  }

  type QuestGetPayload<S extends boolean | null | undefined | QuestDefaultArgs> = $Result.GetResult<Prisma.$QuestPayload, S>

  type QuestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestCountAggregateInputType | true
    }

  export interface QuestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Quest'], meta: { name: 'Quest' } }
    /**
     * Find zero or one Quest that matches the filter.
     * @param {QuestFindUniqueArgs} args - Arguments to find a Quest
     * @example
     * // Get one Quest
     * const quest = await prisma.quest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestFindUniqueArgs>(args: SelectSubset<T, QuestFindUniqueArgs<ExtArgs>>): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Quest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestFindUniqueOrThrowArgs} args - Arguments to find a Quest
     * @example
     * // Get one Quest
     * const quest = await prisma.quest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestFindFirstArgs} args - Arguments to find a Quest
     * @example
     * // Get one Quest
     * const quest = await prisma.quest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestFindFirstArgs>(args?: SelectSubset<T, QuestFindFirstArgs<ExtArgs>>): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestFindFirstOrThrowArgs} args - Arguments to find a Quest
     * @example
     * // Get one Quest
     * const quest = await prisma.quest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Quests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quests
     * const quests = await prisma.quest.findMany()
     * 
     * // Get first 10 Quests
     * const quests = await prisma.quest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questWithIdOnly = await prisma.quest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestFindManyArgs>(args?: SelectSubset<T, QuestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Quest.
     * @param {QuestCreateArgs} args - Arguments to create a Quest.
     * @example
     * // Create one Quest
     * const Quest = await prisma.quest.create({
     *   data: {
     *     // ... data to create a Quest
     *   }
     * })
     * 
     */
    create<T extends QuestCreateArgs>(args: SelectSubset<T, QuestCreateArgs<ExtArgs>>): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Quests.
     * @param {QuestCreateManyArgs} args - Arguments to create many Quests.
     * @example
     * // Create many Quests
     * const quest = await prisma.quest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestCreateManyArgs>(args?: SelectSubset<T, QuestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Quests and returns the data saved in the database.
     * @param {QuestCreateManyAndReturnArgs} args - Arguments to create many Quests.
     * @example
     * // Create many Quests
     * const quest = await prisma.quest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Quests and only return the `id`
     * const questWithIdOnly = await prisma.quest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Quest.
     * @param {QuestDeleteArgs} args - Arguments to delete one Quest.
     * @example
     * // Delete one Quest
     * const Quest = await prisma.quest.delete({
     *   where: {
     *     // ... filter to delete one Quest
     *   }
     * })
     * 
     */
    delete<T extends QuestDeleteArgs>(args: SelectSubset<T, QuestDeleteArgs<ExtArgs>>): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Quest.
     * @param {QuestUpdateArgs} args - Arguments to update one Quest.
     * @example
     * // Update one Quest
     * const quest = await prisma.quest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestUpdateArgs>(args: SelectSubset<T, QuestUpdateArgs<ExtArgs>>): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Quests.
     * @param {QuestDeleteManyArgs} args - Arguments to filter Quests to delete.
     * @example
     * // Delete a few Quests
     * const { count } = await prisma.quest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestDeleteManyArgs>(args?: SelectSubset<T, QuestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quests
     * const quest = await prisma.quest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestUpdateManyArgs>(args: SelectSubset<T, QuestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quests and returns the data updated in the database.
     * @param {QuestUpdateManyAndReturnArgs} args - Arguments to update many Quests.
     * @example
     * // Update many Quests
     * const quest = await prisma.quest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Quests and only return the `id`
     * const questWithIdOnly = await prisma.quest.updateManyAndReturn({
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
    updateManyAndReturn<T extends QuestUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Quest.
     * @param {QuestUpsertArgs} args - Arguments to update or create a Quest.
     * @example
     * // Update or create a Quest
     * const quest = await prisma.quest.upsert({
     *   create: {
     *     // ... data to create a Quest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quest we want to update
     *   }
     * })
     */
    upsert<T extends QuestUpsertArgs>(args: SelectSubset<T, QuestUpsertArgs<ExtArgs>>): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Quests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestCountArgs} args - Arguments to filter Quests to count.
     * @example
     * // Count the number of Quests
     * const count = await prisma.quest.count({
     *   where: {
     *     // ... the filter for the Quests we want to count
     *   }
     * })
    **/
    count<T extends QuestCountArgs>(
      args?: Subset<T, QuestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestAggregateArgs>(args: Subset<T, QuestAggregateArgs>): Prisma.PrismaPromise<GetQuestAggregateType<T>>

    /**
     * Group by Quest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestGroupByArgs} args - Group by arguments.
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
      T extends QuestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestGroupByArgs['orderBy'] }
        : { orderBy?: QuestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Quest model
   */
  readonly fields: QuestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Quest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    goal<T extends Quest$goalArgs<ExtArgs> = {}>(args?: Subset<T, Quest$goalArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    room<T extends Quest$roomArgs<ExtArgs> = {}>(args?: Subset<T, Quest$roomArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    completions<T extends Quest$completionsArgs<ExtArgs> = {}>(args?: Subset<T, Quest$completionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestCompletionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Quest model
   */
  interface QuestFieldRefs {
    readonly id: FieldRef<"Quest", 'String'>
    readonly title: FieldRef<"Quest", 'String'>
    readonly description: FieldRef<"Quest", 'String'>
    readonly deadline: FieldRef<"Quest", 'DateTime'>
    readonly difficulty: FieldRef<"Quest", 'Int'>
    readonly creatorId: FieldRef<"Quest", 'String'>
    readonly goalId: FieldRef<"Quest", 'String'>
    readonly roomId: FieldRef<"Quest", 'String'>
    readonly createdAt: FieldRef<"Quest", 'DateTime'>
    readonly updatedAt: FieldRef<"Quest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Quest findUnique
   */
  export type QuestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quest
     */
    omit?: QuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * Filter, which Quest to fetch.
     */
    where: QuestWhereUniqueInput
  }

  /**
   * Quest findUniqueOrThrow
   */
  export type QuestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quest
     */
    omit?: QuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * Filter, which Quest to fetch.
     */
    where: QuestWhereUniqueInput
  }

  /**
   * Quest findFirst
   */
  export type QuestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quest
     */
    omit?: QuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * Filter, which Quest to fetch.
     */
    where?: QuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quests to fetch.
     */
    orderBy?: QuestOrderByWithRelationInput | QuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quests.
     */
    cursor?: QuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quests.
     */
    distinct?: QuestScalarFieldEnum | QuestScalarFieldEnum[]
  }

  /**
   * Quest findFirstOrThrow
   */
  export type QuestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quest
     */
    omit?: QuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * Filter, which Quest to fetch.
     */
    where?: QuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quests to fetch.
     */
    orderBy?: QuestOrderByWithRelationInput | QuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quests.
     */
    cursor?: QuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quests.
     */
    distinct?: QuestScalarFieldEnum | QuestScalarFieldEnum[]
  }

  /**
   * Quest findMany
   */
  export type QuestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quest
     */
    omit?: QuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * Filter, which Quests to fetch.
     */
    where?: QuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quests to fetch.
     */
    orderBy?: QuestOrderByWithRelationInput | QuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Quests.
     */
    cursor?: QuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quests.
     */
    skip?: number
    distinct?: QuestScalarFieldEnum | QuestScalarFieldEnum[]
  }

  /**
   * Quest create
   */
  export type QuestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quest
     */
    omit?: QuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * The data needed to create a Quest.
     */
    data: XOR<QuestCreateInput, QuestUncheckedCreateInput>
  }

  /**
   * Quest createMany
   */
  export type QuestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Quests.
     */
    data: QuestCreateManyInput | QuestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Quest createManyAndReturn
   */
  export type QuestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Quest
     */
    omit?: QuestOmit<ExtArgs> | null
    /**
     * The data used to create many Quests.
     */
    data: QuestCreateManyInput | QuestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Quest update
   */
  export type QuestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quest
     */
    omit?: QuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * The data needed to update a Quest.
     */
    data: XOR<QuestUpdateInput, QuestUncheckedUpdateInput>
    /**
     * Choose, which Quest to update.
     */
    where: QuestWhereUniqueInput
  }

  /**
   * Quest updateMany
   */
  export type QuestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Quests.
     */
    data: XOR<QuestUpdateManyMutationInput, QuestUncheckedUpdateManyInput>
    /**
     * Filter which Quests to update
     */
    where?: QuestWhereInput
    /**
     * Limit how many Quests to update.
     */
    limit?: number
  }

  /**
   * Quest updateManyAndReturn
   */
  export type QuestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Quest
     */
    omit?: QuestOmit<ExtArgs> | null
    /**
     * The data used to update Quests.
     */
    data: XOR<QuestUpdateManyMutationInput, QuestUncheckedUpdateManyInput>
    /**
     * Filter which Quests to update
     */
    where?: QuestWhereInput
    /**
     * Limit how many Quests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Quest upsert
   */
  export type QuestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quest
     */
    omit?: QuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * The filter to search for the Quest to update in case it exists.
     */
    where: QuestWhereUniqueInput
    /**
     * In case the Quest found by the `where` argument doesn't exist, create a new Quest with this data.
     */
    create: XOR<QuestCreateInput, QuestUncheckedCreateInput>
    /**
     * In case the Quest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestUpdateInput, QuestUncheckedUpdateInput>
  }

  /**
   * Quest delete
   */
  export type QuestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quest
     */
    omit?: QuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * Filter which Quest to delete.
     */
    where: QuestWhereUniqueInput
  }

  /**
   * Quest deleteMany
   */
  export type QuestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quests to delete
     */
    where?: QuestWhereInput
    /**
     * Limit how many Quests to delete.
     */
    limit?: number
  }

  /**
   * Quest.goal
   */
  export type Quest$goalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    where?: GoalWhereInput
  }

  /**
   * Quest.room
   */
  export type Quest$roomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    where?: RoomWhereInput
  }

  /**
   * Quest.completions
   */
  export type Quest$completionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestCompletion
     */
    select?: QuestCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestCompletion
     */
    omit?: QuestCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestCompletionInclude<ExtArgs> | null
    where?: QuestCompletionWhereInput
    orderBy?: QuestCompletionOrderByWithRelationInput | QuestCompletionOrderByWithRelationInput[]
    cursor?: QuestCompletionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestCompletionScalarFieldEnum | QuestCompletionScalarFieldEnum[]
  }

  /**
   * Quest without action
   */
  export type QuestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quest
     */
    omit?: QuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
  }


  /**
   * Model QuestCompletion
   */

  export type AggregateQuestCompletion = {
    _count: QuestCompletionCountAggregateOutputType | null
    _avg: QuestCompletionAvgAggregateOutputType | null
    _sum: QuestCompletionSumAggregateOutputType | null
    _min: QuestCompletionMinAggregateOutputType | null
    _max: QuestCompletionMaxAggregateOutputType | null
  }

  export type QuestCompletionAvgAggregateOutputType = {
    starsAwarded: number | null
  }

  export type QuestCompletionSumAggregateOutputType = {
    starsAwarded: number | null
  }

  export type QuestCompletionMinAggregateOutputType = {
    id: string | null
    completedAt: Date | null
    isLate: boolean | null
    starsAwarded: number | null
    questId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestCompletionMaxAggregateOutputType = {
    id: string | null
    completedAt: Date | null
    isLate: boolean | null
    starsAwarded: number | null
    questId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestCompletionCountAggregateOutputType = {
    id: number
    completedAt: number
    isLate: number
    starsAwarded: number
    questId: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QuestCompletionAvgAggregateInputType = {
    starsAwarded?: true
  }

  export type QuestCompletionSumAggregateInputType = {
    starsAwarded?: true
  }

  export type QuestCompletionMinAggregateInputType = {
    id?: true
    completedAt?: true
    isLate?: true
    starsAwarded?: true
    questId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestCompletionMaxAggregateInputType = {
    id?: true
    completedAt?: true
    isLate?: true
    starsAwarded?: true
    questId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestCompletionCountAggregateInputType = {
    id?: true
    completedAt?: true
    isLate?: true
    starsAwarded?: true
    questId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QuestCompletionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuestCompletion to aggregate.
     */
    where?: QuestCompletionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestCompletions to fetch.
     */
    orderBy?: QuestCompletionOrderByWithRelationInput | QuestCompletionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestCompletionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestCompletions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestCompletions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuestCompletions
    **/
    _count?: true | QuestCompletionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestCompletionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestCompletionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestCompletionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestCompletionMaxAggregateInputType
  }

  export type GetQuestCompletionAggregateType<T extends QuestCompletionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestCompletion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestCompletion[P]>
      : GetScalarType<T[P], AggregateQuestCompletion[P]>
  }




  export type QuestCompletionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestCompletionWhereInput
    orderBy?: QuestCompletionOrderByWithAggregationInput | QuestCompletionOrderByWithAggregationInput[]
    by: QuestCompletionScalarFieldEnum[] | QuestCompletionScalarFieldEnum
    having?: QuestCompletionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestCompletionCountAggregateInputType | true
    _avg?: QuestCompletionAvgAggregateInputType
    _sum?: QuestCompletionSumAggregateInputType
    _min?: QuestCompletionMinAggregateInputType
    _max?: QuestCompletionMaxAggregateInputType
  }

  export type QuestCompletionGroupByOutputType = {
    id: string
    completedAt: Date
    isLate: boolean
    starsAwarded: number
    questId: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: QuestCompletionCountAggregateOutputType | null
    _avg: QuestCompletionAvgAggregateOutputType | null
    _sum: QuestCompletionSumAggregateOutputType | null
    _min: QuestCompletionMinAggregateOutputType | null
    _max: QuestCompletionMaxAggregateOutputType | null
  }

  type GetQuestCompletionGroupByPayload<T extends QuestCompletionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestCompletionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestCompletionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestCompletionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestCompletionGroupByOutputType[P]>
        }
      >
    >


  export type QuestCompletionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    completedAt?: boolean
    isLate?: boolean
    starsAwarded?: boolean
    questId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    quest?: boolean | QuestDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questCompletion"]>

  export type QuestCompletionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    completedAt?: boolean
    isLate?: boolean
    starsAwarded?: boolean
    questId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    quest?: boolean | QuestDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questCompletion"]>

  export type QuestCompletionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    completedAt?: boolean
    isLate?: boolean
    starsAwarded?: boolean
    questId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    quest?: boolean | QuestDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questCompletion"]>

  export type QuestCompletionSelectScalar = {
    id?: boolean
    completedAt?: boolean
    isLate?: boolean
    starsAwarded?: boolean
    questId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type QuestCompletionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "completedAt" | "isLate" | "starsAwarded" | "questId" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["questCompletion"]>
  export type QuestCompletionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quest?: boolean | QuestDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type QuestCompletionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quest?: boolean | QuestDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type QuestCompletionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quest?: boolean | QuestDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $QuestCompletionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuestCompletion"
    objects: {
      quest: Prisma.$QuestPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      completedAt: Date
      isLate: boolean
      starsAwarded: number
      questId: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["questCompletion"]>
    composites: {}
  }

  type QuestCompletionGetPayload<S extends boolean | null | undefined | QuestCompletionDefaultArgs> = $Result.GetResult<Prisma.$QuestCompletionPayload, S>

  type QuestCompletionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestCompletionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestCompletionCountAggregateInputType | true
    }

  export interface QuestCompletionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuestCompletion'], meta: { name: 'QuestCompletion' } }
    /**
     * Find zero or one QuestCompletion that matches the filter.
     * @param {QuestCompletionFindUniqueArgs} args - Arguments to find a QuestCompletion
     * @example
     * // Get one QuestCompletion
     * const questCompletion = await prisma.questCompletion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestCompletionFindUniqueArgs>(args: SelectSubset<T, QuestCompletionFindUniqueArgs<ExtArgs>>): Prisma__QuestCompletionClient<$Result.GetResult<Prisma.$QuestCompletionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuestCompletion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestCompletionFindUniqueOrThrowArgs} args - Arguments to find a QuestCompletion
     * @example
     * // Get one QuestCompletion
     * const questCompletion = await prisma.questCompletion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestCompletionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestCompletionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestCompletionClient<$Result.GetResult<Prisma.$QuestCompletionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuestCompletion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestCompletionFindFirstArgs} args - Arguments to find a QuestCompletion
     * @example
     * // Get one QuestCompletion
     * const questCompletion = await prisma.questCompletion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestCompletionFindFirstArgs>(args?: SelectSubset<T, QuestCompletionFindFirstArgs<ExtArgs>>): Prisma__QuestCompletionClient<$Result.GetResult<Prisma.$QuestCompletionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuestCompletion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestCompletionFindFirstOrThrowArgs} args - Arguments to find a QuestCompletion
     * @example
     * // Get one QuestCompletion
     * const questCompletion = await prisma.questCompletion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestCompletionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestCompletionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestCompletionClient<$Result.GetResult<Prisma.$QuestCompletionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuestCompletions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestCompletionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuestCompletions
     * const questCompletions = await prisma.questCompletion.findMany()
     * 
     * // Get first 10 QuestCompletions
     * const questCompletions = await prisma.questCompletion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questCompletionWithIdOnly = await prisma.questCompletion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestCompletionFindManyArgs>(args?: SelectSubset<T, QuestCompletionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestCompletionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuestCompletion.
     * @param {QuestCompletionCreateArgs} args - Arguments to create a QuestCompletion.
     * @example
     * // Create one QuestCompletion
     * const QuestCompletion = await prisma.questCompletion.create({
     *   data: {
     *     // ... data to create a QuestCompletion
     *   }
     * })
     * 
     */
    create<T extends QuestCompletionCreateArgs>(args: SelectSubset<T, QuestCompletionCreateArgs<ExtArgs>>): Prisma__QuestCompletionClient<$Result.GetResult<Prisma.$QuestCompletionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuestCompletions.
     * @param {QuestCompletionCreateManyArgs} args - Arguments to create many QuestCompletions.
     * @example
     * // Create many QuestCompletions
     * const questCompletion = await prisma.questCompletion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestCompletionCreateManyArgs>(args?: SelectSubset<T, QuestCompletionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuestCompletions and returns the data saved in the database.
     * @param {QuestCompletionCreateManyAndReturnArgs} args - Arguments to create many QuestCompletions.
     * @example
     * // Create many QuestCompletions
     * const questCompletion = await prisma.questCompletion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuestCompletions and only return the `id`
     * const questCompletionWithIdOnly = await prisma.questCompletion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestCompletionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestCompletionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestCompletionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuestCompletion.
     * @param {QuestCompletionDeleteArgs} args - Arguments to delete one QuestCompletion.
     * @example
     * // Delete one QuestCompletion
     * const QuestCompletion = await prisma.questCompletion.delete({
     *   where: {
     *     // ... filter to delete one QuestCompletion
     *   }
     * })
     * 
     */
    delete<T extends QuestCompletionDeleteArgs>(args: SelectSubset<T, QuestCompletionDeleteArgs<ExtArgs>>): Prisma__QuestCompletionClient<$Result.GetResult<Prisma.$QuestCompletionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuestCompletion.
     * @param {QuestCompletionUpdateArgs} args - Arguments to update one QuestCompletion.
     * @example
     * // Update one QuestCompletion
     * const questCompletion = await prisma.questCompletion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestCompletionUpdateArgs>(args: SelectSubset<T, QuestCompletionUpdateArgs<ExtArgs>>): Prisma__QuestCompletionClient<$Result.GetResult<Prisma.$QuestCompletionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuestCompletions.
     * @param {QuestCompletionDeleteManyArgs} args - Arguments to filter QuestCompletions to delete.
     * @example
     * // Delete a few QuestCompletions
     * const { count } = await prisma.questCompletion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestCompletionDeleteManyArgs>(args?: SelectSubset<T, QuestCompletionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuestCompletions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestCompletionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuestCompletions
     * const questCompletion = await prisma.questCompletion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestCompletionUpdateManyArgs>(args: SelectSubset<T, QuestCompletionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuestCompletions and returns the data updated in the database.
     * @param {QuestCompletionUpdateManyAndReturnArgs} args - Arguments to update many QuestCompletions.
     * @example
     * // Update many QuestCompletions
     * const questCompletion = await prisma.questCompletion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuestCompletions and only return the `id`
     * const questCompletionWithIdOnly = await prisma.questCompletion.updateManyAndReturn({
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
    updateManyAndReturn<T extends QuestCompletionUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestCompletionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestCompletionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuestCompletion.
     * @param {QuestCompletionUpsertArgs} args - Arguments to update or create a QuestCompletion.
     * @example
     * // Update or create a QuestCompletion
     * const questCompletion = await prisma.questCompletion.upsert({
     *   create: {
     *     // ... data to create a QuestCompletion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuestCompletion we want to update
     *   }
     * })
     */
    upsert<T extends QuestCompletionUpsertArgs>(args: SelectSubset<T, QuestCompletionUpsertArgs<ExtArgs>>): Prisma__QuestCompletionClient<$Result.GetResult<Prisma.$QuestCompletionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuestCompletions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestCompletionCountArgs} args - Arguments to filter QuestCompletions to count.
     * @example
     * // Count the number of QuestCompletions
     * const count = await prisma.questCompletion.count({
     *   where: {
     *     // ... the filter for the QuestCompletions we want to count
     *   }
     * })
    **/
    count<T extends QuestCompletionCountArgs>(
      args?: Subset<T, QuestCompletionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestCompletionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuestCompletion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestCompletionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestCompletionAggregateArgs>(args: Subset<T, QuestCompletionAggregateArgs>): Prisma.PrismaPromise<GetQuestCompletionAggregateType<T>>

    /**
     * Group by QuestCompletion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestCompletionGroupByArgs} args - Group by arguments.
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
      T extends QuestCompletionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestCompletionGroupByArgs['orderBy'] }
        : { orderBy?: QuestCompletionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuestCompletionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestCompletionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuestCompletion model
   */
  readonly fields: QuestCompletionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuestCompletion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestCompletionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quest<T extends QuestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestDefaultArgs<ExtArgs>>): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the QuestCompletion model
   */
  interface QuestCompletionFieldRefs {
    readonly id: FieldRef<"QuestCompletion", 'String'>
    readonly completedAt: FieldRef<"QuestCompletion", 'DateTime'>
    readonly isLate: FieldRef<"QuestCompletion", 'Boolean'>
    readonly starsAwarded: FieldRef<"QuestCompletion", 'Int'>
    readonly questId: FieldRef<"QuestCompletion", 'String'>
    readonly userId: FieldRef<"QuestCompletion", 'String'>
    readonly createdAt: FieldRef<"QuestCompletion", 'DateTime'>
    readonly updatedAt: FieldRef<"QuestCompletion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * QuestCompletion findUnique
   */
  export type QuestCompletionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestCompletion
     */
    select?: QuestCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestCompletion
     */
    omit?: QuestCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestCompletionInclude<ExtArgs> | null
    /**
     * Filter, which QuestCompletion to fetch.
     */
    where: QuestCompletionWhereUniqueInput
  }

  /**
   * QuestCompletion findUniqueOrThrow
   */
  export type QuestCompletionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestCompletion
     */
    select?: QuestCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestCompletion
     */
    omit?: QuestCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestCompletionInclude<ExtArgs> | null
    /**
     * Filter, which QuestCompletion to fetch.
     */
    where: QuestCompletionWhereUniqueInput
  }

  /**
   * QuestCompletion findFirst
   */
  export type QuestCompletionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestCompletion
     */
    select?: QuestCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestCompletion
     */
    omit?: QuestCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestCompletionInclude<ExtArgs> | null
    /**
     * Filter, which QuestCompletion to fetch.
     */
    where?: QuestCompletionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestCompletions to fetch.
     */
    orderBy?: QuestCompletionOrderByWithRelationInput | QuestCompletionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuestCompletions.
     */
    cursor?: QuestCompletionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestCompletions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestCompletions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestCompletions.
     */
    distinct?: QuestCompletionScalarFieldEnum | QuestCompletionScalarFieldEnum[]
  }

  /**
   * QuestCompletion findFirstOrThrow
   */
  export type QuestCompletionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestCompletion
     */
    select?: QuestCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestCompletion
     */
    omit?: QuestCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestCompletionInclude<ExtArgs> | null
    /**
     * Filter, which QuestCompletion to fetch.
     */
    where?: QuestCompletionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestCompletions to fetch.
     */
    orderBy?: QuestCompletionOrderByWithRelationInput | QuestCompletionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuestCompletions.
     */
    cursor?: QuestCompletionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestCompletions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestCompletions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestCompletions.
     */
    distinct?: QuestCompletionScalarFieldEnum | QuestCompletionScalarFieldEnum[]
  }

  /**
   * QuestCompletion findMany
   */
  export type QuestCompletionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestCompletion
     */
    select?: QuestCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestCompletion
     */
    omit?: QuestCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestCompletionInclude<ExtArgs> | null
    /**
     * Filter, which QuestCompletions to fetch.
     */
    where?: QuestCompletionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestCompletions to fetch.
     */
    orderBy?: QuestCompletionOrderByWithRelationInput | QuestCompletionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuestCompletions.
     */
    cursor?: QuestCompletionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestCompletions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestCompletions.
     */
    skip?: number
    distinct?: QuestCompletionScalarFieldEnum | QuestCompletionScalarFieldEnum[]
  }

  /**
   * QuestCompletion create
   */
  export type QuestCompletionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestCompletion
     */
    select?: QuestCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestCompletion
     */
    omit?: QuestCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestCompletionInclude<ExtArgs> | null
    /**
     * The data needed to create a QuestCompletion.
     */
    data: XOR<QuestCompletionCreateInput, QuestCompletionUncheckedCreateInput>
  }

  /**
   * QuestCompletion createMany
   */
  export type QuestCompletionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuestCompletions.
     */
    data: QuestCompletionCreateManyInput | QuestCompletionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuestCompletion createManyAndReturn
   */
  export type QuestCompletionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestCompletion
     */
    select?: QuestCompletionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuestCompletion
     */
    omit?: QuestCompletionOmit<ExtArgs> | null
    /**
     * The data used to create many QuestCompletions.
     */
    data: QuestCompletionCreateManyInput | QuestCompletionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestCompletionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuestCompletion update
   */
  export type QuestCompletionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestCompletion
     */
    select?: QuestCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestCompletion
     */
    omit?: QuestCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestCompletionInclude<ExtArgs> | null
    /**
     * The data needed to update a QuestCompletion.
     */
    data: XOR<QuestCompletionUpdateInput, QuestCompletionUncheckedUpdateInput>
    /**
     * Choose, which QuestCompletion to update.
     */
    where: QuestCompletionWhereUniqueInput
  }

  /**
   * QuestCompletion updateMany
   */
  export type QuestCompletionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuestCompletions.
     */
    data: XOR<QuestCompletionUpdateManyMutationInput, QuestCompletionUncheckedUpdateManyInput>
    /**
     * Filter which QuestCompletions to update
     */
    where?: QuestCompletionWhereInput
    /**
     * Limit how many QuestCompletions to update.
     */
    limit?: number
  }

  /**
   * QuestCompletion updateManyAndReturn
   */
  export type QuestCompletionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestCompletion
     */
    select?: QuestCompletionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuestCompletion
     */
    omit?: QuestCompletionOmit<ExtArgs> | null
    /**
     * The data used to update QuestCompletions.
     */
    data: XOR<QuestCompletionUpdateManyMutationInput, QuestCompletionUncheckedUpdateManyInput>
    /**
     * Filter which QuestCompletions to update
     */
    where?: QuestCompletionWhereInput
    /**
     * Limit how many QuestCompletions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestCompletionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuestCompletion upsert
   */
  export type QuestCompletionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestCompletion
     */
    select?: QuestCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestCompletion
     */
    omit?: QuestCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestCompletionInclude<ExtArgs> | null
    /**
     * The filter to search for the QuestCompletion to update in case it exists.
     */
    where: QuestCompletionWhereUniqueInput
    /**
     * In case the QuestCompletion found by the `where` argument doesn't exist, create a new QuestCompletion with this data.
     */
    create: XOR<QuestCompletionCreateInput, QuestCompletionUncheckedCreateInput>
    /**
     * In case the QuestCompletion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestCompletionUpdateInput, QuestCompletionUncheckedUpdateInput>
  }

  /**
   * QuestCompletion delete
   */
  export type QuestCompletionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestCompletion
     */
    select?: QuestCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestCompletion
     */
    omit?: QuestCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestCompletionInclude<ExtArgs> | null
    /**
     * Filter which QuestCompletion to delete.
     */
    where: QuestCompletionWhereUniqueInput
  }

  /**
   * QuestCompletion deleteMany
   */
  export type QuestCompletionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuestCompletions to delete
     */
    where?: QuestCompletionWhereInput
    /**
     * Limit how many QuestCompletions to delete.
     */
    limit?: number
  }

  /**
   * QuestCompletion without action
   */
  export type QuestCompletionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestCompletion
     */
    select?: QuestCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestCompletion
     */
    omit?: QuestCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestCompletionInclude<ExtArgs> | null
  }


  /**
   * Model Reward
   */

  export type AggregateReward = {
    _count: RewardCountAggregateOutputType | null
    _avg: RewardAvgAggregateOutputType | null
    _sum: RewardSumAggregateOutputType | null
    _min: RewardMinAggregateOutputType | null
    _max: RewardMaxAggregateOutputType | null
  }

  export type RewardAvgAggregateOutputType = {
    starCost: number | null
  }

  export type RewardSumAggregateOutputType = {
    starCost: number | null
  }

  export type RewardMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    starCost: number | null
    creatorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RewardMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    starCost: number | null
    creatorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RewardCountAggregateOutputType = {
    id: number
    title: number
    description: number
    starCost: number
    creatorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RewardAvgAggregateInputType = {
    starCost?: true
  }

  export type RewardSumAggregateInputType = {
    starCost?: true
  }

  export type RewardMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    starCost?: true
    creatorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RewardMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    starCost?: true
    creatorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RewardCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    starCost?: true
    creatorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RewardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reward to aggregate.
     */
    where?: RewardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rewards to fetch.
     */
    orderBy?: RewardOrderByWithRelationInput | RewardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RewardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rewards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rewards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rewards
    **/
    _count?: true | RewardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RewardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RewardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RewardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RewardMaxAggregateInputType
  }

  export type GetRewardAggregateType<T extends RewardAggregateArgs> = {
        [P in keyof T & keyof AggregateReward]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReward[P]>
      : GetScalarType<T[P], AggregateReward[P]>
  }




  export type RewardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RewardWhereInput
    orderBy?: RewardOrderByWithAggregationInput | RewardOrderByWithAggregationInput[]
    by: RewardScalarFieldEnum[] | RewardScalarFieldEnum
    having?: RewardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RewardCountAggregateInputType | true
    _avg?: RewardAvgAggregateInputType
    _sum?: RewardSumAggregateInputType
    _min?: RewardMinAggregateInputType
    _max?: RewardMaxAggregateInputType
  }

  export type RewardGroupByOutputType = {
    id: string
    title: string
    description: string | null
    starCost: number
    creatorId: string
    createdAt: Date
    updatedAt: Date
    _count: RewardCountAggregateOutputType | null
    _avg: RewardAvgAggregateOutputType | null
    _sum: RewardSumAggregateOutputType | null
    _min: RewardMinAggregateOutputType | null
    _max: RewardMaxAggregateOutputType | null
  }

  type GetRewardGroupByPayload<T extends RewardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RewardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RewardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RewardGroupByOutputType[P]>
            : GetScalarType<T[P], RewardGroupByOutputType[P]>
        }
      >
    >


  export type RewardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    starCost?: boolean
    creatorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    purchases?: boolean | Reward$purchasesArgs<ExtArgs>
    _count?: boolean | RewardCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reward"]>

  export type RewardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    starCost?: boolean
    creatorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reward"]>

  export type RewardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    starCost?: boolean
    creatorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reward"]>

  export type RewardSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    starCost?: boolean
    creatorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RewardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "starCost" | "creatorId" | "createdAt" | "updatedAt", ExtArgs["result"]["reward"]>
  export type RewardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    purchases?: boolean | Reward$purchasesArgs<ExtArgs>
    _count?: boolean | RewardCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RewardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RewardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RewardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reward"
    objects: {
      creator: Prisma.$UserPayload<ExtArgs>
      purchases: Prisma.$RewardPurchasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      starCost: number
      creatorId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["reward"]>
    composites: {}
  }

  type RewardGetPayload<S extends boolean | null | undefined | RewardDefaultArgs> = $Result.GetResult<Prisma.$RewardPayload, S>

  type RewardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RewardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RewardCountAggregateInputType | true
    }

  export interface RewardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reward'], meta: { name: 'Reward' } }
    /**
     * Find zero or one Reward that matches the filter.
     * @param {RewardFindUniqueArgs} args - Arguments to find a Reward
     * @example
     * // Get one Reward
     * const reward = await prisma.reward.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RewardFindUniqueArgs>(args: SelectSubset<T, RewardFindUniqueArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reward that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RewardFindUniqueOrThrowArgs} args - Arguments to find a Reward
     * @example
     * // Get one Reward
     * const reward = await prisma.reward.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RewardFindUniqueOrThrowArgs>(args: SelectSubset<T, RewardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reward that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardFindFirstArgs} args - Arguments to find a Reward
     * @example
     * // Get one Reward
     * const reward = await prisma.reward.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RewardFindFirstArgs>(args?: SelectSubset<T, RewardFindFirstArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reward that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardFindFirstOrThrowArgs} args - Arguments to find a Reward
     * @example
     * // Get one Reward
     * const reward = await prisma.reward.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RewardFindFirstOrThrowArgs>(args?: SelectSubset<T, RewardFindFirstOrThrowArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rewards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rewards
     * const rewards = await prisma.reward.findMany()
     * 
     * // Get first 10 Rewards
     * const rewards = await prisma.reward.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rewardWithIdOnly = await prisma.reward.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RewardFindManyArgs>(args?: SelectSubset<T, RewardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reward.
     * @param {RewardCreateArgs} args - Arguments to create a Reward.
     * @example
     * // Create one Reward
     * const Reward = await prisma.reward.create({
     *   data: {
     *     // ... data to create a Reward
     *   }
     * })
     * 
     */
    create<T extends RewardCreateArgs>(args: SelectSubset<T, RewardCreateArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rewards.
     * @param {RewardCreateManyArgs} args - Arguments to create many Rewards.
     * @example
     * // Create many Rewards
     * const reward = await prisma.reward.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RewardCreateManyArgs>(args?: SelectSubset<T, RewardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rewards and returns the data saved in the database.
     * @param {RewardCreateManyAndReturnArgs} args - Arguments to create many Rewards.
     * @example
     * // Create many Rewards
     * const reward = await prisma.reward.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rewards and only return the `id`
     * const rewardWithIdOnly = await prisma.reward.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RewardCreateManyAndReturnArgs>(args?: SelectSubset<T, RewardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reward.
     * @param {RewardDeleteArgs} args - Arguments to delete one Reward.
     * @example
     * // Delete one Reward
     * const Reward = await prisma.reward.delete({
     *   where: {
     *     // ... filter to delete one Reward
     *   }
     * })
     * 
     */
    delete<T extends RewardDeleteArgs>(args: SelectSubset<T, RewardDeleteArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reward.
     * @param {RewardUpdateArgs} args - Arguments to update one Reward.
     * @example
     * // Update one Reward
     * const reward = await prisma.reward.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RewardUpdateArgs>(args: SelectSubset<T, RewardUpdateArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rewards.
     * @param {RewardDeleteManyArgs} args - Arguments to filter Rewards to delete.
     * @example
     * // Delete a few Rewards
     * const { count } = await prisma.reward.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RewardDeleteManyArgs>(args?: SelectSubset<T, RewardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rewards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rewards
     * const reward = await prisma.reward.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RewardUpdateManyArgs>(args: SelectSubset<T, RewardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rewards and returns the data updated in the database.
     * @param {RewardUpdateManyAndReturnArgs} args - Arguments to update many Rewards.
     * @example
     * // Update many Rewards
     * const reward = await prisma.reward.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rewards and only return the `id`
     * const rewardWithIdOnly = await prisma.reward.updateManyAndReturn({
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
    updateManyAndReturn<T extends RewardUpdateManyAndReturnArgs>(args: SelectSubset<T, RewardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reward.
     * @param {RewardUpsertArgs} args - Arguments to update or create a Reward.
     * @example
     * // Update or create a Reward
     * const reward = await prisma.reward.upsert({
     *   create: {
     *     // ... data to create a Reward
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reward we want to update
     *   }
     * })
     */
    upsert<T extends RewardUpsertArgs>(args: SelectSubset<T, RewardUpsertArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rewards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardCountArgs} args - Arguments to filter Rewards to count.
     * @example
     * // Count the number of Rewards
     * const count = await prisma.reward.count({
     *   where: {
     *     // ... the filter for the Rewards we want to count
     *   }
     * })
    **/
    count<T extends RewardCountArgs>(
      args?: Subset<T, RewardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RewardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reward.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RewardAggregateArgs>(args: Subset<T, RewardAggregateArgs>): Prisma.PrismaPromise<GetRewardAggregateType<T>>

    /**
     * Group by Reward.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardGroupByArgs} args - Group by arguments.
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
      T extends RewardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RewardGroupByArgs['orderBy'] }
        : { orderBy?: RewardGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RewardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRewardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reward model
   */
  readonly fields: RewardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reward.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RewardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    purchases<T extends Reward$purchasesArgs<ExtArgs> = {}>(args?: Subset<T, Reward$purchasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardPurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Reward model
   */
  interface RewardFieldRefs {
    readonly id: FieldRef<"Reward", 'String'>
    readonly title: FieldRef<"Reward", 'String'>
    readonly description: FieldRef<"Reward", 'String'>
    readonly starCost: FieldRef<"Reward", 'Int'>
    readonly creatorId: FieldRef<"Reward", 'String'>
    readonly createdAt: FieldRef<"Reward", 'DateTime'>
    readonly updatedAt: FieldRef<"Reward", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reward findUnique
   */
  export type RewardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * Filter, which Reward to fetch.
     */
    where: RewardWhereUniqueInput
  }

  /**
   * Reward findUniqueOrThrow
   */
  export type RewardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * Filter, which Reward to fetch.
     */
    where: RewardWhereUniqueInput
  }

  /**
   * Reward findFirst
   */
  export type RewardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * Filter, which Reward to fetch.
     */
    where?: RewardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rewards to fetch.
     */
    orderBy?: RewardOrderByWithRelationInput | RewardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rewards.
     */
    cursor?: RewardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rewards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rewards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rewards.
     */
    distinct?: RewardScalarFieldEnum | RewardScalarFieldEnum[]
  }

  /**
   * Reward findFirstOrThrow
   */
  export type RewardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * Filter, which Reward to fetch.
     */
    where?: RewardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rewards to fetch.
     */
    orderBy?: RewardOrderByWithRelationInput | RewardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rewards.
     */
    cursor?: RewardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rewards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rewards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rewards.
     */
    distinct?: RewardScalarFieldEnum | RewardScalarFieldEnum[]
  }

  /**
   * Reward findMany
   */
  export type RewardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * Filter, which Rewards to fetch.
     */
    where?: RewardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rewards to fetch.
     */
    orderBy?: RewardOrderByWithRelationInput | RewardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rewards.
     */
    cursor?: RewardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rewards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rewards.
     */
    skip?: number
    distinct?: RewardScalarFieldEnum | RewardScalarFieldEnum[]
  }

  /**
   * Reward create
   */
  export type RewardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * The data needed to create a Reward.
     */
    data: XOR<RewardCreateInput, RewardUncheckedCreateInput>
  }

  /**
   * Reward createMany
   */
  export type RewardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rewards.
     */
    data: RewardCreateManyInput | RewardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reward createManyAndReturn
   */
  export type RewardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * The data used to create many Rewards.
     */
    data: RewardCreateManyInput | RewardCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reward update
   */
  export type RewardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * The data needed to update a Reward.
     */
    data: XOR<RewardUpdateInput, RewardUncheckedUpdateInput>
    /**
     * Choose, which Reward to update.
     */
    where: RewardWhereUniqueInput
  }

  /**
   * Reward updateMany
   */
  export type RewardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rewards.
     */
    data: XOR<RewardUpdateManyMutationInput, RewardUncheckedUpdateManyInput>
    /**
     * Filter which Rewards to update
     */
    where?: RewardWhereInput
    /**
     * Limit how many Rewards to update.
     */
    limit?: number
  }

  /**
   * Reward updateManyAndReturn
   */
  export type RewardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * The data used to update Rewards.
     */
    data: XOR<RewardUpdateManyMutationInput, RewardUncheckedUpdateManyInput>
    /**
     * Filter which Rewards to update
     */
    where?: RewardWhereInput
    /**
     * Limit how many Rewards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reward upsert
   */
  export type RewardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * The filter to search for the Reward to update in case it exists.
     */
    where: RewardWhereUniqueInput
    /**
     * In case the Reward found by the `where` argument doesn't exist, create a new Reward with this data.
     */
    create: XOR<RewardCreateInput, RewardUncheckedCreateInput>
    /**
     * In case the Reward was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RewardUpdateInput, RewardUncheckedUpdateInput>
  }

  /**
   * Reward delete
   */
  export type RewardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * Filter which Reward to delete.
     */
    where: RewardWhereUniqueInput
  }

  /**
   * Reward deleteMany
   */
  export type RewardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rewards to delete
     */
    where?: RewardWhereInput
    /**
     * Limit how many Rewards to delete.
     */
    limit?: number
  }

  /**
   * Reward.purchases
   */
  export type Reward$purchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardPurchase
     */
    select?: RewardPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardPurchase
     */
    omit?: RewardPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardPurchaseInclude<ExtArgs> | null
    where?: RewardPurchaseWhereInput
    orderBy?: RewardPurchaseOrderByWithRelationInput | RewardPurchaseOrderByWithRelationInput[]
    cursor?: RewardPurchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RewardPurchaseScalarFieldEnum | RewardPurchaseScalarFieldEnum[]
  }

  /**
   * Reward without action
   */
  export type RewardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
  }


  /**
   * Model RewardPurchase
   */

  export type AggregateRewardPurchase = {
    _count: RewardPurchaseCountAggregateOutputType | null
    _min: RewardPurchaseMinAggregateOutputType | null
    _max: RewardPurchaseMaxAggregateOutputType | null
  }

  export type RewardPurchaseMinAggregateOutputType = {
    id: string | null
    purchasedAt: Date | null
    rewardId: string | null
    childId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RewardPurchaseMaxAggregateOutputType = {
    id: string | null
    purchasedAt: Date | null
    rewardId: string | null
    childId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RewardPurchaseCountAggregateOutputType = {
    id: number
    purchasedAt: number
    rewardId: number
    childId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RewardPurchaseMinAggregateInputType = {
    id?: true
    purchasedAt?: true
    rewardId?: true
    childId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RewardPurchaseMaxAggregateInputType = {
    id?: true
    purchasedAt?: true
    rewardId?: true
    childId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RewardPurchaseCountAggregateInputType = {
    id?: true
    purchasedAt?: true
    rewardId?: true
    childId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RewardPurchaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RewardPurchase to aggregate.
     */
    where?: RewardPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RewardPurchases to fetch.
     */
    orderBy?: RewardPurchaseOrderByWithRelationInput | RewardPurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RewardPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RewardPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RewardPurchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RewardPurchases
    **/
    _count?: true | RewardPurchaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RewardPurchaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RewardPurchaseMaxAggregateInputType
  }

  export type GetRewardPurchaseAggregateType<T extends RewardPurchaseAggregateArgs> = {
        [P in keyof T & keyof AggregateRewardPurchase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRewardPurchase[P]>
      : GetScalarType<T[P], AggregateRewardPurchase[P]>
  }




  export type RewardPurchaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RewardPurchaseWhereInput
    orderBy?: RewardPurchaseOrderByWithAggregationInput | RewardPurchaseOrderByWithAggregationInput[]
    by: RewardPurchaseScalarFieldEnum[] | RewardPurchaseScalarFieldEnum
    having?: RewardPurchaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RewardPurchaseCountAggregateInputType | true
    _min?: RewardPurchaseMinAggregateInputType
    _max?: RewardPurchaseMaxAggregateInputType
  }

  export type RewardPurchaseGroupByOutputType = {
    id: string
    purchasedAt: Date
    rewardId: string
    childId: string
    createdAt: Date
    updatedAt: Date
    _count: RewardPurchaseCountAggregateOutputType | null
    _min: RewardPurchaseMinAggregateOutputType | null
    _max: RewardPurchaseMaxAggregateOutputType | null
  }

  type GetRewardPurchaseGroupByPayload<T extends RewardPurchaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RewardPurchaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RewardPurchaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RewardPurchaseGroupByOutputType[P]>
            : GetScalarType<T[P], RewardPurchaseGroupByOutputType[P]>
        }
      >
    >


  export type RewardPurchaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    purchasedAt?: boolean
    rewardId?: boolean
    childId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reward?: boolean | RewardDefaultArgs<ExtArgs>
    child?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rewardPurchase"]>

  export type RewardPurchaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    purchasedAt?: boolean
    rewardId?: boolean
    childId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reward?: boolean | RewardDefaultArgs<ExtArgs>
    child?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rewardPurchase"]>

  export type RewardPurchaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    purchasedAt?: boolean
    rewardId?: boolean
    childId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reward?: boolean | RewardDefaultArgs<ExtArgs>
    child?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rewardPurchase"]>

  export type RewardPurchaseSelectScalar = {
    id?: boolean
    purchasedAt?: boolean
    rewardId?: boolean
    childId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RewardPurchaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "purchasedAt" | "rewardId" | "childId" | "createdAt" | "updatedAt", ExtArgs["result"]["rewardPurchase"]>
  export type RewardPurchaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reward?: boolean | RewardDefaultArgs<ExtArgs>
    child?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RewardPurchaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reward?: boolean | RewardDefaultArgs<ExtArgs>
    child?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RewardPurchaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reward?: boolean | RewardDefaultArgs<ExtArgs>
    child?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RewardPurchasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RewardPurchase"
    objects: {
      reward: Prisma.$RewardPayload<ExtArgs>
      child: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      purchasedAt: Date
      rewardId: string
      childId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["rewardPurchase"]>
    composites: {}
  }

  type RewardPurchaseGetPayload<S extends boolean | null | undefined | RewardPurchaseDefaultArgs> = $Result.GetResult<Prisma.$RewardPurchasePayload, S>

  type RewardPurchaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RewardPurchaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RewardPurchaseCountAggregateInputType | true
    }

  export interface RewardPurchaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RewardPurchase'], meta: { name: 'RewardPurchase' } }
    /**
     * Find zero or one RewardPurchase that matches the filter.
     * @param {RewardPurchaseFindUniqueArgs} args - Arguments to find a RewardPurchase
     * @example
     * // Get one RewardPurchase
     * const rewardPurchase = await prisma.rewardPurchase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RewardPurchaseFindUniqueArgs>(args: SelectSubset<T, RewardPurchaseFindUniqueArgs<ExtArgs>>): Prisma__RewardPurchaseClient<$Result.GetResult<Prisma.$RewardPurchasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RewardPurchase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RewardPurchaseFindUniqueOrThrowArgs} args - Arguments to find a RewardPurchase
     * @example
     * // Get one RewardPurchase
     * const rewardPurchase = await prisma.rewardPurchase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RewardPurchaseFindUniqueOrThrowArgs>(args: SelectSubset<T, RewardPurchaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RewardPurchaseClient<$Result.GetResult<Prisma.$RewardPurchasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RewardPurchase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardPurchaseFindFirstArgs} args - Arguments to find a RewardPurchase
     * @example
     * // Get one RewardPurchase
     * const rewardPurchase = await prisma.rewardPurchase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RewardPurchaseFindFirstArgs>(args?: SelectSubset<T, RewardPurchaseFindFirstArgs<ExtArgs>>): Prisma__RewardPurchaseClient<$Result.GetResult<Prisma.$RewardPurchasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RewardPurchase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardPurchaseFindFirstOrThrowArgs} args - Arguments to find a RewardPurchase
     * @example
     * // Get one RewardPurchase
     * const rewardPurchase = await prisma.rewardPurchase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RewardPurchaseFindFirstOrThrowArgs>(args?: SelectSubset<T, RewardPurchaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__RewardPurchaseClient<$Result.GetResult<Prisma.$RewardPurchasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RewardPurchases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardPurchaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RewardPurchases
     * const rewardPurchases = await prisma.rewardPurchase.findMany()
     * 
     * // Get first 10 RewardPurchases
     * const rewardPurchases = await prisma.rewardPurchase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rewardPurchaseWithIdOnly = await prisma.rewardPurchase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RewardPurchaseFindManyArgs>(args?: SelectSubset<T, RewardPurchaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardPurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RewardPurchase.
     * @param {RewardPurchaseCreateArgs} args - Arguments to create a RewardPurchase.
     * @example
     * // Create one RewardPurchase
     * const RewardPurchase = await prisma.rewardPurchase.create({
     *   data: {
     *     // ... data to create a RewardPurchase
     *   }
     * })
     * 
     */
    create<T extends RewardPurchaseCreateArgs>(args: SelectSubset<T, RewardPurchaseCreateArgs<ExtArgs>>): Prisma__RewardPurchaseClient<$Result.GetResult<Prisma.$RewardPurchasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RewardPurchases.
     * @param {RewardPurchaseCreateManyArgs} args - Arguments to create many RewardPurchases.
     * @example
     * // Create many RewardPurchases
     * const rewardPurchase = await prisma.rewardPurchase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RewardPurchaseCreateManyArgs>(args?: SelectSubset<T, RewardPurchaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RewardPurchases and returns the data saved in the database.
     * @param {RewardPurchaseCreateManyAndReturnArgs} args - Arguments to create many RewardPurchases.
     * @example
     * // Create many RewardPurchases
     * const rewardPurchase = await prisma.rewardPurchase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RewardPurchases and only return the `id`
     * const rewardPurchaseWithIdOnly = await prisma.rewardPurchase.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RewardPurchaseCreateManyAndReturnArgs>(args?: SelectSubset<T, RewardPurchaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardPurchasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RewardPurchase.
     * @param {RewardPurchaseDeleteArgs} args - Arguments to delete one RewardPurchase.
     * @example
     * // Delete one RewardPurchase
     * const RewardPurchase = await prisma.rewardPurchase.delete({
     *   where: {
     *     // ... filter to delete one RewardPurchase
     *   }
     * })
     * 
     */
    delete<T extends RewardPurchaseDeleteArgs>(args: SelectSubset<T, RewardPurchaseDeleteArgs<ExtArgs>>): Prisma__RewardPurchaseClient<$Result.GetResult<Prisma.$RewardPurchasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RewardPurchase.
     * @param {RewardPurchaseUpdateArgs} args - Arguments to update one RewardPurchase.
     * @example
     * // Update one RewardPurchase
     * const rewardPurchase = await prisma.rewardPurchase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RewardPurchaseUpdateArgs>(args: SelectSubset<T, RewardPurchaseUpdateArgs<ExtArgs>>): Prisma__RewardPurchaseClient<$Result.GetResult<Prisma.$RewardPurchasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RewardPurchases.
     * @param {RewardPurchaseDeleteManyArgs} args - Arguments to filter RewardPurchases to delete.
     * @example
     * // Delete a few RewardPurchases
     * const { count } = await prisma.rewardPurchase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RewardPurchaseDeleteManyArgs>(args?: SelectSubset<T, RewardPurchaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RewardPurchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardPurchaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RewardPurchases
     * const rewardPurchase = await prisma.rewardPurchase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RewardPurchaseUpdateManyArgs>(args: SelectSubset<T, RewardPurchaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RewardPurchases and returns the data updated in the database.
     * @param {RewardPurchaseUpdateManyAndReturnArgs} args - Arguments to update many RewardPurchases.
     * @example
     * // Update many RewardPurchases
     * const rewardPurchase = await prisma.rewardPurchase.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RewardPurchases and only return the `id`
     * const rewardPurchaseWithIdOnly = await prisma.rewardPurchase.updateManyAndReturn({
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
    updateManyAndReturn<T extends RewardPurchaseUpdateManyAndReturnArgs>(args: SelectSubset<T, RewardPurchaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardPurchasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RewardPurchase.
     * @param {RewardPurchaseUpsertArgs} args - Arguments to update or create a RewardPurchase.
     * @example
     * // Update or create a RewardPurchase
     * const rewardPurchase = await prisma.rewardPurchase.upsert({
     *   create: {
     *     // ... data to create a RewardPurchase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RewardPurchase we want to update
     *   }
     * })
     */
    upsert<T extends RewardPurchaseUpsertArgs>(args: SelectSubset<T, RewardPurchaseUpsertArgs<ExtArgs>>): Prisma__RewardPurchaseClient<$Result.GetResult<Prisma.$RewardPurchasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RewardPurchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardPurchaseCountArgs} args - Arguments to filter RewardPurchases to count.
     * @example
     * // Count the number of RewardPurchases
     * const count = await prisma.rewardPurchase.count({
     *   where: {
     *     // ... the filter for the RewardPurchases we want to count
     *   }
     * })
    **/
    count<T extends RewardPurchaseCountArgs>(
      args?: Subset<T, RewardPurchaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RewardPurchaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RewardPurchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardPurchaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RewardPurchaseAggregateArgs>(args: Subset<T, RewardPurchaseAggregateArgs>): Prisma.PrismaPromise<GetRewardPurchaseAggregateType<T>>

    /**
     * Group by RewardPurchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardPurchaseGroupByArgs} args - Group by arguments.
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
      T extends RewardPurchaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RewardPurchaseGroupByArgs['orderBy'] }
        : { orderBy?: RewardPurchaseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RewardPurchaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRewardPurchaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RewardPurchase model
   */
  readonly fields: RewardPurchaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RewardPurchase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RewardPurchaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reward<T extends RewardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RewardDefaultArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    child<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RewardPurchase model
   */
  interface RewardPurchaseFieldRefs {
    readonly id: FieldRef<"RewardPurchase", 'String'>
    readonly purchasedAt: FieldRef<"RewardPurchase", 'DateTime'>
    readonly rewardId: FieldRef<"RewardPurchase", 'String'>
    readonly childId: FieldRef<"RewardPurchase", 'String'>
    readonly createdAt: FieldRef<"RewardPurchase", 'DateTime'>
    readonly updatedAt: FieldRef<"RewardPurchase", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RewardPurchase findUnique
   */
  export type RewardPurchaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardPurchase
     */
    select?: RewardPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardPurchase
     */
    omit?: RewardPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which RewardPurchase to fetch.
     */
    where: RewardPurchaseWhereUniqueInput
  }

  /**
   * RewardPurchase findUniqueOrThrow
   */
  export type RewardPurchaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardPurchase
     */
    select?: RewardPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardPurchase
     */
    omit?: RewardPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which RewardPurchase to fetch.
     */
    where: RewardPurchaseWhereUniqueInput
  }

  /**
   * RewardPurchase findFirst
   */
  export type RewardPurchaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardPurchase
     */
    select?: RewardPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardPurchase
     */
    omit?: RewardPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which RewardPurchase to fetch.
     */
    where?: RewardPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RewardPurchases to fetch.
     */
    orderBy?: RewardPurchaseOrderByWithRelationInput | RewardPurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RewardPurchases.
     */
    cursor?: RewardPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RewardPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RewardPurchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RewardPurchases.
     */
    distinct?: RewardPurchaseScalarFieldEnum | RewardPurchaseScalarFieldEnum[]
  }

  /**
   * RewardPurchase findFirstOrThrow
   */
  export type RewardPurchaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardPurchase
     */
    select?: RewardPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardPurchase
     */
    omit?: RewardPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which RewardPurchase to fetch.
     */
    where?: RewardPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RewardPurchases to fetch.
     */
    orderBy?: RewardPurchaseOrderByWithRelationInput | RewardPurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RewardPurchases.
     */
    cursor?: RewardPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RewardPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RewardPurchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RewardPurchases.
     */
    distinct?: RewardPurchaseScalarFieldEnum | RewardPurchaseScalarFieldEnum[]
  }

  /**
   * RewardPurchase findMany
   */
  export type RewardPurchaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardPurchase
     */
    select?: RewardPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardPurchase
     */
    omit?: RewardPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which RewardPurchases to fetch.
     */
    where?: RewardPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RewardPurchases to fetch.
     */
    orderBy?: RewardPurchaseOrderByWithRelationInput | RewardPurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RewardPurchases.
     */
    cursor?: RewardPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RewardPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RewardPurchases.
     */
    skip?: number
    distinct?: RewardPurchaseScalarFieldEnum | RewardPurchaseScalarFieldEnum[]
  }

  /**
   * RewardPurchase create
   */
  export type RewardPurchaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardPurchase
     */
    select?: RewardPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardPurchase
     */
    omit?: RewardPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardPurchaseInclude<ExtArgs> | null
    /**
     * The data needed to create a RewardPurchase.
     */
    data: XOR<RewardPurchaseCreateInput, RewardPurchaseUncheckedCreateInput>
  }

  /**
   * RewardPurchase createMany
   */
  export type RewardPurchaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RewardPurchases.
     */
    data: RewardPurchaseCreateManyInput | RewardPurchaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RewardPurchase createManyAndReturn
   */
  export type RewardPurchaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardPurchase
     */
    select?: RewardPurchaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RewardPurchase
     */
    omit?: RewardPurchaseOmit<ExtArgs> | null
    /**
     * The data used to create many RewardPurchases.
     */
    data: RewardPurchaseCreateManyInput | RewardPurchaseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardPurchaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RewardPurchase update
   */
  export type RewardPurchaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardPurchase
     */
    select?: RewardPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardPurchase
     */
    omit?: RewardPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardPurchaseInclude<ExtArgs> | null
    /**
     * The data needed to update a RewardPurchase.
     */
    data: XOR<RewardPurchaseUpdateInput, RewardPurchaseUncheckedUpdateInput>
    /**
     * Choose, which RewardPurchase to update.
     */
    where: RewardPurchaseWhereUniqueInput
  }

  /**
   * RewardPurchase updateMany
   */
  export type RewardPurchaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RewardPurchases.
     */
    data: XOR<RewardPurchaseUpdateManyMutationInput, RewardPurchaseUncheckedUpdateManyInput>
    /**
     * Filter which RewardPurchases to update
     */
    where?: RewardPurchaseWhereInput
    /**
     * Limit how many RewardPurchases to update.
     */
    limit?: number
  }

  /**
   * RewardPurchase updateManyAndReturn
   */
  export type RewardPurchaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardPurchase
     */
    select?: RewardPurchaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RewardPurchase
     */
    omit?: RewardPurchaseOmit<ExtArgs> | null
    /**
     * The data used to update RewardPurchases.
     */
    data: XOR<RewardPurchaseUpdateManyMutationInput, RewardPurchaseUncheckedUpdateManyInput>
    /**
     * Filter which RewardPurchases to update
     */
    where?: RewardPurchaseWhereInput
    /**
     * Limit how many RewardPurchases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardPurchaseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RewardPurchase upsert
   */
  export type RewardPurchaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardPurchase
     */
    select?: RewardPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardPurchase
     */
    omit?: RewardPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardPurchaseInclude<ExtArgs> | null
    /**
     * The filter to search for the RewardPurchase to update in case it exists.
     */
    where: RewardPurchaseWhereUniqueInput
    /**
     * In case the RewardPurchase found by the `where` argument doesn't exist, create a new RewardPurchase with this data.
     */
    create: XOR<RewardPurchaseCreateInput, RewardPurchaseUncheckedCreateInput>
    /**
     * In case the RewardPurchase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RewardPurchaseUpdateInput, RewardPurchaseUncheckedUpdateInput>
  }

  /**
   * RewardPurchase delete
   */
  export type RewardPurchaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardPurchase
     */
    select?: RewardPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardPurchase
     */
    omit?: RewardPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardPurchaseInclude<ExtArgs> | null
    /**
     * Filter which RewardPurchase to delete.
     */
    where: RewardPurchaseWhereUniqueInput
  }

  /**
   * RewardPurchase deleteMany
   */
  export type RewardPurchaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RewardPurchases to delete
     */
    where?: RewardPurchaseWhereInput
    /**
     * Limit how many RewardPurchases to delete.
     */
    limit?: number
  }

  /**
   * RewardPurchase without action
   */
  export type RewardPurchaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardPurchase
     */
    select?: RewardPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardPurchase
     */
    omit?: RewardPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardPurchaseInclude<ExtArgs> | null
  }


  /**
   * Model Boost
   */

  export type AggregateBoost = {
    _count: BoostCountAggregateOutputType | null
    _avg: BoostAvgAggregateOutputType | null
    _sum: BoostSumAggregateOutputType | null
    _min: BoostMinAggregateOutputType | null
    _max: BoostMaxAggregateOutputType | null
  }

  export type BoostAvgAggregateOutputType = {
    cooldownDays: number | null
    durationHours: number | null
  }

  export type BoostSumAggregateOutputType = {
    cooldownDays: number | null
    durationHours: number | null
  }

  export type BoostMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    cooldownDays: number | null
    durationHours: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BoostMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    cooldownDays: number | null
    durationHours: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BoostCountAggregateOutputType = {
    id: number
    name: number
    description: number
    cooldownDays: number
    durationHours: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BoostAvgAggregateInputType = {
    cooldownDays?: true
    durationHours?: true
  }

  export type BoostSumAggregateInputType = {
    cooldownDays?: true
    durationHours?: true
  }

  export type BoostMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    cooldownDays?: true
    durationHours?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BoostMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    cooldownDays?: true
    durationHours?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BoostCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    cooldownDays?: true
    durationHours?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BoostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Boost to aggregate.
     */
    where?: BoostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boosts to fetch.
     */
    orderBy?: BoostOrderByWithRelationInput | BoostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BoostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Boosts
    **/
    _count?: true | BoostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BoostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BoostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BoostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BoostMaxAggregateInputType
  }

  export type GetBoostAggregateType<T extends BoostAggregateArgs> = {
        [P in keyof T & keyof AggregateBoost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBoost[P]>
      : GetScalarType<T[P], AggregateBoost[P]>
  }




  export type BoostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoostWhereInput
    orderBy?: BoostOrderByWithAggregationInput | BoostOrderByWithAggregationInput[]
    by: BoostScalarFieldEnum[] | BoostScalarFieldEnum
    having?: BoostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BoostCountAggregateInputType | true
    _avg?: BoostAvgAggregateInputType
    _sum?: BoostSumAggregateInputType
    _min?: BoostMinAggregateInputType
    _max?: BoostMaxAggregateInputType
  }

  export type BoostGroupByOutputType = {
    id: string
    name: string
    description: string | null
    cooldownDays: number
    durationHours: number
    createdAt: Date
    updatedAt: Date
    _count: BoostCountAggregateOutputType | null
    _avg: BoostAvgAggregateOutputType | null
    _sum: BoostSumAggregateOutputType | null
    _min: BoostMinAggregateOutputType | null
    _max: BoostMaxAggregateOutputType | null
  }

  type GetBoostGroupByPayload<T extends BoostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BoostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BoostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BoostGroupByOutputType[P]>
            : GetScalarType<T[P], BoostGroupByOutputType[P]>
        }
      >
    >


  export type BoostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    cooldownDays?: boolean
    durationHours?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    activations?: boolean | Boost$activationsArgs<ExtArgs>
    _count?: boolean | BoostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["boost"]>

  export type BoostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    cooldownDays?: boolean
    durationHours?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["boost"]>

  export type BoostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    cooldownDays?: boolean
    durationHours?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["boost"]>

  export type BoostSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    cooldownDays?: boolean
    durationHours?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BoostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "cooldownDays" | "durationHours" | "createdAt" | "updatedAt", ExtArgs["result"]["boost"]>
  export type BoostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activations?: boolean | Boost$activationsArgs<ExtArgs>
    _count?: boolean | BoostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BoostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BoostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BoostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Boost"
    objects: {
      activations: Prisma.$BoostActivationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      cooldownDays: number
      durationHours: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["boost"]>
    composites: {}
  }

  type BoostGetPayload<S extends boolean | null | undefined | BoostDefaultArgs> = $Result.GetResult<Prisma.$BoostPayload, S>

  type BoostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BoostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BoostCountAggregateInputType | true
    }

  export interface BoostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Boost'], meta: { name: 'Boost' } }
    /**
     * Find zero or one Boost that matches the filter.
     * @param {BoostFindUniqueArgs} args - Arguments to find a Boost
     * @example
     * // Get one Boost
     * const boost = await prisma.boost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BoostFindUniqueArgs>(args: SelectSubset<T, BoostFindUniqueArgs<ExtArgs>>): Prisma__BoostClient<$Result.GetResult<Prisma.$BoostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Boost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BoostFindUniqueOrThrowArgs} args - Arguments to find a Boost
     * @example
     * // Get one Boost
     * const boost = await prisma.boost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BoostFindUniqueOrThrowArgs>(args: SelectSubset<T, BoostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BoostClient<$Result.GetResult<Prisma.$BoostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Boost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoostFindFirstArgs} args - Arguments to find a Boost
     * @example
     * // Get one Boost
     * const boost = await prisma.boost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BoostFindFirstArgs>(args?: SelectSubset<T, BoostFindFirstArgs<ExtArgs>>): Prisma__BoostClient<$Result.GetResult<Prisma.$BoostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Boost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoostFindFirstOrThrowArgs} args - Arguments to find a Boost
     * @example
     * // Get one Boost
     * const boost = await prisma.boost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BoostFindFirstOrThrowArgs>(args?: SelectSubset<T, BoostFindFirstOrThrowArgs<ExtArgs>>): Prisma__BoostClient<$Result.GetResult<Prisma.$BoostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Boosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Boosts
     * const boosts = await prisma.boost.findMany()
     * 
     * // Get first 10 Boosts
     * const boosts = await prisma.boost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const boostWithIdOnly = await prisma.boost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BoostFindManyArgs>(args?: SelectSubset<T, BoostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Boost.
     * @param {BoostCreateArgs} args - Arguments to create a Boost.
     * @example
     * // Create one Boost
     * const Boost = await prisma.boost.create({
     *   data: {
     *     // ... data to create a Boost
     *   }
     * })
     * 
     */
    create<T extends BoostCreateArgs>(args: SelectSubset<T, BoostCreateArgs<ExtArgs>>): Prisma__BoostClient<$Result.GetResult<Prisma.$BoostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Boosts.
     * @param {BoostCreateManyArgs} args - Arguments to create many Boosts.
     * @example
     * // Create many Boosts
     * const boost = await prisma.boost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BoostCreateManyArgs>(args?: SelectSubset<T, BoostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Boosts and returns the data saved in the database.
     * @param {BoostCreateManyAndReturnArgs} args - Arguments to create many Boosts.
     * @example
     * // Create many Boosts
     * const boost = await prisma.boost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Boosts and only return the `id`
     * const boostWithIdOnly = await prisma.boost.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BoostCreateManyAndReturnArgs>(args?: SelectSubset<T, BoostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Boost.
     * @param {BoostDeleteArgs} args - Arguments to delete one Boost.
     * @example
     * // Delete one Boost
     * const Boost = await prisma.boost.delete({
     *   where: {
     *     // ... filter to delete one Boost
     *   }
     * })
     * 
     */
    delete<T extends BoostDeleteArgs>(args: SelectSubset<T, BoostDeleteArgs<ExtArgs>>): Prisma__BoostClient<$Result.GetResult<Prisma.$BoostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Boost.
     * @param {BoostUpdateArgs} args - Arguments to update one Boost.
     * @example
     * // Update one Boost
     * const boost = await prisma.boost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BoostUpdateArgs>(args: SelectSubset<T, BoostUpdateArgs<ExtArgs>>): Prisma__BoostClient<$Result.GetResult<Prisma.$BoostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Boosts.
     * @param {BoostDeleteManyArgs} args - Arguments to filter Boosts to delete.
     * @example
     * // Delete a few Boosts
     * const { count } = await prisma.boost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BoostDeleteManyArgs>(args?: SelectSubset<T, BoostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Boosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Boosts
     * const boost = await prisma.boost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BoostUpdateManyArgs>(args: SelectSubset<T, BoostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Boosts and returns the data updated in the database.
     * @param {BoostUpdateManyAndReturnArgs} args - Arguments to update many Boosts.
     * @example
     * // Update many Boosts
     * const boost = await prisma.boost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Boosts and only return the `id`
     * const boostWithIdOnly = await prisma.boost.updateManyAndReturn({
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
    updateManyAndReturn<T extends BoostUpdateManyAndReturnArgs>(args: SelectSubset<T, BoostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Boost.
     * @param {BoostUpsertArgs} args - Arguments to update or create a Boost.
     * @example
     * // Update or create a Boost
     * const boost = await prisma.boost.upsert({
     *   create: {
     *     // ... data to create a Boost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Boost we want to update
     *   }
     * })
     */
    upsert<T extends BoostUpsertArgs>(args: SelectSubset<T, BoostUpsertArgs<ExtArgs>>): Prisma__BoostClient<$Result.GetResult<Prisma.$BoostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Boosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoostCountArgs} args - Arguments to filter Boosts to count.
     * @example
     * // Count the number of Boosts
     * const count = await prisma.boost.count({
     *   where: {
     *     // ... the filter for the Boosts we want to count
     *   }
     * })
    **/
    count<T extends BoostCountArgs>(
      args?: Subset<T, BoostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BoostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Boost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BoostAggregateArgs>(args: Subset<T, BoostAggregateArgs>): Prisma.PrismaPromise<GetBoostAggregateType<T>>

    /**
     * Group by Boost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoostGroupByArgs} args - Group by arguments.
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
      T extends BoostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BoostGroupByArgs['orderBy'] }
        : { orderBy?: BoostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BoostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Boost model
   */
  readonly fields: BoostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Boost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BoostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    activations<T extends Boost$activationsArgs<ExtArgs> = {}>(args?: Subset<T, Boost$activationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoostActivationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Boost model
   */
  interface BoostFieldRefs {
    readonly id: FieldRef<"Boost", 'String'>
    readonly name: FieldRef<"Boost", 'String'>
    readonly description: FieldRef<"Boost", 'String'>
    readonly cooldownDays: FieldRef<"Boost", 'Int'>
    readonly durationHours: FieldRef<"Boost", 'Int'>
    readonly createdAt: FieldRef<"Boost", 'DateTime'>
    readonly updatedAt: FieldRef<"Boost", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Boost findUnique
   */
  export type BoostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boost
     */
    select?: BoostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boost
     */
    omit?: BoostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoostInclude<ExtArgs> | null
    /**
     * Filter, which Boost to fetch.
     */
    where: BoostWhereUniqueInput
  }

  /**
   * Boost findUniqueOrThrow
   */
  export type BoostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boost
     */
    select?: BoostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boost
     */
    omit?: BoostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoostInclude<ExtArgs> | null
    /**
     * Filter, which Boost to fetch.
     */
    where: BoostWhereUniqueInput
  }

  /**
   * Boost findFirst
   */
  export type BoostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boost
     */
    select?: BoostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boost
     */
    omit?: BoostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoostInclude<ExtArgs> | null
    /**
     * Filter, which Boost to fetch.
     */
    where?: BoostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boosts to fetch.
     */
    orderBy?: BoostOrderByWithRelationInput | BoostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Boosts.
     */
    cursor?: BoostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Boosts.
     */
    distinct?: BoostScalarFieldEnum | BoostScalarFieldEnum[]
  }

  /**
   * Boost findFirstOrThrow
   */
  export type BoostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boost
     */
    select?: BoostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boost
     */
    omit?: BoostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoostInclude<ExtArgs> | null
    /**
     * Filter, which Boost to fetch.
     */
    where?: BoostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boosts to fetch.
     */
    orderBy?: BoostOrderByWithRelationInput | BoostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Boosts.
     */
    cursor?: BoostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Boosts.
     */
    distinct?: BoostScalarFieldEnum | BoostScalarFieldEnum[]
  }

  /**
   * Boost findMany
   */
  export type BoostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boost
     */
    select?: BoostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boost
     */
    omit?: BoostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoostInclude<ExtArgs> | null
    /**
     * Filter, which Boosts to fetch.
     */
    where?: BoostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boosts to fetch.
     */
    orderBy?: BoostOrderByWithRelationInput | BoostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Boosts.
     */
    cursor?: BoostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boosts.
     */
    skip?: number
    distinct?: BoostScalarFieldEnum | BoostScalarFieldEnum[]
  }

  /**
   * Boost create
   */
  export type BoostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boost
     */
    select?: BoostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boost
     */
    omit?: BoostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoostInclude<ExtArgs> | null
    /**
     * The data needed to create a Boost.
     */
    data: XOR<BoostCreateInput, BoostUncheckedCreateInput>
  }

  /**
   * Boost createMany
   */
  export type BoostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Boosts.
     */
    data: BoostCreateManyInput | BoostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Boost createManyAndReturn
   */
  export type BoostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boost
     */
    select?: BoostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Boost
     */
    omit?: BoostOmit<ExtArgs> | null
    /**
     * The data used to create many Boosts.
     */
    data: BoostCreateManyInput | BoostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Boost update
   */
  export type BoostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boost
     */
    select?: BoostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boost
     */
    omit?: BoostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoostInclude<ExtArgs> | null
    /**
     * The data needed to update a Boost.
     */
    data: XOR<BoostUpdateInput, BoostUncheckedUpdateInput>
    /**
     * Choose, which Boost to update.
     */
    where: BoostWhereUniqueInput
  }

  /**
   * Boost updateMany
   */
  export type BoostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Boosts.
     */
    data: XOR<BoostUpdateManyMutationInput, BoostUncheckedUpdateManyInput>
    /**
     * Filter which Boosts to update
     */
    where?: BoostWhereInput
    /**
     * Limit how many Boosts to update.
     */
    limit?: number
  }

  /**
   * Boost updateManyAndReturn
   */
  export type BoostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boost
     */
    select?: BoostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Boost
     */
    omit?: BoostOmit<ExtArgs> | null
    /**
     * The data used to update Boosts.
     */
    data: XOR<BoostUpdateManyMutationInput, BoostUncheckedUpdateManyInput>
    /**
     * Filter which Boosts to update
     */
    where?: BoostWhereInput
    /**
     * Limit how many Boosts to update.
     */
    limit?: number
  }

  /**
   * Boost upsert
   */
  export type BoostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boost
     */
    select?: BoostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boost
     */
    omit?: BoostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoostInclude<ExtArgs> | null
    /**
     * The filter to search for the Boost to update in case it exists.
     */
    where: BoostWhereUniqueInput
    /**
     * In case the Boost found by the `where` argument doesn't exist, create a new Boost with this data.
     */
    create: XOR<BoostCreateInput, BoostUncheckedCreateInput>
    /**
     * In case the Boost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BoostUpdateInput, BoostUncheckedUpdateInput>
  }

  /**
   * Boost delete
   */
  export type BoostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boost
     */
    select?: BoostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boost
     */
    omit?: BoostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoostInclude<ExtArgs> | null
    /**
     * Filter which Boost to delete.
     */
    where: BoostWhereUniqueInput
  }

  /**
   * Boost deleteMany
   */
  export type BoostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Boosts to delete
     */
    where?: BoostWhereInput
    /**
     * Limit how many Boosts to delete.
     */
    limit?: number
  }

  /**
   * Boost.activations
   */
  export type Boost$activationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoostActivation
     */
    select?: BoostActivationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoostActivation
     */
    omit?: BoostActivationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoostActivationInclude<ExtArgs> | null
    where?: BoostActivationWhereInput
    orderBy?: BoostActivationOrderByWithRelationInput | BoostActivationOrderByWithRelationInput[]
    cursor?: BoostActivationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BoostActivationScalarFieldEnum | BoostActivationScalarFieldEnum[]
  }

  /**
   * Boost without action
   */
  export type BoostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boost
     */
    select?: BoostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boost
     */
    omit?: BoostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoostInclude<ExtArgs> | null
  }


  /**
   * Model BoostActivation
   */

  export type AggregateBoostActivation = {
    _count: BoostActivationCountAggregateOutputType | null
    _min: BoostActivationMinAggregateOutputType | null
    _max: BoostActivationMaxAggregateOutputType | null
  }

  export type BoostActivationMinAggregateOutputType = {
    id: string | null
    activatedAt: Date | null
    expiresAt: Date | null
    boostId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BoostActivationMaxAggregateOutputType = {
    id: string | null
    activatedAt: Date | null
    expiresAt: Date | null
    boostId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BoostActivationCountAggregateOutputType = {
    id: number
    activatedAt: number
    expiresAt: number
    boostId: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BoostActivationMinAggregateInputType = {
    id?: true
    activatedAt?: true
    expiresAt?: true
    boostId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BoostActivationMaxAggregateInputType = {
    id?: true
    activatedAt?: true
    expiresAt?: true
    boostId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BoostActivationCountAggregateInputType = {
    id?: true
    activatedAt?: true
    expiresAt?: true
    boostId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BoostActivationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BoostActivation to aggregate.
     */
    where?: BoostActivationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoostActivations to fetch.
     */
    orderBy?: BoostActivationOrderByWithRelationInput | BoostActivationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BoostActivationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoostActivations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoostActivations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BoostActivations
    **/
    _count?: true | BoostActivationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BoostActivationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BoostActivationMaxAggregateInputType
  }

  export type GetBoostActivationAggregateType<T extends BoostActivationAggregateArgs> = {
        [P in keyof T & keyof AggregateBoostActivation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBoostActivation[P]>
      : GetScalarType<T[P], AggregateBoostActivation[P]>
  }




  export type BoostActivationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoostActivationWhereInput
    orderBy?: BoostActivationOrderByWithAggregationInput | BoostActivationOrderByWithAggregationInput[]
    by: BoostActivationScalarFieldEnum[] | BoostActivationScalarFieldEnum
    having?: BoostActivationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BoostActivationCountAggregateInputType | true
    _min?: BoostActivationMinAggregateInputType
    _max?: BoostActivationMaxAggregateInputType
  }

  export type BoostActivationGroupByOutputType = {
    id: string
    activatedAt: Date
    expiresAt: Date
    boostId: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: BoostActivationCountAggregateOutputType | null
    _min: BoostActivationMinAggregateOutputType | null
    _max: BoostActivationMaxAggregateOutputType | null
  }

  type GetBoostActivationGroupByPayload<T extends BoostActivationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BoostActivationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BoostActivationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BoostActivationGroupByOutputType[P]>
            : GetScalarType<T[P], BoostActivationGroupByOutputType[P]>
        }
      >
    >


  export type BoostActivationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    activatedAt?: boolean
    expiresAt?: boolean
    boostId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    boost?: boolean | BoostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["boostActivation"]>

  export type BoostActivationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    activatedAt?: boolean
    expiresAt?: boolean
    boostId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    boost?: boolean | BoostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["boostActivation"]>

  export type BoostActivationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    activatedAt?: boolean
    expiresAt?: boolean
    boostId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    boost?: boolean | BoostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["boostActivation"]>

  export type BoostActivationSelectScalar = {
    id?: boolean
    activatedAt?: boolean
    expiresAt?: boolean
    boostId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BoostActivationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "activatedAt" | "expiresAt" | "boostId" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["boostActivation"]>
  export type BoostActivationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    boost?: boolean | BoostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BoostActivationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    boost?: boolean | BoostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BoostActivationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    boost?: boolean | BoostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BoostActivationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BoostActivation"
    objects: {
      boost: Prisma.$BoostPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      activatedAt: Date
      expiresAt: Date
      boostId: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["boostActivation"]>
    composites: {}
  }

  type BoostActivationGetPayload<S extends boolean | null | undefined | BoostActivationDefaultArgs> = $Result.GetResult<Prisma.$BoostActivationPayload, S>

  type BoostActivationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BoostActivationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BoostActivationCountAggregateInputType | true
    }

  export interface BoostActivationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BoostActivation'], meta: { name: 'BoostActivation' } }
    /**
     * Find zero or one BoostActivation that matches the filter.
     * @param {BoostActivationFindUniqueArgs} args - Arguments to find a BoostActivation
     * @example
     * // Get one BoostActivation
     * const boostActivation = await prisma.boostActivation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BoostActivationFindUniqueArgs>(args: SelectSubset<T, BoostActivationFindUniqueArgs<ExtArgs>>): Prisma__BoostActivationClient<$Result.GetResult<Prisma.$BoostActivationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BoostActivation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BoostActivationFindUniqueOrThrowArgs} args - Arguments to find a BoostActivation
     * @example
     * // Get one BoostActivation
     * const boostActivation = await prisma.boostActivation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BoostActivationFindUniqueOrThrowArgs>(args: SelectSubset<T, BoostActivationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BoostActivationClient<$Result.GetResult<Prisma.$BoostActivationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BoostActivation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoostActivationFindFirstArgs} args - Arguments to find a BoostActivation
     * @example
     * // Get one BoostActivation
     * const boostActivation = await prisma.boostActivation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BoostActivationFindFirstArgs>(args?: SelectSubset<T, BoostActivationFindFirstArgs<ExtArgs>>): Prisma__BoostActivationClient<$Result.GetResult<Prisma.$BoostActivationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BoostActivation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoostActivationFindFirstOrThrowArgs} args - Arguments to find a BoostActivation
     * @example
     * // Get one BoostActivation
     * const boostActivation = await prisma.boostActivation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BoostActivationFindFirstOrThrowArgs>(args?: SelectSubset<T, BoostActivationFindFirstOrThrowArgs<ExtArgs>>): Prisma__BoostActivationClient<$Result.GetResult<Prisma.$BoostActivationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BoostActivations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoostActivationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BoostActivations
     * const boostActivations = await prisma.boostActivation.findMany()
     * 
     * // Get first 10 BoostActivations
     * const boostActivations = await prisma.boostActivation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const boostActivationWithIdOnly = await prisma.boostActivation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BoostActivationFindManyArgs>(args?: SelectSubset<T, BoostActivationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoostActivationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BoostActivation.
     * @param {BoostActivationCreateArgs} args - Arguments to create a BoostActivation.
     * @example
     * // Create one BoostActivation
     * const BoostActivation = await prisma.boostActivation.create({
     *   data: {
     *     // ... data to create a BoostActivation
     *   }
     * })
     * 
     */
    create<T extends BoostActivationCreateArgs>(args: SelectSubset<T, BoostActivationCreateArgs<ExtArgs>>): Prisma__BoostActivationClient<$Result.GetResult<Prisma.$BoostActivationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BoostActivations.
     * @param {BoostActivationCreateManyArgs} args - Arguments to create many BoostActivations.
     * @example
     * // Create many BoostActivations
     * const boostActivation = await prisma.boostActivation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BoostActivationCreateManyArgs>(args?: SelectSubset<T, BoostActivationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BoostActivations and returns the data saved in the database.
     * @param {BoostActivationCreateManyAndReturnArgs} args - Arguments to create many BoostActivations.
     * @example
     * // Create many BoostActivations
     * const boostActivation = await prisma.boostActivation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BoostActivations and only return the `id`
     * const boostActivationWithIdOnly = await prisma.boostActivation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BoostActivationCreateManyAndReturnArgs>(args?: SelectSubset<T, BoostActivationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoostActivationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BoostActivation.
     * @param {BoostActivationDeleteArgs} args - Arguments to delete one BoostActivation.
     * @example
     * // Delete one BoostActivation
     * const BoostActivation = await prisma.boostActivation.delete({
     *   where: {
     *     // ... filter to delete one BoostActivation
     *   }
     * })
     * 
     */
    delete<T extends BoostActivationDeleteArgs>(args: SelectSubset<T, BoostActivationDeleteArgs<ExtArgs>>): Prisma__BoostActivationClient<$Result.GetResult<Prisma.$BoostActivationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BoostActivation.
     * @param {BoostActivationUpdateArgs} args - Arguments to update one BoostActivation.
     * @example
     * // Update one BoostActivation
     * const boostActivation = await prisma.boostActivation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BoostActivationUpdateArgs>(args: SelectSubset<T, BoostActivationUpdateArgs<ExtArgs>>): Prisma__BoostActivationClient<$Result.GetResult<Prisma.$BoostActivationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BoostActivations.
     * @param {BoostActivationDeleteManyArgs} args - Arguments to filter BoostActivations to delete.
     * @example
     * // Delete a few BoostActivations
     * const { count } = await prisma.boostActivation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BoostActivationDeleteManyArgs>(args?: SelectSubset<T, BoostActivationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BoostActivations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoostActivationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BoostActivations
     * const boostActivation = await prisma.boostActivation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BoostActivationUpdateManyArgs>(args: SelectSubset<T, BoostActivationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BoostActivations and returns the data updated in the database.
     * @param {BoostActivationUpdateManyAndReturnArgs} args - Arguments to update many BoostActivations.
     * @example
     * // Update many BoostActivations
     * const boostActivation = await prisma.boostActivation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BoostActivations and only return the `id`
     * const boostActivationWithIdOnly = await prisma.boostActivation.updateManyAndReturn({
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
    updateManyAndReturn<T extends BoostActivationUpdateManyAndReturnArgs>(args: SelectSubset<T, BoostActivationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoostActivationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BoostActivation.
     * @param {BoostActivationUpsertArgs} args - Arguments to update or create a BoostActivation.
     * @example
     * // Update or create a BoostActivation
     * const boostActivation = await prisma.boostActivation.upsert({
     *   create: {
     *     // ... data to create a BoostActivation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BoostActivation we want to update
     *   }
     * })
     */
    upsert<T extends BoostActivationUpsertArgs>(args: SelectSubset<T, BoostActivationUpsertArgs<ExtArgs>>): Prisma__BoostActivationClient<$Result.GetResult<Prisma.$BoostActivationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BoostActivations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoostActivationCountArgs} args - Arguments to filter BoostActivations to count.
     * @example
     * // Count the number of BoostActivations
     * const count = await prisma.boostActivation.count({
     *   where: {
     *     // ... the filter for the BoostActivations we want to count
     *   }
     * })
    **/
    count<T extends BoostActivationCountArgs>(
      args?: Subset<T, BoostActivationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BoostActivationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BoostActivation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoostActivationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BoostActivationAggregateArgs>(args: Subset<T, BoostActivationAggregateArgs>): Prisma.PrismaPromise<GetBoostActivationAggregateType<T>>

    /**
     * Group by BoostActivation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoostActivationGroupByArgs} args - Group by arguments.
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
      T extends BoostActivationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BoostActivationGroupByArgs['orderBy'] }
        : { orderBy?: BoostActivationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BoostActivationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoostActivationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BoostActivation model
   */
  readonly fields: BoostActivationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BoostActivation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BoostActivationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    boost<T extends BoostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BoostDefaultArgs<ExtArgs>>): Prisma__BoostClient<$Result.GetResult<Prisma.$BoostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BoostActivation model
   */
  interface BoostActivationFieldRefs {
    readonly id: FieldRef<"BoostActivation", 'String'>
    readonly activatedAt: FieldRef<"BoostActivation", 'DateTime'>
    readonly expiresAt: FieldRef<"BoostActivation", 'DateTime'>
    readonly boostId: FieldRef<"BoostActivation", 'String'>
    readonly userId: FieldRef<"BoostActivation", 'String'>
    readonly createdAt: FieldRef<"BoostActivation", 'DateTime'>
    readonly updatedAt: FieldRef<"BoostActivation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BoostActivation findUnique
   */
  export type BoostActivationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoostActivation
     */
    select?: BoostActivationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoostActivation
     */
    omit?: BoostActivationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoostActivationInclude<ExtArgs> | null
    /**
     * Filter, which BoostActivation to fetch.
     */
    where: BoostActivationWhereUniqueInput
  }

  /**
   * BoostActivation findUniqueOrThrow
   */
  export type BoostActivationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoostActivation
     */
    select?: BoostActivationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoostActivation
     */
    omit?: BoostActivationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoostActivationInclude<ExtArgs> | null
    /**
     * Filter, which BoostActivation to fetch.
     */
    where: BoostActivationWhereUniqueInput
  }

  /**
   * BoostActivation findFirst
   */
  export type BoostActivationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoostActivation
     */
    select?: BoostActivationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoostActivation
     */
    omit?: BoostActivationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoostActivationInclude<ExtArgs> | null
    /**
     * Filter, which BoostActivation to fetch.
     */
    where?: BoostActivationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoostActivations to fetch.
     */
    orderBy?: BoostActivationOrderByWithRelationInput | BoostActivationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BoostActivations.
     */
    cursor?: BoostActivationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoostActivations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoostActivations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BoostActivations.
     */
    distinct?: BoostActivationScalarFieldEnum | BoostActivationScalarFieldEnum[]
  }

  /**
   * BoostActivation findFirstOrThrow
   */
  export type BoostActivationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoostActivation
     */
    select?: BoostActivationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoostActivation
     */
    omit?: BoostActivationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoostActivationInclude<ExtArgs> | null
    /**
     * Filter, which BoostActivation to fetch.
     */
    where?: BoostActivationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoostActivations to fetch.
     */
    orderBy?: BoostActivationOrderByWithRelationInput | BoostActivationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BoostActivations.
     */
    cursor?: BoostActivationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoostActivations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoostActivations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BoostActivations.
     */
    distinct?: BoostActivationScalarFieldEnum | BoostActivationScalarFieldEnum[]
  }

  /**
   * BoostActivation findMany
   */
  export type BoostActivationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoostActivation
     */
    select?: BoostActivationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoostActivation
     */
    omit?: BoostActivationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoostActivationInclude<ExtArgs> | null
    /**
     * Filter, which BoostActivations to fetch.
     */
    where?: BoostActivationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoostActivations to fetch.
     */
    orderBy?: BoostActivationOrderByWithRelationInput | BoostActivationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BoostActivations.
     */
    cursor?: BoostActivationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoostActivations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoostActivations.
     */
    skip?: number
    distinct?: BoostActivationScalarFieldEnum | BoostActivationScalarFieldEnum[]
  }

  /**
   * BoostActivation create
   */
  export type BoostActivationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoostActivation
     */
    select?: BoostActivationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoostActivation
     */
    omit?: BoostActivationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoostActivationInclude<ExtArgs> | null
    /**
     * The data needed to create a BoostActivation.
     */
    data: XOR<BoostActivationCreateInput, BoostActivationUncheckedCreateInput>
  }

  /**
   * BoostActivation createMany
   */
  export type BoostActivationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BoostActivations.
     */
    data: BoostActivationCreateManyInput | BoostActivationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BoostActivation createManyAndReturn
   */
  export type BoostActivationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoostActivation
     */
    select?: BoostActivationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BoostActivation
     */
    omit?: BoostActivationOmit<ExtArgs> | null
    /**
     * The data used to create many BoostActivations.
     */
    data: BoostActivationCreateManyInput | BoostActivationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoostActivationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BoostActivation update
   */
  export type BoostActivationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoostActivation
     */
    select?: BoostActivationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoostActivation
     */
    omit?: BoostActivationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoostActivationInclude<ExtArgs> | null
    /**
     * The data needed to update a BoostActivation.
     */
    data: XOR<BoostActivationUpdateInput, BoostActivationUncheckedUpdateInput>
    /**
     * Choose, which BoostActivation to update.
     */
    where: BoostActivationWhereUniqueInput
  }

  /**
   * BoostActivation updateMany
   */
  export type BoostActivationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BoostActivations.
     */
    data: XOR<BoostActivationUpdateManyMutationInput, BoostActivationUncheckedUpdateManyInput>
    /**
     * Filter which BoostActivations to update
     */
    where?: BoostActivationWhereInput
    /**
     * Limit how many BoostActivations to update.
     */
    limit?: number
  }

  /**
   * BoostActivation updateManyAndReturn
   */
  export type BoostActivationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoostActivation
     */
    select?: BoostActivationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BoostActivation
     */
    omit?: BoostActivationOmit<ExtArgs> | null
    /**
     * The data used to update BoostActivations.
     */
    data: XOR<BoostActivationUpdateManyMutationInput, BoostActivationUncheckedUpdateManyInput>
    /**
     * Filter which BoostActivations to update
     */
    where?: BoostActivationWhereInput
    /**
     * Limit how many BoostActivations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoostActivationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BoostActivation upsert
   */
  export type BoostActivationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoostActivation
     */
    select?: BoostActivationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoostActivation
     */
    omit?: BoostActivationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoostActivationInclude<ExtArgs> | null
    /**
     * The filter to search for the BoostActivation to update in case it exists.
     */
    where: BoostActivationWhereUniqueInput
    /**
     * In case the BoostActivation found by the `where` argument doesn't exist, create a new BoostActivation with this data.
     */
    create: XOR<BoostActivationCreateInput, BoostActivationUncheckedCreateInput>
    /**
     * In case the BoostActivation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BoostActivationUpdateInput, BoostActivationUncheckedUpdateInput>
  }

  /**
   * BoostActivation delete
   */
  export type BoostActivationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoostActivation
     */
    select?: BoostActivationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoostActivation
     */
    omit?: BoostActivationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoostActivationInclude<ExtArgs> | null
    /**
     * Filter which BoostActivation to delete.
     */
    where: BoostActivationWhereUniqueInput
  }

  /**
   * BoostActivation deleteMany
   */
  export type BoostActivationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BoostActivations to delete
     */
    where?: BoostActivationWhereInput
    /**
     * Limit how many BoostActivations to delete.
     */
    limit?: number
  }

  /**
   * BoostActivation without action
   */
  export type BoostActivationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoostActivation
     */
    select?: BoostActivationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoostActivation
     */
    omit?: BoostActivationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoostActivationInclude<ExtArgs> | null
  }


  /**
   * Model Room
   */

  export type AggregateRoom = {
    _count: RoomCountAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  export type RoomMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createUserId: string | null
  }

  export type RoomMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createUserId: string | null
  }

  export type RoomCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    createUserId: number
    _all: number
  }


  export type RoomMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    createUserId?: true
  }

  export type RoomMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    createUserId?: true
  }

  export type RoomCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    createUserId?: true
    _all?: true
  }

  export type RoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Room to aggregate.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rooms
    **/
    _count?: true | RoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMaxAggregateInputType
  }

  export type GetRoomAggregateType<T extends RoomAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom[P]>
      : GetScalarType<T[P], AggregateRoom[P]>
  }




  export type RoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithAggregationInput | RoomOrderByWithAggregationInput[]
    by: RoomScalarFieldEnum[] | RoomScalarFieldEnum
    having?: RoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomCountAggregateInputType | true
    _min?: RoomMinAggregateInputType
    _max?: RoomMaxAggregateInputType
  }

  export type RoomGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    createUserId: string
    _count: RoomCountAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  type GetRoomGroupByPayload<T extends RoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomGroupByOutputType[P]>
            : GetScalarType<T[P], RoomGroupByOutputType[P]>
        }
      >
    >


  export type RoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createUserId?: boolean
    createUser?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | Room$membersArgs<ExtArgs>
    invitations?: boolean | Room$invitationsArgs<ExtArgs>
    quests?: boolean | Room$questsArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createUserId?: boolean
    createUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createUserId?: boolean
    createUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createUserId?: boolean
  }

  export type RoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt" | "createUserId", ExtArgs["result"]["room"]>
  export type RoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createUser?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | Room$membersArgs<ExtArgs>
    invitations?: boolean | Room$invitationsArgs<ExtArgs>
    quests?: boolean | Room$questsArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RoomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createUser?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Room"
    objects: {
      createUser: Prisma.$UserPayload<ExtArgs>
      members: Prisma.$RoomMemberPayload<ExtArgs>[]
      invitations: Prisma.$InvitationPayload<ExtArgs>[]
      quests: Prisma.$QuestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
      createUserId: string
    }, ExtArgs["result"]["room"]>
    composites: {}
  }

  type RoomGetPayload<S extends boolean | null | undefined | RoomDefaultArgs> = $Result.GetResult<Prisma.$RoomPayload, S>

  type RoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomCountAggregateInputType | true
    }

  export interface RoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Room'], meta: { name: 'Room' } }
    /**
     * Find zero or one Room that matches the filter.
     * @param {RoomFindUniqueArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomFindUniqueArgs>(args: SelectSubset<T, RoomFindUniqueArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Room that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomFindUniqueOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomFindFirstArgs>(args?: SelectSubset<T, RoomFindFirstArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.room.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.room.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomWithIdOnly = await prisma.room.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomFindManyArgs>(args?: SelectSubset<T, RoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Room.
     * @param {RoomCreateArgs} args - Arguments to create a Room.
     * @example
     * // Create one Room
     * const Room = await prisma.room.create({
     *   data: {
     *     // ... data to create a Room
     *   }
     * })
     * 
     */
    create<T extends RoomCreateArgs>(args: SelectSubset<T, RoomCreateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rooms.
     * @param {RoomCreateManyArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomCreateManyArgs>(args?: SelectSubset<T, RoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rooms and returns the data saved in the database.
     * @param {RoomCreateManyAndReturnArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Room.
     * @param {RoomDeleteArgs} args - Arguments to delete one Room.
     * @example
     * // Delete one Room
     * const Room = await prisma.room.delete({
     *   where: {
     *     // ... filter to delete one Room
     *   }
     * })
     * 
     */
    delete<T extends RoomDeleteArgs>(args: SelectSubset<T, RoomDeleteArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Room.
     * @param {RoomUpdateArgs} args - Arguments to update one Room.
     * @example
     * // Update one Room
     * const room = await prisma.room.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomUpdateArgs>(args: SelectSubset<T, RoomUpdateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rooms.
     * @param {RoomDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.room.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomDeleteManyArgs>(args?: SelectSubset<T, RoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomUpdateManyArgs>(args: SelectSubset<T, RoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms and returns the data updated in the database.
     * @param {RoomUpdateManyAndReturnArgs} args - Arguments to update many Rooms.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.updateManyAndReturn({
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
    updateManyAndReturn<T extends RoomUpdateManyAndReturnArgs>(args: SelectSubset<T, RoomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Room.
     * @param {RoomUpsertArgs} args - Arguments to update or create a Room.
     * @example
     * // Update or create a Room
     * const room = await prisma.room.upsert({
     *   create: {
     *     // ... data to create a Room
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room we want to update
     *   }
     * })
     */
    upsert<T extends RoomUpsertArgs>(args: SelectSubset<T, RoomUpsertArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.room.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends RoomCountArgs>(
      args?: Subset<T, RoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoomAggregateArgs>(args: Subset<T, RoomAggregateArgs>): Prisma.PrismaPromise<GetRoomAggregateType<T>>

    /**
     * Group by Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomGroupByArgs} args - Group by arguments.
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
      T extends RoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomGroupByArgs['orderBy'] }
        : { orderBy?: RoomGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Room model
   */
  readonly fields: RoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Room.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    members<T extends Room$membersArgs<ExtArgs> = {}>(args?: Subset<T, Room$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invitations<T extends Room$invitationsArgs<ExtArgs> = {}>(args?: Subset<T, Room$invitationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    quests<T extends Room$questsArgs<ExtArgs> = {}>(args?: Subset<T, Room$questsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Room model
   */
  interface RoomFieldRefs {
    readonly id: FieldRef<"Room", 'String'>
    readonly name: FieldRef<"Room", 'String'>
    readonly createdAt: FieldRef<"Room", 'DateTime'>
    readonly updatedAt: FieldRef<"Room", 'DateTime'>
    readonly createUserId: FieldRef<"Room", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Room findUnique
   */
  export type RoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findUniqueOrThrow
   */
  export type RoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findFirst
   */
  export type RoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findFirstOrThrow
   */
  export type RoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findMany
   */
  export type RoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room create
   */
  export type RoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to create a Room.
     */
    data: XOR<RoomCreateInput, RoomUncheckedCreateInput>
  }

  /**
   * Room createMany
   */
  export type RoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Room createManyAndReturn
   */
  export type RoomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Room update
   */
  export type RoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to update a Room.
     */
    data: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
    /**
     * Choose, which Room to update.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room updateMany
   */
  export type RoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
  }

  /**
   * Room updateManyAndReturn
   */
  export type RoomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Room upsert
   */
  export type RoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The filter to search for the Room to update in case it exists.
     */
    where: RoomWhereUniqueInput
    /**
     * In case the Room found by the `where` argument doesn't exist, create a new Room with this data.
     */
    create: XOR<RoomCreateInput, RoomUncheckedCreateInput>
    /**
     * In case the Room was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
  }

  /**
   * Room delete
   */
  export type RoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter which Room to delete.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room deleteMany
   */
  export type RoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rooms to delete
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to delete.
     */
    limit?: number
  }

  /**
   * Room.members
   */
  export type Room$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMember
     */
    select?: RoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMember
     */
    omit?: RoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMemberInclude<ExtArgs> | null
    where?: RoomMemberWhereInput
    orderBy?: RoomMemberOrderByWithRelationInput | RoomMemberOrderByWithRelationInput[]
    cursor?: RoomMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomMemberScalarFieldEnum | RoomMemberScalarFieldEnum[]
  }

  /**
   * Room.invitations
   */
  export type Room$invitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    where?: InvitationWhereInput
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    cursor?: InvitationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }

  /**
   * Room.quests
   */
  export type Room$questsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quest
     */
    omit?: QuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
    where?: QuestWhereInput
    orderBy?: QuestOrderByWithRelationInput | QuestOrderByWithRelationInput[]
    cursor?: QuestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestScalarFieldEnum | QuestScalarFieldEnum[]
  }

  /**
   * Room without action
   */
  export type RoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
  }


  /**
   * Model RoomMember
   */

  export type AggregateRoomMember = {
    _count: RoomMemberCountAggregateOutputType | null
    _min: RoomMemberMinAggregateOutputType | null
    _max: RoomMemberMaxAggregateOutputType | null
  }

  export type RoomMemberMinAggregateOutputType = {
    id: string | null
    roomId: string | null
    userId: string | null
    role: $Enums.UserRole | null
    joinedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoomMemberMaxAggregateOutputType = {
    id: string | null
    roomId: string | null
    userId: string | null
    role: $Enums.UserRole | null
    joinedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoomMemberCountAggregateOutputType = {
    id: number
    roomId: number
    userId: number
    role: number
    joinedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoomMemberMinAggregateInputType = {
    id?: true
    roomId?: true
    userId?: true
    role?: true
    joinedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoomMemberMaxAggregateInputType = {
    id?: true
    roomId?: true
    userId?: true
    role?: true
    joinedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoomMemberCountAggregateInputType = {
    id?: true
    roomId?: true
    userId?: true
    role?: true
    joinedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoomMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomMember to aggregate.
     */
    where?: RoomMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomMembers to fetch.
     */
    orderBy?: RoomMemberOrderByWithRelationInput | RoomMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoomMembers
    **/
    _count?: true | RoomMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMemberMaxAggregateInputType
  }

  export type GetRoomMemberAggregateType<T extends RoomMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateRoomMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoomMember[P]>
      : GetScalarType<T[P], AggregateRoomMember[P]>
  }




  export type RoomMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomMemberWhereInput
    orderBy?: RoomMemberOrderByWithAggregationInput | RoomMemberOrderByWithAggregationInput[]
    by: RoomMemberScalarFieldEnum[] | RoomMemberScalarFieldEnum
    having?: RoomMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomMemberCountAggregateInputType | true
    _min?: RoomMemberMinAggregateInputType
    _max?: RoomMemberMaxAggregateInputType
  }

  export type RoomMemberGroupByOutputType = {
    id: string
    roomId: string
    userId: string
    role: $Enums.UserRole
    joinedAt: Date
    createdAt: Date
    updatedAt: Date
    _count: RoomMemberCountAggregateOutputType | null
    _min: RoomMemberMinAggregateOutputType | null
    _max: RoomMemberMaxAggregateOutputType | null
  }

  type GetRoomMemberGroupByPayload<T extends RoomMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomMemberGroupByOutputType[P]>
            : GetScalarType<T[P], RoomMemberGroupByOutputType[P]>
        }
      >
    >


  export type RoomMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    userId?: boolean
    role?: boolean
    joinedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomMember"]>

  export type RoomMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    userId?: boolean
    role?: boolean
    joinedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomMember"]>

  export type RoomMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    userId?: boolean
    role?: boolean
    joinedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomMember"]>

  export type RoomMemberSelectScalar = {
    id?: boolean
    roomId?: boolean
    userId?: boolean
    role?: boolean
    joinedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoomMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roomId" | "userId" | "role" | "joinedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["roomMember"]>
  export type RoomMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RoomMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RoomMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RoomMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoomMember"
    objects: {
      room: Prisma.$RoomPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      roomId: string
      userId: string
      role: $Enums.UserRole
      joinedAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["roomMember"]>
    composites: {}
  }

  type RoomMemberGetPayload<S extends boolean | null | undefined | RoomMemberDefaultArgs> = $Result.GetResult<Prisma.$RoomMemberPayload, S>

  type RoomMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomMemberCountAggregateInputType | true
    }

  export interface RoomMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoomMember'], meta: { name: 'RoomMember' } }
    /**
     * Find zero or one RoomMember that matches the filter.
     * @param {RoomMemberFindUniqueArgs} args - Arguments to find a RoomMember
     * @example
     * // Get one RoomMember
     * const roomMember = await prisma.roomMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomMemberFindUniqueArgs>(args: SelectSubset<T, RoomMemberFindUniqueArgs<ExtArgs>>): Prisma__RoomMemberClient<$Result.GetResult<Prisma.$RoomMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RoomMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomMemberFindUniqueOrThrowArgs} args - Arguments to find a RoomMember
     * @example
     * // Get one RoomMember
     * const roomMember = await prisma.roomMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomMemberClient<$Result.GetResult<Prisma.$RoomMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomMemberFindFirstArgs} args - Arguments to find a RoomMember
     * @example
     * // Get one RoomMember
     * const roomMember = await prisma.roomMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomMemberFindFirstArgs>(args?: SelectSubset<T, RoomMemberFindFirstArgs<ExtArgs>>): Prisma__RoomMemberClient<$Result.GetResult<Prisma.$RoomMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomMemberFindFirstOrThrowArgs} args - Arguments to find a RoomMember
     * @example
     * // Get one RoomMember
     * const roomMember = await prisma.roomMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomMemberClient<$Result.GetResult<Prisma.$RoomMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RoomMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoomMembers
     * const roomMembers = await prisma.roomMember.findMany()
     * 
     * // Get first 10 RoomMembers
     * const roomMembers = await prisma.roomMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomMemberWithIdOnly = await prisma.roomMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomMemberFindManyArgs>(args?: SelectSubset<T, RoomMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RoomMember.
     * @param {RoomMemberCreateArgs} args - Arguments to create a RoomMember.
     * @example
     * // Create one RoomMember
     * const RoomMember = await prisma.roomMember.create({
     *   data: {
     *     // ... data to create a RoomMember
     *   }
     * })
     * 
     */
    create<T extends RoomMemberCreateArgs>(args: SelectSubset<T, RoomMemberCreateArgs<ExtArgs>>): Prisma__RoomMemberClient<$Result.GetResult<Prisma.$RoomMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RoomMembers.
     * @param {RoomMemberCreateManyArgs} args - Arguments to create many RoomMembers.
     * @example
     * // Create many RoomMembers
     * const roomMember = await prisma.roomMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomMemberCreateManyArgs>(args?: SelectSubset<T, RoomMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RoomMembers and returns the data saved in the database.
     * @param {RoomMemberCreateManyAndReturnArgs} args - Arguments to create many RoomMembers.
     * @example
     * // Create many RoomMembers
     * const roomMember = await prisma.roomMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RoomMembers and only return the `id`
     * const roomMemberWithIdOnly = await prisma.roomMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RoomMember.
     * @param {RoomMemberDeleteArgs} args - Arguments to delete one RoomMember.
     * @example
     * // Delete one RoomMember
     * const RoomMember = await prisma.roomMember.delete({
     *   where: {
     *     // ... filter to delete one RoomMember
     *   }
     * })
     * 
     */
    delete<T extends RoomMemberDeleteArgs>(args: SelectSubset<T, RoomMemberDeleteArgs<ExtArgs>>): Prisma__RoomMemberClient<$Result.GetResult<Prisma.$RoomMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RoomMember.
     * @param {RoomMemberUpdateArgs} args - Arguments to update one RoomMember.
     * @example
     * // Update one RoomMember
     * const roomMember = await prisma.roomMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomMemberUpdateArgs>(args: SelectSubset<T, RoomMemberUpdateArgs<ExtArgs>>): Prisma__RoomMemberClient<$Result.GetResult<Prisma.$RoomMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RoomMembers.
     * @param {RoomMemberDeleteManyArgs} args - Arguments to filter RoomMembers to delete.
     * @example
     * // Delete a few RoomMembers
     * const { count } = await prisma.roomMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomMemberDeleteManyArgs>(args?: SelectSubset<T, RoomMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoomMembers
     * const roomMember = await prisma.roomMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomMemberUpdateManyArgs>(args: SelectSubset<T, RoomMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomMembers and returns the data updated in the database.
     * @param {RoomMemberUpdateManyAndReturnArgs} args - Arguments to update many RoomMembers.
     * @example
     * // Update many RoomMembers
     * const roomMember = await prisma.roomMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RoomMembers and only return the `id`
     * const roomMemberWithIdOnly = await prisma.roomMember.updateManyAndReturn({
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
    updateManyAndReturn<T extends RoomMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, RoomMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RoomMember.
     * @param {RoomMemberUpsertArgs} args - Arguments to update or create a RoomMember.
     * @example
     * // Update or create a RoomMember
     * const roomMember = await prisma.roomMember.upsert({
     *   create: {
     *     // ... data to create a RoomMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoomMember we want to update
     *   }
     * })
     */
    upsert<T extends RoomMemberUpsertArgs>(args: SelectSubset<T, RoomMemberUpsertArgs<ExtArgs>>): Prisma__RoomMemberClient<$Result.GetResult<Prisma.$RoomMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RoomMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomMemberCountArgs} args - Arguments to filter RoomMembers to count.
     * @example
     * // Count the number of RoomMembers
     * const count = await prisma.roomMember.count({
     *   where: {
     *     // ... the filter for the RoomMembers we want to count
     *   }
     * })
    **/
    count<T extends RoomMemberCountArgs>(
      args?: Subset<T, RoomMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoomMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoomMemberAggregateArgs>(args: Subset<T, RoomMemberAggregateArgs>): Prisma.PrismaPromise<GetRoomMemberAggregateType<T>>

    /**
     * Group by RoomMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomMemberGroupByArgs} args - Group by arguments.
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
      T extends RoomMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomMemberGroupByArgs['orderBy'] }
        : { orderBy?: RoomMemberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoomMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoomMember model
   */
  readonly fields: RoomMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoomMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RoomMember model
   */
  interface RoomMemberFieldRefs {
    readonly id: FieldRef<"RoomMember", 'String'>
    readonly roomId: FieldRef<"RoomMember", 'String'>
    readonly userId: FieldRef<"RoomMember", 'String'>
    readonly role: FieldRef<"RoomMember", 'UserRole'>
    readonly joinedAt: FieldRef<"RoomMember", 'DateTime'>
    readonly createdAt: FieldRef<"RoomMember", 'DateTime'>
    readonly updatedAt: FieldRef<"RoomMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RoomMember findUnique
   */
  export type RoomMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMember
     */
    select?: RoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMember
     */
    omit?: RoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMemberInclude<ExtArgs> | null
    /**
     * Filter, which RoomMember to fetch.
     */
    where: RoomMemberWhereUniqueInput
  }

  /**
   * RoomMember findUniqueOrThrow
   */
  export type RoomMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMember
     */
    select?: RoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMember
     */
    omit?: RoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMemberInclude<ExtArgs> | null
    /**
     * Filter, which RoomMember to fetch.
     */
    where: RoomMemberWhereUniqueInput
  }

  /**
   * RoomMember findFirst
   */
  export type RoomMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMember
     */
    select?: RoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMember
     */
    omit?: RoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMemberInclude<ExtArgs> | null
    /**
     * Filter, which RoomMember to fetch.
     */
    where?: RoomMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomMembers to fetch.
     */
    orderBy?: RoomMemberOrderByWithRelationInput | RoomMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomMembers.
     */
    cursor?: RoomMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomMembers.
     */
    distinct?: RoomMemberScalarFieldEnum | RoomMemberScalarFieldEnum[]
  }

  /**
   * RoomMember findFirstOrThrow
   */
  export type RoomMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMember
     */
    select?: RoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMember
     */
    omit?: RoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMemberInclude<ExtArgs> | null
    /**
     * Filter, which RoomMember to fetch.
     */
    where?: RoomMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomMembers to fetch.
     */
    orderBy?: RoomMemberOrderByWithRelationInput | RoomMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomMembers.
     */
    cursor?: RoomMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomMembers.
     */
    distinct?: RoomMemberScalarFieldEnum | RoomMemberScalarFieldEnum[]
  }

  /**
   * RoomMember findMany
   */
  export type RoomMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMember
     */
    select?: RoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMember
     */
    omit?: RoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMemberInclude<ExtArgs> | null
    /**
     * Filter, which RoomMembers to fetch.
     */
    where?: RoomMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomMembers to fetch.
     */
    orderBy?: RoomMemberOrderByWithRelationInput | RoomMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoomMembers.
     */
    cursor?: RoomMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomMembers.
     */
    skip?: number
    distinct?: RoomMemberScalarFieldEnum | RoomMemberScalarFieldEnum[]
  }

  /**
   * RoomMember create
   */
  export type RoomMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMember
     */
    select?: RoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMember
     */
    omit?: RoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a RoomMember.
     */
    data: XOR<RoomMemberCreateInput, RoomMemberUncheckedCreateInput>
  }

  /**
   * RoomMember createMany
   */
  export type RoomMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoomMembers.
     */
    data: RoomMemberCreateManyInput | RoomMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoomMember createManyAndReturn
   */
  export type RoomMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMember
     */
    select?: RoomMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMember
     */
    omit?: RoomMemberOmit<ExtArgs> | null
    /**
     * The data used to create many RoomMembers.
     */
    data: RoomMemberCreateManyInput | RoomMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoomMember update
   */
  export type RoomMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMember
     */
    select?: RoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMember
     */
    omit?: RoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a RoomMember.
     */
    data: XOR<RoomMemberUpdateInput, RoomMemberUncheckedUpdateInput>
    /**
     * Choose, which RoomMember to update.
     */
    where: RoomMemberWhereUniqueInput
  }

  /**
   * RoomMember updateMany
   */
  export type RoomMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoomMembers.
     */
    data: XOR<RoomMemberUpdateManyMutationInput, RoomMemberUncheckedUpdateManyInput>
    /**
     * Filter which RoomMembers to update
     */
    where?: RoomMemberWhereInput
    /**
     * Limit how many RoomMembers to update.
     */
    limit?: number
  }

  /**
   * RoomMember updateManyAndReturn
   */
  export type RoomMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMember
     */
    select?: RoomMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMember
     */
    omit?: RoomMemberOmit<ExtArgs> | null
    /**
     * The data used to update RoomMembers.
     */
    data: XOR<RoomMemberUpdateManyMutationInput, RoomMemberUncheckedUpdateManyInput>
    /**
     * Filter which RoomMembers to update
     */
    where?: RoomMemberWhereInput
    /**
     * Limit how many RoomMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoomMember upsert
   */
  export type RoomMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMember
     */
    select?: RoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMember
     */
    omit?: RoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the RoomMember to update in case it exists.
     */
    where: RoomMemberWhereUniqueInput
    /**
     * In case the RoomMember found by the `where` argument doesn't exist, create a new RoomMember with this data.
     */
    create: XOR<RoomMemberCreateInput, RoomMemberUncheckedCreateInput>
    /**
     * In case the RoomMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomMemberUpdateInput, RoomMemberUncheckedUpdateInput>
  }

  /**
   * RoomMember delete
   */
  export type RoomMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMember
     */
    select?: RoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMember
     */
    omit?: RoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMemberInclude<ExtArgs> | null
    /**
     * Filter which RoomMember to delete.
     */
    where: RoomMemberWhereUniqueInput
  }

  /**
   * RoomMember deleteMany
   */
  export type RoomMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomMembers to delete
     */
    where?: RoomMemberWhereInput
    /**
     * Limit how many RoomMembers to delete.
     */
    limit?: number
  }

  /**
   * RoomMember without action
   */
  export type RoomMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMember
     */
    select?: RoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMember
     */
    omit?: RoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMemberInclude<ExtArgs> | null
  }


  /**
   * Model Invitation
   */

  export type AggregateInvitation = {
    _count: InvitationCountAggregateOutputType | null
    _min: InvitationMinAggregateOutputType | null
    _max: InvitationMaxAggregateOutputType | null
  }

  export type InvitationMinAggregateOutputType = {
    id: string | null
    roomId: string | null
    email: string | null
    role: $Enums.UserRole | null
    token: string | null
    expiresAt: Date | null
    invitedById: string | null
    acceptedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvitationMaxAggregateOutputType = {
    id: string | null
    roomId: string | null
    email: string | null
    role: $Enums.UserRole | null
    token: string | null
    expiresAt: Date | null
    invitedById: string | null
    acceptedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvitationCountAggregateOutputType = {
    id: number
    roomId: number
    email: number
    role: number
    token: number
    expiresAt: number
    invitedById: number
    acceptedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InvitationMinAggregateInputType = {
    id?: true
    roomId?: true
    email?: true
    role?: true
    token?: true
    expiresAt?: true
    invitedById?: true
    acceptedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvitationMaxAggregateInputType = {
    id?: true
    roomId?: true
    email?: true
    role?: true
    token?: true
    expiresAt?: true
    invitedById?: true
    acceptedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvitationCountAggregateInputType = {
    id?: true
    roomId?: true
    email?: true
    role?: true
    token?: true
    expiresAt?: true
    invitedById?: true
    acceptedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InvitationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invitation to aggregate.
     */
    where?: InvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitations to fetch.
     */
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invitations
    **/
    _count?: true | InvitationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvitationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvitationMaxAggregateInputType
  }

  export type GetInvitationAggregateType<T extends InvitationAggregateArgs> = {
        [P in keyof T & keyof AggregateInvitation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvitation[P]>
      : GetScalarType<T[P], AggregateInvitation[P]>
  }




  export type InvitationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvitationWhereInput
    orderBy?: InvitationOrderByWithAggregationInput | InvitationOrderByWithAggregationInput[]
    by: InvitationScalarFieldEnum[] | InvitationScalarFieldEnum
    having?: InvitationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvitationCountAggregateInputType | true
    _min?: InvitationMinAggregateInputType
    _max?: InvitationMaxAggregateInputType
  }

  export type InvitationGroupByOutputType = {
    id: string
    roomId: string
    email: string
    role: $Enums.UserRole
    token: string
    expiresAt: Date
    invitedById: string | null
    acceptedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: InvitationCountAggregateOutputType | null
    _min: InvitationMinAggregateOutputType | null
    _max: InvitationMaxAggregateOutputType | null
  }

  type GetInvitationGroupByPayload<T extends InvitationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvitationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvitationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvitationGroupByOutputType[P]>
            : GetScalarType<T[P], InvitationGroupByOutputType[P]>
        }
      >
    >


  export type InvitationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    email?: boolean
    role?: boolean
    token?: boolean
    expiresAt?: boolean
    invitedById?: boolean
    acceptedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    invitedBy?: boolean | Invitation$invitedByArgs<ExtArgs>
  }, ExtArgs["result"]["invitation"]>

  export type InvitationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    email?: boolean
    role?: boolean
    token?: boolean
    expiresAt?: boolean
    invitedById?: boolean
    acceptedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    invitedBy?: boolean | Invitation$invitedByArgs<ExtArgs>
  }, ExtArgs["result"]["invitation"]>

  export type InvitationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    email?: boolean
    role?: boolean
    token?: boolean
    expiresAt?: boolean
    invitedById?: boolean
    acceptedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    invitedBy?: boolean | Invitation$invitedByArgs<ExtArgs>
  }, ExtArgs["result"]["invitation"]>

  export type InvitationSelectScalar = {
    id?: boolean
    roomId?: boolean
    email?: boolean
    role?: boolean
    token?: boolean
    expiresAt?: boolean
    invitedById?: boolean
    acceptedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InvitationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roomId" | "email" | "role" | "token" | "expiresAt" | "invitedById" | "acceptedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["invitation"]>
  export type InvitationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    invitedBy?: boolean | Invitation$invitedByArgs<ExtArgs>
  }
  export type InvitationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    invitedBy?: boolean | Invitation$invitedByArgs<ExtArgs>
  }
  export type InvitationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    invitedBy?: boolean | Invitation$invitedByArgs<ExtArgs>
  }

  export type $InvitationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invitation"
    objects: {
      room: Prisma.$RoomPayload<ExtArgs>
      invitedBy: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      roomId: string
      email: string
      role: $Enums.UserRole
      token: string
      expiresAt: Date
      invitedById: string | null
      acceptedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["invitation"]>
    composites: {}
  }

  type InvitationGetPayload<S extends boolean | null | undefined | InvitationDefaultArgs> = $Result.GetResult<Prisma.$InvitationPayload, S>

  type InvitationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvitationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvitationCountAggregateInputType | true
    }

  export interface InvitationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invitation'], meta: { name: 'Invitation' } }
    /**
     * Find zero or one Invitation that matches the filter.
     * @param {InvitationFindUniqueArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvitationFindUniqueArgs>(args: SelectSubset<T, InvitationFindUniqueArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invitation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvitationFindUniqueOrThrowArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvitationFindUniqueOrThrowArgs>(args: SelectSubset<T, InvitationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invitation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationFindFirstArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvitationFindFirstArgs>(args?: SelectSubset<T, InvitationFindFirstArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invitation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationFindFirstOrThrowArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvitationFindFirstOrThrowArgs>(args?: SelectSubset<T, InvitationFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invitations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invitations
     * const invitations = await prisma.invitation.findMany()
     * 
     * // Get first 10 Invitations
     * const invitations = await prisma.invitation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invitationWithIdOnly = await prisma.invitation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvitationFindManyArgs>(args?: SelectSubset<T, InvitationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invitation.
     * @param {InvitationCreateArgs} args - Arguments to create a Invitation.
     * @example
     * // Create one Invitation
     * const Invitation = await prisma.invitation.create({
     *   data: {
     *     // ... data to create a Invitation
     *   }
     * })
     * 
     */
    create<T extends InvitationCreateArgs>(args: SelectSubset<T, InvitationCreateArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invitations.
     * @param {InvitationCreateManyArgs} args - Arguments to create many Invitations.
     * @example
     * // Create many Invitations
     * const invitation = await prisma.invitation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvitationCreateManyArgs>(args?: SelectSubset<T, InvitationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invitations and returns the data saved in the database.
     * @param {InvitationCreateManyAndReturnArgs} args - Arguments to create many Invitations.
     * @example
     * // Create many Invitations
     * const invitation = await prisma.invitation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invitations and only return the `id`
     * const invitationWithIdOnly = await prisma.invitation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvitationCreateManyAndReturnArgs>(args?: SelectSubset<T, InvitationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invitation.
     * @param {InvitationDeleteArgs} args - Arguments to delete one Invitation.
     * @example
     * // Delete one Invitation
     * const Invitation = await prisma.invitation.delete({
     *   where: {
     *     // ... filter to delete one Invitation
     *   }
     * })
     * 
     */
    delete<T extends InvitationDeleteArgs>(args: SelectSubset<T, InvitationDeleteArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invitation.
     * @param {InvitationUpdateArgs} args - Arguments to update one Invitation.
     * @example
     * // Update one Invitation
     * const invitation = await prisma.invitation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvitationUpdateArgs>(args: SelectSubset<T, InvitationUpdateArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invitations.
     * @param {InvitationDeleteManyArgs} args - Arguments to filter Invitations to delete.
     * @example
     * // Delete a few Invitations
     * const { count } = await prisma.invitation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvitationDeleteManyArgs>(args?: SelectSubset<T, InvitationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invitations
     * const invitation = await prisma.invitation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvitationUpdateManyArgs>(args: SelectSubset<T, InvitationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invitations and returns the data updated in the database.
     * @param {InvitationUpdateManyAndReturnArgs} args - Arguments to update many Invitations.
     * @example
     * // Update many Invitations
     * const invitation = await prisma.invitation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Invitations and only return the `id`
     * const invitationWithIdOnly = await prisma.invitation.updateManyAndReturn({
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
    updateManyAndReturn<T extends InvitationUpdateManyAndReturnArgs>(args: SelectSubset<T, InvitationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invitation.
     * @param {InvitationUpsertArgs} args - Arguments to update or create a Invitation.
     * @example
     * // Update or create a Invitation
     * const invitation = await prisma.invitation.upsert({
     *   create: {
     *     // ... data to create a Invitation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invitation we want to update
     *   }
     * })
     */
    upsert<T extends InvitationUpsertArgs>(args: SelectSubset<T, InvitationUpsertArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationCountArgs} args - Arguments to filter Invitations to count.
     * @example
     * // Count the number of Invitations
     * const count = await prisma.invitation.count({
     *   where: {
     *     // ... the filter for the Invitations we want to count
     *   }
     * })
    **/
    count<T extends InvitationCountArgs>(
      args?: Subset<T, InvitationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvitationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvitationAggregateArgs>(args: Subset<T, InvitationAggregateArgs>): Prisma.PrismaPromise<GetInvitationAggregateType<T>>

    /**
     * Group by Invitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationGroupByArgs} args - Group by arguments.
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
      T extends InvitationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvitationGroupByArgs['orderBy'] }
        : { orderBy?: InvitationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InvitationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvitationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invitation model
   */
  readonly fields: InvitationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invitation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvitationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    invitedBy<T extends Invitation$invitedByArgs<ExtArgs> = {}>(args?: Subset<T, Invitation$invitedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Invitation model
   */
  interface InvitationFieldRefs {
    readonly id: FieldRef<"Invitation", 'String'>
    readonly roomId: FieldRef<"Invitation", 'String'>
    readonly email: FieldRef<"Invitation", 'String'>
    readonly role: FieldRef<"Invitation", 'UserRole'>
    readonly token: FieldRef<"Invitation", 'String'>
    readonly expiresAt: FieldRef<"Invitation", 'DateTime'>
    readonly invitedById: FieldRef<"Invitation", 'String'>
    readonly acceptedAt: FieldRef<"Invitation", 'DateTime'>
    readonly createdAt: FieldRef<"Invitation", 'DateTime'>
    readonly updatedAt: FieldRef<"Invitation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Invitation findUnique
   */
  export type InvitationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter, which Invitation to fetch.
     */
    where: InvitationWhereUniqueInput
  }

  /**
   * Invitation findUniqueOrThrow
   */
  export type InvitationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter, which Invitation to fetch.
     */
    where: InvitationWhereUniqueInput
  }

  /**
   * Invitation findFirst
   */
  export type InvitationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter, which Invitation to fetch.
     */
    where?: InvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitations to fetch.
     */
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invitations.
     */
    cursor?: InvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invitations.
     */
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }

  /**
   * Invitation findFirstOrThrow
   */
  export type InvitationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter, which Invitation to fetch.
     */
    where?: InvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitations to fetch.
     */
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invitations.
     */
    cursor?: InvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invitations.
     */
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }

  /**
   * Invitation findMany
   */
  export type InvitationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter, which Invitations to fetch.
     */
    where?: InvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitations to fetch.
     */
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invitations.
     */
    cursor?: InvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitations.
     */
    skip?: number
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }

  /**
   * Invitation create
   */
  export type InvitationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * The data needed to create a Invitation.
     */
    data: XOR<InvitationCreateInput, InvitationUncheckedCreateInput>
  }

  /**
   * Invitation createMany
   */
  export type InvitationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invitations.
     */
    data: InvitationCreateManyInput | InvitationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Invitation createManyAndReturn
   */
  export type InvitationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * The data used to create many Invitations.
     */
    data: InvitationCreateManyInput | InvitationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invitation update
   */
  export type InvitationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * The data needed to update a Invitation.
     */
    data: XOR<InvitationUpdateInput, InvitationUncheckedUpdateInput>
    /**
     * Choose, which Invitation to update.
     */
    where: InvitationWhereUniqueInput
  }

  /**
   * Invitation updateMany
   */
  export type InvitationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invitations.
     */
    data: XOR<InvitationUpdateManyMutationInput, InvitationUncheckedUpdateManyInput>
    /**
     * Filter which Invitations to update
     */
    where?: InvitationWhereInput
    /**
     * Limit how many Invitations to update.
     */
    limit?: number
  }

  /**
   * Invitation updateManyAndReturn
   */
  export type InvitationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * The data used to update Invitations.
     */
    data: XOR<InvitationUpdateManyMutationInput, InvitationUncheckedUpdateManyInput>
    /**
     * Filter which Invitations to update
     */
    where?: InvitationWhereInput
    /**
     * Limit how many Invitations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invitation upsert
   */
  export type InvitationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * The filter to search for the Invitation to update in case it exists.
     */
    where: InvitationWhereUniqueInput
    /**
     * In case the Invitation found by the `where` argument doesn't exist, create a new Invitation with this data.
     */
    create: XOR<InvitationCreateInput, InvitationUncheckedCreateInput>
    /**
     * In case the Invitation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvitationUpdateInput, InvitationUncheckedUpdateInput>
  }

  /**
   * Invitation delete
   */
  export type InvitationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter which Invitation to delete.
     */
    where: InvitationWhereUniqueInput
  }

  /**
   * Invitation deleteMany
   */
  export type InvitationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invitations to delete
     */
    where?: InvitationWhereInput
    /**
     * Limit how many Invitations to delete.
     */
    limit?: number
  }

  /**
   * Invitation.invitedBy
   */
  export type Invitation$invitedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * Invitation without action
   */
  export type InvitationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
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
    email: 'email',
    password: 'password',
    role: 'role',
    stars: 'stars',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const GoalScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    starReward: 'starReward',
    creatorId: 'creatorId',
    completedAt: 'completedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GoalScalarFieldEnum = (typeof GoalScalarFieldEnum)[keyof typeof GoalScalarFieldEnum]


  export const QuestScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    deadline: 'deadline',
    difficulty: 'difficulty',
    creatorId: 'creatorId',
    goalId: 'goalId',
    roomId: 'roomId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type QuestScalarFieldEnum = (typeof QuestScalarFieldEnum)[keyof typeof QuestScalarFieldEnum]


  export const QuestCompletionScalarFieldEnum: {
    id: 'id',
    completedAt: 'completedAt',
    isLate: 'isLate',
    starsAwarded: 'starsAwarded',
    questId: 'questId',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type QuestCompletionScalarFieldEnum = (typeof QuestCompletionScalarFieldEnum)[keyof typeof QuestCompletionScalarFieldEnum]


  export const RewardScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    starCost: 'starCost',
    creatorId: 'creatorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RewardScalarFieldEnum = (typeof RewardScalarFieldEnum)[keyof typeof RewardScalarFieldEnum]


  export const RewardPurchaseScalarFieldEnum: {
    id: 'id',
    purchasedAt: 'purchasedAt',
    rewardId: 'rewardId',
    childId: 'childId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RewardPurchaseScalarFieldEnum = (typeof RewardPurchaseScalarFieldEnum)[keyof typeof RewardPurchaseScalarFieldEnum]


  export const BoostScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    cooldownDays: 'cooldownDays',
    durationHours: 'durationHours',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BoostScalarFieldEnum = (typeof BoostScalarFieldEnum)[keyof typeof BoostScalarFieldEnum]


  export const BoostActivationScalarFieldEnum: {
    id: 'id',
    activatedAt: 'activatedAt',
    expiresAt: 'expiresAt',
    boostId: 'boostId',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BoostActivationScalarFieldEnum = (typeof BoostActivationScalarFieldEnum)[keyof typeof BoostActivationScalarFieldEnum]


  export const RoomScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createUserId: 'createUserId'
  };

  export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum]


  export const RoomMemberScalarFieldEnum: {
    id: 'id',
    roomId: 'roomId',
    userId: 'userId',
    role: 'role',
    joinedAt: 'joinedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoomMemberScalarFieldEnum = (typeof RoomMemberScalarFieldEnum)[keyof typeof RoomMemberScalarFieldEnum]


  export const InvitationScalarFieldEnum: {
    id: 'id',
    roomId: 'roomId',
    email: 'email',
    role: 'role',
    token: 'token',
    expiresAt: 'expiresAt',
    invitedById: 'invitedById',
    acceptedAt: 'acceptedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InvitationScalarFieldEnum = (typeof InvitationScalarFieldEnum)[keyof typeof InvitationScalarFieldEnum]


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
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    stars?: IntNullableFilter<"User"> | number | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    quests?: QuestListRelationFilter
    completions?: QuestCompletionListRelationFilter
    rewardsPurchase?: RewardPurchaseListRelationFilter
    rewards?: RewardListRelationFilter
    boosts?: BoostActivationListRelationFilter
    goals?: GoalListRelationFilter
    rooms?: RoomMemberListRelationFilter
    createdRooms?: RoomListRelationFilter
    roomInvitations?: InvitationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    stars?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    quests?: QuestOrderByRelationAggregateInput
    completions?: QuestCompletionOrderByRelationAggregateInput
    rewardsPurchase?: RewardPurchaseOrderByRelationAggregateInput
    rewards?: RewardOrderByRelationAggregateInput
    boosts?: BoostActivationOrderByRelationAggregateInput
    goals?: GoalOrderByRelationAggregateInput
    rooms?: RoomMemberOrderByRelationAggregateInput
    createdRooms?: RoomOrderByRelationAggregateInput
    roomInvitations?: InvitationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    stars?: IntNullableFilter<"User"> | number | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    quests?: QuestListRelationFilter
    completions?: QuestCompletionListRelationFilter
    rewardsPurchase?: RewardPurchaseListRelationFilter
    rewards?: RewardListRelationFilter
    boosts?: BoostActivationListRelationFilter
    goals?: GoalListRelationFilter
    rooms?: RoomMemberListRelationFilter
    createdRooms?: RoomListRelationFilter
    roomInvitations?: InvitationListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    stars?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    stars?: IntNullableWithAggregatesFilter<"User"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type GoalWhereInput = {
    AND?: GoalWhereInput | GoalWhereInput[]
    OR?: GoalWhereInput[]
    NOT?: GoalWhereInput | GoalWhereInput[]
    id?: StringFilter<"Goal"> | string
    title?: StringFilter<"Goal"> | string
    description?: StringNullableFilter<"Goal"> | string | null
    starReward?: IntFilter<"Goal"> | number
    creatorId?: StringFilter<"Goal"> | string
    completedAt?: DateTimeNullableFilter<"Goal"> | Date | string | null
    createdAt?: DateTimeFilter<"Goal"> | Date | string
    updatedAt?: DateTimeFilter<"Goal"> | Date | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    quests?: QuestListRelationFilter
  }

  export type GoalOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    starReward?: SortOrder
    creatorId?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creator?: UserOrderByWithRelationInput
    quests?: QuestOrderByRelationAggregateInput
  }

  export type GoalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GoalWhereInput | GoalWhereInput[]
    OR?: GoalWhereInput[]
    NOT?: GoalWhereInput | GoalWhereInput[]
    title?: StringFilter<"Goal"> | string
    description?: StringNullableFilter<"Goal"> | string | null
    starReward?: IntFilter<"Goal"> | number
    creatorId?: StringFilter<"Goal"> | string
    completedAt?: DateTimeNullableFilter<"Goal"> | Date | string | null
    createdAt?: DateTimeFilter<"Goal"> | Date | string
    updatedAt?: DateTimeFilter<"Goal"> | Date | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    quests?: QuestListRelationFilter
  }, "id">

  export type GoalOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    starReward?: SortOrder
    creatorId?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GoalCountOrderByAggregateInput
    _avg?: GoalAvgOrderByAggregateInput
    _max?: GoalMaxOrderByAggregateInput
    _min?: GoalMinOrderByAggregateInput
    _sum?: GoalSumOrderByAggregateInput
  }

  export type GoalScalarWhereWithAggregatesInput = {
    AND?: GoalScalarWhereWithAggregatesInput | GoalScalarWhereWithAggregatesInput[]
    OR?: GoalScalarWhereWithAggregatesInput[]
    NOT?: GoalScalarWhereWithAggregatesInput | GoalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Goal"> | string
    title?: StringWithAggregatesFilter<"Goal"> | string
    description?: StringNullableWithAggregatesFilter<"Goal"> | string | null
    starReward?: IntWithAggregatesFilter<"Goal"> | number
    creatorId?: StringWithAggregatesFilter<"Goal"> | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"Goal"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Goal"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Goal"> | Date | string
  }

  export type QuestWhereInput = {
    AND?: QuestWhereInput | QuestWhereInput[]
    OR?: QuestWhereInput[]
    NOT?: QuestWhereInput | QuestWhereInput[]
    id?: StringFilter<"Quest"> | string
    title?: StringFilter<"Quest"> | string
    description?: StringNullableFilter<"Quest"> | string | null
    deadline?: DateTimeFilter<"Quest"> | Date | string
    difficulty?: IntFilter<"Quest"> | number
    creatorId?: StringFilter<"Quest"> | string
    goalId?: StringNullableFilter<"Quest"> | string | null
    roomId?: StringNullableFilter<"Quest"> | string | null
    createdAt?: DateTimeFilter<"Quest"> | Date | string
    updatedAt?: DateTimeFilter<"Quest"> | Date | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    goal?: XOR<GoalNullableScalarRelationFilter, GoalWhereInput> | null
    room?: XOR<RoomNullableScalarRelationFilter, RoomWhereInput> | null
    completions?: QuestCompletionListRelationFilter
  }

  export type QuestOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    deadline?: SortOrder
    difficulty?: SortOrder
    creatorId?: SortOrder
    goalId?: SortOrderInput | SortOrder
    roomId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creator?: UserOrderByWithRelationInput
    goal?: GoalOrderByWithRelationInput
    room?: RoomOrderByWithRelationInput
    completions?: QuestCompletionOrderByRelationAggregateInput
  }

  export type QuestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestWhereInput | QuestWhereInput[]
    OR?: QuestWhereInput[]
    NOT?: QuestWhereInput | QuestWhereInput[]
    title?: StringFilter<"Quest"> | string
    description?: StringNullableFilter<"Quest"> | string | null
    deadline?: DateTimeFilter<"Quest"> | Date | string
    difficulty?: IntFilter<"Quest"> | number
    creatorId?: StringFilter<"Quest"> | string
    goalId?: StringNullableFilter<"Quest"> | string | null
    roomId?: StringNullableFilter<"Quest"> | string | null
    createdAt?: DateTimeFilter<"Quest"> | Date | string
    updatedAt?: DateTimeFilter<"Quest"> | Date | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    goal?: XOR<GoalNullableScalarRelationFilter, GoalWhereInput> | null
    room?: XOR<RoomNullableScalarRelationFilter, RoomWhereInput> | null
    completions?: QuestCompletionListRelationFilter
  }, "id">

  export type QuestOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    deadline?: SortOrder
    difficulty?: SortOrder
    creatorId?: SortOrder
    goalId?: SortOrderInput | SortOrder
    roomId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: QuestCountOrderByAggregateInput
    _avg?: QuestAvgOrderByAggregateInput
    _max?: QuestMaxOrderByAggregateInput
    _min?: QuestMinOrderByAggregateInput
    _sum?: QuestSumOrderByAggregateInput
  }

  export type QuestScalarWhereWithAggregatesInput = {
    AND?: QuestScalarWhereWithAggregatesInput | QuestScalarWhereWithAggregatesInput[]
    OR?: QuestScalarWhereWithAggregatesInput[]
    NOT?: QuestScalarWhereWithAggregatesInput | QuestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Quest"> | string
    title?: StringWithAggregatesFilter<"Quest"> | string
    description?: StringNullableWithAggregatesFilter<"Quest"> | string | null
    deadline?: DateTimeWithAggregatesFilter<"Quest"> | Date | string
    difficulty?: IntWithAggregatesFilter<"Quest"> | number
    creatorId?: StringWithAggregatesFilter<"Quest"> | string
    goalId?: StringNullableWithAggregatesFilter<"Quest"> | string | null
    roomId?: StringNullableWithAggregatesFilter<"Quest"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Quest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Quest"> | Date | string
  }

  export type QuestCompletionWhereInput = {
    AND?: QuestCompletionWhereInput | QuestCompletionWhereInput[]
    OR?: QuestCompletionWhereInput[]
    NOT?: QuestCompletionWhereInput | QuestCompletionWhereInput[]
    id?: StringFilter<"QuestCompletion"> | string
    completedAt?: DateTimeFilter<"QuestCompletion"> | Date | string
    isLate?: BoolFilter<"QuestCompletion"> | boolean
    starsAwarded?: IntFilter<"QuestCompletion"> | number
    questId?: StringFilter<"QuestCompletion"> | string
    userId?: StringFilter<"QuestCompletion"> | string
    createdAt?: DateTimeFilter<"QuestCompletion"> | Date | string
    updatedAt?: DateTimeFilter<"QuestCompletion"> | Date | string
    quest?: XOR<QuestScalarRelationFilter, QuestWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type QuestCompletionOrderByWithRelationInput = {
    id?: SortOrder
    completedAt?: SortOrder
    isLate?: SortOrder
    starsAwarded?: SortOrder
    questId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    quest?: QuestOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type QuestCompletionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestCompletionWhereInput | QuestCompletionWhereInput[]
    OR?: QuestCompletionWhereInput[]
    NOT?: QuestCompletionWhereInput | QuestCompletionWhereInput[]
    completedAt?: DateTimeFilter<"QuestCompletion"> | Date | string
    isLate?: BoolFilter<"QuestCompletion"> | boolean
    starsAwarded?: IntFilter<"QuestCompletion"> | number
    questId?: StringFilter<"QuestCompletion"> | string
    userId?: StringFilter<"QuestCompletion"> | string
    createdAt?: DateTimeFilter<"QuestCompletion"> | Date | string
    updatedAt?: DateTimeFilter<"QuestCompletion"> | Date | string
    quest?: XOR<QuestScalarRelationFilter, QuestWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type QuestCompletionOrderByWithAggregationInput = {
    id?: SortOrder
    completedAt?: SortOrder
    isLate?: SortOrder
    starsAwarded?: SortOrder
    questId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: QuestCompletionCountOrderByAggregateInput
    _avg?: QuestCompletionAvgOrderByAggregateInput
    _max?: QuestCompletionMaxOrderByAggregateInput
    _min?: QuestCompletionMinOrderByAggregateInput
    _sum?: QuestCompletionSumOrderByAggregateInput
  }

  export type QuestCompletionScalarWhereWithAggregatesInput = {
    AND?: QuestCompletionScalarWhereWithAggregatesInput | QuestCompletionScalarWhereWithAggregatesInput[]
    OR?: QuestCompletionScalarWhereWithAggregatesInput[]
    NOT?: QuestCompletionScalarWhereWithAggregatesInput | QuestCompletionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuestCompletion"> | string
    completedAt?: DateTimeWithAggregatesFilter<"QuestCompletion"> | Date | string
    isLate?: BoolWithAggregatesFilter<"QuestCompletion"> | boolean
    starsAwarded?: IntWithAggregatesFilter<"QuestCompletion"> | number
    questId?: StringWithAggregatesFilter<"QuestCompletion"> | string
    userId?: StringWithAggregatesFilter<"QuestCompletion"> | string
    createdAt?: DateTimeWithAggregatesFilter<"QuestCompletion"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"QuestCompletion"> | Date | string
  }

  export type RewardWhereInput = {
    AND?: RewardWhereInput | RewardWhereInput[]
    OR?: RewardWhereInput[]
    NOT?: RewardWhereInput | RewardWhereInput[]
    id?: StringFilter<"Reward"> | string
    title?: StringFilter<"Reward"> | string
    description?: StringNullableFilter<"Reward"> | string | null
    starCost?: IntFilter<"Reward"> | number
    creatorId?: StringFilter<"Reward"> | string
    createdAt?: DateTimeFilter<"Reward"> | Date | string
    updatedAt?: DateTimeFilter<"Reward"> | Date | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    purchases?: RewardPurchaseListRelationFilter
  }

  export type RewardOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    starCost?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creator?: UserOrderByWithRelationInput
    purchases?: RewardPurchaseOrderByRelationAggregateInput
  }

  export type RewardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RewardWhereInput | RewardWhereInput[]
    OR?: RewardWhereInput[]
    NOT?: RewardWhereInput | RewardWhereInput[]
    title?: StringFilter<"Reward"> | string
    description?: StringNullableFilter<"Reward"> | string | null
    starCost?: IntFilter<"Reward"> | number
    creatorId?: StringFilter<"Reward"> | string
    createdAt?: DateTimeFilter<"Reward"> | Date | string
    updatedAt?: DateTimeFilter<"Reward"> | Date | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    purchases?: RewardPurchaseListRelationFilter
  }, "id">

  export type RewardOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    starCost?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RewardCountOrderByAggregateInput
    _avg?: RewardAvgOrderByAggregateInput
    _max?: RewardMaxOrderByAggregateInput
    _min?: RewardMinOrderByAggregateInput
    _sum?: RewardSumOrderByAggregateInput
  }

  export type RewardScalarWhereWithAggregatesInput = {
    AND?: RewardScalarWhereWithAggregatesInput | RewardScalarWhereWithAggregatesInput[]
    OR?: RewardScalarWhereWithAggregatesInput[]
    NOT?: RewardScalarWhereWithAggregatesInput | RewardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Reward"> | string
    title?: StringWithAggregatesFilter<"Reward"> | string
    description?: StringNullableWithAggregatesFilter<"Reward"> | string | null
    starCost?: IntWithAggregatesFilter<"Reward"> | number
    creatorId?: StringWithAggregatesFilter<"Reward"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Reward"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Reward"> | Date | string
  }

  export type RewardPurchaseWhereInput = {
    AND?: RewardPurchaseWhereInput | RewardPurchaseWhereInput[]
    OR?: RewardPurchaseWhereInput[]
    NOT?: RewardPurchaseWhereInput | RewardPurchaseWhereInput[]
    id?: StringFilter<"RewardPurchase"> | string
    purchasedAt?: DateTimeFilter<"RewardPurchase"> | Date | string
    rewardId?: StringFilter<"RewardPurchase"> | string
    childId?: StringFilter<"RewardPurchase"> | string
    createdAt?: DateTimeFilter<"RewardPurchase"> | Date | string
    updatedAt?: DateTimeFilter<"RewardPurchase"> | Date | string
    reward?: XOR<RewardScalarRelationFilter, RewardWhereInput>
    child?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RewardPurchaseOrderByWithRelationInput = {
    id?: SortOrder
    purchasedAt?: SortOrder
    rewardId?: SortOrder
    childId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reward?: RewardOrderByWithRelationInput
    child?: UserOrderByWithRelationInput
  }

  export type RewardPurchaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RewardPurchaseWhereInput | RewardPurchaseWhereInput[]
    OR?: RewardPurchaseWhereInput[]
    NOT?: RewardPurchaseWhereInput | RewardPurchaseWhereInput[]
    purchasedAt?: DateTimeFilter<"RewardPurchase"> | Date | string
    rewardId?: StringFilter<"RewardPurchase"> | string
    childId?: StringFilter<"RewardPurchase"> | string
    createdAt?: DateTimeFilter<"RewardPurchase"> | Date | string
    updatedAt?: DateTimeFilter<"RewardPurchase"> | Date | string
    reward?: XOR<RewardScalarRelationFilter, RewardWhereInput>
    child?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type RewardPurchaseOrderByWithAggregationInput = {
    id?: SortOrder
    purchasedAt?: SortOrder
    rewardId?: SortOrder
    childId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RewardPurchaseCountOrderByAggregateInput
    _max?: RewardPurchaseMaxOrderByAggregateInput
    _min?: RewardPurchaseMinOrderByAggregateInput
  }

  export type RewardPurchaseScalarWhereWithAggregatesInput = {
    AND?: RewardPurchaseScalarWhereWithAggregatesInput | RewardPurchaseScalarWhereWithAggregatesInput[]
    OR?: RewardPurchaseScalarWhereWithAggregatesInput[]
    NOT?: RewardPurchaseScalarWhereWithAggregatesInput | RewardPurchaseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RewardPurchase"> | string
    purchasedAt?: DateTimeWithAggregatesFilter<"RewardPurchase"> | Date | string
    rewardId?: StringWithAggregatesFilter<"RewardPurchase"> | string
    childId?: StringWithAggregatesFilter<"RewardPurchase"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RewardPurchase"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RewardPurchase"> | Date | string
  }

  export type BoostWhereInput = {
    AND?: BoostWhereInput | BoostWhereInput[]
    OR?: BoostWhereInput[]
    NOT?: BoostWhereInput | BoostWhereInput[]
    id?: StringFilter<"Boost"> | string
    name?: StringFilter<"Boost"> | string
    description?: StringNullableFilter<"Boost"> | string | null
    cooldownDays?: IntFilter<"Boost"> | number
    durationHours?: IntFilter<"Boost"> | number
    createdAt?: DateTimeFilter<"Boost"> | Date | string
    updatedAt?: DateTimeFilter<"Boost"> | Date | string
    activations?: BoostActivationListRelationFilter
  }

  export type BoostOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    cooldownDays?: SortOrder
    durationHours?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    activations?: BoostActivationOrderByRelationAggregateInput
  }

  export type BoostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BoostWhereInput | BoostWhereInput[]
    OR?: BoostWhereInput[]
    NOT?: BoostWhereInput | BoostWhereInput[]
    name?: StringFilter<"Boost"> | string
    description?: StringNullableFilter<"Boost"> | string | null
    cooldownDays?: IntFilter<"Boost"> | number
    durationHours?: IntFilter<"Boost"> | number
    createdAt?: DateTimeFilter<"Boost"> | Date | string
    updatedAt?: DateTimeFilter<"Boost"> | Date | string
    activations?: BoostActivationListRelationFilter
  }, "id">

  export type BoostOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    cooldownDays?: SortOrder
    durationHours?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BoostCountOrderByAggregateInput
    _avg?: BoostAvgOrderByAggregateInput
    _max?: BoostMaxOrderByAggregateInput
    _min?: BoostMinOrderByAggregateInput
    _sum?: BoostSumOrderByAggregateInput
  }

  export type BoostScalarWhereWithAggregatesInput = {
    AND?: BoostScalarWhereWithAggregatesInput | BoostScalarWhereWithAggregatesInput[]
    OR?: BoostScalarWhereWithAggregatesInput[]
    NOT?: BoostScalarWhereWithAggregatesInput | BoostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Boost"> | string
    name?: StringWithAggregatesFilter<"Boost"> | string
    description?: StringNullableWithAggregatesFilter<"Boost"> | string | null
    cooldownDays?: IntWithAggregatesFilter<"Boost"> | number
    durationHours?: IntWithAggregatesFilter<"Boost"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Boost"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Boost"> | Date | string
  }

  export type BoostActivationWhereInput = {
    AND?: BoostActivationWhereInput | BoostActivationWhereInput[]
    OR?: BoostActivationWhereInput[]
    NOT?: BoostActivationWhereInput | BoostActivationWhereInput[]
    id?: StringFilter<"BoostActivation"> | string
    activatedAt?: DateTimeFilter<"BoostActivation"> | Date | string
    expiresAt?: DateTimeFilter<"BoostActivation"> | Date | string
    boostId?: StringFilter<"BoostActivation"> | string
    userId?: StringFilter<"BoostActivation"> | string
    createdAt?: DateTimeFilter<"BoostActivation"> | Date | string
    updatedAt?: DateTimeFilter<"BoostActivation"> | Date | string
    boost?: XOR<BoostScalarRelationFilter, BoostWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BoostActivationOrderByWithRelationInput = {
    id?: SortOrder
    activatedAt?: SortOrder
    expiresAt?: SortOrder
    boostId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    boost?: BoostOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type BoostActivationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BoostActivationWhereInput | BoostActivationWhereInput[]
    OR?: BoostActivationWhereInput[]
    NOT?: BoostActivationWhereInput | BoostActivationWhereInput[]
    activatedAt?: DateTimeFilter<"BoostActivation"> | Date | string
    expiresAt?: DateTimeFilter<"BoostActivation"> | Date | string
    boostId?: StringFilter<"BoostActivation"> | string
    userId?: StringFilter<"BoostActivation"> | string
    createdAt?: DateTimeFilter<"BoostActivation"> | Date | string
    updatedAt?: DateTimeFilter<"BoostActivation"> | Date | string
    boost?: XOR<BoostScalarRelationFilter, BoostWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type BoostActivationOrderByWithAggregationInput = {
    id?: SortOrder
    activatedAt?: SortOrder
    expiresAt?: SortOrder
    boostId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BoostActivationCountOrderByAggregateInput
    _max?: BoostActivationMaxOrderByAggregateInput
    _min?: BoostActivationMinOrderByAggregateInput
  }

  export type BoostActivationScalarWhereWithAggregatesInput = {
    AND?: BoostActivationScalarWhereWithAggregatesInput | BoostActivationScalarWhereWithAggregatesInput[]
    OR?: BoostActivationScalarWhereWithAggregatesInput[]
    NOT?: BoostActivationScalarWhereWithAggregatesInput | BoostActivationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BoostActivation"> | string
    activatedAt?: DateTimeWithAggregatesFilter<"BoostActivation"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"BoostActivation"> | Date | string
    boostId?: StringWithAggregatesFilter<"BoostActivation"> | string
    userId?: StringWithAggregatesFilter<"BoostActivation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BoostActivation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BoostActivation"> | Date | string
  }

  export type RoomWhereInput = {
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    id?: StringFilter<"Room"> | string
    name?: StringFilter<"Room"> | string
    createdAt?: DateTimeFilter<"Room"> | Date | string
    updatedAt?: DateTimeFilter<"Room"> | Date | string
    createUserId?: StringFilter<"Room"> | string
    createUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: RoomMemberListRelationFilter
    invitations?: InvitationListRelationFilter
    quests?: QuestListRelationFilter
  }

  export type RoomOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createUserId?: SortOrder
    createUser?: UserOrderByWithRelationInput
    members?: RoomMemberOrderByRelationAggregateInput
    invitations?: InvitationOrderByRelationAggregateInput
    quests?: QuestOrderByRelationAggregateInput
  }

  export type RoomWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    name?: StringFilter<"Room"> | string
    createdAt?: DateTimeFilter<"Room"> | Date | string
    updatedAt?: DateTimeFilter<"Room"> | Date | string
    createUserId?: StringFilter<"Room"> | string
    createUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: RoomMemberListRelationFilter
    invitations?: InvitationListRelationFilter
    quests?: QuestListRelationFilter
  }, "id">

  export type RoomOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createUserId?: SortOrder
    _count?: RoomCountOrderByAggregateInput
    _max?: RoomMaxOrderByAggregateInput
    _min?: RoomMinOrderByAggregateInput
  }

  export type RoomScalarWhereWithAggregatesInput = {
    AND?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    OR?: RoomScalarWhereWithAggregatesInput[]
    NOT?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Room"> | string
    name?: StringWithAggregatesFilter<"Room"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Room"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Room"> | Date | string
    createUserId?: StringWithAggregatesFilter<"Room"> | string
  }

  export type RoomMemberWhereInput = {
    AND?: RoomMemberWhereInput | RoomMemberWhereInput[]
    OR?: RoomMemberWhereInput[]
    NOT?: RoomMemberWhereInput | RoomMemberWhereInput[]
    id?: StringFilter<"RoomMember"> | string
    roomId?: StringFilter<"RoomMember"> | string
    userId?: StringFilter<"RoomMember"> | string
    role?: EnumUserRoleFilter<"RoomMember"> | $Enums.UserRole
    joinedAt?: DateTimeFilter<"RoomMember"> | Date | string
    createdAt?: DateTimeFilter<"RoomMember"> | Date | string
    updatedAt?: DateTimeFilter<"RoomMember"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RoomMemberOrderByWithRelationInput = {
    id?: SortOrder
    roomId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    room?: RoomOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type RoomMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoomMemberWhereInput | RoomMemberWhereInput[]
    OR?: RoomMemberWhereInput[]
    NOT?: RoomMemberWhereInput | RoomMemberWhereInput[]
    roomId?: StringFilter<"RoomMember"> | string
    userId?: StringFilter<"RoomMember"> | string
    role?: EnumUserRoleFilter<"RoomMember"> | $Enums.UserRole
    joinedAt?: DateTimeFilter<"RoomMember"> | Date | string
    createdAt?: DateTimeFilter<"RoomMember"> | Date | string
    updatedAt?: DateTimeFilter<"RoomMember"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type RoomMemberOrderByWithAggregationInput = {
    id?: SortOrder
    roomId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoomMemberCountOrderByAggregateInput
    _max?: RoomMemberMaxOrderByAggregateInput
    _min?: RoomMemberMinOrderByAggregateInput
  }

  export type RoomMemberScalarWhereWithAggregatesInput = {
    AND?: RoomMemberScalarWhereWithAggregatesInput | RoomMemberScalarWhereWithAggregatesInput[]
    OR?: RoomMemberScalarWhereWithAggregatesInput[]
    NOT?: RoomMemberScalarWhereWithAggregatesInput | RoomMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RoomMember"> | string
    roomId?: StringWithAggregatesFilter<"RoomMember"> | string
    userId?: StringWithAggregatesFilter<"RoomMember"> | string
    role?: EnumUserRoleWithAggregatesFilter<"RoomMember"> | $Enums.UserRole
    joinedAt?: DateTimeWithAggregatesFilter<"RoomMember"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"RoomMember"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RoomMember"> | Date | string
  }

  export type InvitationWhereInput = {
    AND?: InvitationWhereInput | InvitationWhereInput[]
    OR?: InvitationWhereInput[]
    NOT?: InvitationWhereInput | InvitationWhereInput[]
    id?: StringFilter<"Invitation"> | string
    roomId?: StringFilter<"Invitation"> | string
    email?: StringFilter<"Invitation"> | string
    role?: EnumUserRoleFilter<"Invitation"> | $Enums.UserRole
    token?: StringFilter<"Invitation"> | string
    expiresAt?: DateTimeFilter<"Invitation"> | Date | string
    invitedById?: StringNullableFilter<"Invitation"> | string | null
    acceptedAt?: DateTimeNullableFilter<"Invitation"> | Date | string | null
    createdAt?: DateTimeFilter<"Invitation"> | Date | string
    updatedAt?: DateTimeFilter<"Invitation"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    invitedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type InvitationOrderByWithRelationInput = {
    id?: SortOrder
    roomId?: SortOrder
    email?: SortOrder
    role?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    invitedById?: SortOrderInput | SortOrder
    acceptedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    room?: RoomOrderByWithRelationInput
    invitedBy?: UserOrderByWithRelationInput
  }

  export type InvitationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: InvitationWhereInput | InvitationWhereInput[]
    OR?: InvitationWhereInput[]
    NOT?: InvitationWhereInput | InvitationWhereInput[]
    roomId?: StringFilter<"Invitation"> | string
    email?: StringFilter<"Invitation"> | string
    role?: EnumUserRoleFilter<"Invitation"> | $Enums.UserRole
    expiresAt?: DateTimeFilter<"Invitation"> | Date | string
    invitedById?: StringNullableFilter<"Invitation"> | string | null
    acceptedAt?: DateTimeNullableFilter<"Invitation"> | Date | string | null
    createdAt?: DateTimeFilter<"Invitation"> | Date | string
    updatedAt?: DateTimeFilter<"Invitation"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    invitedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "token">

  export type InvitationOrderByWithAggregationInput = {
    id?: SortOrder
    roomId?: SortOrder
    email?: SortOrder
    role?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    invitedById?: SortOrderInput | SortOrder
    acceptedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InvitationCountOrderByAggregateInput
    _max?: InvitationMaxOrderByAggregateInput
    _min?: InvitationMinOrderByAggregateInput
  }

  export type InvitationScalarWhereWithAggregatesInput = {
    AND?: InvitationScalarWhereWithAggregatesInput | InvitationScalarWhereWithAggregatesInput[]
    OR?: InvitationScalarWhereWithAggregatesInput[]
    NOT?: InvitationScalarWhereWithAggregatesInput | InvitationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Invitation"> | string
    roomId?: StringWithAggregatesFilter<"Invitation"> | string
    email?: StringWithAggregatesFilter<"Invitation"> | string
    role?: EnumUserRoleWithAggregatesFilter<"Invitation"> | $Enums.UserRole
    token?: StringWithAggregatesFilter<"Invitation"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Invitation"> | Date | string
    invitedById?: StringNullableWithAggregatesFilter<"Invitation"> | string | null
    acceptedAt?: DateTimeNullableWithAggregatesFilter<"Invitation"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Invitation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Invitation"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    role: $Enums.UserRole
    stars?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    quests?: QuestCreateNestedManyWithoutCreatorInput
    completions?: QuestCompletionCreateNestedManyWithoutUserInput
    rewardsPurchase?: RewardPurchaseCreateNestedManyWithoutChildInput
    rewards?: RewardCreateNestedManyWithoutCreatorInput
    boosts?: BoostActivationCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutCreatorInput
    rooms?: RoomMemberCreateNestedManyWithoutUserInput
    createdRooms?: RoomCreateNestedManyWithoutCreateUserInput
    roomInvitations?: InvitationCreateNestedManyWithoutInvitedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    role: $Enums.UserRole
    stars?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    quests?: QuestUncheckedCreateNestedManyWithoutCreatorInput
    completions?: QuestCompletionUncheckedCreateNestedManyWithoutUserInput
    rewardsPurchase?: RewardPurchaseUncheckedCreateNestedManyWithoutChildInput
    rewards?: RewardUncheckedCreateNestedManyWithoutCreatorInput
    boosts?: BoostActivationUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutCreatorInput
    rooms?: RoomMemberUncheckedCreateNestedManyWithoutUserInput
    createdRooms?: RoomUncheckedCreateNestedManyWithoutCreateUserInput
    roomInvitations?: InvitationUncheckedCreateNestedManyWithoutInvitedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    stars?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quests?: QuestUpdateManyWithoutCreatorNestedInput
    completions?: QuestCompletionUpdateManyWithoutUserNestedInput
    rewardsPurchase?: RewardPurchaseUpdateManyWithoutChildNestedInput
    rewards?: RewardUpdateManyWithoutCreatorNestedInput
    boosts?: BoostActivationUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutCreatorNestedInput
    rooms?: RoomMemberUpdateManyWithoutUserNestedInput
    createdRooms?: RoomUpdateManyWithoutCreateUserNestedInput
    roomInvitations?: InvitationUpdateManyWithoutInvitedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    stars?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quests?: QuestUncheckedUpdateManyWithoutCreatorNestedInput
    completions?: QuestCompletionUncheckedUpdateManyWithoutUserNestedInput
    rewardsPurchase?: RewardPurchaseUncheckedUpdateManyWithoutChildNestedInput
    rewards?: RewardUncheckedUpdateManyWithoutCreatorNestedInput
    boosts?: BoostActivationUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutCreatorNestedInput
    rooms?: RoomMemberUncheckedUpdateManyWithoutUserNestedInput
    createdRooms?: RoomUncheckedUpdateManyWithoutCreateUserNestedInput
    roomInvitations?: InvitationUncheckedUpdateManyWithoutInvitedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    role: $Enums.UserRole
    stars?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    stars?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    stars?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalCreateInput = {
    id?: string
    title: string
    description?: string | null
    starReward: number
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutGoalsInput
    quests?: QuestCreateNestedManyWithoutGoalInput
  }

  export type GoalUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    starReward: number
    creatorId: string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    quests?: QuestUncheckedCreateNestedManyWithoutGoalInput
  }

  export type GoalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    starReward?: IntFieldUpdateOperationsInput | number
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutGoalsNestedInput
    quests?: QuestUpdateManyWithoutGoalNestedInput
  }

  export type GoalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    starReward?: IntFieldUpdateOperationsInput | number
    creatorId?: StringFieldUpdateOperationsInput | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quests?: QuestUncheckedUpdateManyWithoutGoalNestedInput
  }

  export type GoalCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    starReward: number
    creatorId: string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    starReward?: IntFieldUpdateOperationsInput | number
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    starReward?: IntFieldUpdateOperationsInput | number
    creatorId?: StringFieldUpdateOperationsInput | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestCreateInput = {
    id?: string
    title: string
    description?: string | null
    deadline: Date | string
    difficulty?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutQuestsInput
    goal?: GoalCreateNestedOneWithoutQuestsInput
    room?: RoomCreateNestedOneWithoutQuestsInput
    completions?: QuestCompletionCreateNestedManyWithoutQuestInput
  }

  export type QuestUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    deadline: Date | string
    difficulty?: number
    creatorId: string
    goalId?: string | null
    roomId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completions?: QuestCompletionUncheckedCreateNestedManyWithoutQuestInput
  }

  export type QuestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    difficulty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutQuestsNestedInput
    goal?: GoalUpdateOneWithoutQuestsNestedInput
    room?: RoomUpdateOneWithoutQuestsNestedInput
    completions?: QuestCompletionUpdateManyWithoutQuestNestedInput
  }

  export type QuestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    difficulty?: IntFieldUpdateOperationsInput | number
    creatorId?: StringFieldUpdateOperationsInput | string
    goalId?: NullableStringFieldUpdateOperationsInput | string | null
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completions?: QuestCompletionUncheckedUpdateManyWithoutQuestNestedInput
  }

  export type QuestCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    deadline: Date | string
    difficulty?: number
    creatorId: string
    goalId?: string | null
    roomId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    difficulty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    difficulty?: IntFieldUpdateOperationsInput | number
    creatorId?: StringFieldUpdateOperationsInput | string
    goalId?: NullableStringFieldUpdateOperationsInput | string | null
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestCompletionCreateInput = {
    id?: string
    completedAt?: Date | string
    isLate?: boolean
    starsAwarded: number
    createdAt?: Date | string
    updatedAt?: Date | string
    quest: QuestCreateNestedOneWithoutCompletionsInput
    user: UserCreateNestedOneWithoutCompletionsInput
  }

  export type QuestCompletionUncheckedCreateInput = {
    id?: string
    completedAt?: Date | string
    isLate?: boolean
    starsAwarded: number
    questId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestCompletionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isLate?: BoolFieldUpdateOperationsInput | boolean
    starsAwarded?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quest?: QuestUpdateOneRequiredWithoutCompletionsNestedInput
    user?: UserUpdateOneRequiredWithoutCompletionsNestedInput
  }

  export type QuestCompletionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isLate?: BoolFieldUpdateOperationsInput | boolean
    starsAwarded?: IntFieldUpdateOperationsInput | number
    questId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestCompletionCreateManyInput = {
    id?: string
    completedAt?: Date | string
    isLate?: boolean
    starsAwarded: number
    questId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestCompletionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isLate?: BoolFieldUpdateOperationsInput | boolean
    starsAwarded?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestCompletionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isLate?: BoolFieldUpdateOperationsInput | boolean
    starsAwarded?: IntFieldUpdateOperationsInput | number
    questId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RewardCreateInput = {
    id?: string
    title: string
    description?: string | null
    starCost: number
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutRewardsInput
    purchases?: RewardPurchaseCreateNestedManyWithoutRewardInput
  }

  export type RewardUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    starCost: number
    creatorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    purchases?: RewardPurchaseUncheckedCreateNestedManyWithoutRewardInput
  }

  export type RewardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    starCost?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutRewardsNestedInput
    purchases?: RewardPurchaseUpdateManyWithoutRewardNestedInput
  }

  export type RewardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    starCost?: IntFieldUpdateOperationsInput | number
    creatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchases?: RewardPurchaseUncheckedUpdateManyWithoutRewardNestedInput
  }

  export type RewardCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    starCost: number
    creatorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RewardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    starCost?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RewardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    starCost?: IntFieldUpdateOperationsInput | number
    creatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RewardPurchaseCreateInput = {
    id?: string
    purchasedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    reward: RewardCreateNestedOneWithoutPurchasesInput
    child: UserCreateNestedOneWithoutRewardsPurchaseInput
  }

  export type RewardPurchaseUncheckedCreateInput = {
    id?: string
    purchasedAt?: Date | string
    rewardId: string
    childId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RewardPurchaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reward?: RewardUpdateOneRequiredWithoutPurchasesNestedInput
    child?: UserUpdateOneRequiredWithoutRewardsPurchaseNestedInput
  }

  export type RewardPurchaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rewardId?: StringFieldUpdateOperationsInput | string
    childId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RewardPurchaseCreateManyInput = {
    id?: string
    purchasedAt?: Date | string
    rewardId: string
    childId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RewardPurchaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RewardPurchaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rewardId?: StringFieldUpdateOperationsInput | string
    childId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoostCreateInput = {
    id?: string
    name: string
    description?: string | null
    cooldownDays: number
    durationHours: number
    createdAt?: Date | string
    updatedAt?: Date | string
    activations?: BoostActivationCreateNestedManyWithoutBoostInput
  }

  export type BoostUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    cooldownDays: number
    durationHours: number
    createdAt?: Date | string
    updatedAt?: Date | string
    activations?: BoostActivationUncheckedCreateNestedManyWithoutBoostInput
  }

  export type BoostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cooldownDays?: IntFieldUpdateOperationsInput | number
    durationHours?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activations?: BoostActivationUpdateManyWithoutBoostNestedInput
  }

  export type BoostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cooldownDays?: IntFieldUpdateOperationsInput | number
    durationHours?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activations?: BoostActivationUncheckedUpdateManyWithoutBoostNestedInput
  }

  export type BoostCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    cooldownDays: number
    durationHours: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BoostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cooldownDays?: IntFieldUpdateOperationsInput | number
    durationHours?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cooldownDays?: IntFieldUpdateOperationsInput | number
    durationHours?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoostActivationCreateInput = {
    id?: string
    activatedAt?: Date | string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    boost: BoostCreateNestedOneWithoutActivationsInput
    user: UserCreateNestedOneWithoutBoostsInput
  }

  export type BoostActivationUncheckedCreateInput = {
    id?: string
    activatedAt?: Date | string
    expiresAt: Date | string
    boostId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BoostActivationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    activatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    boost?: BoostUpdateOneRequiredWithoutActivationsNestedInput
    user?: UserUpdateOneRequiredWithoutBoostsNestedInput
  }

  export type BoostActivationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    activatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    boostId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoostActivationCreateManyInput = {
    id?: string
    activatedAt?: Date | string
    expiresAt: Date | string
    boostId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BoostActivationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    activatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoostActivationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    activatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    boostId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createUser: UserCreateNestedOneWithoutCreatedRoomsInput
    members?: RoomMemberCreateNestedManyWithoutRoomInput
    invitations?: InvitationCreateNestedManyWithoutRoomInput
    quests?: QuestCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createUserId: string
    members?: RoomMemberUncheckedCreateNestedManyWithoutRoomInput
    invitations?: InvitationUncheckedCreateNestedManyWithoutRoomInput
    quests?: QuestUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createUser?: UserUpdateOneRequiredWithoutCreatedRoomsNestedInput
    members?: RoomMemberUpdateManyWithoutRoomNestedInput
    invitations?: InvitationUpdateManyWithoutRoomNestedInput
    quests?: QuestUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createUserId?: StringFieldUpdateOperationsInput | string
    members?: RoomMemberUncheckedUpdateManyWithoutRoomNestedInput
    invitations?: InvitationUncheckedUpdateManyWithoutRoomNestedInput
    quests?: QuestUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createUserId: string
  }

  export type RoomUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createUserId?: StringFieldUpdateOperationsInput | string
  }

  export type RoomMemberCreateInput = {
    id?: string
    role?: $Enums.UserRole
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    room: RoomCreateNestedOneWithoutMembersInput
    user: UserCreateNestedOneWithoutRoomsInput
  }

  export type RoomMemberUncheckedCreateInput = {
    id?: string
    roomId: string
    userId: string
    role?: $Enums.UserRole
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutMembersNestedInput
    user?: UserUpdateOneRequiredWithoutRoomsNestedInput
  }

  export type RoomMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomMemberCreateManyInput = {
    id?: string
    roomId: string
    userId: string
    role?: $Enums.UserRole
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationCreateInput = {
    id?: string
    email: string
    role: $Enums.UserRole
    token: string
    expiresAt: Date | string
    acceptedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    room: RoomCreateNestedOneWithoutInvitationsInput
    invitedBy?: UserCreateNestedOneWithoutRoomInvitationsInput
  }

  export type InvitationUncheckedCreateInput = {
    id?: string
    roomId: string
    email: string
    role: $Enums.UserRole
    token: string
    expiresAt: Date | string
    invitedById?: string | null
    acceptedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvitationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutInvitationsNestedInput
    invitedBy?: UserUpdateOneWithoutRoomInvitationsNestedInput
  }

  export type InvitationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitedById?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationCreateManyInput = {
    id?: string
    roomId: string
    email: string
    role: $Enums.UserRole
    token: string
    expiresAt: Date | string
    invitedById?: string | null
    acceptedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvitationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitedById?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type QuestListRelationFilter = {
    every?: QuestWhereInput
    some?: QuestWhereInput
    none?: QuestWhereInput
  }

  export type QuestCompletionListRelationFilter = {
    every?: QuestCompletionWhereInput
    some?: QuestCompletionWhereInput
    none?: QuestCompletionWhereInput
  }

  export type RewardPurchaseListRelationFilter = {
    every?: RewardPurchaseWhereInput
    some?: RewardPurchaseWhereInput
    none?: RewardPurchaseWhereInput
  }

  export type RewardListRelationFilter = {
    every?: RewardWhereInput
    some?: RewardWhereInput
    none?: RewardWhereInput
  }

  export type BoostActivationListRelationFilter = {
    every?: BoostActivationWhereInput
    some?: BoostActivationWhereInput
    none?: BoostActivationWhereInput
  }

  export type GoalListRelationFilter = {
    every?: GoalWhereInput
    some?: GoalWhereInput
    none?: GoalWhereInput
  }

  export type RoomMemberListRelationFilter = {
    every?: RoomMemberWhereInput
    some?: RoomMemberWhereInput
    none?: RoomMemberWhereInput
  }

  export type RoomListRelationFilter = {
    every?: RoomWhereInput
    some?: RoomWhereInput
    none?: RoomWhereInput
  }

  export type InvitationListRelationFilter = {
    every?: InvitationWhereInput
    some?: InvitationWhereInput
    none?: InvitationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type QuestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestCompletionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RewardPurchaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RewardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BoostActivationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GoalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InvitationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    stars?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    stars?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    stars?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    stars?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    stars?: SortOrder
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

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type GoalCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    starReward?: SortOrder
    creatorId?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GoalAvgOrderByAggregateInput = {
    starReward?: SortOrder
  }

  export type GoalMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    starReward?: SortOrder
    creatorId?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GoalMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    starReward?: SortOrder
    creatorId?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GoalSumOrderByAggregateInput = {
    starReward?: SortOrder
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

  export type GoalNullableScalarRelationFilter = {
    is?: GoalWhereInput | null
    isNot?: GoalWhereInput | null
  }

  export type RoomNullableScalarRelationFilter = {
    is?: RoomWhereInput | null
    isNot?: RoomWhereInput | null
  }

  export type QuestCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    deadline?: SortOrder
    difficulty?: SortOrder
    creatorId?: SortOrder
    goalId?: SortOrder
    roomId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestAvgOrderByAggregateInput = {
    difficulty?: SortOrder
  }

  export type QuestMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    deadline?: SortOrder
    difficulty?: SortOrder
    creatorId?: SortOrder
    goalId?: SortOrder
    roomId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    deadline?: SortOrder
    difficulty?: SortOrder
    creatorId?: SortOrder
    goalId?: SortOrder
    roomId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestSumOrderByAggregateInput = {
    difficulty?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type QuestScalarRelationFilter = {
    is?: QuestWhereInput
    isNot?: QuestWhereInput
  }

  export type QuestCompletionCountOrderByAggregateInput = {
    id?: SortOrder
    completedAt?: SortOrder
    isLate?: SortOrder
    starsAwarded?: SortOrder
    questId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestCompletionAvgOrderByAggregateInput = {
    starsAwarded?: SortOrder
  }

  export type QuestCompletionMaxOrderByAggregateInput = {
    id?: SortOrder
    completedAt?: SortOrder
    isLate?: SortOrder
    starsAwarded?: SortOrder
    questId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestCompletionMinOrderByAggregateInput = {
    id?: SortOrder
    completedAt?: SortOrder
    isLate?: SortOrder
    starsAwarded?: SortOrder
    questId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestCompletionSumOrderByAggregateInput = {
    starsAwarded?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type RewardCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    starCost?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RewardAvgOrderByAggregateInput = {
    starCost?: SortOrder
  }

  export type RewardMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    starCost?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RewardMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    starCost?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RewardSumOrderByAggregateInput = {
    starCost?: SortOrder
  }

  export type RewardScalarRelationFilter = {
    is?: RewardWhereInput
    isNot?: RewardWhereInput
  }

  export type RewardPurchaseCountOrderByAggregateInput = {
    id?: SortOrder
    purchasedAt?: SortOrder
    rewardId?: SortOrder
    childId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RewardPurchaseMaxOrderByAggregateInput = {
    id?: SortOrder
    purchasedAt?: SortOrder
    rewardId?: SortOrder
    childId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RewardPurchaseMinOrderByAggregateInput = {
    id?: SortOrder
    purchasedAt?: SortOrder
    rewardId?: SortOrder
    childId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoostCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    cooldownDays?: SortOrder
    durationHours?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoostAvgOrderByAggregateInput = {
    cooldownDays?: SortOrder
    durationHours?: SortOrder
  }

  export type BoostMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    cooldownDays?: SortOrder
    durationHours?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoostMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    cooldownDays?: SortOrder
    durationHours?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoostSumOrderByAggregateInput = {
    cooldownDays?: SortOrder
    durationHours?: SortOrder
  }

  export type BoostScalarRelationFilter = {
    is?: BoostWhereInput
    isNot?: BoostWhereInput
  }

  export type BoostActivationCountOrderByAggregateInput = {
    id?: SortOrder
    activatedAt?: SortOrder
    expiresAt?: SortOrder
    boostId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoostActivationMaxOrderByAggregateInput = {
    id?: SortOrder
    activatedAt?: SortOrder
    expiresAt?: SortOrder
    boostId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoostActivationMinOrderByAggregateInput = {
    id?: SortOrder
    activatedAt?: SortOrder
    expiresAt?: SortOrder
    boostId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createUserId?: SortOrder
  }

  export type RoomMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createUserId?: SortOrder
  }

  export type RoomMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createUserId?: SortOrder
  }

  export type RoomScalarRelationFilter = {
    is?: RoomWhereInput
    isNot?: RoomWhereInput
  }

  export type RoomMemberCountOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomMemberMinOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type InvitationCountOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    email?: SortOrder
    role?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    invitedById?: SortOrder
    acceptedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvitationMaxOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    email?: SortOrder
    role?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    invitedById?: SortOrder
    acceptedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvitationMinOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    email?: SortOrder
    role?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    invitedById?: SortOrder
    acceptedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestCreateNestedManyWithoutCreatorInput = {
    create?: XOR<QuestCreateWithoutCreatorInput, QuestUncheckedCreateWithoutCreatorInput> | QuestCreateWithoutCreatorInput[] | QuestUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: QuestCreateOrConnectWithoutCreatorInput | QuestCreateOrConnectWithoutCreatorInput[]
    createMany?: QuestCreateManyCreatorInputEnvelope
    connect?: QuestWhereUniqueInput | QuestWhereUniqueInput[]
  }

  export type QuestCompletionCreateNestedManyWithoutUserInput = {
    create?: XOR<QuestCompletionCreateWithoutUserInput, QuestCompletionUncheckedCreateWithoutUserInput> | QuestCompletionCreateWithoutUserInput[] | QuestCompletionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuestCompletionCreateOrConnectWithoutUserInput | QuestCompletionCreateOrConnectWithoutUserInput[]
    createMany?: QuestCompletionCreateManyUserInputEnvelope
    connect?: QuestCompletionWhereUniqueInput | QuestCompletionWhereUniqueInput[]
  }

  export type RewardPurchaseCreateNestedManyWithoutChildInput = {
    create?: XOR<RewardPurchaseCreateWithoutChildInput, RewardPurchaseUncheckedCreateWithoutChildInput> | RewardPurchaseCreateWithoutChildInput[] | RewardPurchaseUncheckedCreateWithoutChildInput[]
    connectOrCreate?: RewardPurchaseCreateOrConnectWithoutChildInput | RewardPurchaseCreateOrConnectWithoutChildInput[]
    createMany?: RewardPurchaseCreateManyChildInputEnvelope
    connect?: RewardPurchaseWhereUniqueInput | RewardPurchaseWhereUniqueInput[]
  }

  export type RewardCreateNestedManyWithoutCreatorInput = {
    create?: XOR<RewardCreateWithoutCreatorInput, RewardUncheckedCreateWithoutCreatorInput> | RewardCreateWithoutCreatorInput[] | RewardUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: RewardCreateOrConnectWithoutCreatorInput | RewardCreateOrConnectWithoutCreatorInput[]
    createMany?: RewardCreateManyCreatorInputEnvelope
    connect?: RewardWhereUniqueInput | RewardWhereUniqueInput[]
  }

  export type BoostActivationCreateNestedManyWithoutUserInput = {
    create?: XOR<BoostActivationCreateWithoutUserInput, BoostActivationUncheckedCreateWithoutUserInput> | BoostActivationCreateWithoutUserInput[] | BoostActivationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BoostActivationCreateOrConnectWithoutUserInput | BoostActivationCreateOrConnectWithoutUserInput[]
    createMany?: BoostActivationCreateManyUserInputEnvelope
    connect?: BoostActivationWhereUniqueInput | BoostActivationWhereUniqueInput[]
  }

  export type GoalCreateNestedManyWithoutCreatorInput = {
    create?: XOR<GoalCreateWithoutCreatorInput, GoalUncheckedCreateWithoutCreatorInput> | GoalCreateWithoutCreatorInput[] | GoalUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutCreatorInput | GoalCreateOrConnectWithoutCreatorInput[]
    createMany?: GoalCreateManyCreatorInputEnvelope
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
  }

  export type RoomMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<RoomMemberCreateWithoutUserInput, RoomMemberUncheckedCreateWithoutUserInput> | RoomMemberCreateWithoutUserInput[] | RoomMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoomMemberCreateOrConnectWithoutUserInput | RoomMemberCreateOrConnectWithoutUserInput[]
    createMany?: RoomMemberCreateManyUserInputEnvelope
    connect?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
  }

  export type RoomCreateNestedManyWithoutCreateUserInput = {
    create?: XOR<RoomCreateWithoutCreateUserInput, RoomUncheckedCreateWithoutCreateUserInput> | RoomCreateWithoutCreateUserInput[] | RoomUncheckedCreateWithoutCreateUserInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutCreateUserInput | RoomCreateOrConnectWithoutCreateUserInput[]
    createMany?: RoomCreateManyCreateUserInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type InvitationCreateNestedManyWithoutInvitedByInput = {
    create?: XOR<InvitationCreateWithoutInvitedByInput, InvitationUncheckedCreateWithoutInvitedByInput> | InvitationCreateWithoutInvitedByInput[] | InvitationUncheckedCreateWithoutInvitedByInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutInvitedByInput | InvitationCreateOrConnectWithoutInvitedByInput[]
    createMany?: InvitationCreateManyInvitedByInputEnvelope
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
  }

  export type QuestUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<QuestCreateWithoutCreatorInput, QuestUncheckedCreateWithoutCreatorInput> | QuestCreateWithoutCreatorInput[] | QuestUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: QuestCreateOrConnectWithoutCreatorInput | QuestCreateOrConnectWithoutCreatorInput[]
    createMany?: QuestCreateManyCreatorInputEnvelope
    connect?: QuestWhereUniqueInput | QuestWhereUniqueInput[]
  }

  export type QuestCompletionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<QuestCompletionCreateWithoutUserInput, QuestCompletionUncheckedCreateWithoutUserInput> | QuestCompletionCreateWithoutUserInput[] | QuestCompletionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuestCompletionCreateOrConnectWithoutUserInput | QuestCompletionCreateOrConnectWithoutUserInput[]
    createMany?: QuestCompletionCreateManyUserInputEnvelope
    connect?: QuestCompletionWhereUniqueInput | QuestCompletionWhereUniqueInput[]
  }

  export type RewardPurchaseUncheckedCreateNestedManyWithoutChildInput = {
    create?: XOR<RewardPurchaseCreateWithoutChildInput, RewardPurchaseUncheckedCreateWithoutChildInput> | RewardPurchaseCreateWithoutChildInput[] | RewardPurchaseUncheckedCreateWithoutChildInput[]
    connectOrCreate?: RewardPurchaseCreateOrConnectWithoutChildInput | RewardPurchaseCreateOrConnectWithoutChildInput[]
    createMany?: RewardPurchaseCreateManyChildInputEnvelope
    connect?: RewardPurchaseWhereUniqueInput | RewardPurchaseWhereUniqueInput[]
  }

  export type RewardUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<RewardCreateWithoutCreatorInput, RewardUncheckedCreateWithoutCreatorInput> | RewardCreateWithoutCreatorInput[] | RewardUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: RewardCreateOrConnectWithoutCreatorInput | RewardCreateOrConnectWithoutCreatorInput[]
    createMany?: RewardCreateManyCreatorInputEnvelope
    connect?: RewardWhereUniqueInput | RewardWhereUniqueInput[]
  }

  export type BoostActivationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BoostActivationCreateWithoutUserInput, BoostActivationUncheckedCreateWithoutUserInput> | BoostActivationCreateWithoutUserInput[] | BoostActivationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BoostActivationCreateOrConnectWithoutUserInput | BoostActivationCreateOrConnectWithoutUserInput[]
    createMany?: BoostActivationCreateManyUserInputEnvelope
    connect?: BoostActivationWhereUniqueInput | BoostActivationWhereUniqueInput[]
  }

  export type GoalUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<GoalCreateWithoutCreatorInput, GoalUncheckedCreateWithoutCreatorInput> | GoalCreateWithoutCreatorInput[] | GoalUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutCreatorInput | GoalCreateOrConnectWithoutCreatorInput[]
    createMany?: GoalCreateManyCreatorInputEnvelope
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
  }

  export type RoomMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RoomMemberCreateWithoutUserInput, RoomMemberUncheckedCreateWithoutUserInput> | RoomMemberCreateWithoutUserInput[] | RoomMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoomMemberCreateOrConnectWithoutUserInput | RoomMemberCreateOrConnectWithoutUserInput[]
    createMany?: RoomMemberCreateManyUserInputEnvelope
    connect?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
  }

  export type RoomUncheckedCreateNestedManyWithoutCreateUserInput = {
    create?: XOR<RoomCreateWithoutCreateUserInput, RoomUncheckedCreateWithoutCreateUserInput> | RoomCreateWithoutCreateUserInput[] | RoomUncheckedCreateWithoutCreateUserInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutCreateUserInput | RoomCreateOrConnectWithoutCreateUserInput[]
    createMany?: RoomCreateManyCreateUserInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type InvitationUncheckedCreateNestedManyWithoutInvitedByInput = {
    create?: XOR<InvitationCreateWithoutInvitedByInput, InvitationUncheckedCreateWithoutInvitedByInput> | InvitationCreateWithoutInvitedByInput[] | InvitationUncheckedCreateWithoutInvitedByInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutInvitedByInput | InvitationCreateOrConnectWithoutInvitedByInput[]
    createMany?: InvitationCreateManyInvitedByInputEnvelope
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type QuestUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<QuestCreateWithoutCreatorInput, QuestUncheckedCreateWithoutCreatorInput> | QuestCreateWithoutCreatorInput[] | QuestUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: QuestCreateOrConnectWithoutCreatorInput | QuestCreateOrConnectWithoutCreatorInput[]
    upsert?: QuestUpsertWithWhereUniqueWithoutCreatorInput | QuestUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: QuestCreateManyCreatorInputEnvelope
    set?: QuestWhereUniqueInput | QuestWhereUniqueInput[]
    disconnect?: QuestWhereUniqueInput | QuestWhereUniqueInput[]
    delete?: QuestWhereUniqueInput | QuestWhereUniqueInput[]
    connect?: QuestWhereUniqueInput | QuestWhereUniqueInput[]
    update?: QuestUpdateWithWhereUniqueWithoutCreatorInput | QuestUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: QuestUpdateManyWithWhereWithoutCreatorInput | QuestUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: QuestScalarWhereInput | QuestScalarWhereInput[]
  }

  export type QuestCompletionUpdateManyWithoutUserNestedInput = {
    create?: XOR<QuestCompletionCreateWithoutUserInput, QuestCompletionUncheckedCreateWithoutUserInput> | QuestCompletionCreateWithoutUserInput[] | QuestCompletionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuestCompletionCreateOrConnectWithoutUserInput | QuestCompletionCreateOrConnectWithoutUserInput[]
    upsert?: QuestCompletionUpsertWithWhereUniqueWithoutUserInput | QuestCompletionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QuestCompletionCreateManyUserInputEnvelope
    set?: QuestCompletionWhereUniqueInput | QuestCompletionWhereUniqueInput[]
    disconnect?: QuestCompletionWhereUniqueInput | QuestCompletionWhereUniqueInput[]
    delete?: QuestCompletionWhereUniqueInput | QuestCompletionWhereUniqueInput[]
    connect?: QuestCompletionWhereUniqueInput | QuestCompletionWhereUniqueInput[]
    update?: QuestCompletionUpdateWithWhereUniqueWithoutUserInput | QuestCompletionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QuestCompletionUpdateManyWithWhereWithoutUserInput | QuestCompletionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QuestCompletionScalarWhereInput | QuestCompletionScalarWhereInput[]
  }

  export type RewardPurchaseUpdateManyWithoutChildNestedInput = {
    create?: XOR<RewardPurchaseCreateWithoutChildInput, RewardPurchaseUncheckedCreateWithoutChildInput> | RewardPurchaseCreateWithoutChildInput[] | RewardPurchaseUncheckedCreateWithoutChildInput[]
    connectOrCreate?: RewardPurchaseCreateOrConnectWithoutChildInput | RewardPurchaseCreateOrConnectWithoutChildInput[]
    upsert?: RewardPurchaseUpsertWithWhereUniqueWithoutChildInput | RewardPurchaseUpsertWithWhereUniqueWithoutChildInput[]
    createMany?: RewardPurchaseCreateManyChildInputEnvelope
    set?: RewardPurchaseWhereUniqueInput | RewardPurchaseWhereUniqueInput[]
    disconnect?: RewardPurchaseWhereUniqueInput | RewardPurchaseWhereUniqueInput[]
    delete?: RewardPurchaseWhereUniqueInput | RewardPurchaseWhereUniqueInput[]
    connect?: RewardPurchaseWhereUniqueInput | RewardPurchaseWhereUniqueInput[]
    update?: RewardPurchaseUpdateWithWhereUniqueWithoutChildInput | RewardPurchaseUpdateWithWhereUniqueWithoutChildInput[]
    updateMany?: RewardPurchaseUpdateManyWithWhereWithoutChildInput | RewardPurchaseUpdateManyWithWhereWithoutChildInput[]
    deleteMany?: RewardPurchaseScalarWhereInput | RewardPurchaseScalarWhereInput[]
  }

  export type RewardUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<RewardCreateWithoutCreatorInput, RewardUncheckedCreateWithoutCreatorInput> | RewardCreateWithoutCreatorInput[] | RewardUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: RewardCreateOrConnectWithoutCreatorInput | RewardCreateOrConnectWithoutCreatorInput[]
    upsert?: RewardUpsertWithWhereUniqueWithoutCreatorInput | RewardUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: RewardCreateManyCreatorInputEnvelope
    set?: RewardWhereUniqueInput | RewardWhereUniqueInput[]
    disconnect?: RewardWhereUniqueInput | RewardWhereUniqueInput[]
    delete?: RewardWhereUniqueInput | RewardWhereUniqueInput[]
    connect?: RewardWhereUniqueInput | RewardWhereUniqueInput[]
    update?: RewardUpdateWithWhereUniqueWithoutCreatorInput | RewardUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: RewardUpdateManyWithWhereWithoutCreatorInput | RewardUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: RewardScalarWhereInput | RewardScalarWhereInput[]
  }

  export type BoostActivationUpdateManyWithoutUserNestedInput = {
    create?: XOR<BoostActivationCreateWithoutUserInput, BoostActivationUncheckedCreateWithoutUserInput> | BoostActivationCreateWithoutUserInput[] | BoostActivationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BoostActivationCreateOrConnectWithoutUserInput | BoostActivationCreateOrConnectWithoutUserInput[]
    upsert?: BoostActivationUpsertWithWhereUniqueWithoutUserInput | BoostActivationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BoostActivationCreateManyUserInputEnvelope
    set?: BoostActivationWhereUniqueInput | BoostActivationWhereUniqueInput[]
    disconnect?: BoostActivationWhereUniqueInput | BoostActivationWhereUniqueInput[]
    delete?: BoostActivationWhereUniqueInput | BoostActivationWhereUniqueInput[]
    connect?: BoostActivationWhereUniqueInput | BoostActivationWhereUniqueInput[]
    update?: BoostActivationUpdateWithWhereUniqueWithoutUserInput | BoostActivationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BoostActivationUpdateManyWithWhereWithoutUserInput | BoostActivationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BoostActivationScalarWhereInput | BoostActivationScalarWhereInput[]
  }

  export type GoalUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<GoalCreateWithoutCreatorInput, GoalUncheckedCreateWithoutCreatorInput> | GoalCreateWithoutCreatorInput[] | GoalUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutCreatorInput | GoalCreateOrConnectWithoutCreatorInput[]
    upsert?: GoalUpsertWithWhereUniqueWithoutCreatorInput | GoalUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: GoalCreateManyCreatorInputEnvelope
    set?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    disconnect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    delete?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    update?: GoalUpdateWithWhereUniqueWithoutCreatorInput | GoalUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: GoalUpdateManyWithWhereWithoutCreatorInput | GoalUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: GoalScalarWhereInput | GoalScalarWhereInput[]
  }

  export type RoomMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<RoomMemberCreateWithoutUserInput, RoomMemberUncheckedCreateWithoutUserInput> | RoomMemberCreateWithoutUserInput[] | RoomMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoomMemberCreateOrConnectWithoutUserInput | RoomMemberCreateOrConnectWithoutUserInput[]
    upsert?: RoomMemberUpsertWithWhereUniqueWithoutUserInput | RoomMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RoomMemberCreateManyUserInputEnvelope
    set?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    disconnect?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    delete?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    connect?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    update?: RoomMemberUpdateWithWhereUniqueWithoutUserInput | RoomMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RoomMemberUpdateManyWithWhereWithoutUserInput | RoomMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RoomMemberScalarWhereInput | RoomMemberScalarWhereInput[]
  }

  export type RoomUpdateManyWithoutCreateUserNestedInput = {
    create?: XOR<RoomCreateWithoutCreateUserInput, RoomUncheckedCreateWithoutCreateUserInput> | RoomCreateWithoutCreateUserInput[] | RoomUncheckedCreateWithoutCreateUserInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutCreateUserInput | RoomCreateOrConnectWithoutCreateUserInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutCreateUserInput | RoomUpsertWithWhereUniqueWithoutCreateUserInput[]
    createMany?: RoomCreateManyCreateUserInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutCreateUserInput | RoomUpdateWithWhereUniqueWithoutCreateUserInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutCreateUserInput | RoomUpdateManyWithWhereWithoutCreateUserInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type InvitationUpdateManyWithoutInvitedByNestedInput = {
    create?: XOR<InvitationCreateWithoutInvitedByInput, InvitationUncheckedCreateWithoutInvitedByInput> | InvitationCreateWithoutInvitedByInput[] | InvitationUncheckedCreateWithoutInvitedByInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutInvitedByInput | InvitationCreateOrConnectWithoutInvitedByInput[]
    upsert?: InvitationUpsertWithWhereUniqueWithoutInvitedByInput | InvitationUpsertWithWhereUniqueWithoutInvitedByInput[]
    createMany?: InvitationCreateManyInvitedByInputEnvelope
    set?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    disconnect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    delete?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    update?: InvitationUpdateWithWhereUniqueWithoutInvitedByInput | InvitationUpdateWithWhereUniqueWithoutInvitedByInput[]
    updateMany?: InvitationUpdateManyWithWhereWithoutInvitedByInput | InvitationUpdateManyWithWhereWithoutInvitedByInput[]
    deleteMany?: InvitationScalarWhereInput | InvitationScalarWhereInput[]
  }

  export type QuestUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<QuestCreateWithoutCreatorInput, QuestUncheckedCreateWithoutCreatorInput> | QuestCreateWithoutCreatorInput[] | QuestUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: QuestCreateOrConnectWithoutCreatorInput | QuestCreateOrConnectWithoutCreatorInput[]
    upsert?: QuestUpsertWithWhereUniqueWithoutCreatorInput | QuestUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: QuestCreateManyCreatorInputEnvelope
    set?: QuestWhereUniqueInput | QuestWhereUniqueInput[]
    disconnect?: QuestWhereUniqueInput | QuestWhereUniqueInput[]
    delete?: QuestWhereUniqueInput | QuestWhereUniqueInput[]
    connect?: QuestWhereUniqueInput | QuestWhereUniqueInput[]
    update?: QuestUpdateWithWhereUniqueWithoutCreatorInput | QuestUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: QuestUpdateManyWithWhereWithoutCreatorInput | QuestUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: QuestScalarWhereInput | QuestScalarWhereInput[]
  }

  export type QuestCompletionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<QuestCompletionCreateWithoutUserInput, QuestCompletionUncheckedCreateWithoutUserInput> | QuestCompletionCreateWithoutUserInput[] | QuestCompletionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuestCompletionCreateOrConnectWithoutUserInput | QuestCompletionCreateOrConnectWithoutUserInput[]
    upsert?: QuestCompletionUpsertWithWhereUniqueWithoutUserInput | QuestCompletionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QuestCompletionCreateManyUserInputEnvelope
    set?: QuestCompletionWhereUniqueInput | QuestCompletionWhereUniqueInput[]
    disconnect?: QuestCompletionWhereUniqueInput | QuestCompletionWhereUniqueInput[]
    delete?: QuestCompletionWhereUniqueInput | QuestCompletionWhereUniqueInput[]
    connect?: QuestCompletionWhereUniqueInput | QuestCompletionWhereUniqueInput[]
    update?: QuestCompletionUpdateWithWhereUniqueWithoutUserInput | QuestCompletionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QuestCompletionUpdateManyWithWhereWithoutUserInput | QuestCompletionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QuestCompletionScalarWhereInput | QuestCompletionScalarWhereInput[]
  }

  export type RewardPurchaseUncheckedUpdateManyWithoutChildNestedInput = {
    create?: XOR<RewardPurchaseCreateWithoutChildInput, RewardPurchaseUncheckedCreateWithoutChildInput> | RewardPurchaseCreateWithoutChildInput[] | RewardPurchaseUncheckedCreateWithoutChildInput[]
    connectOrCreate?: RewardPurchaseCreateOrConnectWithoutChildInput | RewardPurchaseCreateOrConnectWithoutChildInput[]
    upsert?: RewardPurchaseUpsertWithWhereUniqueWithoutChildInput | RewardPurchaseUpsertWithWhereUniqueWithoutChildInput[]
    createMany?: RewardPurchaseCreateManyChildInputEnvelope
    set?: RewardPurchaseWhereUniqueInput | RewardPurchaseWhereUniqueInput[]
    disconnect?: RewardPurchaseWhereUniqueInput | RewardPurchaseWhereUniqueInput[]
    delete?: RewardPurchaseWhereUniqueInput | RewardPurchaseWhereUniqueInput[]
    connect?: RewardPurchaseWhereUniqueInput | RewardPurchaseWhereUniqueInput[]
    update?: RewardPurchaseUpdateWithWhereUniqueWithoutChildInput | RewardPurchaseUpdateWithWhereUniqueWithoutChildInput[]
    updateMany?: RewardPurchaseUpdateManyWithWhereWithoutChildInput | RewardPurchaseUpdateManyWithWhereWithoutChildInput[]
    deleteMany?: RewardPurchaseScalarWhereInput | RewardPurchaseScalarWhereInput[]
  }

  export type RewardUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<RewardCreateWithoutCreatorInput, RewardUncheckedCreateWithoutCreatorInput> | RewardCreateWithoutCreatorInput[] | RewardUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: RewardCreateOrConnectWithoutCreatorInput | RewardCreateOrConnectWithoutCreatorInput[]
    upsert?: RewardUpsertWithWhereUniqueWithoutCreatorInput | RewardUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: RewardCreateManyCreatorInputEnvelope
    set?: RewardWhereUniqueInput | RewardWhereUniqueInput[]
    disconnect?: RewardWhereUniqueInput | RewardWhereUniqueInput[]
    delete?: RewardWhereUniqueInput | RewardWhereUniqueInput[]
    connect?: RewardWhereUniqueInput | RewardWhereUniqueInput[]
    update?: RewardUpdateWithWhereUniqueWithoutCreatorInput | RewardUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: RewardUpdateManyWithWhereWithoutCreatorInput | RewardUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: RewardScalarWhereInput | RewardScalarWhereInput[]
  }

  export type BoostActivationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BoostActivationCreateWithoutUserInput, BoostActivationUncheckedCreateWithoutUserInput> | BoostActivationCreateWithoutUserInput[] | BoostActivationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BoostActivationCreateOrConnectWithoutUserInput | BoostActivationCreateOrConnectWithoutUserInput[]
    upsert?: BoostActivationUpsertWithWhereUniqueWithoutUserInput | BoostActivationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BoostActivationCreateManyUserInputEnvelope
    set?: BoostActivationWhereUniqueInput | BoostActivationWhereUniqueInput[]
    disconnect?: BoostActivationWhereUniqueInput | BoostActivationWhereUniqueInput[]
    delete?: BoostActivationWhereUniqueInput | BoostActivationWhereUniqueInput[]
    connect?: BoostActivationWhereUniqueInput | BoostActivationWhereUniqueInput[]
    update?: BoostActivationUpdateWithWhereUniqueWithoutUserInput | BoostActivationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BoostActivationUpdateManyWithWhereWithoutUserInput | BoostActivationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BoostActivationScalarWhereInput | BoostActivationScalarWhereInput[]
  }

  export type GoalUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<GoalCreateWithoutCreatorInput, GoalUncheckedCreateWithoutCreatorInput> | GoalCreateWithoutCreatorInput[] | GoalUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutCreatorInput | GoalCreateOrConnectWithoutCreatorInput[]
    upsert?: GoalUpsertWithWhereUniqueWithoutCreatorInput | GoalUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: GoalCreateManyCreatorInputEnvelope
    set?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    disconnect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    delete?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    update?: GoalUpdateWithWhereUniqueWithoutCreatorInput | GoalUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: GoalUpdateManyWithWhereWithoutCreatorInput | GoalUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: GoalScalarWhereInput | GoalScalarWhereInput[]
  }

  export type RoomMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RoomMemberCreateWithoutUserInput, RoomMemberUncheckedCreateWithoutUserInput> | RoomMemberCreateWithoutUserInput[] | RoomMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoomMemberCreateOrConnectWithoutUserInput | RoomMemberCreateOrConnectWithoutUserInput[]
    upsert?: RoomMemberUpsertWithWhereUniqueWithoutUserInput | RoomMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RoomMemberCreateManyUserInputEnvelope
    set?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    disconnect?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    delete?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    connect?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    update?: RoomMemberUpdateWithWhereUniqueWithoutUserInput | RoomMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RoomMemberUpdateManyWithWhereWithoutUserInput | RoomMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RoomMemberScalarWhereInput | RoomMemberScalarWhereInput[]
  }

  export type RoomUncheckedUpdateManyWithoutCreateUserNestedInput = {
    create?: XOR<RoomCreateWithoutCreateUserInput, RoomUncheckedCreateWithoutCreateUserInput> | RoomCreateWithoutCreateUserInput[] | RoomUncheckedCreateWithoutCreateUserInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutCreateUserInput | RoomCreateOrConnectWithoutCreateUserInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutCreateUserInput | RoomUpsertWithWhereUniqueWithoutCreateUserInput[]
    createMany?: RoomCreateManyCreateUserInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutCreateUserInput | RoomUpdateWithWhereUniqueWithoutCreateUserInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutCreateUserInput | RoomUpdateManyWithWhereWithoutCreateUserInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type InvitationUncheckedUpdateManyWithoutInvitedByNestedInput = {
    create?: XOR<InvitationCreateWithoutInvitedByInput, InvitationUncheckedCreateWithoutInvitedByInput> | InvitationCreateWithoutInvitedByInput[] | InvitationUncheckedCreateWithoutInvitedByInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutInvitedByInput | InvitationCreateOrConnectWithoutInvitedByInput[]
    upsert?: InvitationUpsertWithWhereUniqueWithoutInvitedByInput | InvitationUpsertWithWhereUniqueWithoutInvitedByInput[]
    createMany?: InvitationCreateManyInvitedByInputEnvelope
    set?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    disconnect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    delete?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    update?: InvitationUpdateWithWhereUniqueWithoutInvitedByInput | InvitationUpdateWithWhereUniqueWithoutInvitedByInput[]
    updateMany?: InvitationUpdateManyWithWhereWithoutInvitedByInput | InvitationUpdateManyWithWhereWithoutInvitedByInput[]
    deleteMany?: InvitationScalarWhereInput | InvitationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutGoalsInput = {
    create?: XOR<UserCreateWithoutGoalsInput, UserUncheckedCreateWithoutGoalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGoalsInput
    connect?: UserWhereUniqueInput
  }

  export type QuestCreateNestedManyWithoutGoalInput = {
    create?: XOR<QuestCreateWithoutGoalInput, QuestUncheckedCreateWithoutGoalInput> | QuestCreateWithoutGoalInput[] | QuestUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: QuestCreateOrConnectWithoutGoalInput | QuestCreateOrConnectWithoutGoalInput[]
    createMany?: QuestCreateManyGoalInputEnvelope
    connect?: QuestWhereUniqueInput | QuestWhereUniqueInput[]
  }

  export type QuestUncheckedCreateNestedManyWithoutGoalInput = {
    create?: XOR<QuestCreateWithoutGoalInput, QuestUncheckedCreateWithoutGoalInput> | QuestCreateWithoutGoalInput[] | QuestUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: QuestCreateOrConnectWithoutGoalInput | QuestCreateOrConnectWithoutGoalInput[]
    createMany?: QuestCreateManyGoalInputEnvelope
    connect?: QuestWhereUniqueInput | QuestWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutGoalsNestedInput = {
    create?: XOR<UserCreateWithoutGoalsInput, UserUncheckedCreateWithoutGoalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGoalsInput
    upsert?: UserUpsertWithoutGoalsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGoalsInput, UserUpdateWithoutGoalsInput>, UserUncheckedUpdateWithoutGoalsInput>
  }

  export type QuestUpdateManyWithoutGoalNestedInput = {
    create?: XOR<QuestCreateWithoutGoalInput, QuestUncheckedCreateWithoutGoalInput> | QuestCreateWithoutGoalInput[] | QuestUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: QuestCreateOrConnectWithoutGoalInput | QuestCreateOrConnectWithoutGoalInput[]
    upsert?: QuestUpsertWithWhereUniqueWithoutGoalInput | QuestUpsertWithWhereUniqueWithoutGoalInput[]
    createMany?: QuestCreateManyGoalInputEnvelope
    set?: QuestWhereUniqueInput | QuestWhereUniqueInput[]
    disconnect?: QuestWhereUniqueInput | QuestWhereUniqueInput[]
    delete?: QuestWhereUniqueInput | QuestWhereUniqueInput[]
    connect?: QuestWhereUniqueInput | QuestWhereUniqueInput[]
    update?: QuestUpdateWithWhereUniqueWithoutGoalInput | QuestUpdateWithWhereUniqueWithoutGoalInput[]
    updateMany?: QuestUpdateManyWithWhereWithoutGoalInput | QuestUpdateManyWithWhereWithoutGoalInput[]
    deleteMany?: QuestScalarWhereInput | QuestScalarWhereInput[]
  }

  export type QuestUncheckedUpdateManyWithoutGoalNestedInput = {
    create?: XOR<QuestCreateWithoutGoalInput, QuestUncheckedCreateWithoutGoalInput> | QuestCreateWithoutGoalInput[] | QuestUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: QuestCreateOrConnectWithoutGoalInput | QuestCreateOrConnectWithoutGoalInput[]
    upsert?: QuestUpsertWithWhereUniqueWithoutGoalInput | QuestUpsertWithWhereUniqueWithoutGoalInput[]
    createMany?: QuestCreateManyGoalInputEnvelope
    set?: QuestWhereUniqueInput | QuestWhereUniqueInput[]
    disconnect?: QuestWhereUniqueInput | QuestWhereUniqueInput[]
    delete?: QuestWhereUniqueInput | QuestWhereUniqueInput[]
    connect?: QuestWhereUniqueInput | QuestWhereUniqueInput[]
    update?: QuestUpdateWithWhereUniqueWithoutGoalInput | QuestUpdateWithWhereUniqueWithoutGoalInput[]
    updateMany?: QuestUpdateManyWithWhereWithoutGoalInput | QuestUpdateManyWithWhereWithoutGoalInput[]
    deleteMany?: QuestScalarWhereInput | QuestScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutQuestsInput = {
    create?: XOR<UserCreateWithoutQuestsInput, UserUncheckedCreateWithoutQuestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuestsInput
    connect?: UserWhereUniqueInput
  }

  export type GoalCreateNestedOneWithoutQuestsInput = {
    create?: XOR<GoalCreateWithoutQuestsInput, GoalUncheckedCreateWithoutQuestsInput>
    connectOrCreate?: GoalCreateOrConnectWithoutQuestsInput
    connect?: GoalWhereUniqueInput
  }

  export type RoomCreateNestedOneWithoutQuestsInput = {
    create?: XOR<RoomCreateWithoutQuestsInput, RoomUncheckedCreateWithoutQuestsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutQuestsInput
    connect?: RoomWhereUniqueInput
  }

  export type QuestCompletionCreateNestedManyWithoutQuestInput = {
    create?: XOR<QuestCompletionCreateWithoutQuestInput, QuestCompletionUncheckedCreateWithoutQuestInput> | QuestCompletionCreateWithoutQuestInput[] | QuestCompletionUncheckedCreateWithoutQuestInput[]
    connectOrCreate?: QuestCompletionCreateOrConnectWithoutQuestInput | QuestCompletionCreateOrConnectWithoutQuestInput[]
    createMany?: QuestCompletionCreateManyQuestInputEnvelope
    connect?: QuestCompletionWhereUniqueInput | QuestCompletionWhereUniqueInput[]
  }

  export type QuestCompletionUncheckedCreateNestedManyWithoutQuestInput = {
    create?: XOR<QuestCompletionCreateWithoutQuestInput, QuestCompletionUncheckedCreateWithoutQuestInput> | QuestCompletionCreateWithoutQuestInput[] | QuestCompletionUncheckedCreateWithoutQuestInput[]
    connectOrCreate?: QuestCompletionCreateOrConnectWithoutQuestInput | QuestCompletionCreateOrConnectWithoutQuestInput[]
    createMany?: QuestCompletionCreateManyQuestInputEnvelope
    connect?: QuestCompletionWhereUniqueInput | QuestCompletionWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutQuestsNestedInput = {
    create?: XOR<UserCreateWithoutQuestsInput, UserUncheckedCreateWithoutQuestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuestsInput
    upsert?: UserUpsertWithoutQuestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutQuestsInput, UserUpdateWithoutQuestsInput>, UserUncheckedUpdateWithoutQuestsInput>
  }

  export type GoalUpdateOneWithoutQuestsNestedInput = {
    create?: XOR<GoalCreateWithoutQuestsInput, GoalUncheckedCreateWithoutQuestsInput>
    connectOrCreate?: GoalCreateOrConnectWithoutQuestsInput
    upsert?: GoalUpsertWithoutQuestsInput
    disconnect?: GoalWhereInput | boolean
    delete?: GoalWhereInput | boolean
    connect?: GoalWhereUniqueInput
    update?: XOR<XOR<GoalUpdateToOneWithWhereWithoutQuestsInput, GoalUpdateWithoutQuestsInput>, GoalUncheckedUpdateWithoutQuestsInput>
  }

  export type RoomUpdateOneWithoutQuestsNestedInput = {
    create?: XOR<RoomCreateWithoutQuestsInput, RoomUncheckedCreateWithoutQuestsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutQuestsInput
    upsert?: RoomUpsertWithoutQuestsInput
    disconnect?: RoomWhereInput | boolean
    delete?: RoomWhereInput | boolean
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutQuestsInput, RoomUpdateWithoutQuestsInput>, RoomUncheckedUpdateWithoutQuestsInput>
  }

  export type QuestCompletionUpdateManyWithoutQuestNestedInput = {
    create?: XOR<QuestCompletionCreateWithoutQuestInput, QuestCompletionUncheckedCreateWithoutQuestInput> | QuestCompletionCreateWithoutQuestInput[] | QuestCompletionUncheckedCreateWithoutQuestInput[]
    connectOrCreate?: QuestCompletionCreateOrConnectWithoutQuestInput | QuestCompletionCreateOrConnectWithoutQuestInput[]
    upsert?: QuestCompletionUpsertWithWhereUniqueWithoutQuestInput | QuestCompletionUpsertWithWhereUniqueWithoutQuestInput[]
    createMany?: QuestCompletionCreateManyQuestInputEnvelope
    set?: QuestCompletionWhereUniqueInput | QuestCompletionWhereUniqueInput[]
    disconnect?: QuestCompletionWhereUniqueInput | QuestCompletionWhereUniqueInput[]
    delete?: QuestCompletionWhereUniqueInput | QuestCompletionWhereUniqueInput[]
    connect?: QuestCompletionWhereUniqueInput | QuestCompletionWhereUniqueInput[]
    update?: QuestCompletionUpdateWithWhereUniqueWithoutQuestInput | QuestCompletionUpdateWithWhereUniqueWithoutQuestInput[]
    updateMany?: QuestCompletionUpdateManyWithWhereWithoutQuestInput | QuestCompletionUpdateManyWithWhereWithoutQuestInput[]
    deleteMany?: QuestCompletionScalarWhereInput | QuestCompletionScalarWhereInput[]
  }

  export type QuestCompletionUncheckedUpdateManyWithoutQuestNestedInput = {
    create?: XOR<QuestCompletionCreateWithoutQuestInput, QuestCompletionUncheckedCreateWithoutQuestInput> | QuestCompletionCreateWithoutQuestInput[] | QuestCompletionUncheckedCreateWithoutQuestInput[]
    connectOrCreate?: QuestCompletionCreateOrConnectWithoutQuestInput | QuestCompletionCreateOrConnectWithoutQuestInput[]
    upsert?: QuestCompletionUpsertWithWhereUniqueWithoutQuestInput | QuestCompletionUpsertWithWhereUniqueWithoutQuestInput[]
    createMany?: QuestCompletionCreateManyQuestInputEnvelope
    set?: QuestCompletionWhereUniqueInput | QuestCompletionWhereUniqueInput[]
    disconnect?: QuestCompletionWhereUniqueInput | QuestCompletionWhereUniqueInput[]
    delete?: QuestCompletionWhereUniqueInput | QuestCompletionWhereUniqueInput[]
    connect?: QuestCompletionWhereUniqueInput | QuestCompletionWhereUniqueInput[]
    update?: QuestCompletionUpdateWithWhereUniqueWithoutQuestInput | QuestCompletionUpdateWithWhereUniqueWithoutQuestInput[]
    updateMany?: QuestCompletionUpdateManyWithWhereWithoutQuestInput | QuestCompletionUpdateManyWithWhereWithoutQuestInput[]
    deleteMany?: QuestCompletionScalarWhereInput | QuestCompletionScalarWhereInput[]
  }

  export type QuestCreateNestedOneWithoutCompletionsInput = {
    create?: XOR<QuestCreateWithoutCompletionsInput, QuestUncheckedCreateWithoutCompletionsInput>
    connectOrCreate?: QuestCreateOrConnectWithoutCompletionsInput
    connect?: QuestWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCompletionsInput = {
    create?: XOR<UserCreateWithoutCompletionsInput, UserUncheckedCreateWithoutCompletionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCompletionsInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type QuestUpdateOneRequiredWithoutCompletionsNestedInput = {
    create?: XOR<QuestCreateWithoutCompletionsInput, QuestUncheckedCreateWithoutCompletionsInput>
    connectOrCreate?: QuestCreateOrConnectWithoutCompletionsInput
    upsert?: QuestUpsertWithoutCompletionsInput
    connect?: QuestWhereUniqueInput
    update?: XOR<XOR<QuestUpdateToOneWithWhereWithoutCompletionsInput, QuestUpdateWithoutCompletionsInput>, QuestUncheckedUpdateWithoutCompletionsInput>
  }

  export type UserUpdateOneRequiredWithoutCompletionsNestedInput = {
    create?: XOR<UserCreateWithoutCompletionsInput, UserUncheckedCreateWithoutCompletionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCompletionsInput
    upsert?: UserUpsertWithoutCompletionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCompletionsInput, UserUpdateWithoutCompletionsInput>, UserUncheckedUpdateWithoutCompletionsInput>
  }

  export type UserCreateNestedOneWithoutRewardsInput = {
    create?: XOR<UserCreateWithoutRewardsInput, UserUncheckedCreateWithoutRewardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRewardsInput
    connect?: UserWhereUniqueInput
  }

  export type RewardPurchaseCreateNestedManyWithoutRewardInput = {
    create?: XOR<RewardPurchaseCreateWithoutRewardInput, RewardPurchaseUncheckedCreateWithoutRewardInput> | RewardPurchaseCreateWithoutRewardInput[] | RewardPurchaseUncheckedCreateWithoutRewardInput[]
    connectOrCreate?: RewardPurchaseCreateOrConnectWithoutRewardInput | RewardPurchaseCreateOrConnectWithoutRewardInput[]
    createMany?: RewardPurchaseCreateManyRewardInputEnvelope
    connect?: RewardPurchaseWhereUniqueInput | RewardPurchaseWhereUniqueInput[]
  }

  export type RewardPurchaseUncheckedCreateNestedManyWithoutRewardInput = {
    create?: XOR<RewardPurchaseCreateWithoutRewardInput, RewardPurchaseUncheckedCreateWithoutRewardInput> | RewardPurchaseCreateWithoutRewardInput[] | RewardPurchaseUncheckedCreateWithoutRewardInput[]
    connectOrCreate?: RewardPurchaseCreateOrConnectWithoutRewardInput | RewardPurchaseCreateOrConnectWithoutRewardInput[]
    createMany?: RewardPurchaseCreateManyRewardInputEnvelope
    connect?: RewardPurchaseWhereUniqueInput | RewardPurchaseWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutRewardsNestedInput = {
    create?: XOR<UserCreateWithoutRewardsInput, UserUncheckedCreateWithoutRewardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRewardsInput
    upsert?: UserUpsertWithoutRewardsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRewardsInput, UserUpdateWithoutRewardsInput>, UserUncheckedUpdateWithoutRewardsInput>
  }

  export type RewardPurchaseUpdateManyWithoutRewardNestedInput = {
    create?: XOR<RewardPurchaseCreateWithoutRewardInput, RewardPurchaseUncheckedCreateWithoutRewardInput> | RewardPurchaseCreateWithoutRewardInput[] | RewardPurchaseUncheckedCreateWithoutRewardInput[]
    connectOrCreate?: RewardPurchaseCreateOrConnectWithoutRewardInput | RewardPurchaseCreateOrConnectWithoutRewardInput[]
    upsert?: RewardPurchaseUpsertWithWhereUniqueWithoutRewardInput | RewardPurchaseUpsertWithWhereUniqueWithoutRewardInput[]
    createMany?: RewardPurchaseCreateManyRewardInputEnvelope
    set?: RewardPurchaseWhereUniqueInput | RewardPurchaseWhereUniqueInput[]
    disconnect?: RewardPurchaseWhereUniqueInput | RewardPurchaseWhereUniqueInput[]
    delete?: RewardPurchaseWhereUniqueInput | RewardPurchaseWhereUniqueInput[]
    connect?: RewardPurchaseWhereUniqueInput | RewardPurchaseWhereUniqueInput[]
    update?: RewardPurchaseUpdateWithWhereUniqueWithoutRewardInput | RewardPurchaseUpdateWithWhereUniqueWithoutRewardInput[]
    updateMany?: RewardPurchaseUpdateManyWithWhereWithoutRewardInput | RewardPurchaseUpdateManyWithWhereWithoutRewardInput[]
    deleteMany?: RewardPurchaseScalarWhereInput | RewardPurchaseScalarWhereInput[]
  }

  export type RewardPurchaseUncheckedUpdateManyWithoutRewardNestedInput = {
    create?: XOR<RewardPurchaseCreateWithoutRewardInput, RewardPurchaseUncheckedCreateWithoutRewardInput> | RewardPurchaseCreateWithoutRewardInput[] | RewardPurchaseUncheckedCreateWithoutRewardInput[]
    connectOrCreate?: RewardPurchaseCreateOrConnectWithoutRewardInput | RewardPurchaseCreateOrConnectWithoutRewardInput[]
    upsert?: RewardPurchaseUpsertWithWhereUniqueWithoutRewardInput | RewardPurchaseUpsertWithWhereUniqueWithoutRewardInput[]
    createMany?: RewardPurchaseCreateManyRewardInputEnvelope
    set?: RewardPurchaseWhereUniqueInput | RewardPurchaseWhereUniqueInput[]
    disconnect?: RewardPurchaseWhereUniqueInput | RewardPurchaseWhereUniqueInput[]
    delete?: RewardPurchaseWhereUniqueInput | RewardPurchaseWhereUniqueInput[]
    connect?: RewardPurchaseWhereUniqueInput | RewardPurchaseWhereUniqueInput[]
    update?: RewardPurchaseUpdateWithWhereUniqueWithoutRewardInput | RewardPurchaseUpdateWithWhereUniqueWithoutRewardInput[]
    updateMany?: RewardPurchaseUpdateManyWithWhereWithoutRewardInput | RewardPurchaseUpdateManyWithWhereWithoutRewardInput[]
    deleteMany?: RewardPurchaseScalarWhereInput | RewardPurchaseScalarWhereInput[]
  }

  export type RewardCreateNestedOneWithoutPurchasesInput = {
    create?: XOR<RewardCreateWithoutPurchasesInput, RewardUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: RewardCreateOrConnectWithoutPurchasesInput
    connect?: RewardWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRewardsPurchaseInput = {
    create?: XOR<UserCreateWithoutRewardsPurchaseInput, UserUncheckedCreateWithoutRewardsPurchaseInput>
    connectOrCreate?: UserCreateOrConnectWithoutRewardsPurchaseInput
    connect?: UserWhereUniqueInput
  }

  export type RewardUpdateOneRequiredWithoutPurchasesNestedInput = {
    create?: XOR<RewardCreateWithoutPurchasesInput, RewardUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: RewardCreateOrConnectWithoutPurchasesInput
    upsert?: RewardUpsertWithoutPurchasesInput
    connect?: RewardWhereUniqueInput
    update?: XOR<XOR<RewardUpdateToOneWithWhereWithoutPurchasesInput, RewardUpdateWithoutPurchasesInput>, RewardUncheckedUpdateWithoutPurchasesInput>
  }

  export type UserUpdateOneRequiredWithoutRewardsPurchaseNestedInput = {
    create?: XOR<UserCreateWithoutRewardsPurchaseInput, UserUncheckedCreateWithoutRewardsPurchaseInput>
    connectOrCreate?: UserCreateOrConnectWithoutRewardsPurchaseInput
    upsert?: UserUpsertWithoutRewardsPurchaseInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRewardsPurchaseInput, UserUpdateWithoutRewardsPurchaseInput>, UserUncheckedUpdateWithoutRewardsPurchaseInput>
  }

  export type BoostActivationCreateNestedManyWithoutBoostInput = {
    create?: XOR<BoostActivationCreateWithoutBoostInput, BoostActivationUncheckedCreateWithoutBoostInput> | BoostActivationCreateWithoutBoostInput[] | BoostActivationUncheckedCreateWithoutBoostInput[]
    connectOrCreate?: BoostActivationCreateOrConnectWithoutBoostInput | BoostActivationCreateOrConnectWithoutBoostInput[]
    createMany?: BoostActivationCreateManyBoostInputEnvelope
    connect?: BoostActivationWhereUniqueInput | BoostActivationWhereUniqueInput[]
  }

  export type BoostActivationUncheckedCreateNestedManyWithoutBoostInput = {
    create?: XOR<BoostActivationCreateWithoutBoostInput, BoostActivationUncheckedCreateWithoutBoostInput> | BoostActivationCreateWithoutBoostInput[] | BoostActivationUncheckedCreateWithoutBoostInput[]
    connectOrCreate?: BoostActivationCreateOrConnectWithoutBoostInput | BoostActivationCreateOrConnectWithoutBoostInput[]
    createMany?: BoostActivationCreateManyBoostInputEnvelope
    connect?: BoostActivationWhereUniqueInput | BoostActivationWhereUniqueInput[]
  }

  export type BoostActivationUpdateManyWithoutBoostNestedInput = {
    create?: XOR<BoostActivationCreateWithoutBoostInput, BoostActivationUncheckedCreateWithoutBoostInput> | BoostActivationCreateWithoutBoostInput[] | BoostActivationUncheckedCreateWithoutBoostInput[]
    connectOrCreate?: BoostActivationCreateOrConnectWithoutBoostInput | BoostActivationCreateOrConnectWithoutBoostInput[]
    upsert?: BoostActivationUpsertWithWhereUniqueWithoutBoostInput | BoostActivationUpsertWithWhereUniqueWithoutBoostInput[]
    createMany?: BoostActivationCreateManyBoostInputEnvelope
    set?: BoostActivationWhereUniqueInput | BoostActivationWhereUniqueInput[]
    disconnect?: BoostActivationWhereUniqueInput | BoostActivationWhereUniqueInput[]
    delete?: BoostActivationWhereUniqueInput | BoostActivationWhereUniqueInput[]
    connect?: BoostActivationWhereUniqueInput | BoostActivationWhereUniqueInput[]
    update?: BoostActivationUpdateWithWhereUniqueWithoutBoostInput | BoostActivationUpdateWithWhereUniqueWithoutBoostInput[]
    updateMany?: BoostActivationUpdateManyWithWhereWithoutBoostInput | BoostActivationUpdateManyWithWhereWithoutBoostInput[]
    deleteMany?: BoostActivationScalarWhereInput | BoostActivationScalarWhereInput[]
  }

  export type BoostActivationUncheckedUpdateManyWithoutBoostNestedInput = {
    create?: XOR<BoostActivationCreateWithoutBoostInput, BoostActivationUncheckedCreateWithoutBoostInput> | BoostActivationCreateWithoutBoostInput[] | BoostActivationUncheckedCreateWithoutBoostInput[]
    connectOrCreate?: BoostActivationCreateOrConnectWithoutBoostInput | BoostActivationCreateOrConnectWithoutBoostInput[]
    upsert?: BoostActivationUpsertWithWhereUniqueWithoutBoostInput | BoostActivationUpsertWithWhereUniqueWithoutBoostInput[]
    createMany?: BoostActivationCreateManyBoostInputEnvelope
    set?: BoostActivationWhereUniqueInput | BoostActivationWhereUniqueInput[]
    disconnect?: BoostActivationWhereUniqueInput | BoostActivationWhereUniqueInput[]
    delete?: BoostActivationWhereUniqueInput | BoostActivationWhereUniqueInput[]
    connect?: BoostActivationWhereUniqueInput | BoostActivationWhereUniqueInput[]
    update?: BoostActivationUpdateWithWhereUniqueWithoutBoostInput | BoostActivationUpdateWithWhereUniqueWithoutBoostInput[]
    updateMany?: BoostActivationUpdateManyWithWhereWithoutBoostInput | BoostActivationUpdateManyWithWhereWithoutBoostInput[]
    deleteMany?: BoostActivationScalarWhereInput | BoostActivationScalarWhereInput[]
  }

  export type BoostCreateNestedOneWithoutActivationsInput = {
    create?: XOR<BoostCreateWithoutActivationsInput, BoostUncheckedCreateWithoutActivationsInput>
    connectOrCreate?: BoostCreateOrConnectWithoutActivationsInput
    connect?: BoostWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBoostsInput = {
    create?: XOR<UserCreateWithoutBoostsInput, UserUncheckedCreateWithoutBoostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBoostsInput
    connect?: UserWhereUniqueInput
  }

  export type BoostUpdateOneRequiredWithoutActivationsNestedInput = {
    create?: XOR<BoostCreateWithoutActivationsInput, BoostUncheckedCreateWithoutActivationsInput>
    connectOrCreate?: BoostCreateOrConnectWithoutActivationsInput
    upsert?: BoostUpsertWithoutActivationsInput
    connect?: BoostWhereUniqueInput
    update?: XOR<XOR<BoostUpdateToOneWithWhereWithoutActivationsInput, BoostUpdateWithoutActivationsInput>, BoostUncheckedUpdateWithoutActivationsInput>
  }

  export type UserUpdateOneRequiredWithoutBoostsNestedInput = {
    create?: XOR<UserCreateWithoutBoostsInput, UserUncheckedCreateWithoutBoostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBoostsInput
    upsert?: UserUpsertWithoutBoostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBoostsInput, UserUpdateWithoutBoostsInput>, UserUncheckedUpdateWithoutBoostsInput>
  }

  export type UserCreateNestedOneWithoutCreatedRoomsInput = {
    create?: XOR<UserCreateWithoutCreatedRoomsInput, UserUncheckedCreateWithoutCreatedRoomsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedRoomsInput
    connect?: UserWhereUniqueInput
  }

  export type RoomMemberCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomMemberCreateWithoutRoomInput, RoomMemberUncheckedCreateWithoutRoomInput> | RoomMemberCreateWithoutRoomInput[] | RoomMemberUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomMemberCreateOrConnectWithoutRoomInput | RoomMemberCreateOrConnectWithoutRoomInput[]
    createMany?: RoomMemberCreateManyRoomInputEnvelope
    connect?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
  }

  export type InvitationCreateNestedManyWithoutRoomInput = {
    create?: XOR<InvitationCreateWithoutRoomInput, InvitationUncheckedCreateWithoutRoomInput> | InvitationCreateWithoutRoomInput[] | InvitationUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutRoomInput | InvitationCreateOrConnectWithoutRoomInput[]
    createMany?: InvitationCreateManyRoomInputEnvelope
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
  }

  export type QuestCreateNestedManyWithoutRoomInput = {
    create?: XOR<QuestCreateWithoutRoomInput, QuestUncheckedCreateWithoutRoomInput> | QuestCreateWithoutRoomInput[] | QuestUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: QuestCreateOrConnectWithoutRoomInput | QuestCreateOrConnectWithoutRoomInput[]
    createMany?: QuestCreateManyRoomInputEnvelope
    connect?: QuestWhereUniqueInput | QuestWhereUniqueInput[]
  }

  export type RoomMemberUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomMemberCreateWithoutRoomInput, RoomMemberUncheckedCreateWithoutRoomInput> | RoomMemberCreateWithoutRoomInput[] | RoomMemberUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomMemberCreateOrConnectWithoutRoomInput | RoomMemberCreateOrConnectWithoutRoomInput[]
    createMany?: RoomMemberCreateManyRoomInputEnvelope
    connect?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
  }

  export type InvitationUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<InvitationCreateWithoutRoomInput, InvitationUncheckedCreateWithoutRoomInput> | InvitationCreateWithoutRoomInput[] | InvitationUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutRoomInput | InvitationCreateOrConnectWithoutRoomInput[]
    createMany?: InvitationCreateManyRoomInputEnvelope
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
  }

  export type QuestUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<QuestCreateWithoutRoomInput, QuestUncheckedCreateWithoutRoomInput> | QuestCreateWithoutRoomInput[] | QuestUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: QuestCreateOrConnectWithoutRoomInput | QuestCreateOrConnectWithoutRoomInput[]
    createMany?: QuestCreateManyRoomInputEnvelope
    connect?: QuestWhereUniqueInput | QuestWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCreatedRoomsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedRoomsInput, UserUncheckedCreateWithoutCreatedRoomsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedRoomsInput
    upsert?: UserUpsertWithoutCreatedRoomsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedRoomsInput, UserUpdateWithoutCreatedRoomsInput>, UserUncheckedUpdateWithoutCreatedRoomsInput>
  }

  export type RoomMemberUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomMemberCreateWithoutRoomInput, RoomMemberUncheckedCreateWithoutRoomInput> | RoomMemberCreateWithoutRoomInput[] | RoomMemberUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomMemberCreateOrConnectWithoutRoomInput | RoomMemberCreateOrConnectWithoutRoomInput[]
    upsert?: RoomMemberUpsertWithWhereUniqueWithoutRoomInput | RoomMemberUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomMemberCreateManyRoomInputEnvelope
    set?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    disconnect?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    delete?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    connect?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    update?: RoomMemberUpdateWithWhereUniqueWithoutRoomInput | RoomMemberUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomMemberUpdateManyWithWhereWithoutRoomInput | RoomMemberUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomMemberScalarWhereInput | RoomMemberScalarWhereInput[]
  }

  export type InvitationUpdateManyWithoutRoomNestedInput = {
    create?: XOR<InvitationCreateWithoutRoomInput, InvitationUncheckedCreateWithoutRoomInput> | InvitationCreateWithoutRoomInput[] | InvitationUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutRoomInput | InvitationCreateOrConnectWithoutRoomInput[]
    upsert?: InvitationUpsertWithWhereUniqueWithoutRoomInput | InvitationUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: InvitationCreateManyRoomInputEnvelope
    set?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    disconnect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    delete?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    update?: InvitationUpdateWithWhereUniqueWithoutRoomInput | InvitationUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: InvitationUpdateManyWithWhereWithoutRoomInput | InvitationUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: InvitationScalarWhereInput | InvitationScalarWhereInput[]
  }

  export type QuestUpdateManyWithoutRoomNestedInput = {
    create?: XOR<QuestCreateWithoutRoomInput, QuestUncheckedCreateWithoutRoomInput> | QuestCreateWithoutRoomInput[] | QuestUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: QuestCreateOrConnectWithoutRoomInput | QuestCreateOrConnectWithoutRoomInput[]
    upsert?: QuestUpsertWithWhereUniqueWithoutRoomInput | QuestUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: QuestCreateManyRoomInputEnvelope
    set?: QuestWhereUniqueInput | QuestWhereUniqueInput[]
    disconnect?: QuestWhereUniqueInput | QuestWhereUniqueInput[]
    delete?: QuestWhereUniqueInput | QuestWhereUniqueInput[]
    connect?: QuestWhereUniqueInput | QuestWhereUniqueInput[]
    update?: QuestUpdateWithWhereUniqueWithoutRoomInput | QuestUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: QuestUpdateManyWithWhereWithoutRoomInput | QuestUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: QuestScalarWhereInput | QuestScalarWhereInput[]
  }

  export type RoomMemberUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomMemberCreateWithoutRoomInput, RoomMemberUncheckedCreateWithoutRoomInput> | RoomMemberCreateWithoutRoomInput[] | RoomMemberUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomMemberCreateOrConnectWithoutRoomInput | RoomMemberCreateOrConnectWithoutRoomInput[]
    upsert?: RoomMemberUpsertWithWhereUniqueWithoutRoomInput | RoomMemberUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomMemberCreateManyRoomInputEnvelope
    set?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    disconnect?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    delete?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    connect?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    update?: RoomMemberUpdateWithWhereUniqueWithoutRoomInput | RoomMemberUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomMemberUpdateManyWithWhereWithoutRoomInput | RoomMemberUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomMemberScalarWhereInput | RoomMemberScalarWhereInput[]
  }

  export type InvitationUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<InvitationCreateWithoutRoomInput, InvitationUncheckedCreateWithoutRoomInput> | InvitationCreateWithoutRoomInput[] | InvitationUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutRoomInput | InvitationCreateOrConnectWithoutRoomInput[]
    upsert?: InvitationUpsertWithWhereUniqueWithoutRoomInput | InvitationUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: InvitationCreateManyRoomInputEnvelope
    set?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    disconnect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    delete?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    update?: InvitationUpdateWithWhereUniqueWithoutRoomInput | InvitationUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: InvitationUpdateManyWithWhereWithoutRoomInput | InvitationUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: InvitationScalarWhereInput | InvitationScalarWhereInput[]
  }

  export type QuestUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<QuestCreateWithoutRoomInput, QuestUncheckedCreateWithoutRoomInput> | QuestCreateWithoutRoomInput[] | QuestUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: QuestCreateOrConnectWithoutRoomInput | QuestCreateOrConnectWithoutRoomInput[]
    upsert?: QuestUpsertWithWhereUniqueWithoutRoomInput | QuestUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: QuestCreateManyRoomInputEnvelope
    set?: QuestWhereUniqueInput | QuestWhereUniqueInput[]
    disconnect?: QuestWhereUniqueInput | QuestWhereUniqueInput[]
    delete?: QuestWhereUniqueInput | QuestWhereUniqueInput[]
    connect?: QuestWhereUniqueInput | QuestWhereUniqueInput[]
    update?: QuestUpdateWithWhereUniqueWithoutRoomInput | QuestUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: QuestUpdateManyWithWhereWithoutRoomInput | QuestUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: QuestScalarWhereInput | QuestScalarWhereInput[]
  }

  export type RoomCreateNestedOneWithoutMembersInput = {
    create?: XOR<RoomCreateWithoutMembersInput, RoomUncheckedCreateWithoutMembersInput>
    connectOrCreate?: RoomCreateOrConnectWithoutMembersInput
    connect?: RoomWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRoomsInput = {
    create?: XOR<UserCreateWithoutRoomsInput, UserUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoomsInput
    connect?: UserWhereUniqueInput
  }

  export type RoomUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<RoomCreateWithoutMembersInput, RoomUncheckedCreateWithoutMembersInput>
    connectOrCreate?: RoomCreateOrConnectWithoutMembersInput
    upsert?: RoomUpsertWithoutMembersInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutMembersInput, RoomUpdateWithoutMembersInput>, RoomUncheckedUpdateWithoutMembersInput>
  }

  export type UserUpdateOneRequiredWithoutRoomsNestedInput = {
    create?: XOR<UserCreateWithoutRoomsInput, UserUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoomsInput
    upsert?: UserUpsertWithoutRoomsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRoomsInput, UserUpdateWithoutRoomsInput>, UserUncheckedUpdateWithoutRoomsInput>
  }

  export type RoomCreateNestedOneWithoutInvitationsInput = {
    create?: XOR<RoomCreateWithoutInvitationsInput, RoomUncheckedCreateWithoutInvitationsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutInvitationsInput
    connect?: RoomWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRoomInvitationsInput = {
    create?: XOR<UserCreateWithoutRoomInvitationsInput, UserUncheckedCreateWithoutRoomInvitationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoomInvitationsInput
    connect?: UserWhereUniqueInput
  }

  export type RoomUpdateOneRequiredWithoutInvitationsNestedInput = {
    create?: XOR<RoomCreateWithoutInvitationsInput, RoomUncheckedCreateWithoutInvitationsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutInvitationsInput
    upsert?: RoomUpsertWithoutInvitationsInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutInvitationsInput, RoomUpdateWithoutInvitationsInput>, RoomUncheckedUpdateWithoutInvitationsInput>
  }

  export type UserUpdateOneWithoutRoomInvitationsNestedInput = {
    create?: XOR<UserCreateWithoutRoomInvitationsInput, UserUncheckedCreateWithoutRoomInvitationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoomInvitationsInput
    upsert?: UserUpsertWithoutRoomInvitationsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRoomInvitationsInput, UserUpdateWithoutRoomInvitationsInput>, UserUncheckedUpdateWithoutRoomInvitationsInput>
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

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type QuestCreateWithoutCreatorInput = {
    id?: string
    title: string
    description?: string | null
    deadline: Date | string
    difficulty?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    goal?: GoalCreateNestedOneWithoutQuestsInput
    room?: RoomCreateNestedOneWithoutQuestsInput
    completions?: QuestCompletionCreateNestedManyWithoutQuestInput
  }

  export type QuestUncheckedCreateWithoutCreatorInput = {
    id?: string
    title: string
    description?: string | null
    deadline: Date | string
    difficulty?: number
    goalId?: string | null
    roomId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completions?: QuestCompletionUncheckedCreateNestedManyWithoutQuestInput
  }

  export type QuestCreateOrConnectWithoutCreatorInput = {
    where: QuestWhereUniqueInput
    create: XOR<QuestCreateWithoutCreatorInput, QuestUncheckedCreateWithoutCreatorInput>
  }

  export type QuestCreateManyCreatorInputEnvelope = {
    data: QuestCreateManyCreatorInput | QuestCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type QuestCompletionCreateWithoutUserInput = {
    id?: string
    completedAt?: Date | string
    isLate?: boolean
    starsAwarded: number
    createdAt?: Date | string
    updatedAt?: Date | string
    quest: QuestCreateNestedOneWithoutCompletionsInput
  }

  export type QuestCompletionUncheckedCreateWithoutUserInput = {
    id?: string
    completedAt?: Date | string
    isLate?: boolean
    starsAwarded: number
    questId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestCompletionCreateOrConnectWithoutUserInput = {
    where: QuestCompletionWhereUniqueInput
    create: XOR<QuestCompletionCreateWithoutUserInput, QuestCompletionUncheckedCreateWithoutUserInput>
  }

  export type QuestCompletionCreateManyUserInputEnvelope = {
    data: QuestCompletionCreateManyUserInput | QuestCompletionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RewardPurchaseCreateWithoutChildInput = {
    id?: string
    purchasedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    reward: RewardCreateNestedOneWithoutPurchasesInput
  }

  export type RewardPurchaseUncheckedCreateWithoutChildInput = {
    id?: string
    purchasedAt?: Date | string
    rewardId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RewardPurchaseCreateOrConnectWithoutChildInput = {
    where: RewardPurchaseWhereUniqueInput
    create: XOR<RewardPurchaseCreateWithoutChildInput, RewardPurchaseUncheckedCreateWithoutChildInput>
  }

  export type RewardPurchaseCreateManyChildInputEnvelope = {
    data: RewardPurchaseCreateManyChildInput | RewardPurchaseCreateManyChildInput[]
    skipDuplicates?: boolean
  }

  export type RewardCreateWithoutCreatorInput = {
    id?: string
    title: string
    description?: string | null
    starCost: number
    createdAt?: Date | string
    updatedAt?: Date | string
    purchases?: RewardPurchaseCreateNestedManyWithoutRewardInput
  }

  export type RewardUncheckedCreateWithoutCreatorInput = {
    id?: string
    title: string
    description?: string | null
    starCost: number
    createdAt?: Date | string
    updatedAt?: Date | string
    purchases?: RewardPurchaseUncheckedCreateNestedManyWithoutRewardInput
  }

  export type RewardCreateOrConnectWithoutCreatorInput = {
    where: RewardWhereUniqueInput
    create: XOR<RewardCreateWithoutCreatorInput, RewardUncheckedCreateWithoutCreatorInput>
  }

  export type RewardCreateManyCreatorInputEnvelope = {
    data: RewardCreateManyCreatorInput | RewardCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type BoostActivationCreateWithoutUserInput = {
    id?: string
    activatedAt?: Date | string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    boost: BoostCreateNestedOneWithoutActivationsInput
  }

  export type BoostActivationUncheckedCreateWithoutUserInput = {
    id?: string
    activatedAt?: Date | string
    expiresAt: Date | string
    boostId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BoostActivationCreateOrConnectWithoutUserInput = {
    where: BoostActivationWhereUniqueInput
    create: XOR<BoostActivationCreateWithoutUserInput, BoostActivationUncheckedCreateWithoutUserInput>
  }

  export type BoostActivationCreateManyUserInputEnvelope = {
    data: BoostActivationCreateManyUserInput | BoostActivationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GoalCreateWithoutCreatorInput = {
    id?: string
    title: string
    description?: string | null
    starReward: number
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    quests?: QuestCreateNestedManyWithoutGoalInput
  }

  export type GoalUncheckedCreateWithoutCreatorInput = {
    id?: string
    title: string
    description?: string | null
    starReward: number
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    quests?: QuestUncheckedCreateNestedManyWithoutGoalInput
  }

  export type GoalCreateOrConnectWithoutCreatorInput = {
    where: GoalWhereUniqueInput
    create: XOR<GoalCreateWithoutCreatorInput, GoalUncheckedCreateWithoutCreatorInput>
  }

  export type GoalCreateManyCreatorInputEnvelope = {
    data: GoalCreateManyCreatorInput | GoalCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type RoomMemberCreateWithoutUserInput = {
    id?: string
    role?: $Enums.UserRole
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    room: RoomCreateNestedOneWithoutMembersInput
  }

  export type RoomMemberUncheckedCreateWithoutUserInput = {
    id?: string
    roomId: string
    role?: $Enums.UserRole
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomMemberCreateOrConnectWithoutUserInput = {
    where: RoomMemberWhereUniqueInput
    create: XOR<RoomMemberCreateWithoutUserInput, RoomMemberUncheckedCreateWithoutUserInput>
  }

  export type RoomMemberCreateManyUserInputEnvelope = {
    data: RoomMemberCreateManyUserInput | RoomMemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RoomCreateWithoutCreateUserInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: RoomMemberCreateNestedManyWithoutRoomInput
    invitations?: InvitationCreateNestedManyWithoutRoomInput
    quests?: QuestCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutCreateUserInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: RoomMemberUncheckedCreateNestedManyWithoutRoomInput
    invitations?: InvitationUncheckedCreateNestedManyWithoutRoomInput
    quests?: QuestUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutCreateUserInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutCreateUserInput, RoomUncheckedCreateWithoutCreateUserInput>
  }

  export type RoomCreateManyCreateUserInputEnvelope = {
    data: RoomCreateManyCreateUserInput | RoomCreateManyCreateUserInput[]
    skipDuplicates?: boolean
  }

  export type InvitationCreateWithoutInvitedByInput = {
    id?: string
    email: string
    role: $Enums.UserRole
    token: string
    expiresAt: Date | string
    acceptedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    room: RoomCreateNestedOneWithoutInvitationsInput
  }

  export type InvitationUncheckedCreateWithoutInvitedByInput = {
    id?: string
    roomId: string
    email: string
    role: $Enums.UserRole
    token: string
    expiresAt: Date | string
    acceptedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvitationCreateOrConnectWithoutInvitedByInput = {
    where: InvitationWhereUniqueInput
    create: XOR<InvitationCreateWithoutInvitedByInput, InvitationUncheckedCreateWithoutInvitedByInput>
  }

  export type InvitationCreateManyInvitedByInputEnvelope = {
    data: InvitationCreateManyInvitedByInput | InvitationCreateManyInvitedByInput[]
    skipDuplicates?: boolean
  }

  export type QuestUpsertWithWhereUniqueWithoutCreatorInput = {
    where: QuestWhereUniqueInput
    update: XOR<QuestUpdateWithoutCreatorInput, QuestUncheckedUpdateWithoutCreatorInput>
    create: XOR<QuestCreateWithoutCreatorInput, QuestUncheckedCreateWithoutCreatorInput>
  }

  export type QuestUpdateWithWhereUniqueWithoutCreatorInput = {
    where: QuestWhereUniqueInput
    data: XOR<QuestUpdateWithoutCreatorInput, QuestUncheckedUpdateWithoutCreatorInput>
  }

  export type QuestUpdateManyWithWhereWithoutCreatorInput = {
    where: QuestScalarWhereInput
    data: XOR<QuestUpdateManyMutationInput, QuestUncheckedUpdateManyWithoutCreatorInput>
  }

  export type QuestScalarWhereInput = {
    AND?: QuestScalarWhereInput | QuestScalarWhereInput[]
    OR?: QuestScalarWhereInput[]
    NOT?: QuestScalarWhereInput | QuestScalarWhereInput[]
    id?: StringFilter<"Quest"> | string
    title?: StringFilter<"Quest"> | string
    description?: StringNullableFilter<"Quest"> | string | null
    deadline?: DateTimeFilter<"Quest"> | Date | string
    difficulty?: IntFilter<"Quest"> | number
    creatorId?: StringFilter<"Quest"> | string
    goalId?: StringNullableFilter<"Quest"> | string | null
    roomId?: StringNullableFilter<"Quest"> | string | null
    createdAt?: DateTimeFilter<"Quest"> | Date | string
    updatedAt?: DateTimeFilter<"Quest"> | Date | string
  }

  export type QuestCompletionUpsertWithWhereUniqueWithoutUserInput = {
    where: QuestCompletionWhereUniqueInput
    update: XOR<QuestCompletionUpdateWithoutUserInput, QuestCompletionUncheckedUpdateWithoutUserInput>
    create: XOR<QuestCompletionCreateWithoutUserInput, QuestCompletionUncheckedCreateWithoutUserInput>
  }

  export type QuestCompletionUpdateWithWhereUniqueWithoutUserInput = {
    where: QuestCompletionWhereUniqueInput
    data: XOR<QuestCompletionUpdateWithoutUserInput, QuestCompletionUncheckedUpdateWithoutUserInput>
  }

  export type QuestCompletionUpdateManyWithWhereWithoutUserInput = {
    where: QuestCompletionScalarWhereInput
    data: XOR<QuestCompletionUpdateManyMutationInput, QuestCompletionUncheckedUpdateManyWithoutUserInput>
  }

  export type QuestCompletionScalarWhereInput = {
    AND?: QuestCompletionScalarWhereInput | QuestCompletionScalarWhereInput[]
    OR?: QuestCompletionScalarWhereInput[]
    NOT?: QuestCompletionScalarWhereInput | QuestCompletionScalarWhereInput[]
    id?: StringFilter<"QuestCompletion"> | string
    completedAt?: DateTimeFilter<"QuestCompletion"> | Date | string
    isLate?: BoolFilter<"QuestCompletion"> | boolean
    starsAwarded?: IntFilter<"QuestCompletion"> | number
    questId?: StringFilter<"QuestCompletion"> | string
    userId?: StringFilter<"QuestCompletion"> | string
    createdAt?: DateTimeFilter<"QuestCompletion"> | Date | string
    updatedAt?: DateTimeFilter<"QuestCompletion"> | Date | string
  }

  export type RewardPurchaseUpsertWithWhereUniqueWithoutChildInput = {
    where: RewardPurchaseWhereUniqueInput
    update: XOR<RewardPurchaseUpdateWithoutChildInput, RewardPurchaseUncheckedUpdateWithoutChildInput>
    create: XOR<RewardPurchaseCreateWithoutChildInput, RewardPurchaseUncheckedCreateWithoutChildInput>
  }

  export type RewardPurchaseUpdateWithWhereUniqueWithoutChildInput = {
    where: RewardPurchaseWhereUniqueInput
    data: XOR<RewardPurchaseUpdateWithoutChildInput, RewardPurchaseUncheckedUpdateWithoutChildInput>
  }

  export type RewardPurchaseUpdateManyWithWhereWithoutChildInput = {
    where: RewardPurchaseScalarWhereInput
    data: XOR<RewardPurchaseUpdateManyMutationInput, RewardPurchaseUncheckedUpdateManyWithoutChildInput>
  }

  export type RewardPurchaseScalarWhereInput = {
    AND?: RewardPurchaseScalarWhereInput | RewardPurchaseScalarWhereInput[]
    OR?: RewardPurchaseScalarWhereInput[]
    NOT?: RewardPurchaseScalarWhereInput | RewardPurchaseScalarWhereInput[]
    id?: StringFilter<"RewardPurchase"> | string
    purchasedAt?: DateTimeFilter<"RewardPurchase"> | Date | string
    rewardId?: StringFilter<"RewardPurchase"> | string
    childId?: StringFilter<"RewardPurchase"> | string
    createdAt?: DateTimeFilter<"RewardPurchase"> | Date | string
    updatedAt?: DateTimeFilter<"RewardPurchase"> | Date | string
  }

  export type RewardUpsertWithWhereUniqueWithoutCreatorInput = {
    where: RewardWhereUniqueInput
    update: XOR<RewardUpdateWithoutCreatorInput, RewardUncheckedUpdateWithoutCreatorInput>
    create: XOR<RewardCreateWithoutCreatorInput, RewardUncheckedCreateWithoutCreatorInput>
  }

  export type RewardUpdateWithWhereUniqueWithoutCreatorInput = {
    where: RewardWhereUniqueInput
    data: XOR<RewardUpdateWithoutCreatorInput, RewardUncheckedUpdateWithoutCreatorInput>
  }

  export type RewardUpdateManyWithWhereWithoutCreatorInput = {
    where: RewardScalarWhereInput
    data: XOR<RewardUpdateManyMutationInput, RewardUncheckedUpdateManyWithoutCreatorInput>
  }

  export type RewardScalarWhereInput = {
    AND?: RewardScalarWhereInput | RewardScalarWhereInput[]
    OR?: RewardScalarWhereInput[]
    NOT?: RewardScalarWhereInput | RewardScalarWhereInput[]
    id?: StringFilter<"Reward"> | string
    title?: StringFilter<"Reward"> | string
    description?: StringNullableFilter<"Reward"> | string | null
    starCost?: IntFilter<"Reward"> | number
    creatorId?: StringFilter<"Reward"> | string
    createdAt?: DateTimeFilter<"Reward"> | Date | string
    updatedAt?: DateTimeFilter<"Reward"> | Date | string
  }

  export type BoostActivationUpsertWithWhereUniqueWithoutUserInput = {
    where: BoostActivationWhereUniqueInput
    update: XOR<BoostActivationUpdateWithoutUserInput, BoostActivationUncheckedUpdateWithoutUserInput>
    create: XOR<BoostActivationCreateWithoutUserInput, BoostActivationUncheckedCreateWithoutUserInput>
  }

  export type BoostActivationUpdateWithWhereUniqueWithoutUserInput = {
    where: BoostActivationWhereUniqueInput
    data: XOR<BoostActivationUpdateWithoutUserInput, BoostActivationUncheckedUpdateWithoutUserInput>
  }

  export type BoostActivationUpdateManyWithWhereWithoutUserInput = {
    where: BoostActivationScalarWhereInput
    data: XOR<BoostActivationUpdateManyMutationInput, BoostActivationUncheckedUpdateManyWithoutUserInput>
  }

  export type BoostActivationScalarWhereInput = {
    AND?: BoostActivationScalarWhereInput | BoostActivationScalarWhereInput[]
    OR?: BoostActivationScalarWhereInput[]
    NOT?: BoostActivationScalarWhereInput | BoostActivationScalarWhereInput[]
    id?: StringFilter<"BoostActivation"> | string
    activatedAt?: DateTimeFilter<"BoostActivation"> | Date | string
    expiresAt?: DateTimeFilter<"BoostActivation"> | Date | string
    boostId?: StringFilter<"BoostActivation"> | string
    userId?: StringFilter<"BoostActivation"> | string
    createdAt?: DateTimeFilter<"BoostActivation"> | Date | string
    updatedAt?: DateTimeFilter<"BoostActivation"> | Date | string
  }

  export type GoalUpsertWithWhereUniqueWithoutCreatorInput = {
    where: GoalWhereUniqueInput
    update: XOR<GoalUpdateWithoutCreatorInput, GoalUncheckedUpdateWithoutCreatorInput>
    create: XOR<GoalCreateWithoutCreatorInput, GoalUncheckedCreateWithoutCreatorInput>
  }

  export type GoalUpdateWithWhereUniqueWithoutCreatorInput = {
    where: GoalWhereUniqueInput
    data: XOR<GoalUpdateWithoutCreatorInput, GoalUncheckedUpdateWithoutCreatorInput>
  }

  export type GoalUpdateManyWithWhereWithoutCreatorInput = {
    where: GoalScalarWhereInput
    data: XOR<GoalUpdateManyMutationInput, GoalUncheckedUpdateManyWithoutCreatorInput>
  }

  export type GoalScalarWhereInput = {
    AND?: GoalScalarWhereInput | GoalScalarWhereInput[]
    OR?: GoalScalarWhereInput[]
    NOT?: GoalScalarWhereInput | GoalScalarWhereInput[]
    id?: StringFilter<"Goal"> | string
    title?: StringFilter<"Goal"> | string
    description?: StringNullableFilter<"Goal"> | string | null
    starReward?: IntFilter<"Goal"> | number
    creatorId?: StringFilter<"Goal"> | string
    completedAt?: DateTimeNullableFilter<"Goal"> | Date | string | null
    createdAt?: DateTimeFilter<"Goal"> | Date | string
    updatedAt?: DateTimeFilter<"Goal"> | Date | string
  }

  export type RoomMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: RoomMemberWhereUniqueInput
    update: XOR<RoomMemberUpdateWithoutUserInput, RoomMemberUncheckedUpdateWithoutUserInput>
    create: XOR<RoomMemberCreateWithoutUserInput, RoomMemberUncheckedCreateWithoutUserInput>
  }

  export type RoomMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: RoomMemberWhereUniqueInput
    data: XOR<RoomMemberUpdateWithoutUserInput, RoomMemberUncheckedUpdateWithoutUserInput>
  }

  export type RoomMemberUpdateManyWithWhereWithoutUserInput = {
    where: RoomMemberScalarWhereInput
    data: XOR<RoomMemberUpdateManyMutationInput, RoomMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type RoomMemberScalarWhereInput = {
    AND?: RoomMemberScalarWhereInput | RoomMemberScalarWhereInput[]
    OR?: RoomMemberScalarWhereInput[]
    NOT?: RoomMemberScalarWhereInput | RoomMemberScalarWhereInput[]
    id?: StringFilter<"RoomMember"> | string
    roomId?: StringFilter<"RoomMember"> | string
    userId?: StringFilter<"RoomMember"> | string
    role?: EnumUserRoleFilter<"RoomMember"> | $Enums.UserRole
    joinedAt?: DateTimeFilter<"RoomMember"> | Date | string
    createdAt?: DateTimeFilter<"RoomMember"> | Date | string
    updatedAt?: DateTimeFilter<"RoomMember"> | Date | string
  }

  export type RoomUpsertWithWhereUniqueWithoutCreateUserInput = {
    where: RoomWhereUniqueInput
    update: XOR<RoomUpdateWithoutCreateUserInput, RoomUncheckedUpdateWithoutCreateUserInput>
    create: XOR<RoomCreateWithoutCreateUserInput, RoomUncheckedCreateWithoutCreateUserInput>
  }

  export type RoomUpdateWithWhereUniqueWithoutCreateUserInput = {
    where: RoomWhereUniqueInput
    data: XOR<RoomUpdateWithoutCreateUserInput, RoomUncheckedUpdateWithoutCreateUserInput>
  }

  export type RoomUpdateManyWithWhereWithoutCreateUserInput = {
    where: RoomScalarWhereInput
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyWithoutCreateUserInput>
  }

  export type RoomScalarWhereInput = {
    AND?: RoomScalarWhereInput | RoomScalarWhereInput[]
    OR?: RoomScalarWhereInput[]
    NOT?: RoomScalarWhereInput | RoomScalarWhereInput[]
    id?: StringFilter<"Room"> | string
    name?: StringFilter<"Room"> | string
    createdAt?: DateTimeFilter<"Room"> | Date | string
    updatedAt?: DateTimeFilter<"Room"> | Date | string
    createUserId?: StringFilter<"Room"> | string
  }

  export type InvitationUpsertWithWhereUniqueWithoutInvitedByInput = {
    where: InvitationWhereUniqueInput
    update: XOR<InvitationUpdateWithoutInvitedByInput, InvitationUncheckedUpdateWithoutInvitedByInput>
    create: XOR<InvitationCreateWithoutInvitedByInput, InvitationUncheckedCreateWithoutInvitedByInput>
  }

  export type InvitationUpdateWithWhereUniqueWithoutInvitedByInput = {
    where: InvitationWhereUniqueInput
    data: XOR<InvitationUpdateWithoutInvitedByInput, InvitationUncheckedUpdateWithoutInvitedByInput>
  }

  export type InvitationUpdateManyWithWhereWithoutInvitedByInput = {
    where: InvitationScalarWhereInput
    data: XOR<InvitationUpdateManyMutationInput, InvitationUncheckedUpdateManyWithoutInvitedByInput>
  }

  export type InvitationScalarWhereInput = {
    AND?: InvitationScalarWhereInput | InvitationScalarWhereInput[]
    OR?: InvitationScalarWhereInput[]
    NOT?: InvitationScalarWhereInput | InvitationScalarWhereInput[]
    id?: StringFilter<"Invitation"> | string
    roomId?: StringFilter<"Invitation"> | string
    email?: StringFilter<"Invitation"> | string
    role?: EnumUserRoleFilter<"Invitation"> | $Enums.UserRole
    token?: StringFilter<"Invitation"> | string
    expiresAt?: DateTimeFilter<"Invitation"> | Date | string
    invitedById?: StringNullableFilter<"Invitation"> | string | null
    acceptedAt?: DateTimeNullableFilter<"Invitation"> | Date | string | null
    createdAt?: DateTimeFilter<"Invitation"> | Date | string
    updatedAt?: DateTimeFilter<"Invitation"> | Date | string
  }

  export type UserCreateWithoutGoalsInput = {
    id?: string
    email: string
    password: string
    role: $Enums.UserRole
    stars?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    quests?: QuestCreateNestedManyWithoutCreatorInput
    completions?: QuestCompletionCreateNestedManyWithoutUserInput
    rewardsPurchase?: RewardPurchaseCreateNestedManyWithoutChildInput
    rewards?: RewardCreateNestedManyWithoutCreatorInput
    boosts?: BoostActivationCreateNestedManyWithoutUserInput
    rooms?: RoomMemberCreateNestedManyWithoutUserInput
    createdRooms?: RoomCreateNestedManyWithoutCreateUserInput
    roomInvitations?: InvitationCreateNestedManyWithoutInvitedByInput
  }

  export type UserUncheckedCreateWithoutGoalsInput = {
    id?: string
    email: string
    password: string
    role: $Enums.UserRole
    stars?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    quests?: QuestUncheckedCreateNestedManyWithoutCreatorInput
    completions?: QuestCompletionUncheckedCreateNestedManyWithoutUserInput
    rewardsPurchase?: RewardPurchaseUncheckedCreateNestedManyWithoutChildInput
    rewards?: RewardUncheckedCreateNestedManyWithoutCreatorInput
    boosts?: BoostActivationUncheckedCreateNestedManyWithoutUserInput
    rooms?: RoomMemberUncheckedCreateNestedManyWithoutUserInput
    createdRooms?: RoomUncheckedCreateNestedManyWithoutCreateUserInput
    roomInvitations?: InvitationUncheckedCreateNestedManyWithoutInvitedByInput
  }

  export type UserCreateOrConnectWithoutGoalsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGoalsInput, UserUncheckedCreateWithoutGoalsInput>
  }

  export type QuestCreateWithoutGoalInput = {
    id?: string
    title: string
    description?: string | null
    deadline: Date | string
    difficulty?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutQuestsInput
    room?: RoomCreateNestedOneWithoutQuestsInput
    completions?: QuestCompletionCreateNestedManyWithoutQuestInput
  }

  export type QuestUncheckedCreateWithoutGoalInput = {
    id?: string
    title: string
    description?: string | null
    deadline: Date | string
    difficulty?: number
    creatorId: string
    roomId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completions?: QuestCompletionUncheckedCreateNestedManyWithoutQuestInput
  }

  export type QuestCreateOrConnectWithoutGoalInput = {
    where: QuestWhereUniqueInput
    create: XOR<QuestCreateWithoutGoalInput, QuestUncheckedCreateWithoutGoalInput>
  }

  export type QuestCreateManyGoalInputEnvelope = {
    data: QuestCreateManyGoalInput | QuestCreateManyGoalInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutGoalsInput = {
    update: XOR<UserUpdateWithoutGoalsInput, UserUncheckedUpdateWithoutGoalsInput>
    create: XOR<UserCreateWithoutGoalsInput, UserUncheckedCreateWithoutGoalsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGoalsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGoalsInput, UserUncheckedUpdateWithoutGoalsInput>
  }

  export type UserUpdateWithoutGoalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    stars?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quests?: QuestUpdateManyWithoutCreatorNestedInput
    completions?: QuestCompletionUpdateManyWithoutUserNestedInput
    rewardsPurchase?: RewardPurchaseUpdateManyWithoutChildNestedInput
    rewards?: RewardUpdateManyWithoutCreatorNestedInput
    boosts?: BoostActivationUpdateManyWithoutUserNestedInput
    rooms?: RoomMemberUpdateManyWithoutUserNestedInput
    createdRooms?: RoomUpdateManyWithoutCreateUserNestedInput
    roomInvitations?: InvitationUpdateManyWithoutInvitedByNestedInput
  }

  export type UserUncheckedUpdateWithoutGoalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    stars?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quests?: QuestUncheckedUpdateManyWithoutCreatorNestedInput
    completions?: QuestCompletionUncheckedUpdateManyWithoutUserNestedInput
    rewardsPurchase?: RewardPurchaseUncheckedUpdateManyWithoutChildNestedInput
    rewards?: RewardUncheckedUpdateManyWithoutCreatorNestedInput
    boosts?: BoostActivationUncheckedUpdateManyWithoutUserNestedInput
    rooms?: RoomMemberUncheckedUpdateManyWithoutUserNestedInput
    createdRooms?: RoomUncheckedUpdateManyWithoutCreateUserNestedInput
    roomInvitations?: InvitationUncheckedUpdateManyWithoutInvitedByNestedInput
  }

  export type QuestUpsertWithWhereUniqueWithoutGoalInput = {
    where: QuestWhereUniqueInput
    update: XOR<QuestUpdateWithoutGoalInput, QuestUncheckedUpdateWithoutGoalInput>
    create: XOR<QuestCreateWithoutGoalInput, QuestUncheckedCreateWithoutGoalInput>
  }

  export type QuestUpdateWithWhereUniqueWithoutGoalInput = {
    where: QuestWhereUniqueInput
    data: XOR<QuestUpdateWithoutGoalInput, QuestUncheckedUpdateWithoutGoalInput>
  }

  export type QuestUpdateManyWithWhereWithoutGoalInput = {
    where: QuestScalarWhereInput
    data: XOR<QuestUpdateManyMutationInput, QuestUncheckedUpdateManyWithoutGoalInput>
  }

  export type UserCreateWithoutQuestsInput = {
    id?: string
    email: string
    password: string
    role: $Enums.UserRole
    stars?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completions?: QuestCompletionCreateNestedManyWithoutUserInput
    rewardsPurchase?: RewardPurchaseCreateNestedManyWithoutChildInput
    rewards?: RewardCreateNestedManyWithoutCreatorInput
    boosts?: BoostActivationCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutCreatorInput
    rooms?: RoomMemberCreateNestedManyWithoutUserInput
    createdRooms?: RoomCreateNestedManyWithoutCreateUserInput
    roomInvitations?: InvitationCreateNestedManyWithoutInvitedByInput
  }

  export type UserUncheckedCreateWithoutQuestsInput = {
    id?: string
    email: string
    password: string
    role: $Enums.UserRole
    stars?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completions?: QuestCompletionUncheckedCreateNestedManyWithoutUserInput
    rewardsPurchase?: RewardPurchaseUncheckedCreateNestedManyWithoutChildInput
    rewards?: RewardUncheckedCreateNestedManyWithoutCreatorInput
    boosts?: BoostActivationUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutCreatorInput
    rooms?: RoomMemberUncheckedCreateNestedManyWithoutUserInput
    createdRooms?: RoomUncheckedCreateNestedManyWithoutCreateUserInput
    roomInvitations?: InvitationUncheckedCreateNestedManyWithoutInvitedByInput
  }

  export type UserCreateOrConnectWithoutQuestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutQuestsInput, UserUncheckedCreateWithoutQuestsInput>
  }

  export type GoalCreateWithoutQuestsInput = {
    id?: string
    title: string
    description?: string | null
    starReward: number
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutGoalsInput
  }

  export type GoalUncheckedCreateWithoutQuestsInput = {
    id?: string
    title: string
    description?: string | null
    starReward: number
    creatorId: string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoalCreateOrConnectWithoutQuestsInput = {
    where: GoalWhereUniqueInput
    create: XOR<GoalCreateWithoutQuestsInput, GoalUncheckedCreateWithoutQuestsInput>
  }

  export type RoomCreateWithoutQuestsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createUser: UserCreateNestedOneWithoutCreatedRoomsInput
    members?: RoomMemberCreateNestedManyWithoutRoomInput
    invitations?: InvitationCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutQuestsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createUserId: string
    members?: RoomMemberUncheckedCreateNestedManyWithoutRoomInput
    invitations?: InvitationUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutQuestsInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutQuestsInput, RoomUncheckedCreateWithoutQuestsInput>
  }

  export type QuestCompletionCreateWithoutQuestInput = {
    id?: string
    completedAt?: Date | string
    isLate?: boolean
    starsAwarded: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCompletionsInput
  }

  export type QuestCompletionUncheckedCreateWithoutQuestInput = {
    id?: string
    completedAt?: Date | string
    isLate?: boolean
    starsAwarded: number
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestCompletionCreateOrConnectWithoutQuestInput = {
    where: QuestCompletionWhereUniqueInput
    create: XOR<QuestCompletionCreateWithoutQuestInput, QuestCompletionUncheckedCreateWithoutQuestInput>
  }

  export type QuestCompletionCreateManyQuestInputEnvelope = {
    data: QuestCompletionCreateManyQuestInput | QuestCompletionCreateManyQuestInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutQuestsInput = {
    update: XOR<UserUpdateWithoutQuestsInput, UserUncheckedUpdateWithoutQuestsInput>
    create: XOR<UserCreateWithoutQuestsInput, UserUncheckedCreateWithoutQuestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutQuestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutQuestsInput, UserUncheckedUpdateWithoutQuestsInput>
  }

  export type UserUpdateWithoutQuestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    stars?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completions?: QuestCompletionUpdateManyWithoutUserNestedInput
    rewardsPurchase?: RewardPurchaseUpdateManyWithoutChildNestedInput
    rewards?: RewardUpdateManyWithoutCreatorNestedInput
    boosts?: BoostActivationUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutCreatorNestedInput
    rooms?: RoomMemberUpdateManyWithoutUserNestedInput
    createdRooms?: RoomUpdateManyWithoutCreateUserNestedInput
    roomInvitations?: InvitationUpdateManyWithoutInvitedByNestedInput
  }

  export type UserUncheckedUpdateWithoutQuestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    stars?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completions?: QuestCompletionUncheckedUpdateManyWithoutUserNestedInput
    rewardsPurchase?: RewardPurchaseUncheckedUpdateManyWithoutChildNestedInput
    rewards?: RewardUncheckedUpdateManyWithoutCreatorNestedInput
    boosts?: BoostActivationUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutCreatorNestedInput
    rooms?: RoomMemberUncheckedUpdateManyWithoutUserNestedInput
    createdRooms?: RoomUncheckedUpdateManyWithoutCreateUserNestedInput
    roomInvitations?: InvitationUncheckedUpdateManyWithoutInvitedByNestedInput
  }

  export type GoalUpsertWithoutQuestsInput = {
    update: XOR<GoalUpdateWithoutQuestsInput, GoalUncheckedUpdateWithoutQuestsInput>
    create: XOR<GoalCreateWithoutQuestsInput, GoalUncheckedCreateWithoutQuestsInput>
    where?: GoalWhereInput
  }

  export type GoalUpdateToOneWithWhereWithoutQuestsInput = {
    where?: GoalWhereInput
    data: XOR<GoalUpdateWithoutQuestsInput, GoalUncheckedUpdateWithoutQuestsInput>
  }

  export type GoalUpdateWithoutQuestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    starReward?: IntFieldUpdateOperationsInput | number
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutGoalsNestedInput
  }

  export type GoalUncheckedUpdateWithoutQuestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    starReward?: IntFieldUpdateOperationsInput | number
    creatorId?: StringFieldUpdateOperationsInput | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUpsertWithoutQuestsInput = {
    update: XOR<RoomUpdateWithoutQuestsInput, RoomUncheckedUpdateWithoutQuestsInput>
    create: XOR<RoomCreateWithoutQuestsInput, RoomUncheckedCreateWithoutQuestsInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutQuestsInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutQuestsInput, RoomUncheckedUpdateWithoutQuestsInput>
  }

  export type RoomUpdateWithoutQuestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createUser?: UserUpdateOneRequiredWithoutCreatedRoomsNestedInput
    members?: RoomMemberUpdateManyWithoutRoomNestedInput
    invitations?: InvitationUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutQuestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createUserId?: StringFieldUpdateOperationsInput | string
    members?: RoomMemberUncheckedUpdateManyWithoutRoomNestedInput
    invitations?: InvitationUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type QuestCompletionUpsertWithWhereUniqueWithoutQuestInput = {
    where: QuestCompletionWhereUniqueInput
    update: XOR<QuestCompletionUpdateWithoutQuestInput, QuestCompletionUncheckedUpdateWithoutQuestInput>
    create: XOR<QuestCompletionCreateWithoutQuestInput, QuestCompletionUncheckedCreateWithoutQuestInput>
  }

  export type QuestCompletionUpdateWithWhereUniqueWithoutQuestInput = {
    where: QuestCompletionWhereUniqueInput
    data: XOR<QuestCompletionUpdateWithoutQuestInput, QuestCompletionUncheckedUpdateWithoutQuestInput>
  }

  export type QuestCompletionUpdateManyWithWhereWithoutQuestInput = {
    where: QuestCompletionScalarWhereInput
    data: XOR<QuestCompletionUpdateManyMutationInput, QuestCompletionUncheckedUpdateManyWithoutQuestInput>
  }

  export type QuestCreateWithoutCompletionsInput = {
    id?: string
    title: string
    description?: string | null
    deadline: Date | string
    difficulty?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutQuestsInput
    goal?: GoalCreateNestedOneWithoutQuestsInput
    room?: RoomCreateNestedOneWithoutQuestsInput
  }

  export type QuestUncheckedCreateWithoutCompletionsInput = {
    id?: string
    title: string
    description?: string | null
    deadline: Date | string
    difficulty?: number
    creatorId: string
    goalId?: string | null
    roomId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestCreateOrConnectWithoutCompletionsInput = {
    where: QuestWhereUniqueInput
    create: XOR<QuestCreateWithoutCompletionsInput, QuestUncheckedCreateWithoutCompletionsInput>
  }

  export type UserCreateWithoutCompletionsInput = {
    id?: string
    email: string
    password: string
    role: $Enums.UserRole
    stars?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    quests?: QuestCreateNestedManyWithoutCreatorInput
    rewardsPurchase?: RewardPurchaseCreateNestedManyWithoutChildInput
    rewards?: RewardCreateNestedManyWithoutCreatorInput
    boosts?: BoostActivationCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutCreatorInput
    rooms?: RoomMemberCreateNestedManyWithoutUserInput
    createdRooms?: RoomCreateNestedManyWithoutCreateUserInput
    roomInvitations?: InvitationCreateNestedManyWithoutInvitedByInput
  }

  export type UserUncheckedCreateWithoutCompletionsInput = {
    id?: string
    email: string
    password: string
    role: $Enums.UserRole
    stars?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    quests?: QuestUncheckedCreateNestedManyWithoutCreatorInput
    rewardsPurchase?: RewardPurchaseUncheckedCreateNestedManyWithoutChildInput
    rewards?: RewardUncheckedCreateNestedManyWithoutCreatorInput
    boosts?: BoostActivationUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutCreatorInput
    rooms?: RoomMemberUncheckedCreateNestedManyWithoutUserInput
    createdRooms?: RoomUncheckedCreateNestedManyWithoutCreateUserInput
    roomInvitations?: InvitationUncheckedCreateNestedManyWithoutInvitedByInput
  }

  export type UserCreateOrConnectWithoutCompletionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCompletionsInput, UserUncheckedCreateWithoutCompletionsInput>
  }

  export type QuestUpsertWithoutCompletionsInput = {
    update: XOR<QuestUpdateWithoutCompletionsInput, QuestUncheckedUpdateWithoutCompletionsInput>
    create: XOR<QuestCreateWithoutCompletionsInput, QuestUncheckedCreateWithoutCompletionsInput>
    where?: QuestWhereInput
  }

  export type QuestUpdateToOneWithWhereWithoutCompletionsInput = {
    where?: QuestWhereInput
    data: XOR<QuestUpdateWithoutCompletionsInput, QuestUncheckedUpdateWithoutCompletionsInput>
  }

  export type QuestUpdateWithoutCompletionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    difficulty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutQuestsNestedInput
    goal?: GoalUpdateOneWithoutQuestsNestedInput
    room?: RoomUpdateOneWithoutQuestsNestedInput
  }

  export type QuestUncheckedUpdateWithoutCompletionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    difficulty?: IntFieldUpdateOperationsInput | number
    creatorId?: StringFieldUpdateOperationsInput | string
    goalId?: NullableStringFieldUpdateOperationsInput | string | null
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutCompletionsInput = {
    update: XOR<UserUpdateWithoutCompletionsInput, UserUncheckedUpdateWithoutCompletionsInput>
    create: XOR<UserCreateWithoutCompletionsInput, UserUncheckedCreateWithoutCompletionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCompletionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCompletionsInput, UserUncheckedUpdateWithoutCompletionsInput>
  }

  export type UserUpdateWithoutCompletionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    stars?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quests?: QuestUpdateManyWithoutCreatorNestedInput
    rewardsPurchase?: RewardPurchaseUpdateManyWithoutChildNestedInput
    rewards?: RewardUpdateManyWithoutCreatorNestedInput
    boosts?: BoostActivationUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutCreatorNestedInput
    rooms?: RoomMemberUpdateManyWithoutUserNestedInput
    createdRooms?: RoomUpdateManyWithoutCreateUserNestedInput
    roomInvitations?: InvitationUpdateManyWithoutInvitedByNestedInput
  }

  export type UserUncheckedUpdateWithoutCompletionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    stars?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quests?: QuestUncheckedUpdateManyWithoutCreatorNestedInput
    rewardsPurchase?: RewardPurchaseUncheckedUpdateManyWithoutChildNestedInput
    rewards?: RewardUncheckedUpdateManyWithoutCreatorNestedInput
    boosts?: BoostActivationUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutCreatorNestedInput
    rooms?: RoomMemberUncheckedUpdateManyWithoutUserNestedInput
    createdRooms?: RoomUncheckedUpdateManyWithoutCreateUserNestedInput
    roomInvitations?: InvitationUncheckedUpdateManyWithoutInvitedByNestedInput
  }

  export type UserCreateWithoutRewardsInput = {
    id?: string
    email: string
    password: string
    role: $Enums.UserRole
    stars?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    quests?: QuestCreateNestedManyWithoutCreatorInput
    completions?: QuestCompletionCreateNestedManyWithoutUserInput
    rewardsPurchase?: RewardPurchaseCreateNestedManyWithoutChildInput
    boosts?: BoostActivationCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutCreatorInput
    rooms?: RoomMemberCreateNestedManyWithoutUserInput
    createdRooms?: RoomCreateNestedManyWithoutCreateUserInput
    roomInvitations?: InvitationCreateNestedManyWithoutInvitedByInput
  }

  export type UserUncheckedCreateWithoutRewardsInput = {
    id?: string
    email: string
    password: string
    role: $Enums.UserRole
    stars?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    quests?: QuestUncheckedCreateNestedManyWithoutCreatorInput
    completions?: QuestCompletionUncheckedCreateNestedManyWithoutUserInput
    rewardsPurchase?: RewardPurchaseUncheckedCreateNestedManyWithoutChildInput
    boosts?: BoostActivationUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutCreatorInput
    rooms?: RoomMemberUncheckedCreateNestedManyWithoutUserInput
    createdRooms?: RoomUncheckedCreateNestedManyWithoutCreateUserInput
    roomInvitations?: InvitationUncheckedCreateNestedManyWithoutInvitedByInput
  }

  export type UserCreateOrConnectWithoutRewardsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRewardsInput, UserUncheckedCreateWithoutRewardsInput>
  }

  export type RewardPurchaseCreateWithoutRewardInput = {
    id?: string
    purchasedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    child: UserCreateNestedOneWithoutRewardsPurchaseInput
  }

  export type RewardPurchaseUncheckedCreateWithoutRewardInput = {
    id?: string
    purchasedAt?: Date | string
    childId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RewardPurchaseCreateOrConnectWithoutRewardInput = {
    where: RewardPurchaseWhereUniqueInput
    create: XOR<RewardPurchaseCreateWithoutRewardInput, RewardPurchaseUncheckedCreateWithoutRewardInput>
  }

  export type RewardPurchaseCreateManyRewardInputEnvelope = {
    data: RewardPurchaseCreateManyRewardInput | RewardPurchaseCreateManyRewardInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutRewardsInput = {
    update: XOR<UserUpdateWithoutRewardsInput, UserUncheckedUpdateWithoutRewardsInput>
    create: XOR<UserCreateWithoutRewardsInput, UserUncheckedCreateWithoutRewardsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRewardsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRewardsInput, UserUncheckedUpdateWithoutRewardsInput>
  }

  export type UserUpdateWithoutRewardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    stars?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quests?: QuestUpdateManyWithoutCreatorNestedInput
    completions?: QuestCompletionUpdateManyWithoutUserNestedInput
    rewardsPurchase?: RewardPurchaseUpdateManyWithoutChildNestedInput
    boosts?: BoostActivationUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutCreatorNestedInput
    rooms?: RoomMemberUpdateManyWithoutUserNestedInput
    createdRooms?: RoomUpdateManyWithoutCreateUserNestedInput
    roomInvitations?: InvitationUpdateManyWithoutInvitedByNestedInput
  }

  export type UserUncheckedUpdateWithoutRewardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    stars?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quests?: QuestUncheckedUpdateManyWithoutCreatorNestedInput
    completions?: QuestCompletionUncheckedUpdateManyWithoutUserNestedInput
    rewardsPurchase?: RewardPurchaseUncheckedUpdateManyWithoutChildNestedInput
    boosts?: BoostActivationUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutCreatorNestedInput
    rooms?: RoomMemberUncheckedUpdateManyWithoutUserNestedInput
    createdRooms?: RoomUncheckedUpdateManyWithoutCreateUserNestedInput
    roomInvitations?: InvitationUncheckedUpdateManyWithoutInvitedByNestedInput
  }

  export type RewardPurchaseUpsertWithWhereUniqueWithoutRewardInput = {
    where: RewardPurchaseWhereUniqueInput
    update: XOR<RewardPurchaseUpdateWithoutRewardInput, RewardPurchaseUncheckedUpdateWithoutRewardInput>
    create: XOR<RewardPurchaseCreateWithoutRewardInput, RewardPurchaseUncheckedCreateWithoutRewardInput>
  }

  export type RewardPurchaseUpdateWithWhereUniqueWithoutRewardInput = {
    where: RewardPurchaseWhereUniqueInput
    data: XOR<RewardPurchaseUpdateWithoutRewardInput, RewardPurchaseUncheckedUpdateWithoutRewardInput>
  }

  export type RewardPurchaseUpdateManyWithWhereWithoutRewardInput = {
    where: RewardPurchaseScalarWhereInput
    data: XOR<RewardPurchaseUpdateManyMutationInput, RewardPurchaseUncheckedUpdateManyWithoutRewardInput>
  }

  export type RewardCreateWithoutPurchasesInput = {
    id?: string
    title: string
    description?: string | null
    starCost: number
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutRewardsInput
  }

  export type RewardUncheckedCreateWithoutPurchasesInput = {
    id?: string
    title: string
    description?: string | null
    starCost: number
    creatorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RewardCreateOrConnectWithoutPurchasesInput = {
    where: RewardWhereUniqueInput
    create: XOR<RewardCreateWithoutPurchasesInput, RewardUncheckedCreateWithoutPurchasesInput>
  }

  export type UserCreateWithoutRewardsPurchaseInput = {
    id?: string
    email: string
    password: string
    role: $Enums.UserRole
    stars?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    quests?: QuestCreateNestedManyWithoutCreatorInput
    completions?: QuestCompletionCreateNestedManyWithoutUserInput
    rewards?: RewardCreateNestedManyWithoutCreatorInput
    boosts?: BoostActivationCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutCreatorInput
    rooms?: RoomMemberCreateNestedManyWithoutUserInput
    createdRooms?: RoomCreateNestedManyWithoutCreateUserInput
    roomInvitations?: InvitationCreateNestedManyWithoutInvitedByInput
  }

  export type UserUncheckedCreateWithoutRewardsPurchaseInput = {
    id?: string
    email: string
    password: string
    role: $Enums.UserRole
    stars?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    quests?: QuestUncheckedCreateNestedManyWithoutCreatorInput
    completions?: QuestCompletionUncheckedCreateNestedManyWithoutUserInput
    rewards?: RewardUncheckedCreateNestedManyWithoutCreatorInput
    boosts?: BoostActivationUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutCreatorInput
    rooms?: RoomMemberUncheckedCreateNestedManyWithoutUserInput
    createdRooms?: RoomUncheckedCreateNestedManyWithoutCreateUserInput
    roomInvitations?: InvitationUncheckedCreateNestedManyWithoutInvitedByInput
  }

  export type UserCreateOrConnectWithoutRewardsPurchaseInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRewardsPurchaseInput, UserUncheckedCreateWithoutRewardsPurchaseInput>
  }

  export type RewardUpsertWithoutPurchasesInput = {
    update: XOR<RewardUpdateWithoutPurchasesInput, RewardUncheckedUpdateWithoutPurchasesInput>
    create: XOR<RewardCreateWithoutPurchasesInput, RewardUncheckedCreateWithoutPurchasesInput>
    where?: RewardWhereInput
  }

  export type RewardUpdateToOneWithWhereWithoutPurchasesInput = {
    where?: RewardWhereInput
    data: XOR<RewardUpdateWithoutPurchasesInput, RewardUncheckedUpdateWithoutPurchasesInput>
  }

  export type RewardUpdateWithoutPurchasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    starCost?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutRewardsNestedInput
  }

  export type RewardUncheckedUpdateWithoutPurchasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    starCost?: IntFieldUpdateOperationsInput | number
    creatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutRewardsPurchaseInput = {
    update: XOR<UserUpdateWithoutRewardsPurchaseInput, UserUncheckedUpdateWithoutRewardsPurchaseInput>
    create: XOR<UserCreateWithoutRewardsPurchaseInput, UserUncheckedCreateWithoutRewardsPurchaseInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRewardsPurchaseInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRewardsPurchaseInput, UserUncheckedUpdateWithoutRewardsPurchaseInput>
  }

  export type UserUpdateWithoutRewardsPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    stars?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quests?: QuestUpdateManyWithoutCreatorNestedInput
    completions?: QuestCompletionUpdateManyWithoutUserNestedInput
    rewards?: RewardUpdateManyWithoutCreatorNestedInput
    boosts?: BoostActivationUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutCreatorNestedInput
    rooms?: RoomMemberUpdateManyWithoutUserNestedInput
    createdRooms?: RoomUpdateManyWithoutCreateUserNestedInput
    roomInvitations?: InvitationUpdateManyWithoutInvitedByNestedInput
  }

  export type UserUncheckedUpdateWithoutRewardsPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    stars?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quests?: QuestUncheckedUpdateManyWithoutCreatorNestedInput
    completions?: QuestCompletionUncheckedUpdateManyWithoutUserNestedInput
    rewards?: RewardUncheckedUpdateManyWithoutCreatorNestedInput
    boosts?: BoostActivationUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutCreatorNestedInput
    rooms?: RoomMemberUncheckedUpdateManyWithoutUserNestedInput
    createdRooms?: RoomUncheckedUpdateManyWithoutCreateUserNestedInput
    roomInvitations?: InvitationUncheckedUpdateManyWithoutInvitedByNestedInput
  }

  export type BoostActivationCreateWithoutBoostInput = {
    id?: string
    activatedAt?: Date | string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBoostsInput
  }

  export type BoostActivationUncheckedCreateWithoutBoostInput = {
    id?: string
    activatedAt?: Date | string
    expiresAt: Date | string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BoostActivationCreateOrConnectWithoutBoostInput = {
    where: BoostActivationWhereUniqueInput
    create: XOR<BoostActivationCreateWithoutBoostInput, BoostActivationUncheckedCreateWithoutBoostInput>
  }

  export type BoostActivationCreateManyBoostInputEnvelope = {
    data: BoostActivationCreateManyBoostInput | BoostActivationCreateManyBoostInput[]
    skipDuplicates?: boolean
  }

  export type BoostActivationUpsertWithWhereUniqueWithoutBoostInput = {
    where: BoostActivationWhereUniqueInput
    update: XOR<BoostActivationUpdateWithoutBoostInput, BoostActivationUncheckedUpdateWithoutBoostInput>
    create: XOR<BoostActivationCreateWithoutBoostInput, BoostActivationUncheckedCreateWithoutBoostInput>
  }

  export type BoostActivationUpdateWithWhereUniqueWithoutBoostInput = {
    where: BoostActivationWhereUniqueInput
    data: XOR<BoostActivationUpdateWithoutBoostInput, BoostActivationUncheckedUpdateWithoutBoostInput>
  }

  export type BoostActivationUpdateManyWithWhereWithoutBoostInput = {
    where: BoostActivationScalarWhereInput
    data: XOR<BoostActivationUpdateManyMutationInput, BoostActivationUncheckedUpdateManyWithoutBoostInput>
  }

  export type BoostCreateWithoutActivationsInput = {
    id?: string
    name: string
    description?: string | null
    cooldownDays: number
    durationHours: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BoostUncheckedCreateWithoutActivationsInput = {
    id?: string
    name: string
    description?: string | null
    cooldownDays: number
    durationHours: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BoostCreateOrConnectWithoutActivationsInput = {
    where: BoostWhereUniqueInput
    create: XOR<BoostCreateWithoutActivationsInput, BoostUncheckedCreateWithoutActivationsInput>
  }

  export type UserCreateWithoutBoostsInput = {
    id?: string
    email: string
    password: string
    role: $Enums.UserRole
    stars?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    quests?: QuestCreateNestedManyWithoutCreatorInput
    completions?: QuestCompletionCreateNestedManyWithoutUserInput
    rewardsPurchase?: RewardPurchaseCreateNestedManyWithoutChildInput
    rewards?: RewardCreateNestedManyWithoutCreatorInput
    goals?: GoalCreateNestedManyWithoutCreatorInput
    rooms?: RoomMemberCreateNestedManyWithoutUserInput
    createdRooms?: RoomCreateNestedManyWithoutCreateUserInput
    roomInvitations?: InvitationCreateNestedManyWithoutInvitedByInput
  }

  export type UserUncheckedCreateWithoutBoostsInput = {
    id?: string
    email: string
    password: string
    role: $Enums.UserRole
    stars?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    quests?: QuestUncheckedCreateNestedManyWithoutCreatorInput
    completions?: QuestCompletionUncheckedCreateNestedManyWithoutUserInput
    rewardsPurchase?: RewardPurchaseUncheckedCreateNestedManyWithoutChildInput
    rewards?: RewardUncheckedCreateNestedManyWithoutCreatorInput
    goals?: GoalUncheckedCreateNestedManyWithoutCreatorInput
    rooms?: RoomMemberUncheckedCreateNestedManyWithoutUserInput
    createdRooms?: RoomUncheckedCreateNestedManyWithoutCreateUserInput
    roomInvitations?: InvitationUncheckedCreateNestedManyWithoutInvitedByInput
  }

  export type UserCreateOrConnectWithoutBoostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBoostsInput, UserUncheckedCreateWithoutBoostsInput>
  }

  export type BoostUpsertWithoutActivationsInput = {
    update: XOR<BoostUpdateWithoutActivationsInput, BoostUncheckedUpdateWithoutActivationsInput>
    create: XOR<BoostCreateWithoutActivationsInput, BoostUncheckedCreateWithoutActivationsInput>
    where?: BoostWhereInput
  }

  export type BoostUpdateToOneWithWhereWithoutActivationsInput = {
    where?: BoostWhereInput
    data: XOR<BoostUpdateWithoutActivationsInput, BoostUncheckedUpdateWithoutActivationsInput>
  }

  export type BoostUpdateWithoutActivationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cooldownDays?: IntFieldUpdateOperationsInput | number
    durationHours?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoostUncheckedUpdateWithoutActivationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cooldownDays?: IntFieldUpdateOperationsInput | number
    durationHours?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutBoostsInput = {
    update: XOR<UserUpdateWithoutBoostsInput, UserUncheckedUpdateWithoutBoostsInput>
    create: XOR<UserCreateWithoutBoostsInput, UserUncheckedCreateWithoutBoostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBoostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBoostsInput, UserUncheckedUpdateWithoutBoostsInput>
  }

  export type UserUpdateWithoutBoostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    stars?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quests?: QuestUpdateManyWithoutCreatorNestedInput
    completions?: QuestCompletionUpdateManyWithoutUserNestedInput
    rewardsPurchase?: RewardPurchaseUpdateManyWithoutChildNestedInput
    rewards?: RewardUpdateManyWithoutCreatorNestedInput
    goals?: GoalUpdateManyWithoutCreatorNestedInput
    rooms?: RoomMemberUpdateManyWithoutUserNestedInput
    createdRooms?: RoomUpdateManyWithoutCreateUserNestedInput
    roomInvitations?: InvitationUpdateManyWithoutInvitedByNestedInput
  }

  export type UserUncheckedUpdateWithoutBoostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    stars?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quests?: QuestUncheckedUpdateManyWithoutCreatorNestedInput
    completions?: QuestCompletionUncheckedUpdateManyWithoutUserNestedInput
    rewardsPurchase?: RewardPurchaseUncheckedUpdateManyWithoutChildNestedInput
    rewards?: RewardUncheckedUpdateManyWithoutCreatorNestedInput
    goals?: GoalUncheckedUpdateManyWithoutCreatorNestedInput
    rooms?: RoomMemberUncheckedUpdateManyWithoutUserNestedInput
    createdRooms?: RoomUncheckedUpdateManyWithoutCreateUserNestedInput
    roomInvitations?: InvitationUncheckedUpdateManyWithoutInvitedByNestedInput
  }

  export type UserCreateWithoutCreatedRoomsInput = {
    id?: string
    email: string
    password: string
    role: $Enums.UserRole
    stars?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    quests?: QuestCreateNestedManyWithoutCreatorInput
    completions?: QuestCompletionCreateNestedManyWithoutUserInput
    rewardsPurchase?: RewardPurchaseCreateNestedManyWithoutChildInput
    rewards?: RewardCreateNestedManyWithoutCreatorInput
    boosts?: BoostActivationCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutCreatorInput
    rooms?: RoomMemberCreateNestedManyWithoutUserInput
    roomInvitations?: InvitationCreateNestedManyWithoutInvitedByInput
  }

  export type UserUncheckedCreateWithoutCreatedRoomsInput = {
    id?: string
    email: string
    password: string
    role: $Enums.UserRole
    stars?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    quests?: QuestUncheckedCreateNestedManyWithoutCreatorInput
    completions?: QuestCompletionUncheckedCreateNestedManyWithoutUserInput
    rewardsPurchase?: RewardPurchaseUncheckedCreateNestedManyWithoutChildInput
    rewards?: RewardUncheckedCreateNestedManyWithoutCreatorInput
    boosts?: BoostActivationUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutCreatorInput
    rooms?: RoomMemberUncheckedCreateNestedManyWithoutUserInput
    roomInvitations?: InvitationUncheckedCreateNestedManyWithoutInvitedByInput
  }

  export type UserCreateOrConnectWithoutCreatedRoomsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedRoomsInput, UserUncheckedCreateWithoutCreatedRoomsInput>
  }

  export type RoomMemberCreateWithoutRoomInput = {
    id?: string
    role?: $Enums.UserRole
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRoomsInput
  }

  export type RoomMemberUncheckedCreateWithoutRoomInput = {
    id?: string
    userId: string
    role?: $Enums.UserRole
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomMemberCreateOrConnectWithoutRoomInput = {
    where: RoomMemberWhereUniqueInput
    create: XOR<RoomMemberCreateWithoutRoomInput, RoomMemberUncheckedCreateWithoutRoomInput>
  }

  export type RoomMemberCreateManyRoomInputEnvelope = {
    data: RoomMemberCreateManyRoomInput | RoomMemberCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type InvitationCreateWithoutRoomInput = {
    id?: string
    email: string
    role: $Enums.UserRole
    token: string
    expiresAt: Date | string
    acceptedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invitedBy?: UserCreateNestedOneWithoutRoomInvitationsInput
  }

  export type InvitationUncheckedCreateWithoutRoomInput = {
    id?: string
    email: string
    role: $Enums.UserRole
    token: string
    expiresAt: Date | string
    invitedById?: string | null
    acceptedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvitationCreateOrConnectWithoutRoomInput = {
    where: InvitationWhereUniqueInput
    create: XOR<InvitationCreateWithoutRoomInput, InvitationUncheckedCreateWithoutRoomInput>
  }

  export type InvitationCreateManyRoomInputEnvelope = {
    data: InvitationCreateManyRoomInput | InvitationCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type QuestCreateWithoutRoomInput = {
    id?: string
    title: string
    description?: string | null
    deadline: Date | string
    difficulty?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutQuestsInput
    goal?: GoalCreateNestedOneWithoutQuestsInput
    completions?: QuestCompletionCreateNestedManyWithoutQuestInput
  }

  export type QuestUncheckedCreateWithoutRoomInput = {
    id?: string
    title: string
    description?: string | null
    deadline: Date | string
    difficulty?: number
    creatorId: string
    goalId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completions?: QuestCompletionUncheckedCreateNestedManyWithoutQuestInput
  }

  export type QuestCreateOrConnectWithoutRoomInput = {
    where: QuestWhereUniqueInput
    create: XOR<QuestCreateWithoutRoomInput, QuestUncheckedCreateWithoutRoomInput>
  }

  export type QuestCreateManyRoomInputEnvelope = {
    data: QuestCreateManyRoomInput | QuestCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCreatedRoomsInput = {
    update: XOR<UserUpdateWithoutCreatedRoomsInput, UserUncheckedUpdateWithoutCreatedRoomsInput>
    create: XOR<UserCreateWithoutCreatedRoomsInput, UserUncheckedCreateWithoutCreatedRoomsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedRoomsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedRoomsInput, UserUncheckedUpdateWithoutCreatedRoomsInput>
  }

  export type UserUpdateWithoutCreatedRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    stars?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quests?: QuestUpdateManyWithoutCreatorNestedInput
    completions?: QuestCompletionUpdateManyWithoutUserNestedInput
    rewardsPurchase?: RewardPurchaseUpdateManyWithoutChildNestedInput
    rewards?: RewardUpdateManyWithoutCreatorNestedInput
    boosts?: BoostActivationUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutCreatorNestedInput
    rooms?: RoomMemberUpdateManyWithoutUserNestedInput
    roomInvitations?: InvitationUpdateManyWithoutInvitedByNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    stars?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quests?: QuestUncheckedUpdateManyWithoutCreatorNestedInput
    completions?: QuestCompletionUncheckedUpdateManyWithoutUserNestedInput
    rewardsPurchase?: RewardPurchaseUncheckedUpdateManyWithoutChildNestedInput
    rewards?: RewardUncheckedUpdateManyWithoutCreatorNestedInput
    boosts?: BoostActivationUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutCreatorNestedInput
    rooms?: RoomMemberUncheckedUpdateManyWithoutUserNestedInput
    roomInvitations?: InvitationUncheckedUpdateManyWithoutInvitedByNestedInput
  }

  export type RoomMemberUpsertWithWhereUniqueWithoutRoomInput = {
    where: RoomMemberWhereUniqueInput
    update: XOR<RoomMemberUpdateWithoutRoomInput, RoomMemberUncheckedUpdateWithoutRoomInput>
    create: XOR<RoomMemberCreateWithoutRoomInput, RoomMemberUncheckedCreateWithoutRoomInput>
  }

  export type RoomMemberUpdateWithWhereUniqueWithoutRoomInput = {
    where: RoomMemberWhereUniqueInput
    data: XOR<RoomMemberUpdateWithoutRoomInput, RoomMemberUncheckedUpdateWithoutRoomInput>
  }

  export type RoomMemberUpdateManyWithWhereWithoutRoomInput = {
    where: RoomMemberScalarWhereInput
    data: XOR<RoomMemberUpdateManyMutationInput, RoomMemberUncheckedUpdateManyWithoutRoomInput>
  }

  export type InvitationUpsertWithWhereUniqueWithoutRoomInput = {
    where: InvitationWhereUniqueInput
    update: XOR<InvitationUpdateWithoutRoomInput, InvitationUncheckedUpdateWithoutRoomInput>
    create: XOR<InvitationCreateWithoutRoomInput, InvitationUncheckedCreateWithoutRoomInput>
  }

  export type InvitationUpdateWithWhereUniqueWithoutRoomInput = {
    where: InvitationWhereUniqueInput
    data: XOR<InvitationUpdateWithoutRoomInput, InvitationUncheckedUpdateWithoutRoomInput>
  }

  export type InvitationUpdateManyWithWhereWithoutRoomInput = {
    where: InvitationScalarWhereInput
    data: XOR<InvitationUpdateManyMutationInput, InvitationUncheckedUpdateManyWithoutRoomInput>
  }

  export type QuestUpsertWithWhereUniqueWithoutRoomInput = {
    where: QuestWhereUniqueInput
    update: XOR<QuestUpdateWithoutRoomInput, QuestUncheckedUpdateWithoutRoomInput>
    create: XOR<QuestCreateWithoutRoomInput, QuestUncheckedCreateWithoutRoomInput>
  }

  export type QuestUpdateWithWhereUniqueWithoutRoomInput = {
    where: QuestWhereUniqueInput
    data: XOR<QuestUpdateWithoutRoomInput, QuestUncheckedUpdateWithoutRoomInput>
  }

  export type QuestUpdateManyWithWhereWithoutRoomInput = {
    where: QuestScalarWhereInput
    data: XOR<QuestUpdateManyMutationInput, QuestUncheckedUpdateManyWithoutRoomInput>
  }

  export type RoomCreateWithoutMembersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createUser: UserCreateNestedOneWithoutCreatedRoomsInput
    invitations?: InvitationCreateNestedManyWithoutRoomInput
    quests?: QuestCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createUserId: string
    invitations?: InvitationUncheckedCreateNestedManyWithoutRoomInput
    quests?: QuestUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutMembersInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutMembersInput, RoomUncheckedCreateWithoutMembersInput>
  }

  export type UserCreateWithoutRoomsInput = {
    id?: string
    email: string
    password: string
    role: $Enums.UserRole
    stars?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    quests?: QuestCreateNestedManyWithoutCreatorInput
    completions?: QuestCompletionCreateNestedManyWithoutUserInput
    rewardsPurchase?: RewardPurchaseCreateNestedManyWithoutChildInput
    rewards?: RewardCreateNestedManyWithoutCreatorInput
    boosts?: BoostActivationCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutCreatorInput
    createdRooms?: RoomCreateNestedManyWithoutCreateUserInput
    roomInvitations?: InvitationCreateNestedManyWithoutInvitedByInput
  }

  export type UserUncheckedCreateWithoutRoomsInput = {
    id?: string
    email: string
    password: string
    role: $Enums.UserRole
    stars?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    quests?: QuestUncheckedCreateNestedManyWithoutCreatorInput
    completions?: QuestCompletionUncheckedCreateNestedManyWithoutUserInput
    rewardsPurchase?: RewardPurchaseUncheckedCreateNestedManyWithoutChildInput
    rewards?: RewardUncheckedCreateNestedManyWithoutCreatorInput
    boosts?: BoostActivationUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutCreatorInput
    createdRooms?: RoomUncheckedCreateNestedManyWithoutCreateUserInput
    roomInvitations?: InvitationUncheckedCreateNestedManyWithoutInvitedByInput
  }

  export type UserCreateOrConnectWithoutRoomsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoomsInput, UserUncheckedCreateWithoutRoomsInput>
  }

  export type RoomUpsertWithoutMembersInput = {
    update: XOR<RoomUpdateWithoutMembersInput, RoomUncheckedUpdateWithoutMembersInput>
    create: XOR<RoomCreateWithoutMembersInput, RoomUncheckedCreateWithoutMembersInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutMembersInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutMembersInput, RoomUncheckedUpdateWithoutMembersInput>
  }

  export type RoomUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createUser?: UserUpdateOneRequiredWithoutCreatedRoomsNestedInput
    invitations?: InvitationUpdateManyWithoutRoomNestedInput
    quests?: QuestUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createUserId?: StringFieldUpdateOperationsInput | string
    invitations?: InvitationUncheckedUpdateManyWithoutRoomNestedInput
    quests?: QuestUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type UserUpsertWithoutRoomsInput = {
    update: XOR<UserUpdateWithoutRoomsInput, UserUncheckedUpdateWithoutRoomsInput>
    create: XOR<UserCreateWithoutRoomsInput, UserUncheckedCreateWithoutRoomsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRoomsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRoomsInput, UserUncheckedUpdateWithoutRoomsInput>
  }

  export type UserUpdateWithoutRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    stars?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quests?: QuestUpdateManyWithoutCreatorNestedInput
    completions?: QuestCompletionUpdateManyWithoutUserNestedInput
    rewardsPurchase?: RewardPurchaseUpdateManyWithoutChildNestedInput
    rewards?: RewardUpdateManyWithoutCreatorNestedInput
    boosts?: BoostActivationUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutCreatorNestedInput
    createdRooms?: RoomUpdateManyWithoutCreateUserNestedInput
    roomInvitations?: InvitationUpdateManyWithoutInvitedByNestedInput
  }

  export type UserUncheckedUpdateWithoutRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    stars?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quests?: QuestUncheckedUpdateManyWithoutCreatorNestedInput
    completions?: QuestCompletionUncheckedUpdateManyWithoutUserNestedInput
    rewardsPurchase?: RewardPurchaseUncheckedUpdateManyWithoutChildNestedInput
    rewards?: RewardUncheckedUpdateManyWithoutCreatorNestedInput
    boosts?: BoostActivationUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutCreatorNestedInput
    createdRooms?: RoomUncheckedUpdateManyWithoutCreateUserNestedInput
    roomInvitations?: InvitationUncheckedUpdateManyWithoutInvitedByNestedInput
  }

  export type RoomCreateWithoutInvitationsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createUser: UserCreateNestedOneWithoutCreatedRoomsInput
    members?: RoomMemberCreateNestedManyWithoutRoomInput
    quests?: QuestCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutInvitationsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createUserId: string
    members?: RoomMemberUncheckedCreateNestedManyWithoutRoomInput
    quests?: QuestUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutInvitationsInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutInvitationsInput, RoomUncheckedCreateWithoutInvitationsInput>
  }

  export type UserCreateWithoutRoomInvitationsInput = {
    id?: string
    email: string
    password: string
    role: $Enums.UserRole
    stars?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    quests?: QuestCreateNestedManyWithoutCreatorInput
    completions?: QuestCompletionCreateNestedManyWithoutUserInput
    rewardsPurchase?: RewardPurchaseCreateNestedManyWithoutChildInput
    rewards?: RewardCreateNestedManyWithoutCreatorInput
    boosts?: BoostActivationCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutCreatorInput
    rooms?: RoomMemberCreateNestedManyWithoutUserInput
    createdRooms?: RoomCreateNestedManyWithoutCreateUserInput
  }

  export type UserUncheckedCreateWithoutRoomInvitationsInput = {
    id?: string
    email: string
    password: string
    role: $Enums.UserRole
    stars?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    quests?: QuestUncheckedCreateNestedManyWithoutCreatorInput
    completions?: QuestCompletionUncheckedCreateNestedManyWithoutUserInput
    rewardsPurchase?: RewardPurchaseUncheckedCreateNestedManyWithoutChildInput
    rewards?: RewardUncheckedCreateNestedManyWithoutCreatorInput
    boosts?: BoostActivationUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutCreatorInput
    rooms?: RoomMemberUncheckedCreateNestedManyWithoutUserInput
    createdRooms?: RoomUncheckedCreateNestedManyWithoutCreateUserInput
  }

  export type UserCreateOrConnectWithoutRoomInvitationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoomInvitationsInput, UserUncheckedCreateWithoutRoomInvitationsInput>
  }

  export type RoomUpsertWithoutInvitationsInput = {
    update: XOR<RoomUpdateWithoutInvitationsInput, RoomUncheckedUpdateWithoutInvitationsInput>
    create: XOR<RoomCreateWithoutInvitationsInput, RoomUncheckedCreateWithoutInvitationsInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutInvitationsInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutInvitationsInput, RoomUncheckedUpdateWithoutInvitationsInput>
  }

  export type RoomUpdateWithoutInvitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createUser?: UserUpdateOneRequiredWithoutCreatedRoomsNestedInput
    members?: RoomMemberUpdateManyWithoutRoomNestedInput
    quests?: QuestUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutInvitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createUserId?: StringFieldUpdateOperationsInput | string
    members?: RoomMemberUncheckedUpdateManyWithoutRoomNestedInput
    quests?: QuestUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type UserUpsertWithoutRoomInvitationsInput = {
    update: XOR<UserUpdateWithoutRoomInvitationsInput, UserUncheckedUpdateWithoutRoomInvitationsInput>
    create: XOR<UserCreateWithoutRoomInvitationsInput, UserUncheckedCreateWithoutRoomInvitationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRoomInvitationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRoomInvitationsInput, UserUncheckedUpdateWithoutRoomInvitationsInput>
  }

  export type UserUpdateWithoutRoomInvitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    stars?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quests?: QuestUpdateManyWithoutCreatorNestedInput
    completions?: QuestCompletionUpdateManyWithoutUserNestedInput
    rewardsPurchase?: RewardPurchaseUpdateManyWithoutChildNestedInput
    rewards?: RewardUpdateManyWithoutCreatorNestedInput
    boosts?: BoostActivationUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutCreatorNestedInput
    rooms?: RoomMemberUpdateManyWithoutUserNestedInput
    createdRooms?: RoomUpdateManyWithoutCreateUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoomInvitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    stars?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quests?: QuestUncheckedUpdateManyWithoutCreatorNestedInput
    completions?: QuestCompletionUncheckedUpdateManyWithoutUserNestedInput
    rewardsPurchase?: RewardPurchaseUncheckedUpdateManyWithoutChildNestedInput
    rewards?: RewardUncheckedUpdateManyWithoutCreatorNestedInput
    boosts?: BoostActivationUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutCreatorNestedInput
    rooms?: RoomMemberUncheckedUpdateManyWithoutUserNestedInput
    createdRooms?: RoomUncheckedUpdateManyWithoutCreateUserNestedInput
  }

  export type QuestCreateManyCreatorInput = {
    id?: string
    title: string
    description?: string | null
    deadline: Date | string
    difficulty?: number
    goalId?: string | null
    roomId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestCompletionCreateManyUserInput = {
    id?: string
    completedAt?: Date | string
    isLate?: boolean
    starsAwarded: number
    questId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RewardPurchaseCreateManyChildInput = {
    id?: string
    purchasedAt?: Date | string
    rewardId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RewardCreateManyCreatorInput = {
    id?: string
    title: string
    description?: string | null
    starCost: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BoostActivationCreateManyUserInput = {
    id?: string
    activatedAt?: Date | string
    expiresAt: Date | string
    boostId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoalCreateManyCreatorInput = {
    id?: string
    title: string
    description?: string | null
    starReward: number
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomMemberCreateManyUserInput = {
    id?: string
    roomId: string
    role?: $Enums.UserRole
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomCreateManyCreateUserInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvitationCreateManyInvitedByInput = {
    id?: string
    roomId: string
    email: string
    role: $Enums.UserRole
    token: string
    expiresAt: Date | string
    acceptedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    difficulty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goal?: GoalUpdateOneWithoutQuestsNestedInput
    room?: RoomUpdateOneWithoutQuestsNestedInput
    completions?: QuestCompletionUpdateManyWithoutQuestNestedInput
  }

  export type QuestUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    difficulty?: IntFieldUpdateOperationsInput | number
    goalId?: NullableStringFieldUpdateOperationsInput | string | null
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completions?: QuestCompletionUncheckedUpdateManyWithoutQuestNestedInput
  }

  export type QuestUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    difficulty?: IntFieldUpdateOperationsInput | number
    goalId?: NullableStringFieldUpdateOperationsInput | string | null
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestCompletionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isLate?: BoolFieldUpdateOperationsInput | boolean
    starsAwarded?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quest?: QuestUpdateOneRequiredWithoutCompletionsNestedInput
  }

  export type QuestCompletionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isLate?: BoolFieldUpdateOperationsInput | boolean
    starsAwarded?: IntFieldUpdateOperationsInput | number
    questId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestCompletionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isLate?: BoolFieldUpdateOperationsInput | boolean
    starsAwarded?: IntFieldUpdateOperationsInput | number
    questId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RewardPurchaseUpdateWithoutChildInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reward?: RewardUpdateOneRequiredWithoutPurchasesNestedInput
  }

  export type RewardPurchaseUncheckedUpdateWithoutChildInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rewardId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RewardPurchaseUncheckedUpdateManyWithoutChildInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rewardId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RewardUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    starCost?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchases?: RewardPurchaseUpdateManyWithoutRewardNestedInput
  }

  export type RewardUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    starCost?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchases?: RewardPurchaseUncheckedUpdateManyWithoutRewardNestedInput
  }

  export type RewardUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    starCost?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoostActivationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    activatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    boost?: BoostUpdateOneRequiredWithoutActivationsNestedInput
  }

  export type BoostActivationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    activatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    boostId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoostActivationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    activatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    boostId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    starReward?: IntFieldUpdateOperationsInput | number
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quests?: QuestUpdateManyWithoutGoalNestedInput
  }

  export type GoalUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    starReward?: IntFieldUpdateOperationsInput | number
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quests?: QuestUncheckedUpdateManyWithoutGoalNestedInput
  }

  export type GoalUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    starReward?: IntFieldUpdateOperationsInput | number
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomMemberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutMembersNestedInput
  }

  export type RoomMemberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomMemberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUpdateWithoutCreateUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: RoomMemberUpdateManyWithoutRoomNestedInput
    invitations?: InvitationUpdateManyWithoutRoomNestedInput
    quests?: QuestUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutCreateUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: RoomMemberUncheckedUpdateManyWithoutRoomNestedInput
    invitations?: InvitationUncheckedUpdateManyWithoutRoomNestedInput
    quests?: QuestUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateManyWithoutCreateUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationUpdateWithoutInvitedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutInvitationsNestedInput
  }

  export type InvitationUncheckedUpdateWithoutInvitedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationUncheckedUpdateManyWithoutInvitedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestCreateManyGoalInput = {
    id?: string
    title: string
    description?: string | null
    deadline: Date | string
    difficulty?: number
    creatorId: string
    roomId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestUpdateWithoutGoalInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    difficulty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutQuestsNestedInput
    room?: RoomUpdateOneWithoutQuestsNestedInput
    completions?: QuestCompletionUpdateManyWithoutQuestNestedInput
  }

  export type QuestUncheckedUpdateWithoutGoalInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    difficulty?: IntFieldUpdateOperationsInput | number
    creatorId?: StringFieldUpdateOperationsInput | string
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completions?: QuestCompletionUncheckedUpdateManyWithoutQuestNestedInput
  }

  export type QuestUncheckedUpdateManyWithoutGoalInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    difficulty?: IntFieldUpdateOperationsInput | number
    creatorId?: StringFieldUpdateOperationsInput | string
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestCompletionCreateManyQuestInput = {
    id?: string
    completedAt?: Date | string
    isLate?: boolean
    starsAwarded: number
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestCompletionUpdateWithoutQuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isLate?: BoolFieldUpdateOperationsInput | boolean
    starsAwarded?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCompletionsNestedInput
  }

  export type QuestCompletionUncheckedUpdateWithoutQuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isLate?: BoolFieldUpdateOperationsInput | boolean
    starsAwarded?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestCompletionUncheckedUpdateManyWithoutQuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isLate?: BoolFieldUpdateOperationsInput | boolean
    starsAwarded?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RewardPurchaseCreateManyRewardInput = {
    id?: string
    purchasedAt?: Date | string
    childId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RewardPurchaseUpdateWithoutRewardInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    child?: UserUpdateOneRequiredWithoutRewardsPurchaseNestedInput
  }

  export type RewardPurchaseUncheckedUpdateWithoutRewardInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    childId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RewardPurchaseUncheckedUpdateManyWithoutRewardInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    childId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoostActivationCreateManyBoostInput = {
    id?: string
    activatedAt?: Date | string
    expiresAt: Date | string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BoostActivationUpdateWithoutBoostInput = {
    id?: StringFieldUpdateOperationsInput | string
    activatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBoostsNestedInput
  }

  export type BoostActivationUncheckedUpdateWithoutBoostInput = {
    id?: StringFieldUpdateOperationsInput | string
    activatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoostActivationUncheckedUpdateManyWithoutBoostInput = {
    id?: StringFieldUpdateOperationsInput | string
    activatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomMemberCreateManyRoomInput = {
    id?: string
    userId: string
    role?: $Enums.UserRole
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvitationCreateManyRoomInput = {
    id?: string
    email: string
    role: $Enums.UserRole
    token: string
    expiresAt: Date | string
    invitedById?: string | null
    acceptedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestCreateManyRoomInput = {
    id?: string
    title: string
    description?: string | null
    deadline: Date | string
    difficulty?: number
    creatorId: string
    goalId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomMemberUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRoomsNestedInput
  }

  export type RoomMemberUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomMemberUncheckedUpdateManyWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitedBy?: UserUpdateOneWithoutRoomInvitationsNestedInput
  }

  export type InvitationUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitedById?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationUncheckedUpdateManyWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitedById?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    difficulty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutQuestsNestedInput
    goal?: GoalUpdateOneWithoutQuestsNestedInput
    completions?: QuestCompletionUpdateManyWithoutQuestNestedInput
  }

  export type QuestUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    difficulty?: IntFieldUpdateOperationsInput | number
    creatorId?: StringFieldUpdateOperationsInput | string
    goalId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completions?: QuestCompletionUncheckedUpdateManyWithoutQuestNestedInput
  }

  export type QuestUncheckedUpdateManyWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    difficulty?: IntFieldUpdateOperationsInput | number
    creatorId?: StringFieldUpdateOperationsInput | string
    goalId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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