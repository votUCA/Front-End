/* THIS IS A GENERATED FILE - DO NOT MODIFY */
/* eslint-disable */
import { gql } from '@apollo/client'
import * as ApolloReactCommon from '@apollo/client'
import * as ApolloReactHooks from '@apollo/client'
export type Maybe<T> = T | null

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: string
  /** The `Upload` scalar type represents a file upload. */
  Upload: any
}

export type Candidate = {
  __typename?: 'Candidate'
  id: Scalars['ID']
  firstName: Scalars['String']
  lastName: Scalars['String']
  about?: Maybe<Scalars['String']>
  image?: Maybe<Scalars['String']>
}

export type CandidateInput = {
  firstName: Scalars['String']
  lastName: Scalars['String']
  about?: Maybe<Scalars['String']>
}

export type Census = {
  __typename?: 'Census'
  id: Scalars['ID']
  group: Scalars['String']
  date: Scalars['DateTime']
  location: Scalars['String']
  voters: Array<Voter>
}

export type CensusInput = {
  group: Scalars['String']
  date: Scalars['DateTime']
  location: Scalars['String']
  voters: Array<VoterInput>
}

export type ColegiateBody = {
  __typename?: 'ColegiateBody'
  id: Scalars['ID']
  name: Scalars['String']
  users: Array<User>
}

export type ColegiateBodyInput = {
  name: Scalars['String']
}

export type Election = {
  __typename?: 'Election'
  id: Scalars['ID']
  start: Scalars['DateTime']
  end: Scalars['DateTime']
  description: Scalars['String']
  maxVotes: Scalars['Int']
  voteWeights: Array<VoteWeight>
  candidates: Array<Candidate>
  secretary: User
  results: ResultsForElection
  censuses: Array<Census>
  delegates: Array<User>
}

export type ElectionResultsArgs = {
  filter?: Maybe<ResultsFilter>
}

export type ElectionInput = {
  start: Scalars['DateTime']
  end: Scalars['DateTime']
  description: Scalars['String']
  censuses: Array<CensusInput>
  delegates: Array<Scalars['ID']>
  maxVotes?: Maybe<Scalars['Int']>
  candidates: Array<CandidateInput>
  voteWeights?: Maybe<Array<VoteWeightInput>>
}

export type ElectionResults = {
  __typename?: 'ElectionResults'
  votes: Scalars['Int']
  group?: Maybe<Scalars['String']>
  location?: Maybe<Scalars['String']>
  genre?: Maybe<Genre>
  candidate: Candidate
}

export type ElectionVote = {
  __typename?: 'ElectionVote'
  id: Scalars['ID']
  user: Scalars['ID']
  election: Scalars['ID']
  candidate: Scalars['ID']
}

export type ElectoralProcess = Election | Poll

export type File = {
  __typename?: 'File'
  name: Scalars['String']
}

export enum Genre {
  Male = 'MALE',
  Female = 'FEMALE',
  Other = 'OTHER',
}

export type LoginInput = {
  uid: Scalars['String']
  password: Scalars['String']
}

export type LoginPayload = {
  __typename?: 'LoginPayload'
  accessToken: Scalars['String']
}

export type Mutation = {
  __typename?: 'Mutation'
  modifyUser: User
  createUser: User
  deleteUser: User
  login: LoginPayload
  createColegiateBody: ColegiateBody
  deleteCandidate: Candidate
  createElection: Election
  voteOnElection: Scalars['Boolean']
  modifyElection: Election
  deleteElection: Scalars['Boolean']
  uploadFile: File
  createPoll: Poll
  voteOnPoll: Scalars['Boolean']
  modifyPoll: Poll
  deletePoll: Scalars['Boolean']
}

export type MutationModifyUserArgs = {
  input: UserUpdateInput
  id: Scalars['ID']
}

export type MutationCreateUserArgs = {
  input: UserInput
}

export type MutationDeleteUserArgs = {
  id: Scalars['ID']
}

export type MutationLoginArgs = {
  input: LoginInput
}

export type MutationCreateColegiateBodyArgs = {
  input: ColegiateBodyInput
}

export type MutationDeleteCandidateArgs = {
  id: Scalars['ID']
  election: Scalars['ID']
}

export type MutationCreateElectionArgs = {
  input: ElectionInput
}

export type MutationVoteOnElectionArgs = {
  input: VoteElectionInput
}

export type MutationModifyElectionArgs = {
  input: UpdateElectionInput
  id: Scalars['ID']
}

export type MutationDeleteElectionArgs = {
  id: Scalars['ID']
}

export type MutationUploadFileArgs = {
  file: Scalars['Upload']
}

export type MutationCreatePollArgs = {
  input: PollInput
}

export type MutationVoteOnPollArgs = {
  input: VotePollInput
}

export type MutationModifyPollArgs = {
  input: UpdatePollInput
  id: Scalars['ID']
}

export type MutationDeletePollArgs = {
  id: Scalars['ID']
}

export type Poll = {
  __typename?: 'Poll'
  id: Scalars['ID']
  start: Scalars['DateTime']
  end: Scalars['DateTime']
  description: Scalars['String']
  maxVotes: Scalars['Int']
  question: Scalars['String']
  options: Array<PollOption>
  isRealTime: Scalars['Boolean']
  censuses: Array<Census>
  secretary: User
  results: ResultsForPoll
  delegates: Array<User>
}

export type PollResultsArgs = {
  filter?: Maybe<ResultsFilter>
}

export type PollInput = {
  start: Scalars['DateTime']
  end: Scalars['DateTime']
  description: Scalars['String']
  censuses: Array<CensusInput>
  delegates: Array<Scalars['ID']>
  maxVotes?: Maybe<Scalars['Int']>
  question: Scalars['String']
  options?: Maybe<Array<Scalars['String']>>
  isRealTime: Scalars['Boolean']
}

