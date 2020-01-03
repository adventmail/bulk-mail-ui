/* eslint-disable no-plusplus */

import { stringProcessor } from 'bulk-mail-cli'

const sendMails = (parent, args, context, info): string => {
  const massMail = stringProcessor('{{email|fname|jnume}}', {
    email: 'kumar@iqubex.com',
    fname: 'Kumar',
  })

  return massMail
}

export default sendMails
