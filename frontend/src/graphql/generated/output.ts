import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
	T extends { [key: string]: unknown },
	K extends keyof T
> = { [_ in K]?: never }
export type Incremental<T> =
	| T
	| {
			[P in keyof T]?: P extends ' $fragmentName' | '__typename'
				? T[P]
				: never
	  }
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string }
	String: { input: string; output: string }
	Boolean: { input: boolean; output: boolean }
	Int: { input: number; output: number }
	Float: { input: number; output: number }
	DateTime: { input: any; output: any }
}

export type Boost = {
	__typename?: 'Boost'
	activations?: Maybe<Array<BoostActivation>>
	cooldownDays: Scalars['Int']['output']
	description?: Maybe<Scalars['String']['output']>
	durationHours: Scalars['Int']['output']
	id: Scalars['ID']['output']
	name: Scalars['String']['output']
}

export type BoostActivation = {
	__typename?: 'BoostActivation'
	activatedAt: Scalars['DateTime']['output']
	boost: Boost
	boostId: Scalars['ID']['output']
	expiresAt: Scalars['DateTime']['output']
	id: Scalars['ID']['output']
	user: UserModel
	userId: Scalars['ID']['output']
}

export type CreateGoalInput = {
	description?: InputMaybe<Scalars['String']['input']>
	starReward: Scalars['Int']['input']
	title: Scalars['String']['input']
}

export type CreateInvitationInput = {
	email: Scalars['String']['input']
	role: UserRole
}

export type CreateQuestInput = {
	deadline: Scalars['DateTime']['input']
	description?: InputMaybe<Scalars['String']['input']>
	difficulty: Scalars['Int']['input']
	goalId?: InputMaybe<Scalars['ID']['input']>
	roomId: Scalars['ID']['input']
	title: Scalars['String']['input']
}

export type CreateRewardInput = {
	description?: InputMaybe<Scalars['String']['input']>
	starCost: Scalars['Int']['input']
	title: Scalars['String']['input']
}

export type CreateRoomInput = {
	name: Scalars['String']['input']
}

export type CreateUserInput = {
	email: Scalars['String']['input']
	password: Scalars['String']['input']
	role: UserRole
}

export type Goal = {
	__typename?: 'Goal'
	completedAt?: Maybe<Scalars['DateTime']['output']>
	creator: UserModel
	creatorId: Scalars['ID']['output']
	description?: Maybe<Scalars['String']['output']>
	id: Scalars['ID']['output']
	quests?: Maybe<Array<Quest>>
	starReward: Scalars['Int']['output']
	title: Scalars['String']['output']
}

export type Invitation = {
	__typename?: 'Invitation'
	acceptedAt: Scalars['DateTime']['output']
	createdAt: Scalars['DateTime']['output']
	email: Scalars['String']['output']
	expiresAt: Scalars['DateTime']['output']
	id: Scalars['ID']['output']
	invitedBy: UserModel
	invitedById: Scalars['ID']['output']
	role: UserRole
	room: Room
	roomId: Scalars['ID']['output']
	token: Scalars['String']['output']
	updatedAt: Scalars['DateTime']['output']
}

export type LoginInput = {
	email: Scalars['String']['input']
	password: Scalars['String']['input']
}

export type Mutation = {
	__typename?: 'Mutation'
	acceptInvitation: Scalars['Boolean']['output']
	activateBoost: BoostActivation
	completeGoal: Goal
	createGoal: Goal
	createInvitation: Scalars['Boolean']['output']
	createQuest: Quest
	createReward: RewardModel
	createRoom: Room
	createUser: UserModel
	deleteGoal: Scalars['Boolean']['output']
	deleteQuest: Quest
	deleteReward: Scalars['Boolean']['output']
	deleteRoom: Scalars['Boolean']['output']
	loginUser: UserModel
	logoutUser: Scalars['Boolean']['output']
	questCompletion: Scalars['Boolean']['output']
	uncompleteGoal: Goal
	updateGoal: Goal
	updateQuest: Quest
	updateReward: RewardModel
	updateRoom: Room
}

export type MutationAcceptInvitationArgs = {
	token: Scalars['String']['input']
}

export type MutationActivateBoostArgs = {
	boostId: Scalars['String']['input']
}

export type MutationCompleteGoalArgs = {
	goalId: Scalars['String']['input']
}

export type MutationCreateGoalArgs = {
	data: CreateGoalInput
}