export type PollOption = {
  __typename?: 'PollOption'
  id: Scalars['ID']
  text: Scalars['String']
}

export type PollResults = {
  __typename?: 'PollResults'
  id: Scalars['ID']
  votes: Scalars['Int']
  group?: Maybe<Scalars['String']>
  location?: Maybe<Scalars['String']>
  genre?: Maybe<Genre>
  option: PollOption
}

export type PollVote = {
  __typename?: 'PollVote'
  id: Scalars['ID']
  user: Scalars['String']
  poll: Scalars['String']
  option: Scalars['String']
}

export type Query = {
  __typename?: 'Query'
  users: Array<User>
  user: User
  me: User
  colegiateBody: ColegiateBody
  collegiateBodies: Array<ColegiateBody>
  electoralProcesses: Array<ElectoralProcess>
  electoralProcess: ElectoralProcess
  pendingElectoralProcesses: Array<ElectoralProcess>
  elections: Array<Election>
  pendingElections: Array<Election>
  election: Election
  census: Census
  censuses: Array<Census>
  polls: Array<Poll>
  poll: Poll
  pendingPolls: Array<Poll>
  isLoggedIn: Scalars['Boolean']
}

export type QueryUserArgs = {
  id: Scalars['ID']
}

export type QueryColegiateBodyArgs = {
  id: Scalars['ID']
}

export type QueryElectoralProcessesArgs = {
  open?: Maybe<Scalars['Boolean']>
  finished?: Maybe<Scalars['Boolean']>
}

export type QueryElectoralProcessArgs = {
  id: Scalars['ID']
}

export type QueryElectionArgs = {
  id: Scalars['ID']
}

export type QueryCensusArgs = {
  id: Scalars['ID']
}

export type QueryCensusesArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryPollArgs = {
  id: Scalars['ID']
}

export type ResultsFilter = {
  group?: Maybe<Scalars['Boolean']>
  location?: Maybe<Scalars['Boolean']>
  genre?: Maybe<Scalars['Boolean']>
}

export type ResultsForElection = {
  __typename?: 'ResultsForElection'
  /** Votantes habilitados */
  voters: Scalars['Int']
  /** Votos Emitidos */
  votesCast: Scalars['Int']
  /** Votos en blanco */
  whiteVotes: Scalars['Int']
  results: Array<ElectionResults>
}

export type ResultsForPoll = {
  __typename?: 'ResultsForPoll'
  /** Votantes habilitados */
  voters: Scalars['Int']
  /** Votos Emitidos */
  votesCast: Scalars['Int']
  /** Votos en blanco */
  whiteVotes: Scalars['Int']
  results: Array<PollResults>
}

/** All possible roles on app */
export enum Role {
  Admin = 'ADMIN',
  Secretary = 'SECRETARY',
  Voter = 'VOTER',
}

export type UpdateElectionInput = {
  start?: Maybe<Scalars['DateTime']>
  end?: Maybe<Scalars['DateTime']>
  description?: Maybe<Scalars['String']>
  censuses?: Maybe<Array<CensusInput>>
  delegates?: Maybe<Array<UserInput>>
  candidates?: Maybe<Array<CandidateInput>>
}

export type UpdatePollInput = {
  start?: Maybe<Scalars['DateTime']>
  end?: Maybe<Scalars['DateTime']>
  description?: Maybe<Scalars['String']>
  censuses?: Maybe<Array<CensusInput>>
  delegates?: Maybe<Array<UserInput>>
  question?: Maybe<Scalars['String']>
  options?: Maybe<Array<Scalars['String']>>
}

export type User = {
  __typename?: 'User'
  id: Scalars['ID']
  uid: Scalars['String']
  dni: Scalars['String']
  firstName: Scalars['String']
  lastName: Scalars['String']
  roles: Array<Role>
  genre: Genre
  colegiateBody: ColegiateBody
}

export type UserInput = {
  uid: Scalars['String']
  dni: Scalars['String']
  password: Scalars['String']
  firstName: Scalars['String']
  lastName: Scalars['String']
  roles?: Maybe<Array<Role>>
  colegiateBody: Scalars['ID']
  genre: Genre
}

export type UserUpdateInput = {
  password?: Maybe<Scalars['String']>
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  roles?: Maybe<Array<Role>>
  colegiateBody?: Maybe<Scalars['ID']>
  genre?: Maybe<Genre>
}

export type VoteElectionInput = {
  candidates: Array<Scalars['ID']>
  election: Scalars['ID']
}

export type VotePollInput = {
  options: Array<Scalars['ID']>
  poll: Scalars['ID']
}

export type Voter = {
  __typename?: 'Voter'
  firstName: Scalars['String']
  lastName: Scalars['String']
  uid: Scalars['String']
  dni: Scalars['String']
}

export type VoterInput = {
  firstName: Scalars['String']
  lastName: Scalars['String']
  uid: Scalars['String']
  dni: Scalars['String']
}

export type VoteWeight = {
  __typename?: 'VoteWeight'
  group: Scalars['String']
  weight: Scalars['Float']
}

export type VoteWeightInput = {
  group: Scalars['String']
  weight: Scalars['Float']
}

export type UsersQueryVariables = {}

export type UsersQuery = {
  __typename?: 'Query'
  users: Array<{
    __typename?: 'User'
    id: string
    uid: string
    dni: string
    firstName: string
    lastName: string
    roles: Array<Role>
    genre: Genre
    colegiateBody: { __typename?: 'ColegiateBody'; id: string; name: string }
  }>
}

export type DeleteUserMutationVariables = {
  id: Scalars['ID']
}

export type DeleteUserMutation = {
  __typename?: 'Mutation'
  deleteUser: { __typename?: 'User'; uid: string }
}

