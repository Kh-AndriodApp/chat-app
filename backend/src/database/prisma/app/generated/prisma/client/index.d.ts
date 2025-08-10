
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
 * Model UserSession
 * 
 */
export type UserSession = $Result.DefaultSelection<Prisma.$UserSessionPayload>
/**
 * Model UserDevice
 * 
 */
export type UserDevice = $Result.DefaultSelection<Prisma.$UserDevicePayload>
/**
 * Model UserRelationship
 * 
 */
export type UserRelationship = $Result.DefaultSelection<Prisma.$UserRelationshipPayload>
/**
 * Model ChatRoom
 * 
 */
export type ChatRoom = $Result.DefaultSelection<Prisma.$ChatRoomPayload>
/**
 * Model ChatRoomMember
 * 
 */
export type ChatRoomMember = $Result.DefaultSelection<Prisma.$ChatRoomMemberPayload>
/**
 * Model Attachment
 * 
 */
export type Attachment = $Result.DefaultSelection<Prisma.$AttachmentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserStatus: {
  OFFLINE: 'OFFLINE',
  ONLINE: 'ONLINE',
  BUSY: 'BUSY',
  AWAY: 'AWAY',
  DO_NOT_DISTURB: 'DO_NOT_DISTURB'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]


export const DeviceType: {
  IOS: 'IOS',
  ANDROID: 'ANDROID',
  WEB: 'WEB',
  DESKTOP: 'DESKTOP'
};

export type DeviceType = (typeof DeviceType)[keyof typeof DeviceType]


export const ThemePreference: {
  LIGHT: 'LIGHT',
  DARK: 'DARK',
  SYSTEM_DEFAULT: 'SYSTEM_DEFAULT'
};

export type ThemePreference = (typeof ThemePreference)[keyof typeof ThemePreference]


export const ChatRoomType: {
  PRIVATE: 'PRIVATE',
  GROUP: 'GROUP',
  CHANNEL: 'CHANNEL',
  PUBLIC: 'PUBLIC',
  DIRECT_MESSAGE: 'DIRECT_MESSAGE',
  ANNOUNCEMENT: 'ANNOUNCEMENT'
};

export type ChatRoomType = (typeof ChatRoomType)[keyof typeof ChatRoomType]


export const ChatRoomRole: {
  USER: 'USER',
  MODERATOR: 'MODERATOR',
  ADMIN: 'ADMIN',
  SUPER_ADMIN: 'SUPER_ADMIN',
  GUEST: 'GUEST'
};

export type ChatRoomRole = (typeof ChatRoomRole)[keyof typeof ChatRoomRole]


export const RelationshipStatus: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED',
  BLOCKED: 'BLOCKED'
};

export type RelationshipStatus = (typeof RelationshipStatus)[keyof typeof RelationshipStatus]


export const VirusScanStatus: {
  PENDING: 'PENDING',
  CLEAN: 'CLEAN',
  INFECTED: 'INFECTED',
  ERROR: 'ERROR'
};

export type VirusScanStatus = (typeof VirusScanStatus)[keyof typeof VirusScanStatus]

}

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

export type DeviceType = $Enums.DeviceType

export const DeviceType: typeof $Enums.DeviceType

export type ThemePreference = $Enums.ThemePreference

export const ThemePreference: typeof $Enums.ThemePreference

export type ChatRoomType = $Enums.ChatRoomType

export const ChatRoomType: typeof $Enums.ChatRoomType

export type ChatRoomRole = $Enums.ChatRoomRole

export const ChatRoomRole: typeof $Enums.ChatRoomRole

export type RelationshipStatus = $Enums.RelationshipStatus

export const RelationshipStatus: typeof $Enums.RelationshipStatus

export type VirusScanStatus = $Enums.VirusScanStatus

