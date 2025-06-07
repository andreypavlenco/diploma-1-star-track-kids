import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type Boost = {
  __typename?: 'Boost';
  activations?: Maybe<Array<BoostActivation>>;
  cooldownDays: Scalars['Int']['output'];
  description?: Maybe<Scalars['String']['output']>;
  durationHours: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type BoostActivation = {
  __typename?: 'BoostActivation';
  activatedAt: Scalars['DateTime']['output'];
  boost: Boost;
  boostId: Scalars['ID']['output'];
  expiresAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  user: UserModel;
  userId: Scalars['ID']['output'];
};

export type CreateGoalInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  starReward: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};

export type CreateInvitationInput = {
  email: Scalars['String']['input'];
  role: UserRole;
};

export type CreateQuestInput = {
  deadline: Scalars['DateTime']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  difficulty: Scalars['Int']['input'];
  goalId?: InputMaybe<Scalars['ID']['input']>;
  title: Scalars['String']['input'];
};

export type CreateRewardInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  starCost: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};

export type CreateRoomInput = {
  name: Scalars['String']['input'];
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  role: UserRole;
};

export type Goal = {
  __typename?: 'Goal';
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  creator: UserModel;
  creatorId: Scalars['ID']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  quests?: Maybe<Array<Quest>>;
  starReward: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

export type Invitation = {
  __typename?: 'Invitation';
  acceptedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  expiresAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  invitedBy: UserModel;
  invitedById: Scalars['ID']['output'];
  role: UserRole;
  room: Room;
  roomId: Scalars['ID']['output'];
  token: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  acceptInvitation: Scalars['Boolean']['output'];
  activateBoost: BoostActivation;
  completeGoal: Goal;
  createGoal: Goal;
  createInvitation: Scalars['Boolean']['output'];
  createQuest: Quest;
  createReward: RewardModel;
  createRoom: Room;
  createUser: UserModel;
  deleteGoal: Scalars['Boolean']['output'];
  deleteQuest: Quest;
  deleteReward: Scalars['Boolean']['output'];
  deleteRoom: Scalars['Boolean']['output'];
  loginUser: UserModel;
  logoutUser: Scalars['Boolean']['output'];
  questCompletion: Scalars['Boolean']['output'];
  uncompleteGoal: Goal;
  updateGoal: Goal;
  updateQuest: Quest;
  updateReward: RewardModel;
  updateRoom: Room;
};


export type MutationAcceptInvitationArgs = {
  token: Scalars['String']['input'];
};


export type MutationActivateBoostArgs = {
  boostId: Scalars['String']['input'];
};


export type MutationCompleteGoalArgs = {
  goalId: Scalars['String']['input'];
};


export type MutationCreateGoalArgs = {
  data: CreateGoalInput;
};


export type MutationCreateInvitationArgs = {
  data: CreateInvitationInput;
  roomId: Scalars['String']['input'];
};


export type MutationCreateQuestArgs = {
  data: CreateQuestInput;
  roomId: Scalars['String']['input'];
};


export type MutationCreateRewardArgs = {
  data: CreateRewardInput;
};


export type MutationCreateRoomArgs = {
  data: CreateRoomInput;
};


export type MutationCreateUserArgs = {
  data: CreateUserInput;
};


export type MutationDeleteGoalArgs = {
  goalId: Scalars['String']['input'];
};


export type MutationDeleteQuestArgs = {
  questId: Scalars['String']['input'];
};


export type MutationDeleteRewardArgs = {
  rewardId: Scalars['String']['input'];
};


export type MutationDeleteRoomArgs = {
  roomId: Scalars['String']['input'];
};


export type MutationLoginUserArgs = {
  data: LoginInput;
};


export type MutationQuestCompletionArgs = {
  questId: Scalars['String']['input'];
};


export type MutationUncompleteGoalArgs = {
  goalId: Scalars['String']['input'];
};


export type MutationUpdateGoalArgs = {
  data: UpdateGoalInput;
  goalId: Scalars['String']['input'];
};


export type MutationUpdateQuestArgs = {
  data: CreateQuestInput;
  questId: Scalars['String']['input'];
};


export type MutationUpdateRewardArgs = {
  data: UpdateRewardInput;
  rewardId: Scalars['String']['input'];
};


export type MutationUpdateRoomArgs = {
  data: CreateRoomInput;
  roomId: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  createRewardPurchase: RewardPurchaseModel;
  findActiveGoals: Array<Goal>;
  findAllQuestByRoomMemberId: Array<Room>;
  findAllQuestRoom: Array<Quest>;
  findAllRoomsUser: Array<Room>;
  findByCreatorId: RewardModel;
  findByIdBoost: Boost;
  findByIdQuest: Quest;
  findCompletedGoals: Array<Goal>;
  findGoal: Array<Goal>;
  findGoalById: Goal;
  findProfile: UserModel;
  findRewardById: RewardModel;
  findRewardsForChild: Array<RewardModel>;
  findRoomById: Room;
  getActiveBoosts: BoostActivation;
  getUserActivations: Array<Boost>;
  listAllBoosts: Array<Boost>;
};


export type QueryCreateRewardPurchaseArgs = {
  rewardId: Scalars['String']['input'];
};


export type QueryFindAllQuestRoomArgs = {
  roomId: Scalars['String']['input'];
};


export type QueryFindByIdBoostArgs = {
  boostId: Scalars['String']['input'];
};


export type QueryFindByIdQuestArgs = {
  questId: Scalars['String']['input'];
  roomId: Scalars['String']['input'];
};


export type QueryFindGoalByIdArgs = {
  goalId: Scalars['String']['input'];
};


export type QueryFindRewardByIdArgs = {
  rewardId: Scalars['String']['input'];
};


export type QueryFindRoomByIdArgs = {
  roomId: Scalars['String']['input'];
};

export type Quest = {
  __typename?: 'Quest';
  completions?: Maybe<Array<QuestCompletion>>;
  creator: UserModel;
  creatorId: Scalars['ID']['output'];
  deadline: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  difficulty: Scalars['Int']['output'];
  goal?: Maybe<Goal>;
  goalId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  room?: Maybe<Room>;
  roomId?: Maybe<Scalars['ID']['output']>;
  title: Scalars['String']['output'];
};

export type QuestCompletion = {
  __typename?: 'QuestCompletion';
  completedAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  isLate: Scalars['Boolean']['output'];
  quest: Quest;
  questId: Scalars['ID']['output'];
  starsAwarded: Scalars['Int']['output'];
  user: UserModel;
  userId: Scalars['ID']['output'];
};

export type RewardModel = {
  __typename?: 'RewardModel';
  createdAt: Scalars['DateTime']['output'];
  creator: UserModel;
  creatorId: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  purchases: Array<RewardPurchaseModel>;
  starCost: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

export type RewardPurchaseModel = {
  __typename?: 'RewardPurchaseModel';
  child: Array<UserModel>;
  childId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  creator: UserModel;
  creatorId: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  purchasedAt: Scalars['DateTime']['output'];
  rewarId: Scalars['String']['output'];
  reward: Array<RewardModel>;
  starCost: Scalars['Int']['output'];
};

export type Room = {
  __typename?: 'Room';
  createUser: UserModel;
  createUserId: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  invitations: Array<Invitation>;
  members: Array<RoomMember>;
  name: Scalars['String']['output'];
  quests?: Maybe<Array<Quest>>;
};

export type RoomMember = {
  __typename?: 'RoomMember';
  id: Scalars['ID']['output'];
  joinedAt: Scalars['DateTime']['output'];
  role: UserRole;
  room: Room;
  roomId: Scalars['ID']['output'];
  user: UserModel;
  userId: Scalars['ID']['output'];
};

export type UpdateGoalInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  starReward?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateRewardInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  starCost?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UserModel = {
  __typename?: 'UserModel';
  boosts: Array<BoostActivation>;
  children: Array<Maybe<UserModel>>;
  completions: Array<QuestCompletion>;
  createdAt: Scalars['DateTime']['output'];
  createdRooms: Array<Room>;
  email: Scalars['String']['output'];
  goals: Array<Goal>;
  id: Scalars['ID']['output'];
  parents: Array<Maybe<UserModel>>;
  password: Scalars['String']['output'];
  quests: Array<Quest>;
  reward?: Maybe<Array<RewardModel>>;
  rewardsPurchase?: Maybe<Array<RewardPurchaseModel>>;
  role: UserRole;
  roomInvitations: Array<Invitation>;
  rooms?: Maybe<Array<RoomMember>>;
  stars: Scalars['Int']['output'];
  updateAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export enum UserRole {
  Child = 'CHILD',
  Parent = 'PARENT'
}

export type CreateQuestMutationVariables = Exact<{
  roomId: Scalars['String']['input'];
  data: CreateQuestInput;
}>;


export type CreateQuestMutation = { __typename?: 'Mutation', createQuest: { __typename?: 'Quest', id: string, title: string, deadline: any, difficulty: number } };

export type CreateRoomMutationVariables = Exact<{
  data: CreateRoomInput;
}>;


export type CreateRoomMutation = { __typename?: 'Mutation', createRoom: { __typename?: 'Room', name: string } };

export type CreateUserMutationVariables = Exact<{
  data: CreateUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'UserModel', id: string, email: string, role: UserRole } };

export type LoginUserMutationVariables = Exact<{
  data: LoginInput;
}>;


export type LoginUserMutation = { __typename?: 'Mutation', loginUser: { __typename?: 'UserModel', email: string, password: string } };

export type LogoutUserMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutUserMutation = { __typename?: 'Mutation', logoutUser: boolean };

export type FindAllQuestByRoomMemberIdQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllQuestByRoomMemberIdQuery = { __typename?: 'Query', findAllQuestByRoomMemberId: Array<{ __typename?: 'Room', id: string, name: string, quests?: Array<{ __typename?: 'Quest', title: string, deadline: any, difficulty: number }> | null }> };

export type FindGoalQueryVariables = Exact<{ [key: string]: never; }>;


export type FindGoalQuery = { __typename?: 'Query', findGoal: Array<{ __typename?: 'Goal', id: string, title: string, description?: string | null, starReward: number, completedAt?: any | null, creator: { __typename?: 'UserModel', id: string, email: string } }> };

export type FindProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type FindProfileQuery = { __typename?: 'Query', findProfile: { __typename?: 'UserModel', email: string, stars: number, quests: Array<{ __typename?: 'Quest', id: string, title: string, deadline: any, difficulty: number }>, createdRooms: Array<{ __typename?: 'Room', id: string, name: string }>, reward?: Array<{ __typename?: 'RewardModel', id: string, title: string, description?: string | null, starCost: number }> | null, rooms?: Array<{ __typename?: 'RoomMember', id: string, room: { __typename?: 'Room', id: string, name: string } }> | null } };

export type ListAllBoostsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListAllBoostsQuery = { __typename?: 'Query', listAllBoosts: Array<{ __typename?: 'Boost', id: string, name: string, description?: string | null, cooldownDays: number, durationHours: number }> };


export const CreateQuestDocument = gql`
    mutation CreateQuest($roomId: String!, $data: CreateQuestInput!) {
  createQuest(roomId: $roomId, data: $data) {
    id
    title
    deadline
    difficulty
  }
}
    `;
export type CreateQuestMutationFn = Apollo.MutationFunction<CreateQuestMutation, CreateQuestMutationVariables>;

/**
 * __useCreateQuestMutation__
 *
 * To run a mutation, you first call `useCreateQuestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateQuestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createQuestMutation, { data, loading, error }] = useCreateQuestMutation({
 *   variables: {
 *      roomId: // value for 'roomId'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateQuestMutation(baseOptions?: Apollo.MutationHookOptions<CreateQuestMutation, CreateQuestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateQuestMutation, CreateQuestMutationVariables>(CreateQuestDocument, options);
      }
export type CreateQuestMutationHookResult = ReturnType<typeof useCreateQuestMutation>;
export type CreateQuestMutationResult = Apollo.MutationResult<CreateQuestMutation>;
export type CreateQuestMutationOptions = Apollo.BaseMutationOptions<CreateQuestMutation, CreateQuestMutationVariables>;
export const CreateRoomDocument = gql`
    mutation CreateRoom($data: CreateRoomInput!) {
  createRoom(data: $data) {
    name
  }
}
    `;
export type CreateRoomMutationFn = Apollo.MutationFunction<CreateRoomMutation, CreateRoomMutationVariables>;

/**
 * __useCreateRoomMutation__
 *
 * To run a mutation, you first call `useCreateRoomMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRoomMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRoomMutation, { data, loading, error }] = useCreateRoomMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateRoomMutation(baseOptions?: Apollo.MutationHookOptions<CreateRoomMutation, CreateRoomMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateRoomMutation, CreateRoomMutationVariables>(CreateRoomDocument, options);
      }
export type CreateRoomMutationHookResult = ReturnType<typeof useCreateRoomMutation>;
export type CreateRoomMutationResult = Apollo.MutationResult<CreateRoomMutation>;
export type CreateRoomMutationOptions = Apollo.BaseMutationOptions<CreateRoomMutation, CreateRoomMutationVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($data: CreateUserInput!) {
  createUser(data: $data) {
    id
    email
    role
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const LoginUserDocument = gql`
    mutation LoginUser($data: LoginInput!) {
  loginUser(data: $data) {
    email
    password
  }
}
    `;
export type LoginUserMutationFn = Apollo.MutationFunction<LoginUserMutation, LoginUserMutationVariables>;

/**
 * __useLoginUserMutation__
 *
 * To run a mutation, you first call `useLoginUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginUserMutation, { data, loading, error }] = useLoginUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useLoginUserMutation(baseOptions?: Apollo.MutationHookOptions<LoginUserMutation, LoginUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument, options);
      }
export type LoginUserMutationHookResult = ReturnType<typeof useLoginUserMutation>;
export type LoginUserMutationResult = Apollo.MutationResult<LoginUserMutation>;
export type LoginUserMutationOptions = Apollo.BaseMutationOptions<LoginUserMutation, LoginUserMutationVariables>;
export const LogoutUserDocument = gql`
    mutation LogoutUser {
  logoutUser
}
    `;
export type LogoutUserMutationFn = Apollo.MutationFunction<LogoutUserMutation, LogoutUserMutationVariables>;

/**
 * __useLogoutUserMutation__
 *
 * To run a mutation, you first call `useLogoutUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutUserMutation, { data, loading, error }] = useLogoutUserMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutUserMutation(baseOptions?: Apollo.MutationHookOptions<LogoutUserMutation, LogoutUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutUserMutation, LogoutUserMutationVariables>(LogoutUserDocument, options);
      }
export type LogoutUserMutationHookResult = ReturnType<typeof useLogoutUserMutation>;
export type LogoutUserMutationResult = Apollo.MutationResult<LogoutUserMutation>;
export type LogoutUserMutationOptions = Apollo.BaseMutationOptions<LogoutUserMutation, LogoutUserMutationVariables>;
export const FindAllQuestByRoomMemberIdDocument = gql`
    query findAllQuestByRoomMemberId {
  findAllQuestByRoomMemberId {
    id
    name
    quests {
      title
      deadline
      difficulty
    }
  }
}
    `;

/**
 * __useFindAllQuestByRoomMemberIdQuery__
 *
 * To run a query within a React component, call `useFindAllQuestByRoomMemberIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllQuestByRoomMemberIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllQuestByRoomMemberIdQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindAllQuestByRoomMemberIdQuery(baseOptions?: Apollo.QueryHookOptions<FindAllQuestByRoomMemberIdQuery, FindAllQuestByRoomMemberIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindAllQuestByRoomMemberIdQuery, FindAllQuestByRoomMemberIdQueryVariables>(FindAllQuestByRoomMemberIdDocument, options);
      }
export function useFindAllQuestByRoomMemberIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAllQuestByRoomMemberIdQuery, FindAllQuestByRoomMemberIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindAllQuestByRoomMemberIdQuery, FindAllQuestByRoomMemberIdQueryVariables>(FindAllQuestByRoomMemberIdDocument, options);
        }
export function useFindAllQuestByRoomMemberIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindAllQuestByRoomMemberIdQuery, FindAllQuestByRoomMemberIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindAllQuestByRoomMemberIdQuery, FindAllQuestByRoomMemberIdQueryVariables>(FindAllQuestByRoomMemberIdDocument, options);
        }
export type FindAllQuestByRoomMemberIdQueryHookResult = ReturnType<typeof useFindAllQuestByRoomMemberIdQuery>;
export type FindAllQuestByRoomMemberIdLazyQueryHookResult = ReturnType<typeof useFindAllQuestByRoomMemberIdLazyQuery>;
export type FindAllQuestByRoomMemberIdSuspenseQueryHookResult = ReturnType<typeof useFindAllQuestByRoomMemberIdSuspenseQuery>;
export type FindAllQuestByRoomMemberIdQueryResult = Apollo.QueryResult<FindAllQuestByRoomMemberIdQuery, FindAllQuestByRoomMemberIdQueryVariables>;
export const FindGoalDocument = gql`
    query FindGoal {
  findGoal {
    id
    title
    description
    starReward
    completedAt
    creator {
      id
      email
    }
  }
}
    `;

/**
 * __useFindGoalQuery__
 *
 * To run a query within a React component, call `useFindGoalQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindGoalQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindGoalQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindGoalQuery(baseOptions?: Apollo.QueryHookOptions<FindGoalQuery, FindGoalQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindGoalQuery, FindGoalQueryVariables>(FindGoalDocument, options);
      }
export function useFindGoalLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindGoalQuery, FindGoalQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindGoalQuery, FindGoalQueryVariables>(FindGoalDocument, options);
        }
export function useFindGoalSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindGoalQuery, FindGoalQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindGoalQuery, FindGoalQueryVariables>(FindGoalDocument, options);
        }
export type FindGoalQueryHookResult = ReturnType<typeof useFindGoalQuery>;
export type FindGoalLazyQueryHookResult = ReturnType<typeof useFindGoalLazyQuery>;
export type FindGoalSuspenseQueryHookResult = ReturnType<typeof useFindGoalSuspenseQuery>;
export type FindGoalQueryResult = Apollo.QueryResult<FindGoalQuery, FindGoalQueryVariables>;
export const FindProfileDocument = gql`
    query findProfile {
  findProfile {
    email
    stars
    quests {
      id
      title
      deadline
      difficulty
    }
    createdRooms {
      id
      name
    }
    reward {
      id
      title
      description
      starCost
    }
    rooms {
      id
      room {
        id
        name
      }
    }
  }
}
    `;

/**
 * __useFindProfileQuery__
 *
 * To run a query within a React component, call `useFindProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindProfileQuery(baseOptions?: Apollo.QueryHookOptions<FindProfileQuery, FindProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindProfileQuery, FindProfileQueryVariables>(FindProfileDocument, options);
      }
export function useFindProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindProfileQuery, FindProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindProfileQuery, FindProfileQueryVariables>(FindProfileDocument, options);
        }
export function useFindProfileSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindProfileQuery, FindProfileQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindProfileQuery, FindProfileQueryVariables>(FindProfileDocument, options);
        }
export type FindProfileQueryHookResult = ReturnType<typeof useFindProfileQuery>;
export type FindProfileLazyQueryHookResult = ReturnType<typeof useFindProfileLazyQuery>;
export type FindProfileSuspenseQueryHookResult = ReturnType<typeof useFindProfileSuspenseQuery>;
export type FindProfileQueryResult = Apollo.QueryResult<FindProfileQuery, FindProfileQueryVariables>;
export const ListAllBoostsDocument = gql`
    query ListAllBoosts {
  listAllBoosts {
    id
    name
    description
    cooldownDays
    durationHours
  }
}
    `;

/**
 * __useListAllBoostsQuery__
 *
 * To run a query within a React component, call `useListAllBoostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListAllBoostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListAllBoostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useListAllBoostsQuery(baseOptions?: Apollo.QueryHookOptions<ListAllBoostsQuery, ListAllBoostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListAllBoostsQuery, ListAllBoostsQueryVariables>(ListAllBoostsDocument, options);
      }
export function useListAllBoostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListAllBoostsQuery, ListAllBoostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListAllBoostsQuery, ListAllBoostsQueryVariables>(ListAllBoostsDocument, options);
        }
export function useListAllBoostsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ListAllBoostsQuery, ListAllBoostsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ListAllBoostsQuery, ListAllBoostsQueryVariables>(ListAllBoostsDocument, options);
        }
export type ListAllBoostsQueryHookResult = ReturnType<typeof useListAllBoostsQuery>;
export type ListAllBoostsLazyQueryHookResult = ReturnType<typeof useListAllBoostsLazyQuery>;
export type ListAllBoostsSuspenseQueryHookResult = ReturnType<typeof useListAllBoostsSuspenseQuery>;
export type ListAllBoostsQueryResult = Apollo.QueryResult<ListAllBoostsQuery, ListAllBoostsQueryVariables>;