export type ModifyUserMutationVariables = {
  input: UserUpdateInput
  id: Scalars['ID']
}

export type ModifyUserMutation = {
  __typename?: 'Mutation'
  modifyUser: { __typename?: 'User'; uid: string }
}

export type CreateUserMutationVariables = {
  input: UserInput
}

export type CreateUserMutation = {
  __typename?: 'Mutation'
  createUser: { __typename?: 'User'; uid: string }
}

export type CollegiateBodiesQueryVariables = {}

export type CollegiateBodiesQuery = {
  __typename?: 'Query'
  collegiateBodies: Array<{
    __typename?: 'ColegiateBody'
    id: string
    name: string
  }>
}

export type ColegiosyusuariosQueryVariables = {}

export type ColegiosyusuariosQuery = {
  __typename?: 'Query'
  collegiateBodies: Array<{
    __typename?: 'ColegiateBody'
    id: string
    name: string
  }>
  users: Array<{
    __typename?: 'User'
    uid: string
    firstName: string
    lastName: string
    colegiateBody: { __typename?: 'ColegiateBody'; id: string }
  }>
}

export type CreateElectionMutationVariables = {
  input: ElectionInput
}

export type CreateElectionMutation = {
  __typename?: 'Mutation'
  createElection: { __typename?: 'Election'; id: string }
}

export type CrearPollMutationVariables = {
  input: PollInput
}

export type CrearPollMutation = {
  __typename?: 'Mutation'
  createPoll: { __typename?: 'Poll'; id: string }
}

export type ElectionsQueryVariables = {}

export type ElectionsQuery = {
  __typename?: 'Query'
  pendingElections: Array<{
    __typename?: 'Election'
    start: string
    end: string
    description: string
    id: string
  }>
}

export type PollsQueryVariables = {}

export type PollsQuery = {
  __typename?: 'Query'
  polls: Array<{
    __typename?: 'Poll'
    id: string
    start: string
    end: string
    description: string
  }>
}

export type ElectoralProcessesQueryVariables = {}

export type ElectoralProcessesQuery = {
  __typename?: 'Query'
  pendingElectoralProcesses: Array<
    | {
        __typename: 'Election'
        id: string
        description: string
        start: string
        end: string
      }
    | {
        __typename: 'Poll'
        id: string
        description: string
        start: string
        end: string
      }
  >
}

export type ElectoralProcessesCrudQueryVariables = {}

export type ElectoralProcessesCrudQuery = {
  __typename?: 'Query'
  electoralProcesses: Array<
    | {
        __typename: 'Election'
        id: string
        end: string
        start: string
        description: string
      }
    | {
        __typename: 'Poll'
        id: string
        end: string
        start: string
        description: string
      }
  >
}

export type OptionsQueryVariables = {
  id: Scalars['ID']
}

export type OptionsQuery = {
  __typename?: 'Query'
  poll: {
    __typename?: 'Poll'
    start: string
    end: string
    description: string
    options: Array<{ __typename?: 'PollOption'; id: string; text: string }>
  }
}

export type CensusQueryVariables = {
  id: Scalars['ID']
}

export type CensusQuery = {
  __typename?: 'Query'
  electoralProcess:
    | {
        __typename: 'Election'
        description: string
        start: string
        end: string
        secretary: { __typename?: 'User'; firstName: string; lastName: string }
        censuses: Array<{
          __typename?: 'Census'
          voters: Array<{
            __typename?: 'Voter'
            firstName: string
            lastName: string
          }>
        }>
        delegates: Array<{
          __typename?: 'User'
          firstName: string
          lastName: string
        }>
      }
    | {
        __typename: 'Poll'
        description: string
        start: string
        end: string
        secretary: { __typename?: 'User'; firstName: string; lastName: string }
        censuses: Array<{
          __typename?: 'Census'
          voters: Array<{
            __typename?: 'Voter'
            firstName: string
            lastName: string
          }>
        }>
        delegates: Array<{
          __typename?: 'User'
          firstName: string
          lastName: string
        }>
      }
}

export type PastElectionResultsQueryVariables = {}

export type PastElectionResultsQuery = {
  __typename?: 'Query'
  electoralProcesses: Array<
    | {
        __typename: 'Election'
        id: string
        description: string
        start: string
        end: string
      }
    | {
        __typename: 'Poll'
        id: string
        description: string
        start: string
        end: string
      }
  >
}

export type DeleteElectionMutationVariables = {
  id: Scalars['ID']
}

export type DeleteElectionMutation = {
  __typename?: 'Mutation'
  deleteElection: boolean
}

export type DeletePollMutationVariables = {
  id: Scalars['ID']
}

export type DeletePollMutation = {
  __typename?: 'Mutation'
  deletePoll: boolean
}

export type GetElectoralProcessQueryVariables = {
  id: Scalars['ID']
}

export type GetElectoralProcessQuery = {
  __typename?: 'Query'
  electoralProcess:
    | {
        __typename: 'Election'
        id: string
        description: string
        start: string
        end: string
      }
    | {
        __typename: 'Poll'
        id: string
        description: string
        start: string
        end: string
      }
}

export type ColegiosQueryVariables = {}

export type ColegiosQuery = {
  __typename?: 'Query'
  collegiateBodies: Array<{
    __typename?: 'ColegiateBody'
    id: string
    name: string
  }>
  users: Array<{
    __typename?: 'User'
    id: string
    firstName: string
    lastName: string
    colegiateBody: { __typename?: 'ColegiateBody'; id: string }
  }>
}

export type DeleteElectoralProcessMutationVariables = {
  id: Scalars['ID']
  poll: Scalars['Boolean']
  election: Scalars['Boolean']
}

export type DeleteElectoralProcessMutation = {
  __typename?: 'Mutation'
  deletePoll: boolean
  deleteElection: boolean
}

