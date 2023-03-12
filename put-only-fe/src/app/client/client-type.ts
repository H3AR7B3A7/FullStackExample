const clientTypes = {
  backendAuthentication: {
    name: $localize`Backend Authentication`,
    value: 'backend-authentication',
    t1: true,
    t2: false,
  },
  backendCredentials: {
    name: $localize`Backend Credentials`,
    value: 'backend-credentials',
    t1: true,
    t2: true,
  },
  frontendAuthentication: {
    name: $localize`Frontend Authentication`,
    value: 'frontend-authentication',
    t1: false,
    t2: true,
  },
} as const

export const CLIENT_TYPES = Object.values(clientTypes)

export type ClientType = (typeof clientTypes)[keyof typeof clientTypes]

/**
 * Resolve by const value
 * @param clientType
 */
export const resolveClientType = <T extends ClientType>(
  clientType: T
): string | undefined => {
  return Object.keys(clientTypes).find(
    (key) => clientTypes[key as keyof typeof clientTypes] === clientType
  )
}

// /**
//  * Resolve by const key
//  * @param clientType
//  */
// export const resolveClientType = <T extends ClientType>(
//   clientType: T
// ): (typeof clientTypes)[T] => {
//   return clientTypes[clientType]
// }