export type MutationCreateInvitationArgs = {
	data: CreateInvitationInput
	roomId: Scalars['String']['input']
}

export type MutationCreateQuestArgs = {
	data: CreateQuestInput
	roomId: Scalars['String']['input']
}

export type MutationCreateRewardArgs = {
	data: CreateRewardInput
}

export type MutationCreateRoomArgs = {
	data: CreateRoomInput
}

export type MutationCreateUserArgs = {
	data: CreateUserInput
}

export type MutationDeleteGoalArgs = {
	goalId: Scalars['String']['input']
}

export type MutationDeleteQuestArgs = {
	questId: Scalars['String']['input']
}

export type MutationDeleteRewardArgs = {
	rewardId: Scalars['String']['input']
}

export type MutationDeleteRoomArgs = {
	roomId: Scalars['String']['input']
}

export type MutationLoginUserArgs = {
	data: LoginInput
}

export type MutationQuestCompletionArgs = {
	questId: Scalars['String']['input']
}

export type MutationUncompleteGoalArgs = {
	goalId: Scalars['String']['input']
}

export type MutationUpdateGoalArgs = {
	data: UpdateGoalInput
	goalId: Scalars['String']['input']
}

export type MutationUpdateQuestArgs = {
	data: CreateQuestInput
	questId: Scalars['String']['input']
}

export type MutationUpdateRewardArgs = {
	data: UpdateRewardInput
	rewardId: Scalars['String']['input']
}

export type MutationUpdateRoomArgs = {
	data: CreateRoomInput
	roomId: Scalars['String']['input']
}

export type Query = {
	__typename?: 'Query'
	createRewardPurchase: RewardPurchaseModel
	findActiveGoals: Array<Goal>
	findAllQuestRoom: Array<Quest>
	findAllRoomsUser: Array<Room>
	findByCreatorId: RewardModel
	findByIdBoost: Boost
	findByIdQuest: Quest
	findCompletedGoals: Array<Goal>
	findGoalById: Goal
	findGoalForChild: Goal
	findProfile: UserModel
	findRewardById: RewardModel
	findRewardsForChild: Array<RewardModel>
	findRoomById: Room
	getActiveBoosts: BoostActivation
	getUserActivations: Array<Boost>
	listAllBoosts: Array<Boost>
}

export type QueryCreateRewardPurchaseArgs = {
	rewardId: Scalars['String']['input']
}

export type QueryFindAllQuestRoomArgs = {
	roomId: Scalars['String']['input']
}

export type QueryFindByIdBoostArgs = {
	boostId: Scalars['String']['input']
}

export type QueryFindByIdQuestArgs = {
	questId: Scalars['String']['input']
	roomId: Scalars['String']['input']
}

export type QueryFindGoalByIdArgs = {
	goalId: Scalars['String']['input']
}

export type QueryFindRewardByIdArgs = {
	rewardId: Scalars['String']['input']
}

export type QueryFindRoomByIdArgs = {
	roomId: Scalars['String']['input']
}

export type Quest = {
	__typename?: 'Quest'
	completions?: Maybe<Array<QuestCompletion>>
	creator: UserModel
	creatorId: Scalars['ID']['output']
	deadline: Scalars['DateTime']['output']
	description?: Maybe<Scalars['String']['output']>
	difficulty: Scalars['Int']['output']
	goal?: Maybe<Goal>
	goalId?: Maybe<Scalars['ID']['output']>
	id: Scalars['ID']['output']
	room?: Maybe<Room>
	roomId?: Maybe<Scalars['ID']['output']>
	title: Scalars['String']['output']
}

export type QuestCompletion = {
	__typename?: 'QuestCompletion'
	completedAt: Scalars['DateTime']['output']
	id: Scalars['ID']['output']
	isLate: Scalars['Boolean']['output']
	quest: Quest
	questId: Scalars['ID']['output']
	starsAwarded: Scalars['Int']['output']
	user: UserModel
	userId: Scalars['ID']['output']
}

export type RewardModel = {
	__typename?: 'RewardModel'
	createdAt: Scalars['DateTime']['output']
	creator: UserModel
	creatorId: Scalars['String']['output']
	description?: Maybe<Scalars['String']['output']>
	id: Scalars['ID']['output']
	purchases: Array<RewardPurchaseModel>
	starCost: Scalars['Int']['output']
	title: Scalars['String']['output']
}