export type OptionsElectionQueryVariables = {
  id: Scalars['ID']
}

export type OptionsElectionQuery = {
  __typename?: 'Query'
  election: {
    __typename?: 'Election'
    start: string
    end: string
    description: string
    candidates: Array<{
      __typename?: 'Candidate'
      id: string
      firstName: string
      lastName: string
    }>
  }
}

export type MeQueryVariables = {}

export type MeQuery = {
  __typename?: 'Query'
  me: {
    __typename?: 'User'
    id: string
    uid: string
    dni: string
    firstName: string
    lastName: string
    roles: Array<Role>
    genre: Genre
    colegiateBody: { __typename?: 'ColegiateBody'; id: string; name: string }
  }
}

export type LogInMutationVariables = {
  input: LoginInput
}

export type LogInMutation = {
  __typename?: 'Mutation'
  login: { __typename?: 'LoginPayload'; accessToken: string }
}

export type ResultForElectionQueryVariables = {
  id: Scalars['ID']
}

export type ResultForElectionQuery = {
  __typename?: 'Query'
  election: {
    __typename?: 'Election'
    start: string
    end: string
    description: string
    voteWeights: Array<{
      __typename?: 'VoteWeight'
      group: string
      weight: number
    }>
    results: {
      __typename?: 'ResultsForElection'
      voters: number
      votesCast: number
      whiteVotes: number
      results: Array<
        { __typename?: 'ElectionResults' } & ElectionResultsFragment
      >
    }
    resultsByGroup: {
      __typename?: 'ResultsForElection'
      results: Array<
        {
          __typename?: 'ElectionResults'
          group: Maybe<string>
        } & ElectionResultsFragment
      >
    }
  }
}

export type ElectionResultsFragment = {
  __typename?: 'ElectionResults'
  votes: number
  candidate: {
    __typename?: 'Candidate'
    id: string
    firstName: string
    lastName: string
  }
}

export type ResultForPollQueryVariables = {
  id: Scalars['ID']
}

export type ResultForPollQuery = {
  __typename?: 'Query'
  poll: {
    __typename?: 'Poll'
    start: string
    end: string
    description: string
    results: {
      __typename?: 'ResultsForPoll'
      voters: number
      votesCast: number
      whiteVotes: number
      results: Array<{ __typename?: 'PollResults' } & PollResultsFragment>
    }
    resultsByGroup: {
      __typename?: 'ResultsForPoll'
      results: Array<
        {
          __typename?: 'PollResults'
          group: Maybe<string>
        } & PollResultsFragment
      >
    }
  }
}

export type PollResultsFragment = {
  __typename?: 'PollResults'
  votes: number
  option: { __typename?: 'PollOption'; id: string; text: string }
}

export type VotePollMutationVariables = {
  input: VotePollInput
}

export type VotePollMutation = { __typename?: 'Mutation'; voteOnPoll: boolean }

export type VoteElectionMutationVariables = {
  input: VoteElectionInput
}

export type VoteElectionMutation = {
  __typename?: 'Mutation'
  voteOnElection: boolean
}

export const ElectionResultsFragmentDoc = gql`
  fragment electionResults on ElectionResults {
    votes
    candidate {
      id
      firstName
      lastName
    }
  }
`
export const PollResultsFragmentDoc = gql`
  fragment pollResults on PollResults {
    votes
    option {
      id
      text
    }
  }
`
export const UsersDocument = gql`
  query users {
    users {
      id
      uid
      dni
      firstName
      lastName
      roles
      genre
      colegiateBody {
        id
        name
      }
    }
  }
`
export function useUsersQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    UsersQuery,
    UsersQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<UsersQuery, UsersQueryVariables>(
    UsersDocument,
    baseOptions
  )
}
export function useUsersLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    UsersQuery,
    UsersQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<UsersQuery, UsersQueryVariables>(
    UsersDocument,
    baseOptions
  )
}
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>
export type UsersQueryResult = ApolloReactCommon.QueryResult<
  UsersQuery,
  UsersQueryVariables
>
export const DeleteUserDocument = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id) {
      uid
    }
  }
`
export type DeleteUserMutationFn = ApolloReactCommon.MutationFunction<
  DeleteUserMutation,
  DeleteUserMutationVariables
>
export function useDeleteUserMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    DeleteUserMutation,
    DeleteUserMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    DeleteUserMutation,
    DeleteUserMutationVariables
  >(DeleteUserDocument, baseOptions)
}
export type DeleteUserMutationHookResult = ReturnType<
  typeof useDeleteUserMutation
>
export type DeleteUserMutationResult = ApolloReactCommon.MutationResult<
  DeleteUserMutation
>
export type DeleteUserMutationOptions = ApolloReactCommon.BaseMutationOptions<
  DeleteUserMutation,
  DeleteUserMutationVariables
>
export const ModifyUserDocument = gql`
  mutation modifyUser($input: UserUpdateInput!, $id: ID!) {
    modifyUser(input: $input, id: $id) {
      uid
    }
  }
`
export type ModifyUserMutationFn = ApolloReactCommon.MutationFunction<
  ModifyUserMutation,
  ModifyUserMutationVariables
>
export function useModifyUserMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    ModifyUserMutation,
    ModifyUserMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    ModifyUserMutation,
    ModifyUserMutationVariables
  >(ModifyUserDocument, baseOptions)
}
export type ModifyUserMutationHookResult = ReturnType<
  typeof useModifyUserMutation
>
export type ModifyUserMutationResult = ApolloReactCommon.MutationResult<
  ModifyUserMutation
>
export type ModifyUserMutationOptions = ApolloReactCommon.BaseMutationOptions<
  ModifyUserMutation,
  ModifyUserMutationVariables
>
export const CreateUserDocument = gql`
  mutation createUser($input: UserInput!) {
    createUser(input: $input) {
      uid
    }
  }