export const VirusScanStatus: typeof $Enums.VirusScanStatus

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
   * `prisma.userSession`: Exposes CRUD operations for the **UserSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSessions
    * const userSessions = await prisma.userSession.findMany()
    * ```
    */
  get userSession(): Prisma.UserSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userDevice`: Exposes CRUD operations for the **UserDevice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserDevices
    * const userDevices = await prisma.userDevice.findMany()
    * ```
    */
  get userDevice(): Prisma.UserDeviceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userRelationship`: Exposes CRUD operations for the **UserRelationship** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserRelationships
    * const userRelationships = await prisma.userRelationship.findMany()
    * ```
    */
  get userRelationship(): Prisma.UserRelationshipDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatRoom`: Exposes CRUD operations for the **ChatRoom** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatRooms
    * const chatRooms = await prisma.chatRoom.findMany()
    * ```
    */
  get chatRoom(): Prisma.ChatRoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatRoomMember`: Exposes CRUD operations for the **ChatRoomMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatRoomMembers
    * const chatRoomMembers = await prisma.chatRoomMember.findMany()
    * ```
    */
  get chatRoomMember(): Prisma.ChatRoomMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attachment`: Exposes CRUD operations for the **Attachment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attachments
    * const attachments = await prisma.attachment.findMany()
    * ```
    */
  get attachment(): Prisma.AttachmentDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
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
    UserSession: 'UserSession',
    UserDevice: 'UserDevice',
    UserRelationship: 'UserRelationship',
    ChatRoom: 'ChatRoom',
    ChatRoomMember: 'ChatRoomMember',
    Attachment: 'Attachment'
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
      modelProps: "user" | "userSession" | "userDevice" | "userRelationship" | "chatRoom" | "chatRoomMember" | "attachment"
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
      UserSession: {
        payload: Prisma.$UserSessionPayload<ExtArgs>
        fields: Prisma.UserSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>
          }
          findFirst: {
            args: Prisma.UserSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>
          }
          findMany: {
            args: Prisma.UserSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>[]
          }
          create: {
            args: Prisma.UserSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>
          }
          createMany: {
            args: Prisma.UserSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>[]
          }
          delete: {
            args: Prisma.UserSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>
          }
          update: {
            args: Prisma.UserSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>
          }
          deleteMany: {
            args: Prisma.UserSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>[]
          }
          upsert: {
            args: Prisma.UserSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>
          }
          aggregate: {
            args: Prisma.UserSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSession>
          }
          groupBy: {
            args: Prisma.UserSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSessionCountArgs<ExtArgs>
            result: $Utils.Optional<UserSessionCountAggregateOutputType> | number
          }
        }
      }
      UserDevice: {
        payload: Prisma.$UserDevicePayload<ExtArgs>
        fields: Prisma.UserDeviceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserDeviceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDevicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserDeviceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDevicePayload>
          }
          findFirst: {
            args: Prisma.UserDeviceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDevicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserDeviceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDevicePayload>
          }
          findMany: {
            args: Prisma.UserDeviceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDevicePayload>[]
          }
          create: {
            args: Prisma.UserDeviceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDevicePayload>
          }
          createMany: {
            args: Prisma.UserDeviceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserDeviceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDevicePayload>[]
          }
          delete: {
            args: Prisma.UserDeviceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDevicePayload>
          }
          update: {
            args: Prisma.UserDeviceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDevicePayload>
          }
          deleteMany: {
            args: Prisma.UserDeviceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserDeviceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserDeviceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDevicePayload>[]
          }
          upsert: {
            args: Prisma.UserDeviceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDevicePayload>
          }
          aggregate: {
            args: Prisma.UserDeviceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserDevice>
          }
          groupBy: {
            args: Prisma.UserDeviceGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserDeviceGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserDeviceCountArgs<ExtArgs>
            result: $Utils.Optional<UserDeviceCountAggregateOutputType> | number
          }
        }
      }
      UserRelationship: {
        payload: Prisma.$UserRelationshipPayload<ExtArgs>
        fields: Prisma.UserRelationshipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserRelationshipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRelationshipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserRelationshipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRelationshipPayload>
          }
          findFirst: {
            args: Prisma.UserRelationshipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRelationshipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserRelationshipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRelationshipPayload>
          }
          findMany: {
            args: Prisma.UserRelationshipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRelationshipPayload>[]
          }
          create: {
            args: Prisma.UserRelationshipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRelationshipPayload>
          }
          createMany: {
            args: Prisma.UserRelationshipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserRelationshipCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRelationshipPayload>[]
          }
          delete: {
            args: Prisma.UserRelationshipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRelationshipPayload>
          }
          update: {
            args: Prisma.UserRelationshipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRelationshipPayload>
          }
          deleteMany: {
            args: Prisma.UserRelationshipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserRelationshipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserRelationshipUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRelationshipPayload>[]
          }
          upsert: {
            args: Prisma.UserRelationshipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRelationshipPayload>
          }
          aggregate: {
            args: Prisma.UserRelationshipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserRelationship>
          }
          groupBy: {
            args: Prisma.UserRelationshipGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserRelationshipGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserRelationshipCountArgs<ExtArgs>
            result: $Utils.Optional<UserRelationshipCountAggregateOutputType> | number
          }
        }
      }
      ChatRoom: {
        payload: Prisma.$ChatRoomPayload<ExtArgs>
        fields: Prisma.ChatRoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatRoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatRoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          findFirst: {
            args: Prisma.ChatRoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatRoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          findMany: {
            args: Prisma.ChatRoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>[]
          }
          create: {
            args: Prisma.ChatRoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          createMany: {
            args: Prisma.ChatRoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatRoomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>[]
          }
          delete: {
            args: Prisma.ChatRoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          update: {
            args: Prisma.ChatRoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          deleteMany: {
            args: Prisma.ChatRoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatRoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatRoomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>[]
          }
          upsert: {
            args: Prisma.ChatRoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          aggregate: {
            args: Prisma.ChatRoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatRoom>
          }
          groupBy: {
            args: Prisma.ChatRoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatRoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatRoomCountArgs<ExtArgs>
            result: $Utils.Optional<ChatRoomCountAggregateOutputType> | number
          }
        }
      }
      ChatRoomMember: {
        payload: Prisma.$ChatRoomMemberPayload<ExtArgs>
        fields: Prisma.ChatRoomMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatRoomMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatRoomMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomMemberPayload>
          }
          findFirst: {
            args: Prisma.ChatRoomMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatRoomMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomMemberPayload>
          }
          findMany: {
            args: Prisma.ChatRoomMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomMemberPayload>[]
          }
          create: {
            args: Prisma.ChatRoomMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomMemberPayload>
          }
          createMany: {
            args: Prisma.ChatRoomMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatRoomMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomMemberPayload>[]
          }
          delete: {
            args: Prisma.ChatRoomMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomMemberPayload>
          }
          update: {
            args: Prisma.ChatRoomMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomMemberPayload>
          }
          deleteMany: {
            args: Prisma.ChatRoomMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatRoomMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatRoomMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomMemberPayload>[]
          }
          upsert: {
            args: Prisma.ChatRoomMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomMemberPayload>
          }
          aggregate: {
            args: Prisma.ChatRoomMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatRoomMember>
          }
          groupBy: {
            args: Prisma.ChatRoomMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatRoomMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatRoomMemberCountArgs<ExtArgs>
            result: $Utils.Optional<ChatRoomMemberCountAggregateOutputType> | number
          }
        }
      }
      Attachment: {
        payload: Prisma.$AttachmentPayload<ExtArgs>
        fields: Prisma.AttachmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttachmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttachmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          findFirst: {
            args: Prisma.AttachmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttachmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          findMany: {
            args: Prisma.AttachmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>[]
          }
          create: {
            args: Prisma.AttachmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          createMany: {
            args: Prisma.AttachmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttachmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>[]
          }
          delete: {
            args: Prisma.AttachmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          update: {
            args: Prisma.AttachmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          deleteMany: {
            args: Prisma.AttachmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttachmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttachmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>[]
          }
          upsert: {
            args: Prisma.AttachmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          aggregate: {
            args: Prisma.AttachmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttachment>
          }
          groupBy: {
            args: Prisma.AttachmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttachmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttachmentCountArgs<ExtArgs>
            result: $Utils.Optional<AttachmentCountAggregateOutputType> | number
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
    userSession?: UserSessionOmit
    userDevice?: UserDeviceOmit
    userRelationship?: UserRelationshipOmit
    chatRoom?: ChatRoomOmit
    chatRoomMember?: ChatRoomMemberOmit
    attachment?: AttachmentOmit
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
    sessions: number
    chatRoomMemberships: number
    createdChatRooms: number
    requestedRelationships: number
    receivedRelationships: number
    devices: number
    uploadedFiles: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    chatRoomMemberships?: boolean | UserCountOutputTypeCountChatRoomMembershipsArgs
    createdChatRooms?: boolean | UserCountOutputTypeCountCreatedChatRoomsArgs
    requestedRelationships?: boolean | UserCountOutputTypeCountRequestedRelationshipsArgs
    receivedRelationships?: boolean | UserCountOutputTypeCountReceivedRelationshipsArgs
    devices?: boolean | UserCountOutputTypeCountDevicesArgs
    uploadedFiles?: boolean | UserCountOutputTypeCountUploadedFilesArgs
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
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatRoomMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatRoomMemberWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedChatRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatRoomWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRequestedRelationshipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRelationshipWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedRelationshipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRelationshipWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDevicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserDeviceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUploadedFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttachmentWhereInput
  }


  /**
   * Count Type ChatRoomCountOutputType
   */

  export type ChatRoomCountOutputType = {
    members: number
  }

  export type ChatRoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | ChatRoomCountOutputTypeCountMembersArgs
  }

  // Custom InputTypes
  /**
   * ChatRoomCountOutputType without action
   */
  export type ChatRoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoomCountOutputType
     */
    select?: ChatRoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatRoomCountOutputType without action
   */
  export type ChatRoomCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatRoomMemberWhereInput
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
    id: number | null
    status: number | null
    themePreference: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    status: number | null
    themePreference: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    documentId: string | null
    name: string | null
    email: string | null
    username: string | null
    password: string | null
    profilePictureUrl: string | null
    bio: string | null
    phoneNumber: string | null
    lastActivityDate: Date | null
    status: number | null
    isActive: boolean | null
    isVerified: boolean | null
    themePreference: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    documentId: string | null
    name: string | null
    email: string | null
    username: string | null
    password: string | null
    profilePictureUrl: string | null
    bio: string | null
    phoneNumber: string | null
    lastActivityDate: Date | null
    status: number | null
    isActive: boolean | null
    isVerified: boolean | null
    themePreference: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    documentId: number
    name: number
    email: number
    username: number
    password: number
    profilePictureUrl: number
    bio: number
    phoneNumber: number
    lastActivityDate: number
    status: number
    isActive: number
    isVerified: number
    themePreference: number
    notificationSettings: number
    privacySettings: number
    createdBy: number
    updatedBy: number
    deletedBy: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    status?: true
    themePreference?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    status?: true
    themePreference?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    documentId?: true
    name?: true
    email?: true
    username?: true
    password?: true
    profilePictureUrl?: true
    bio?: true
    phoneNumber?: true
    lastActivityDate?: true
    status?: true
    isActive?: true
    isVerified?: true
    themePreference?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    documentId?: true
    name?: true
    email?: true
    username?: true
    password?: true
    profilePictureUrl?: true
    bio?: true
    phoneNumber?: true
    lastActivityDate?: true
    status?: true
    isActive?: true
    isVerified?: true
    themePreference?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    documentId?: true
    name?: true
    email?: true
    username?: true
    password?: true
    profilePictureUrl?: true
    bio?: true
    phoneNumber?: true
    lastActivityDate?: true
    status?: true
    isActive?: true
    isVerified?: true
    themePreference?: true
    notificationSettings?: true
    privacySettings?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
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
    id: number
    documentId: string
    name: string
    email: string | null
    username: string
    password: string
    profilePictureUrl: string | null
    bio: string | null
    phoneNumber: string | null
    lastActivityDate: Date
    status: number
    isActive: boolean
    isVerified: boolean
    themePreference: number
    notificationSettings: JsonValue
    privacySettings: JsonValue
    createdBy: number
    updatedBy: number
    deletedBy: number
    createdAt: Date
    updatedAt: Date | null
    deletedAt: Date | null
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
    documentId?: boolean
    name?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    profilePictureUrl?: boolean
    bio?: boolean
    phoneNumber?: boolean
    lastActivityDate?: boolean
    status?: boolean
    isActive?: boolean
    isVerified?: boolean
    themePreference?: boolean
    notificationSettings?: boolean
    privacySettings?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    deletedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    chatRoomMemberships?: boolean | User$chatRoomMembershipsArgs<ExtArgs>
    createdChatRooms?: boolean | User$createdChatRoomsArgs<ExtArgs>
    requestedRelationships?: boolean | User$requestedRelationshipsArgs<ExtArgs>
    receivedRelationships?: boolean | User$receivedRelationshipsArgs<ExtArgs>
    devices?: boolean | User$devicesArgs<ExtArgs>
    uploadedFiles?: boolean | User$uploadedFilesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    name?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    profilePictureUrl?: boolean
    bio?: boolean
    phoneNumber?: boolean
    lastActivityDate?: boolean
    status?: boolean
    isActive?: boolean
    isVerified?: boolean
    themePreference?: boolean
    notificationSettings?: boolean
    privacySettings?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    deletedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    name?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    profilePictureUrl?: boolean
    bio?: boolean
    phoneNumber?: boolean
    lastActivityDate?: boolean
    status?: boolean
    isActive?: boolean
    isVerified?: boolean
    themePreference?: boolean
    notificationSettings?: boolean
    privacySettings?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    deletedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    documentId?: boolean
    name?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    profilePictureUrl?: boolean
    bio?: boolean
    phoneNumber?: boolean
    lastActivityDate?: boolean
    status?: boolean
    isActive?: boolean
    isVerified?: boolean
    themePreference?: boolean
    notificationSettings?: boolean
    privacySettings?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    deletedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "documentId" | "name" | "email" | "username" | "password" | "profilePictureUrl" | "bio" | "phoneNumber" | "lastActivityDate" | "status" | "isActive" | "isVerified" | "themePreference" | "notificationSettings" | "privacySettings" | "createdBy" | "updatedBy" | "deletedBy" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    chatRoomMemberships?: boolean | User$chatRoomMembershipsArgs<ExtArgs>
    createdChatRooms?: boolean | User$createdChatRoomsArgs<ExtArgs>
    requestedRelationships?: boolean | User$requestedRelationshipsArgs<ExtArgs>
    receivedRelationships?: boolean | User$receivedRelationshipsArgs<ExtArgs>
    devices?: boolean | User$devicesArgs<ExtArgs>
    uploadedFiles?: boolean | User$uploadedFilesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$UserSessionPayload<ExtArgs>[]
      chatRoomMemberships: Prisma.$ChatRoomMemberPayload<ExtArgs>[]
      createdChatRooms: Prisma.$ChatRoomPayload<ExtArgs>[]
      requestedRelationships: Prisma.$UserRelationshipPayload<ExtArgs>[]
      receivedRelationships: Prisma.$UserRelationshipPayload<ExtArgs>[]
      devices: Prisma.$UserDevicePayload<ExtArgs>[]
      uploadedFiles: Prisma.$AttachmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      documentId: string
      name: string
      email: string | null
      username: string
      password: string
      profilePictureUrl: string | null
      bio: string | null
      phoneNumber: string | null
      lastActivityDate: Date
      status: number
      isActive: boolean
      isVerified: boolean
      themePreference: number
      notificationSettings: Prisma.JsonValue
      privacySettings: Prisma.JsonValue
      createdBy: number
      updatedBy: number
      deletedBy: number
      createdAt: Date
      updatedAt: Date | null
      deletedAt: Date | null
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
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chatRoomMemberships<T extends User$chatRoomMembershipsArgs<ExtArgs> = {}>(args?: Subset<T, User$chatRoomMembershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRoomMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdChatRooms<T extends User$createdChatRoomsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdChatRoomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    requestedRelationships<T extends User$requestedRelationshipsArgs<ExtArgs> = {}>(args?: Subset<T, User$requestedRelationshipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRelationshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedRelationships<T extends User$receivedRelationshipsArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedRelationshipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRelationshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    devices<T extends User$devicesArgs<ExtArgs> = {}>(args?: Subset<T, User$devicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    uploadedFiles<T extends User$uploadedFilesArgs<ExtArgs> = {}>(args?: Subset<T, User$uploadedFilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly documentId: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly profilePictureUrl: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly lastActivityDate: FieldRef<"User", 'DateTime'>
    readonly status: FieldRef<"User", 'Int'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly themePreference: FieldRef<"User", 'Int'>
    readonly notificationSettings: FieldRef<"User", 'Json'>
    readonly privacySettings: FieldRef<"User", 'Json'>
    readonly createdBy: FieldRef<"User", 'Int'>
    readonly updatedBy: FieldRef<"User", 'Int'>
    readonly deletedBy: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
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
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    where?: UserSessionWhereInput
    orderBy?: UserSessionOrderByWithRelationInput | UserSessionOrderByWithRelationInput[]
    cursor?: UserSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSessionScalarFieldEnum | UserSessionScalarFieldEnum[]
  }

  /**
   * User.chatRoomMemberships
   */
  export type User$chatRoomMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoomMember
     */
    select?: ChatRoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoomMember
     */
    omit?: ChatRoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomMemberInclude<ExtArgs> | null
    where?: ChatRoomMemberWhereInput
    orderBy?: ChatRoomMemberOrderByWithRelationInput | ChatRoomMemberOrderByWithRelationInput[]
    cursor?: ChatRoomMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatRoomMemberScalarFieldEnum | ChatRoomMemberScalarFieldEnum[]
  }

  /**
   * User.createdChatRooms
   */
  export type User$createdChatRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    where?: ChatRoomWhereInput
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    cursor?: ChatRoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatRoomScalarFieldEnum | ChatRoomScalarFieldEnum[]
  }

  /**
   * User.requestedRelationships
   */
  export type User$requestedRelationshipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRelationship
     */
    select?: UserRelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRelationship
     */
    omit?: UserRelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRelationshipInclude<ExtArgs> | null
    where?: UserRelationshipWhereInput
    orderBy?: UserRelationshipOrderByWithRelationInput | UserRelationshipOrderByWithRelationInput[]
    cursor?: UserRelationshipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRelationshipScalarFieldEnum | UserRelationshipScalarFieldEnum[]
  }

  /**
   * User.receivedRelationships
   */
  export type User$receivedRelationshipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRelationship
     */
    select?: UserRelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRelationship
     */
    omit?: UserRelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRelationshipInclude<ExtArgs> | null
    where?: UserRelationshipWhereInput
    orderBy?: UserRelationshipOrderByWithRelationInput | UserRelationshipOrderByWithRelationInput[]
    cursor?: UserRelationshipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRelationshipScalarFieldEnum | UserRelationshipScalarFieldEnum[]
  }

  /**
   * User.devices
   */
  export type User$devicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDevice
     */
    select?: UserDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDevice
     */
    omit?: UserDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDeviceInclude<ExtArgs> | null
    where?: UserDeviceWhereInput
    orderBy?: UserDeviceOrderByWithRelationInput | UserDeviceOrderByWithRelationInput[]
    cursor?: UserDeviceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserDeviceScalarFieldEnum | UserDeviceScalarFieldEnum[]
  }

  /**
   * User.uploadedFiles
   */
  export type User$uploadedFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    where?: AttachmentWhereInput
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    cursor?: AttachmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[]
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
   * Model UserSession
   */

  export type AggregateUserSession = {
    _count: UserSessionCountAggregateOutputType | null
    _avg: UserSessionAvgAggregateOutputType | null
    _sum: UserSessionSumAggregateOutputType | null
    _min: UserSessionMinAggregateOutputType | null
    _max: UserSessionMaxAggregateOutputType | null
  }

  export type UserSessionAvgAggregateOutputType = {
    id: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
  }

  export type UserSessionSumAggregateOutputType = {
    id: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
  }

  export type UserSessionMinAggregateOutputType = {
    id: number | null
    documentId: string | null
    userId: string | null
    sessionToken: string | null
    refreshToken: string | null
    ipAddress: string | null
    userAgent: string | null
    isActive: boolean | null
    expiresAt: Date | null
    lastActivityAt: Date | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserSessionMaxAggregateOutputType = {
    id: number | null
    documentId: string | null
    userId: string | null
    sessionToken: string | null
    refreshToken: string | null
    ipAddress: string | null
    userAgent: string | null
    isActive: boolean | null
    expiresAt: Date | null
    lastActivityAt: Date | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserSessionCountAggregateOutputType = {
    id: number
    documentId: number
    userId: number
    sessionToken: number
    refreshToken: number
    deviceInfo: number
    ipAddress: number
    userAgent: number
    isActive: number
    expiresAt: number
    lastActivityAt: number
    createdBy: number
    updatedBy: number
    deletedBy: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type UserSessionAvgAggregateInputType = {
    id?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
  }

  export type UserSessionSumAggregateInputType = {
    id?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
  }

  export type UserSessionMinAggregateInputType = {
    id?: true
    documentId?: true
    userId?: true
    sessionToken?: true
    refreshToken?: true
    ipAddress?: true
    userAgent?: true
    isActive?: true
    expiresAt?: true
    lastActivityAt?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserSessionMaxAggregateInputType = {
    id?: true
    documentId?: true
    userId?: true
    sessionToken?: true
    refreshToken?: true
    ipAddress?: true
    userAgent?: true
    isActive?: true
    expiresAt?: true
    lastActivityAt?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserSessionCountAggregateInputType = {
    id?: true
    documentId?: true
    userId?: true
    sessionToken?: true
    refreshToken?: true
    deviceInfo?: true
    ipAddress?: true
    userAgent?: true
    isActive?: true
    expiresAt?: true
    lastActivityAt?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type UserSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSession to aggregate.
     */
    where?: UserSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSessions to fetch.
     */
    orderBy?: UserSessionOrderByWithRelationInput | UserSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSessions
    **/
    _count?: true | UserSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSessionMaxAggregateInputType
  }

  export type GetUserSessionAggregateType<T extends UserSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSession[P]>
      : GetScalarType<T[P], AggregateUserSession[P]>
  }




  export type UserSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSessionWhereInput
    orderBy?: UserSessionOrderByWithAggregationInput | UserSessionOrderByWithAggregationInput[]
    by: UserSessionScalarFieldEnum[] | UserSessionScalarFieldEnum
    having?: UserSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSessionCountAggregateInputType | true
    _avg?: UserSessionAvgAggregateInputType
    _sum?: UserSessionSumAggregateInputType
    _min?: UserSessionMinAggregateInputType
    _max?: UserSessionMaxAggregateInputType
  }

  export type UserSessionGroupByOutputType = {
    id: number
    documentId: string
    userId: string
    sessionToken: string
    refreshToken: string
    deviceInfo: JsonValue | null
    ipAddress: string | null
    userAgent: string | null
    isActive: boolean
    expiresAt: Date
    lastActivityAt: Date
    createdBy: number
    updatedBy: number
    deletedBy: number
    createdAt: Date
    updatedAt: Date | null
    deletedAt: Date | null
    _count: UserSessionCountAggregateOutputType | null
    _avg: UserSessionAvgAggregateOutputType | null
    _sum: UserSessionSumAggregateOutputType | null
    _min: UserSessionMinAggregateOutputType | null
    _max: UserSessionMaxAggregateOutputType | null
  }

  type GetUserSessionGroupByPayload<T extends UserSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSessionGroupByOutputType[P]>
            : GetScalarType<T[P], UserSessionGroupByOutputType[P]>
        }
      >
    >


  export type UserSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    userId?: boolean
    sessionToken?: boolean
    refreshToken?: boolean
    deviceInfo?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    isActive?: boolean
    expiresAt?: boolean
    lastActivityAt?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    deletedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSession"]>

  export type UserSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    userId?: boolean
    sessionToken?: boolean
    refreshToken?: boolean
    deviceInfo?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    isActive?: boolean
    expiresAt?: boolean
    lastActivityAt?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    deletedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSession"]>

  export type UserSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    userId?: boolean
    sessionToken?: boolean
    refreshToken?: boolean
    deviceInfo?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    isActive?: boolean
    expiresAt?: boolean
    lastActivityAt?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    deletedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSession"]>

  export type UserSessionSelectScalar = {
    id?: boolean
    documentId?: boolean
    userId?: boolean
    sessionToken?: boolean
    refreshToken?: boolean
    deviceInfo?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    isActive?: boolean
    expiresAt?: boolean
    lastActivityAt?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    deletedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type UserSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "documentId" | "userId" | "sessionToken" | "refreshToken" | "deviceInfo" | "ipAddress" | "userAgent" | "isActive" | "expiresAt" | "lastActivityAt" | "createdBy" | "updatedBy" | "deletedBy" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["userSession"]>
  export type UserSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSession"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      documentId: string
      userId: string
      sessionToken: string
      refreshToken: string
      deviceInfo: Prisma.JsonValue | null
      ipAddress: string | null
      userAgent: string | null
      isActive: boolean
      expiresAt: Date
      lastActivityAt: Date
      createdBy: number
      updatedBy: number
      deletedBy: number
      createdAt: Date
      updatedAt: Date | null
      deletedAt: Date | null
    }, ExtArgs["result"]["userSession"]>
    composites: {}
  }

  type UserSessionGetPayload<S extends boolean | null | undefined | UserSessionDefaultArgs> = $Result.GetResult<Prisma.$UserSessionPayload, S>

  type UserSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSessionCountAggregateInputType | true
    }

  export interface UserSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSession'], meta: { name: 'UserSession' } }
    /**
     * Find zero or one UserSession that matches the filter.
     * @param {UserSessionFindUniqueArgs} args - Arguments to find a UserSession
     * @example
     * // Get one UserSession
     * const userSession = await prisma.userSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSessionFindUniqueArgs>(args: SelectSubset<T, UserSessionFindUniqueArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSessionFindUniqueOrThrowArgs} args - Arguments to find a UserSession
     * @example
     * // Get one UserSession
     * const userSession = await prisma.userSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionFindFirstArgs} args - Arguments to find a UserSession
     * @example
     * // Get one UserSession
     * const userSession = await prisma.userSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSessionFindFirstArgs>(args?: SelectSubset<T, UserSessionFindFirstArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionFindFirstOrThrowArgs} args - Arguments to find a UserSession
     * @example
     * // Get one UserSession
     * const userSession = await prisma.userSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSessions
     * const userSessions = await prisma.userSession.findMany()
     * 
     * // Get first 10 UserSessions
     * const userSessions = await prisma.userSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userSessionWithIdOnly = await prisma.userSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserSessionFindManyArgs>(args?: SelectSubset<T, UserSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSession.
     * @param {UserSessionCreateArgs} args - Arguments to create a UserSession.
     * @example
     * // Create one UserSession
     * const UserSession = await prisma.userSession.create({
     *   data: {
     *     // ... data to create a UserSession
     *   }
     * })
     * 
     */
    create<T extends UserSessionCreateArgs>(args: SelectSubset<T, UserSessionCreateArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSessions.
     * @param {UserSessionCreateManyArgs} args - Arguments to create many UserSessions.
     * @example
     * // Create many UserSessions
     * const userSession = await prisma.userSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSessionCreateManyArgs>(args?: SelectSubset<T, UserSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSessions and returns the data saved in the database.
     * @param {UserSessionCreateManyAndReturnArgs} args - Arguments to create many UserSessions.
     * @example
     * // Create many UserSessions
     * const userSession = await prisma.userSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserSessions and only return the `id`
     * const userSessionWithIdOnly = await prisma.userSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, UserSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserSession.
     * @param {UserSessionDeleteArgs} args - Arguments to delete one UserSession.
     * @example
     * // Delete one UserSession
     * const UserSession = await prisma.userSession.delete({
     *   where: {
     *     // ... filter to delete one UserSession
     *   }
     * })
     * 
     */
    delete<T extends UserSessionDeleteArgs>(args: SelectSubset<T, UserSessionDeleteArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSession.
     * @param {UserSessionUpdateArgs} args - Arguments to update one UserSession.
     * @example
     * // Update one UserSession
     * const userSession = await prisma.userSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSessionUpdateArgs>(args: SelectSubset<T, UserSessionUpdateArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSessions.
     * @param {UserSessionDeleteManyArgs} args - Arguments to filter UserSessions to delete.
     * @example
     * // Delete a few UserSessions
     * const { count } = await prisma.userSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSessionDeleteManyArgs>(args?: SelectSubset<T, UserSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSessions
     * const userSession = await prisma.userSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSessionUpdateManyArgs>(args: SelectSubset<T, UserSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSessions and returns the data updated in the database.
     * @param {UserSessionUpdateManyAndReturnArgs} args - Arguments to update many UserSessions.
     * @example
     * // Update many UserSessions
     * const userSession = await prisma.userSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserSessions and only return the `id`
     * const userSessionWithIdOnly = await prisma.userSession.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, UserSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserSession.
     * @param {UserSessionUpsertArgs} args - Arguments to update or create a UserSession.
     * @example
     * // Update or create a UserSession
     * const userSession = await prisma.userSession.upsert({
     *   create: {
     *     // ... data to create a UserSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSession we want to update
     *   }
     * })
     */
    upsert<T extends UserSessionUpsertArgs>(args: SelectSubset<T, UserSessionUpsertArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionCountArgs} args - Arguments to filter UserSessions to count.
     * @example
     * // Count the number of UserSessions
     * const count = await prisma.userSession.count({
     *   where: {
     *     // ... the filter for the UserSessions we want to count
     *   }
     * })
    **/
    count<T extends UserSessionCountArgs>(
      args?: Subset<T, UserSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserSessionAggregateArgs>(args: Subset<T, UserSessionAggregateArgs>): Prisma.PrismaPromise<GetUserSessionAggregateType<T>>

    /**
     * Group by UserSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionGroupByArgs} args - Group by arguments.
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
      T extends UserSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSessionGroupByArgs['orderBy'] }
        : { orderBy?: UserSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSession model
   */
  readonly fields: UserSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the UserSession model
   */
  interface UserSessionFieldRefs {
    readonly id: FieldRef<"UserSession", 'Int'>
    readonly documentId: FieldRef<"UserSession", 'String'>
    readonly userId: FieldRef<"UserSession", 'String'>
    readonly sessionToken: FieldRef<"UserSession", 'String'>
    readonly refreshToken: FieldRef<"UserSession", 'String'>
    readonly deviceInfo: FieldRef<"UserSession", 'Json'>
    readonly ipAddress: FieldRef<"UserSession", 'String'>
    readonly userAgent: FieldRef<"UserSession", 'String'>
    readonly isActive: FieldRef<"UserSession", 'Boolean'>
    readonly expiresAt: FieldRef<"UserSession", 'DateTime'>
    readonly lastActivityAt: FieldRef<"UserSession", 'DateTime'>
    readonly createdBy: FieldRef<"UserSession", 'Int'>
    readonly updatedBy: FieldRef<"UserSession", 'Int'>
    readonly deletedBy: FieldRef<"UserSession", 'Int'>
    readonly createdAt: FieldRef<"UserSession", 'DateTime'>
    readonly updatedAt: FieldRef<"UserSession", 'DateTime'>
    readonly deletedAt: FieldRef<"UserSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserSession findUnique
   */
  export type UserSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * Filter, which UserSession to fetch.
     */
    where: UserSessionWhereUniqueInput
  }

  /**
   * UserSession findUniqueOrThrow
   */
  export type UserSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * Filter, which UserSession to fetch.
     */
    where: UserSessionWhereUniqueInput
  }

  /**
   * UserSession findFirst
   */
  export type UserSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * Filter, which UserSession to fetch.
     */
    where?: UserSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSessions to fetch.
     */
    orderBy?: UserSessionOrderByWithRelationInput | UserSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSessions.
     */
    cursor?: UserSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSessions.
     */
    distinct?: UserSessionScalarFieldEnum | UserSessionScalarFieldEnum[]
  }

  /**
   * UserSession findFirstOrThrow
   */
  export type UserSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * Filter, which UserSession to fetch.
     */
    where?: UserSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSessions to fetch.
     */
    orderBy?: UserSessionOrderByWithRelationInput | UserSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSessions.
     */
    cursor?: UserSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSessions.
     */
    distinct?: UserSessionScalarFieldEnum | UserSessionScalarFieldEnum[]
  }

  /**
   * UserSession findMany
   */
  export type UserSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * Filter, which UserSessions to fetch.
     */
    where?: UserSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSessions to fetch.
     */
    orderBy?: UserSessionOrderByWithRelationInput | UserSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSessions.
     */
    cursor?: UserSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSessions.
     */
    skip?: number
    distinct?: UserSessionScalarFieldEnum | UserSessionScalarFieldEnum[]
  }

  /**
   * UserSession create
   */
  export type UserSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSession.
     */
    data: XOR<UserSessionCreateInput, UserSessionUncheckedCreateInput>
  }

  /**
   * UserSession createMany
   */
  export type UserSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSessions.
     */
    data: UserSessionCreateManyInput | UserSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSession createManyAndReturn
   */
  export type UserSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * The data used to create many UserSessions.
     */
    data: UserSessionCreateManyInput | UserSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSession update
   */
  export type UserSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSession.
     */
    data: XOR<UserSessionUpdateInput, UserSessionUncheckedUpdateInput>
    /**
     * Choose, which UserSession to update.
     */
    where: UserSessionWhereUniqueInput
  }

  /**
   * UserSession updateMany
   */
  export type UserSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSessions.
     */
    data: XOR<UserSessionUpdateManyMutationInput, UserSessionUncheckedUpdateManyInput>
    /**
     * Filter which UserSessions to update
     */
    where?: UserSessionWhereInput
    /**
     * Limit how many UserSessions to update.
     */
    limit?: number
  }

  /**
   * UserSession updateManyAndReturn
   */
  export type UserSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * The data used to update UserSessions.
     */
    data: XOR<UserSessionUpdateManyMutationInput, UserSessionUncheckedUpdateManyInput>
    /**
     * Filter which UserSessions to update
     */
    where?: UserSessionWhereInput
    /**
     * Limit how many UserSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSession upsert
   */
  export type UserSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSession to update in case it exists.
     */
    where: UserSessionWhereUniqueInput
    /**
     * In case the UserSession found by the `where` argument doesn't exist, create a new UserSession with this data.
     */
    create: XOR<UserSessionCreateInput, UserSessionUncheckedCreateInput>
    /**
     * In case the UserSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSessionUpdateInput, UserSessionUncheckedUpdateInput>
  }

  /**
   * UserSession delete
   */
  export type UserSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * Filter which UserSession to delete.
     */
    where: UserSessionWhereUniqueInput
  }

  /**
   * UserSession deleteMany
   */
  export type UserSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSessions to delete
     */
    where?: UserSessionWhereInput
    /**
     * Limit how many UserSessions to delete.
     */
    limit?: number
  }

  /**
   * UserSession without action
   */
  export type UserSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
  }


  /**
   * Model UserDevice
   */

  export type AggregateUserDevice = {
    _count: UserDeviceCountAggregateOutputType | null
    _avg: UserDeviceAvgAggregateOutputType | null
    _sum: UserDeviceSumAggregateOutputType | null
    _min: UserDeviceMinAggregateOutputType | null
    _max: UserDeviceMaxAggregateOutputType | null
  }

  export type UserDeviceAvgAggregateOutputType = {
    id: number | null
    deviceType: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
  }

  export type UserDeviceSumAggregateOutputType = {
    id: number | null
    deviceType: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
  }

  export type UserDeviceMinAggregateOutputType = {
    id: number | null
    documentId: string | null
    userId: string | null
    deviceToken: string | null
    deviceType: number | null
    deviceName: string | null
    appVersion: string | null
    osVersion: string | null
    isActive: boolean | null
    lastUsedAt: Date | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserDeviceMaxAggregateOutputType = {
    id: number | null
    documentId: string | null
    userId: string | null
    deviceToken: string | null
    deviceType: number | null
    deviceName: string | null
    appVersion: string | null
    osVersion: string | null
    isActive: boolean | null
    lastUsedAt: Date | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserDeviceCountAggregateOutputType = {
    id: number
    documentId: number
    userId: number
    deviceToken: number
    deviceType: number
    deviceName: number
    appVersion: number
    osVersion: number
    isActive: number
    lastUsedAt: number
    createdBy: number
    updatedBy: number
    deletedBy: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type UserDeviceAvgAggregateInputType = {
    id?: true
    deviceType?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
  }

  export type UserDeviceSumAggregateInputType = {
    id?: true
    deviceType?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
  }

  export type UserDeviceMinAggregateInputType = {
    id?: true
    documentId?: true
    userId?: true
    deviceToken?: true
    deviceType?: true
    deviceName?: true
    appVersion?: true
    osVersion?: true
    isActive?: true
    lastUsedAt?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserDeviceMaxAggregateInputType = {
    id?: true
    documentId?: true
    userId?: true
    deviceToken?: true
    deviceType?: true
    deviceName?: true
    appVersion?: true
    osVersion?: true
    isActive?: true
    lastUsedAt?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserDeviceCountAggregateInputType = {
    id?: true
    documentId?: true
    userId?: true
    deviceToken?: true
    deviceType?: true
    deviceName?: true
    appVersion?: true
    osVersion?: true
    isActive?: true
    lastUsedAt?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type UserDeviceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserDevice to aggregate.
     */
    where?: UserDeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDevices to fetch.
     */
    orderBy?: UserDeviceOrderByWithRelationInput | UserDeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserDeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDevices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDevices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserDevices
    **/
    _count?: true | UserDeviceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserDeviceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserDeviceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserDeviceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserDeviceMaxAggregateInputType
  }

  export type GetUserDeviceAggregateType<T extends UserDeviceAggregateArgs> = {
        [P in keyof T & keyof AggregateUserDevice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserDevice[P]>
      : GetScalarType<T[P], AggregateUserDevice[P]>
  }




  export type UserDeviceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserDeviceWhereInput
    orderBy?: UserDeviceOrderByWithAggregationInput | UserDeviceOrderByWithAggregationInput[]
    by: UserDeviceScalarFieldEnum[] | UserDeviceScalarFieldEnum
    having?: UserDeviceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserDeviceCountAggregateInputType | true
    _avg?: UserDeviceAvgAggregateInputType
    _sum?: UserDeviceSumAggregateInputType
    _min?: UserDeviceMinAggregateInputType
    _max?: UserDeviceMaxAggregateInputType
  }

  export type UserDeviceGroupByOutputType = {
    id: number
    documentId: string
    userId: string
    deviceToken: string
    deviceType: number
    deviceName: string | null
    appVersion: string | null
    osVersion: string | null
    isActive: boolean
    lastUsedAt: Date
    createdBy: number
    updatedBy: number
    deletedBy: number
    createdAt: Date
    updatedAt: Date | null
    deletedAt: Date | null
    _count: UserDeviceCountAggregateOutputType | null
    _avg: UserDeviceAvgAggregateOutputType | null
    _sum: UserDeviceSumAggregateOutputType | null
    _min: UserDeviceMinAggregateOutputType | null
    _max: UserDeviceMaxAggregateOutputType | null
  }

  type GetUserDeviceGroupByPayload<T extends UserDeviceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserDeviceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserDeviceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserDeviceGroupByOutputType[P]>
            : GetScalarType<T[P], UserDeviceGroupByOutputType[P]>
        }
      >
    >


  export type UserDeviceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    userId?: boolean
    deviceToken?: boolean
    deviceType?: boolean
    deviceName?: boolean
    appVersion?: boolean
    osVersion?: boolean
    isActive?: boolean
    lastUsedAt?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    deletedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userDevice"]>

  export type UserDeviceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    userId?: boolean
    deviceToken?: boolean
    deviceType?: boolean
    deviceName?: boolean
    appVersion?: boolean
    osVersion?: boolean
    isActive?: boolean
    lastUsedAt?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    deletedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userDevice"]>

  export type UserDeviceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    userId?: boolean
    deviceToken?: boolean
    deviceType?: boolean
    deviceName?: boolean
    appVersion?: boolean
    osVersion?: boolean
    isActive?: boolean
    lastUsedAt?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    deletedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userDevice"]>

  export type UserDeviceSelectScalar = {
    id?: boolean
    documentId?: boolean
    userId?: boolean
    deviceToken?: boolean
    deviceType?: boolean
    deviceName?: boolean
    appVersion?: boolean
    osVersion?: boolean
    isActive?: boolean
    lastUsedAt?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    deletedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type UserDeviceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "documentId" | "userId" | "deviceToken" | "deviceType" | "deviceName" | "appVersion" | "osVersion" | "isActive" | "lastUsedAt" | "createdBy" | "updatedBy" | "deletedBy" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["userDevice"]>
  export type UserDeviceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserDeviceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserDeviceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserDevicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserDevice"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      documentId: string
      userId: string
      deviceToken: string
      deviceType: number
      deviceName: string | null
      appVersion: string | null
      osVersion: string | null
      isActive: boolean
      lastUsedAt: Date
      createdBy: number
      updatedBy: number
      deletedBy: number
      createdAt: Date
      updatedAt: Date | null
      deletedAt: Date | null
    }, ExtArgs["result"]["userDevice"]>
    composites: {}
  }

  type UserDeviceGetPayload<S extends boolean | null | undefined | UserDeviceDefaultArgs> = $Result.GetResult<Prisma.$UserDevicePayload, S>

  type UserDeviceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserDeviceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserDeviceCountAggregateInputType | true
    }

  export interface UserDeviceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserDevice'], meta: { name: 'UserDevice' } }
    /**
     * Find zero or one UserDevice that matches the filter.
     * @param {UserDeviceFindUniqueArgs} args - Arguments to find a UserDevice
     * @example
     * // Get one UserDevice
     * const userDevice = await prisma.userDevice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserDeviceFindUniqueArgs>(args: SelectSubset<T, UserDeviceFindUniqueArgs<ExtArgs>>): Prisma__UserDeviceClient<$Result.GetResult<Prisma.$UserDevicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserDevice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserDeviceFindUniqueOrThrowArgs} args - Arguments to find a UserDevice
     * @example
     * // Get one UserDevice
     * const userDevice = await prisma.userDevice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserDeviceFindUniqueOrThrowArgs>(args: SelectSubset<T, UserDeviceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserDeviceClient<$Result.GetResult<Prisma.$UserDevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserDevice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDeviceFindFirstArgs} args - Arguments to find a UserDevice
     * @example
     * // Get one UserDevice
     * const userDevice = await prisma.userDevice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserDeviceFindFirstArgs>(args?: SelectSubset<T, UserDeviceFindFirstArgs<ExtArgs>>): Prisma__UserDeviceClient<$Result.GetResult<Prisma.$UserDevicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserDevice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDeviceFindFirstOrThrowArgs} args - Arguments to find a UserDevice
     * @example
     * // Get one UserDevice
     * const userDevice = await prisma.userDevice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserDeviceFindFirstOrThrowArgs>(args?: SelectSubset<T, UserDeviceFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserDeviceClient<$Result.GetResult<Prisma.$UserDevicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserDevices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDeviceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserDevices
     * const userDevices = await prisma.userDevice.findMany()
     * 
     * // Get first 10 UserDevices
     * const userDevices = await prisma.userDevice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userDeviceWithIdOnly = await prisma.userDevice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserDeviceFindManyArgs>(args?: SelectSubset<T, UserDeviceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserDevice.
     * @param {UserDeviceCreateArgs} args - Arguments to create a UserDevice.
     * @example
     * // Create one UserDevice
     * const UserDevice = await prisma.userDevice.create({
     *   data: {
     *     // ... data to create a UserDevice
     *   }
     * })
     * 
     */
    create<T extends UserDeviceCreateArgs>(args: SelectSubset<T, UserDeviceCreateArgs<ExtArgs>>): Prisma__UserDeviceClient<$Result.GetResult<Prisma.$UserDevicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserDevices.
     * @param {UserDeviceCreateManyArgs} args - Arguments to create many UserDevices.
     * @example
     * // Create many UserDevices
     * const userDevice = await prisma.userDevice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserDeviceCreateManyArgs>(args?: SelectSubset<T, UserDeviceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserDevices and returns the data saved in the database.
     * @param {UserDeviceCreateManyAndReturnArgs} args - Arguments to create many UserDevices.
     * @example
     * // Create many UserDevices
     * const userDevice = await prisma.userDevice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserDevices and only return the `id`
     * const userDeviceWithIdOnly = await prisma.userDevice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserDeviceCreateManyAndReturnArgs>(args?: SelectSubset<T, UserDeviceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDevicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserDevice.
     * @param {UserDeviceDeleteArgs} args - Arguments to delete one UserDevice.
     * @example
     * // Delete one UserDevice
     * const UserDevice = await prisma.userDevice.delete({
     *   where: {
     *     // ... filter to delete one UserDevice
     *   }
     * })
     * 
     */
    delete<T extends UserDeviceDeleteArgs>(args: SelectSubset<T, UserDeviceDeleteArgs<ExtArgs>>): Prisma__UserDeviceClient<$Result.GetResult<Prisma.$UserDevicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserDevice.
     * @param {UserDeviceUpdateArgs} args - Arguments to update one UserDevice.
     * @example
     * // Update one UserDevice
     * const userDevice = await prisma.userDevice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserDeviceUpdateArgs>(args: SelectSubset<T, UserDeviceUpdateArgs<ExtArgs>>): Prisma__UserDeviceClient<$Result.GetResult<Prisma.$UserDevicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserDevices.
     * @param {UserDeviceDeleteManyArgs} args - Arguments to filter UserDevices to delete.
     * @example
     * // Delete a few UserDevices
     * const { count } = await prisma.userDevice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeviceDeleteManyArgs>(args?: SelectSubset<T, UserDeviceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserDevices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDeviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserDevices
     * const userDevice = await prisma.userDevice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserDeviceUpdateManyArgs>(args: SelectSubset<T, UserDeviceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserDevices and returns the data updated in the database.
     * @param {UserDeviceUpdateManyAndReturnArgs} args - Arguments to update many UserDevices.
     * @example
     * // Update many UserDevices
     * const userDevice = await prisma.userDevice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserDevices and only return the `id`
     * const userDeviceWithIdOnly = await prisma.userDevice.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserDeviceUpdateManyAndReturnArgs>(args: SelectSubset<T, UserDeviceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDevicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserDevice.
     * @param {UserDeviceUpsertArgs} args - Arguments to update or create a UserDevice.
     * @example
     * // Update or create a UserDevice
     * const userDevice = await prisma.userDevice.upsert({
     *   create: {
     *     // ... data to create a UserDevice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserDevice we want to update
     *   }
     * })
     */
    upsert<T extends UserDeviceUpsertArgs>(args: SelectSubset<T, UserDeviceUpsertArgs<ExtArgs>>): Prisma__UserDeviceClient<$Result.GetResult<Prisma.$UserDevicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserDevices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDeviceCountArgs} args - Arguments to filter UserDevices to count.
     * @example
     * // Count the number of UserDevices
     * const count = await prisma.userDevice.count({
     *   where: {
     *     // ... the filter for the UserDevices we want to count
     *   }
     * })
    **/
    count<T extends UserDeviceCountArgs>(
      args?: Subset<T, UserDeviceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserDeviceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserDevice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDeviceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserDeviceAggregateArgs>(args: Subset<T, UserDeviceAggregateArgs>): Prisma.PrismaPromise<GetUserDeviceAggregateType<T>>

    /**
     * Group by UserDevice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDeviceGroupByArgs} args - Group by arguments.
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
      T extends UserDeviceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserDeviceGroupByArgs['orderBy'] }
        : { orderBy?: UserDeviceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserDeviceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserDeviceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserDevice model
   */
  readonly fields: UserDeviceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserDevice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserDeviceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the UserDevice model
   */
  interface UserDeviceFieldRefs {
    readonly id: FieldRef<"UserDevice", 'Int'>
    readonly documentId: FieldRef<"UserDevice", 'String'>
    readonly userId: FieldRef<"UserDevice", 'String'>
    readonly deviceToken: FieldRef<"UserDevice", 'String'>
    readonly deviceType: FieldRef<"UserDevice", 'Int'>
    readonly deviceName: FieldRef<"UserDevice", 'String'>
    readonly appVersion: FieldRef<"UserDevice", 'String'>
    readonly osVersion: FieldRef<"UserDevice", 'String'>
    readonly isActive: FieldRef<"UserDevice", 'Boolean'>
    readonly lastUsedAt: FieldRef<"UserDevice", 'DateTime'>
    readonly createdBy: FieldRef<"UserDevice", 'Int'>
    readonly updatedBy: FieldRef<"UserDevice", 'Int'>
    readonly deletedBy: FieldRef<"UserDevice", 'Int'>
    readonly createdAt: FieldRef<"UserDevice", 'DateTime'>
    readonly updatedAt: FieldRef<"UserDevice", 'DateTime'>
    readonly deletedAt: FieldRef<"UserDevice", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserDevice findUnique
   */
  export type UserDeviceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDevice
     */
    select?: UserDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDevice
     */
    omit?: UserDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDeviceInclude<ExtArgs> | null
    /**
     * Filter, which UserDevice to fetch.
     */
    where: UserDeviceWhereUniqueInput
  }

  /**
   * UserDevice findUniqueOrThrow
   */
  export type UserDeviceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDevice
     */
    select?: UserDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDevice
     */
    omit?: UserDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDeviceInclude<ExtArgs> | null
    /**
     * Filter, which UserDevice to fetch.
     */
    where: UserDeviceWhereUniqueInput
  }

  /**
   * UserDevice findFirst
   */
  export type UserDeviceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDevice
     */
    select?: UserDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDevice
     */
    omit?: UserDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDeviceInclude<ExtArgs> | null
    /**
     * Filter, which UserDevice to fetch.
     */
    where?: UserDeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDevices to fetch.
     */
    orderBy?: UserDeviceOrderByWithRelationInput | UserDeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserDevices.
     */
    cursor?: UserDeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDevices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDevices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserDevices.
     */
    distinct?: UserDeviceScalarFieldEnum | UserDeviceScalarFieldEnum[]
  }

  /**
   * UserDevice findFirstOrThrow
   */
  export type UserDeviceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDevice
     */
    select?: UserDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDevice
     */
    omit?: UserDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDeviceInclude<ExtArgs> | null
    /**
     * Filter, which UserDevice to fetch.
     */
    where?: UserDeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDevices to fetch.
     */
    orderBy?: UserDeviceOrderByWithRelationInput | UserDeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserDevices.
     */
    cursor?: UserDeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDevices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDevices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserDevices.
     */
    distinct?: UserDeviceScalarFieldEnum | UserDeviceScalarFieldEnum[]
  }

  /**
   * UserDevice findMany
   */
  export type UserDeviceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDevice
     */
    select?: UserDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDevice
     */
    omit?: UserDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDeviceInclude<ExtArgs> | null
    /**
     * Filter, which UserDevices to fetch.
     */
    where?: UserDeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDevices to fetch.
     */
    orderBy?: UserDeviceOrderByWithRelationInput | UserDeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserDevices.
     */
    cursor?: UserDeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDevices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDevices.
     */
    skip?: number
    distinct?: UserDeviceScalarFieldEnum | UserDeviceScalarFieldEnum[]
  }

  /**
   * UserDevice create
   */
  export type UserDeviceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDevice
     */
    select?: UserDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDevice
     */
    omit?: UserDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDeviceInclude<ExtArgs> | null
    /**
     * The data needed to create a UserDevice.
     */
    data: XOR<UserDeviceCreateInput, UserDeviceUncheckedCreateInput>
  }

  /**
   * UserDevice createMany
   */
  export type UserDeviceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserDevices.
     */
    data: UserDeviceCreateManyInput | UserDeviceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserDevice createManyAndReturn
   */
  export type UserDeviceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDevice
     */
    select?: UserDeviceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserDevice
     */
    omit?: UserDeviceOmit<ExtArgs> | null
    /**
     * The data used to create many UserDevices.
     */
    data: UserDeviceCreateManyInput | UserDeviceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDeviceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserDevice update
   */
  export type UserDeviceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDevice
     */
    select?: UserDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDevice
     */
    omit?: UserDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDeviceInclude<ExtArgs> | null
    /**
     * The data needed to update a UserDevice.
     */
    data: XOR<UserDeviceUpdateInput, UserDeviceUncheckedUpdateInput>
    /**
     * Choose, which UserDevice to update.
     */
    where: UserDeviceWhereUniqueInput
  }

  /**
   * UserDevice updateMany
   */
  export type UserDeviceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserDevices.
     */
    data: XOR<UserDeviceUpdateManyMutationInput, UserDeviceUncheckedUpdateManyInput>
    /**
     * Filter which UserDevices to update
     */
    where?: UserDeviceWhereInput
    /**
     * Limit how many UserDevices to update.
     */
    limit?: number
  }

  /**
   * UserDevice updateManyAndReturn
   */
  export type UserDeviceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDevice
     */
    select?: UserDeviceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserDevice
     */
    omit?: UserDeviceOmit<ExtArgs> | null
    /**
     * The data used to update UserDevices.
     */
    data: XOR<UserDeviceUpdateManyMutationInput, UserDeviceUncheckedUpdateManyInput>
    /**
     * Filter which UserDevices to update
     */
    where?: UserDeviceWhereInput
    /**
     * Limit how many UserDevices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDeviceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserDevice upsert
   */
  export type UserDeviceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDevice
     */
    select?: UserDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDevice
     */
    omit?: UserDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDeviceInclude<ExtArgs> | null
    /**
     * The filter to search for the UserDevice to update in case it exists.
     */
    where: UserDeviceWhereUniqueInput
    /**
     * In case the UserDevice found by the `where` argument doesn't exist, create a new UserDevice with this data.
     */
    create: XOR<UserDeviceCreateInput, UserDeviceUncheckedCreateInput>
    /**
     * In case the UserDevice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserDeviceUpdateInput, UserDeviceUncheckedUpdateInput>
  }

  /**
   * UserDevice delete
   */
  export type UserDeviceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDevice
     */
    select?: UserDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDevice
     */
    omit?: UserDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDeviceInclude<ExtArgs> | null
    /**
     * Filter which UserDevice to delete.
     */
    where: UserDeviceWhereUniqueInput
  }

  /**
   * UserDevice deleteMany
   */
  export type UserDeviceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserDevices to delete
     */
    where?: UserDeviceWhereInput
    /**
     * Limit how many UserDevices to delete.
     */
    limit?: number
  }

  /**
   * UserDevice without action
   */
  export type UserDeviceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDevice
     */
    select?: UserDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDevice
     */
    omit?: UserDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDeviceInclude<ExtArgs> | null
  }


  /**
   * Model UserRelationship
   */

  export type AggregateUserRelationship = {
    _count: UserRelationshipCountAggregateOutputType | null
    _avg: UserRelationshipAvgAggregateOutputType | null
    _sum: UserRelationshipSumAggregateOutputType | null
    _min: UserRelationshipMinAggregateOutputType | null
    _max: UserRelationshipMaxAggregateOutputType | null
  }

  export type UserRelationshipAvgAggregateOutputType = {
    id: number | null
    status: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
  }

  export type UserRelationshipSumAggregateOutputType = {
    id: number | null
    status: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
  }

  export type UserRelationshipMinAggregateOutputType = {
    id: number | null
    documentId: string | null
    requesterId: string | null
    addresseeId: string | null
    status: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserRelationshipMaxAggregateOutputType = {
    id: number | null
    documentId: string | null
    requesterId: string | null
    addresseeId: string | null
    status: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserRelationshipCountAggregateOutputType = {
    id: number
    documentId: number
    requesterId: number
    addresseeId: number
    status: number
    createdBy: number
    updatedBy: number
    deletedBy: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type UserRelationshipAvgAggregateInputType = {
    id?: true
    status?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
  }

  export type UserRelationshipSumAggregateInputType = {
    id?: true
    status?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
  }

  export type UserRelationshipMinAggregateInputType = {
    id?: true
    documentId?: true
    requesterId?: true
    addresseeId?: true
    status?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserRelationshipMaxAggregateInputType = {
    id?: true
    documentId?: true
    requesterId?: true
    addresseeId?: true
    status?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserRelationshipCountAggregateInputType = {
    id?: true
    documentId?: true
    requesterId?: true
    addresseeId?: true
    status?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type UserRelationshipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRelationship to aggregate.
     */
    where?: UserRelationshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRelationships to fetch.
     */
    orderBy?: UserRelationshipOrderByWithRelationInput | UserRelationshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserRelationshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRelationships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRelationships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserRelationships
    **/
    _count?: true | UserRelationshipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserRelationshipAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserRelationshipSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserRelationshipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserRelationshipMaxAggregateInputType
  }

  export type GetUserRelationshipAggregateType<T extends UserRelationshipAggregateArgs> = {
        [P in keyof T & keyof AggregateUserRelationship]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserRelationship[P]>
      : GetScalarType<T[P], AggregateUserRelationship[P]>
  }




  export type UserRelationshipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRelationshipWhereInput
    orderBy?: UserRelationshipOrderByWithAggregationInput | UserRelationshipOrderByWithAggregationInput[]
    by: UserRelationshipScalarFieldEnum[] | UserRelationshipScalarFieldEnum
    having?: UserRelationshipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserRelationshipCountAggregateInputType | true
    _avg?: UserRelationshipAvgAggregateInputType
    _sum?: UserRelationshipSumAggregateInputType
    _min?: UserRelationshipMinAggregateInputType
    _max?: UserRelationshipMaxAggregateInputType
  }

  export type UserRelationshipGroupByOutputType = {
    id: number
    documentId: string
    requesterId: string
    addresseeId: string
    status: number
    createdBy: number
    updatedBy: number
    deletedBy: number
    createdAt: Date
    updatedAt: Date | null
    deletedAt: Date | null
    _count: UserRelationshipCountAggregateOutputType | null
    _avg: UserRelationshipAvgAggregateOutputType | null
    _sum: UserRelationshipSumAggregateOutputType | null
    _min: UserRelationshipMinAggregateOutputType | null
    _max: UserRelationshipMaxAggregateOutputType | null
  }

  type GetUserRelationshipGroupByPayload<T extends UserRelationshipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserRelationshipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserRelationshipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserRelationshipGroupByOutputType[P]>
            : GetScalarType<T[P], UserRelationshipGroupByOutputType[P]>
        }
      >
    >


  export type UserRelationshipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    requesterId?: boolean
    addresseeId?: boolean
    status?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    deletedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    requester?: boolean | UserDefaultArgs<ExtArgs>
    addressee?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRelationship"]>

  export type UserRelationshipSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    requesterId?: boolean
    addresseeId?: boolean
    status?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    deletedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    requester?: boolean | UserDefaultArgs<ExtArgs>
    addressee?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRelationship"]>

  export type UserRelationshipSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    requesterId?: boolean
    addresseeId?: boolean
    status?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    deletedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    requester?: boolean | UserDefaultArgs<ExtArgs>
    addressee?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRelationship"]>

  export type UserRelationshipSelectScalar = {
    id?: boolean
    documentId?: boolean
    requesterId?: boolean
    addresseeId?: boolean
    status?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    deletedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type UserRelationshipOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "documentId" | "requesterId" | "addresseeId" | "status" | "createdBy" | "updatedBy" | "deletedBy" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["userRelationship"]>
  export type UserRelationshipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requester?: boolean | UserDefaultArgs<ExtArgs>
    addressee?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserRelationshipIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requester?: boolean | UserDefaultArgs<ExtArgs>
    addressee?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserRelationshipIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requester?: boolean | UserDefaultArgs<ExtArgs>
    addressee?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserRelationshipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserRelationship"
    objects: {
      requester: Prisma.$UserPayload<ExtArgs>
      addressee: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      documentId: string
      requesterId: string
      addresseeId: string
      status: number
      createdBy: number
      updatedBy: number
      deletedBy: number
      createdAt: Date
      updatedAt: Date | null
      deletedAt: Date | null
    }, ExtArgs["result"]["userRelationship"]>
    composites: {}
  }

  type UserRelationshipGetPayload<S extends boolean | null | undefined | UserRelationshipDefaultArgs> = $Result.GetResult<Prisma.$UserRelationshipPayload, S>

  type UserRelationshipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserRelationshipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserRelationshipCountAggregateInputType | true
    }

  export interface UserRelationshipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserRelationship'], meta: { name: 'UserRelationship' } }
    /**
     * Find zero or one UserRelationship that matches the filter.
     * @param {UserRelationshipFindUniqueArgs} args - Arguments to find a UserRelationship
     * @example
     * // Get one UserRelationship
     * const userRelationship = await prisma.userRelationship.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserRelationshipFindUniqueArgs>(args: SelectSubset<T, UserRelationshipFindUniqueArgs<ExtArgs>>): Prisma__UserRelationshipClient<$Result.GetResult<Prisma.$UserRelationshipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserRelationship that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserRelationshipFindUniqueOrThrowArgs} args - Arguments to find a UserRelationship
     * @example
     * // Get one UserRelationship
     * const userRelationship = await prisma.userRelationship.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserRelationshipFindUniqueOrThrowArgs>(args: SelectSubset<T, UserRelationshipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserRelationshipClient<$Result.GetResult<Prisma.$UserRelationshipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRelationship that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRelationshipFindFirstArgs} args - Arguments to find a UserRelationship
     * @example
     * // Get one UserRelationship
     * const userRelationship = await prisma.userRelationship.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserRelationshipFindFirstArgs>(args?: SelectSubset<T, UserRelationshipFindFirstArgs<ExtArgs>>): Prisma__UserRelationshipClient<$Result.GetResult<Prisma.$UserRelationshipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRelationship that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRelationshipFindFirstOrThrowArgs} args - Arguments to find a UserRelationship
     * @example
     * // Get one UserRelationship
     * const userRelationship = await prisma.userRelationship.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserRelationshipFindFirstOrThrowArgs>(args?: SelectSubset<T, UserRelationshipFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserRelationshipClient<$Result.GetResult<Prisma.$UserRelationshipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserRelationships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRelationshipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserRelationships
     * const userRelationships = await prisma.userRelationship.findMany()
     * 
     * // Get first 10 UserRelationships
     * const userRelationships = await prisma.userRelationship.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userRelationshipWithIdOnly = await prisma.userRelationship.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserRelationshipFindManyArgs>(args?: SelectSubset<T, UserRelationshipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRelationshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserRelationship.
     * @param {UserRelationshipCreateArgs} args - Arguments to create a UserRelationship.
     * @example
     * // Create one UserRelationship
     * const UserRelationship = await prisma.userRelationship.create({
     *   data: {
     *     // ... data to create a UserRelationship
     *   }
     * })
     * 
     */
    create<T extends UserRelationshipCreateArgs>(args: SelectSubset<T, UserRelationshipCreateArgs<ExtArgs>>): Prisma__UserRelationshipClient<$Result.GetResult<Prisma.$UserRelationshipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserRelationships.
     * @param {UserRelationshipCreateManyArgs} args - Arguments to create many UserRelationships.
     * @example
     * // Create many UserRelationships
     * const userRelationship = await prisma.userRelationship.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserRelationshipCreateManyArgs>(args?: SelectSubset<T, UserRelationshipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserRelationships and returns the data saved in the database.
     * @param {UserRelationshipCreateManyAndReturnArgs} args - Arguments to create many UserRelationships.
     * @example
     * // Create many UserRelationships
     * const userRelationship = await prisma.userRelationship.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserRelationships and only return the `id`
     * const userRelationshipWithIdOnly = await prisma.userRelationship.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserRelationshipCreateManyAndReturnArgs>(args?: SelectSubset<T, UserRelationshipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRelationshipPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserRelationship.
     * @param {UserRelationshipDeleteArgs} args - Arguments to delete one UserRelationship.
     * @example
     * // Delete one UserRelationship
     * const UserRelationship = await prisma.userRelationship.delete({
     *   where: {
     *     // ... filter to delete one UserRelationship
     *   }
     * })
     * 
     */
    delete<T extends UserRelationshipDeleteArgs>(args: SelectSubset<T, UserRelationshipDeleteArgs<ExtArgs>>): Prisma__UserRelationshipClient<$Result.GetResult<Prisma.$UserRelationshipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserRelationship.
     * @param {UserRelationshipUpdateArgs} args - Arguments to update one UserRelationship.
     * @example
     * // Update one UserRelationship
     * const userRelationship = await prisma.userRelationship.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserRelationshipUpdateArgs>(args: SelectSubset<T, UserRelationshipUpdateArgs<ExtArgs>>): Prisma__UserRelationshipClient<$Result.GetResult<Prisma.$UserRelationshipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserRelationships.
     * @param {UserRelationshipDeleteManyArgs} args - Arguments to filter UserRelationships to delete.
     * @example
     * // Delete a few UserRelationships
     * const { count } = await prisma.userRelationship.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserRelationshipDeleteManyArgs>(args?: SelectSubset<T, UserRelationshipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRelationships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRelationshipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserRelationships
     * const userRelationship = await prisma.userRelationship.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserRelationshipUpdateManyArgs>(args: SelectSubset<T, UserRelationshipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRelationships and returns the data updated in the database.
     * @param {UserRelationshipUpdateManyAndReturnArgs} args - Arguments to update many UserRelationships.
     * @example
     * // Update many UserRelationships
     * const userRelationship = await prisma.userRelationship.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserRelationships and only return the `id`
     * const userRelationshipWithIdOnly = await prisma.userRelationship.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserRelationshipUpdateManyAndReturnArgs>(args: SelectSubset<T, UserRelationshipUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRelationshipPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserRelationship.
     * @param {UserRelationshipUpsertArgs} args - Arguments to update or create a UserRelationship.
     * @example
     * // Update or create a UserRelationship
     * const userRelationship = await prisma.userRelationship.upsert({
     *   create: {
     *     // ... data to create a UserRelationship
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserRelationship we want to update
     *   }
     * })
     */
    upsert<T extends UserRelationshipUpsertArgs>(args: SelectSubset<T, UserRelationshipUpsertArgs<ExtArgs>>): Prisma__UserRelationshipClient<$Result.GetResult<Prisma.$UserRelationshipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserRelationships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRelationshipCountArgs} args - Arguments to filter UserRelationships to count.
     * @example
     * // Count the number of UserRelationships
     * const count = await prisma.userRelationship.count({
     *   where: {
     *     // ... the filter for the UserRelationships we want to count
     *   }
     * })
    **/
    count<T extends UserRelationshipCountArgs>(
      args?: Subset<T, UserRelationshipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserRelationshipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserRelationship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRelationshipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserRelationshipAggregateArgs>(args: Subset<T, UserRelationshipAggregateArgs>): Prisma.PrismaPromise<GetUserRelationshipAggregateType<T>>

    /**
     * Group by UserRelationship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRelationshipGroupByArgs} args - Group by arguments.
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
      T extends UserRelationshipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserRelationshipGroupByArgs['orderBy'] }
        : { orderBy?: UserRelationshipGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserRelationshipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserRelationshipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserRelationship model
   */
  readonly fields: UserRelationshipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserRelationship.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserRelationshipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    requester<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    addressee<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserRelationship model
   */
  interface UserRelationshipFieldRefs {
    readonly id: FieldRef<"UserRelationship", 'Int'>
    readonly documentId: FieldRef<"UserRelationship", 'String'>
    readonly requesterId: FieldRef<"UserRelationship", 'String'>
    readonly addresseeId: FieldRef<"UserRelationship", 'String'>
    readonly status: FieldRef<"UserRelationship", 'Int'>
    readonly createdBy: FieldRef<"UserRelationship", 'Int'>
    readonly updatedBy: FieldRef<"UserRelationship", 'Int'>
    readonly deletedBy: FieldRef<"UserRelationship", 'Int'>
    readonly createdAt: FieldRef<"UserRelationship", 'DateTime'>
    readonly updatedAt: FieldRef<"UserRelationship", 'DateTime'>
    readonly deletedAt: FieldRef<"UserRelationship", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserRelationship findUnique
   */
  export type UserRelationshipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRelationship
     */
    select?: UserRelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRelationship
     */
    omit?: UserRelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRelationshipInclude<ExtArgs> | null
    /**
     * Filter, which UserRelationship to fetch.
     */
    where: UserRelationshipWhereUniqueInput
  }

  /**
   * UserRelationship findUniqueOrThrow
   */
  export type UserRelationshipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRelationship
     */
    select?: UserRelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRelationship
     */
    omit?: UserRelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRelationshipInclude<ExtArgs> | null
    /**
     * Filter, which UserRelationship to fetch.
     */
    where: UserRelationshipWhereUniqueInput
  }

  /**
   * UserRelationship findFirst
   */
  export type UserRelationshipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRelationship
     */
    select?: UserRelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRelationship
     */
    omit?: UserRelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRelationshipInclude<ExtArgs> | null
    /**
     * Filter, which UserRelationship to fetch.
     */
    where?: UserRelationshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRelationships to fetch.
     */
    orderBy?: UserRelationshipOrderByWithRelationInput | UserRelationshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRelationships.
     */
    cursor?: UserRelationshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRelationships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRelationships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRelationships.
     */
    distinct?: UserRelationshipScalarFieldEnum | UserRelationshipScalarFieldEnum[]
  }

  /**
   * UserRelationship findFirstOrThrow
   */
  export type UserRelationshipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRelationship
     */
    select?: UserRelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRelationship
     */
    omit?: UserRelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRelationshipInclude<ExtArgs> | null
    /**
     * Filter, which UserRelationship to fetch.
     */
    where?: UserRelationshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRelationships to fetch.
     */
    orderBy?: UserRelationshipOrderByWithRelationInput | UserRelationshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRelationships.
     */
    cursor?: UserRelationshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRelationships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRelationships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRelationships.
     */
    distinct?: UserRelationshipScalarFieldEnum | UserRelationshipScalarFieldEnum[]
  }

  /**
   * UserRelationship findMany
   */
  export type UserRelationshipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRelationship
     */
    select?: UserRelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRelationship
     */
    omit?: UserRelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRelationshipInclude<ExtArgs> | null
    /**
     * Filter, which UserRelationships to fetch.
     */
    where?: UserRelationshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRelationships to fetch.
     */
    orderBy?: UserRelationshipOrderByWithRelationInput | UserRelationshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserRelationships.
     */
    cursor?: UserRelationshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRelationships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRelationships.
     */
    skip?: number
    distinct?: UserRelationshipScalarFieldEnum | UserRelationshipScalarFieldEnum[]
  }

  /**
   * UserRelationship create
   */
  export type UserRelationshipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRelationship
     */
    select?: UserRelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRelationship
     */
    omit?: UserRelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRelationshipInclude<ExtArgs> | null
    /**
     * The data needed to create a UserRelationship.
     */
    data: XOR<UserRelationshipCreateInput, UserRelationshipUncheckedCreateInput>
  }

  /**
   * UserRelationship createMany
   */
  export type UserRelationshipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserRelationships.
     */
    data: UserRelationshipCreateManyInput | UserRelationshipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserRelationship createManyAndReturn
   */
  export type UserRelationshipCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRelationship
     */
    select?: UserRelationshipSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserRelationship
     */
    omit?: UserRelationshipOmit<ExtArgs> | null
    /**
     * The data used to create many UserRelationships.
     */
    data: UserRelationshipCreateManyInput | UserRelationshipCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRelationshipIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserRelationship update
   */
  export type UserRelationshipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRelationship
     */
    select?: UserRelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRelationship
     */
    omit?: UserRelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRelationshipInclude<ExtArgs> | null
    /**
     * The data needed to update a UserRelationship.
     */
    data: XOR<UserRelationshipUpdateInput, UserRelationshipUncheckedUpdateInput>
    /**
     * Choose, which UserRelationship to update.
     */
    where: UserRelationshipWhereUniqueInput
  }

  /**
   * UserRelationship updateMany
   */
  export type UserRelationshipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserRelationships.
     */
    data: XOR<UserRelationshipUpdateManyMutationInput, UserRelationshipUncheckedUpdateManyInput>
    /**
     * Filter which UserRelationships to update
     */
    where?: UserRelationshipWhereInput
    /**
     * Limit how many UserRelationships to update.
     */
    limit?: number
  }

  /**
   * UserRelationship updateManyAndReturn
   */
  export type UserRelationshipUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRelationship
     */
    select?: UserRelationshipSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserRelationship
     */
    omit?: UserRelationshipOmit<ExtArgs> | null
    /**
     * The data used to update UserRelationships.
     */
    data: XOR<UserRelationshipUpdateManyMutationInput, UserRelationshipUncheckedUpdateManyInput>
    /**
     * Filter which UserRelationships to update
     */
    where?: UserRelationshipWhereInput
    /**
     * Limit how many UserRelationships to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRelationshipIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserRelationship upsert
   */
  export type UserRelationshipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRelationship
     */
    select?: UserRelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRelationship
     */
    omit?: UserRelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRelationshipInclude<ExtArgs> | null
    /**
     * The filter to search for the UserRelationship to update in case it exists.
     */
    where: UserRelationshipWhereUniqueInput
    /**
     * In case the UserRelationship found by the `where` argument doesn't exist, create a new UserRelationship with this data.
     */
    create: XOR<UserRelationshipCreateInput, UserRelationshipUncheckedCreateInput>
    /**
     * In case the UserRelationship was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserRelationshipUpdateInput, UserRelationshipUncheckedUpdateInput>
  }

  /**
   * UserRelationship delete
   */
  export type UserRelationshipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRelationship
     */
    select?: UserRelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRelationship
     */
    omit?: UserRelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRelationshipInclude<ExtArgs> | null
    /**
     * Filter which UserRelationship to delete.
     */
    where: UserRelationshipWhereUniqueInput
  }

  /**
   * UserRelationship deleteMany
   */
  export type UserRelationshipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRelationships to delete
     */
    where?: UserRelationshipWhereInput
    /**
     * Limit how many UserRelationships to delete.
     */
    limit?: number
  }

  /**
   * UserRelationship without action
   */
  export type UserRelationshipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRelationship
     */
    select?: UserRelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRelationship
     */
    omit?: UserRelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRelationshipInclude<ExtArgs> | null
  }


  /**
   * Model ChatRoom
   */

  export type AggregateChatRoom = {
    _count: ChatRoomCountAggregateOutputType | null
    _avg: ChatRoomAvgAggregateOutputType | null
    _sum: ChatRoomSumAggregateOutputType | null
    _min: ChatRoomMinAggregateOutputType | null
    _max: ChatRoomMaxAggregateOutputType | null
  }

  export type ChatRoomAvgAggregateOutputType = {
    id: number | null
    type: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
  }

  export type ChatRoomSumAggregateOutputType = {
    id: bigint | null
    type: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
  }

  export type ChatRoomMinAggregateOutputType = {
    id: bigint | null
    documentId: string | null
    name: string | null
    type: number | null
    description: string | null
    lastMessageDate: Date | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ChatRoomMaxAggregateOutputType = {
    id: bigint | null
    documentId: string | null
    name: string | null
    type: number | null
    description: string | null
    lastMessageDate: Date | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ChatRoomCountAggregateOutputType = {
    id: number
    documentId: number
    name: number
    type: number
    description: number
    lastMessageDate: number
    createdBy: number
    updatedBy: number
    deletedBy: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type ChatRoomAvgAggregateInputType = {
    id?: true
    type?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
  }

  export type ChatRoomSumAggregateInputType = {
    id?: true
    type?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
  }

  export type ChatRoomMinAggregateInputType = {
    id?: true
    documentId?: true
    name?: true
    type?: true
    description?: true
    lastMessageDate?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ChatRoomMaxAggregateInputType = {
    id?: true
    documentId?: true
    name?: true
    type?: true
    description?: true
    lastMessageDate?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ChatRoomCountAggregateInputType = {
    id?: true
    documentId?: true
    name?: true
    type?: true
    description?: true
    lastMessageDate?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type ChatRoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatRoom to aggregate.
     */
    where?: ChatRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRooms to fetch.
     */
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatRooms
    **/
    _count?: true | ChatRoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatRoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatRoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatRoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatRoomMaxAggregateInputType
  }

  export type GetChatRoomAggregateType<T extends ChatRoomAggregateArgs> = {
        [P in keyof T & keyof AggregateChatRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatRoom[P]>
      : GetScalarType<T[P], AggregateChatRoom[P]>
  }




  export type ChatRoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatRoomWhereInput
    orderBy?: ChatRoomOrderByWithAggregationInput | ChatRoomOrderByWithAggregationInput[]
    by: ChatRoomScalarFieldEnum[] | ChatRoomScalarFieldEnum
    having?: ChatRoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatRoomCountAggregateInputType | true
    _avg?: ChatRoomAvgAggregateInputType
    _sum?: ChatRoomSumAggregateInputType
    _min?: ChatRoomMinAggregateInputType
    _max?: ChatRoomMaxAggregateInputType
  }

  export type ChatRoomGroupByOutputType = {
    id: bigint
    documentId: string
    name: string
    type: number
    description: string | null
    lastMessageDate: Date
    createdBy: number
    updatedBy: number
    deletedBy: number
    createdAt: Date
    updatedAt: Date | null
    deletedAt: Date | null
    _count: ChatRoomCountAggregateOutputType | null
    _avg: ChatRoomAvgAggregateOutputType | null
    _sum: ChatRoomSumAggregateOutputType | null
    _min: ChatRoomMinAggregateOutputType | null
    _max: ChatRoomMaxAggregateOutputType | null
  }

  type GetChatRoomGroupByPayload<T extends ChatRoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatRoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatRoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatRoomGroupByOutputType[P]>
            : GetScalarType<T[P], ChatRoomGroupByOutputType[P]>
        }
      >
    >


  export type ChatRoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    name?: boolean
    type?: boolean
    description?: boolean
    lastMessageDate?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    deletedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    members?: boolean | ChatRoom$membersArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | ChatRoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatRoom"]>

  export type ChatRoomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    name?: boolean
    type?: boolean
    description?: boolean
    lastMessageDate?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    deletedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatRoom"]>

  export type ChatRoomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    name?: boolean
    type?: boolean
    description?: boolean
    lastMessageDate?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    deletedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatRoom"]>

  export type ChatRoomSelectScalar = {
    id?: boolean
    documentId?: boolean
    name?: boolean
    type?: boolean
    description?: boolean
    lastMessageDate?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    deletedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type ChatRoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "documentId" | "name" | "type" | "description" | "lastMessageDate" | "createdBy" | "updatedBy" | "deletedBy" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["chatRoom"]>
  export type ChatRoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | ChatRoom$membersArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | ChatRoomCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChatRoomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatRoomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChatRoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatRoom"
    objects: {
      members: Prisma.$ChatRoomMemberPayload<ExtArgs>[]
      creator: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      documentId: string
      name: string
      type: number
      description: string | null
      lastMessageDate: Date
      createdBy: number
      updatedBy: number
      deletedBy: number
      createdAt: Date
      updatedAt: Date | null
      deletedAt: Date | null
    }, ExtArgs["result"]["chatRoom"]>
    composites: {}
  }

  type ChatRoomGetPayload<S extends boolean | null | undefined | ChatRoomDefaultArgs> = $Result.GetResult<Prisma.$ChatRoomPayload, S>

  type ChatRoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatRoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatRoomCountAggregateInputType | true
    }

  export interface ChatRoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatRoom'], meta: { name: 'ChatRoom' } }
    /**
     * Find zero or one ChatRoom that matches the filter.
     * @param {ChatRoomFindUniqueArgs} args - Arguments to find a ChatRoom
     * @example
     * // Get one ChatRoom
     * const chatRoom = await prisma.chatRoom.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatRoomFindUniqueArgs>(args: SelectSubset<T, ChatRoomFindUniqueArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatRoom that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatRoomFindUniqueOrThrowArgs} args - Arguments to find a ChatRoom
     * @example
     * // Get one ChatRoom
     * const chatRoom = await prisma.chatRoom.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatRoomFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatRoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatRoom that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomFindFirstArgs} args - Arguments to find a ChatRoom
     * @example
     * // Get one ChatRoom
     * const chatRoom = await prisma.chatRoom.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatRoomFindFirstArgs>(args?: SelectSubset<T, ChatRoomFindFirstArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatRoom that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomFindFirstOrThrowArgs} args - Arguments to find a ChatRoom
     * @example
     * // Get one ChatRoom
     * const chatRoom = await prisma.chatRoom.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatRoomFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatRoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatRooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatRooms
     * const chatRooms = await prisma.chatRoom.findMany()
     * 
     * // Get first 10 ChatRooms
     * const chatRooms = await prisma.chatRoom.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatRoomWithIdOnly = await prisma.chatRoom.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatRoomFindManyArgs>(args?: SelectSubset<T, ChatRoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatRoom.
     * @param {ChatRoomCreateArgs} args - Arguments to create a ChatRoom.
     * @example
     * // Create one ChatRoom
     * const ChatRoom = await prisma.chatRoom.create({
     *   data: {
     *     // ... data to create a ChatRoom
     *   }
     * })
     * 
     */
    create<T extends ChatRoomCreateArgs>(args: SelectSubset<T, ChatRoomCreateArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatRooms.
     * @param {ChatRoomCreateManyArgs} args - Arguments to create many ChatRooms.
     * @example
     * // Create many ChatRooms
     * const chatRoom = await prisma.chatRoom.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatRoomCreateManyArgs>(args?: SelectSubset<T, ChatRoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatRooms and returns the data saved in the database.
     * @param {ChatRoomCreateManyAndReturnArgs} args - Arguments to create many ChatRooms.
     * @example
     * // Create many ChatRooms
     * const chatRoom = await prisma.chatRoom.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatRooms and only return the `id`
     * const chatRoomWithIdOnly = await prisma.chatRoom.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatRoomCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatRoomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatRoom.
     * @param {ChatRoomDeleteArgs} args - Arguments to delete one ChatRoom.
     * @example
     * // Delete one ChatRoom
     * const ChatRoom = await prisma.chatRoom.delete({
     *   where: {
     *     // ... filter to delete one ChatRoom
     *   }
     * })
     * 
     */
    delete<T extends ChatRoomDeleteArgs>(args: SelectSubset<T, ChatRoomDeleteArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatRoom.
     * @param {ChatRoomUpdateArgs} args - Arguments to update one ChatRoom.
     * @example
     * // Update one ChatRoom
     * const chatRoom = await prisma.chatRoom.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatRoomUpdateArgs>(args: SelectSubset<T, ChatRoomUpdateArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatRooms.
     * @param {ChatRoomDeleteManyArgs} args - Arguments to filter ChatRooms to delete.
     * @example
     * // Delete a few ChatRooms
     * const { count } = await prisma.chatRoom.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatRoomDeleteManyArgs>(args?: SelectSubset<T, ChatRoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatRooms
     * const chatRoom = await prisma.chatRoom.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatRoomUpdateManyArgs>(args: SelectSubset<T, ChatRoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatRooms and returns the data updated in the database.
     * @param {ChatRoomUpdateManyAndReturnArgs} args - Arguments to update many ChatRooms.
     * @example
     * // Update many ChatRooms
     * const chatRoom = await prisma.chatRoom.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatRooms and only return the `id`
     * const chatRoomWithIdOnly = await prisma.chatRoom.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChatRoomUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatRoomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatRoom.
     * @param {ChatRoomUpsertArgs} args - Arguments to update or create a ChatRoom.
     * @example
     * // Update or create a ChatRoom
     * const chatRoom = await prisma.chatRoom.upsert({
     *   create: {
     *     // ... data to create a ChatRoom
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatRoom we want to update
     *   }
     * })
     */
    upsert<T extends ChatRoomUpsertArgs>(args: SelectSubset<T, ChatRoomUpsertArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomCountArgs} args - Arguments to filter ChatRooms to count.
     * @example
     * // Count the number of ChatRooms
     * const count = await prisma.chatRoom.count({
     *   where: {
     *     // ... the filter for the ChatRooms we want to count
     *   }
     * })
    **/
    count<T extends ChatRoomCountArgs>(
      args?: Subset<T, ChatRoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatRoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatRoomAggregateArgs>(args: Subset<T, ChatRoomAggregateArgs>): Prisma.PrismaPromise<GetChatRoomAggregateType<T>>

    /**
     * Group by ChatRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomGroupByArgs} args - Group by arguments.
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
      T extends ChatRoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatRoomGroupByArgs['orderBy'] }
        : { orderBy?: ChatRoomGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatRoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatRoom model
   */
  readonly fields: ChatRoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatRoom.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatRoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    members<T extends ChatRoom$membersArgs<ExtArgs> = {}>(args?: Subset<T, ChatRoom$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRoomMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ChatRoom model
   */
  interface ChatRoomFieldRefs {
    readonly id: FieldRef<"ChatRoom", 'BigInt'>
    readonly documentId: FieldRef<"ChatRoom", 'String'>
    readonly name: FieldRef<"ChatRoom", 'String'>
    readonly type: FieldRef<"ChatRoom", 'Int'>
    readonly description: FieldRef<"ChatRoom", 'String'>
    readonly lastMessageDate: FieldRef<"ChatRoom", 'DateTime'>
    readonly createdBy: FieldRef<"ChatRoom", 'Int'>
    readonly updatedBy: FieldRef<"ChatRoom", 'Int'>
    readonly deletedBy: FieldRef<"ChatRoom", 'Int'>
    readonly createdAt: FieldRef<"ChatRoom", 'DateTime'>
    readonly updatedAt: FieldRef<"ChatRoom", 'DateTime'>
    readonly deletedAt: FieldRef<"ChatRoom", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatRoom findUnique
   */
  export type ChatRoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which ChatRoom to fetch.
     */
    where: ChatRoomWhereUniqueInput
  }

  /**
   * ChatRoom findUniqueOrThrow
   */
  export type ChatRoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which ChatRoom to fetch.
     */
    where: ChatRoomWhereUniqueInput
  }

  /**
   * ChatRoom findFirst
   */
  export type ChatRoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which ChatRoom to fetch.
     */
    where?: ChatRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRooms to fetch.
     */
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatRooms.
     */
    cursor?: ChatRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatRooms.
     */
    distinct?: ChatRoomScalarFieldEnum | ChatRoomScalarFieldEnum[]
  }

  /**
   * ChatRoom findFirstOrThrow
   */
  export type ChatRoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which ChatRoom to fetch.
     */
    where?: ChatRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRooms to fetch.
     */
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatRooms.
     */
    cursor?: ChatRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatRooms.
     */
    distinct?: ChatRoomScalarFieldEnum | ChatRoomScalarFieldEnum[]
  }

  /**
   * ChatRoom findMany
   */
  export type ChatRoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which ChatRooms to fetch.
     */
    where?: ChatRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRooms to fetch.
     */
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatRooms.
     */
    cursor?: ChatRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRooms.
     */
    skip?: number
    distinct?: ChatRoomScalarFieldEnum | ChatRoomScalarFieldEnum[]
  }

  /**
   * ChatRoom create
   */
  export type ChatRoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatRoom.
     */
    data: XOR<ChatRoomCreateInput, ChatRoomUncheckedCreateInput>
  }

  /**
   * ChatRoom createMany
   */
  export type ChatRoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatRooms.
     */
    data: ChatRoomCreateManyInput | ChatRoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatRoom createManyAndReturn
   */
  export type ChatRoomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * The data used to create many ChatRooms.
     */
    data: ChatRoomCreateManyInput | ChatRoomCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatRoom update
   */
  export type ChatRoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatRoom.
     */
    data: XOR<ChatRoomUpdateInput, ChatRoomUncheckedUpdateInput>
    /**
     * Choose, which ChatRoom to update.
     */
    where: ChatRoomWhereUniqueInput
  }

  /**
   * ChatRoom updateMany
   */
  export type ChatRoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatRooms.
     */
    data: XOR<ChatRoomUpdateManyMutationInput, ChatRoomUncheckedUpdateManyInput>
    /**
     * Filter which ChatRooms to update
     */
    where?: ChatRoomWhereInput
    /**
     * Limit how many ChatRooms to update.
     */
    limit?: number
  }

  /**
   * ChatRoom updateManyAndReturn
   */
  export type ChatRoomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * The data used to update ChatRooms.
     */
    data: XOR<ChatRoomUpdateManyMutationInput, ChatRoomUncheckedUpdateManyInput>
    /**
     * Filter which ChatRooms to update
     */
    where?: ChatRoomWhereInput
    /**
     * Limit how many ChatRooms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatRoom upsert
   */
  export type ChatRoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatRoom to update in case it exists.
     */
    where: ChatRoomWhereUniqueInput
    /**
     * In case the ChatRoom found by the `where` argument doesn't exist, create a new ChatRoom with this data.
     */
    create: XOR<ChatRoomCreateInput, ChatRoomUncheckedCreateInput>
    /**
     * In case the ChatRoom was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatRoomUpdateInput, ChatRoomUncheckedUpdateInput>
  }

  /**
   * ChatRoom delete
   */
  export type ChatRoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter which ChatRoom to delete.
     */
    where: ChatRoomWhereUniqueInput
  }

  /**
   * ChatRoom deleteMany
   */
  export type ChatRoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatRooms to delete
     */
    where?: ChatRoomWhereInput
    /**
     * Limit how many ChatRooms to delete.
     */
    limit?: number
  }

  /**
   * ChatRoom.members
   */
  export type ChatRoom$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoomMember
     */
    select?: ChatRoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoomMember
     */
    omit?: ChatRoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomMemberInclude<ExtArgs> | null
    where?: ChatRoomMemberWhereInput
    orderBy?: ChatRoomMemberOrderByWithRelationInput | ChatRoomMemberOrderByWithRelationInput[]
    cursor?: ChatRoomMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatRoomMemberScalarFieldEnum | ChatRoomMemberScalarFieldEnum[]
  }

  /**
   * ChatRoom without action
   */
  export type ChatRoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
  }


  /**
   * Model ChatRoomMember
   */

  export type AggregateChatRoomMember = {
    _count: ChatRoomMemberCountAggregateOutputType | null
    _avg: ChatRoomMemberAvgAggregateOutputType | null
    _sum: ChatRoomMemberSumAggregateOutputType | null
    _min: ChatRoomMemberMinAggregateOutputType | null
    _max: ChatRoomMemberMaxAggregateOutputType | null
  }

  export type ChatRoomMemberAvgAggregateOutputType = {
    id: number | null
    role: number | null
    unreadMessagesCount: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
  }

  export type ChatRoomMemberSumAggregateOutputType = {
    id: bigint | null
    role: number | null
    unreadMessagesCount: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
  }

  export type ChatRoomMemberMinAggregateOutputType = {
    id: bigint | null
    documentId: string | null
    chatRoomId: string | null
    userId: string | null
    isMuted: boolean | null
    isArchived: boolean | null
    isBanned: boolean | null
    lastReadMessageId: string | null
    role: number | null
    leftAt: Date | null
    unreadMessagesCount: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ChatRoomMemberMaxAggregateOutputType = {
    id: bigint | null
    documentId: string | null
    chatRoomId: string | null
    userId: string | null
    isMuted: boolean | null
    isArchived: boolean | null
    isBanned: boolean | null
    lastReadMessageId: string | null
    role: number | null
    leftAt: Date | null
    unreadMessagesCount: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ChatRoomMemberCountAggregateOutputType = {
    id: number
    documentId: number
    chatRoomId: number
    userId: number
    isMuted: number
    isArchived: number
    isBanned: number
    lastReadMessageId: number
    role: number
    leftAt: number
    unreadMessagesCount: number
    permissions: number
    createdBy: number
    updatedBy: number
    deletedBy: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type ChatRoomMemberAvgAggregateInputType = {
    id?: true
    role?: true
    unreadMessagesCount?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
  }

  export type ChatRoomMemberSumAggregateInputType = {
    id?: true
    role?: true
    unreadMessagesCount?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
  }

  export type ChatRoomMemberMinAggregateInputType = {
    id?: true
    documentId?: true
    chatRoomId?: true
    userId?: true
    isMuted?: true
    isArchived?: true
    isBanned?: true
    lastReadMessageId?: true
    role?: true
    leftAt?: true
    unreadMessagesCount?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ChatRoomMemberMaxAggregateInputType = {
    id?: true
    documentId?: true
    chatRoomId?: true
    userId?: true
    isMuted?: true
    isArchived?: true
    isBanned?: true
    lastReadMessageId?: true
    role?: true
    leftAt?: true
    unreadMessagesCount?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ChatRoomMemberCountAggregateInputType = {
    id?: true
    documentId?: true
    chatRoomId?: true
    userId?: true
    isMuted?: true
    isArchived?: true
    isBanned?: true
    lastReadMessageId?: true
    role?: true
    leftAt?: true
    unreadMessagesCount?: true
    permissions?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type ChatRoomMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatRoomMember to aggregate.
     */
    where?: ChatRoomMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRoomMembers to fetch.
     */
    orderBy?: ChatRoomMemberOrderByWithRelationInput | ChatRoomMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatRoomMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRoomMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRoomMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatRoomMembers
    **/
    _count?: true | ChatRoomMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatRoomMemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatRoomMemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatRoomMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatRoomMemberMaxAggregateInputType
  }

  export type GetChatRoomMemberAggregateType<T extends ChatRoomMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateChatRoomMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatRoomMember[P]>
      : GetScalarType<T[P], AggregateChatRoomMember[P]>
  }




  export type ChatRoomMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatRoomMemberWhereInput
    orderBy?: ChatRoomMemberOrderByWithAggregationInput | ChatRoomMemberOrderByWithAggregationInput[]
    by: ChatRoomMemberScalarFieldEnum[] | ChatRoomMemberScalarFieldEnum
    having?: ChatRoomMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatRoomMemberCountAggregateInputType | true
    _avg?: ChatRoomMemberAvgAggregateInputType
    _sum?: ChatRoomMemberSumAggregateInputType
    _min?: ChatRoomMemberMinAggregateInputType
    _max?: ChatRoomMemberMaxAggregateInputType
  }

  export type ChatRoomMemberGroupByOutputType = {
    id: bigint
    documentId: string
    chatRoomId: string
    userId: string
    isMuted: boolean
    isArchived: boolean
    isBanned: boolean
    lastReadMessageId: string
    role: number
    leftAt: Date | null
    unreadMessagesCount: number
    permissions: JsonValue
    createdBy: number
    updatedBy: number
    deletedBy: number
    createdAt: Date
    updatedAt: Date | null
    deletedAt: Date | null
    _count: ChatRoomMemberCountAggregateOutputType | null
    _avg: ChatRoomMemberAvgAggregateOutputType | null
    _sum: ChatRoomMemberSumAggregateOutputType | null
    _min: ChatRoomMemberMinAggregateOutputType | null
    _max: ChatRoomMemberMaxAggregateOutputType | null
  }

  type GetChatRoomMemberGroupByPayload<T extends ChatRoomMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatRoomMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatRoomMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatRoomMemberGroupByOutputType[P]>
            : GetScalarType<T[P], ChatRoomMemberGroupByOutputType[P]>
        }
      >
    >


  export type ChatRoomMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    chatRoomId?: boolean
    userId?: boolean
    isMuted?: boolean
    isArchived?: boolean
    isBanned?: boolean
    lastReadMessageId?: boolean
    role?: boolean
    leftAt?: boolean
    unreadMessagesCount?: boolean
    permissions?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    deletedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    chatRoom?: boolean | ChatRoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatRoomMember"]>

  export type ChatRoomMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    chatRoomId?: boolean
    userId?: boolean
    isMuted?: boolean
    isArchived?: boolean
    isBanned?: boolean
    lastReadMessageId?: boolean
    role?: boolean
    leftAt?: boolean
    unreadMessagesCount?: boolean
    permissions?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    deletedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    chatRoom?: boolean | ChatRoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatRoomMember"]>

  export type ChatRoomMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    chatRoomId?: boolean
    userId?: boolean
    isMuted?: boolean
    isArchived?: boolean
    isBanned?: boolean
    lastReadMessageId?: boolean
    role?: boolean
    leftAt?: boolean
    unreadMessagesCount?: boolean
    permissions?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    deletedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    chatRoom?: boolean | ChatRoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatRoomMember"]>

  export type ChatRoomMemberSelectScalar = {
    id?: boolean
    documentId?: boolean
    chatRoomId?: boolean
    userId?: boolean
    isMuted?: boolean
    isArchived?: boolean
    isBanned?: boolean
    lastReadMessageId?: boolean
    role?: boolean
    leftAt?: boolean
    unreadMessagesCount?: boolean
    permissions?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    deletedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type ChatRoomMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "documentId" | "chatRoomId" | "userId" | "isMuted" | "isArchived" | "isBanned" | "lastReadMessageId" | "role" | "leftAt" | "unreadMessagesCount" | "permissions" | "createdBy" | "updatedBy" | "deletedBy" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["chatRoomMember"]>
  export type ChatRoomMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatRoom?: boolean | ChatRoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatRoomMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatRoom?: boolean | ChatRoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatRoomMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatRoom?: boolean | ChatRoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChatRoomMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatRoomMember"
    objects: {
      chatRoom: Prisma.$ChatRoomPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      documentId: string
      chatRoomId: string
      userId: string
      isMuted: boolean
      isArchived: boolean
      isBanned: boolean
      lastReadMessageId: string
      role: number
      leftAt: Date | null
      unreadMessagesCount: number
      permissions: Prisma.JsonValue
      createdBy: number
      updatedBy: number
      deletedBy: number
      createdAt: Date
      updatedAt: Date | null
      deletedAt: Date | null
    }, ExtArgs["result"]["chatRoomMember"]>
    composites: {}
  }

  type ChatRoomMemberGetPayload<S extends boolean | null | undefined | ChatRoomMemberDefaultArgs> = $Result.GetResult<Prisma.$ChatRoomMemberPayload, S>

  type ChatRoomMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatRoomMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatRoomMemberCountAggregateInputType | true
    }

  export interface ChatRoomMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatRoomMember'], meta: { name: 'ChatRoomMember' } }
    /**
     * Find zero or one ChatRoomMember that matches the filter.
     * @param {ChatRoomMemberFindUniqueArgs} args - Arguments to find a ChatRoomMember
     * @example
     * // Get one ChatRoomMember
     * const chatRoomMember = await prisma.chatRoomMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatRoomMemberFindUniqueArgs>(args: SelectSubset<T, ChatRoomMemberFindUniqueArgs<ExtArgs>>): Prisma__ChatRoomMemberClient<$Result.GetResult<Prisma.$ChatRoomMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatRoomMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatRoomMemberFindUniqueOrThrowArgs} args - Arguments to find a ChatRoomMember
     * @example
     * // Get one ChatRoomMember
     * const chatRoomMember = await prisma.chatRoomMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatRoomMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatRoomMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatRoomMemberClient<$Result.GetResult<Prisma.$ChatRoomMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatRoomMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomMemberFindFirstArgs} args - Arguments to find a ChatRoomMember
     * @example
     * // Get one ChatRoomMember
     * const chatRoomMember = await prisma.chatRoomMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatRoomMemberFindFirstArgs>(args?: SelectSubset<T, ChatRoomMemberFindFirstArgs<ExtArgs>>): Prisma__ChatRoomMemberClient<$Result.GetResult<Prisma.$ChatRoomMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatRoomMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomMemberFindFirstOrThrowArgs} args - Arguments to find a ChatRoomMember
     * @example
     * // Get one ChatRoomMember
     * const chatRoomMember = await prisma.chatRoomMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatRoomMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatRoomMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatRoomMemberClient<$Result.GetResult<Prisma.$ChatRoomMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatRoomMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatRoomMembers
     * const chatRoomMembers = await prisma.chatRoomMember.findMany()
     * 
     * // Get first 10 ChatRoomMembers
     * const chatRoomMembers = await prisma.chatRoomMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatRoomMemberWithIdOnly = await prisma.chatRoomMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatRoomMemberFindManyArgs>(args?: SelectSubset<T, ChatRoomMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRoomMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatRoomMember.
     * @param {ChatRoomMemberCreateArgs} args - Arguments to create a ChatRoomMember.
     * @example
     * // Create one ChatRoomMember
     * const ChatRoomMember = await prisma.chatRoomMember.create({
     *   data: {
     *     // ... data to create a ChatRoomMember
     *   }
     * })
     * 
     */
    create<T extends ChatRoomMemberCreateArgs>(args: SelectSubset<T, ChatRoomMemberCreateArgs<ExtArgs>>): Prisma__ChatRoomMemberClient<$Result.GetResult<Prisma.$ChatRoomMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatRoomMembers.
     * @param {ChatRoomMemberCreateManyArgs} args - Arguments to create many ChatRoomMembers.
     * @example
     * // Create many ChatRoomMembers
     * const chatRoomMember = await prisma.chatRoomMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatRoomMemberCreateManyArgs>(args?: SelectSubset<T, ChatRoomMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatRoomMembers and returns the data saved in the database.
     * @param {ChatRoomMemberCreateManyAndReturnArgs} args - Arguments to create many ChatRoomMembers.
     * @example
     * // Create many ChatRoomMembers
     * const chatRoomMember = await prisma.chatRoomMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatRoomMembers and only return the `id`
     * const chatRoomMemberWithIdOnly = await prisma.chatRoomMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatRoomMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatRoomMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRoomMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatRoomMember.
     * @param {ChatRoomMemberDeleteArgs} args - Arguments to delete one ChatRoomMember.
     * @example
     * // Delete one ChatRoomMember
     * const ChatRoomMember = await prisma.chatRoomMember.delete({
     *   where: {
     *     // ... filter to delete one ChatRoomMember
     *   }
     * })
     * 
     */
    delete<T extends ChatRoomMemberDeleteArgs>(args: SelectSubset<T, ChatRoomMemberDeleteArgs<ExtArgs>>): Prisma__ChatRoomMemberClient<$Result.GetResult<Prisma.$ChatRoomMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatRoomMember.
     * @param {ChatRoomMemberUpdateArgs} args - Arguments to update one ChatRoomMember.
     * @example
     * // Update one ChatRoomMember
     * const chatRoomMember = await prisma.chatRoomMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatRoomMemberUpdateArgs>(args: SelectSubset<T, ChatRoomMemberUpdateArgs<ExtArgs>>): Prisma__ChatRoomMemberClient<$Result.GetResult<Prisma.$ChatRoomMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatRoomMembers.
     * @param {ChatRoomMemberDeleteManyArgs} args - Arguments to filter ChatRoomMembers to delete.
     * @example
     * // Delete a few ChatRoomMembers
     * const { count } = await prisma.chatRoomMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatRoomMemberDeleteManyArgs>(args?: SelectSubset<T, ChatRoomMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatRoomMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatRoomMembers
     * const chatRoomMember = await prisma.chatRoomMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatRoomMemberUpdateManyArgs>(args: SelectSubset<T, ChatRoomMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatRoomMembers and returns the data updated in the database.
     * @param {ChatRoomMemberUpdateManyAndReturnArgs} args - Arguments to update many ChatRoomMembers.
     * @example
     * // Update many ChatRoomMembers
     * const chatRoomMember = await prisma.chatRoomMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatRoomMembers and only return the `id`
     * const chatRoomMemberWithIdOnly = await prisma.chatRoomMember.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChatRoomMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatRoomMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRoomMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatRoomMember.
     * @param {ChatRoomMemberUpsertArgs} args - Arguments to update or create a ChatRoomMember.
     * @example
     * // Update or create a ChatRoomMember
     * const chatRoomMember = await prisma.chatRoomMember.upsert({
     *   create: {
     *     // ... data to create a ChatRoomMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatRoomMember we want to update
     *   }
     * })
     */
    upsert<T extends ChatRoomMemberUpsertArgs>(args: SelectSubset<T, ChatRoomMemberUpsertArgs<ExtArgs>>): Prisma__ChatRoomMemberClient<$Result.GetResult<Prisma.$ChatRoomMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatRoomMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomMemberCountArgs} args - Arguments to filter ChatRoomMembers to count.
     * @example
     * // Count the number of ChatRoomMembers
     * const count = await prisma.chatRoomMember.count({
     *   where: {
     *     // ... the filter for the ChatRoomMembers we want to count
     *   }
     * })
    **/
    count<T extends ChatRoomMemberCountArgs>(
      args?: Subset<T, ChatRoomMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatRoomMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatRoomMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatRoomMemberAggregateArgs>(args: Subset<T, ChatRoomMemberAggregateArgs>): Prisma.PrismaPromise<GetChatRoomMemberAggregateType<T>>

    /**
     * Group by ChatRoomMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomMemberGroupByArgs} args - Group by arguments.
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
      T extends ChatRoomMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatRoomMemberGroupByArgs['orderBy'] }
        : { orderBy?: ChatRoomMemberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatRoomMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatRoomMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatRoomMember model
   */
  readonly fields: ChatRoomMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatRoomMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatRoomMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chatRoom<T extends ChatRoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatRoomDefaultArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ChatRoomMember model
   */
  interface ChatRoomMemberFieldRefs {
    readonly id: FieldRef<"ChatRoomMember", 'BigInt'>
    readonly documentId: FieldRef<"ChatRoomMember", 'String'>
    readonly chatRoomId: FieldRef<"ChatRoomMember", 'String'>
    readonly userId: FieldRef<"ChatRoomMember", 'String'>
    readonly isMuted: FieldRef<"ChatRoomMember", 'Boolean'>
    readonly isArchived: FieldRef<"ChatRoomMember", 'Boolean'>
    readonly isBanned: FieldRef<"ChatRoomMember", 'Boolean'>
    readonly lastReadMessageId: FieldRef<"ChatRoomMember", 'String'>
    readonly role: FieldRef<"ChatRoomMember", 'Int'>
    readonly leftAt: FieldRef<"ChatRoomMember", 'DateTime'>
    readonly unreadMessagesCount: FieldRef<"ChatRoomMember", 'Int'>
    readonly permissions: FieldRef<"ChatRoomMember", 'Json'>
    readonly createdBy: FieldRef<"ChatRoomMember", 'Int'>
    readonly updatedBy: FieldRef<"ChatRoomMember", 'Int'>
    readonly deletedBy: FieldRef<"ChatRoomMember", 'Int'>
    readonly createdAt: FieldRef<"ChatRoomMember", 'DateTime'>
    readonly updatedAt: FieldRef<"ChatRoomMember", 'DateTime'>
    readonly deletedAt: FieldRef<"ChatRoomMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatRoomMember findUnique
   */
  export type ChatRoomMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoomMember
     */
    select?: ChatRoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoomMember
     */
    omit?: ChatRoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomMemberInclude<ExtArgs> | null
    /**
     * Filter, which ChatRoomMember to fetch.
     */
    where: ChatRoomMemberWhereUniqueInput
  }

  /**
   * ChatRoomMember findUniqueOrThrow
   */
  export type ChatRoomMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoomMember
     */
    select?: ChatRoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoomMember
     */
    omit?: ChatRoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomMemberInclude<ExtArgs> | null
    /**
     * Filter, which ChatRoomMember to fetch.
     */
    where: ChatRoomMemberWhereUniqueInput
  }

  /**
   * ChatRoomMember findFirst
   */
  export type ChatRoomMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoomMember
     */
    select?: ChatRoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoomMember
     */
    omit?: ChatRoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomMemberInclude<ExtArgs> | null
    /**
     * Filter, which ChatRoomMember to fetch.
     */
    where?: ChatRoomMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRoomMembers to fetch.
     */
    orderBy?: ChatRoomMemberOrderByWithRelationInput | ChatRoomMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatRoomMembers.
     */
    cursor?: ChatRoomMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRoomMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRoomMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatRoomMembers.
     */
    distinct?: ChatRoomMemberScalarFieldEnum | ChatRoomMemberScalarFieldEnum[]
  }

  /**
   * ChatRoomMember findFirstOrThrow
   */
  export type ChatRoomMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoomMember
     */
    select?: ChatRoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoomMember
     */
    omit?: ChatRoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomMemberInclude<ExtArgs> | null
    /**
     * Filter, which ChatRoomMember to fetch.
     */
    where?: ChatRoomMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRoomMembers to fetch.
     */
    orderBy?: ChatRoomMemberOrderByWithRelationInput | ChatRoomMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatRoomMembers.
     */
    cursor?: ChatRoomMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRoomMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRoomMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatRoomMembers.
     */
    distinct?: ChatRoomMemberScalarFieldEnum | ChatRoomMemberScalarFieldEnum[]
  }

  /**
   * ChatRoomMember findMany
   */
  export type ChatRoomMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoomMember
     */
    select?: ChatRoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoomMember
     */
    omit?: ChatRoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomMemberInclude<ExtArgs> | null
    /**
     * Filter, which ChatRoomMembers to fetch.
     */
    where?: ChatRoomMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRoomMembers to fetch.
     */
    orderBy?: ChatRoomMemberOrderByWithRelationInput | ChatRoomMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatRoomMembers.
     */
    cursor?: ChatRoomMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRoomMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRoomMembers.
     */
    skip?: number
    distinct?: ChatRoomMemberScalarFieldEnum | ChatRoomMemberScalarFieldEnum[]
  }

  /**
   * ChatRoomMember create
   */
  export type ChatRoomMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoomMember
     */
    select?: ChatRoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoomMember
     */
    omit?: ChatRoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatRoomMember.
     */
    data: XOR<ChatRoomMemberCreateInput, ChatRoomMemberUncheckedCreateInput>
  }

  /**
   * ChatRoomMember createMany
   */
  export type ChatRoomMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatRoomMembers.
     */
    data: ChatRoomMemberCreateManyInput | ChatRoomMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatRoomMember createManyAndReturn
   */
  export type ChatRoomMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoomMember
     */
    select?: ChatRoomMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoomMember
     */
    omit?: ChatRoomMemberOmit<ExtArgs> | null
    /**
     * The data used to create many ChatRoomMembers.
     */
    data: ChatRoomMemberCreateManyInput | ChatRoomMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatRoomMember update
   */
  export type ChatRoomMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoomMember
     */
    select?: ChatRoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoomMember
     */
    omit?: ChatRoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatRoomMember.
     */
    data: XOR<ChatRoomMemberUpdateInput, ChatRoomMemberUncheckedUpdateInput>
    /**
     * Choose, which ChatRoomMember to update.
     */
    where: ChatRoomMemberWhereUniqueInput
  }

  /**
   * ChatRoomMember updateMany
   */
  export type ChatRoomMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatRoomMembers.
     */
    data: XOR<ChatRoomMemberUpdateManyMutationInput, ChatRoomMemberUncheckedUpdateManyInput>
    /**
     * Filter which ChatRoomMembers to update
     */
    where?: ChatRoomMemberWhereInput
    /**
     * Limit how many ChatRoomMembers to update.
     */
    limit?: number
  }

  /**
   * ChatRoomMember updateManyAndReturn
   */
  export type ChatRoomMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoomMember
     */
    select?: ChatRoomMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoomMember
     */
    omit?: ChatRoomMemberOmit<ExtArgs> | null
    /**
     * The data used to update ChatRoomMembers.
     */
    data: XOR<ChatRoomMemberUpdateManyMutationInput, ChatRoomMemberUncheckedUpdateManyInput>
    /**
     * Filter which ChatRoomMembers to update
     */
    where?: ChatRoomMemberWhereInput
    /**
     * Limit how many ChatRoomMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatRoomMember upsert
   */
  export type ChatRoomMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoomMember
     */
    select?: ChatRoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoomMember
     */
    omit?: ChatRoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatRoomMember to update in case it exists.
     */
    where: ChatRoomMemberWhereUniqueInput
    /**
     * In case the ChatRoomMember found by the `where` argument doesn't exist, create a new ChatRoomMember with this data.
     */
    create: XOR<ChatRoomMemberCreateInput, ChatRoomMemberUncheckedCreateInput>
    /**
     * In case the ChatRoomMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatRoomMemberUpdateInput, ChatRoomMemberUncheckedUpdateInput>
  }

  /**
   * ChatRoomMember delete
   */
  export type ChatRoomMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoomMember
     */
    select?: ChatRoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoomMember
     */
    omit?: ChatRoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomMemberInclude<ExtArgs> | null
    /**
     * Filter which ChatRoomMember to delete.
     */
    where: ChatRoomMemberWhereUniqueInput
  }

  /**
   * ChatRoomMember deleteMany
   */
  export type ChatRoomMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatRoomMembers to delete
     */
    where?: ChatRoomMemberWhereInput
    /**
     * Limit how many ChatRoomMembers to delete.
     */
    limit?: number
  }

  /**
   * ChatRoomMember without action
   */
  export type ChatRoomMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoomMember
     */
    select?: ChatRoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoomMember
     */
    omit?: ChatRoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomMemberInclude<ExtArgs> | null
  }


  /**
   * Model Attachment
   */

  export type AggregateAttachment = {
    _count: AttachmentCountAggregateOutputType | null
    _avg: AttachmentAvgAggregateOutputType | null
    _sum: AttachmentSumAggregateOutputType | null
    _min: AttachmentMinAggregateOutputType | null
    _max: AttachmentMaxAggregateOutputType | null
  }

  export type AttachmentAvgAggregateOutputType = {
    id: number | null
    fileSize: number | null
    virusScanStatus: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
  }

  export type AttachmentSumAggregateOutputType = {
    id: number | null
    fileSize: bigint | null
    virusScanStatus: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
  }

  export type AttachmentMinAggregateOutputType = {
    id: number | null
    documentId: string | null
    originalName: string | null
    fileName: string | null
    mimeType: string | null
    fileSize: bigint | null
    filePath: string | null
    thumbnailPath: string | null
    uploadedBy: string | null
    isPublic: boolean | null
    virusScanStatus: number | null
    expiresAt: Date | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type AttachmentMaxAggregateOutputType = {
    id: number | null
    documentId: string | null
    originalName: string | null
    fileName: string | null
    mimeType: string | null
    fileSize: bigint | null
    filePath: string | null
    thumbnailPath: string | null
    uploadedBy: string | null
    isPublic: boolean | null
    virusScanStatus: number | null
    expiresAt: Date | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type AttachmentCountAggregateOutputType = {
    id: number
    documentId: number
    originalName: number
    fileName: number
    mimeType: number
    fileSize: number
    filePath: number
    thumbnailPath: number
    uploadedBy: number
    isPublic: number
    metadata: number
    virusScanStatus: number
    virusScanResult: number
    expiresAt: number
    createdBy: number
    updatedBy: number
    deletedBy: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type AttachmentAvgAggregateInputType = {
    id?: true
    fileSize?: true
    virusScanStatus?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
  }

  export type AttachmentSumAggregateInputType = {
    id?: true
    fileSize?: true
    virusScanStatus?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
  }

  export type AttachmentMinAggregateInputType = {
    id?: true
    documentId?: true
    originalName?: true
    fileName?: true
    mimeType?: true
    fileSize?: true
    filePath?: true
    thumbnailPath?: true
    uploadedBy?: true
    isPublic?: true
    virusScanStatus?: true
    expiresAt?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type AttachmentMaxAggregateInputType = {
    id?: true
    documentId?: true
    originalName?: true
    fileName?: true
    mimeType?: true
    fileSize?: true
    filePath?: true
    thumbnailPath?: true
    uploadedBy?: true
    isPublic?: true
    virusScanStatus?: true
    expiresAt?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type AttachmentCountAggregateInputType = {
    id?: true
    documentId?: true
    originalName?: true
    fileName?: true
    mimeType?: true
    fileSize?: true
    filePath?: true
    thumbnailPath?: true
    uploadedBy?: true
    isPublic?: true
    metadata?: true
    virusScanStatus?: true
    virusScanResult?: true
    expiresAt?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type AttachmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attachment to aggregate.
     */
    where?: AttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attachments
    **/
    _count?: true | AttachmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttachmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttachmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttachmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttachmentMaxAggregateInputType
  }

  export type GetAttachmentAggregateType<T extends AttachmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAttachment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttachment[P]>
      : GetScalarType<T[P], AggregateAttachment[P]>
  }




  export type AttachmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttachmentWhereInput
    orderBy?: AttachmentOrderByWithAggregationInput | AttachmentOrderByWithAggregationInput[]
    by: AttachmentScalarFieldEnum[] | AttachmentScalarFieldEnum
    having?: AttachmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttachmentCountAggregateInputType | true
    _avg?: AttachmentAvgAggregateInputType
    _sum?: AttachmentSumAggregateInputType
    _min?: AttachmentMinAggregateInputType
    _max?: AttachmentMaxAggregateInputType
  }

  export type AttachmentGroupByOutputType = {
    id: number
    documentId: string
    originalName: string
    fileName: string
    mimeType: string
    fileSize: bigint
    filePath: string
    thumbnailPath: string | null
    uploadedBy: string
    isPublic: boolean
    metadata: JsonValue
    virusScanStatus: number
    virusScanResult: JsonValue | null
    expiresAt: Date | null
    createdBy: number
    updatedBy: number
    deletedBy: number
    createdAt: Date
    updatedAt: Date | null
    deletedAt: Date | null
    _count: AttachmentCountAggregateOutputType | null
    _avg: AttachmentAvgAggregateOutputType | null
    _sum: AttachmentSumAggregateOutputType | null
    _min: AttachmentMinAggregateOutputType | null
    _max: AttachmentMaxAggregateOutputType | null
  }

  type GetAttachmentGroupByPayload<T extends AttachmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttachmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttachmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttachmentGroupByOutputType[P]>
            : GetScalarType<T[P], AttachmentGroupByOutputType[P]>
        }
      >
    >


  export type AttachmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    originalName?: boolean
    fileName?: boolean
    mimeType?: boolean
    fileSize?: boolean
    filePath?: boolean
    thumbnailPath?: boolean
    uploadedBy?: boolean
    isPublic?: boolean
    metadata?: boolean
    virusScanStatus?: boolean
    virusScanResult?: boolean
    expiresAt?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    deletedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    uploader?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attachment"]>

  export type AttachmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    originalName?: boolean
    fileName?: boolean
    mimeType?: boolean
    fileSize?: boolean
    filePath?: boolean
    thumbnailPath?: boolean
    uploadedBy?: boolean
    isPublic?: boolean
    metadata?: boolean
    virusScanStatus?: boolean
    virusScanResult?: boolean
    expiresAt?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    deletedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    uploader?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attachment"]>

  export type AttachmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    originalName?: boolean
    fileName?: boolean
    mimeType?: boolean
    fileSize?: boolean
    filePath?: boolean
    thumbnailPath?: boolean
    uploadedBy?: boolean
    isPublic?: boolean
    metadata?: boolean
    virusScanStatus?: boolean
    virusScanResult?: boolean
    expiresAt?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    deletedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    uploader?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attachment"]>

  export type AttachmentSelectScalar = {
    id?: boolean
    documentId?: boolean
    originalName?: boolean
    fileName?: boolean
    mimeType?: boolean
    fileSize?: boolean
    filePath?: boolean
    thumbnailPath?: boolean
    uploadedBy?: boolean
    isPublic?: boolean
    metadata?: boolean
    virusScanStatus?: boolean
    virusScanResult?: boolean
    expiresAt?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    deletedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type AttachmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "documentId" | "originalName" | "fileName" | "mimeType" | "fileSize" | "filePath" | "thumbnailPath" | "uploadedBy" | "isPublic" | "metadata" | "virusScanStatus" | "virusScanResult" | "expiresAt" | "createdBy" | "updatedBy" | "deletedBy" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["attachment"]>
  export type AttachmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uploader?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AttachmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uploader?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AttachmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uploader?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AttachmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attachment"
    objects: {
      uploader: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      documentId: string
      originalName: string
      fileName: string
      mimeType: string
      fileSize: bigint
      filePath: string
      thumbnailPath: string | null
      uploadedBy: string
      isPublic: boolean
      metadata: Prisma.JsonValue
      virusScanStatus: number
      virusScanResult: Prisma.JsonValue | null
      expiresAt: Date | null
      createdBy: number
      updatedBy: number
      deletedBy: number
      createdAt: Date
      updatedAt: Date | null
      deletedAt: Date | null
    }, ExtArgs["result"]["attachment"]>
    composites: {}
  }

  type AttachmentGetPayload<S extends boolean | null | undefined | AttachmentDefaultArgs> = $Result.GetResult<Prisma.$AttachmentPayload, S>

  type AttachmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttachmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttachmentCountAggregateInputType | true
    }

  export interface AttachmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attachment'], meta: { name: 'Attachment' } }
    /**
     * Find zero or one Attachment that matches the filter.
     * @param {AttachmentFindUniqueArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttachmentFindUniqueArgs>(args: SelectSubset<T, AttachmentFindUniqueArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attachment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttachmentFindUniqueOrThrowArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttachmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AttachmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attachment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentFindFirstArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttachmentFindFirstArgs>(args?: SelectSubset<T, AttachmentFindFirstArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attachment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentFindFirstOrThrowArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttachmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AttachmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attachments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attachments
     * const attachments = await prisma.attachment.findMany()
     * 
     * // Get first 10 Attachments
     * const attachments = await prisma.attachment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attachmentWithIdOnly = await prisma.attachment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttachmentFindManyArgs>(args?: SelectSubset<T, AttachmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attachment.
     * @param {AttachmentCreateArgs} args - Arguments to create a Attachment.
     * @example
     * // Create one Attachment
     * const Attachment = await prisma.attachment.create({
     *   data: {
     *     // ... data to create a Attachment
     *   }
     * })
     * 
     */
    create<T extends AttachmentCreateArgs>(args: SelectSubset<T, AttachmentCreateArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attachments.
     * @param {AttachmentCreateManyArgs} args - Arguments to create many Attachments.
     * @example
     * // Create many Attachments
     * const attachment = await prisma.attachment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttachmentCreateManyArgs>(args?: SelectSubset<T, AttachmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attachments and returns the data saved in the database.
     * @param {AttachmentCreateManyAndReturnArgs} args - Arguments to create many Attachments.
     * @example
     * // Create many Attachments
     * const attachment = await prisma.attachment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attachments and only return the `id`
     * const attachmentWithIdOnly = await prisma.attachment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttachmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AttachmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Attachment.
     * @param {AttachmentDeleteArgs} args - Arguments to delete one Attachment.
     * @example
     * // Delete one Attachment
     * const Attachment = await prisma.attachment.delete({
     *   where: {
     *     // ... filter to delete one Attachment
     *   }
     * })
     * 
     */
    delete<T extends AttachmentDeleteArgs>(args: SelectSubset<T, AttachmentDeleteArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attachment.
     * @param {AttachmentUpdateArgs} args - Arguments to update one Attachment.
     * @example
     * // Update one Attachment
     * const attachment = await prisma.attachment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttachmentUpdateArgs>(args: SelectSubset<T, AttachmentUpdateArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attachments.
     * @param {AttachmentDeleteManyArgs} args - Arguments to filter Attachments to delete.
     * @example
     * // Delete a few Attachments
     * const { count } = await prisma.attachment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttachmentDeleteManyArgs>(args?: SelectSubset<T, AttachmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attachments
     * const attachment = await prisma.attachment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttachmentUpdateManyArgs>(args: SelectSubset<T, AttachmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attachments and returns the data updated in the database.
     * @param {AttachmentUpdateManyAndReturnArgs} args - Arguments to update many Attachments.
     * @example
     * // Update many Attachments
     * const attachment = await prisma.attachment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Attachments and only return the `id`
     * const attachmentWithIdOnly = await prisma.attachment.updateManyAndReturn({
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
    updateManyAndReturn<T extends AttachmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AttachmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Attachment.
     * @param {AttachmentUpsertArgs} args - Arguments to update or create a Attachment.
     * @example
     * // Update or create a Attachment
     * const attachment = await prisma.attachment.upsert({
     *   create: {
     *     // ... data to create a Attachment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attachment we want to update
     *   }
     * })
     */
    upsert<T extends AttachmentUpsertArgs>(args: SelectSubset<T, AttachmentUpsertArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentCountArgs} args - Arguments to filter Attachments to count.
     * @example
     * // Count the number of Attachments
     * const count = await prisma.attachment.count({
     *   where: {
     *     // ... the filter for the Attachments we want to count
     *   }
     * })
    **/
    count<T extends AttachmentCountArgs>(
      args?: Subset<T, AttachmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttachmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttachmentAggregateArgs>(args: Subset<T, AttachmentAggregateArgs>): Prisma.PrismaPromise<GetAttachmentAggregateType<T>>

    /**
     * Group by Attachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentGroupByArgs} args - Group by arguments.
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
      T extends AttachmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttachmentGroupByArgs['orderBy'] }
        : { orderBy?: AttachmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AttachmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttachmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attachment model
   */
  readonly fields: AttachmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attachment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttachmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    uploader<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Attachment model
   */
  interface AttachmentFieldRefs {
    readonly id: FieldRef<"Attachment", 'Int'>
    readonly documentId: FieldRef<"Attachment", 'String'>
    readonly originalName: FieldRef<"Attachment", 'String'>
    readonly fileName: FieldRef<"Attachment", 'String'>
    readonly mimeType: FieldRef<"Attachment", 'String'>
    readonly fileSize: FieldRef<"Attachment", 'BigInt'>
    readonly filePath: FieldRef<"Attachment", 'String'>
    readonly thumbnailPath: FieldRef<"Attachment", 'String'>
    readonly uploadedBy: FieldRef<"Attachment", 'String'>
    readonly isPublic: FieldRef<"Attachment", 'Boolean'>
    readonly metadata: FieldRef<"Attachment", 'Json'>
    readonly virusScanStatus: FieldRef<"Attachment", 'Int'>
    readonly virusScanResult: FieldRef<"Attachment", 'Json'>
    readonly expiresAt: FieldRef<"Attachment", 'DateTime'>
    readonly createdBy: FieldRef<"Attachment", 'Int'>
    readonly updatedBy: FieldRef<"Attachment", 'Int'>
    readonly deletedBy: FieldRef<"Attachment", 'Int'>
    readonly createdAt: FieldRef<"Attachment", 'DateTime'>
    readonly updatedAt: FieldRef<"Attachment", 'DateTime'>
    readonly deletedAt: FieldRef<"Attachment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Attachment findUnique
   */
  export type AttachmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachment to fetch.
     */
    where: AttachmentWhereUniqueInput
  }

  /**
   * Attachment findUniqueOrThrow
   */
  export type AttachmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachment to fetch.
     */
    where: AttachmentWhereUniqueInput
  }

  /**
   * Attachment findFirst
   */
  export type AttachmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachment to fetch.
     */
    where?: AttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attachments.
     */
    cursor?: AttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attachments.
     */
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[]
  }

  /**
   * Attachment findFirstOrThrow
   */
  export type AttachmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachment to fetch.
     */
    where?: AttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attachments.
     */
    cursor?: AttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attachments.
     */
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[]
  }

  /**
   * Attachment findMany
   */
  export type AttachmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachments to fetch.
     */
    where?: AttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attachments.
     */
    cursor?: AttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[]
  }

  /**
   * Attachment create
   */
  export type AttachmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Attachment.
     */
    data: XOR<AttachmentCreateInput, AttachmentUncheckedCreateInput>
  }

  /**
   * Attachment createMany
   */
  export type AttachmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attachments.
     */
    data: AttachmentCreateManyInput | AttachmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attachment createManyAndReturn
   */
  export type AttachmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * The data used to create many Attachments.
     */
    data: AttachmentCreateManyInput | AttachmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attachment update
   */
  export type AttachmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Attachment.
     */
    data: XOR<AttachmentUpdateInput, AttachmentUncheckedUpdateInput>
    /**
     * Choose, which Attachment to update.
     */
    where: AttachmentWhereUniqueInput
  }

  /**
   * Attachment updateMany
   */
  export type AttachmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attachments.
     */
    data: XOR<AttachmentUpdateManyMutationInput, AttachmentUncheckedUpdateManyInput>
    /**
     * Filter which Attachments to update
     */
    where?: AttachmentWhereInput
    /**
     * Limit how many Attachments to update.
     */
    limit?: number
  }

  /**
   * Attachment updateManyAndReturn
   */
  export type AttachmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * The data used to update Attachments.
     */
    data: XOR<AttachmentUpdateManyMutationInput, AttachmentUncheckedUpdateManyInput>
    /**
     * Filter which Attachments to update
     */
    where?: AttachmentWhereInput
    /**
     * Limit how many Attachments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attachment upsert
   */
  export type AttachmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Attachment to update in case it exists.
     */
    where: AttachmentWhereUniqueInput
    /**
     * In case the Attachment found by the `where` argument doesn't exist, create a new Attachment with this data.
     */
    create: XOR<AttachmentCreateInput, AttachmentUncheckedCreateInput>
    /**
     * In case the Attachment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttachmentUpdateInput, AttachmentUncheckedUpdateInput>
  }

  /**
   * Attachment delete
   */
  export type AttachmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter which Attachment to delete.
     */
    where: AttachmentWhereUniqueInput
  }

  /**
   * Attachment deleteMany
   */
  export type AttachmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attachments to delete
     */
    where?: AttachmentWhereInput
    /**
     * Limit how many Attachments to delete.
     */
    limit?: number
  }

  /**
   * Attachment without action
   */
  export type AttachmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
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
    documentId: 'documentId',
    name: 'name',
    email: 'email',
    username: 'username',
    password: 'password',
    profilePictureUrl: 'profilePictureUrl',
    bio: 'bio',
    phoneNumber: 'phoneNumber',
    lastActivityDate: 'lastActivityDate',
    status: 'status',
    isActive: 'isActive',
    isVerified: 'isVerified',
    themePreference: 'themePreference',
    notificationSettings: 'notificationSettings',
    privacySettings: 'privacySettings',
    createdBy: 'createdBy',
    updatedBy: 'updatedBy',
    deletedBy: 'deletedBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserSessionScalarFieldEnum: {
    id: 'id',
    documentId: 'documentId',
    userId: 'userId',
    sessionToken: 'sessionToken',
    refreshToken: 'refreshToken',
    deviceInfo: 'deviceInfo',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    isActive: 'isActive',
    expiresAt: 'expiresAt',
    lastActivityAt: 'lastActivityAt',
    createdBy: 'createdBy',
    updatedBy: 'updatedBy',
    deletedBy: 'deletedBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type UserSessionScalarFieldEnum = (typeof UserSessionScalarFieldEnum)[keyof typeof UserSessionScalarFieldEnum]


  export const UserDeviceScalarFieldEnum: {
    id: 'id',
    documentId: 'documentId',
    userId: 'userId',
    deviceToken: 'deviceToken',
    deviceType: 'deviceType',
    deviceName: 'deviceName',
    appVersion: 'appVersion',
    osVersion: 'osVersion',
    isActive: 'isActive',
    lastUsedAt: 'lastUsedAt',
    createdBy: 'createdBy',
    updatedBy: 'updatedBy',
    deletedBy: 'deletedBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type UserDeviceScalarFieldEnum = (typeof UserDeviceScalarFieldEnum)[keyof typeof UserDeviceScalarFieldEnum]


  export const UserRelationshipScalarFieldEnum: {
    id: 'id',
    documentId: 'documentId',
    requesterId: 'requesterId',
    addresseeId: 'addresseeId',
    status: 'status',
    createdBy: 'createdBy',
    updatedBy: 'updatedBy',
    deletedBy: 'deletedBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type UserRelationshipScalarFieldEnum = (typeof UserRelationshipScalarFieldEnum)[keyof typeof UserRelationshipScalarFieldEnum]


  export const ChatRoomScalarFieldEnum: {
    id: 'id',
    documentId: 'documentId',
    name: 'name',
    type: 'type',
    description: 'description',
    lastMessageDate: 'lastMessageDate',
    createdBy: 'createdBy',
    updatedBy: 'updatedBy',
    deletedBy: 'deletedBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type ChatRoomScalarFieldEnum = (typeof ChatRoomScalarFieldEnum)[keyof typeof ChatRoomScalarFieldEnum]


  export const ChatRoomMemberScalarFieldEnum: {
    id: 'id',
    documentId: 'documentId',
    chatRoomId: 'chatRoomId',
    userId: 'userId',
    isMuted: 'isMuted',
    isArchived: 'isArchived',
    isBanned: 'isBanned',
    lastReadMessageId: 'lastReadMessageId',
    role: 'role',
    leftAt: 'leftAt',
    unreadMessagesCount: 'unreadMessagesCount',
    permissions: 'permissions',
    createdBy: 'createdBy',
    updatedBy: 'updatedBy',
    deletedBy: 'deletedBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type ChatRoomMemberScalarFieldEnum = (typeof ChatRoomMemberScalarFieldEnum)[keyof typeof ChatRoomMemberScalarFieldEnum]


  export const AttachmentScalarFieldEnum: {
    id: 'id',
    documentId: 'documentId',
    originalName: 'originalName',
    fileName: 'fileName',
    mimeType: 'mimeType',
    fileSize: 'fileSize',
    filePath: 'filePath',
    thumbnailPath: 'thumbnailPath',
    uploadedBy: 'uploadedBy',
    isPublic: 'isPublic',
    metadata: 'metadata',
    virusScanStatus: 'virusScanStatus',
    virusScanResult: 'virusScanResult',
    expiresAt: 'expiresAt',
    createdBy: 'createdBy',
    updatedBy: 'updatedBy',
    deletedBy: 'deletedBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type AttachmentScalarFieldEnum = (typeof AttachmentScalarFieldEnum)[keyof typeof AttachmentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


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
    id?: IntFilter<"User"> | number
    documentId?: UuidFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    profilePictureUrl?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringNullableFilter<"User"> | string | null
    lastActivityDate?: DateTimeFilter<"User"> | Date | string
    status?: IntFilter<"User"> | number
    isActive?: BoolFilter<"User"> | boolean
    isVerified?: BoolFilter<"User"> | boolean
    themePreference?: IntFilter<"User"> | number
    notificationSettings?: JsonFilter<"User">
    privacySettings?: JsonFilter<"User">
    createdBy?: IntFilter<"User"> | number
    updatedBy?: IntFilter<"User"> | number
    deletedBy?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    sessions?: UserSessionListRelationFilter
    chatRoomMemberships?: ChatRoomMemberListRelationFilter
    createdChatRooms?: ChatRoomListRelationFilter
    requestedRelationships?: UserRelationshipListRelationFilter
    receivedRelationships?: UserRelationshipListRelationFilter
    devices?: UserDeviceListRelationFilter
    uploadedFiles?: AttachmentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    documentId?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    username?: SortOrder
    password?: SortOrder
    profilePictureUrl?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    lastActivityDate?: SortOrder
    status?: SortOrder
    isActive?: SortOrder
    isVerified?: SortOrder
    themePreference?: SortOrder
    notificationSettings?: SortOrder
    privacySettings?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    sessions?: UserSessionOrderByRelationAggregateInput
    chatRoomMemberships?: ChatRoomMemberOrderByRelationAggregateInput
    createdChatRooms?: ChatRoomOrderByRelationAggregateInput
    requestedRelationships?: UserRelationshipOrderByRelationAggregateInput
    receivedRelationships?: UserRelationshipOrderByRelationAggregateInput
    devices?: UserDeviceOrderByRelationAggregateInput
    uploadedFiles?: AttachmentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    documentId?: string
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    profilePictureUrl?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringNullableFilter<"User"> | string | null
    lastActivityDate?: DateTimeFilter<"User"> | Date | string
    status?: IntFilter<"User"> | number
    isActive?: BoolFilter<"User"> | boolean
    isVerified?: BoolFilter<"User"> | boolean
    themePreference?: IntFilter<"User"> | number
    notificationSettings?: JsonFilter<"User">
    privacySettings?: JsonFilter<"User">
    createdBy?: IntFilter<"User"> | number
    updatedBy?: IntFilter<"User"> | number
    deletedBy?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    sessions?: UserSessionListRelationFilter
    chatRoomMemberships?: ChatRoomMemberListRelationFilter
    createdChatRooms?: ChatRoomListRelationFilter
    requestedRelationships?: UserRelationshipListRelationFilter
    receivedRelationships?: UserRelationshipListRelationFilter
    devices?: UserDeviceListRelationFilter
    uploadedFiles?: AttachmentListRelationFilter
  }, "id" | "documentId" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    documentId?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    username?: SortOrder
    password?: SortOrder
    profilePictureUrl?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    lastActivityDate?: SortOrder
    status?: SortOrder
    isActive?: SortOrder
    isVerified?: SortOrder
    themePreference?: SortOrder
    notificationSettings?: SortOrder
    privacySettings?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
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
    id?: IntWithAggregatesFilter<"User"> | number
    documentId?: UuidWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    profilePictureUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    phoneNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastActivityDate?: DateTimeWithAggregatesFilter<"User"> | Date | string
    status?: IntWithAggregatesFilter<"User"> | number
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    themePreference?: IntWithAggregatesFilter<"User"> | number
    notificationSettings?: JsonWithAggregatesFilter<"User">
    privacySettings?: JsonWithAggregatesFilter<"User">
    createdBy?: IntWithAggregatesFilter<"User"> | number
    updatedBy?: IntWithAggregatesFilter<"User"> | number
    deletedBy?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type UserSessionWhereInput = {
    AND?: UserSessionWhereInput | UserSessionWhereInput[]
    OR?: UserSessionWhereInput[]
    NOT?: UserSessionWhereInput | UserSessionWhereInput[]
    id?: IntFilter<"UserSession"> | number
    documentId?: UuidFilter<"UserSession"> | string
    userId?: UuidFilter<"UserSession"> | string
    sessionToken?: StringFilter<"UserSession"> | string
    refreshToken?: StringFilter<"UserSession"> | string
    deviceInfo?: JsonNullableFilter<"UserSession">
    ipAddress?: StringNullableFilter<"UserSession"> | string | null
    userAgent?: StringNullableFilter<"UserSession"> | string | null
    isActive?: BoolFilter<"UserSession"> | boolean
    expiresAt?: DateTimeFilter<"UserSession"> | Date | string
    lastActivityAt?: DateTimeFilter<"UserSession"> | Date | string
    createdBy?: IntFilter<"UserSession"> | number
    updatedBy?: IntFilter<"UserSession"> | number
    deletedBy?: IntFilter<"UserSession"> | number
    createdAt?: DateTimeFilter<"UserSession"> | Date | string
    updatedAt?: DateTimeNullableFilter<"UserSession"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"UserSession"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserSessionOrderByWithRelationInput = {
    id?: SortOrder
    documentId?: SortOrder
    userId?: SortOrder
    sessionToken?: SortOrder
    refreshToken?: SortOrder
    deviceInfo?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    isActive?: SortOrder
    expiresAt?: SortOrder
    lastActivityAt?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    documentId?: string
    AND?: UserSessionWhereInput | UserSessionWhereInput[]
    OR?: UserSessionWhereInput[]
    NOT?: UserSessionWhereInput | UserSessionWhereInput[]
    userId?: UuidFilter<"UserSession"> | string
    sessionToken?: StringFilter<"UserSession"> | string
    refreshToken?: StringFilter<"UserSession"> | string
    deviceInfo?: JsonNullableFilter<"UserSession">
    ipAddress?: StringNullableFilter<"UserSession"> | string | null
    userAgent?: StringNullableFilter<"UserSession"> | string | null
    isActive?: BoolFilter<"UserSession"> | boolean
    expiresAt?: DateTimeFilter<"UserSession"> | Date | string
    lastActivityAt?: DateTimeFilter<"UserSession"> | Date | string
    createdBy?: IntFilter<"UserSession"> | number
    updatedBy?: IntFilter<"UserSession"> | number
    deletedBy?: IntFilter<"UserSession"> | number
    createdAt?: DateTimeFilter<"UserSession"> | Date | string
    updatedAt?: DateTimeNullableFilter<"UserSession"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"UserSession"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "documentId">

  export type UserSessionOrderByWithAggregationInput = {
    id?: SortOrder
    documentId?: SortOrder
    userId?: SortOrder
    sessionToken?: SortOrder
    refreshToken?: SortOrder
    deviceInfo?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    isActive?: SortOrder
    expiresAt?: SortOrder
    lastActivityAt?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: UserSessionCountOrderByAggregateInput
    _avg?: UserSessionAvgOrderByAggregateInput
    _max?: UserSessionMaxOrderByAggregateInput
    _min?: UserSessionMinOrderByAggregateInput
    _sum?: UserSessionSumOrderByAggregateInput
  }

  export type UserSessionScalarWhereWithAggregatesInput = {
    AND?: UserSessionScalarWhereWithAggregatesInput | UserSessionScalarWhereWithAggregatesInput[]
    OR?: UserSessionScalarWhereWithAggregatesInput[]
    NOT?: UserSessionScalarWhereWithAggregatesInput | UserSessionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserSession"> | number
    documentId?: UuidWithAggregatesFilter<"UserSession"> | string
    userId?: UuidWithAggregatesFilter<"UserSession"> | string
    sessionToken?: StringWithAggregatesFilter<"UserSession"> | string
    refreshToken?: StringWithAggregatesFilter<"UserSession"> | string
    deviceInfo?: JsonNullableWithAggregatesFilter<"UserSession">
    ipAddress?: StringNullableWithAggregatesFilter<"UserSession"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"UserSession"> | string | null
    isActive?: BoolWithAggregatesFilter<"UserSession"> | boolean
    expiresAt?: DateTimeWithAggregatesFilter<"UserSession"> | Date | string
    lastActivityAt?: DateTimeWithAggregatesFilter<"UserSession"> | Date | string
    createdBy?: IntWithAggregatesFilter<"UserSession"> | number
    updatedBy?: IntWithAggregatesFilter<"UserSession"> | number
    deletedBy?: IntWithAggregatesFilter<"UserSession"> | number
    createdAt?: DateTimeWithAggregatesFilter<"UserSession"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"UserSession"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"UserSession"> | Date | string | null
  }

  export type UserDeviceWhereInput = {
    AND?: UserDeviceWhereInput | UserDeviceWhereInput[]
    OR?: UserDeviceWhereInput[]
    NOT?: UserDeviceWhereInput | UserDeviceWhereInput[]
    id?: IntFilter<"UserDevice"> | number
    documentId?: UuidFilter<"UserDevice"> | string
    userId?: UuidFilter<"UserDevice"> | string
    deviceToken?: StringFilter<"UserDevice"> | string
    deviceType?: IntFilter<"UserDevice"> | number
    deviceName?: StringNullableFilter<"UserDevice"> | string | null
    appVersion?: StringNullableFilter<"UserDevice"> | string | null
    osVersion?: StringNullableFilter<"UserDevice"> | string | null
    isActive?: BoolFilter<"UserDevice"> | boolean
    lastUsedAt?: DateTimeFilter<"UserDevice"> | Date | string
    createdBy?: IntFilter<"UserDevice"> | number
    updatedBy?: IntFilter<"UserDevice"> | number
    deletedBy?: IntFilter<"UserDevice"> | number
    createdAt?: DateTimeFilter<"UserDevice"> | Date | string
    updatedAt?: DateTimeNullableFilter<"UserDevice"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"UserDevice"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserDeviceOrderByWithRelationInput = {
    id?: SortOrder
    documentId?: SortOrder
    userId?: SortOrder
    deviceToken?: SortOrder
    deviceType?: SortOrder
    deviceName?: SortOrderInput | SortOrder
    appVersion?: SortOrderInput | SortOrder
    osVersion?: SortOrderInput | SortOrder
    isActive?: SortOrder
    lastUsedAt?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserDeviceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    documentId?: string
    AND?: UserDeviceWhereInput | UserDeviceWhereInput[]
    OR?: UserDeviceWhereInput[]
    NOT?: UserDeviceWhereInput | UserDeviceWhereInput[]
    userId?: UuidFilter<"UserDevice"> | string
    deviceToken?: StringFilter<"UserDevice"> | string
    deviceType?: IntFilter<"UserDevice"> | number
    deviceName?: StringNullableFilter<"UserDevice"> | string | null
    appVersion?: StringNullableFilter<"UserDevice"> | string | null
    osVersion?: StringNullableFilter<"UserDevice"> | string | null
    isActive?: BoolFilter<"UserDevice"> | boolean
    lastUsedAt?: DateTimeFilter<"UserDevice"> | Date | string
    createdBy?: IntFilter<"UserDevice"> | number
    updatedBy?: IntFilter<"UserDevice"> | number
    deletedBy?: IntFilter<"UserDevice"> | number
    createdAt?: DateTimeFilter<"UserDevice"> | Date | string
    updatedAt?: DateTimeNullableFilter<"UserDevice"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"UserDevice"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "documentId">

  export type UserDeviceOrderByWithAggregationInput = {
    id?: SortOrder
    documentId?: SortOrder
    userId?: SortOrder
    deviceToken?: SortOrder
    deviceType?: SortOrder
    deviceName?: SortOrderInput | SortOrder
    appVersion?: SortOrderInput | SortOrder
    osVersion?: SortOrderInput | SortOrder
    isActive?: SortOrder
    lastUsedAt?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: UserDeviceCountOrderByAggregateInput
    _avg?: UserDeviceAvgOrderByAggregateInput
    _max?: UserDeviceMaxOrderByAggregateInput
    _min?: UserDeviceMinOrderByAggregateInput
    _sum?: UserDeviceSumOrderByAggregateInput
  }

  export type UserDeviceScalarWhereWithAggregatesInput = {
    AND?: UserDeviceScalarWhereWithAggregatesInput | UserDeviceScalarWhereWithAggregatesInput[]
    OR?: UserDeviceScalarWhereWithAggregatesInput[]
    NOT?: UserDeviceScalarWhereWithAggregatesInput | UserDeviceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserDevice"> | number
    documentId?: UuidWithAggregatesFilter<"UserDevice"> | string
    userId?: UuidWithAggregatesFilter<"UserDevice"> | string
    deviceToken?: StringWithAggregatesFilter<"UserDevice"> | string
    deviceType?: IntWithAggregatesFilter<"UserDevice"> | number
    deviceName?: StringNullableWithAggregatesFilter<"UserDevice"> | string | null
    appVersion?: StringNullableWithAggregatesFilter<"UserDevice"> | string | null
    osVersion?: StringNullableWithAggregatesFilter<"UserDevice"> | string | null
    isActive?: BoolWithAggregatesFilter<"UserDevice"> | boolean
    lastUsedAt?: DateTimeWithAggregatesFilter<"UserDevice"> | Date | string
    createdBy?: IntWithAggregatesFilter<"UserDevice"> | number
    updatedBy?: IntWithAggregatesFilter<"UserDevice"> | number
    deletedBy?: IntWithAggregatesFilter<"UserDevice"> | number
    createdAt?: DateTimeWithAggregatesFilter<"UserDevice"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"UserDevice"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"UserDevice"> | Date | string | null
  }

  export type UserRelationshipWhereInput = {
    AND?: UserRelationshipWhereInput | UserRelationshipWhereInput[]
    OR?: UserRelationshipWhereInput[]
    NOT?: UserRelationshipWhereInput | UserRelationshipWhereInput[]
    id?: IntFilter<"UserRelationship"> | number
    documentId?: UuidFilter<"UserRelationship"> | string
    requesterId?: UuidFilter<"UserRelationship"> | string
    addresseeId?: UuidFilter<"UserRelationship"> | string
    status?: IntFilter<"UserRelationship"> | number
    createdBy?: IntFilter<"UserRelationship"> | number
    updatedBy?: IntFilter<"UserRelationship"> | number
    deletedBy?: IntFilter<"UserRelationship"> | number
    createdAt?: DateTimeFilter<"UserRelationship"> | Date | string
    updatedAt?: DateTimeNullableFilter<"UserRelationship"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"UserRelationship"> | Date | string | null
    requester?: XOR<UserScalarRelationFilter, UserWhereInput>
    addressee?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserRelationshipOrderByWithRelationInput = {
    id?: SortOrder
    documentId?: SortOrder
    requesterId?: SortOrder
    addresseeId?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    requester?: UserOrderByWithRelationInput
    addressee?: UserOrderByWithRelationInput
  }

  export type UserRelationshipWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    documentId?: string
    requesterId_addresseeId?: UserRelationshipRequesterIdAddresseeIdCompoundUniqueInput
    AND?: UserRelationshipWhereInput | UserRelationshipWhereInput[]
    OR?: UserRelationshipWhereInput[]
    NOT?: UserRelationshipWhereInput | UserRelationshipWhereInput[]
    requesterId?: UuidFilter<"UserRelationship"> | string
    addresseeId?: UuidFilter<"UserRelationship"> | string
    status?: IntFilter<"UserRelationship"> | number
    createdBy?: IntFilter<"UserRelationship"> | number
    updatedBy?: IntFilter<"UserRelationship"> | number
    deletedBy?: IntFilter<"UserRelationship"> | number
    createdAt?: DateTimeFilter<"UserRelationship"> | Date | string
    updatedAt?: DateTimeNullableFilter<"UserRelationship"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"UserRelationship"> | Date | string | null
    requester?: XOR<UserScalarRelationFilter, UserWhereInput>
    addressee?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "documentId" | "requesterId_addresseeId">

  export type UserRelationshipOrderByWithAggregationInput = {
    id?: SortOrder
    documentId?: SortOrder
    requesterId?: SortOrder
    addresseeId?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: UserRelationshipCountOrderByAggregateInput
    _avg?: UserRelationshipAvgOrderByAggregateInput
    _max?: UserRelationshipMaxOrderByAggregateInput
    _min?: UserRelationshipMinOrderByAggregateInput
    _sum?: UserRelationshipSumOrderByAggregateInput
  }

  export type UserRelationshipScalarWhereWithAggregatesInput = {
    AND?: UserRelationshipScalarWhereWithAggregatesInput | UserRelationshipScalarWhereWithAggregatesInput[]
    OR?: UserRelationshipScalarWhereWithAggregatesInput[]
    NOT?: UserRelationshipScalarWhereWithAggregatesInput | UserRelationshipScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserRelationship"> | number
    documentId?: UuidWithAggregatesFilter<"UserRelationship"> | string
    requesterId?: UuidWithAggregatesFilter<"UserRelationship"> | string
    addresseeId?: UuidWithAggregatesFilter<"UserRelationship"> | string
    status?: IntWithAggregatesFilter<"UserRelationship"> | number
    createdBy?: IntWithAggregatesFilter<"UserRelationship"> | number
    updatedBy?: IntWithAggregatesFilter<"UserRelationship"> | number
    deletedBy?: IntWithAggregatesFilter<"UserRelationship"> | number
    createdAt?: DateTimeWithAggregatesFilter<"UserRelationship"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"UserRelationship"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"UserRelationship"> | Date | string | null
  }

  export type ChatRoomWhereInput = {
    AND?: ChatRoomWhereInput | ChatRoomWhereInput[]
    OR?: ChatRoomWhereInput[]
    NOT?: ChatRoomWhereInput | ChatRoomWhereInput[]
    id?: BigIntFilter<"ChatRoom"> | bigint | number
    documentId?: UuidFilter<"ChatRoom"> | string
    name?: StringFilter<"ChatRoom"> | string
    type?: IntFilter<"ChatRoom"> | number
    description?: StringNullableFilter<"ChatRoom"> | string | null
    lastMessageDate?: DateTimeFilter<"ChatRoom"> | Date | string
    createdBy?: IntFilter<"ChatRoom"> | number
    updatedBy?: IntFilter<"ChatRoom"> | number
    deletedBy?: IntFilter<"ChatRoom"> | number
    createdAt?: DateTimeFilter<"ChatRoom"> | Date | string
    updatedAt?: DateTimeNullableFilter<"ChatRoom"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"ChatRoom"> | Date | string | null
    members?: ChatRoomMemberListRelationFilter
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ChatRoomOrderByWithRelationInput = {
    id?: SortOrder
    documentId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrderInput | SortOrder
    lastMessageDate?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    members?: ChatRoomMemberOrderByRelationAggregateInput
    creator?: UserOrderByWithRelationInput
  }

  export type ChatRoomWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    documentId?: string
    AND?: ChatRoomWhereInput | ChatRoomWhereInput[]
    OR?: ChatRoomWhereInput[]
    NOT?: ChatRoomWhereInput | ChatRoomWhereInput[]
    name?: StringFilter<"ChatRoom"> | string
    type?: IntFilter<"ChatRoom"> | number
    description?: StringNullableFilter<"ChatRoom"> | string | null
    lastMessageDate?: DateTimeFilter<"ChatRoom"> | Date | string
    createdBy?: IntFilter<"ChatRoom"> | number
    updatedBy?: IntFilter<"ChatRoom"> | number
    deletedBy?: IntFilter<"ChatRoom"> | number
    createdAt?: DateTimeFilter<"ChatRoom"> | Date | string
    updatedAt?: DateTimeNullableFilter<"ChatRoom"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"ChatRoom"> | Date | string | null
    members?: ChatRoomMemberListRelationFilter
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "documentId">

  export type ChatRoomOrderByWithAggregationInput = {
    id?: SortOrder
    documentId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrderInput | SortOrder
    lastMessageDate?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: ChatRoomCountOrderByAggregateInput
    _avg?: ChatRoomAvgOrderByAggregateInput
    _max?: ChatRoomMaxOrderByAggregateInput
    _min?: ChatRoomMinOrderByAggregateInput
    _sum?: ChatRoomSumOrderByAggregateInput
  }

  export type ChatRoomScalarWhereWithAggregatesInput = {
    AND?: ChatRoomScalarWhereWithAggregatesInput | ChatRoomScalarWhereWithAggregatesInput[]
    OR?: ChatRoomScalarWhereWithAggregatesInput[]
    NOT?: ChatRoomScalarWhereWithAggregatesInput | ChatRoomScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"ChatRoom"> | bigint | number
    documentId?: UuidWithAggregatesFilter<"ChatRoom"> | string
    name?: StringWithAggregatesFilter<"ChatRoom"> | string
    type?: IntWithAggregatesFilter<"ChatRoom"> | number
    description?: StringNullableWithAggregatesFilter<"ChatRoom"> | string | null
    lastMessageDate?: DateTimeWithAggregatesFilter<"ChatRoom"> | Date | string
    createdBy?: IntWithAggregatesFilter<"ChatRoom"> | number
    updatedBy?: IntWithAggregatesFilter<"ChatRoom"> | number
    deletedBy?: IntWithAggregatesFilter<"ChatRoom"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ChatRoom"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"ChatRoom"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"ChatRoom"> | Date | string | null
  }

  export type ChatRoomMemberWhereInput = {
    AND?: ChatRoomMemberWhereInput | ChatRoomMemberWhereInput[]
    OR?: ChatRoomMemberWhereInput[]
    NOT?: ChatRoomMemberWhereInput | ChatRoomMemberWhereInput[]
    id?: BigIntFilter<"ChatRoomMember"> | bigint | number
    documentId?: UuidFilter<"ChatRoomMember"> | string
    chatRoomId?: UuidFilter<"ChatRoomMember"> | string
    userId?: UuidFilter<"ChatRoomMember"> | string
    isMuted?: BoolFilter<"ChatRoomMember"> | boolean
    isArchived?: BoolFilter<"ChatRoomMember"> | boolean
    isBanned?: BoolFilter<"ChatRoomMember"> | boolean
    lastReadMessageId?: UuidFilter<"ChatRoomMember"> | string
    role?: IntFilter<"ChatRoomMember"> | number
    leftAt?: DateTimeNullableFilter<"ChatRoomMember"> | Date | string | null
    unreadMessagesCount?: IntFilter<"ChatRoomMember"> | number
    permissions?: JsonFilter<"ChatRoomMember">
    createdBy?: IntFilter<"ChatRoomMember"> | number
    updatedBy?: IntFilter<"ChatRoomMember"> | number
    deletedBy?: IntFilter<"ChatRoomMember"> | number
    createdAt?: DateTimeFilter<"ChatRoomMember"> | Date | string
    updatedAt?: DateTimeNullableFilter<"ChatRoomMember"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"ChatRoomMember"> | Date | string | null
    chatRoom?: XOR<ChatRoomScalarRelationFilter, ChatRoomWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ChatRoomMemberOrderByWithRelationInput = {
    id?: SortOrder
    documentId?: SortOrder
    chatRoomId?: SortOrder
    userId?: SortOrder
    isMuted?: SortOrder
    isArchived?: SortOrder
    isBanned?: SortOrder
    lastReadMessageId?: SortOrder
    role?: SortOrder
    leftAt?: SortOrderInput | SortOrder
    unreadMessagesCount?: SortOrder
    permissions?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    chatRoom?: ChatRoomOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ChatRoomMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    documentId?: string
    chatRoomId_userId?: ChatRoomMemberChatRoomIdUserIdCompoundUniqueInput
    AND?: ChatRoomMemberWhereInput | ChatRoomMemberWhereInput[]
    OR?: ChatRoomMemberWhereInput[]
    NOT?: ChatRoomMemberWhereInput | ChatRoomMemberWhereInput[]
    chatRoomId?: UuidFilter<"ChatRoomMember"> | string
    userId?: UuidFilter<"ChatRoomMember"> | string
    isMuted?: BoolFilter<"ChatRoomMember"> | boolean
    isArchived?: BoolFilter<"ChatRoomMember"> | boolean
    isBanned?: BoolFilter<"ChatRoomMember"> | boolean
    lastReadMessageId?: UuidFilter<"ChatRoomMember"> | string
    role?: IntFilter<"ChatRoomMember"> | number
    leftAt?: DateTimeNullableFilter<"ChatRoomMember"> | Date | string | null
    unreadMessagesCount?: IntFilter<"ChatRoomMember"> | number
    permissions?: JsonFilter<"ChatRoomMember">
    createdBy?: IntFilter<"ChatRoomMember"> | number
    updatedBy?: IntFilter<"ChatRoomMember"> | number
    deletedBy?: IntFilter<"ChatRoomMember"> | number
    createdAt?: DateTimeFilter<"ChatRoomMember"> | Date | string
    updatedAt?: DateTimeNullableFilter<"ChatRoomMember"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"ChatRoomMember"> | Date | string | null
    chatRoom?: XOR<ChatRoomScalarRelationFilter, ChatRoomWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "documentId" | "chatRoomId_userId">

  export type ChatRoomMemberOrderByWithAggregationInput = {
    id?: SortOrder
    documentId?: SortOrder
    chatRoomId?: SortOrder
    userId?: SortOrder
    isMuted?: SortOrder
    isArchived?: SortOrder
    isBanned?: SortOrder
    lastReadMessageId?: SortOrder
    role?: SortOrder
    leftAt?: SortOrderInput | SortOrder
    unreadMessagesCount?: SortOrder
    permissions?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: ChatRoomMemberCountOrderByAggregateInput
    _avg?: ChatRoomMemberAvgOrderByAggregateInput
    _max?: ChatRoomMemberMaxOrderByAggregateInput
    _min?: ChatRoomMemberMinOrderByAggregateInput
    _sum?: ChatRoomMemberSumOrderByAggregateInput
  }

  export type ChatRoomMemberScalarWhereWithAggregatesInput = {
    AND?: ChatRoomMemberScalarWhereWithAggregatesInput | ChatRoomMemberScalarWhereWithAggregatesInput[]
    OR?: ChatRoomMemberScalarWhereWithAggregatesInput[]
    NOT?: ChatRoomMemberScalarWhereWithAggregatesInput | ChatRoomMemberScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"ChatRoomMember"> | bigint | number
    documentId?: UuidWithAggregatesFilter<"ChatRoomMember"> | string
    chatRoomId?: UuidWithAggregatesFilter<"ChatRoomMember"> | string
    userId?: UuidWithAggregatesFilter<"ChatRoomMember"> | string
    isMuted?: BoolWithAggregatesFilter<"ChatRoomMember"> | boolean
    isArchived?: BoolWithAggregatesFilter<"ChatRoomMember"> | boolean
    isBanned?: BoolWithAggregatesFilter<"ChatRoomMember"> | boolean
    lastReadMessageId?: UuidWithAggregatesFilter<"ChatRoomMember"> | string
    role?: IntWithAggregatesFilter<"ChatRoomMember"> | number
    leftAt?: DateTimeNullableWithAggregatesFilter<"ChatRoomMember"> | Date | string | null
    unreadMessagesCount?: IntWithAggregatesFilter<"ChatRoomMember"> | number
    permissions?: JsonWithAggregatesFilter<"ChatRoomMember">
    createdBy?: IntWithAggregatesFilter<"ChatRoomMember"> | number
    updatedBy?: IntWithAggregatesFilter<"ChatRoomMember"> | number
    deletedBy?: IntWithAggregatesFilter<"ChatRoomMember"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ChatRoomMember"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"ChatRoomMember"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"ChatRoomMember"> | Date | string | null
  }

  export type AttachmentWhereInput = {
    AND?: AttachmentWhereInput | AttachmentWhereInput[]
    OR?: AttachmentWhereInput[]
    NOT?: AttachmentWhereInput | AttachmentWhereInput[]
    id?: IntFilter<"Attachment"> | number
    documentId?: UuidFilter<"Attachment"> | string
    originalName?: StringFilter<"Attachment"> | string
    fileName?: StringFilter<"Attachment"> | string
    mimeType?: StringFilter<"Attachment"> | string
    fileSize?: BigIntFilter<"Attachment"> | bigint | number
    filePath?: StringFilter<"Attachment"> | string
    thumbnailPath?: StringNullableFilter<"Attachment"> | string | null
    uploadedBy?: UuidFilter<"Attachment"> | string
    isPublic?: BoolFilter<"Attachment"> | boolean
    metadata?: JsonFilter<"Attachment">
    virusScanStatus?: IntFilter<"Attachment"> | number
    virusScanResult?: JsonNullableFilter<"Attachment">
    expiresAt?: DateTimeNullableFilter<"Attachment"> | Date | string | null
    createdBy?: IntFilter<"Attachment"> | number
    updatedBy?: IntFilter<"Attachment"> | number
    deletedBy?: IntFilter<"Attachment"> | number
    createdAt?: DateTimeFilter<"Attachment"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Attachment"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Attachment"> | Date | string | null
    uploader?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AttachmentOrderByWithRelationInput = {
    id?: SortOrder
    documentId?: SortOrder
    originalName?: SortOrder
    fileName?: SortOrder
    mimeType?: SortOrder
    fileSize?: SortOrder
    filePath?: SortOrder
    thumbnailPath?: SortOrderInput | SortOrder
    uploadedBy?: SortOrder
    isPublic?: SortOrder
    metadata?: SortOrder
    virusScanStatus?: SortOrder
    virusScanResult?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    uploader?: UserOrderByWithRelationInput
  }

  export type AttachmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    documentId?: string
    AND?: AttachmentWhereInput | AttachmentWhereInput[]
    OR?: AttachmentWhereInput[]
    NOT?: AttachmentWhereInput | AttachmentWhereInput[]
    originalName?: StringFilter<"Attachment"> | string
    fileName?: StringFilter<"Attachment"> | string
    mimeType?: StringFilter<"Attachment"> | string
    fileSize?: BigIntFilter<"Attachment"> | bigint | number
    filePath?: StringFilter<"Attachment"> | string
    thumbnailPath?: StringNullableFilter<"Attachment"> | string | null
    uploadedBy?: UuidFilter<"Attachment"> | string
    isPublic?: BoolFilter<"Attachment"> | boolean
    metadata?: JsonFilter<"Attachment">
    virusScanStatus?: IntFilter<"Attachment"> | number
    virusScanResult?: JsonNullableFilter<"Attachment">
    expiresAt?: DateTimeNullableFilter<"Attachment"> | Date | string | null
    createdBy?: IntFilter<"Attachment"> | number
    updatedBy?: IntFilter<"Attachment"> | number
    deletedBy?: IntFilter<"Attachment"> | number
    createdAt?: DateTimeFilter<"Attachment"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Attachment"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Attachment"> | Date | string | null
    uploader?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "documentId">

  export type AttachmentOrderByWithAggregationInput = {
    id?: SortOrder
    documentId?: SortOrder
    originalName?: SortOrder
    fileName?: SortOrder
    mimeType?: SortOrder
    fileSize?: SortOrder
    filePath?: SortOrder
    thumbnailPath?: SortOrderInput | SortOrder
    uploadedBy?: SortOrder
    isPublic?: SortOrder
    metadata?: SortOrder
    virusScanStatus?: SortOrder
    virusScanResult?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: AttachmentCountOrderByAggregateInput
    _avg?: AttachmentAvgOrderByAggregateInput
    _max?: AttachmentMaxOrderByAggregateInput
    _min?: AttachmentMinOrderByAggregateInput
    _sum?: AttachmentSumOrderByAggregateInput
  }

  export type AttachmentScalarWhereWithAggregatesInput = {
    AND?: AttachmentScalarWhereWithAggregatesInput | AttachmentScalarWhereWithAggregatesInput[]
    OR?: AttachmentScalarWhereWithAggregatesInput[]
    NOT?: AttachmentScalarWhereWithAggregatesInput | AttachmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Attachment"> | number
    documentId?: UuidWithAggregatesFilter<"Attachment"> | string
    originalName?: StringWithAggregatesFilter<"Attachment"> | string
    fileName?: StringWithAggregatesFilter<"Attachment"> | string
    mimeType?: StringWithAggregatesFilter<"Attachment"> | string
    fileSize?: BigIntWithAggregatesFilter<"Attachment"> | bigint | number
    filePath?: StringWithAggregatesFilter<"Attachment"> | string
    thumbnailPath?: StringNullableWithAggregatesFilter<"Attachment"> | string | null
    uploadedBy?: UuidWithAggregatesFilter<"Attachment"> | string
    isPublic?: BoolWithAggregatesFilter<"Attachment"> | boolean
    metadata?: JsonWithAggregatesFilter<"Attachment">
    virusScanStatus?: IntWithAggregatesFilter<"Attachment"> | number
    virusScanResult?: JsonNullableWithAggregatesFilter<"Attachment">
    expiresAt?: DateTimeNullableWithAggregatesFilter<"Attachment"> | Date | string | null
    createdBy?: IntWithAggregatesFilter<"Attachment"> | number
    updatedBy?: IntWithAggregatesFilter<"Attachment"> | number
    deletedBy?: IntWithAggregatesFilter<"Attachment"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Attachment"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Attachment"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Attachment"> | Date | string | null
  }

  export type UserCreateInput = {
    documentId?: string
    name: string
    email?: string | null
    username: string
    password: string
    profilePictureUrl?: string | null
    bio?: string | null
    phoneNumber?: string | null
    lastActivityDate?: Date | string
    status?: number
    isActive?: boolean
    isVerified?: boolean
    themePreference?: number
    notificationSettings?: JsonNullValueInput | InputJsonValue
    privacySettings?: JsonNullValueInput | InputJsonValue
    createdBy: number
    updatedBy: number
    deletedBy?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    sessions?: UserSessionCreateNestedManyWithoutUserInput
    chatRoomMemberships?: ChatRoomMemberCreateNestedManyWithoutUserInput
    createdChatRooms?: ChatRoomCreateNestedManyWithoutCreatorInput
    requestedRelationships?: UserRelationshipCreateNestedManyWithoutRequesterInput
    receivedRelationships?: UserRelationshipCreateNestedManyWithoutAddresseeInput
    devices?: UserDeviceCreateNestedManyWithoutUserInput
    uploadedFiles?: AttachmentCreateNestedManyWithoutUploaderInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    documentId?: string
    name: string
    email?: string | null
    username: string
    password: string
    profilePictureUrl?: string | null
    bio?: string | null
    phoneNumber?: string | null
    lastActivityDate?: Date | string
    status?: number
    isActive?: boolean
    isVerified?: boolean
    themePreference?: number
    notificationSettings?: JsonNullValueInput | InputJsonValue
    privacySettings?: JsonNullValueInput | InputJsonValue
    createdBy: number
    updatedBy: number
    deletedBy?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    sessions?: UserSessionUncheckedCreateNestedManyWithoutUserInput
    chatRoomMemberships?: ChatRoomMemberUncheckedCreateNestedManyWithoutUserInput
    createdChatRooms?: ChatRoomUncheckedCreateNestedManyWithoutCreatorInput
    requestedRelationships?: UserRelationshipUncheckedCreateNestedManyWithoutRequesterInput
    receivedRelationships?: UserRelationshipUncheckedCreateNestedManyWithoutAddresseeInput
    devices?: UserDeviceUncheckedCreateNestedManyWithoutUserInput
    uploadedFiles?: AttachmentUncheckedCreateNestedManyWithoutUploaderInput
  }

  export type UserUpdateInput = {
    documentId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    lastActivityDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    themePreference?: IntFieldUpdateOperationsInput | number
    notificationSettings?: JsonNullValueInput | InputJsonValue
    privacySettings?: JsonNullValueInput | InputJsonValue
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: UserSessionUpdateManyWithoutUserNestedInput
    chatRoomMemberships?: ChatRoomMemberUpdateManyWithoutUserNestedInput
    createdChatRooms?: ChatRoomUpdateManyWithoutCreatorNestedInput
    requestedRelationships?: UserRelationshipUpdateManyWithoutRequesterNestedInput
    receivedRelationships?: UserRelationshipUpdateManyWithoutAddresseeNestedInput
    devices?: UserDeviceUpdateManyWithoutUserNestedInput
    uploadedFiles?: AttachmentUpdateManyWithoutUploaderNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    lastActivityDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    themePreference?: IntFieldUpdateOperationsInput | number
    notificationSettings?: JsonNullValueInput | InputJsonValue
    privacySettings?: JsonNullValueInput | InputJsonValue
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: UserSessionUncheckedUpdateManyWithoutUserNestedInput
    chatRoomMemberships?: ChatRoomMemberUncheckedUpdateManyWithoutUserNestedInput
    createdChatRooms?: ChatRoomUncheckedUpdateManyWithoutCreatorNestedInput
    requestedRelationships?: UserRelationshipUncheckedUpdateManyWithoutRequesterNestedInput
    receivedRelationships?: UserRelationshipUncheckedUpdateManyWithoutAddresseeNestedInput
    devices?: UserDeviceUncheckedUpdateManyWithoutUserNestedInput
    uploadedFiles?: AttachmentUncheckedUpdateManyWithoutUploaderNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    documentId?: string
    name: string
    email?: string | null
    username: string
    password: string
    profilePictureUrl?: string | null
    bio?: string | null
    phoneNumber?: string | null
    lastActivityDate?: Date | string
    status?: number
    isActive?: boolean
    isVerified?: boolean
    themePreference?: number
    notificationSettings?: JsonNullValueInput | InputJsonValue
    privacySettings?: JsonNullValueInput | InputJsonValue
    createdBy: number
    updatedBy: number
    deletedBy?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    documentId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    lastActivityDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    themePreference?: IntFieldUpdateOperationsInput | number
    notificationSettings?: JsonNullValueInput | InputJsonValue
    privacySettings?: JsonNullValueInput | InputJsonValue
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    lastActivityDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    themePreference?: IntFieldUpdateOperationsInput | number
    notificationSettings?: JsonNullValueInput | InputJsonValue
    privacySettings?: JsonNullValueInput | InputJsonValue
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserSessionCreateInput = {
    documentId?: string
    sessionToken: string
    refreshToken: string
    deviceInfo?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    userAgent?: string | null
    isActive?: boolean
    expiresAt: Date | string
    lastActivityAt?: Date | string
    createdBy: number
    updatedBy: number
    deletedBy?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type UserSessionUncheckedCreateInput = {
    id?: number
    documentId?: string
    userId: string
    sessionToken: string
    refreshToken: string
    deviceInfo?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    userAgent?: string | null
    isActive?: boolean
    expiresAt: Date | string
    lastActivityAt?: Date | string
    createdBy: number
    updatedBy: number
    deletedBy?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type UserSessionUpdateInput = {
    documentId?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    deviceInfo?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type UserSessionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    deviceInfo?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserSessionCreateManyInput = {
    id?: number
    documentId?: string
    userId: string
    sessionToken: string
    refreshToken: string
    deviceInfo?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    userAgent?: string | null
    isActive?: boolean
    expiresAt: Date | string
    lastActivityAt?: Date | string
    createdBy: number
    updatedBy: number
    deletedBy?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type UserSessionUpdateManyMutationInput = {
    documentId?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    deviceInfo?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserSessionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    deviceInfo?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserDeviceCreateInput = {
    documentId?: string
    deviceToken: string
    deviceType: number
    deviceName?: string | null
    appVersion?: string | null
    osVersion?: string | null
    isActive?: boolean
    lastUsedAt?: Date | string
    createdBy: number
    updatedBy: number
    deletedBy?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutDevicesInput
  }

  export type UserDeviceUncheckedCreateInput = {
    id?: number
    documentId?: string
    userId: string
    deviceToken: string
    deviceType: number
    deviceName?: string | null
    appVersion?: string | null
    osVersion?: string | null
    isActive?: boolean
    lastUsedAt?: Date | string
    createdBy: number
    updatedBy: number
    deletedBy?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type UserDeviceUpdateInput = {
    documentId?: StringFieldUpdateOperationsInput | string
    deviceToken?: StringFieldUpdateOperationsInput | string
    deviceType?: IntFieldUpdateOperationsInput | number
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null
    appVersion?: NullableStringFieldUpdateOperationsInput | string | null
    osVersion?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastUsedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutDevicesNestedInput
  }

  export type UserDeviceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    deviceToken?: StringFieldUpdateOperationsInput | string
    deviceType?: IntFieldUpdateOperationsInput | number
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null
    appVersion?: NullableStringFieldUpdateOperationsInput | string | null
    osVersion?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastUsedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserDeviceCreateManyInput = {
    id?: number
    documentId?: string
    userId: string
    deviceToken: string
    deviceType: number
    deviceName?: string | null
    appVersion?: string | null
    osVersion?: string | null
    isActive?: boolean
    lastUsedAt?: Date | string
    createdBy: number
    updatedBy: number
    deletedBy?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type UserDeviceUpdateManyMutationInput = {
    documentId?: StringFieldUpdateOperationsInput | string
    deviceToken?: StringFieldUpdateOperationsInput | string
    deviceType?: IntFieldUpdateOperationsInput | number
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null
    appVersion?: NullableStringFieldUpdateOperationsInput | string | null
    osVersion?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastUsedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserDeviceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    deviceToken?: StringFieldUpdateOperationsInput | string
    deviceType?: IntFieldUpdateOperationsInput | number
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null
    appVersion?: NullableStringFieldUpdateOperationsInput | string | null
    osVersion?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastUsedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserRelationshipCreateInput = {
    documentId?: string
    status?: number
    createdBy: number
    updatedBy: number
    deletedBy?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    requester: UserCreateNestedOneWithoutRequestedRelationshipsInput
    addressee: UserCreateNestedOneWithoutReceivedRelationshipsInput
  }

  export type UserRelationshipUncheckedCreateInput = {
    id?: number
    documentId?: string
    requesterId: string
    addresseeId: string
    status?: number
    createdBy: number
    updatedBy: number
    deletedBy?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type UserRelationshipUpdateInput = {
    documentId?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requester?: UserUpdateOneRequiredWithoutRequestedRelationshipsNestedInput
    addressee?: UserUpdateOneRequiredWithoutReceivedRelationshipsNestedInput
  }

  export type UserRelationshipUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentId?: StringFieldUpdateOperationsInput | string
    requesterId?: StringFieldUpdateOperationsInput | string
    addresseeId?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserRelationshipCreateManyInput = {
    id?: number
    documentId?: string
    requesterId: string
    addresseeId: string
    status?: number
    createdBy: number
    updatedBy: number
    deletedBy?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type UserRelationshipUpdateManyMutationInput = {
    documentId?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserRelationshipUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentId?: StringFieldUpdateOperationsInput | string
    requesterId?: StringFieldUpdateOperationsInput | string
    addresseeId?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ChatRoomCreateInput = {
    id?: bigint | number
    documentId?: string
    name: string
    type: number
    description?: string | null
    lastMessageDate?: Date | string
    updatedBy: number
    deletedBy?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    members?: ChatRoomMemberCreateNestedManyWithoutChatRoomInput
    creator: UserCreateNestedOneWithoutCreatedChatRoomsInput
  }

  export type ChatRoomUncheckedCreateInput = {
    id?: bigint | number
    documentId?: string
    name: string
    type: number
    description?: string | null
    lastMessageDate?: Date | string
    createdBy: number
    updatedBy: number
    deletedBy?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    members?: ChatRoomMemberUncheckedCreateNestedManyWithoutChatRoomInput
  }

  export type ChatRoomUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    documentId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    members?: ChatRoomMemberUpdateManyWithoutChatRoomNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedChatRoomsNestedInput
  }

  export type ChatRoomUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    documentId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    members?: ChatRoomMemberUncheckedUpdateManyWithoutChatRoomNestedInput
  }

  export type ChatRoomCreateManyInput = {
    id?: bigint | number
    documentId?: string
    name: string
    type: number
    description?: string | null
    lastMessageDate?: Date | string
    createdBy: number
    updatedBy: number
    deletedBy?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type ChatRoomUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    documentId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ChatRoomUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    documentId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ChatRoomMemberCreateInput = {
    id?: bigint | number
    documentId?: string
    isMuted?: boolean
    isArchived?: boolean
    isBanned?: boolean
    lastReadMessageId?: string
    role?: number
    leftAt?: Date | string | null
    unreadMessagesCount?: number
    permissions?: JsonNullValueInput | InputJsonValue
    createdBy: number
    updatedBy: number
    deletedBy?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    chatRoom: ChatRoomCreateNestedOneWithoutMembersInput
    user: UserCreateNestedOneWithoutChatRoomMembershipsInput
  }

  export type ChatRoomMemberUncheckedCreateInput = {
    id?: bigint | number
    documentId?: string
    chatRoomId: string
    userId: string
    isMuted?: boolean
    isArchived?: boolean
    isBanned?: boolean
    lastReadMessageId?: string
    role?: number
    leftAt?: Date | string | null
    unreadMessagesCount?: number
    permissions?: JsonNullValueInput | InputJsonValue
    createdBy: number
    updatedBy: number
    deletedBy?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type ChatRoomMemberUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    documentId?: StringFieldUpdateOperationsInput | string
    isMuted?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    lastReadMessageId?: StringFieldUpdateOperationsInput | string
    role?: IntFieldUpdateOperationsInput | number
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unreadMessagesCount?: IntFieldUpdateOperationsInput | number
    permissions?: JsonNullValueInput | InputJsonValue
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chatRoom?: ChatRoomUpdateOneRequiredWithoutMembersNestedInput
    user?: UserUpdateOneRequiredWithoutChatRoomMembershipsNestedInput
  }

  export type ChatRoomMemberUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    documentId?: StringFieldUpdateOperationsInput | string
    chatRoomId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isMuted?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    lastReadMessageId?: StringFieldUpdateOperationsInput | string
    role?: IntFieldUpdateOperationsInput | number
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unreadMessagesCount?: IntFieldUpdateOperationsInput | number
    permissions?: JsonNullValueInput | InputJsonValue
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ChatRoomMemberCreateManyInput = {
    id?: bigint | number
    documentId?: string
    chatRoomId: string
    userId: string
    isMuted?: boolean
    isArchived?: boolean
    isBanned?: boolean
    lastReadMessageId?: string
    role?: number
    leftAt?: Date | string | null
    unreadMessagesCount?: number
    permissions?: JsonNullValueInput | InputJsonValue
    createdBy: number
    updatedBy: number
    deletedBy?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type ChatRoomMemberUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    documentId?: StringFieldUpdateOperationsInput | string
    isMuted?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    lastReadMessageId?: StringFieldUpdateOperationsInput | string
    role?: IntFieldUpdateOperationsInput | number
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unreadMessagesCount?: IntFieldUpdateOperationsInput | number
    permissions?: JsonNullValueInput | InputJsonValue
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ChatRoomMemberUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    documentId?: StringFieldUpdateOperationsInput | string
    chatRoomId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isMuted?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    lastReadMessageId?: StringFieldUpdateOperationsInput | string
    role?: IntFieldUpdateOperationsInput | number
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unreadMessagesCount?: IntFieldUpdateOperationsInput | number
    permissions?: JsonNullValueInput | InputJsonValue
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AttachmentCreateInput = {
    documentId?: string
    originalName: string
    fileName: string
    mimeType: string
    fileSize: bigint | number
    filePath: string
    thumbnailPath?: string | null
    isPublic?: boolean
    metadata?: JsonNullValueInput | InputJsonValue
    virusScanStatus?: number
    virusScanResult?: NullableJsonNullValueInput | InputJsonValue
    expiresAt?: Date | string | null
    createdBy: number
    updatedBy: number
    deletedBy?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    uploader: UserCreateNestedOneWithoutUploadedFilesInput
  }

  export type AttachmentUncheckedCreateInput = {
    id?: number
    documentId?: string
    originalName: string
    fileName: string
    mimeType: string
    fileSize: bigint | number
    filePath: string
    thumbnailPath?: string | null
    uploadedBy: string
    isPublic?: boolean
    metadata?: JsonNullValueInput | InputJsonValue
    virusScanStatus?: number
    virusScanResult?: NullableJsonNullValueInput | InputJsonValue
    expiresAt?: Date | string | null
    createdBy: number
    updatedBy: number
    deletedBy?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type AttachmentUpdateInput = {
    documentId?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    fileSize?: BigIntFieldUpdateOperationsInput | bigint | number
    filePath?: StringFieldUpdateOperationsInput | string
    thumbnailPath?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    metadata?: JsonNullValueInput | InputJsonValue
    virusScanStatus?: IntFieldUpdateOperationsInput | number
    virusScanResult?: NullableJsonNullValueInput | InputJsonValue
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    uploader?: UserUpdateOneRequiredWithoutUploadedFilesNestedInput
  }

  export type AttachmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentId?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    fileSize?: BigIntFieldUpdateOperationsInput | bigint | number
    filePath?: StringFieldUpdateOperationsInput | string
    thumbnailPath?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedBy?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    metadata?: JsonNullValueInput | InputJsonValue
    virusScanStatus?: IntFieldUpdateOperationsInput | number
    virusScanResult?: NullableJsonNullValueInput | InputJsonValue
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AttachmentCreateManyInput = {
    id?: number
    documentId?: string
    originalName: string
    fileName: string
    mimeType: string
    fileSize: bigint | number
    filePath: string
    thumbnailPath?: string | null
    uploadedBy: string
    isPublic?: boolean
    metadata?: JsonNullValueInput | InputJsonValue
    virusScanStatus?: number
    virusScanResult?: NullableJsonNullValueInput | InputJsonValue
    expiresAt?: Date | string | null
    createdBy: number
    updatedBy: number
    deletedBy?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type AttachmentUpdateManyMutationInput = {
    documentId?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    fileSize?: BigIntFieldUpdateOperationsInput | bigint | number
    filePath?: StringFieldUpdateOperationsInput | string
    thumbnailPath?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    metadata?: JsonNullValueInput | InputJsonValue
    virusScanStatus?: IntFieldUpdateOperationsInput | number
    virusScanResult?: NullableJsonNullValueInput | InputJsonValue
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AttachmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentId?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    fileSize?: BigIntFieldUpdateOperationsInput | bigint | number
    filePath?: StringFieldUpdateOperationsInput | string
    thumbnailPath?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedBy?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    metadata?: JsonNullValueInput | InputJsonValue
    virusScanStatus?: IntFieldUpdateOperationsInput | number
    virusScanResult?: NullableJsonNullValueInput | InputJsonValue
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type UserSessionListRelationFilter = {
    every?: UserSessionWhereInput
    some?: UserSessionWhereInput
    none?: UserSessionWhereInput
  }

  export type ChatRoomMemberListRelationFilter = {
    every?: ChatRoomMemberWhereInput
    some?: ChatRoomMemberWhereInput
    none?: ChatRoomMemberWhereInput
  }

  export type ChatRoomListRelationFilter = {
    every?: ChatRoomWhereInput
    some?: ChatRoomWhereInput
    none?: ChatRoomWhereInput
  }

  export type UserRelationshipListRelationFilter = {
    every?: UserRelationshipWhereInput
    some?: UserRelationshipWhereInput
    none?: UserRelationshipWhereInput
  }

  export type UserDeviceListRelationFilter = {
    every?: UserDeviceWhereInput
    some?: UserDeviceWhereInput
    none?: UserDeviceWhereInput
  }

  export type AttachmentListRelationFilter = {
    every?: AttachmentWhereInput
    some?: AttachmentWhereInput
    none?: AttachmentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatRoomMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatRoomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserRelationshipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserDeviceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttachmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    profilePictureUrl?: SortOrder
    bio?: SortOrder
    phoneNumber?: SortOrder
    lastActivityDate?: SortOrder
    status?: SortOrder
    isActive?: SortOrder
    isVerified?: SortOrder
    themePreference?: SortOrder
    notificationSettings?: SortOrder
    privacySettings?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    themePreference?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    profilePictureUrl?: SortOrder
    bio?: SortOrder
    phoneNumber?: SortOrder
    lastActivityDate?: SortOrder
    status?: SortOrder
    isActive?: SortOrder
    isVerified?: SortOrder
    themePreference?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    profilePictureUrl?: SortOrder
    bio?: SortOrder
    phoneNumber?: SortOrder
    lastActivityDate?: SortOrder
    status?: SortOrder
    isActive?: SortOrder
    isVerified?: SortOrder
    themePreference?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    themePreference?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
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

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
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
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserSessionCountOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    userId?: SortOrder
    sessionToken?: SortOrder
    refreshToken?: SortOrder
    deviceInfo?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    isActive?: SortOrder
    expiresAt?: SortOrder
    lastActivityAt?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserSessionAvgOrderByAggregateInput = {
    id?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
  }

  export type UserSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    userId?: SortOrder
    sessionToken?: SortOrder
    refreshToken?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    isActive?: SortOrder
    expiresAt?: SortOrder
    lastActivityAt?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserSessionMinOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    userId?: SortOrder
    sessionToken?: SortOrder
    refreshToken?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    isActive?: SortOrder
    expiresAt?: SortOrder
    lastActivityAt?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserSessionSumOrderByAggregateInput = {
    id?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type UserDeviceCountOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    userId?: SortOrder
    deviceToken?: SortOrder
    deviceType?: SortOrder
    deviceName?: SortOrder
    appVersion?: SortOrder
    osVersion?: SortOrder
    isActive?: SortOrder
    lastUsedAt?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserDeviceAvgOrderByAggregateInput = {
    id?: SortOrder
    deviceType?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
  }

  export type UserDeviceMaxOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    userId?: SortOrder
    deviceToken?: SortOrder
    deviceType?: SortOrder
    deviceName?: SortOrder
    appVersion?: SortOrder
    osVersion?: SortOrder
    isActive?: SortOrder
    lastUsedAt?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserDeviceMinOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    userId?: SortOrder
    deviceToken?: SortOrder
    deviceType?: SortOrder
    deviceName?: SortOrder
    appVersion?: SortOrder
    osVersion?: SortOrder
    isActive?: SortOrder
    lastUsedAt?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserDeviceSumOrderByAggregateInput = {
    id?: SortOrder
    deviceType?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
  }

  export type UserRelationshipRequesterIdAddresseeIdCompoundUniqueInput = {
    requesterId: string
    addresseeId: string
  }

  export type UserRelationshipCountOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    requesterId?: SortOrder
    addresseeId?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserRelationshipAvgOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
  }

  export type UserRelationshipMaxOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    requesterId?: SortOrder
    addresseeId?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserRelationshipMinOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    requesterId?: SortOrder
    addresseeId?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserRelationshipSumOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type ChatRoomCountOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    lastMessageDate?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ChatRoomAvgOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
  }

  export type ChatRoomMaxOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    lastMessageDate?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ChatRoomMinOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    lastMessageDate?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ChatRoomSumOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type ChatRoomScalarRelationFilter = {
    is?: ChatRoomWhereInput
    isNot?: ChatRoomWhereInput
  }

  export type ChatRoomMemberChatRoomIdUserIdCompoundUniqueInput = {
    chatRoomId: string
    userId: string
  }

  export type ChatRoomMemberCountOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    chatRoomId?: SortOrder
    userId?: SortOrder
    isMuted?: SortOrder
    isArchived?: SortOrder
    isBanned?: SortOrder
    lastReadMessageId?: SortOrder
    role?: SortOrder
    leftAt?: SortOrder
    unreadMessagesCount?: SortOrder
    permissions?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ChatRoomMemberAvgOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    unreadMessagesCount?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
  }

  export type ChatRoomMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    chatRoomId?: SortOrder
    userId?: SortOrder
    isMuted?: SortOrder
    isArchived?: SortOrder
    isBanned?: SortOrder
    lastReadMessageId?: SortOrder
    role?: SortOrder
    leftAt?: SortOrder
    unreadMessagesCount?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ChatRoomMemberMinOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    chatRoomId?: SortOrder
    userId?: SortOrder
    isMuted?: SortOrder
    isArchived?: SortOrder
    isBanned?: SortOrder
    lastReadMessageId?: SortOrder
    role?: SortOrder
    leftAt?: SortOrder
    unreadMessagesCount?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ChatRoomMemberSumOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    unreadMessagesCount?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
  }

  export type AttachmentCountOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    originalName?: SortOrder
    fileName?: SortOrder
    mimeType?: SortOrder
    fileSize?: SortOrder
    filePath?: SortOrder
    thumbnailPath?: SortOrder
    uploadedBy?: SortOrder
    isPublic?: SortOrder
    metadata?: SortOrder
    virusScanStatus?: SortOrder
    virusScanResult?: SortOrder
    expiresAt?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type AttachmentAvgOrderByAggregateInput = {
    id?: SortOrder
    fileSize?: SortOrder
    virusScanStatus?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
  }

  export type AttachmentMaxOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    originalName?: SortOrder
    fileName?: SortOrder
    mimeType?: SortOrder
    fileSize?: SortOrder
    filePath?: SortOrder
    thumbnailPath?: SortOrder
    uploadedBy?: SortOrder
    isPublic?: SortOrder
    virusScanStatus?: SortOrder
    expiresAt?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type AttachmentMinOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    originalName?: SortOrder
    fileName?: SortOrder
    mimeType?: SortOrder
    fileSize?: SortOrder
    filePath?: SortOrder
    thumbnailPath?: SortOrder
    uploadedBy?: SortOrder
    isPublic?: SortOrder
    virusScanStatus?: SortOrder
    expiresAt?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type AttachmentSumOrderByAggregateInput = {
    id?: SortOrder
    fileSize?: SortOrder
    virusScanStatus?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
  }

  export type UserSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSessionCreateWithoutUserInput, UserSessionUncheckedCreateWithoutUserInput> | UserSessionCreateWithoutUserInput[] | UserSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSessionCreateOrConnectWithoutUserInput | UserSessionCreateOrConnectWithoutUserInput[]
    createMany?: UserSessionCreateManyUserInputEnvelope
    connect?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
  }

  export type ChatRoomMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatRoomMemberCreateWithoutUserInput, ChatRoomMemberUncheckedCreateWithoutUserInput> | ChatRoomMemberCreateWithoutUserInput[] | ChatRoomMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatRoomMemberCreateOrConnectWithoutUserInput | ChatRoomMemberCreateOrConnectWithoutUserInput[]
    createMany?: ChatRoomMemberCreateManyUserInputEnvelope
    connect?: ChatRoomMemberWhereUniqueInput | ChatRoomMemberWhereUniqueInput[]
  }

  export type ChatRoomCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ChatRoomCreateWithoutCreatorInput, ChatRoomUncheckedCreateWithoutCreatorInput> | ChatRoomCreateWithoutCreatorInput[] | ChatRoomUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ChatRoomCreateOrConnectWithoutCreatorInput | ChatRoomCreateOrConnectWithoutCreatorInput[]
    createMany?: ChatRoomCreateManyCreatorInputEnvelope
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
  }

  export type UserRelationshipCreateNestedManyWithoutRequesterInput = {
    create?: XOR<UserRelationshipCreateWithoutRequesterInput, UserRelationshipUncheckedCreateWithoutRequesterInput> | UserRelationshipCreateWithoutRequesterInput[] | UserRelationshipUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: UserRelationshipCreateOrConnectWithoutRequesterInput | UserRelationshipCreateOrConnectWithoutRequesterInput[]
    createMany?: UserRelationshipCreateManyRequesterInputEnvelope
    connect?: UserRelationshipWhereUniqueInput | UserRelationshipWhereUniqueInput[]
  }

  export type UserRelationshipCreateNestedManyWithoutAddresseeInput = {
    create?: XOR<UserRelationshipCreateWithoutAddresseeInput, UserRelationshipUncheckedCreateWithoutAddresseeInput> | UserRelationshipCreateWithoutAddresseeInput[] | UserRelationshipUncheckedCreateWithoutAddresseeInput[]
    connectOrCreate?: UserRelationshipCreateOrConnectWithoutAddresseeInput | UserRelationshipCreateOrConnectWithoutAddresseeInput[]
    createMany?: UserRelationshipCreateManyAddresseeInputEnvelope
    connect?: UserRelationshipWhereUniqueInput | UserRelationshipWhereUniqueInput[]
  }

  export type UserDeviceCreateNestedManyWithoutUserInput = {
    create?: XOR<UserDeviceCreateWithoutUserInput, UserDeviceUncheckedCreateWithoutUserInput> | UserDeviceCreateWithoutUserInput[] | UserDeviceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserDeviceCreateOrConnectWithoutUserInput | UserDeviceCreateOrConnectWithoutUserInput[]
    createMany?: UserDeviceCreateManyUserInputEnvelope
    connect?: UserDeviceWhereUniqueInput | UserDeviceWhereUniqueInput[]
  }

  export type AttachmentCreateNestedManyWithoutUploaderInput = {
    create?: XOR<AttachmentCreateWithoutUploaderInput, AttachmentUncheckedCreateWithoutUploaderInput> | AttachmentCreateWithoutUploaderInput[] | AttachmentUncheckedCreateWithoutUploaderInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutUploaderInput | AttachmentCreateOrConnectWithoutUploaderInput[]
    createMany?: AttachmentCreateManyUploaderInputEnvelope
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
  }

  export type UserSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSessionCreateWithoutUserInput, UserSessionUncheckedCreateWithoutUserInput> | UserSessionCreateWithoutUserInput[] | UserSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSessionCreateOrConnectWithoutUserInput | UserSessionCreateOrConnectWithoutUserInput[]
    createMany?: UserSessionCreateManyUserInputEnvelope
    connect?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
  }

  export type ChatRoomMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatRoomMemberCreateWithoutUserInput, ChatRoomMemberUncheckedCreateWithoutUserInput> | ChatRoomMemberCreateWithoutUserInput[] | ChatRoomMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatRoomMemberCreateOrConnectWithoutUserInput | ChatRoomMemberCreateOrConnectWithoutUserInput[]
    createMany?: ChatRoomMemberCreateManyUserInputEnvelope
    connect?: ChatRoomMemberWhereUniqueInput | ChatRoomMemberWhereUniqueInput[]
  }

  export type ChatRoomUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ChatRoomCreateWithoutCreatorInput, ChatRoomUncheckedCreateWithoutCreatorInput> | ChatRoomCreateWithoutCreatorInput[] | ChatRoomUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ChatRoomCreateOrConnectWithoutCreatorInput | ChatRoomCreateOrConnectWithoutCreatorInput[]
    createMany?: ChatRoomCreateManyCreatorInputEnvelope
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
  }

  export type UserRelationshipUncheckedCreateNestedManyWithoutRequesterInput = {
    create?: XOR<UserRelationshipCreateWithoutRequesterInput, UserRelationshipUncheckedCreateWithoutRequesterInput> | UserRelationshipCreateWithoutRequesterInput[] | UserRelationshipUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: UserRelationshipCreateOrConnectWithoutRequesterInput | UserRelationshipCreateOrConnectWithoutRequesterInput[]
    createMany?: UserRelationshipCreateManyRequesterInputEnvelope
    connect?: UserRelationshipWhereUniqueInput | UserRelationshipWhereUniqueInput[]
  }

  export type UserRelationshipUncheckedCreateNestedManyWithoutAddresseeInput = {
    create?: XOR<UserRelationshipCreateWithoutAddresseeInput, UserRelationshipUncheckedCreateWithoutAddresseeInput> | UserRelationshipCreateWithoutAddresseeInput[] | UserRelationshipUncheckedCreateWithoutAddresseeInput[]
    connectOrCreate?: UserRelationshipCreateOrConnectWithoutAddresseeInput | UserRelationshipCreateOrConnectWithoutAddresseeInput[]
    createMany?: UserRelationshipCreateManyAddresseeInputEnvelope
    connect?: UserRelationshipWhereUniqueInput | UserRelationshipWhereUniqueInput[]
  }

  export type UserDeviceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserDeviceCreateWithoutUserInput, UserDeviceUncheckedCreateWithoutUserInput> | UserDeviceCreateWithoutUserInput[] | UserDeviceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserDeviceCreateOrConnectWithoutUserInput | UserDeviceCreateOrConnectWithoutUserInput[]
    createMany?: UserDeviceCreateManyUserInputEnvelope
    connect?: UserDeviceWhereUniqueInput | UserDeviceWhereUniqueInput[]
  }

  export type AttachmentUncheckedCreateNestedManyWithoutUploaderInput = {
    create?: XOR<AttachmentCreateWithoutUploaderInput, AttachmentUncheckedCreateWithoutUploaderInput> | AttachmentCreateWithoutUploaderInput[] | AttachmentUncheckedCreateWithoutUploaderInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutUploaderInput | AttachmentCreateOrConnectWithoutUploaderInput[]
    createMany?: AttachmentCreateManyUploaderInputEnvelope
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
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

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSessionCreateWithoutUserInput, UserSessionUncheckedCreateWithoutUserInput> | UserSessionCreateWithoutUserInput[] | UserSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSessionCreateOrConnectWithoutUserInput | UserSessionCreateOrConnectWithoutUserInput[]
    upsert?: UserSessionUpsertWithWhereUniqueWithoutUserInput | UserSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSessionCreateManyUserInputEnvelope
    set?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
    disconnect?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
    delete?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
    connect?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
    update?: UserSessionUpdateWithWhereUniqueWithoutUserInput | UserSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSessionUpdateManyWithWhereWithoutUserInput | UserSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSessionScalarWhereInput | UserSessionScalarWhereInput[]
  }

  export type ChatRoomMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatRoomMemberCreateWithoutUserInput, ChatRoomMemberUncheckedCreateWithoutUserInput> | ChatRoomMemberCreateWithoutUserInput[] | ChatRoomMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatRoomMemberCreateOrConnectWithoutUserInput | ChatRoomMemberCreateOrConnectWithoutUserInput[]
    upsert?: ChatRoomMemberUpsertWithWhereUniqueWithoutUserInput | ChatRoomMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatRoomMemberCreateManyUserInputEnvelope
    set?: ChatRoomMemberWhereUniqueInput | ChatRoomMemberWhereUniqueInput[]
    disconnect?: ChatRoomMemberWhereUniqueInput | ChatRoomMemberWhereUniqueInput[]
    delete?: ChatRoomMemberWhereUniqueInput | ChatRoomMemberWhereUniqueInput[]
    connect?: ChatRoomMemberWhereUniqueInput | ChatRoomMemberWhereUniqueInput[]
    update?: ChatRoomMemberUpdateWithWhereUniqueWithoutUserInput | ChatRoomMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatRoomMemberUpdateManyWithWhereWithoutUserInput | ChatRoomMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatRoomMemberScalarWhereInput | ChatRoomMemberScalarWhereInput[]
  }

  export type ChatRoomUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ChatRoomCreateWithoutCreatorInput, ChatRoomUncheckedCreateWithoutCreatorInput> | ChatRoomCreateWithoutCreatorInput[] | ChatRoomUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ChatRoomCreateOrConnectWithoutCreatorInput | ChatRoomCreateOrConnectWithoutCreatorInput[]
    upsert?: ChatRoomUpsertWithWhereUniqueWithoutCreatorInput | ChatRoomUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ChatRoomCreateManyCreatorInputEnvelope
    set?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    disconnect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    delete?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    update?: ChatRoomUpdateWithWhereUniqueWithoutCreatorInput | ChatRoomUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ChatRoomUpdateManyWithWhereWithoutCreatorInput | ChatRoomUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ChatRoomScalarWhereInput | ChatRoomScalarWhereInput[]
  }

  export type UserRelationshipUpdateManyWithoutRequesterNestedInput = {
    create?: XOR<UserRelationshipCreateWithoutRequesterInput, UserRelationshipUncheckedCreateWithoutRequesterInput> | UserRelationshipCreateWithoutRequesterInput[] | UserRelationshipUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: UserRelationshipCreateOrConnectWithoutRequesterInput | UserRelationshipCreateOrConnectWithoutRequesterInput[]
    upsert?: UserRelationshipUpsertWithWhereUniqueWithoutRequesterInput | UserRelationshipUpsertWithWhereUniqueWithoutRequesterInput[]
    createMany?: UserRelationshipCreateManyRequesterInputEnvelope
    set?: UserRelationshipWhereUniqueInput | UserRelationshipWhereUniqueInput[]
    disconnect?: UserRelationshipWhereUniqueInput | UserRelationshipWhereUniqueInput[]
    delete?: UserRelationshipWhereUniqueInput | UserRelationshipWhereUniqueInput[]
    connect?: UserRelationshipWhereUniqueInput | UserRelationshipWhereUniqueInput[]
    update?: UserRelationshipUpdateWithWhereUniqueWithoutRequesterInput | UserRelationshipUpdateWithWhereUniqueWithoutRequesterInput[]
    updateMany?: UserRelationshipUpdateManyWithWhereWithoutRequesterInput | UserRelationshipUpdateManyWithWhereWithoutRequesterInput[]
    deleteMany?: UserRelationshipScalarWhereInput | UserRelationshipScalarWhereInput[]
  }

  export type UserRelationshipUpdateManyWithoutAddresseeNestedInput = {
    create?: XOR<UserRelationshipCreateWithoutAddresseeInput, UserRelationshipUncheckedCreateWithoutAddresseeInput> | UserRelationshipCreateWithoutAddresseeInput[] | UserRelationshipUncheckedCreateWithoutAddresseeInput[]
    connectOrCreate?: UserRelationshipCreateOrConnectWithoutAddresseeInput | UserRelationshipCreateOrConnectWithoutAddresseeInput[]
    upsert?: UserRelationshipUpsertWithWhereUniqueWithoutAddresseeInput | UserRelationshipUpsertWithWhereUniqueWithoutAddresseeInput[]
    createMany?: UserRelationshipCreateManyAddresseeInputEnvelope
    set?: UserRelationshipWhereUniqueInput | UserRelationshipWhereUniqueInput[]
    disconnect?: UserRelationshipWhereUniqueInput | UserRelationshipWhereUniqueInput[]
    delete?: UserRelationshipWhereUniqueInput | UserRelationshipWhereUniqueInput[]
    connect?: UserRelationshipWhereUniqueInput | UserRelationshipWhereUniqueInput[]
    update?: UserRelationshipUpdateWithWhereUniqueWithoutAddresseeInput | UserRelationshipUpdateWithWhereUniqueWithoutAddresseeInput[]
    updateMany?: UserRelationshipUpdateManyWithWhereWithoutAddresseeInput | UserRelationshipUpdateManyWithWhereWithoutAddresseeInput[]
    deleteMany?: UserRelationshipScalarWhereInput | UserRelationshipScalarWhereInput[]
  }

  export type UserDeviceUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserDeviceCreateWithoutUserInput, UserDeviceUncheckedCreateWithoutUserInput> | UserDeviceCreateWithoutUserInput[] | UserDeviceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserDeviceCreateOrConnectWithoutUserInput | UserDeviceCreateOrConnectWithoutUserInput[]
    upsert?: UserDeviceUpsertWithWhereUniqueWithoutUserInput | UserDeviceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserDeviceCreateManyUserInputEnvelope
    set?: UserDeviceWhereUniqueInput | UserDeviceWhereUniqueInput[]
    disconnect?: UserDeviceWhereUniqueInput | UserDeviceWhereUniqueInput[]
    delete?: UserDeviceWhereUniqueInput | UserDeviceWhereUniqueInput[]
    connect?: UserDeviceWhereUniqueInput | UserDeviceWhereUniqueInput[]
    update?: UserDeviceUpdateWithWhereUniqueWithoutUserInput | UserDeviceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserDeviceUpdateManyWithWhereWithoutUserInput | UserDeviceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserDeviceScalarWhereInput | UserDeviceScalarWhereInput[]
  }

  export type AttachmentUpdateManyWithoutUploaderNestedInput = {
    create?: XOR<AttachmentCreateWithoutUploaderInput, AttachmentUncheckedCreateWithoutUploaderInput> | AttachmentCreateWithoutUploaderInput[] | AttachmentUncheckedCreateWithoutUploaderInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutUploaderInput | AttachmentCreateOrConnectWithoutUploaderInput[]
    upsert?: AttachmentUpsertWithWhereUniqueWithoutUploaderInput | AttachmentUpsertWithWhereUniqueWithoutUploaderInput[]
    createMany?: AttachmentCreateManyUploaderInputEnvelope
    set?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    disconnect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    delete?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    update?: AttachmentUpdateWithWhereUniqueWithoutUploaderInput | AttachmentUpdateWithWhereUniqueWithoutUploaderInput[]
    updateMany?: AttachmentUpdateManyWithWhereWithoutUploaderInput | AttachmentUpdateManyWithWhereWithoutUploaderInput[]
    deleteMany?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
  }

  export type UserSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSessionCreateWithoutUserInput, UserSessionUncheckedCreateWithoutUserInput> | UserSessionCreateWithoutUserInput[] | UserSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSessionCreateOrConnectWithoutUserInput | UserSessionCreateOrConnectWithoutUserInput[]
    upsert?: UserSessionUpsertWithWhereUniqueWithoutUserInput | UserSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSessionCreateManyUserInputEnvelope
    set?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
    disconnect?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
    delete?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
    connect?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
    update?: UserSessionUpdateWithWhereUniqueWithoutUserInput | UserSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSessionUpdateManyWithWhereWithoutUserInput | UserSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSessionScalarWhereInput | UserSessionScalarWhereInput[]
  }

  export type ChatRoomMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatRoomMemberCreateWithoutUserInput, ChatRoomMemberUncheckedCreateWithoutUserInput> | ChatRoomMemberCreateWithoutUserInput[] | ChatRoomMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatRoomMemberCreateOrConnectWithoutUserInput | ChatRoomMemberCreateOrConnectWithoutUserInput[]
    upsert?: ChatRoomMemberUpsertWithWhereUniqueWithoutUserInput | ChatRoomMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatRoomMemberCreateManyUserInputEnvelope
    set?: ChatRoomMemberWhereUniqueInput | ChatRoomMemberWhereUniqueInput[]
    disconnect?: ChatRoomMemberWhereUniqueInput | ChatRoomMemberWhereUniqueInput[]
    delete?: ChatRoomMemberWhereUniqueInput | ChatRoomMemberWhereUniqueInput[]
    connect?: ChatRoomMemberWhereUniqueInput | ChatRoomMemberWhereUniqueInput[]
    update?: ChatRoomMemberUpdateWithWhereUniqueWithoutUserInput | ChatRoomMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatRoomMemberUpdateManyWithWhereWithoutUserInput | ChatRoomMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatRoomMemberScalarWhereInput | ChatRoomMemberScalarWhereInput[]
  }

  export type ChatRoomUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ChatRoomCreateWithoutCreatorInput, ChatRoomUncheckedCreateWithoutCreatorInput> | ChatRoomCreateWithoutCreatorInput[] | ChatRoomUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ChatRoomCreateOrConnectWithoutCreatorInput | ChatRoomCreateOrConnectWithoutCreatorInput[]
    upsert?: ChatRoomUpsertWithWhereUniqueWithoutCreatorInput | ChatRoomUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ChatRoomCreateManyCreatorInputEnvelope
    set?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    disconnect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    delete?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    update?: ChatRoomUpdateWithWhereUniqueWithoutCreatorInput | ChatRoomUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ChatRoomUpdateManyWithWhereWithoutCreatorInput | ChatRoomUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ChatRoomScalarWhereInput | ChatRoomScalarWhereInput[]
  }

  export type UserRelationshipUncheckedUpdateManyWithoutRequesterNestedInput = {
    create?: XOR<UserRelationshipCreateWithoutRequesterInput, UserRelationshipUncheckedCreateWithoutRequesterInput> | UserRelationshipCreateWithoutRequesterInput[] | UserRelationshipUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: UserRelationshipCreateOrConnectWithoutRequesterInput | UserRelationshipCreateOrConnectWithoutRequesterInput[]
    upsert?: UserRelationshipUpsertWithWhereUniqueWithoutRequesterInput | UserRelationshipUpsertWithWhereUniqueWithoutRequesterInput[]
    createMany?: UserRelationshipCreateManyRequesterInputEnvelope
    set?: UserRelationshipWhereUniqueInput | UserRelationshipWhereUniqueInput[]
    disconnect?: UserRelationshipWhereUniqueInput | UserRelationshipWhereUniqueInput[]
    delete?: UserRelationshipWhereUniqueInput | UserRelationshipWhereUniqueInput[]
    connect?: UserRelationshipWhereUniqueInput | UserRelationshipWhereUniqueInput[]
    update?: UserRelationshipUpdateWithWhereUniqueWithoutRequesterInput | UserRelationshipUpdateWithWhereUniqueWithoutRequesterInput[]
    updateMany?: UserRelationshipUpdateManyWithWhereWithoutRequesterInput | UserRelationshipUpdateManyWithWhereWithoutRequesterInput[]
    deleteMany?: UserRelationshipScalarWhereInput | UserRelationshipScalarWhereInput[]
  }

  export type UserRelationshipUncheckedUpdateManyWithoutAddresseeNestedInput = {
    create?: XOR<UserRelationshipCreateWithoutAddresseeInput, UserRelationshipUncheckedCreateWithoutAddresseeInput> | UserRelationshipCreateWithoutAddresseeInput[] | UserRelationshipUncheckedCreateWithoutAddresseeInput[]
    connectOrCreate?: UserRelationshipCreateOrConnectWithoutAddresseeInput | UserRelationshipCreateOrConnectWithoutAddresseeInput[]
    upsert?: UserRelationshipUpsertWithWhereUniqueWithoutAddresseeInput | UserRelationshipUpsertWithWhereUniqueWithoutAddresseeInput[]
    createMany?: UserRelationshipCreateManyAddresseeInputEnvelope
    set?: UserRelationshipWhereUniqueInput | UserRelationshipWhereUniqueInput[]
    disconnect?: UserRelationshipWhereUniqueInput | UserRelationshipWhereUniqueInput[]
    delete?: UserRelationshipWhereUniqueInput | UserRelationshipWhereUniqueInput[]
    connect?: UserRelationshipWhereUniqueInput | UserRelationshipWhereUniqueInput[]
    update?: UserRelationshipUpdateWithWhereUniqueWithoutAddresseeInput | UserRelationshipUpdateWithWhereUniqueWithoutAddresseeInput[]
    updateMany?: UserRelationshipUpdateManyWithWhereWithoutAddresseeInput | UserRelationshipUpdateManyWithWhereWithoutAddresseeInput[]
    deleteMany?: UserRelationshipScalarWhereInput | UserRelationshipScalarWhereInput[]
  }

  export type UserDeviceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserDeviceCreateWithoutUserInput, UserDeviceUncheckedCreateWithoutUserInput> | UserDeviceCreateWithoutUserInput[] | UserDeviceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserDeviceCreateOrConnectWithoutUserInput | UserDeviceCreateOrConnectWithoutUserInput[]
    upsert?: UserDeviceUpsertWithWhereUniqueWithoutUserInput | UserDeviceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserDeviceCreateManyUserInputEnvelope
    set?: UserDeviceWhereUniqueInput | UserDeviceWhereUniqueInput[]
    disconnect?: UserDeviceWhereUniqueInput | UserDeviceWhereUniqueInput[]
    delete?: UserDeviceWhereUniqueInput | UserDeviceWhereUniqueInput[]
    connect?: UserDeviceWhereUniqueInput | UserDeviceWhereUniqueInput[]
    update?: UserDeviceUpdateWithWhereUniqueWithoutUserInput | UserDeviceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserDeviceUpdateManyWithWhereWithoutUserInput | UserDeviceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserDeviceScalarWhereInput | UserDeviceScalarWhereInput[]
  }

  export type AttachmentUncheckedUpdateManyWithoutUploaderNestedInput = {
    create?: XOR<AttachmentCreateWithoutUploaderInput, AttachmentUncheckedCreateWithoutUploaderInput> | AttachmentCreateWithoutUploaderInput[] | AttachmentUncheckedCreateWithoutUploaderInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutUploaderInput | AttachmentCreateOrConnectWithoutUploaderInput[]
    upsert?: AttachmentUpsertWithWhereUniqueWithoutUploaderInput | AttachmentUpsertWithWhereUniqueWithoutUploaderInput[]
    createMany?: AttachmentCreateManyUploaderInputEnvelope
    set?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    disconnect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    delete?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    update?: AttachmentUpdateWithWhereUniqueWithoutUploaderInput | AttachmentUpdateWithWhereUniqueWithoutUploaderInput[]
    updateMany?: AttachmentUpdateManyWithWhereWithoutUploaderInput | AttachmentUpdateManyWithWhereWithoutUploaderInput[]
    deleteMany?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutDevicesInput = {
    create?: XOR<UserCreateWithoutDevicesInput, UserUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDevicesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDevicesNestedInput = {
    create?: XOR<UserCreateWithoutDevicesInput, UserUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDevicesInput
    upsert?: UserUpsertWithoutDevicesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDevicesInput, UserUpdateWithoutDevicesInput>, UserUncheckedUpdateWithoutDevicesInput>
  }

  export type UserCreateNestedOneWithoutRequestedRelationshipsInput = {
    create?: XOR<UserCreateWithoutRequestedRelationshipsInput, UserUncheckedCreateWithoutRequestedRelationshipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequestedRelationshipsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedRelationshipsInput = {
    create?: XOR<UserCreateWithoutReceivedRelationshipsInput, UserUncheckedCreateWithoutReceivedRelationshipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedRelationshipsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRequestedRelationshipsNestedInput = {
    create?: XOR<UserCreateWithoutRequestedRelationshipsInput, UserUncheckedCreateWithoutRequestedRelationshipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequestedRelationshipsInput
    upsert?: UserUpsertWithoutRequestedRelationshipsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRequestedRelationshipsInput, UserUpdateWithoutRequestedRelationshipsInput>, UserUncheckedUpdateWithoutRequestedRelationshipsInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedRelationshipsNestedInput = {
    create?: XOR<UserCreateWithoutReceivedRelationshipsInput, UserUncheckedCreateWithoutReceivedRelationshipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedRelationshipsInput
    upsert?: UserUpsertWithoutReceivedRelationshipsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedRelationshipsInput, UserUpdateWithoutReceivedRelationshipsInput>, UserUncheckedUpdateWithoutReceivedRelationshipsInput>
  }

  export type ChatRoomMemberCreateNestedManyWithoutChatRoomInput = {
    create?: XOR<ChatRoomMemberCreateWithoutChatRoomInput, ChatRoomMemberUncheckedCreateWithoutChatRoomInput> | ChatRoomMemberCreateWithoutChatRoomInput[] | ChatRoomMemberUncheckedCreateWithoutChatRoomInput[]
    connectOrCreate?: ChatRoomMemberCreateOrConnectWithoutChatRoomInput | ChatRoomMemberCreateOrConnectWithoutChatRoomInput[]
    createMany?: ChatRoomMemberCreateManyChatRoomInputEnvelope
    connect?: ChatRoomMemberWhereUniqueInput | ChatRoomMemberWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutCreatedChatRoomsInput = {
    create?: XOR<UserCreateWithoutCreatedChatRoomsInput, UserUncheckedCreateWithoutCreatedChatRoomsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedChatRoomsInput
    connect?: UserWhereUniqueInput
  }

  export type ChatRoomMemberUncheckedCreateNestedManyWithoutChatRoomInput = {
    create?: XOR<ChatRoomMemberCreateWithoutChatRoomInput, ChatRoomMemberUncheckedCreateWithoutChatRoomInput> | ChatRoomMemberCreateWithoutChatRoomInput[] | ChatRoomMemberUncheckedCreateWithoutChatRoomInput[]
    connectOrCreate?: ChatRoomMemberCreateOrConnectWithoutChatRoomInput | ChatRoomMemberCreateOrConnectWithoutChatRoomInput[]
    createMany?: ChatRoomMemberCreateManyChatRoomInputEnvelope
    connect?: ChatRoomMemberWhereUniqueInput | ChatRoomMemberWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type ChatRoomMemberUpdateManyWithoutChatRoomNestedInput = {
    create?: XOR<ChatRoomMemberCreateWithoutChatRoomInput, ChatRoomMemberUncheckedCreateWithoutChatRoomInput> | ChatRoomMemberCreateWithoutChatRoomInput[] | ChatRoomMemberUncheckedCreateWithoutChatRoomInput[]
    connectOrCreate?: ChatRoomMemberCreateOrConnectWithoutChatRoomInput | ChatRoomMemberCreateOrConnectWithoutChatRoomInput[]
    upsert?: ChatRoomMemberUpsertWithWhereUniqueWithoutChatRoomInput | ChatRoomMemberUpsertWithWhereUniqueWithoutChatRoomInput[]
    createMany?: ChatRoomMemberCreateManyChatRoomInputEnvelope
    set?: ChatRoomMemberWhereUniqueInput | ChatRoomMemberWhereUniqueInput[]
    disconnect?: ChatRoomMemberWhereUniqueInput | ChatRoomMemberWhereUniqueInput[]
    delete?: ChatRoomMemberWhereUniqueInput | ChatRoomMemberWhereUniqueInput[]
    connect?: ChatRoomMemberWhereUniqueInput | ChatRoomMemberWhereUniqueInput[]
    update?: ChatRoomMemberUpdateWithWhereUniqueWithoutChatRoomInput | ChatRoomMemberUpdateWithWhereUniqueWithoutChatRoomInput[]
    updateMany?: ChatRoomMemberUpdateManyWithWhereWithoutChatRoomInput | ChatRoomMemberUpdateManyWithWhereWithoutChatRoomInput[]
    deleteMany?: ChatRoomMemberScalarWhereInput | ChatRoomMemberScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutCreatedChatRoomsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedChatRoomsInput, UserUncheckedCreateWithoutCreatedChatRoomsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedChatRoomsInput
    upsert?: UserUpsertWithoutCreatedChatRoomsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedChatRoomsInput, UserUpdateWithoutCreatedChatRoomsInput>, UserUncheckedUpdateWithoutCreatedChatRoomsInput>
  }

  export type ChatRoomMemberUncheckedUpdateManyWithoutChatRoomNestedInput = {
    create?: XOR<ChatRoomMemberCreateWithoutChatRoomInput, ChatRoomMemberUncheckedCreateWithoutChatRoomInput> | ChatRoomMemberCreateWithoutChatRoomInput[] | ChatRoomMemberUncheckedCreateWithoutChatRoomInput[]
    connectOrCreate?: ChatRoomMemberCreateOrConnectWithoutChatRoomInput | ChatRoomMemberCreateOrConnectWithoutChatRoomInput[]
    upsert?: ChatRoomMemberUpsertWithWhereUniqueWithoutChatRoomInput | ChatRoomMemberUpsertWithWhereUniqueWithoutChatRoomInput[]
    createMany?: ChatRoomMemberCreateManyChatRoomInputEnvelope
    set?: ChatRoomMemberWhereUniqueInput | ChatRoomMemberWhereUniqueInput[]
    disconnect?: ChatRoomMemberWhereUniqueInput | ChatRoomMemberWhereUniqueInput[]
    delete?: ChatRoomMemberWhereUniqueInput | ChatRoomMemberWhereUniqueInput[]
    connect?: ChatRoomMemberWhereUniqueInput | ChatRoomMemberWhereUniqueInput[]
    update?: ChatRoomMemberUpdateWithWhereUniqueWithoutChatRoomInput | ChatRoomMemberUpdateWithWhereUniqueWithoutChatRoomInput[]
    updateMany?: ChatRoomMemberUpdateManyWithWhereWithoutChatRoomInput | ChatRoomMemberUpdateManyWithWhereWithoutChatRoomInput[]
    deleteMany?: ChatRoomMemberScalarWhereInput | ChatRoomMemberScalarWhereInput[]
  }

  export type ChatRoomCreateNestedOneWithoutMembersInput = {
    create?: XOR<ChatRoomCreateWithoutMembersInput, ChatRoomUncheckedCreateWithoutMembersInput>
    connectOrCreate?: ChatRoomCreateOrConnectWithoutMembersInput
    connect?: ChatRoomWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutChatRoomMembershipsInput = {
    create?: XOR<UserCreateWithoutChatRoomMembershipsInput, UserUncheckedCreateWithoutChatRoomMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatRoomMembershipsInput
    connect?: UserWhereUniqueInput
  }

  export type ChatRoomUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<ChatRoomCreateWithoutMembersInput, ChatRoomUncheckedCreateWithoutMembersInput>
    connectOrCreate?: ChatRoomCreateOrConnectWithoutMembersInput
    upsert?: ChatRoomUpsertWithoutMembersInput
    connect?: ChatRoomWhereUniqueInput
    update?: XOR<XOR<ChatRoomUpdateToOneWithWhereWithoutMembersInput, ChatRoomUpdateWithoutMembersInput>, ChatRoomUncheckedUpdateWithoutMembersInput>
  }

  export type UserUpdateOneRequiredWithoutChatRoomMembershipsNestedInput = {
    create?: XOR<UserCreateWithoutChatRoomMembershipsInput, UserUncheckedCreateWithoutChatRoomMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatRoomMembershipsInput
    upsert?: UserUpsertWithoutChatRoomMembershipsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChatRoomMembershipsInput, UserUpdateWithoutChatRoomMembershipsInput>, UserUncheckedUpdateWithoutChatRoomMembershipsInput>
  }

  export type UserCreateNestedOneWithoutUploadedFilesInput = {
    create?: XOR<UserCreateWithoutUploadedFilesInput, UserUncheckedCreateWithoutUploadedFilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUploadedFilesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUploadedFilesNestedInput = {
    create?: XOR<UserCreateWithoutUploadedFilesInput, UserUncheckedCreateWithoutUploadedFilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUploadedFilesInput
    upsert?: UserUpsertWithoutUploadedFilesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUploadedFilesInput, UserUpdateWithoutUploadedFilesInput>, UserUncheckedUpdateWithoutUploadedFilesInput>
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

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type UserSessionCreateWithoutUserInput = {
    documentId?: string
    sessionToken: string
    refreshToken: string
    deviceInfo?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    userAgent?: string | null
    isActive?: boolean
    expiresAt: Date | string
    lastActivityAt?: Date | string
    createdBy: number
    updatedBy: number
    deletedBy?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type UserSessionUncheckedCreateWithoutUserInput = {
    id?: number
    documentId?: string
    sessionToken: string
    refreshToken: string
    deviceInfo?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    userAgent?: string | null
    isActive?: boolean
    expiresAt: Date | string
    lastActivityAt?: Date | string
    createdBy: number
    updatedBy: number
    deletedBy?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type UserSessionCreateOrConnectWithoutUserInput = {
    where: UserSessionWhereUniqueInput
    create: XOR<UserSessionCreateWithoutUserInput, UserSessionUncheckedCreateWithoutUserInput>
  }

  export type UserSessionCreateManyUserInputEnvelope = {
    data: UserSessionCreateManyUserInput | UserSessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ChatRoomMemberCreateWithoutUserInput = {
    id?: bigint | number
    documentId?: string
    isMuted?: boolean
    isArchived?: boolean
    isBanned?: boolean
    lastReadMessageId?: string
    role?: number
    leftAt?: Date | string | null
    unreadMessagesCount?: number
    permissions?: JsonNullValueInput | InputJsonValue
    createdBy: number
    updatedBy: number
    deletedBy?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    chatRoom: ChatRoomCreateNestedOneWithoutMembersInput
  }

  export type ChatRoomMemberUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    documentId?: string
    chatRoomId: string
    isMuted?: boolean
    isArchived?: boolean
    isBanned?: boolean
    lastReadMessageId?: string
    role?: number
    leftAt?: Date | string | null
    unreadMessagesCount?: number
    permissions?: JsonNullValueInput | InputJsonValue
    createdBy: number
    updatedBy: number
    deletedBy?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type ChatRoomMemberCreateOrConnectWithoutUserInput = {
    where: ChatRoomMemberWhereUniqueInput
    create: XOR<ChatRoomMemberCreateWithoutUserInput, ChatRoomMemberUncheckedCreateWithoutUserInput>
  }

  export type ChatRoomMemberCreateManyUserInputEnvelope = {
    data: ChatRoomMemberCreateManyUserInput | ChatRoomMemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ChatRoomCreateWithoutCreatorInput = {
    id?: bigint | number
    documentId?: string
    name: string
    type: number
    description?: string | null
    lastMessageDate?: Date | string
    updatedBy: number
    deletedBy?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    members?: ChatRoomMemberCreateNestedManyWithoutChatRoomInput
  }

  export type ChatRoomUncheckedCreateWithoutCreatorInput = {
    id?: bigint | number
    documentId?: string
    name: string
    type: number
    description?: string | null
    lastMessageDate?: Date | string
    updatedBy: number
    deletedBy?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    members?: ChatRoomMemberUncheckedCreateNestedManyWithoutChatRoomInput
  }

  export type ChatRoomCreateOrConnectWithoutCreatorInput = {
    where: ChatRoomWhereUniqueInput
    create: XOR<ChatRoomCreateWithoutCreatorInput, ChatRoomUncheckedCreateWithoutCreatorInput>
  }

  export type ChatRoomCreateManyCreatorInputEnvelope = {
    data: ChatRoomCreateManyCreatorInput | ChatRoomCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type UserRelationshipCreateWithoutRequesterInput = {
    documentId?: string
    status?: number
    createdBy: number
    updatedBy: number
    deletedBy?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    addressee: UserCreateNestedOneWithoutReceivedRelationshipsInput
  }

  export type UserRelationshipUncheckedCreateWithoutRequesterInput = {
    id?: number
    documentId?: string
    addresseeId: string
    status?: number
    createdBy: number
    updatedBy: number
    deletedBy?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type UserRelationshipCreateOrConnectWithoutRequesterInput = {
    where: UserRelationshipWhereUniqueInput
    create: XOR<UserRelationshipCreateWithoutRequesterInput, UserRelationshipUncheckedCreateWithoutRequesterInput>
  }

  export type UserRelationshipCreateManyRequesterInputEnvelope = {
    data: UserRelationshipCreateManyRequesterInput | UserRelationshipCreateManyRequesterInput[]
    skipDuplicates?: boolean
  }

  export type UserRelationshipCreateWithoutAddresseeInput = {
    documentId?: string
    status?: number
    createdBy: number
    updatedBy: number
    deletedBy?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    requester: UserCreateNestedOneWithoutRequestedRelationshipsInput
  }

  export type UserRelationshipUncheckedCreateWithoutAddresseeInput = {
    id?: number
    documentId?: string
    requesterId: string
    status?: number
    createdBy: number
    updatedBy: number
    deletedBy?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type UserRelationshipCreateOrConnectWithoutAddresseeInput = {
    where: UserRelationshipWhereUniqueInput
    create: XOR<UserRelationshipCreateWithoutAddresseeInput, UserRelationshipUncheckedCreateWithoutAddresseeInput>
  }

  export type UserRelationshipCreateManyAddresseeInputEnvelope = {
    data: UserRelationshipCreateManyAddresseeInput | UserRelationshipCreateManyAddresseeInput[]
    skipDuplicates?: boolean
  }

  export type UserDeviceCreateWithoutUserInput = {
    documentId?: string
    deviceToken: string
    deviceType: number
    deviceName?: string | null
    appVersion?: string | null
    osVersion?: string | null
    isActive?: boolean
    lastUsedAt?: Date | string
    createdBy: number
    updatedBy: number
    deletedBy?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type UserDeviceUncheckedCreateWithoutUserInput = {
    id?: number
    documentId?: string
    deviceToken: string
    deviceType: number
    deviceName?: string | null
    appVersion?: string | null
    osVersion?: string | null
    isActive?: boolean
    lastUsedAt?: Date | string
    createdBy: number
    updatedBy: number
    deletedBy?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type UserDeviceCreateOrConnectWithoutUserInput = {
    where: UserDeviceWhereUniqueInput
    create: XOR<UserDeviceCreateWithoutUserInput, UserDeviceUncheckedCreateWithoutUserInput>
  }

  export type UserDeviceCreateManyUserInputEnvelope = {
    data: UserDeviceCreateManyUserInput | UserDeviceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AttachmentCreateWithoutUploaderInput = {
    documentId?: string
    originalName: string
    fileName: string
    mimeType: string
    fileSize: bigint | number
    filePath: string
    thumbnailPath?: string | null
    isPublic?: boolean
    metadata?: JsonNullValueInput | InputJsonValue
    virusScanStatus?: number
    virusScanResult?: NullableJsonNullValueInput | InputJsonValue
    expiresAt?: Date | string | null
    createdBy: number
    updatedBy: number
    deletedBy?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type AttachmentUncheckedCreateWithoutUploaderInput = {
    id?: number
    documentId?: string
    originalName: string
    fileName: string
    mimeType: string
    fileSize: bigint | number
    filePath: string
    thumbnailPath?: string | null
    isPublic?: boolean
    metadata?: JsonNullValueInput | InputJsonValue
    virusScanStatus?: number
    virusScanResult?: NullableJsonNullValueInput | InputJsonValue
    expiresAt?: Date | string | null
    createdBy: number
    updatedBy: number
    deletedBy?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type AttachmentCreateOrConnectWithoutUploaderInput = {
    where: AttachmentWhereUniqueInput
    create: XOR<AttachmentCreateWithoutUploaderInput, AttachmentUncheckedCreateWithoutUploaderInput>
  }

  export type AttachmentCreateManyUploaderInputEnvelope = {
    data: AttachmentCreateManyUploaderInput | AttachmentCreateManyUploaderInput[]
    skipDuplicates?: boolean
  }

  export type UserSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: UserSessionWhereUniqueInput
    update: XOR<UserSessionUpdateWithoutUserInput, UserSessionUncheckedUpdateWithoutUserInput>
    create: XOR<UserSessionCreateWithoutUserInput, UserSessionUncheckedCreateWithoutUserInput>
  }

  export type UserSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: UserSessionWhereUniqueInput
    data: XOR<UserSessionUpdateWithoutUserInput, UserSessionUncheckedUpdateWithoutUserInput>
  }

  export type UserSessionUpdateManyWithWhereWithoutUserInput = {
    where: UserSessionScalarWhereInput
    data: XOR<UserSessionUpdateManyMutationInput, UserSessionUncheckedUpdateManyWithoutUserInput>
  }

  export type UserSessionScalarWhereInput = {
    AND?: UserSessionScalarWhereInput | UserSessionScalarWhereInput[]
    OR?: UserSessionScalarWhereInput[]
    NOT?: UserSessionScalarWhereInput | UserSessionScalarWhereInput[]
    id?: IntFilter<"UserSession"> | number
    documentId?: UuidFilter<"UserSession"> | string
    userId?: UuidFilter<"UserSession"> | string
    sessionToken?: StringFilter<"UserSession"> | string
    refreshToken?: StringFilter<"UserSession"> | string
    deviceInfo?: JsonNullableFilter<"UserSession">
    ipAddress?: StringNullableFilter<"UserSession"> | string | null
    userAgent?: StringNullableFilter<"UserSession"> | string | null
    isActive?: BoolFilter<"UserSession"> | boolean
    expiresAt?: DateTimeFilter<"UserSession"> | Date | string
    lastActivityAt?: DateTimeFilter<"UserSession"> | Date | string
    createdBy?: IntFilter<"UserSession"> | number
    updatedBy?: IntFilter<"UserSession"> | number
    deletedBy?: IntFilter<"UserSession"> | number
    createdAt?: DateTimeFilter<"UserSession"> | Date | string
    updatedAt?: DateTimeNullableFilter<"UserSession"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"UserSession"> | Date | string | null
  }

  export type ChatRoomMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: ChatRoomMemberWhereUniqueInput
    update: XOR<ChatRoomMemberUpdateWithoutUserInput, ChatRoomMemberUncheckedUpdateWithoutUserInput>
    create: XOR<ChatRoomMemberCreateWithoutUserInput, ChatRoomMemberUncheckedCreateWithoutUserInput>
  }

  export type ChatRoomMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: ChatRoomMemberWhereUniqueInput
    data: XOR<ChatRoomMemberUpdateWithoutUserInput, ChatRoomMemberUncheckedUpdateWithoutUserInput>
  }

  export type ChatRoomMemberUpdateManyWithWhereWithoutUserInput = {
    where: ChatRoomMemberScalarWhereInput
    data: XOR<ChatRoomMemberUpdateManyMutationInput, ChatRoomMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type ChatRoomMemberScalarWhereInput = {
    AND?: ChatRoomMemberScalarWhereInput | ChatRoomMemberScalarWhereInput[]
    OR?: ChatRoomMemberScalarWhereInput[]
    NOT?: ChatRoomMemberScalarWhereInput | ChatRoomMemberScalarWhereInput[]
    id?: BigIntFilter<"ChatRoomMember"> | bigint | number
    documentId?: UuidFilter<"ChatRoomMember"> | string
    chatRoomId?: UuidFilter<"ChatRoomMember"> | string
    userId?: UuidFilter<"ChatRoomMember"> | string
    isMuted?: BoolFilter<"ChatRoomMember"> | boolean
    isArchived?: BoolFilter<"ChatRoomMember"> | boolean
    isBanned?: BoolFilter<"ChatRoomMember"> | boolean
    lastReadMessageId?: UuidFilter<"ChatRoomMember"> | string
    role?: IntFilter<"ChatRoomMember"> | number
    leftAt?: DateTimeNullableFilter<"ChatRoomMember"> | Date | string | null
    unreadMessagesCount?: IntFilter<"ChatRoomMember"> | number
    permissions?: JsonFilter<"ChatRoomMember">
    createdBy?: IntFilter<"ChatRoomMember"> | number
    updatedBy?: IntFilter<"ChatRoomMember"> | number
    deletedBy?: IntFilter<"ChatRoomMember"> | number
    createdAt?: DateTimeFilter<"ChatRoomMember"> | Date | string
    updatedAt?: DateTimeNullableFilter<"ChatRoomMember"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"ChatRoomMember"> | Date | string | null
  }

  export type ChatRoomUpsertWithWhereUniqueWithoutCreatorInput = {
    where: ChatRoomWhereUniqueInput
    update: XOR<ChatRoomUpdateWithoutCreatorInput, ChatRoomUncheckedUpdateWithoutCreatorInput>
    create: XOR<ChatRoomCreateWithoutCreatorInput, ChatRoomUncheckedCreateWithoutCreatorInput>
  }

  export type ChatRoomUpdateWithWhereUniqueWithoutCreatorInput = {
    where: ChatRoomWhereUniqueInput
    data: XOR<ChatRoomUpdateWithoutCreatorInput, ChatRoomUncheckedUpdateWithoutCreatorInput>
  }

  export type ChatRoomUpdateManyWithWhereWithoutCreatorInput = {
    where: ChatRoomScalarWhereInput
    data: XOR<ChatRoomUpdateManyMutationInput, ChatRoomUncheckedUpdateManyWithoutCreatorInput>
  }

  export type ChatRoomScalarWhereInput = {
    AND?: ChatRoomScalarWhereInput | ChatRoomScalarWhereInput[]
    OR?: ChatRoomScalarWhereInput[]
    NOT?: ChatRoomScalarWhereInput | ChatRoomScalarWhereInput[]
    id?: BigIntFilter<"ChatRoom"> | bigint | number
    documentId?: UuidFilter<"ChatRoom"> | string
    name?: StringFilter<"ChatRoom"> | string
    type?: IntFilter<"ChatRoom"> | number
    description?: StringNullableFilter<"ChatRoom"> | string | null
    lastMessageDate?: DateTimeFilter<"ChatRoom"> | Date | string
    createdBy?: IntFilter<"ChatRoom"> | number
    updatedBy?: IntFilter<"ChatRoom"> | number
    deletedBy?: IntFilter<"ChatRoom"> | number
    createdAt?: DateTimeFilter<"ChatRoom"> | Date | string
    updatedAt?: DateTimeNullableFilter<"ChatRoom"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"ChatRoom"> | Date | string | null
  }

  export type UserRelationshipUpsertWithWhereUniqueWithoutRequesterInput = {
    where: UserRelationshipWhereUniqueInput
    update: XOR<UserRelationshipUpdateWithoutRequesterInput, UserRelationshipUncheckedUpdateWithoutRequesterInput>
    create: XOR<UserRelationshipCreateWithoutRequesterInput, UserRelationshipUncheckedCreateWithoutRequesterInput>
  }

  export type UserRelationshipUpdateWithWhereUniqueWithoutRequesterInput = {
    where: UserRelationshipWhereUniqueInput
    data: XOR<UserRelationshipUpdateWithoutRequesterInput, UserRelationshipUncheckedUpdateWithoutRequesterInput>
  }

  export type UserRelationshipUpdateManyWithWhereWithoutRequesterInput = {
    where: UserRelationshipScalarWhereInput
    data: XOR<UserRelationshipUpdateManyMutationInput, UserRelationshipUncheckedUpdateManyWithoutRequesterInput>
  }

  export type UserRelationshipScalarWhereInput = {
    AND?: UserRelationshipScalarWhereInput | UserRelationshipScalarWhereInput[]
    OR?: UserRelationshipScalarWhereInput[]
    NOT?: UserRelationshipScalarWhereInput | UserRelationshipScalarWhereInput[]
    id?: IntFilter<"UserRelationship"> | number
    documentId?: UuidFilter<"UserRelationship"> | string
    requesterId?: UuidFilter<"UserRelationship"> | string
    addresseeId?: UuidFilter<"UserRelationship"> | string
    status?: IntFilter<"UserRelationship"> | number
    createdBy?: IntFilter<"UserRelationship"> | number
    updatedBy?: IntFilter<"UserRelationship"> | number
    deletedBy?: IntFilter<"UserRelationship"> | number
    createdAt?: DateTimeFilter<"UserRelationship"> | Date | string
    updatedAt?: DateTimeNullableFilter<"UserRelationship"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"UserRelationship"> | Date | string | null
  }

  export type UserRelationshipUpsertWithWhereUniqueWithoutAddresseeInput = {
    where: UserRelationshipWhereUniqueInput
    update: XOR<UserRelationshipUpdateWithoutAddresseeInput, UserRelationshipUncheckedUpdateWithoutAddresseeInput>
    create: XOR<UserRelationshipCreateWithoutAddresseeInput, UserRelationshipUncheckedCreateWithoutAddresseeInput>
  }

  export type UserRelationshipUpdateWithWhereUniqueWithoutAddresseeInput = {
    where: UserRelationshipWhereUniqueInput
    data: XOR<UserRelationshipUpdateWithoutAddresseeInput, UserRelationshipUncheckedUpdateWithoutAddresseeInput>
  }

  export type UserRelationshipUpdateManyWithWhereWithoutAddresseeInput = {
    where: UserRelationshipScalarWhereInput
    data: XOR<UserRelationshipUpdateManyMutationInput, UserRelationshipUncheckedUpdateManyWithoutAddresseeInput>
  }

  export type UserDeviceUpsertWithWhereUniqueWithoutUserInput = {
    where: UserDeviceWhereUniqueInput
    update: XOR<UserDeviceUpdateWithoutUserInput, UserDeviceUncheckedUpdateWithoutUserInput>
    create: XOR<UserDeviceCreateWithoutUserInput, UserDeviceUncheckedCreateWithoutUserInput>
  }

  export type UserDeviceUpdateWithWhereUniqueWithoutUserInput = {
    where: UserDeviceWhereUniqueInput
    data: XOR<UserDeviceUpdateWithoutUserInput, UserDeviceUncheckedUpdateWithoutUserInput>
  }

  export type UserDeviceUpdateManyWithWhereWithoutUserInput = {
    where: UserDeviceScalarWhereInput
    data: XOR<UserDeviceUpdateManyMutationInput, UserDeviceUncheckedUpdateManyWithoutUserInput>
  }

  export type UserDeviceScalarWhereInput = {
    AND?: UserDeviceScalarWhereInput | UserDeviceScalarWhereInput[]
    OR?: UserDeviceScalarWhereInput[]
    NOT?: UserDeviceScalarWhereInput | UserDeviceScalarWhereInput[]
    id?: IntFilter<"UserDevice"> | number
    documentId?: UuidFilter<"UserDevice"> | string
    userId?: UuidFilter<"UserDevice"> | string
    deviceToken?: StringFilter<"UserDevice"> | string
    deviceType?: IntFilter<"UserDevice"> | number
    deviceName?: StringNullableFilter<"UserDevice"> | string | null
    appVersion?: StringNullableFilter<"UserDevice"> | string | null
    osVersion?: StringNullableFilter<"UserDevice"> | string | null
    isActive?: BoolFilter<"UserDevice"> | boolean
    lastUsedAt?: DateTimeFilter<"UserDevice"> | Date | string
    createdBy?: IntFilter<"UserDevice"> | number
    updatedBy?: IntFilter<"UserDevice"> | number
    deletedBy?: IntFilter<"UserDevice"> | number
    createdAt?: DateTimeFilter<"UserDevice"> | Date | string
    updatedAt?: DateTimeNullableFilter<"UserDevice"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"UserDevice"> | Date | string | null
  }

  export type AttachmentUpsertWithWhereUniqueWithoutUploaderInput = {
    where: AttachmentWhereUniqueInput
    update: XOR<AttachmentUpdateWithoutUploaderInput, AttachmentUncheckedUpdateWithoutUploaderInput>
    create: XOR<AttachmentCreateWithoutUploaderInput, AttachmentUncheckedCreateWithoutUploaderInput>
  }

  export type AttachmentUpdateWithWhereUniqueWithoutUploaderInput = {
    where: AttachmentWhereUniqueInput
    data: XOR<AttachmentUpdateWithoutUploaderInput, AttachmentUncheckedUpdateWithoutUploaderInput>
  }

  export type AttachmentUpdateManyWithWhereWithoutUploaderInput = {
    where: AttachmentScalarWhereInput
    data: XOR<AttachmentUpdateManyMutationInput, AttachmentUncheckedUpdateManyWithoutUploaderInput>
  }

  export type AttachmentScalarWhereInput = {
    AND?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
    OR?: AttachmentScalarWhereInput[]
    NOT?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
    id?: IntFilter<"Attachment"> | number
    documentId?: UuidFilter<"Attachment"> | string
    originalName?: StringFilter<"Attachment"> | string
    fileName?: StringFilter<"Attachment"> | string
    mimeType?: StringFilter<"Attachment"> | string
    fileSize?: BigIntFilter<"Attachment"> | bigint | number
    filePath?: StringFilter<"Attachment"> | string
    thumbnailPath?: StringNullableFilter<"Attachment"> | string | null
    uploadedBy?: UuidFilter<"Attachment"> | string
    isPublic?: BoolFilter<"Attachment"> | boolean
    metadata?: JsonFilter<"Attachment">
    virusScanStatus?: IntFilter<"Attachment"> | number
    virusScanResult?: JsonNullableFilter<"Attachment">
    expiresAt?: DateTimeNullableFilter<"Attachment"> | Date | string | null
    createdBy?: IntFilter<"Attachment"> | number
    updatedBy?: IntFilter<"Attachment"> | number
    deletedBy?: IntFilter<"Attachment"> | number
    createdAt?: DateTimeFilter<"Attachment"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Attachment"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Attachment"> | Date | string | null
  }

  export type UserCreateWithoutSessionsInput = {
    documentId?: string
    name: string
    email?: string | null
    username: string
    password: string
    profilePictureUrl?: string | null
    bio?: string | null
    phoneNumber?: string | null
    lastActivityDate?: Date | string
    status?: number
    isActive?: boolean
    isVerified?: boolean
    themePreference?: number
    notificationSettings?: JsonNullValueInput | InputJsonValue
    privacySettings?: JsonNullValueInput | InputJsonValue
    createdBy: number
    updatedBy: number
    deletedBy?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    chatRoomMemberships?: ChatRoomMemberCreateNestedManyWithoutUserInput
    createdChatRooms?: ChatRoomCreateNestedManyWithoutCreatorInput
    requestedRelationships?: UserRelationshipCreateNestedManyWithoutRequesterInput
    receivedRelationships?: UserRelationshipCreateNestedManyWithoutAddresseeInput
    devices?: UserDeviceCreateNestedManyWithoutUserInput
    uploadedFiles?: AttachmentCreateNestedManyWithoutUploaderInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: number
    documentId?: string
    name: string
    email?: string | null
    username: string
    password: string
    profilePictureUrl?: string | null
    bio?: string | null
    phoneNumber?: string | null
    lastActivityDate?: Date | string
    status?: number
    isActive?: boolean
    isVerified?: boolean
    themePreference?: number
    notificationSettings?: JsonNullValueInput | InputJsonValue
    privacySettings?: JsonNullValueInput | InputJsonValue
    createdBy: number
    updatedBy: number
    deletedBy?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    chatRoomMemberships?: ChatRoomMemberUncheckedCreateNestedManyWithoutUserInput
    createdChatRooms?: ChatRoomUncheckedCreateNestedManyWithoutCreatorInput
    requestedRelationships?: UserRelationshipUncheckedCreateNestedManyWithoutRequesterInput
    receivedRelationships?: UserRelationshipUncheckedCreateNestedManyWithoutAddresseeInput
    devices?: UserDeviceUncheckedCreateNestedManyWithoutUserInput
    uploadedFiles?: AttachmentUncheckedCreateNestedManyWithoutUploaderInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    documentId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    lastActivityDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    themePreference?: IntFieldUpdateOperationsInput | number
    notificationSettings?: JsonNullValueInput | InputJsonValue
    privacySettings?: JsonNullValueInput | InputJsonValue
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chatRoomMemberships?: ChatRoomMemberUpdateManyWithoutUserNestedInput
    createdChatRooms?: ChatRoomUpdateManyWithoutCreatorNestedInput
    requestedRelationships?: UserRelationshipUpdateManyWithoutRequesterNestedInput
    receivedRelationships?: UserRelationshipUpdateManyWithoutAddresseeNestedInput
    devices?: UserDeviceUpdateManyWithoutUserNestedInput
    uploadedFiles?: AttachmentUpdateManyWithoutUploaderNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    lastActivityDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    themePreference?: IntFieldUpdateOperationsInput | number
    notificationSettings?: JsonNullValueInput | InputJsonValue
    privacySettings?: JsonNullValueInput | InputJsonValue
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chatRoomMemberships?: ChatRoomMemberUncheckedUpdateManyWithoutUserNestedInput
    createdChatRooms?: ChatRoomUncheckedUpdateManyWithoutCreatorNestedInput
    requestedRelationships?: UserRelationshipUncheckedUpdateManyWithoutRequesterNestedInput
    receivedRelationships?: UserRelationshipUncheckedUpdateManyWithoutAddresseeNestedInput
    devices?: UserDeviceUncheckedUpdateManyWithoutUserNestedInput
    uploadedFiles?: AttachmentUncheckedUpdateManyWithoutUploaderNestedInput
  }

  export type UserCreateWithoutDevicesInput = {
    documentId?: string
    name: string
    email?: string | null
    username: string
    password: string
    profilePictureUrl?: string | null
    bio?: string | null
    phoneNumber?: string | null
    lastActivityDate?: Date | string
    status?: number
    isActive?: boolean
    isVerified?: boolean
    themePreference?: number
    notificationSettings?: JsonNullValueInput | InputJsonValue
    privacySettings?: JsonNullValueInput | InputJsonValue
    createdBy: number
    updatedBy: number
    deletedBy?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    sessions?: UserSessionCreateNestedManyWithoutUserInput
    chatRoomMemberships?: ChatRoomMemberCreateNestedManyWithoutUserInput
    createdChatRooms?: ChatRoomCreateNestedManyWithoutCreatorInput
    requestedRelationships?: UserRelationshipCreateNestedManyWithoutRequesterInput
    receivedRelationships?: UserRelationshipCreateNestedManyWithoutAddresseeInput
    uploadedFiles?: AttachmentCreateNestedManyWithoutUploaderInput
  }

  export type UserUncheckedCreateWithoutDevicesInput = {
    id?: number
    documentId?: string
    name: string
    email?: string | null
    username: string
    password: string
    profilePictureUrl?: string | null
    bio?: string | null
    phoneNumber?: string | null
    lastActivityDate?: Date | string
    status?: number
    isActive?: boolean
    isVerified?: boolean
    themePreference?: number
    notificationSettings?: JsonNullValueInput | InputJsonValue
    privacySettings?: JsonNullValueInput | InputJsonValue
    createdBy: number
    updatedBy: number
    deletedBy?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    sessions?: UserSessionUncheckedCreateNestedManyWithoutUserInput
    chatRoomMemberships?: ChatRoomMemberUncheckedCreateNestedManyWithoutUserInput
    createdChatRooms?: ChatRoomUncheckedCreateNestedManyWithoutCreatorInput
    requestedRelationships?: UserRelationshipUncheckedCreateNestedManyWithoutRequesterInput
    receivedRelationships?: UserRelationshipUncheckedCreateNestedManyWithoutAddresseeInput
    uploadedFiles?: AttachmentUncheckedCreateNestedManyWithoutUploaderInput
  }

  export type UserCreateOrConnectWithoutDevicesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDevicesInput, UserUncheckedCreateWithoutDevicesInput>
  }

  export type UserUpsertWithoutDevicesInput = {
    update: XOR<UserUpdateWithoutDevicesInput, UserUncheckedUpdateWithoutDevicesInput>
    create: XOR<UserCreateWithoutDevicesInput, UserUncheckedCreateWithoutDevicesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDevicesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDevicesInput, UserUncheckedUpdateWithoutDevicesInput>
  }

  export type UserUpdateWithoutDevicesInput = {
    documentId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    lastActivityDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    themePreference?: IntFieldUpdateOperationsInput | number
    notificationSettings?: JsonNullValueInput | InputJsonValue
    privacySettings?: JsonNullValueInput | InputJsonValue
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: UserSessionUpdateManyWithoutUserNestedInput
    chatRoomMemberships?: ChatRoomMemberUpdateManyWithoutUserNestedInput
    createdChatRooms?: ChatRoomUpdateManyWithoutCreatorNestedInput
    requestedRelationships?: UserRelationshipUpdateManyWithoutRequesterNestedInput
    receivedRelationships?: UserRelationshipUpdateManyWithoutAddresseeNestedInput
    uploadedFiles?: AttachmentUpdateManyWithoutUploaderNestedInput
  }

  export type UserUncheckedUpdateWithoutDevicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    lastActivityDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    themePreference?: IntFieldUpdateOperationsInput | number
    notificationSettings?: JsonNullValueInput | InputJsonValue
    privacySettings?: JsonNullValueInput | InputJsonValue
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: UserSessionUncheckedUpdateManyWithoutUserNestedInput
    chatRoomMemberships?: ChatRoomMemberUncheckedUpdateManyWithoutUserNestedInput
    createdChatRooms?: ChatRoomUncheckedUpdateManyWithoutCreatorNestedInput
    requestedRelationships?: UserRelationshipUncheckedUpdateManyWithoutRequesterNestedInput
    receivedRelationships?: UserRelationshipUncheckedUpdateManyWithoutAddresseeNestedInput
    uploadedFiles?: AttachmentUncheckedUpdateManyWithoutUploaderNestedInput
  }

  export type UserCreateWithoutRequestedRelationshipsInput = {
    documentId?: string
    name: string
    email?: string | null
    username: string
    password: string
    profilePictureUrl?: string | null
    bio?: string | null
    phoneNumber?: string | null
    lastActivityDate?: Date | string
    status?: number
    isActive?: boolean
    isVerified?: boolean
    themePreference?: number
    notificationSettings?: JsonNullValueInput | InputJsonValue
    privacySettings?: JsonNullValueInput | InputJsonValue
    createdBy: number
    updatedBy: number
    deletedBy?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    sessions?: UserSessionCreateNestedManyWithoutUserInput
    chatRoomMemberships?: ChatRoomMemberCreateNestedManyWithoutUserInput
    createdChatRooms?: ChatRoomCreateNestedManyWithoutCreatorInput
    receivedRelationships?: UserRelationshipCreateNestedManyWithoutAddresseeInput
    devices?: UserDeviceCreateNestedManyWithoutUserInput
    uploadedFiles?: AttachmentCreateNestedManyWithoutUploaderInput
  }

  export type UserUncheckedCreateWithoutRequestedRelationshipsInput = {
    id?: number
    documentId?: string
    name: string
    email?: string | null
    username: string
    password: string
    profilePictureUrl?: string | null
    bio?: string | null
    phoneNumber?: string | null
    lastActivityDate?: Date | string
    status?: number
    isActive?: boolean
    isVerified?: boolean
    themePreference?: number
    notificationSettings?: JsonNullValueInput | InputJsonValue
    privacySettings?: JsonNullValueInput | InputJsonValue
    createdBy: number
    updatedBy: number
    deletedBy?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    sessions?: UserSessionUncheckedCreateNestedManyWithoutUserInput
    chatRoomMemberships?: ChatRoomMemberUncheckedCreateNestedManyWithoutUserInput
    createdChatRooms?: ChatRoomUncheckedCreateNestedManyWithoutCreatorInput
    receivedRelationships?: UserRelationshipUncheckedCreateNestedManyWithoutAddresseeInput
    devices?: UserDeviceUncheckedCreateNestedManyWithoutUserInput
    uploadedFiles?: AttachmentUncheckedCreateNestedManyWithoutUploaderInput
  }

  export type UserCreateOrConnectWithoutRequestedRelationshipsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRequestedRelationshipsInput, UserUncheckedCreateWithoutRequestedRelationshipsInput>
  }

  export type UserCreateWithoutReceivedRelationshipsInput = {
    documentId?: string
    name: string
    email?: string | null
    username: string
    password: string
    profilePictureUrl?: string | null
    bio?: string | null
    phoneNumber?: string | null
    lastActivityDate?: Date | string
    status?: number
    isActive?: boolean
    isVerified?: boolean
    themePreference?: number
    notificationSettings?: JsonNullValueInput | InputJsonValue
    privacySettings?: JsonNullValueInput | InputJsonValue
    createdBy: number
    updatedBy: number
    deletedBy?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    sessions?: UserSessionCreateNestedManyWithoutUserInput
    chatRoomMemberships?: ChatRoomMemberCreateNestedManyWithoutUserInput
    createdChatRooms?: ChatRoomCreateNestedManyWithoutCreatorInput
    requestedRelationships?: UserRelationshipCreateNestedManyWithoutRequesterInput
    devices?: UserDeviceCreateNestedManyWithoutUserInput
    uploadedFiles?: AttachmentCreateNestedManyWithoutUploaderInput
  }

  export type UserUncheckedCreateWithoutReceivedRelationshipsInput = {
    id?: number
    documentId?: string
    name: string
    email?: string | null
    username: string
    password: string
    profilePictureUrl?: string | null
    bio?: string | null
    phoneNumber?: string | null
    lastActivityDate?: Date | string
    status?: number
    isActive?: boolean
    isVerified?: boolean
    themePreference?: number
    notificationSettings?: JsonNullValueInput | InputJsonValue
    privacySettings?: JsonNullValueInput | InputJsonValue
    createdBy: number
    updatedBy: number
    deletedBy?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    sessions?: UserSessionUncheckedCreateNestedManyWithoutUserInput
    chatRoomMemberships?: ChatRoomMemberUncheckedCreateNestedManyWithoutUserInput
    createdChatRooms?: ChatRoomUncheckedCreateNestedManyWithoutCreatorInput
    requestedRelationships?: UserRelationshipUncheckedCreateNestedManyWithoutRequesterInput
    devices?: UserDeviceUncheckedCreateNestedManyWithoutUserInput
    uploadedFiles?: AttachmentUncheckedCreateNestedManyWithoutUploaderInput
  }

  export type UserCreateOrConnectWithoutReceivedRelationshipsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedRelationshipsInput, UserUncheckedCreateWithoutReceivedRelationshipsInput>
  }

  export type UserUpsertWithoutRequestedRelationshipsInput = {
    update: XOR<UserUpdateWithoutRequestedRelationshipsInput, UserUncheckedUpdateWithoutRequestedRelationshipsInput>
    create: XOR<UserCreateWithoutRequestedRelationshipsInput, UserUncheckedCreateWithoutRequestedRelationshipsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRequestedRelationshipsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRequestedRelationshipsInput, UserUncheckedUpdateWithoutRequestedRelationshipsInput>
  }

  export type UserUpdateWithoutRequestedRelationshipsInput = {
    documentId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    lastActivityDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    themePreference?: IntFieldUpdateOperationsInput | number
    notificationSettings?: JsonNullValueInput | InputJsonValue
    privacySettings?: JsonNullValueInput | InputJsonValue
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: UserSessionUpdateManyWithoutUserNestedInput
    chatRoomMemberships?: ChatRoomMemberUpdateManyWithoutUserNestedInput
    createdChatRooms?: ChatRoomUpdateManyWithoutCreatorNestedInput
    receivedRelationships?: UserRelationshipUpdateManyWithoutAddresseeNestedInput
    devices?: UserDeviceUpdateManyWithoutUserNestedInput
    uploadedFiles?: AttachmentUpdateManyWithoutUploaderNestedInput
  }

  export type UserUncheckedUpdateWithoutRequestedRelationshipsInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    lastActivityDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    themePreference?: IntFieldUpdateOperationsInput | number
    notificationSettings?: JsonNullValueInput | InputJsonValue
    privacySettings?: JsonNullValueInput | InputJsonValue
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: UserSessionUncheckedUpdateManyWithoutUserNestedInput
    chatRoomMemberships?: ChatRoomMemberUncheckedUpdateManyWithoutUserNestedInput
    createdChatRooms?: ChatRoomUncheckedUpdateManyWithoutCreatorNestedInput
    receivedRelationships?: UserRelationshipUncheckedUpdateManyWithoutAddresseeNestedInput
    devices?: UserDeviceUncheckedUpdateManyWithoutUserNestedInput
    uploadedFiles?: AttachmentUncheckedUpdateManyWithoutUploaderNestedInput
  }

  export type UserUpsertWithoutReceivedRelationshipsInput = {
    update: XOR<UserUpdateWithoutReceivedRelationshipsInput, UserUncheckedUpdateWithoutReceivedRelationshipsInput>
    create: XOR<UserCreateWithoutReceivedRelationshipsInput, UserUncheckedCreateWithoutReceivedRelationshipsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedRelationshipsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedRelationshipsInput, UserUncheckedUpdateWithoutReceivedRelationshipsInput>
  }

  export type UserUpdateWithoutReceivedRelationshipsInput = {
    documentId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    lastActivityDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    themePreference?: IntFieldUpdateOperationsInput | number
    notificationSettings?: JsonNullValueInput | InputJsonValue
    privacySettings?: JsonNullValueInput | InputJsonValue
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: UserSessionUpdateManyWithoutUserNestedInput
    chatRoomMemberships?: ChatRoomMemberUpdateManyWithoutUserNestedInput
    createdChatRooms?: ChatRoomUpdateManyWithoutCreatorNestedInput
    requestedRelationships?: UserRelationshipUpdateManyWithoutRequesterNestedInput
    devices?: UserDeviceUpdateManyWithoutUserNestedInput
    uploadedFiles?: AttachmentUpdateManyWithoutUploaderNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedRelationshipsInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    lastActivityDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    themePreference?: IntFieldUpdateOperationsInput | number
    notificationSettings?: JsonNullValueInput | InputJsonValue
    privacySettings?: JsonNullValueInput | InputJsonValue
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: UserSessionUncheckedUpdateManyWithoutUserNestedInput
    chatRoomMemberships?: ChatRoomMemberUncheckedUpdateManyWithoutUserNestedInput
    createdChatRooms?: ChatRoomUncheckedUpdateManyWithoutCreatorNestedInput
    requestedRelationships?: UserRelationshipUncheckedUpdateManyWithoutRequesterNestedInput
    devices?: UserDeviceUncheckedUpdateManyWithoutUserNestedInput
    uploadedFiles?: AttachmentUncheckedUpdateManyWithoutUploaderNestedInput
  }

  export type ChatRoomMemberCreateWithoutChatRoomInput = {
    id?: bigint | number
    documentId?: string
    isMuted?: boolean
    isArchived?: boolean
    isBanned?: boolean
    lastReadMessageId?: string
    role?: number
    leftAt?: Date | string | null
    unreadMessagesCount?: number
    permissions?: JsonNullValueInput | InputJsonValue
    createdBy: number
    updatedBy: number
    deletedBy?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutChatRoomMembershipsInput
  }

  export type ChatRoomMemberUncheckedCreateWithoutChatRoomInput = {
    id?: bigint | number
    documentId?: string
    userId: string
    isMuted?: boolean
    isArchived?: boolean
    isBanned?: boolean
    lastReadMessageId?: string
    role?: number
    leftAt?: Date | string | null
    unreadMessagesCount?: number
    permissions?: JsonNullValueInput | InputJsonValue
    createdBy: number
    updatedBy: number
    deletedBy?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type ChatRoomMemberCreateOrConnectWithoutChatRoomInput = {
    where: ChatRoomMemberWhereUniqueInput
    create: XOR<ChatRoomMemberCreateWithoutChatRoomInput, ChatRoomMemberUncheckedCreateWithoutChatRoomInput>
  }

  export type ChatRoomMemberCreateManyChatRoomInputEnvelope = {
    data: ChatRoomMemberCreateManyChatRoomInput | ChatRoomMemberCreateManyChatRoomInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutCreatedChatRoomsInput = {
    documentId?: string
    name: string
    email?: string | null
    username: string
    password: string
    profilePictureUrl?: string | null
    bio?: string | null
    phoneNumber?: string | null
    lastActivityDate?: Date | string
    status?: number
    isActive?: boolean
    isVerified?: boolean
    themePreference?: number
    notificationSettings?: JsonNullValueInput | InputJsonValue
    privacySettings?: JsonNullValueInput | InputJsonValue
    createdBy: number
    updatedBy: number
    deletedBy?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    sessions?: UserSessionCreateNestedManyWithoutUserInput
    chatRoomMemberships?: ChatRoomMemberCreateNestedManyWithoutUserInput
    requestedRelationships?: UserRelationshipCreateNestedManyWithoutRequesterInput
    receivedRelationships?: UserRelationshipCreateNestedManyWithoutAddresseeInput
    devices?: UserDeviceCreateNestedManyWithoutUserInput
    uploadedFiles?: AttachmentCreateNestedManyWithoutUploaderInput
  }

  export type UserUncheckedCreateWithoutCreatedChatRoomsInput = {
    id?: number
    documentId?: string
    name: string
    email?: string | null
    username: string
    password: string
    profilePictureUrl?: string | null
    bio?: string | null
    phoneNumber?: string | null
    lastActivityDate?: Date | string
    status?: number
    isActive?: boolean
    isVerified?: boolean
    themePreference?: number
    notificationSettings?: JsonNullValueInput | InputJsonValue
    privacySettings?: JsonNullValueInput | InputJsonValue
    createdBy: number
    updatedBy: number
    deletedBy?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    sessions?: UserSessionUncheckedCreateNestedManyWithoutUserInput
    chatRoomMemberships?: ChatRoomMemberUncheckedCreateNestedManyWithoutUserInput
    requestedRelationships?: UserRelationshipUncheckedCreateNestedManyWithoutRequesterInput
    receivedRelationships?: UserRelationshipUncheckedCreateNestedManyWithoutAddresseeInput
    devices?: UserDeviceUncheckedCreateNestedManyWithoutUserInput
    uploadedFiles?: AttachmentUncheckedCreateNestedManyWithoutUploaderInput
  }

  export type UserCreateOrConnectWithoutCreatedChatRoomsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedChatRoomsInput, UserUncheckedCreateWithoutCreatedChatRoomsInput>
  }

  export type ChatRoomMemberUpsertWithWhereUniqueWithoutChatRoomInput = {
    where: ChatRoomMemberWhereUniqueInput
    update: XOR<ChatRoomMemberUpdateWithoutChatRoomInput, ChatRoomMemberUncheckedUpdateWithoutChatRoomInput>
    create: XOR<ChatRoomMemberCreateWithoutChatRoomInput, ChatRoomMemberUncheckedCreateWithoutChatRoomInput>
  }

  export type ChatRoomMemberUpdateWithWhereUniqueWithoutChatRoomInput = {
    where: ChatRoomMemberWhereUniqueInput
    data: XOR<ChatRoomMemberUpdateWithoutChatRoomInput, ChatRoomMemberUncheckedUpdateWithoutChatRoomInput>
  }

  export type ChatRoomMemberUpdateManyWithWhereWithoutChatRoomInput = {
    where: ChatRoomMemberScalarWhereInput
    data: XOR<ChatRoomMemberUpdateManyMutationInput, ChatRoomMemberUncheckedUpdateManyWithoutChatRoomInput>
  }

  export type UserUpsertWithoutCreatedChatRoomsInput = {
    update: XOR<UserUpdateWithoutCreatedChatRoomsInput, UserUncheckedUpdateWithoutCreatedChatRoomsInput>
    create: XOR<UserCreateWithoutCreatedChatRoomsInput, UserUncheckedCreateWithoutCreatedChatRoomsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedChatRoomsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedChatRoomsInput, UserUncheckedUpdateWithoutCreatedChatRoomsInput>
  }

  export type UserUpdateWithoutCreatedChatRoomsInput = {
    documentId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    lastActivityDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    themePreference?: IntFieldUpdateOperationsInput | number
    notificationSettings?: JsonNullValueInput | InputJsonValue
    privacySettings?: JsonNullValueInput | InputJsonValue
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: UserSessionUpdateManyWithoutUserNestedInput
    chatRoomMemberships?: ChatRoomMemberUpdateManyWithoutUserNestedInput
    requestedRelationships?: UserRelationshipUpdateManyWithoutRequesterNestedInput
    receivedRelationships?: UserRelationshipUpdateManyWithoutAddresseeNestedInput
    devices?: UserDeviceUpdateManyWithoutUserNestedInput
    uploadedFiles?: AttachmentUpdateManyWithoutUploaderNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedChatRoomsInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    lastActivityDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    themePreference?: IntFieldUpdateOperationsInput | number
    notificationSettings?: JsonNullValueInput | InputJsonValue
    privacySettings?: JsonNullValueInput | InputJsonValue
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: UserSessionUncheckedUpdateManyWithoutUserNestedInput
    chatRoomMemberships?: ChatRoomMemberUncheckedUpdateManyWithoutUserNestedInput
    requestedRelationships?: UserRelationshipUncheckedUpdateManyWithoutRequesterNestedInput
    receivedRelationships?: UserRelationshipUncheckedUpdateManyWithoutAddresseeNestedInput
    devices?: UserDeviceUncheckedUpdateManyWithoutUserNestedInput
    uploadedFiles?: AttachmentUncheckedUpdateManyWithoutUploaderNestedInput
  }

  export type ChatRoomCreateWithoutMembersInput = {
    id?: bigint | number
    documentId?: string
    name: string
    type: number
    description?: string | null
    lastMessageDate?: Date | string
    updatedBy: number
    deletedBy?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    creator: UserCreateNestedOneWithoutCreatedChatRoomsInput
  }

  export type ChatRoomUncheckedCreateWithoutMembersInput = {
    id?: bigint | number
    documentId?: string
    name: string
    type: number
    description?: string | null
    lastMessageDate?: Date | string
    createdBy: number
    updatedBy: number
    deletedBy?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type ChatRoomCreateOrConnectWithoutMembersInput = {
    where: ChatRoomWhereUniqueInput
    create: XOR<ChatRoomCreateWithoutMembersInput, ChatRoomUncheckedCreateWithoutMembersInput>
  }

  export type UserCreateWithoutChatRoomMembershipsInput = {
    documentId?: string
    name: string
    email?: string | null
    username: string
    password: string
    profilePictureUrl?: string | null
    bio?: string | null
    phoneNumber?: string | null
    lastActivityDate?: Date | string
    status?: number
    isActive?: boolean
    isVerified?: boolean
    themePreference?: number
    notificationSettings?: JsonNullValueInput | InputJsonValue
    privacySettings?: JsonNullValueInput | InputJsonValue
    createdBy: number
    updatedBy: number
    deletedBy?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    sessions?: UserSessionCreateNestedManyWithoutUserInput
    createdChatRooms?: ChatRoomCreateNestedManyWithoutCreatorInput
    requestedRelationships?: UserRelationshipCreateNestedManyWithoutRequesterInput
    receivedRelationships?: UserRelationshipCreateNestedManyWithoutAddresseeInput
    devices?: UserDeviceCreateNestedManyWithoutUserInput
    uploadedFiles?: AttachmentCreateNestedManyWithoutUploaderInput
  }

  export type UserUncheckedCreateWithoutChatRoomMembershipsInput = {
    id?: number
    documentId?: string
    name: string
    email?: string | null
    username: string
    password: string
    profilePictureUrl?: string | null
    bio?: string | null
    phoneNumber?: string | null
    lastActivityDate?: Date | string
    status?: number
    isActive?: boolean
    isVerified?: boolean
    themePreference?: number
    notificationSettings?: JsonNullValueInput | InputJsonValue
    privacySettings?: JsonNullValueInput | InputJsonValue
    createdBy: number
    updatedBy: number
    deletedBy?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    sessions?: UserSessionUncheckedCreateNestedManyWithoutUserInput
    createdChatRooms?: ChatRoomUncheckedCreateNestedManyWithoutCreatorInput
    requestedRelationships?: UserRelationshipUncheckedCreateNestedManyWithoutRequesterInput
    receivedRelationships?: UserRelationshipUncheckedCreateNestedManyWithoutAddresseeInput
    devices?: UserDeviceUncheckedCreateNestedManyWithoutUserInput
    uploadedFiles?: AttachmentUncheckedCreateNestedManyWithoutUploaderInput
  }

  export type UserCreateOrConnectWithoutChatRoomMembershipsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatRoomMembershipsInput, UserUncheckedCreateWithoutChatRoomMembershipsInput>
  }

  export type ChatRoomUpsertWithoutMembersInput = {
    update: XOR<ChatRoomUpdateWithoutMembersInput, ChatRoomUncheckedUpdateWithoutMembersInput>
    create: XOR<ChatRoomCreateWithoutMembersInput, ChatRoomUncheckedCreateWithoutMembersInput>
    where?: ChatRoomWhereInput
  }

  export type ChatRoomUpdateToOneWithWhereWithoutMembersInput = {
    where?: ChatRoomWhereInput
    data: XOR<ChatRoomUpdateWithoutMembersInput, ChatRoomUncheckedUpdateWithoutMembersInput>
  }

  export type ChatRoomUpdateWithoutMembersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    documentId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator?: UserUpdateOneRequiredWithoutCreatedChatRoomsNestedInput
  }

  export type ChatRoomUncheckedUpdateWithoutMembersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    documentId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUpsertWithoutChatRoomMembershipsInput = {
    update: XOR<UserUpdateWithoutChatRoomMembershipsInput, UserUncheckedUpdateWithoutChatRoomMembershipsInput>
    create: XOR<UserCreateWithoutChatRoomMembershipsInput, UserUncheckedCreateWithoutChatRoomMembershipsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChatRoomMembershipsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChatRoomMembershipsInput, UserUncheckedUpdateWithoutChatRoomMembershipsInput>
  }

  export type UserUpdateWithoutChatRoomMembershipsInput = {
    documentId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    lastActivityDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    themePreference?: IntFieldUpdateOperationsInput | number
    notificationSettings?: JsonNullValueInput | InputJsonValue
    privacySettings?: JsonNullValueInput | InputJsonValue
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: UserSessionUpdateManyWithoutUserNestedInput
    createdChatRooms?: ChatRoomUpdateManyWithoutCreatorNestedInput
    requestedRelationships?: UserRelationshipUpdateManyWithoutRequesterNestedInput
    receivedRelationships?: UserRelationshipUpdateManyWithoutAddresseeNestedInput
    devices?: UserDeviceUpdateManyWithoutUserNestedInput
    uploadedFiles?: AttachmentUpdateManyWithoutUploaderNestedInput
  }

  export type UserUncheckedUpdateWithoutChatRoomMembershipsInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    lastActivityDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    themePreference?: IntFieldUpdateOperationsInput | number
    notificationSettings?: JsonNullValueInput | InputJsonValue
    privacySettings?: JsonNullValueInput | InputJsonValue
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: UserSessionUncheckedUpdateManyWithoutUserNestedInput
    createdChatRooms?: ChatRoomUncheckedUpdateManyWithoutCreatorNestedInput
    requestedRelationships?: UserRelationshipUncheckedUpdateManyWithoutRequesterNestedInput
    receivedRelationships?: UserRelationshipUncheckedUpdateManyWithoutAddresseeNestedInput
    devices?: UserDeviceUncheckedUpdateManyWithoutUserNestedInput
    uploadedFiles?: AttachmentUncheckedUpdateManyWithoutUploaderNestedInput
  }

  export type UserCreateWithoutUploadedFilesInput = {
    documentId?: string
    name: string
    email?: string | null
    username: string
    password: string
    profilePictureUrl?: string | null
    bio?: string | null
    phoneNumber?: string | null
    lastActivityDate?: Date | string
    status?: number
    isActive?: boolean
    isVerified?: boolean
    themePreference?: number
    notificationSettings?: JsonNullValueInput | InputJsonValue
    privacySettings?: JsonNullValueInput | InputJsonValue
    createdBy: number
    updatedBy: number
    deletedBy?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    sessions?: UserSessionCreateNestedManyWithoutUserInput
    chatRoomMemberships?: ChatRoomMemberCreateNestedManyWithoutUserInput
    createdChatRooms?: ChatRoomCreateNestedManyWithoutCreatorInput
    requestedRelationships?: UserRelationshipCreateNestedManyWithoutRequesterInput
    receivedRelationships?: UserRelationshipCreateNestedManyWithoutAddresseeInput
    devices?: UserDeviceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUploadedFilesInput = {
    id?: number
    documentId?: string
    name: string
    email?: string | null
    username: string
    password: string
    profilePictureUrl?: string | null
    bio?: string | null
    phoneNumber?: string | null
    lastActivityDate?: Date | string
    status?: number
    isActive?: boolean
    isVerified?: boolean
    themePreference?: number
    notificationSettings?: JsonNullValueInput | InputJsonValue
    privacySettings?: JsonNullValueInput | InputJsonValue
    createdBy: number
    updatedBy: number
    deletedBy?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    sessions?: UserSessionUncheckedCreateNestedManyWithoutUserInput
    chatRoomMemberships?: ChatRoomMemberUncheckedCreateNestedManyWithoutUserInput
    createdChatRooms?: ChatRoomUncheckedCreateNestedManyWithoutCreatorInput
    requestedRelationships?: UserRelationshipUncheckedCreateNestedManyWithoutRequesterInput
    receivedRelationships?: UserRelationshipUncheckedCreateNestedManyWithoutAddresseeInput
    devices?: UserDeviceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUploadedFilesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUploadedFilesInput, UserUncheckedCreateWithoutUploadedFilesInput>
  }

  export type UserUpsertWithoutUploadedFilesInput = {
    update: XOR<UserUpdateWithoutUploadedFilesInput, UserUncheckedUpdateWithoutUploadedFilesInput>
    create: XOR<UserCreateWithoutUploadedFilesInput, UserUncheckedCreateWithoutUploadedFilesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUploadedFilesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUploadedFilesInput, UserUncheckedUpdateWithoutUploadedFilesInput>
  }

  export type UserUpdateWithoutUploadedFilesInput = {
    documentId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    lastActivityDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    themePreference?: IntFieldUpdateOperationsInput | number
    notificationSettings?: JsonNullValueInput | InputJsonValue
    privacySettings?: JsonNullValueInput | InputJsonValue
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: UserSessionUpdateManyWithoutUserNestedInput
    chatRoomMemberships?: ChatRoomMemberUpdateManyWithoutUserNestedInput
    createdChatRooms?: ChatRoomUpdateManyWithoutCreatorNestedInput
    requestedRelationships?: UserRelationshipUpdateManyWithoutRequesterNestedInput
    receivedRelationships?: UserRelationshipUpdateManyWithoutAddresseeNestedInput
    devices?: UserDeviceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUploadedFilesInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    lastActivityDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    themePreference?: IntFieldUpdateOperationsInput | number
    notificationSettings?: JsonNullValueInput | InputJsonValue
    privacySettings?: JsonNullValueInput | InputJsonValue
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: UserSessionUncheckedUpdateManyWithoutUserNestedInput
    chatRoomMemberships?: ChatRoomMemberUncheckedUpdateManyWithoutUserNestedInput
    createdChatRooms?: ChatRoomUncheckedUpdateManyWithoutCreatorNestedInput
    requestedRelationships?: UserRelationshipUncheckedUpdateManyWithoutRequesterNestedInput
    receivedRelationships?: UserRelationshipUncheckedUpdateManyWithoutAddresseeNestedInput
    devices?: UserDeviceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserSessionCreateManyUserInput = {
    id?: number
    documentId?: string
    sessionToken: string
    refreshToken: string
    deviceInfo?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    userAgent?: string | null
    isActive?: boolean
    expiresAt: Date | string
    lastActivityAt?: Date | string
    createdBy: number
    updatedBy: number
    deletedBy?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type ChatRoomMemberCreateManyUserInput = {
    id?: bigint | number
    documentId?: string
    chatRoomId: string
    isMuted?: boolean
    isArchived?: boolean
    isBanned?: boolean
    lastReadMessageId?: string
    role?: number
    leftAt?: Date | string | null
    unreadMessagesCount?: number
    permissions?: JsonNullValueInput | InputJsonValue
    createdBy: number
    updatedBy: number
    deletedBy?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type ChatRoomCreateManyCreatorInput = {
    id?: bigint | number
    documentId?: string
    name: string
    type: number
    description?: string | null
    lastMessageDate?: Date | string
    updatedBy: number
    deletedBy?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type UserRelationshipCreateManyRequesterInput = {
    id?: number
    documentId?: string
    addresseeId: string
    status?: number
    createdBy: number
    updatedBy: number
    deletedBy?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type UserRelationshipCreateManyAddresseeInput = {
    id?: number
    documentId?: string
    requesterId: string
    status?: number
    createdBy: number
    updatedBy: number
    deletedBy?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type UserDeviceCreateManyUserInput = {
    id?: number
    documentId?: string
    deviceToken: string
    deviceType: number
    deviceName?: string | null
    appVersion?: string | null
    osVersion?: string | null
    isActive?: boolean
    lastUsedAt?: Date | string
    createdBy: number
    updatedBy: number
    deletedBy?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type AttachmentCreateManyUploaderInput = {
    id?: number
    documentId?: string
    originalName: string
    fileName: string
    mimeType: string
    fileSize: bigint | number
    filePath: string
    thumbnailPath?: string | null
    isPublic?: boolean
    metadata?: JsonNullValueInput | InputJsonValue
    virusScanStatus?: number
    virusScanResult?: NullableJsonNullValueInput | InputJsonValue
    expiresAt?: Date | string | null
    createdBy: number
    updatedBy: number
    deletedBy?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type UserSessionUpdateWithoutUserInput = {
    documentId?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    deviceInfo?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserSessionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentId?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    deviceInfo?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserSessionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentId?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    deviceInfo?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ChatRoomMemberUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    documentId?: StringFieldUpdateOperationsInput | string
    isMuted?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    lastReadMessageId?: StringFieldUpdateOperationsInput | string
    role?: IntFieldUpdateOperationsInput | number
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unreadMessagesCount?: IntFieldUpdateOperationsInput | number
    permissions?: JsonNullValueInput | InputJsonValue
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chatRoom?: ChatRoomUpdateOneRequiredWithoutMembersNestedInput
  }

  export type ChatRoomMemberUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    documentId?: StringFieldUpdateOperationsInput | string
    chatRoomId?: StringFieldUpdateOperationsInput | string
    isMuted?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    lastReadMessageId?: StringFieldUpdateOperationsInput | string
    role?: IntFieldUpdateOperationsInput | number
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unreadMessagesCount?: IntFieldUpdateOperationsInput | number
    permissions?: JsonNullValueInput | InputJsonValue
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ChatRoomMemberUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    documentId?: StringFieldUpdateOperationsInput | string
    chatRoomId?: StringFieldUpdateOperationsInput | string
    isMuted?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    lastReadMessageId?: StringFieldUpdateOperationsInput | string
    role?: IntFieldUpdateOperationsInput | number
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unreadMessagesCount?: IntFieldUpdateOperationsInput | number
    permissions?: JsonNullValueInput | InputJsonValue
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ChatRoomUpdateWithoutCreatorInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    documentId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    members?: ChatRoomMemberUpdateManyWithoutChatRoomNestedInput
  }

  export type ChatRoomUncheckedUpdateWithoutCreatorInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    documentId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    members?: ChatRoomMemberUncheckedUpdateManyWithoutChatRoomNestedInput
  }

  export type ChatRoomUncheckedUpdateManyWithoutCreatorInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    documentId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserRelationshipUpdateWithoutRequesterInput = {
    documentId?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addressee?: UserUpdateOneRequiredWithoutReceivedRelationshipsNestedInput
  }

  export type UserRelationshipUncheckedUpdateWithoutRequesterInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentId?: StringFieldUpdateOperationsInput | string
    addresseeId?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserRelationshipUncheckedUpdateManyWithoutRequesterInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentId?: StringFieldUpdateOperationsInput | string
    addresseeId?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserRelationshipUpdateWithoutAddresseeInput = {
    documentId?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requester?: UserUpdateOneRequiredWithoutRequestedRelationshipsNestedInput
  }

  export type UserRelationshipUncheckedUpdateWithoutAddresseeInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentId?: StringFieldUpdateOperationsInput | string
    requesterId?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserRelationshipUncheckedUpdateManyWithoutAddresseeInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentId?: StringFieldUpdateOperationsInput | string
    requesterId?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserDeviceUpdateWithoutUserInput = {
    documentId?: StringFieldUpdateOperationsInput | string
    deviceToken?: StringFieldUpdateOperationsInput | string
    deviceType?: IntFieldUpdateOperationsInput | number
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null
    appVersion?: NullableStringFieldUpdateOperationsInput | string | null
    osVersion?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastUsedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserDeviceUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentId?: StringFieldUpdateOperationsInput | string
    deviceToken?: StringFieldUpdateOperationsInput | string
    deviceType?: IntFieldUpdateOperationsInput | number
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null
    appVersion?: NullableStringFieldUpdateOperationsInput | string | null
    osVersion?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastUsedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserDeviceUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentId?: StringFieldUpdateOperationsInput | string
    deviceToken?: StringFieldUpdateOperationsInput | string
    deviceType?: IntFieldUpdateOperationsInput | number
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null
    appVersion?: NullableStringFieldUpdateOperationsInput | string | null
    osVersion?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastUsedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AttachmentUpdateWithoutUploaderInput = {
    documentId?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    fileSize?: BigIntFieldUpdateOperationsInput | bigint | number
    filePath?: StringFieldUpdateOperationsInput | string
    thumbnailPath?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    metadata?: JsonNullValueInput | InputJsonValue
    virusScanStatus?: IntFieldUpdateOperationsInput | number
    virusScanResult?: NullableJsonNullValueInput | InputJsonValue
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AttachmentUncheckedUpdateWithoutUploaderInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentId?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    fileSize?: BigIntFieldUpdateOperationsInput | bigint | number
    filePath?: StringFieldUpdateOperationsInput | string
    thumbnailPath?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    metadata?: JsonNullValueInput | InputJsonValue
    virusScanStatus?: IntFieldUpdateOperationsInput | number
    virusScanResult?: NullableJsonNullValueInput | InputJsonValue
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AttachmentUncheckedUpdateManyWithoutUploaderInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentId?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    fileSize?: BigIntFieldUpdateOperationsInput | bigint | number
    filePath?: StringFieldUpdateOperationsInput | string
    thumbnailPath?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    metadata?: JsonNullValueInput | InputJsonValue
    virusScanStatus?: IntFieldUpdateOperationsInput | number
    virusScanResult?: NullableJsonNullValueInput | InputJsonValue
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ChatRoomMemberCreateManyChatRoomInput = {
    id?: bigint | number
    documentId?: string
    userId: string
    isMuted?: boolean
    isArchived?: boolean
    isBanned?: boolean
    lastReadMessageId?: string
    role?: number
    leftAt?: Date | string | null
    unreadMessagesCount?: number
    permissions?: JsonNullValueInput | InputJsonValue
    createdBy: number
    updatedBy: number
    deletedBy?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type ChatRoomMemberUpdateWithoutChatRoomInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    documentId?: StringFieldUpdateOperationsInput | string
    isMuted?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    lastReadMessageId?: StringFieldUpdateOperationsInput | string
    role?: IntFieldUpdateOperationsInput | number
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unreadMessagesCount?: IntFieldUpdateOperationsInput | number
    permissions?: JsonNullValueInput | InputJsonValue
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutChatRoomMembershipsNestedInput
  }

  export type ChatRoomMemberUncheckedUpdateWithoutChatRoomInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    documentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isMuted?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    lastReadMessageId?: StringFieldUpdateOperationsInput | string
    role?: IntFieldUpdateOperationsInput | number
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unreadMessagesCount?: IntFieldUpdateOperationsInput | number
    permissions?: JsonNullValueInput | InputJsonValue
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ChatRoomMemberUncheckedUpdateManyWithoutChatRoomInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    documentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isMuted?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    lastReadMessageId?: StringFieldUpdateOperationsInput | string
    role?: IntFieldUpdateOperationsInput | number
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unreadMessagesCount?: IntFieldUpdateOperationsInput | number
    permissions?: JsonNullValueInput | InputJsonValue
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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