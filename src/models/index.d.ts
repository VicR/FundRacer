import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type LevelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MemberMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DonationMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FundraiserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TodoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Level {
  readonly id: string;
  readonly amount: number;
  readonly fundraiserID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Level, LevelMetaData>);
  static copyOf(source: Level, mutator: (draft: MutableModel<Level, LevelMetaData>) => MutableModel<Level, LevelMetaData> | void): Level;
}

export declare class Member {
  readonly id: string;
  readonly name?: string;
  readonly email_address: string;
  readonly fundraiserID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Member, MemberMetaData>);
  static copyOf(source: Member, mutator: (draft: MutableModel<Member, MemberMetaData>) => MutableModel<Member, MemberMetaData> | void): Member;
}

export declare class Donation {
  readonly id: string;
  readonly amount: number;
  readonly donor_name?: string;
  readonly donor_email?: string;
  readonly donation_date?: string;
  readonly fundraiserID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Donation, DonationMetaData>);
  static copyOf(source: Donation, mutator: (draft: MutableModel<Donation, DonationMetaData>) => MutableModel<Donation, DonationMetaData> | void): Donation;
}

export declare class Fundraiser {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly goal: number;
  readonly start_date: string;
  readonly end_date: string;
  readonly Donations?: (Donation | null)[];
  readonly Levels?: (Level | null)[];
  readonly Members?: (Member | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Fundraiser, FundraiserMetaData>);
  static copyOf(source: Fundraiser, mutator: (draft: MutableModel<Fundraiser, FundraiserMetaData>) => MutableModel<Fundraiser, FundraiserMetaData> | void): Fundraiser;
}

export declare class Todo {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Todo, TodoMetaData>);
  static copyOf(source: Todo, mutator: (draft: MutableModel<Todo, TodoMetaData>) => MutableModel<Todo, TodoMetaData> | void): Todo;
}