`
export type CreateUserMutationFn = ApolloReactCommon.MutationFunction<
  CreateUserMutation,
  CreateUserMutationVariables
>
export function useCreateUserMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    CreateUserMutation,
    CreateUserMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    CreateUserMutation,
    CreateUserMutationVariables
  >(CreateUserDocument, baseOptions)
}
export type CreateUserMutationHookResult = ReturnType<
  typeof useCreateUserMutation
>
export type CreateUserMutationResult = ApolloReactCommon.MutationResult<
  CreateUserMutation
>
export type CreateUserMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateUserMutation,
  CreateUserMutationVariables
>
export const CollegiateBodiesDocument = gql`
  query collegiateBodies {
    collegiateBodies {
      id
      name
    }
  }
`
export function useCollegiateBodiesQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    CollegiateBodiesQuery,
    CollegiateBodiesQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    CollegiateBodiesQuery,
    CollegiateBodiesQueryVariables
  >(CollegiateBodiesDocument, baseOptions)
}
export function useCollegiateBodiesLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    CollegiateBodiesQuery,
    CollegiateBodiesQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    CollegiateBodiesQuery,
    CollegiateBodiesQueryVariables
  >(CollegiateBodiesDocument, baseOptions)
}
export type CollegiateBodiesQueryHookResult = ReturnType<
  typeof useCollegiateBodiesQuery
>
export type CollegiateBodiesLazyQueryHookResult = ReturnType<
  typeof useCollegiateBodiesLazyQuery
>
export type CollegiateBodiesQueryResult = ApolloReactCommon.QueryResult<
  CollegiateBodiesQuery,
  CollegiateBodiesQueryVariables
>
export const ColegiosyusuariosDocument = gql`
  query colegiosyusuarios {
    collegiateBodies {
      id
      name
    }
    users {
      uid
      firstName
      lastName
      colegiateBody {
        id
      }
    }
  }
`
export function useColegiosyusuariosQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    ColegiosyusuariosQuery,
    ColegiosyusuariosQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    ColegiosyusuariosQuery,
    ColegiosyusuariosQueryVariables
  >(ColegiosyusuariosDocument, baseOptions)
}
export function useColegiosyusuariosLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    ColegiosyusuariosQuery,
    ColegiosyusuariosQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    ColegiosyusuariosQuery,
    ColegiosyusuariosQueryVariables
  >(ColegiosyusuariosDocument, baseOptions)
}
export type ColegiosyusuariosQueryHookResult = ReturnType<
  typeof useColegiosyusuariosQuery
>
export type ColegiosyusuariosLazyQueryHookResult = ReturnType<
  typeof useColegiosyusuariosLazyQuery
>
export type ColegiosyusuariosQueryResult = ApolloReactCommon.QueryResult<
  ColegiosyusuariosQuery,
  ColegiosyusuariosQueryVariables
>
export const CreateElectionDocument = gql`
  mutation createElection($input: ElectionInput!) {
    createElection(input: $input) {
      id
    }
  }
`
export type CreateElectionMutationFn = ApolloReactCommon.MutationFunction<
  CreateElectionMutation,
  CreateElectionMutationVariables
>
export function useCreateElectionMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    CreateElectionMutation,
    CreateElectionMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    CreateElectionMutation,
    CreateElectionMutationVariables
  >(CreateElectionDocument, baseOptions)
}
export type CreateElectionMutationHookResult = ReturnType<
  typeof useCreateElectionMutation
>
export type CreateElectionMutationResult = ApolloReactCommon.MutationResult<
  CreateElectionMutation
>
export type CreateElectionMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateElectionMutation,
  CreateElectionMutationVariables
>
export const CrearPollDocument = gql`
  mutation CrearPoll($input: PollInput!) {
    createPoll(input: $input) {
      id
    }
  }
`
export type CrearPollMutationFn = ApolloReactCommon.MutationFunction<
  CrearPollMutation,
  CrearPollMutationVariables
>
export function useCrearPollMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    CrearPollMutation,
    CrearPollMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    CrearPollMutation,
    CrearPollMutationVariables
  >(CrearPollDocument, baseOptions)
}
export type CrearPollMutationHookResult = ReturnType<
  typeof useCrearPollMutation
>
export type CrearPollMutationResult = ApolloReactCommon.MutationResult<
  CrearPollMutation
>
export type CrearPollMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CrearPollMutation,
  CrearPollMutationVariables
>
export const ElectionsDocument = gql`
  query elections {
    pendingElections {
      start
      end
      description
      id
    }
  }
`
export function useElectionsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    ElectionsQuery,
    ElectionsQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<ElectionsQuery, ElectionsQueryVariables>(
    ElectionsDocument,
    baseOptions
  )
}
export function useElectionsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    ElectionsQuery,
    ElectionsQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<ElectionsQuery, ElectionsQueryVariables>(
    ElectionsDocument,
    baseOptions
  )
}
export type ElectionsQueryHookResult = ReturnType<typeof useElectionsQuery>
export type ElectionsLazyQueryHookResult = ReturnType<
  typeof useElectionsLazyQuery
>
export type ElectionsQueryResult = ApolloReactCommon.QueryResult<
  ElectionsQuery,
  ElectionsQueryVariables
>
export const PollsDocument = gql`
  query polls {
    polls {
      id
      start
      end
      description
    }
  }
