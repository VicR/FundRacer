// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Level, Member, Donation, Fundraiser } = initSchema(schema);

export {
  Level,
  Member,
  Donation,
  Fundraiser
};