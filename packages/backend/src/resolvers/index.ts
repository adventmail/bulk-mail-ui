import exampleMutation from './mutations/exampleMutation'
import sendMails from './mutations/sendMails'

import exampleQuery from './queries/exampleQuery'

export default {
  Query: {
    exampleQuery,
  },
  Mutation: {
    exampleMutation,
    sendMails,
  },
}
