/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateTodo: OnCreateTodoSubscription;
  onUpdateTodo: OnUpdateTodoSubscription;
  onDeleteTodo: OnDeleteTodoSubscription;
  onCreateLevel: OnCreateLevelSubscription;
  onUpdateLevel: OnUpdateLevelSubscription;
  onDeleteLevel: OnDeleteLevelSubscription;
  onCreateMember: OnCreateMemberSubscription;
  onUpdateMember: OnUpdateMemberSubscription;
  onDeleteMember: OnDeleteMemberSubscription;
  onCreateDonation: OnCreateDonationSubscription;
  onUpdateDonation: OnUpdateDonationSubscription;
  onDeleteDonation: OnDeleteDonationSubscription;
  onCreateFundraiser: OnCreateFundraiserSubscription;
  onUpdateFundraiser: OnUpdateFundraiserSubscription;
  onDeleteFundraiser: OnDeleteFundraiserSubscription;
};

export type CreateTodoInput = {
  id?: string | null;
  name: string;
  description?: string | null;
  _version?: number | null;
};

export type ModelTodoConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelTodoConditionInput | null> | null;
  or?: Array<ModelTodoConditionInput | null> | null;
  not?: ModelTodoConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Todo = {
  __typename: "Todo";
  id: string;
  name: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateTodoInput = {
  id: string;
  name?: string | null;
  description?: string | null;
  _version?: number | null;
};

export type DeleteTodoInput = {
  id: string;
  _version?: number | null;
};

export type CreateLevelInput = {
  id?: string | null;
  amount: number;
  impact: string;
  reward: string;
  fundraiserID: string;
  _version?: number | null;
};

export type ModelLevelConditionInput = {
  amount?: ModelFloatInput | null;
  impact?: ModelStringInput | null;
  reward?: ModelStringInput | null;
  fundraiserID?: ModelIDInput | null;
  and?: Array<ModelLevelConditionInput | null> | null;
  or?: Array<ModelLevelConditionInput | null> | null;
  not?: ModelLevelConditionInput | null;
};

export type ModelFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type Level = {
  __typename: "Level";
  id: string;
  amount: number;
  impact: string;
  reward: string;
  fundraiserID: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateLevelInput = {
  id: string;
  amount?: number | null;
  impact?: string | null;
  reward?: string | null;
  fundraiserID?: string | null;
  _version?: number | null;
};

export type DeleteLevelInput = {
  id: string;
  _version?: number | null;
};

export type CreateMemberInput = {
  id?: string | null;
  name?: string | null;
  email_address: string;
  last_name: string;
  phone_number: string;
  fundraiserID: string;
  _version?: number | null;
};

export type ModelMemberConditionInput = {
  name?: ModelStringInput | null;
  email_address?: ModelStringInput | null;
  last_name?: ModelStringInput | null;
  phone_number?: ModelStringInput | null;
  fundraiserID?: ModelIDInput | null;
  and?: Array<ModelMemberConditionInput | null> | null;
  or?: Array<ModelMemberConditionInput | null> | null;
  not?: ModelMemberConditionInput | null;
};

export type Member = {
  __typename: "Member";
  id: string;
  name?: string | null;
  email_address: string;
  last_name: string;
  phone_number: string;
  fundraiserID: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateMemberInput = {
  id: string;
  name?: string | null;
  email_address?: string | null;
  last_name?: string | null;
  phone_number?: string | null;
  fundraiserID?: string | null;
  _version?: number | null;
};

export type DeleteMemberInput = {
  id: string;
  _version?: number | null;
};

export type CreateDonationInput = {
  id?: string | null;
  amount: number;
  donor_name?: string | null;
  donor_email?: string | null;
  donation_date?: string | null;
  donorID?: string | null;
  fundraiserID: string;
  _version?: number | null;
};

export type ModelDonationConditionInput = {
  amount?: ModelFloatInput | null;
  donor_name?: ModelStringInput | null;
  donor_email?: ModelStringInput | null;
  donation_date?: ModelStringInput | null;
  donorID?: ModelStringInput | null;
  fundraiserID?: ModelIDInput | null;
  and?: Array<ModelDonationConditionInput | null> | null;
  or?: Array<ModelDonationConditionInput | null> | null;
  not?: ModelDonationConditionInput | null;
};

export type Donation = {
  __typename: "Donation";
  id: string;
  amount: number;
  donor_name?: string | null;
  donor_email?: string | null;
  donation_date?: string | null;
  donorID?: string | null;
  fundraiserID: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateDonationInput = {
  id: string;
  amount?: number | null;
  donor_name?: string | null;
  donor_email?: string | null;
  donation_date?: string | null;
  donorID?: string | null;
  fundraiserID?: string | null;
  _version?: number | null;
};

export type DeleteDonationInput = {
  id: string;
  _version?: number | null;
};

export type CreateFundraiserInput = {
  id?: string | null;
  name: string;
  description: string;
  goal: number;
  start_date: string;
  end_date: string;
  creatorID: string;
  _version?: number | null;
};

export type ModelFundraiserConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  goal?: ModelFloatInput | null;
  start_date?: ModelStringInput | null;
  end_date?: ModelStringInput | null;
  creatorID?: ModelStringInput | null;
  and?: Array<ModelFundraiserConditionInput | null> | null;
  or?: Array<ModelFundraiserConditionInput | null> | null;
  not?: ModelFundraiserConditionInput | null;
};

export type Fundraiser = {
  __typename: "Fundraiser";
  id: string;
  name: string;
  description: string;
  goal: number;
  start_date: string;
  end_date: string;
  creatorID: string;
  Donations?: ModelDonationConnection | null;
  Levels?: ModelLevelConnection | null;
  Members?: ModelMemberConnection | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ModelDonationConnection = {
  __typename: "ModelDonationConnection";
  items: Array<Donation | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelLevelConnection = {
  __typename: "ModelLevelConnection";
  items: Array<Level | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelMemberConnection = {
  __typename: "ModelMemberConnection";
  items: Array<Member | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type UpdateFundraiserInput = {
  id: string;
  name?: string | null;
  description?: string | null;
  goal?: number | null;
  start_date?: string | null;
  end_date?: string | null;
  creatorID?: string | null;
  _version?: number | null;
};

export type DeleteFundraiserInput = {
  id: string;
  _version?: number | null;
};

export type ModelTodoFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelTodoFilterInput | null> | null;
  or?: Array<ModelTodoFilterInput | null> | null;
  not?: ModelTodoFilterInput | null;
};

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection";
  items: Array<Todo | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelLevelFilterInput = {
  id?: ModelIDInput | null;
  amount?: ModelFloatInput | null;
  impact?: ModelStringInput | null;
  reward?: ModelStringInput | null;
  fundraiserID?: ModelIDInput | null;
  and?: Array<ModelLevelFilterInput | null> | null;
  or?: Array<ModelLevelFilterInput | null> | null;
  not?: ModelLevelFilterInput | null;
};

export type ModelMemberFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  email_address?: ModelStringInput | null;
  last_name?: ModelStringInput | null;
  phone_number?: ModelStringInput | null;
  fundraiserID?: ModelIDInput | null;
  and?: Array<ModelMemberFilterInput | null> | null;
  or?: Array<ModelMemberFilterInput | null> | null;
  not?: ModelMemberFilterInput | null;
};

export type ModelDonationFilterInput = {
  id?: ModelIDInput | null;
  amount?: ModelFloatInput | null;
  donor_name?: ModelStringInput | null;
  donor_email?: ModelStringInput | null;
  donation_date?: ModelStringInput | null;
  donorID?: ModelStringInput | null;
  fundraiserID?: ModelIDInput | null;
  and?: Array<ModelDonationFilterInput | null> | null;
  or?: Array<ModelDonationFilterInput | null> | null;
  not?: ModelDonationFilterInput | null;
};

export type ModelFundraiserFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  goal?: ModelFloatInput | null;
  start_date?: ModelStringInput | null;
  end_date?: ModelStringInput | null;
  creatorID?: ModelStringInput | null;
  and?: Array<ModelFundraiserFilterInput | null> | null;
  or?: Array<ModelFundraiserFilterInput | null> | null;
  not?: ModelFundraiserFilterInput | null;
};

export type ModelFundraiserConnection = {
  __typename: "ModelFundraiserConnection";
  items: Array<Fundraiser | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type CreateTodoMutation = {
  __typename: "Todo";
  id: string;
  name: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateTodoMutation = {
  __typename: "Todo";
  id: string;
  name: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteTodoMutation = {
  __typename: "Todo";
  id: string;
  name: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateLevelMutation = {
  __typename: "Level";
  id: string;
  amount: number;
  impact: string;
  reward: string;
  fundraiserID: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateLevelMutation = {
  __typename: "Level";
  id: string;
  amount: number;
  impact: string;
  reward: string;
  fundraiserID: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteLevelMutation = {
  __typename: "Level";
  id: string;
  amount: number;
  impact: string;
  reward: string;
  fundraiserID: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateMemberMutation = {
  __typename: "Member";
  id: string;
  name?: string | null;
  email_address: string;
  last_name: string;
  phone_number: string;
  fundraiserID: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateMemberMutation = {
  __typename: "Member";
  id: string;
  name?: string | null;
  email_address: string;
  last_name: string;
  phone_number: string;
  fundraiserID: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteMemberMutation = {
  __typename: "Member";
  id: string;
  name?: string | null;
  email_address: string;
  last_name: string;
  phone_number: string;
  fundraiserID: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateDonationMutation = {
  __typename: "Donation";
  id: string;
  amount: number;
  donor_name?: string | null;
  donor_email?: string | null;
  donation_date?: string | null;
  donorID?: string | null;
  fundraiserID: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateDonationMutation = {
  __typename: "Donation";
  id: string;
  amount: number;
  donor_name?: string | null;
  donor_email?: string | null;
  donation_date?: string | null;
  donorID?: string | null;
  fundraiserID: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteDonationMutation = {
  __typename: "Donation";
  id: string;
  amount: number;
  donor_name?: string | null;
  donor_email?: string | null;
  donation_date?: string | null;
  donorID?: string | null;
  fundraiserID: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateFundraiserMutation = {
  __typename: "Fundraiser";
  id: string;
  name: string;
  description: string;
  goal: number;
  start_date: string;
  end_date: string;
  creatorID: string;
  Donations?: {
    __typename: "ModelDonationConnection";
    items: Array<{
      __typename: "Donation";
      id: string;
      amount: number;
      fundraiserID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  Levels?: {
    __typename: "ModelLevelConnection";
    items: Array<{
      __typename: "Level";
      id: string;
      amount: number;
      fundraiserID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  Members?: {
    __typename: "ModelMemberConnection";
    items: Array<{
      __typename: "Member";
      id: string;
      fundraiserID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateFundraiserMutation = {
  __typename: "Fundraiser";
  id: string;
  name: string;
  description: string;
  goal: number;
  start_date: string;
  end_date: string;
  creatorID: string;
  Donations?: {
    __typename: "ModelDonationConnection";
    items: Array<{
      __typename: "Donation";
      id: string;
      amount: number;
      donor_name?: string | null;
      donor_email?: string | null;
      donation_date?: string | null;
      donorID?: string | null;
      fundraiserID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  Levels?: {
    __typename: "ModelLevelConnection";
    items: Array<{
      __typename: "Level";
      id: string;
      amount: number;
      fundraiserID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  Members?: {
    __typename: "ModelMemberConnection";
    items: Array<{
      __typename: "Member";
      id: string;
      name?: string | null;
      email_address: string;
      last_name: string;
      phone_number: string;
      fundraiserID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteFundraiserMutation = {
  __typename: "Fundraiser";
  id: string;
  name: string;
  description: string;
  goal: number;
  start_date: string;
  end_date: string;
  creatorID: string;
  Donations?: {
    __typename: "ModelDonationConnection";
    items: Array<{
      __typename: "Donation";
      id: string;
      amount: number;
      donor_name?: string | null;
      donor_email?: string | null;
      donation_date?: string | null;
      donorID?: string | null;
      fundraiserID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  Levels?: {
    __typename: "ModelLevelConnection";
    items: Array<{
      __typename: "Level";
      id: string;
      amount: number;
      fundraiserID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  Members?: {
    __typename: "ModelMemberConnection";
    items: Array<{
      __typename: "Member";
      id: string;
      name?: string | null;
      email_address: string;
      last_name: string;
      phone_number: string;
      fundraiserID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type GetTodoQuery = {
  __typename: "Todo";
  id: string;
  name: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListTodosQuery = {
  __typename: "ModelTodoConnection";
  items: Array<{
    __typename: "Todo";
    id: string;
    name: string;
    description?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncTodosQuery = {
  __typename: "ModelTodoConnection";
  items: Array<{
    __typename: "Todo";
    id: string;
    name: string;
    description?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetLevelQuery = {
  __typename: "Level";
  id: string;
  amount: number;
  impact: string;
  reward: string;
  fundraiserID: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListLevelsQuery = {
  __typename: "ModelLevelConnection";
  items: Array<{
    __typename: "Level";
    id: string;
    amount: number;
    impact: string;
    reward: string;
    fundraiserID: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncLevelsQuery = {
  __typename: "ModelLevelConnection";
  items: Array<{
    __typename: "Level";
    id: string;
    amount: number;
    impact: string;
    reward: string;
    fundraiserID: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetMemberQuery = {
  __typename: "Member";
  id: string;
  name?: string | null;
  email_address: string;
  last_name: string;
  phone_number: string;
  fundraiserID: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListMembersQuery = {
  __typename: "ModelMemberConnection";
  items: Array<{
    __typename: "Member";
    id: string;
    name?: string | null;
    email_address: string;
    last_name: string;
    phone_number: string;
    fundraiserID: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncMembersQuery = {
  __typename: "ModelMemberConnection";
  items: Array<{
    __typename: "Member";
    id: string;
    name?: string | null;
    email_address: string;
    last_name: string;
    phone_number: string;
    fundraiserID: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetDonationQuery = {
  __typename: "Donation";
  id: string;
  amount: number;
  donor_name?: string | null;
  donor_email?: string | null;
  donation_date?: string | null;
  donorID?: string | null;
  fundraiserID: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListDonationsQuery = {
  __typename: "ModelDonationConnection";
  items: Array<{
    __typename: "Donation";
    id: string;
    amount: number;
    donor_name?: string | null;
    donor_email?: string | null;
    donation_date?: string | null;
    donorID?: string | null;
    fundraiserID: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncDonationsQuery = {
  __typename: "ModelDonationConnection";
  items: Array<{
    __typename: "Donation";
    id: string;
    amount: number;
    donor_name?: string | null;
    donor_email?: string | null;
    donation_date?: string | null;
    donorID?: string | null;
    fundraiserID: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetFundraiserQuery = {
  __typename: "Fundraiser";
  id: string;
  name: string;
  description: string;
  goal: number;
  start_date: string;
  end_date: string;
  creatorID: string;
  Donations?: {
    __typename: "ModelDonationConnection";
    items: Array<{
      __typename: "Donation";
      id: string;
      amount: number;
      donor_name?: string | null;
      donor_email?: string | null;
      donation_date?: string | null;
      donorID?: string | null;
      fundraiserID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  Levels?: {
    __typename: "ModelLevelConnection";
    items: Array<{
      __typename: "Level";
      id: string;
      amount: number;
      fundraiserID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  Members?: {
    __typename: "ModelMemberConnection";
    items: Array<{
      __typename: "Member";
      id: string;
      name?: string | null;
      email_address: string;
      last_name: string;
      phone_number: string;
      fundraiserID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListFundraisersQuery = {
  __typename: "ModelFundraiserConnection";
  items: Array<{
    __typename: "Fundraiser";
    id: string;
    name: string;
    description: string;
    goal: number;
    start_date: string;
    end_date: string;
    creatorID: string;
    Donations?: {
      __typename: "ModelDonationConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Levels?: {
      __typename: "ModelLevelConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Members?: {
      __typename: "ModelMemberConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncFundraisersQuery = {
  __typename: "ModelFundraiserConnection";
  items: Array<{
    __typename: "Fundraiser";
    id: string;
    name: string;
    description: string;
    goal: number;
    start_date: string;
    end_date: string;
    creatorID: string;
    Donations?: {
      __typename: "ModelDonationConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Levels?: {
      __typename: "ModelLevelConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Members?: {
      __typename: "ModelMemberConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type OnCreateTodoSubscription = {
  __typename: "Todo";
  id: string;
  name: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateTodoSubscription = {
  __typename: "Todo";
  id: string;
  name: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteTodoSubscription = {
  __typename: "Todo";
  id: string;
  name: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateLevelSubscription = {
  __typename: "Level";
  id: string;
  amount: number;
  impact: string;
  reward: string;
  fundraiserID: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateLevelSubscription = {
  __typename: "Level";
  id: string;
  amount: number;
  impact: string;
  reward: string;
  fundraiserID: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteLevelSubscription = {
  __typename: "Level";
  id: string;
  amount: number;
  impact: string;
  reward: string;
  fundraiserID: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateMemberSubscription = {
  __typename: "Member";
  id: string;
  name?: string | null;
  email_address: string;
  last_name: string;
  phone_number: string;
  fundraiserID: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateMemberSubscription = {
  __typename: "Member";
  id: string;
  name?: string | null;
  email_address: string;
  last_name: string;
  phone_number: string;
  fundraiserID: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteMemberSubscription = {
  __typename: "Member";
  id: string;
  name?: string | null;
  email_address: string;
  last_name: string;
  phone_number: string;
  fundraiserID: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateDonationSubscription = {
  __typename: "Donation";
  id: string;
  amount: number;
  donor_name?: string | null;
  donor_email?: string | null;
  donation_date?: string | null;
  donorID?: string | null;
  fundraiserID: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateDonationSubscription = {
  __typename: "Donation";
  id: string;
  amount: number;
  donor_name?: string | null;
  donor_email?: string | null;
  donation_date?: string | null;
  donorID?: string | null;
  fundraiserID: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteDonationSubscription = {
  __typename: "Donation";
  id: string;
  amount: number;
  donor_name?: string | null;
  donor_email?: string | null;
  donation_date?: string | null;
  donorID?: string | null;
  fundraiserID: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateFundraiserSubscription = {
  __typename: "Fundraiser";
  id: string;
  name: string;
  description: string;
  goal: number;
  start_date: string;
  end_date: string;
  creatorID: string;
  Donations?: {
    __typename: "ModelDonationConnection";
    items: Array<{
      __typename: "Donation";
      id: string;
      amount: number;
      fundraiserID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  Levels?: {
    __typename: "ModelLevelConnection";
    items: Array<{
      __typename: "Level";
      id: string;
      amount: number;
      fundraiserID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  Members?: {
    __typename: "ModelMemberConnection";
    items: Array<{
      __typename: "Member";
      id: string;
      fundraiserID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateFundraiserSubscription = {
  __typename: "Fundraiser";
  id: string;
  name: string;
  description: string;
  goal: number;
  start_date: string;
  end_date: string;
  creatorID: string;
  Donations?: {
    __typename: "ModelDonationConnection";
    items: Array<{
      __typename: "Donation";
      id: string;
      amount: number;
      donor_name?: string | null;
      donor_email?: string | null;
      donation_date?: string | null;
      donorID?: string | null;
      fundraiserID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  Levels?: {
    __typename: "ModelLevelConnection";
    items: Array<{
      __typename: "Level";
      id: string;
      amount: number;
      fundraiserID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  Members?: {
    __typename: "ModelMemberConnection";
    items: Array<{
      __typename: "Member";
      id: string;
      name?: string | null;
      email_address: string;
      last_name: string;
      phone_number: string;
      fundraiserID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteFundraiserSubscription = {
  __typename: "Fundraiser";
  id: string;
  name: string;
  description: string;
  goal: number;
  start_date: string;
  end_date: string;
  creatorID: string;
  Donations?: {
    __typename: "ModelDonationConnection";
    items: Array<{
      __typename: "Donation";
      id: string;
      amount: number;
      donor_name?: string | null;
      donor_email?: string | null;
      donation_date?: string | null;
      donorID?: string | null;
      fundraiserID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  Levels?: {
    __typename: "ModelLevelConnection";
    items: Array<{
      __typename: "Level";
      id: string;
      amount: number;
      fundraiserID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  Members?: {
    __typename: "ModelMemberConnection";
    items: Array<{
      __typename: "Member";
      id: string;
      name?: string | null;
      email_address: string;
      last_name: string;
      phone_number: string;
      fundraiserID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateTodo(
    input: CreateTodoInput,
    condition?: ModelTodoConditionInput
  ): Promise<CreateTodoMutation> {
    const statement = `mutation CreateTodo($input: CreateTodoInput!, $condition: ModelTodoConditionInput) {
        createTodo(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTodoMutation>response.data.createTodo;
  }
  async UpdateTodo(
    input: UpdateTodoInput,
    condition?: ModelTodoConditionInput
  ): Promise<UpdateTodoMutation> {
    const statement = `mutation UpdateTodo($input: UpdateTodoInput!, $condition: ModelTodoConditionInput) {
        updateTodo(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTodoMutation>response.data.updateTodo;
  }
  async DeleteTodo(
    input: DeleteTodoInput,
    condition?: ModelTodoConditionInput
  ): Promise<DeleteTodoMutation> {
    const statement = `mutation DeleteTodo($input: DeleteTodoInput!, $condition: ModelTodoConditionInput) {
        deleteTodo(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTodoMutation>response.data.deleteTodo;
  }
  async CreateLevel(
    input: CreateLevelInput,
    condition?: ModelLevelConditionInput
  ): Promise<CreateLevelMutation> {
    const statement = `mutation CreateLevel($input: CreateLevelInput!, $condition: ModelLevelConditionInput) {
        createLevel(input: $input, condition: $condition) {
          __typename
          id
          amount
          impact
          reward
          fundraiserID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateLevelMutation>response.data.createLevel;
  }
  async UpdateLevel(
    input: UpdateLevelInput,
    condition?: ModelLevelConditionInput
  ): Promise<UpdateLevelMutation> {
    const statement = `mutation UpdateLevel($input: UpdateLevelInput!, $condition: ModelLevelConditionInput) {
        updateLevel(input: $input, condition: $condition) {
          __typename
          id
          amount
          impact
          reward
          fundraiserID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateLevelMutation>response.data.updateLevel;
  }
  async DeleteLevel(
    input: DeleteLevelInput,
    condition?: ModelLevelConditionInput
  ): Promise<DeleteLevelMutation> {
    const statement = `mutation DeleteLevel($input: DeleteLevelInput!, $condition: ModelLevelConditionInput) {
        deleteLevel(input: $input, condition: $condition) {
          __typename
          id
          amount
          impact
          reward
          fundraiserID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteLevelMutation>response.data.deleteLevel;
  }
  async CreateMember(
    input: CreateMemberInput,
    condition?: ModelMemberConditionInput
  ): Promise<CreateMemberMutation> {
    const statement = `mutation CreateMember($input: CreateMemberInput!, $condition: ModelMemberConditionInput) {
        createMember(input: $input, condition: $condition) {
          __typename
          id
          name
          email_address
          last_name
          phone_number
          fundraiserID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateMemberMutation>response.data.createMember;
  }
  async UpdateMember(
    input: UpdateMemberInput,
    condition?: ModelMemberConditionInput
  ): Promise<UpdateMemberMutation> {
    const statement = `mutation UpdateMember($input: UpdateMemberInput!, $condition: ModelMemberConditionInput) {
        updateMember(input: $input, condition: $condition) {
          __typename
          id
          name
          email_address
          last_name
          phone_number
          fundraiserID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateMemberMutation>response.data.updateMember;
  }
  async DeleteMember(
    input: DeleteMemberInput,
    condition?: ModelMemberConditionInput
  ): Promise<DeleteMemberMutation> {
    const statement = `mutation DeleteMember($input: DeleteMemberInput!, $condition: ModelMemberConditionInput) {
        deleteMember(input: $input, condition: $condition) {
          __typename
          id
          name
          email_address
          last_name
          phone_number
          fundraiserID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteMemberMutation>response.data.deleteMember;
  }
  async CreateDonation(
    input: CreateDonationInput,
    condition?: ModelDonationConditionInput
  ): Promise<CreateDonationMutation> {
    const statement = `mutation CreateDonation($input: CreateDonationInput!, $condition: ModelDonationConditionInput) {
        createDonation(input: $input, condition: $condition) {
          __typename
          id
          amount
          donor_name
          donor_email
          donation_date
          donorID
          fundraiserID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateDonationMutation>response.data.createDonation;
  }
  async UpdateDonation(
    input: UpdateDonationInput,
    condition?: ModelDonationConditionInput
  ): Promise<UpdateDonationMutation> {
    const statement = `mutation UpdateDonation($input: UpdateDonationInput!, $condition: ModelDonationConditionInput) {
        updateDonation(input: $input, condition: $condition) {
          __typename
          id
          amount
          donor_name
          donor_email
          donation_date
          donorID
          fundraiserID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateDonationMutation>response.data.updateDonation;
  }
  async DeleteDonation(
    input: DeleteDonationInput,
    condition?: ModelDonationConditionInput
  ): Promise<DeleteDonationMutation> {
    const statement = `mutation DeleteDonation($input: DeleteDonationInput!, $condition: ModelDonationConditionInput) {
        deleteDonation(input: $input, condition: $condition) {
          __typename
          id
          amount
          donor_name
          donor_email
          donation_date
          donorID
          fundraiserID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteDonationMutation>response.data.deleteDonation;
  }
  async CreateFundraiser(
    input: CreateFundraiserInput,
    condition?: ModelFundraiserConditionInput
  ): Promise<CreateFundraiserMutation> {
    const statement = `mutation CreateFundraiser($input: CreateFundraiserInput!, $condition: ModelFundraiserConditionInput) {
        createFundraiser(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          goal
          start_date
          end_date
          creatorID
          Donations {
            __typename
            items {
              __typename
              id
              amount
              fundraiserID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          Levels {
            __typename
            items {
              __typename
              id
              amount
              impact
              reward
              fundraiserID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          Members {
            __typename
            items {
              __typename
              id
              fundraiserID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateFundraiserMutation>response.data.createFundraiser;
  }
  async UpdateFundraiser(
    input: UpdateFundraiserInput,
    condition?: ModelFundraiserConditionInput
  ): Promise<UpdateFundraiserMutation> {
    const statement = `mutation UpdateFundraiser($input: UpdateFundraiserInput!, $condition: ModelFundraiserConditionInput) {
        updateFundraiser(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          goal
          start_date
          end_date
          creatorID
          Donations {
            __typename
            items {
              __typename
              id
              amount
              donor_name
              donor_email
              donation_date
              donorID
              fundraiserID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          Levels {
            __typename
            items {
              __typename
              id
              amount
              impact
              reward
              fundraiserID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          Members {
            __typename
            items {
              __typename
              id
              name
              email_address
              last_name
              phone_number
              fundraiserID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateFundraiserMutation>response.data.updateFundraiser;
  }
  async DeleteFundraiser(
    input: DeleteFundraiserInput,
    condition?: ModelFundraiserConditionInput
  ): Promise<DeleteFundraiserMutation> {
    const statement = `mutation DeleteFundraiser($input: DeleteFundraiserInput!, $condition: ModelFundraiserConditionInput) {
        deleteFundraiser(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          goal
          start_date
          end_date
          creatorID
          Donations {
            __typename
            items {
              __typename
              id
              amount
              donor_name
              donor_email
              donation_date
              donorID
              fundraiserID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          Levels {
            __typename
            items {
              __typename
              id
              amount
              fundraiserID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          Members {
            __typename
            items {
              __typename
              id
              name
              email_address
              last_name
              phone_number
              fundraiserID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteFundraiserMutation>response.data.deleteFundraiser;
  }
  async GetTodo(id: string): Promise<GetTodoQuery> {
    const statement = `query GetTodo($id: ID!) {
        getTodo(id: $id) {
          __typename
          id
          name
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTodoQuery>response.data.getTodo;
  }
  async ListTodos(
    filter?: ModelTodoFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTodosQuery> {
    const statement = `query ListTodos($filter: ModelTodoFilterInput, $limit: Int, $nextToken: String) {
        listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTodosQuery>response.data.listTodos;
  }
  async SyncTodos(
    filter?: ModelTodoFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncTodosQuery> {
    const statement = `query SyncTodos($filter: ModelTodoFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncTodos(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            name
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncTodosQuery>response.data.syncTodos;
  }
  async GetLevel(id: string): Promise<GetLevelQuery> {
    const statement = `query GetLevel($id: ID!) {
        getLevel(id: $id) {
          __typename
          id
          amount
          impact
          reward
          fundraiserID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetLevelQuery>response.data.getLevel;
  }
  async ListLevels(
    filter?: ModelLevelFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListLevelsQuery> {
    const statement = `query ListLevels($filter: ModelLevelFilterInput, $limit: Int, $nextToken: String) {
        listLevels(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            amount
            impact
            reward
            fundraiserID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListLevelsQuery>response.data.listLevels;
  }
  async SyncLevels(
    filter?: ModelLevelFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncLevelsQuery> {
    const statement = `query SyncLevels($filter: ModelLevelFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncLevels(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            amount
            impact
            reward
            fundraiserID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncLevelsQuery>response.data.syncLevels;
  }
  async GetMember(id: string): Promise<GetMemberQuery> {
    const statement = `query GetMember($id: ID!) {
        getMember(id: $id) {
          __typename
          id
          name
          email_address
          last_name
          phone_number
          fundraiserID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetMemberQuery>response.data.getMember;
  }
  async ListMembers(
    filter?: ModelMemberFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListMembersQuery> {
    const statement = `query ListMembers($filter: ModelMemberFilterInput, $limit: Int, $nextToken: String) {
        listMembers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            email_address
            last_name
            phone_number
            fundraiserID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListMembersQuery>response.data.listMembers;
  }
  async SyncMembers(
    filter?: ModelMemberFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncMembersQuery> {
    const statement = `query SyncMembers($filter: ModelMemberFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncMembers(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            name
            email_address
            last_name
            phone_number
            fundraiserID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncMembersQuery>response.data.syncMembers;
  }
  async GetDonation(id: string): Promise<GetDonationQuery> {
    const statement = `query GetDonation($id: ID!) {
        getDonation(id: $id) {
          __typename
          id
          amount
          donor_name
          donor_email
          donation_date
          donorID
          fundraiserID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetDonationQuery>response.data.getDonation;
  }
  async ListDonations(
    filter?: ModelDonationFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListDonationsQuery> {
    const statement = `query ListDonations($filter: ModelDonationFilterInput, $limit: Int, $nextToken: String) {
        listDonations(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            amount
            donor_name
            donor_email
            donation_date
            donorID
            fundraiserID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListDonationsQuery>response.data.listDonations;
  }
  async SyncDonations(
    filter?: ModelDonationFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncDonationsQuery> {
    const statement = `query SyncDonations($filter: ModelDonationFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncDonations(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            amount
            donor_name
            donor_email
            donation_date
            donorID
            fundraiserID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncDonationsQuery>response.data.syncDonations;
  }
  async GetFundraiser(id: string): Promise<GetFundraiserQuery> {
    const statement = `query GetFundraiser($id: ID!) {
        getFundraiser(id: $id) {
          __typename
          id
          name
          description
          goal
          start_date
          end_date
          creatorID
          Donations {
            __typename
            items {
              __typename
              id
              amount
              donor_name
              donor_email
              donation_date
              donorID
              fundraiserID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          Levels {
            __typename
            items {
              __typename
              id
              amount
              impact
              reward
              fundraiserID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          Members {
            __typename
            items {
              __typename
              id
              name
              email_address
              last_name
              phone_number
              fundraiserID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetFundraiserQuery>response.data.getFundraiser;
  }
  async ListFundraisers(
    filter?: ModelFundraiserFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListFundraisersQuery> {
    const statement = `query ListFundraisers($filter: ModelFundraiserFilterInput, $limit: Int, $nextToken: String) {
        listFundraisers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            goal
            start_date
            end_date
            creatorID
            Donations {
              __typename
              nextToken
              startedAt
            }
            Levels {
              __typename
              nextToken
              startedAt
            }
            Members {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListFundraisersQuery>response.data.listFundraisers;
  }
  async SyncFundraisers(
    filter?: ModelFundraiserFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncFundraisersQuery> {
    const statement = `query SyncFundraisers($filter: ModelFundraiserFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncFundraisers(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            name
            description
            goal
            start_date
            end_date
            creatorID
            Donations {
              __typename
              nextToken
              startedAt
            }
            Levels {
              __typename
              nextToken
              startedAt
            }
            Members {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncFundraisersQuery>response.data.syncFundraisers;
  }
  OnCreateTodoListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTodo">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateTodo {
        onCreateTodo {
          __typename
          id
          name
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTodo">>
  >;

  OnUpdateTodoListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTodo">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTodo {
        onUpdateTodo {
          __typename
          id
          name
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTodo">>
  >;

  OnDeleteTodoListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTodo">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTodo {
        onDeleteTodo {
          __typename
          id
          name
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTodo">>
  >;

  OnCreateLevelListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateLevel">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateLevel {
        onCreateLevel {
          __typename
          id
          amount
          impact
          reward
          fundraiserID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateLevel">>
  >;

  OnUpdateLevelListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateLevel">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateLevel {
        onUpdateLevel {
          __typename
          id
          amount
          impact
          reward
          fundraiserID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateLevel">>
  >;

  OnDeleteLevelListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteLevel">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteLevel {
        onDeleteLevel {
          __typename
          id
          amount
          impact
          reward
          fundraiserID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteLevel">>
  >;

  OnCreateMemberListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateMember">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateMember {
        onCreateMember {
          __typename
          id
          name
          email_address
          last_name
          phone_number
          fundraiserID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateMember">>
  >;

  OnUpdateMemberListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateMember">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateMember {
        onUpdateMember {
          __typename
          id
          name
          email_address
          last_name
          phone_number
          fundraiserID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateMember">>
  >;

  OnDeleteMemberListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteMember">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteMember {
        onDeleteMember {
          __typename
          id
          name
          email_address
          last_name
          phone_number
          fundraiserID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteMember">>
  >;

  OnCreateDonationListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateDonation">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateDonation {
        onCreateDonation {
          __typename
          id
          amount
          donor_name
          donor_email
          donation_date
          donorID
          fundraiserID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateDonation">>
  >;

  OnUpdateDonationListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateDonation">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateDonation {
        onUpdateDonation {
          __typename
          id
          amount
          donor_name
          donor_email
          donation_date
          donorID
          fundraiserID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateDonation">>
  >;

  OnDeleteDonationListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteDonation">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteDonation {
        onDeleteDonation {
          __typename
          id
          amount
          donor_name
          donor_email
          donation_date
          donorID
          fundraiserID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteDonation">>
  >;

  OnCreateFundraiserListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateFundraiser">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateFundraiser {
        onCreateFundraiser {
          __typename
          id
          name
          description
          goal
          start_date
          end_date
          creatorID
          Donations {
            __typename
            items {
              __typename
              id
              amount
              fundraiserID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          Levels {
            __typename
            items {
              __typename
              id
              amount
              impact
              reward
              fundraiserID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          Members {
            __typename
            items {
              __typename
              id
              fundraiserID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateFundraiser">>
  >;

  OnUpdateFundraiserListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateFundraiser">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateFundraiser {
        onUpdateFundraiser {
          __typename
          id
          name
          description
          goal
          start_date
          end_date
          creatorID
          Donations {
            __typename
            items {
              __typename
              id
              amount
              donor_name
              donor_email
              donation_date
              donorID
              fundraiserID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          Levels {
            __typename
            items {
              __typename
              id
              amount
              impact
              reward
              fundraiserID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          Members {
            __typename
            items {
              __typename
              id
              name
              email_address
              last_name
              phone_number
              fundraiserID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateFundraiser">>
  >;

  OnDeleteFundraiserListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteFundraiser">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteFundraiser {
        onDeleteFundraiser {
          __typename
          id
          name
          description
          goal
          start_date
          end_date
          creatorID
          Donations {
            __typename
            items {
              __typename
              id
              amount
              donor_name
              donor_email
              donation_date
              donorID
              fundraiserID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          Levels {
            __typename
            items {
              __typename
              id
              amount
              impact
              reward
              fundraiserID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          Members {
            __typename
            items {
              __typename
              id
              name
              email_address
              last_name
              phone_number
              fundraiserID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteFundraiser">>
  >;
}