`
export function usePollsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    PollsQuery,
    PollsQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<PollsQuery, PollsQueryVariables>(
    PollsDocument,
    baseOptions
  )
}
export function usePollsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    PollsQuery,
    PollsQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<PollsQuery, PollsQueryVariables>(
    PollsDocument,
    baseOptions
  )
}
export type PollsQueryHookResult = ReturnType<typeof usePollsQuery>
export type PollsLazyQueryHookResult = ReturnType<typeof usePollsLazyQuery>
export type PollsQueryResult = ApolloReactCommon.QueryResult<
  PollsQuery,
  PollsQueryVariables
>
export const ElectoralProcessesDocument = gql`
  query electoralProcesses {
    pendingElectoralProcesses {
      __typename
      ... on Election {
        id
        description
        start
        end
      }
      ... on Poll {
        id
        description
        start
        end
      }
    }
  }
`
export function useElectoralProcessesQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    ElectoralProcessesQuery,
    ElectoralProcessesQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    ElectoralProcessesQuery,
    ElectoralProcessesQueryVariables
  >(ElectoralProcessesDocument, baseOptions)
}
export function useElectoralProcessesLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    ElectoralProcessesQuery,
    ElectoralProcessesQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    ElectoralProcessesQuery,
    ElectoralProcessesQueryVariables
  >(ElectoralProcessesDocument, baseOptions)
}
export type ElectoralProcessesQueryHookResult = ReturnType<
  typeof useElectoralProcessesQuery
>
export type ElectoralProcessesLazyQueryHookResult = ReturnType<
  typeof useElectoralProcessesLazyQuery
>
export type ElectoralProcessesQueryResult = ApolloReactCommon.QueryResult<
  ElectoralProcessesQuery,
  ElectoralProcessesQueryVariables
>
export const ElectoralProcessesCrudDocument = gql`
  query electoralProcessesCRUD {
    electoralProcesses(open: true) {
      __typename
      ... on Election {
        id
        end
        start
        description
      }
      ... on Poll {
        id
        end
        start
        description
      }
    }
  }
`
export function useElectoralProcessesCrudQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    ElectoralProcessesCrudQuery,
    ElectoralProcessesCrudQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    ElectoralProcessesCrudQuery,
    ElectoralProcessesCrudQueryVariables
  >(ElectoralProcessesCrudDocument, baseOptions)
}
export function useElectoralProcessesCrudLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    ElectoralProcessesCrudQuery,
    ElectoralProcessesCrudQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    ElectoralProcessesCrudQuery,
    ElectoralProcessesCrudQueryVariables
  >(ElectoralProcessesCrudDocument, baseOptions)
}
export type ElectoralProcessesCrudQueryHookResult = ReturnType<
  typeof useElectoralProcessesCrudQuery
>
export type ElectoralProcessesCrudLazyQueryHookResult = ReturnType<
  typeof useElectoralProcessesCrudLazyQuery
>
export type ElectoralProcessesCrudQueryResult = ApolloReactCommon.QueryResult<
  ElectoralProcessesCrudQuery,
  ElectoralProcessesCrudQueryVariables
>
export const OptionsDocument = gql`
  query options($id: ID!) {
    poll(id: $id) {
      start
      end
      description
      options {
        id
        text
      }
    }
  }
`
export function useOptionsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    OptionsQuery,
    OptionsQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<OptionsQuery, OptionsQueryVariables>(
    OptionsDocument,
    baseOptions
  )
}
export function useOptionsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    OptionsQuery,
    OptionsQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<OptionsQuery, OptionsQueryVariables>(
    OptionsDocument,
    baseOptions
  )
}
export type OptionsQueryHookResult = ReturnType<typeof useOptionsQuery>
export type OptionsLazyQueryHookResult = ReturnType<typeof useOptionsLazyQuery>
export type OptionsQueryResult = ApolloReactCommon.QueryResult<
  OptionsQuery,
  OptionsQueryVariables
>
export const CensusDocument = gql`
  query census($id: ID!) {
    electoralProcess(id: $id) {
      __typename
      ... on Election {
        description
        start
        end
        secretary {
          firstName
          lastName
        }
        censuses {
          voters {
            firstName
            lastName
          }
        }
        delegates {
          firstName
          lastName
        }
      }
      __typename
      ... on Poll {
        description
        start
        end
        secretary {
          firstName
          lastName
        }
        censuses {
          voters {
            firstName
            lastName
          }
        }
        delegates {
          firstName
          lastName
        }
      }
    }
  }
`
export function useCensusQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    CensusQuery,
    CensusQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<CensusQuery, CensusQueryVariables>(
    CensusDocument,
    baseOptions
  )
}
export function useCensusLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    CensusQuery,
    CensusQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<CensusQuery, CensusQueryVariables>(
    CensusDocument,
    baseOptions
  )
}
export type CensusQueryHookResult = ReturnType<typeof useCensusQuery>
export type CensusLazyQueryHookResult = ReturnType<typeof useCensusLazyQuery>
export type CensusQueryResult = ApolloReactCommon.QueryResult<
  CensusQuery,
  CensusQueryVariables
>
export const PastElectionResultsDocument = gql`
  query PastElectionResults {
    electoralProcesses(finished: true) {
      __typename
      ... on Election {
        id
        description
        start
        end
      }
      ... on Poll {
        id
        description
        start
        end
      }
    }
  }
`
export function usePastElectionResultsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    PastElectionResultsQuery,
    PastElectionResultsQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    PastElectionResultsQuery,
    PastElectionResultsQueryVariables
  >(PastElectionResultsDocument, baseOptions)
}
export function usePastElectionResultsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    PastElectionResultsQuery,
    PastElectionResultsQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    PastElectionResultsQuery,
    PastElectionResultsQueryVariables
  >(PastElectionResultsDocument, baseOptions)
}
export type PastElectionResultsQueryHookResult = ReturnType<
  typeof usePastElectionResultsQuery
>
export type PastElectionResultsLazyQueryHookResult = ReturnType<
  typeof usePastElectionResultsLazyQuery
>
export type PastElectionResultsQueryResult = ApolloReactCommon.QueryResult<
  PastElectionResultsQuery,
  PastElectionResultsQueryVariables
>
export const DeleteElectionDocument = gql`
  mutation deleteElection($id: ID!) {
    deleteElection(id: $id)
  }
