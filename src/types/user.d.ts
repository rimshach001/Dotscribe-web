export interface User {
    username: string
    pool: Pool
    Session: null
    client: UserClient
    signInUserSession: SignInUserSession
    authenticationFlowType: string
    storage: Storage2
    keyPrefix: string
    userDataKey: string
    attributes: Attributes
    preferredMFA: string
  }

  export interface Pool {
    userPoolId: string
    clientId: string
    client: Client
    advancedSecurityDataCollectionFlag: boolean
    storage: Storage
  }
  
  export interface Client {
    endpoint: string
    fetchOptions: unknown
  }

  export interface Storage {
    "CognitoIdentityServiceProvider.22ltsjodgrj7ngpa2hpjvlgjgm.bdedf711-53d2-4efa-ad38-148227768d78.idToken": string
    "CognitoIdentityServiceProvider.22ltsjodgrj7ngpa2hpjvlgjgm.bdedf711-53d2-4efa-ad38-148227768d78.accessToken": string
    "CognitoIdentityServiceProvider.22ltsjodgrj7ngpa2hpjvlgjgm.bdedf711-53d2-4efa-ad38-148227768d78.userData": string
    "CognitoIdentityServiceProvider.22ltsjodgrj7ngpa2hpjvlgjgm.bdedf711-53d2-4efa-ad38-148227768d78.clockDrift": string
    "CognitoIdentityServiceProvider.22ltsjodgrj7ngpa2hpjvlgjgm.bdedf711-53d2-4efa-ad38-148227768d78.refreshToken": string
    "amplify-signin-with-hostedUI": string
    "CognitoIdentityServiceProvider.22ltsjodgrj7ngpa2hpjvlgjgm.LastAuthUser": string
  }
  

  export interface UserClient {
    endpoint: string
    fetchOptions: unknown
  }
  
  export interface SignInUserSession {
    idToken: IdToken
    refreshToken: RefreshToken
    accessToken: AccessToken
    clockDrift: number
  }

  
  export interface IdToken {
    jwtToken: string
    payload: UserAttributes
  }
  
  export interface UserAttributes {
    "custom:organization": string
    sub: string
    "cognito:groups": string[]
    email_verified: boolean
    iss: string
    "custom:cognitoGroups": string
    "cognito:username": string
    given_name: string
    origin_jti: string
    aud: string
    event_id: string
    token_use: string
    auth_time: number
    exp: number
    iat: number
    family_name: string
    jti: string
    email: string
  }
  
  export interface RefreshToken {
    token: string
  }
  
  export interface AccessToken {
    jwtToken: string
    payload: UserAttributes2
  }
  
  export interface UserAttributes2 {
    sub: string
    "cognito:groups": string[]
    iss: string
    client_id: string
    origin_jti: string
    event_id: string
    token_use: string
    scope: string
    auth_time: number
    exp: number
    iat: number
    jti: string
    username: string
  }

  export interface Storage2 {
    "CognitoIdentityServiceProvider.22ltsjodgrj7ngpa2hpjvlgjgm.bdedf711-53d2-4efa-ad38-148227768d78.idToken": string
    "CognitoIdentityServiceProvider.22ltsjodgrj7ngpa2hpjvlgjgm.bdedf711-53d2-4efa-ad38-148227768d78.accessToken": string
    "CognitoIdentityServiceProvider.22ltsjodgrj7ngpa2hpjvlgjgm.bdedf711-53d2-4efa-ad38-148227768d78.userData": string
    "CognitoIdentityServiceProvider.22ltsjodgrj7ngpa2hpjvlgjgm.bdedf711-53d2-4efa-ad38-148227768d78.clockDrift": string
    "CognitoIdentityServiceProvider.22ltsjodgrj7ngpa2hpjvlgjgm.bdedf711-53d2-4efa-ad38-148227768d78.refreshToken": string
    "amplify-signin-with-hostedUI": string
    "CognitoIdentityServiceProvider.22ltsjodgrj7ngpa2hpjvlgjgm.LastAuthUser": string
  }

  export interface Attributes {
    "custom:organization": string
    sub: string
    email_verified: boolean
    "custom:cognitoGroups": string
    given_name: string
    family_name: string
    email: string
  }