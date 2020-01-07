/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { PubSub } from 'graphql-yoga'

const newMail = (
  parent,
  argument,
  { pubsub }: { pubsub: PubSub }
): AsyncIterator<unknown, any, undefined> => pubsub.asyncIterator('newMail')

export default {
  subscribe: newMail,
}