`
export type DeleteElectionMutationFn = ApolloReactCommon.MutationFunction<
  DeleteElectionMutation,
  DeleteElectionMutationVariables
>
export function useDeleteElectionMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    DeleteElectionMutation,
    DeleteElectionMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    DeleteElectionMutation,
    DeleteElectionMutationVariables
  >(DeleteElectionDocument, baseOptions)
}
export type DeleteElectionMutationHookResult = ReturnType<
  typeof useDeleteElectionMutation
>
export type DeleteElectionMutationResult = ApolloReactCommon.MutationResult<
  DeleteElectionMutation
>
export type DeleteElectionMutationOptions = ApolloReactCommon.BaseMutationOptions<
  DeleteElectionMutation,
  DeleteElectionMutationVariables
>
export const DeletePollDocument = gql`
  mutation deletePoll($id: ID!) {
    deletePoll(id: $id)
  }
`
export type DeletePollMutationFn = ApolloReactCommon.MutationFunction<
  DeletePollMutation,
  DeletePollMutationVariables
>
export function useDeletePollMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    DeletePollMutation,
    DeletePollMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    DeletePollMutation,
    DeletePollMutationVariables
  >(DeletePollDocument, baseOptions)
}
export type DeletePollMutationHookResult = ReturnType<
  typeof useDeletePollMutation
>
export type DeletePollMutationResult = ApolloReactCommon.MutationResult<
  DeletePollMutation
>
export type DeletePollMutationOptions = ApolloReactCommon.BaseMutationOptions<
  DeletePollMutation,
  DeletePollMutationVariables
>
export const GetElectoralProcessDocument = gql`
  query getElectoralProcess($id: ID!) {
    electoralProcess(id: $id) {
      __typename
      ... on Election {
        id
        description
        start
        end
      }
      ... on Poll {
        id
        description
        start
        end
      }
    }
  }
`
export function useGetElectoralProcessQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetElectoralProcessQuery,
    GetElectoralProcessQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    GetElectoralProcessQuery,
    GetElectoralProcessQueryVariables
  >(GetElectoralProcessDocument, baseOptions)
}
export function useGetElectoralProcessLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetElectoralProcessQuery,
    GetElectoralProcessQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    GetElectoralProcessQuery,
    GetElectoralProcessQueryVariables
  >(GetElectoralProcessDocument, baseOptions)
}
export type GetElectoralProcessQueryHookResult = ReturnType<
  typeof useGetElectoralProcessQuery
>
export type GetElectoralProcessLazyQueryHookResult = ReturnType<
  typeof useGetElectoralProcessLazyQuery
>
export type GetElectoralProcessQueryResult = ApolloReactCommon.QueryResult<
  GetElectoralProcessQuery,
  GetElectoralProcessQueryVariables
>
export const ColegiosDocument = gql`
  query colegios {
    collegiateBodies {
      id
      name
    }
    users {
      id
      firstName
      lastName
      colegiateBody {
        id
      }
    }
  }
`
export function useColegiosQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    ColegiosQuery,
    ColegiosQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<ColegiosQuery, ColegiosQueryVariables>(
    ColegiosDocument,
    baseOptions
  )
}
export function useColegiosLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    ColegiosQuery,
    ColegiosQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<ColegiosQuery, ColegiosQueryVariables>(
    ColegiosDocument,
    baseOptions
  )
}
export type ColegiosQueryHookResult = ReturnType<typeof useColegiosQuery>
export type ColegiosLazyQueryHookResult = ReturnType<
  typeof useColegiosLazyQuery
>
export type ColegiosQueryResult = ApolloReactCommon.QueryResult<
  ColegiosQuery,
  ColegiosQueryVariables
>
export const DeleteElectoralProcessDocument = gql`
  mutation deleteElectoralProcess(
    $id: ID!
    $poll: Boolean!
    $election: Boolean!
  ) {
    deletePoll(id: $id) @include(if: $poll)
    deleteElection(id: $id) @include(if: $election)
  }
`
export type DeleteElectoralProcessMutationFn = ApolloReactCommon.MutationFunction<
  DeleteElectoralProcessMutation,
  DeleteElectoralProcessMutationVariables
>
export function useDeleteElectoralProcessMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    DeleteElectoralProcessMutation,
    DeleteElectoralProcessMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    DeleteElectoralProcessMutation,
    DeleteElectoralProcessMutationVariables
  >(DeleteElectoralProcessDocument, baseOptions)
}
export type DeleteElectoralProcessMutationHookResult = ReturnType<
  typeof useDeleteElectoralProcessMutation
>
export type DeleteElectoralProcessMutationResult = ApolloReactCommon.MutationResult<
  DeleteElectoralProcessMutation
>
export type DeleteElectoralProcessMutationOptions = ApolloReactCommon.BaseMutationOptions<
  DeleteElectoralProcessMutation,
  DeleteElectoralProcessMutationVariables
>
export const OptionsElectionDocument = gql`
  query optionsElection($id: ID!) {
    election(id: $id) {
      start
      end
      description
      candidates {
        id
        firstName
        lastName
      }
    }
  }
`
export function useOptionsElectionQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    OptionsElectionQuery,
    OptionsElectionQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    OptionsElectionQuery,
    OptionsElectionQueryVariables
  >(OptionsElectionDocument, baseOptions)
}
export function useOptionsElectionLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    OptionsElectionQuery,
    OptionsElectionQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    OptionsElectionQuery,
    OptionsElectionQueryVariables
  >(OptionsElectionDocument, baseOptions)
}
export type OptionsElectionQueryHookResult = ReturnType<
  typeof useOptionsElectionQuery
>
export type OptionsElectionLazyQueryHookResult = ReturnType<
  typeof useOptionsElectionLazyQuery
>
export type OptionsElectionQueryResult = ApolloReactCommon.QueryResult<
  OptionsElectionQuery,
  OptionsElectionQueryVariables
>
export const MeDocument = gql`
  query me {
    me {
      id
      uid
      dni
      firstName
      lastName
      roles
      genre
      colegiateBody {
        id
        name
      }
    }
  }
