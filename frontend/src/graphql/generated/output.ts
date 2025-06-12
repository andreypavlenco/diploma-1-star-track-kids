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
  createRewardPurchase: Scalars['Boolean']['output'];
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


export type MutationCreateRewardPurchaseArgs = {
  rewardId: Scalars['String']['input'];
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
  findRewardsForUser: Array<RewardModel>;
  findRoomById: Room;
  getActiveBoosts: Array<BoostActivation>;
  getUserActivations: Array<Boost>;
  listAllBoosts: Array<Boost>;
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

export type ActivateBoostMutationVariables = Exact<{
  boostId: Scalars['String']['input'];
}>;


export type ActivateBoostMutation = { __typename?: 'Mutation', activateBoost: { __typename?: 'BoostActivation', id: string, activatedAt: any, expiresAt: any, boostId: string, userId: string, boost: { __typename?: 'Boost', id: string, name: string, description?: string | null, cooldownDays: number, durationHours: number }, user: { __typename?: 'UserModel', id: string, email: string } } };

export type CompleteGoalMutationVariables = Exact<{
  goalId: Scalars['String']['input'];
}>;


export type CompleteGoalMutation = { __typename?: 'Mutation', completeGoal: { __typename?: 'Goal', id: string, title: string, description?: string | null, starReward: number, completedAt?: any | null, creator: { __typename?: 'UserModel', id: string, email: string }, quests?: Array<{ __typename?: 'Quest', id: string, title: string }> | null } };

export type CreateGoalMutationVariables = Exact<{
  data: CreateGoalInput;
}>;


export type CreateGoalMutation = { __typename?: 'Mutation', createGoal: { __typename?: 'Goal', id: string, title: string, description?: string | null } };

export type DeleteGoalMutationVariables = Exact<{
  goalId: Scalars['String']['input'];
}>;


export type DeleteGoalMutation = { __typename?: 'Mutation', deleteGoal: boolean };

export type UncompleteGoalMutationVariables = Exact<{
  goalId: Scalars['String']['input'];
}>;


export type UncompleteGoalMutation = { __typename?: 'Mutation', uncompleteGoal: { __typename?: 'Goal', id: string, title: string, completedAt?: any | null } };

export type UpdateGoalMutationVariables = Exact<{
  goalId: Scalars['String']['input'];
  data: UpdateGoalInput;
}>;


export type UpdateGoalMutation = { __typename?: 'Mutation', updateGoal: { __typename?: 'Goal', id: string, title: string, description?: string | null, completedAt?: any | null } };

export type AcceptInvitationMutationVariables = Exact<{
  token: Scalars['String']['input'];
}>;


export type AcceptInvitationMutation = { __typename?: 'Mutation', acceptInvitation: boolean };

export type CreateInvitationMutationVariables = Exact<{
  data: CreateInvitationInput;
  roomId: Scalars['String']['input'];
}>;


export type CreateInvitationMutation = { __typename?: 'Mutation', createInvitation: boolean };

export type CompleteQuestMutationVariables = Exact<{
  questId: Scalars['String']['input'];
}>;


export type CompleteQuestMutation = { __typename?: 'Mutation', questCompletion: boolean };

export type CreateQuestMutationVariables = Exact<{
  roomId: Scalars['String']['input'];
  data: CreateQuestInput;
}>;


export type CreateQuestMutation = { __typename?: 'Mutation', createQuest: { __typename?: 'Quest', id: string, title: string, deadline: any, difficulty: number } };

export type DeleteQuestMutationVariables = Exact<{
  questId: Scalars['String']['input'];
}>;


export type DeleteQuestMutation = { __typename?: 'Mutation', deleteQuest: { __typename?: 'Quest', id: string, title: string, description?: string | null } };

export type UpdateQuestMutationVariables = Exact<{
  questId: Scalars['String']['input'];
  data: CreateQuestInput;
}>;


export type UpdateQuestMutation = { __typename?: 'Mutation', updateQuest: { __typename?: 'Quest', id: string, title: string, description?: string | null, deadline: any, difficulty: number } };

export type CreateRewardMutationVariables = Exact<{
  data: CreateRewardInput;
}>;


export type CreateRewardMutation = { __typename?: 'Mutation', createReward: { __typename?: 'RewardModel', id: string, title: string, description?: string | null, starCost: number, creator: { __typename?: 'UserModel', id: string, email: string } } };

export type CreateRewardPurchaseMutationVariables = Exact<{
  rewardId: Scalars['String']['input'];
}>;


export type CreateRewardPurchaseMutation = { __typename?: 'Mutation', createRewardPurchase: boolean };

export type DeleteRewardMutationVariables = Exact<{
  rewardId: Scalars['String']['input'];
}>;


export type DeleteRewardMutation = { __typename?: 'Mutation', deleteReward: boolean };

export type UpdateRewardMutationVariables = Exact<{
  rewardId: Scalars['String']['input'];
  data: UpdateRewardInput;
}>;


export type UpdateRewardMutation = { __typename?: 'Mutation', updateReward: { __typename?: 'RewardModel', id: string, title: string, description?: string | null, starCost: number, creator: { __typename?: 'UserModel', id: string, email: string } } };

export type CreateRoomMutationVariables = Exact<{
  data: CreateRoomInput;
}>;


export type CreateRoomMutation = { __typename?: 'Mutation', createRoom: { __typename?: 'Room', name: string } };

export type DeleteRoomMutationVariables = Exact<{
  roomId: Scalars['String']['input'];
}>;


export type DeleteRoomMutation = { __typename?: 'Mutation', deleteRoom: boolean };

export type UpdateRoomMutationVariables = Exact<{
  roomId: Scalars['String']['input'];
  data: CreateRoomInput;
}>;


export type UpdateRoomMutation = { __typename?: 'Mutation', updateRoom: { __typename?: 'Room', id: string, name: string } };

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

export type GetActiveBoostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetActiveBoostsQuery = { __typename?: 'Query', getActiveBoosts: Array<{ __typename?: 'BoostActivation', id: string, activatedAt: any, expiresAt: any, boost: { __typename?: 'Boost', id: string, name: string } }> };

export type ListAllBoostsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListAllBoostsQuery = { __typename?: 'Query', listAllBoosts: Array<{ __typename?: 'Boost', id: string, name: string, description?: string | null, cooldownDays: number, durationHours: number }> };

export type FindGoalQueryVariables = Exact<{ [key: string]: never; }>;


export type FindGoalQuery = { __typename?: 'Query', findGoal: Array<{ __typename?: 'Goal', id: string, title: string, description?: string | null, starReward: number, completedAt?: any | null, creator: { __typename?: 'UserModel', id: string, email: string } }> };

export type FindRewardsForUserQueryVariables = Exact<{ [key: string]: never; }>;


export type FindRewardsForUserQuery = { __typename?: 'Query', findRewardsForUser: Array<{ __typename?: 'RewardModel', id: string, title: string, description?: string | null, starCost: number, creator: { __typename?: 'UserModel', id: string, email: string } }> };

export type FindAllQuestByRoomMemberIdQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllQuestByRoomMemberIdQuery = { __typename?: 'Query', findAllQuestByRoomMemberId: Array<{ __typename?: 'Room', id: string, name: string, createUser: { __typename?: 'UserModel', id: string, email: string }, quests?: Array<{ __typename?: 'Quest', id: string, title: string, description?: string | null, deadline: any, difficulty: number, completions?: Array<{ __typename?: 'QuestCompletion', userId: string }> | null }> | null }> };

export type FindRoomByIdQueryVariables = Exact<{
  roomId: Scalars['String']['input'];
}>;


export type FindRoomByIdQuery = { __typename?: 'Query', findRoomById: { __typename?: 'Room', id: string, name: string, quests?: Array<{ __typename?: 'Quest', id: string, title: string, description?: string | null, deadline: any, difficulty: number }> | null } };

export type FindProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type FindProfileQuery = { __typename?: 'Query', findProfile: { __typename?: 'UserModel', id: string, email: string, stars: number, quests: Array<{ __typename?: 'Quest', id: string, title: string, description?: string | null, deadline: any, difficulty: number }>, createdRooms: Array<{ __typename?: 'Room', id: string, name: string }>, reward?: Array<{ __typename?: 'RewardModel', id: string, title: string, starCost: number }> | null, rooms?: Array<{ __typename?: 'RoomMember', id: string, room: { __typename?: 'Room', id: string, name: string, members: Array<{ __typename?: 'RoomMember', id: string, userId: string, role: UserRole, joinedAt: any }> } }> | null } };


export const ActivateBoostDocument = gql`
    mutation ActivateBoost($boostId: String!) {
  activateBoost(boostId: $boostId) {
    id
    activatedAt
    expiresAt
    boost {
      id
      name
      description
      cooldownDays
      durationHours
    }
    boostId
    user {
      id
      email
    }
    userId
  }
}
    `;
export type ActivateBoostMutationFn = Apollo.MutationFunction<ActivateBoostMutation, ActivateBoostMutationVariables>;

/**
 * __useActivateBoostMutation__
 *
 * To run a mutation, you first call `useActivateBoostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useActivateBoostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [activateBoostMutation, { data, loading, error }] = useActivateBoostMutation({
 *   variables: {
 *      boostId: // value for 'boostId'
 *   },
 * });
 */
export function useActivateBoostMutation(baseOptions?: Apollo.MutationHookOptions<ActivateBoostMutation, ActivateBoostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ActivateBoostMutation, ActivateBoostMutationVariables>(ActivateBoostDocument, options);
      }
export type ActivateBoostMutationHookResult = ReturnType<typeof useActivateBoostMutation>;
export type ActivateBoostMutationResult = Apollo.MutationResult<ActivateBoostMutation>;
export type ActivateBoostMutationOptions = Apollo.BaseMutationOptions<ActivateBoostMutation, ActivateBoostMutationVariables>;
export const CompleteGoalDocument = gql`
    mutation CompleteGoal($goalId: String!) {
  completeGoal(goalId: $goalId) {
    id
    title
    description
    starReward
    completedAt
    creator {
      id
      email
    }
    quests {
      id
      title
    }
  }
}
    `;
export type CompleteGoalMutationFn = Apollo.MutationFunction<CompleteGoalMutation, CompleteGoalMutationVariables>;

/**
 * __useCompleteGoalMutation__
 *
 * To run a mutation, you first call `useCompleteGoalMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCompleteGoalMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [completeGoalMutation, { data, loading, error }] = useCompleteGoalMutation({
 *   variables: {
 *      goalId: // value for 'goalId'
 *   },
 * });
 */
export function useCompleteGoalMutation(baseOptions?: Apollo.MutationHookOptions<CompleteGoalMutation, CompleteGoalMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CompleteGoalMutation, CompleteGoalMutationVariables>(CompleteGoalDocument, options);
      }
export type CompleteGoalMutationHookResult = ReturnType<typeof useCompleteGoalMutation>;
export type CompleteGoalMutationResult = Apollo.MutationResult<CompleteGoalMutation>;
export type CompleteGoalMutationOptions = Apollo.BaseMutationOptions<CompleteGoalMutation, CompleteGoalMutationVariables>;
export const CreateGoalDocument = gql`
    mutation CreateGoal($data: CreateGoalInput!) {
  createGoal(data: $data) {
    id
    title
    description
  }
}
    `;
export type CreateGoalMutationFn = Apollo.MutationFunction<CreateGoalMutation, CreateGoalMutationVariables>;

/**
 * __useCreateGoalMutation__
 *
 * To run a mutation, you first call `useCreateGoalMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateGoalMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createGoalMutation, { data, loading, error }] = useCreateGoalMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateGoalMutation(baseOptions?: Apollo.MutationHookOptions<CreateGoalMutation, CreateGoalMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateGoalMutation, CreateGoalMutationVariables>(CreateGoalDocument, options);
      }
export type CreateGoalMutationHookResult = ReturnType<typeof useCreateGoalMutation>;
export type CreateGoalMutationResult = Apollo.MutationResult<CreateGoalMutation>;
export type CreateGoalMutationOptions = Apollo.BaseMutationOptions<CreateGoalMutation, CreateGoalMutationVariables>;
export const DeleteGoalDocument = gql`
    mutation DeleteGoal($goalId: String!) {
  deleteGoal(goalId: $goalId)
}
    `;
export type DeleteGoalMutationFn = Apollo.MutationFunction<DeleteGoalMutation, DeleteGoalMutationVariables>;

/**
 * __useDeleteGoalMutation__
 *
 * To run a mutation, you first call `useDeleteGoalMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteGoalMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteGoalMutation, { data, loading, error }] = useDeleteGoalMutation({
 *   variables: {
 *      goalId: // value for 'goalId'
 *   },
 * });
 */
export function useDeleteGoalMutation(baseOptions?: Apollo.MutationHookOptions<DeleteGoalMutation, DeleteGoalMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteGoalMutation, DeleteGoalMutationVariables>(DeleteGoalDocument, options);
      }
export type DeleteGoalMutationHookResult = ReturnType<typeof useDeleteGoalMutation>;
export type DeleteGoalMutationResult = Apollo.MutationResult<DeleteGoalMutation>;
export type DeleteGoalMutationOptions = Apollo.BaseMutationOptions<DeleteGoalMutation, DeleteGoalMutationVariables>;
export const UncompleteGoalDocument = gql`
    mutation UncompleteGoal($goalId: String!) {
  uncompleteGoal(goalId: $goalId) {
    id
    title
    completedAt
  }
}
    `;
export type UncompleteGoalMutationFn = Apollo.MutationFunction<UncompleteGoalMutation, UncompleteGoalMutationVariables>;

/**
 * __useUncompleteGoalMutation__
 *
 * To run a mutation, you first call `useUncompleteGoalMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUncompleteGoalMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uncompleteGoalMutation, { data, loading, error }] = useUncompleteGoalMutation({
 *   variables: {
 *      goalId: // value for 'goalId'
 *   },
 * });
 */
export function useUncompleteGoalMutation(baseOptions?: Apollo.MutationHookOptions<UncompleteGoalMutation, UncompleteGoalMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UncompleteGoalMutation, UncompleteGoalMutationVariables>(UncompleteGoalDocument, options);
      }
export type UncompleteGoalMutationHookResult = ReturnType<typeof useUncompleteGoalMutation>;
export type UncompleteGoalMutationResult = Apollo.MutationResult<UncompleteGoalMutation>;
export type UncompleteGoalMutationOptions = Apollo.BaseMutationOptions<UncompleteGoalMutation, UncompleteGoalMutationVariables>;
export const UpdateGoalDocument = gql`
    mutation UpdateGoal($goalId: String!, $data: UpdateGoalInput!) {
  updateGoal(goalId: $goalId, data: $data) {
    id
    title
    description
    completedAt
  }
}
    `;
export type UpdateGoalMutationFn = Apollo.MutationFunction<UpdateGoalMutation, UpdateGoalMutationVariables>;

/**
 * __useUpdateGoalMutation__
 *
 * To run a mutation, you first call `useUpdateGoalMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateGoalMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateGoalMutation, { data, loading, error }] = useUpdateGoalMutation({
 *   variables: {
 *      goalId: // value for 'goalId'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateGoalMutation(baseOptions?: Apollo.MutationHookOptions<UpdateGoalMutation, UpdateGoalMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateGoalMutation, UpdateGoalMutationVariables>(UpdateGoalDocument, options);
      }
export type UpdateGoalMutationHookResult = ReturnType<typeof useUpdateGoalMutation>;
export type UpdateGoalMutationResult = Apollo.MutationResult<UpdateGoalMutation>;
export type UpdateGoalMutationOptions = Apollo.BaseMutationOptions<UpdateGoalMutation, UpdateGoalMutationVariables>;
export const AcceptInvitationDocument = gql`
    mutation AcceptInvitation($token: String!) {
  acceptInvitation(token: $token)
}
    `;
export type AcceptInvitationMutationFn = Apollo.MutationFunction<AcceptInvitationMutation, AcceptInvitationMutationVariables>;

/**
 * __useAcceptInvitationMutation__
 *
 * To run a mutation, you first call `useAcceptInvitationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAcceptInvitationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [acceptInvitationMutation, { data, loading, error }] = useAcceptInvitationMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useAcceptInvitationMutation(baseOptions?: Apollo.MutationHookOptions<AcceptInvitationMutation, AcceptInvitationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AcceptInvitationMutation, AcceptInvitationMutationVariables>(AcceptInvitationDocument, options);
      }
export type AcceptInvitationMutationHookResult = ReturnType<typeof useAcceptInvitationMutation>;
export type AcceptInvitationMutationResult = Apollo.MutationResult<AcceptInvitationMutation>;
export type AcceptInvitationMutationOptions = Apollo.BaseMutationOptions<AcceptInvitationMutation, AcceptInvitationMutationVariables>;
export const CreateInvitationDocument = gql`
    mutation CreateInvitation($data: CreateInvitationInput!, $roomId: String!) {
  createInvitation(data: $data, roomId: $roomId)
}
    `;
export type CreateInvitationMutationFn = Apollo.MutationFunction<CreateInvitationMutation, CreateInvitationMutationVariables>;

/**
 * __useCreateInvitationMutation__
 *
 * To run a mutation, you first call `useCreateInvitationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateInvitationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createInvitationMutation, { data, loading, error }] = useCreateInvitationMutation({
 *   variables: {
 *      data: // value for 'data'
 *      roomId: // value for 'roomId'
 *   },
 * });
 */
export function useCreateInvitationMutation(baseOptions?: Apollo.MutationHookOptions<CreateInvitationMutation, CreateInvitationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateInvitationMutation, CreateInvitationMutationVariables>(CreateInvitationDocument, options);
      }
export type CreateInvitationMutationHookResult = ReturnType<typeof useCreateInvitationMutation>;
export type CreateInvitationMutationResult = Apollo.MutationResult<CreateInvitationMutation>;
export type CreateInvitationMutationOptions = Apollo.BaseMutationOptions<CreateInvitationMutation, CreateInvitationMutationVariables>;
export const CompleteQuestDocument = gql`
    mutation CompleteQuest($questId: String!) {
  questCompletion(questId: $questId)
}
    `;
export type CompleteQuestMutationFn = Apollo.MutationFunction<CompleteQuestMutation, CompleteQuestMutationVariables>;

/**
 * __useCompleteQuestMutation__
 *
 * To run a mutation, you first call `useCompleteQuestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCompleteQuestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [completeQuestMutation, { data, loading, error }] = useCompleteQuestMutation({
 *   variables: {
 *      questId: // value for 'questId'
 *   },
 * });
 */
export function useCompleteQuestMutation(baseOptions?: Apollo.MutationHookOptions<CompleteQuestMutation, CompleteQuestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CompleteQuestMutation, CompleteQuestMutationVariables>(CompleteQuestDocument, options);
      }
export type CompleteQuestMutationHookResult = ReturnType<typeof useCompleteQuestMutation>;
export type CompleteQuestMutationResult = Apollo.MutationResult<CompleteQuestMutation>;
export type CompleteQuestMutationOptions = Apollo.BaseMutationOptions<CompleteQuestMutation, CompleteQuestMutationVariables>;
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
export const DeleteQuestDocument = gql`
    mutation DeleteQuest($questId: String!) {
  deleteQuest(questId: $questId) {
    id
    title
    description
  }
}
    `;
export type DeleteQuestMutationFn = Apollo.MutationFunction<DeleteQuestMutation, DeleteQuestMutationVariables>;

/**
 * __useDeleteQuestMutation__
 *
 * To run a mutation, you first call `useDeleteQuestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteQuestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteQuestMutation, { data, loading, error }] = useDeleteQuestMutation({
 *   variables: {
 *      questId: // value for 'questId'
 *   },
 * });
 */
export function useDeleteQuestMutation(baseOptions?: Apollo.MutationHookOptions<DeleteQuestMutation, DeleteQuestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteQuestMutation, DeleteQuestMutationVariables>(DeleteQuestDocument, options);
      }
export type DeleteQuestMutationHookResult = ReturnType<typeof useDeleteQuestMutation>;
export type DeleteQuestMutationResult = Apollo.MutationResult<DeleteQuestMutation>;
export type DeleteQuestMutationOptions = Apollo.BaseMutationOptions<DeleteQuestMutation, DeleteQuestMutationVariables>;
export const UpdateQuestDocument = gql`
    mutation UpdateQuest($questId: String!, $data: CreateQuestInput!) {
  updateQuest(questId: $questId, data: $data) {
    id
    title
    description
    deadline
    difficulty
  }
}
    `;
export type UpdateQuestMutationFn = Apollo.MutationFunction<UpdateQuestMutation, UpdateQuestMutationVariables>;

/**
 * __useUpdateQuestMutation__
 *
 * To run a mutation, you first call `useUpdateQuestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateQuestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateQuestMutation, { data, loading, error }] = useUpdateQuestMutation({
 *   variables: {
 *      questId: // value for 'questId'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateQuestMutation(baseOptions?: Apollo.MutationHookOptions<UpdateQuestMutation, UpdateQuestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateQuestMutation, UpdateQuestMutationVariables>(UpdateQuestDocument, options);
      }
export type UpdateQuestMutationHookResult = ReturnType<typeof useUpdateQuestMutation>;
export type UpdateQuestMutationResult = Apollo.MutationResult<UpdateQuestMutation>;
export type UpdateQuestMutationOptions = Apollo.BaseMutationOptions<UpdateQuestMutation, UpdateQuestMutationVariables>;
export const CreateRewardDocument = gql`
    mutation CreateReward($data: CreateRewardInput!) {
  createReward(data: $data) {
    id
    title
    description
    starCost
    creator {
      id
      email
    }
  }
}
    `;
export type CreateRewardMutationFn = Apollo.MutationFunction<CreateRewardMutation, CreateRewardMutationVariables>;

/**
 * __useCreateRewardMutation__
 *
 * To run a mutation, you first call `useCreateRewardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRewardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRewardMutation, { data, loading, error }] = useCreateRewardMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateRewardMutation(baseOptions?: Apollo.MutationHookOptions<CreateRewardMutation, CreateRewardMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateRewardMutation, CreateRewardMutationVariables>(CreateRewardDocument, options);
      }
export type CreateRewardMutationHookResult = ReturnType<typeof useCreateRewardMutation>;
export type CreateRewardMutationResult = Apollo.MutationResult<CreateRewardMutation>;
export type CreateRewardMutationOptions = Apollo.BaseMutationOptions<CreateRewardMutation, CreateRewardMutationVariables>;
export const CreateRewardPurchaseDocument = gql`
    mutation CreateRewardPurchase($rewardId: String!) {
  createRewardPurchase(rewardId: $rewardId)
}
    `;
export type CreateRewardPurchaseMutationFn = Apollo.MutationFunction<CreateRewardPurchaseMutation, CreateRewardPurchaseMutationVariables>;

/**
 * __useCreateRewardPurchaseMutation__
 *
 * To run a mutation, you first call `useCreateRewardPurchaseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRewardPurchaseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRewardPurchaseMutation, { data, loading, error }] = useCreateRewardPurchaseMutation({
 *   variables: {
 *      rewardId: // value for 'rewardId'
 *   },
 * });
 */
export function useCreateRewardPurchaseMutation(baseOptions?: Apollo.MutationHookOptions<CreateRewardPurchaseMutation, CreateRewardPurchaseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateRewardPurchaseMutation, CreateRewardPurchaseMutationVariables>(CreateRewardPurchaseDocument, options);
      }
export type CreateRewardPurchaseMutationHookResult = ReturnType<typeof useCreateRewardPurchaseMutation>;
export type CreateRewardPurchaseMutationResult = Apollo.MutationResult<CreateRewardPurchaseMutation>;
export type CreateRewardPurchaseMutationOptions = Apollo.BaseMutationOptions<CreateRewardPurchaseMutation, CreateRewardPurchaseMutationVariables>;
export const DeleteRewardDocument = gql`
    mutation DeleteReward($rewardId: String!) {
  deleteReward(rewardId: $rewardId)
}
    `;
export type DeleteRewardMutationFn = Apollo.MutationFunction<DeleteRewardMutation, DeleteRewardMutationVariables>;

/**
 * __useDeleteRewardMutation__
 *
 * To run a mutation, you first call `useDeleteRewardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteRewardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteRewardMutation, { data, loading, error }] = useDeleteRewardMutation({
 *   variables: {
 *      rewardId: // value for 'rewardId'
 *   },
 * });
 */
export function useDeleteRewardMutation(baseOptions?: Apollo.MutationHookOptions<DeleteRewardMutation, DeleteRewardMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteRewardMutation, DeleteRewardMutationVariables>(DeleteRewardDocument, options);
      }
export type DeleteRewardMutationHookResult = ReturnType<typeof useDeleteRewardMutation>;
export type DeleteRewardMutationResult = Apollo.MutationResult<DeleteRewardMutation>;
export type DeleteRewardMutationOptions = Apollo.BaseMutationOptions<DeleteRewardMutation, DeleteRewardMutationVariables>;
export const UpdateRewardDocument = gql`
    mutation UpdateReward($rewardId: String!, $data: UpdateRewardInput!) {
  updateReward(rewardId: $rewardId, data: $data) {
    id
    title
    description
    starCost
    creator {
      id
      email
    }
  }
}
    `;
export type UpdateRewardMutationFn = Apollo.MutationFunction<UpdateRewardMutation, UpdateRewardMutationVariables>;

/**
 * __useUpdateRewardMutation__
 *
 * To run a mutation, you first call `useUpdateRewardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRewardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateRewardMutation, { data, loading, error }] = useUpdateRewardMutation({
 *   variables: {
 *      rewardId: // value for 'rewardId'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateRewardMutation(baseOptions?: Apollo.MutationHookOptions<UpdateRewardMutation, UpdateRewardMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateRewardMutation, UpdateRewardMutationVariables>(UpdateRewardDocument, options);
      }
export type UpdateRewardMutationHookResult = ReturnType<typeof useUpdateRewardMutation>;
export type UpdateRewardMutationResult = Apollo.MutationResult<UpdateRewardMutation>;
export type UpdateRewardMutationOptions = Apollo.BaseMutationOptions<UpdateRewardMutation, UpdateRewardMutationVariables>;
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
export const DeleteRoomDocument = gql`
    mutation DeleteRoom($roomId: String!) {
  deleteRoom(roomId: $roomId)
}
    `;
export type DeleteRoomMutationFn = Apollo.MutationFunction<DeleteRoomMutation, DeleteRoomMutationVariables>;

/**
 * __useDeleteRoomMutation__
 *
 * To run a mutation, you first call `useDeleteRoomMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteRoomMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteRoomMutation, { data, loading, error }] = useDeleteRoomMutation({
 *   variables: {
 *      roomId: // value for 'roomId'
 *   },
 * });
 */
export function useDeleteRoomMutation(baseOptions?: Apollo.MutationHookOptions<DeleteRoomMutation, DeleteRoomMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteRoomMutation, DeleteRoomMutationVariables>(DeleteRoomDocument, options);
      }
export type DeleteRoomMutationHookResult = ReturnType<typeof useDeleteRoomMutation>;
export type DeleteRoomMutationResult = Apollo.MutationResult<DeleteRoomMutation>;
export type DeleteRoomMutationOptions = Apollo.BaseMutationOptions<DeleteRoomMutation, DeleteRoomMutationVariables>;
export const UpdateRoomDocument = gql`
    mutation UpdateRoom($roomId: String!, $data: CreateRoomInput!) {
  updateRoom(roomId: $roomId, data: $data) {
    id
    name
  }
}
    `;
export type UpdateRoomMutationFn = Apollo.MutationFunction<UpdateRoomMutation, UpdateRoomMutationVariables>;

/**
 * __useUpdateRoomMutation__
 *
 * To run a mutation, you first call `useUpdateRoomMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRoomMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateRoomMutation, { data, loading, error }] = useUpdateRoomMutation({
 *   variables: {
 *      roomId: // value for 'roomId'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateRoomMutation(baseOptions?: Apollo.MutationHookOptions<UpdateRoomMutation, UpdateRoomMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateRoomMutation, UpdateRoomMutationVariables>(UpdateRoomDocument, options);
      }
export type UpdateRoomMutationHookResult = ReturnType<typeof useUpdateRoomMutation>;
export type UpdateRoomMutationResult = Apollo.MutationResult<UpdateRoomMutation>;
export type UpdateRoomMutationOptions = Apollo.BaseMutationOptions<UpdateRoomMutation, UpdateRoomMutationVariables>;
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
export const GetActiveBoostsDocument = gql`
    query GetActiveBoosts {
  getActiveBoosts {
    id
    activatedAt
    expiresAt
    boost {
      id
      name
    }
  }
}
    `;

/**
 * __useGetActiveBoostsQuery__
 *
 * To run a query within a React component, call `useGetActiveBoostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetActiveBoostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetActiveBoostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetActiveBoostsQuery(baseOptions?: Apollo.QueryHookOptions<GetActiveBoostsQuery, GetActiveBoostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetActiveBoostsQuery, GetActiveBoostsQueryVariables>(GetActiveBoostsDocument, options);
      }
export function useGetActiveBoostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetActiveBoostsQuery, GetActiveBoostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetActiveBoostsQuery, GetActiveBoostsQueryVariables>(GetActiveBoostsDocument, options);
        }
export function useGetActiveBoostsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetActiveBoostsQuery, GetActiveBoostsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetActiveBoostsQuery, GetActiveBoostsQueryVariables>(GetActiveBoostsDocument, options);
        }
export type GetActiveBoostsQueryHookResult = ReturnType<typeof useGetActiveBoostsQuery>;
export type GetActiveBoostsLazyQueryHookResult = ReturnType<typeof useGetActiveBoostsLazyQuery>;
export type GetActiveBoostsSuspenseQueryHookResult = ReturnType<typeof useGetActiveBoostsSuspenseQuery>;
export type GetActiveBoostsQueryResult = Apollo.QueryResult<GetActiveBoostsQuery, GetActiveBoostsQueryVariables>;
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
export const FindRewardsForUserDocument = gql`
    query FindRewardsForUser {
  findRewardsForUser {
    id
    title
    description
    starCost
    creator {
      id
      email
    }
  }
}
    `;

/**
 * __useFindRewardsForUserQuery__
 *
 * To run a query within a React component, call `useFindRewardsForUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindRewardsForUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindRewardsForUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindRewardsForUserQuery(baseOptions?: Apollo.QueryHookOptions<FindRewardsForUserQuery, FindRewardsForUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindRewardsForUserQuery, FindRewardsForUserQueryVariables>(FindRewardsForUserDocument, options);
      }
export function useFindRewardsForUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindRewardsForUserQuery, FindRewardsForUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindRewardsForUserQuery, FindRewardsForUserQueryVariables>(FindRewardsForUserDocument, options);
        }
export function useFindRewardsForUserSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindRewardsForUserQuery, FindRewardsForUserQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindRewardsForUserQuery, FindRewardsForUserQueryVariables>(FindRewardsForUserDocument, options);
        }
export type FindRewardsForUserQueryHookResult = ReturnType<typeof useFindRewardsForUserQuery>;
export type FindRewardsForUserLazyQueryHookResult = ReturnType<typeof useFindRewardsForUserLazyQuery>;
export type FindRewardsForUserSuspenseQueryHookResult = ReturnType<typeof useFindRewardsForUserSuspenseQuery>;
export type FindRewardsForUserQueryResult = Apollo.QueryResult<FindRewardsForUserQuery, FindRewardsForUserQueryVariables>;
export const FindAllQuestByRoomMemberIdDocument = gql`
    query findAllQuestByRoomMemberId {
  findAllQuestByRoomMemberId {
    id
    name
    createUser {
      id
      email
    }
    quests {
      id
      title
      description
      deadline
      difficulty
      completions {
        userId
      }
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
export const FindRoomByIdDocument = gql`
    query FindRoomById($roomId: String!) {
  findRoomById(roomId: $roomId) {
    id
    name
    quests {
      id
      title
      description
      deadline
      difficulty
    }
  }
}
    `;

/**
 * __useFindRoomByIdQuery__
 *
 * To run a query within a React component, call `useFindRoomByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindRoomByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindRoomByIdQuery({
 *   variables: {
 *      roomId: // value for 'roomId'
 *   },
 * });
 */
export function useFindRoomByIdQuery(baseOptions: Apollo.QueryHookOptions<FindRoomByIdQuery, FindRoomByIdQueryVariables> & ({ variables: FindRoomByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindRoomByIdQuery, FindRoomByIdQueryVariables>(FindRoomByIdDocument, options);
      }
export function useFindRoomByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindRoomByIdQuery, FindRoomByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindRoomByIdQuery, FindRoomByIdQueryVariables>(FindRoomByIdDocument, options);
        }
export function useFindRoomByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindRoomByIdQuery, FindRoomByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindRoomByIdQuery, FindRoomByIdQueryVariables>(FindRoomByIdDocument, options);
        }
export type FindRoomByIdQueryHookResult = ReturnType<typeof useFindRoomByIdQuery>;
export type FindRoomByIdLazyQueryHookResult = ReturnType<typeof useFindRoomByIdLazyQuery>;
export type FindRoomByIdSuspenseQueryHookResult = ReturnType<typeof useFindRoomByIdSuspenseQuery>;
export type FindRoomByIdQueryResult = Apollo.QueryResult<FindRoomByIdQuery, FindRoomByIdQueryVariables>;
export const FindProfileDocument = gql`
    query FindProfile {
  findProfile {
    id
    email
    stars
    quests {
      id
      title
      description
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
      starCost
    }
    rooms {
      id
      room {
        id
        name
        members {
          id
          userId
          role
          joinedAt
        }
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