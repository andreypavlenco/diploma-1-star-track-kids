// app/providers/auth.server.ts
import { FindProfileDocument }       from '@/graphql/generated/output';
import {client      }                   from '@/libs/apollo-client';

export async function getProfileOnServer() {
  const { data } = await client.query({ query: FindProfileDocument });
  return data.findProfile;
}