export type RewardPurchaseModel = {
	__typename?: 'RewardPurchaseModel'
	child: Array<UserModel>
	childId: Scalars['String']['output']
	createdAt: Scalars['DateTime']['output']
	creator: UserModel
	creatorId: Scalars['String']['output']
	description?: Maybe<Scalars['String']['output']>
	id: Scalars['ID']['output']
	purchasedAt: Scalars['DateTime']['output']
	rewarId: Scalars['String']['output']
	reward: Array<RewardModel>
	starCost: Scalars['Int']['output']
}

export type Room = {
	__typename?: 'Room'
	createUser: UserModel
	createUserId: Scalars['ID']['output']
	createdAt: Scalars['DateTime']['output']
	id: Scalars['ID']['output']
	invitations: Array<Invitation>
	members: Array<RoomMember>
	name: Scalars['String']['output']
	quests?: Maybe<Array<Quest>>
}

export type RoomMember = {
	__typename?: 'RoomMember'
	id: Scalars['ID']['output']
	joinedAt: Scalars['DateTime']['output']
	role: UserRole
	room: Room
	roomId: Scalars['ID']['output']
	user: UserModel
	userId: Scalars['ID']['output']
}

export type UpdateGoalInput = {
	description?: InputMaybe<Scalars['String']['input']>
	starReward?: InputMaybe<Scalars['Int']['input']>
	title?: InputMaybe<Scalars['String']['input']>
}

export type UpdateRewardInput = {
	description?: InputMaybe<Scalars['String']['input']>
	starCost?: InputMaybe<Scalars['Int']['input']>
	title?: InputMaybe<Scalars['String']['input']>
}

export type UserModel = {
	__typename?: 'UserModel'
	boosts: Array<BoostActivation>
	children: Array<Maybe<UserModel>>
	completions: Array<QuestCompletion>
	createdAt: Scalars['DateTime']['output']
	createdRooms: Array<Room>
	email: Scalars['String']['output']
	goals: Array<Goal>
	id: Scalars['ID']['output']
	parents: Array<Maybe<UserModel>>
	password: Scalars['String']['output']
	quests: Array<Quest>
	reward: Array<RewardPurchaseModel>
	rewardsPurchase: Array<RewardModel>
	role: UserRole
	roomInvitations: Array<Invitation>
	rooms: Array<RoomMember>
	stars: Scalars['Int']['output']
	updateAt: Scalars['DateTime']['output']
	updatedAt: Scalars['DateTime']['output']
}

export enum UserRole {
	Child = 'CHILD',
	Parent = 'PARENT'
}

export type ListAllBoostsQueryVariables = Exact<{ [key: string]: never }>

export type ListAllBoostsQuery = {
	__typename?: 'Query'
	listAllBoosts: Array<{
		__typename?: 'Boost'
		id: string
		name: string
		description?: string | null
		cooldownDays: number
		durationHours: number
	}>
}

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
`

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
export function useListAllBoostsQuery(
	baseOptions?: Apollo.QueryHookOptions<
		ListAllBoostsQuery,
		ListAllBoostsQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useQuery<ListAllBoostsQuery, ListAllBoostsQueryVariables>(
		ListAllBoostsDocument,
		options
	)
}
export function useListAllBoostsLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		ListAllBoostsQuery,
		ListAllBoostsQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useLazyQuery<ListAllBoostsQuery, ListAllBoostsQueryVariables>(
		ListAllBoostsDocument,
		options
	)
}
export function useListAllBoostsSuspenseQuery(
	baseOptions?:
		| Apollo.SkipToken
		| Apollo.SuspenseQueryHookOptions<
				ListAllBoostsQuery,
				ListAllBoostsQueryVariables
		  >
) {
	const options =
		baseOptions === Apollo.skipToken
			? baseOptions
			: { ...defaultOptions, ...baseOptions }
	return Apollo.useSuspenseQuery<
		ListAllBoostsQuery,
		ListAllBoostsQueryVariables
	>(ListAllBoostsDocument, options)
}
export type ListAllBoostsQueryHookResult = ReturnType<
	typeof useListAllBoostsQuery
>
export type ListAllBoostsLazyQueryHookResult = ReturnType<
	typeof useListAllBoostsLazyQuery
>
export type ListAllBoostsSuspenseQueryHookResult = ReturnType<
	typeof useListAllBoostsSuspenseQuery
>
export type ListAllBoostsQueryResult = Apollo.QueryResult<
	ListAllBoostsQuery,
	ListAllBoostsQueryVariables
>
