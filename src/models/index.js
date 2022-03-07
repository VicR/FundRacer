// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Level, Member, Donation, Fundraiser, Todo } = initSchema(schema);

export {
  Level,
  Member,
  Donation,
  Fundraiser,
  Todo
};