`
export function useMeQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<MeQuery, MeQueryVariables>
) {
  return ApolloReactHooks.useQuery<MeQuery, MeQueryVariables>(
    MeDocument,
    baseOptions
  )
}
export function useMeLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MeQuery, MeQueryVariables>
) {
  return ApolloReactHooks.useLazyQuery<MeQuery, MeQueryVariables>(
    MeDocument,
    baseOptions
  )
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>
export type MeQueryResult = ApolloReactCommon.QueryResult<
  MeQuery,
  MeQueryVariables
>
export const LogInDocument = gql`
  mutation LogIn($input: LoginInput!) {
    login(input: $input) {
      accessToken
    }
  }
`
export type LogInMutationFn = ApolloReactCommon.MutationFunction<
  LogInMutation,
  LogInMutationVariables
>
export function useLogInMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    LogInMutation,
    LogInMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<LogInMutation, LogInMutationVariables>(
    LogInDocument,
    baseOptions
  )
}
export type LogInMutationHookResult = ReturnType<typeof useLogInMutation>
export type LogInMutationResult = ApolloReactCommon.MutationResult<
  LogInMutation
>
export type LogInMutationOptions = ApolloReactCommon.BaseMutationOptions<
  LogInMutation,
  LogInMutationVariables
>
export const ResultForElectionDocument = gql`
  query resultForElection($id: ID!) {
    election(id: $id) {
      start
      end
      description
      voteWeights {
        group
        weight
      }
      results {
        voters
        votesCast
        whiteVotes
        results {
          ...electionResults
        }
      }
      resultsByGroup: results(filter: { group: true }) {
        results {
          group
          ...electionResults
        }
      }
    }
  }
  ${ElectionResultsFragmentDoc}
`
export function useResultForElectionQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    ResultForElectionQuery,
    ResultForElectionQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    ResultForElectionQuery,
    ResultForElectionQueryVariables
  >(ResultForElectionDocument, baseOptions)
}
export function useResultForElectionLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    ResultForElectionQuery,
    ResultForElectionQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    ResultForElectionQuery,
    ResultForElectionQueryVariables
  >(ResultForElectionDocument, baseOptions)
}
export type ResultForElectionQueryHookResult = ReturnType<
  typeof useResultForElectionQuery
>
export type ResultForElectionLazyQueryHookResult = ReturnType<
  typeof useResultForElectionLazyQuery
>
export type ResultForElectionQueryResult = ApolloReactCommon.QueryResult<
  ResultForElectionQuery,
  ResultForElectionQueryVariables
>
export const ResultForPollDocument = gql`
  query resultForPoll($id: ID!) {
    poll(id: $id) {
      start
      end
      description
      results {
        voters
        votesCast
        whiteVotes
        results {
          ...pollResults
        }
      }
      resultsByGroup: results(filter: { group: true }) {
        results {
          group
          ...pollResults
        }
      }
    }
  }
  ${PollResultsFragmentDoc}
`
export function useResultForPollQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    ResultForPollQuery,
    ResultForPollQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    ResultForPollQuery,
    ResultForPollQueryVariables
  >(ResultForPollDocument, baseOptions)
}
export function useResultForPollLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    ResultForPollQuery,
    ResultForPollQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    ResultForPollQuery,
    ResultForPollQueryVariables
  >(ResultForPollDocument, baseOptions)
}
export type ResultForPollQueryHookResult = ReturnType<
  typeof useResultForPollQuery
>
export type ResultForPollLazyQueryHookResult = ReturnType<
  typeof useResultForPollLazyQuery
>
export type ResultForPollQueryResult = ApolloReactCommon.QueryResult<
  ResultForPollQuery,
  ResultForPollQueryVariables
>
export const VotePollDocument = gql`
  mutation votePoll($input: VotePollInput!) {
    voteOnPoll(input: $input)
  }
`
export type VotePollMutationFn = ApolloReactCommon.MutationFunction<
  VotePollMutation,
  VotePollMutationVariables
>
export function useVotePollMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    VotePollMutation,
    VotePollMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    VotePollMutation,
    VotePollMutationVariables
  >(VotePollDocument, baseOptions)
}
export type VotePollMutationHookResult = ReturnType<typeof useVotePollMutation>
export type VotePollMutationResult = ApolloReactCommon.MutationResult<
  VotePollMutation
>
export type VotePollMutationOptions = ApolloReactCommon.BaseMutationOptions<
  VotePollMutation,
  VotePollMutationVariables
>
export const VoteElectionDocument = gql`
  mutation voteElection($input: VoteElectionInput!) {
    voteOnElection(input: $input)
  }
`
export type VoteElectionMutationFn = ApolloReactCommon.MutationFunction<
  VoteElectionMutation,
  VoteElectionMutationVariables
>
export function useVoteElectionMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    VoteElectionMutation,
    VoteElectionMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    VoteElectionMutation,
    VoteElectionMutationVariables
  >(VoteElectionDocument, baseOptions)
}
export type VoteElectionMutationHookResult = ReturnType<
  typeof useVoteElectionMutation
>
export type VoteElectionMutationResult = ApolloReactCommon.MutationResult<
  VoteElectionMutation
>
export type VoteElectionMutationOptions = ApolloReactCommon.BaseMutationOptions<
  VoteElectionMutation,
  VoteElectionMutationVariables
>
